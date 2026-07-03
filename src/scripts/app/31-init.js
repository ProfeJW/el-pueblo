  /* ============== INIT ============== */
  checkTeacherMode();
  applySavedUnlocks();
  renderAvatar();
  renderAvisos();
  updateRachaWidget();
  updateRepasoBadges();
  renderCard();
  applyVosotrosPreference();
  newDrill();
  renderCountries();
  renderKnownFor();
  renderPeople();
  renderSlang();
  renderDishes();
  newFlagQuiz();
  newSiteQuiz();
  newPersonQuiz();
  newTriviaQuiz();
  newDishQuiz();
  newYearQuiz();
  renderShop();

  // Hydrate UI with loaded state
  document.getElementById('coinTotal').textContent = STATE.coins;
  renderAchievements();
  updateStats();

  // Show/hide sign-in vs avatar/coin counter based on whether the student has signed in
  refreshAuthUI();

  // Initialize router — handles deep links like #/verbos
  { const r = getRouteFromHash(); showPage(r.page, r.param); }

  // Welcome message
  const welcomeEl = document.getElementById('studentWelcome');
  if (welcomeEl) welcomeEl.textContent = STUDENT_NAME;
  if (STATE.coins > 0) {
    setTimeout(() => showToast('Welcome back, ' + STUDENT_NAME + '!', 0), 600);
  } else {
    setTimeout(() => showToast('Hi, ' + STUDENT_NAME + '!', 0), 600);
  }

  // Prime voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(s => { s.classList.add('reveal'); obs.observe(s); });

  // ============================================================================
  // ARTICLE GAMES — el/la/los/las and un/una/unos/unas, with levels
  // ----------------------------------------------------------------------------
  // Two games sharing one engine:
  //   • articles            → see a noun, tap the correct article.
  //   • articles-translate  → see "a ball", type "una pelota" (article + noun).
  // Both open a level chooser first (like Match), so students play whichever
  // they want:  L1 el/la · L2 el/la/los/las · L3 un/una · L4 un/una/unos/unas.
  //
  // Accuracy note: we ONLY use nouns that already carry an explicit definite
  // article in the deck (el/la/los/las ...). The definite answer is that literal
  // article (so "el agua" stays "el", never the naive "la"), and the indefinite
  // is mapped by FORM — el→un, la→una, los→unos, las→unas — which also handles
  // the stressed-a exception correctly ("un agua"). No noun is ever pluralized,
  // so we never invent an irregular plural.
  // ============================================================================
  const DEF_ARTICLES = ['el', 'la', 'los', 'las'];
  const DEF_TO_INDEF = { el: 'un', la: 'una', los: 'unos', las: 'unas' };

  function elpCleanGloss(back) {
    let g = String(back || '');
    g = g.split('(')[0].split('/')[0].split(/[;,]/)[0].trim();
    g = g.replace(/^(the|a|an|some)\s+/i, ''); // strip an English article so we add our own
    return g;
  }

  // Every acceptable English sense for a gloss, so the "translate to English"
  // game can grade leniently (e.g. "task / homework" → both accepted).
  function glossSenses(back) {
    return String(back || '')
      .split('(')[0]
      .split(/[\/;,]/)
      .map(s => s.replace(/["“”']/g, '').trim())
      .map(s => s.replace(/^(the|a|an|some)\s+/i, '').trim())
      .filter(Boolean);
  }

  function aOrAn(word) {
    return /^[aeiou]/i.test(String(word).trim()) ? 'an' : 'a';
  }

  let _articleNouns = null;
  function articleNounPool() {
    if (_articleNouns) return _articleNouns;
    _articleNouns = [];
    for (const k in decks) {
      const arr = decks[k];
      if (!Array.isArray(arr)) continue;
      for (const c of arr) {
        if (!c || !c.word || !c.back) continue;
        const parts = String(c.word).trim().split(/\s+/);
        const art = parts[0].toLowerCase();
        if (DEF_ARTICLES.indexOf(art) === -1) continue;
        const bare = parts.slice(1).join(' ');
        if (!bare) continue;
        _articleNouns.push({
          def: art,
          indef: DEF_TO_INDEF[art],
          plural: (art === 'los' || art === 'las'),
          bare: bare,
          gloss: elpCleanGloss(c.back),
          senses: glossSenses(c.back)
        });
      }
    }
    return _articleNouns;
  }

  function elpPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function articleRound(level) {
    const pool = articleNounPool();
    let options, candidates, indef;
    if (level === 2)      { options = ['el', 'la', 'los', 'las'];          candidates = pool;                       indef = false; }
    else if (level === 3) { options = ['un', 'una'];                       candidates = pool.filter(n => !n.plural); indef = true;  }
    else if (level === 4) { options = ['un', 'una', 'unos', 'unas'];       candidates = pool;                       indef = true;  }
    else                  { options = ['el', 'la'];                        candidates = pool.filter(n => !n.plural); indef = false; }
    if (!candidates.length) candidates = pool;
    const n = elpPick(candidates);
    const answer = indef ? n.indef : n.def;
    return {
      promptLabel: indef ? 'Which article? ( a / some … )' : 'Which article? ( the … )',
      promptDisplay: '<span style="font-size:36px;font-family:\'DM Serif Display\',serif;">' + n.bare + '</span>'
        + (n.gloss ? '<div style="margin-top:10px;font-size:14px;color:var(--ink-soft);">“' + n.gloss + '”</div>' : ''),
      answer: answer,
      validAnswers: [answer],
      choices: options
    };
  }

  function articleTranslateRound(level) {
    const pool = articleNounPool().filter(n => n.gloss);
    let candidates, indef;
    if (level === 2)      { candidates = pool;                       indef = false; }
    else if (level === 3) { candidates = pool.filter(n => !n.plural); indef = true;  }
    else if (level === 4) { candidates = pool;                       indef = true;  }
    else                  { candidates = pool.filter(n => !n.plural); indef = false; }
    if (!candidates.length) candidates = pool;
    const n = elpPick(candidates);
    let english, answer;
    if (indef) {
      english = (n.plural ? 'some ' : 'a ') + n.gloss;
      answer = n.indef + ' ' + n.bare;
    } else {
      english = 'the ' + n.gloss;
      answer = n.def + ' ' + n.bare;
    }
    return {
      promptLabel: 'Translate to Spanish — include the article',
      promptDisplay: '<span style="font-size:30px;font-family:\'DM Serif Display\',serif;">' + english + '</span>',
      answer: answer,
      validAnswers: [answer],
      hint: indef ? 'e.g., una casa' : 'e.g., la casa'
    };
  }

  // Reverse of the above: show the Spanish phrase, type the English. Graded
  // leniently — every sense in the gloss counts, "a"/"an" are both accepted,
  // and a plural takes either "some books" or just "books".
  function articleTranslateEnRound(level) {
    const pool = articleNounPool().filter(n => n.senses && n.senses.length);
    let candidates, indef;
    if (level === 2)      { candidates = pool;                        indef = false; }
    else if (level === 3) { candidates = pool.filter(n => !n.plural); indef = true;  }
    else if (level === 4) { candidates = pool;                        indef = true;  }
    else                  { candidates = pool.filter(n => !n.plural); indef = false; }
    if (!candidates.length) candidates = pool;
    const n = elpPick(candidates);
    const spanish = (indef ? n.indef : n.def) + ' ' + n.bare;
    const valid = [];
    let display = '';
    n.senses.forEach((s, i) => {
      if (indef && n.plural) {
        valid.push('some ' + s, s);            // bare plural is a fine translation of "unos X"
        if (i === 0) display = 'some ' + s;
      } else if (indef) {
        valid.push('a ' + s, 'an ' + s);       // a/an is sound-based & fuzzy — accept both
        if (i === 0) display = aOrAn(s) + ' ' + s;
      } else {
        valid.push('the ' + s);
        if (i === 0) display = 'the ' + s;
      }
    });
    return {
      promptLabel: 'Translate to English — include the article',
      promptDisplay: '<span style="font-size:34px;font-family:\'DM Serif Display\',serif;">' + spanish + '</span>',
      answer: display,
      validAnswers: valid,
      hint: indef ? (n.plural ? 'e.g., some books' : 'e.g., a house') : 'e.g., the house'
    };
  }

  GAMES['articles'] = {
    title: 'El · la · <em>los · las</em>',
    icon: '🏷️',
    maxReward: 30,
    generate: function () { return articleRound((gameState && gameState.level) || 1); }
  };
  GAMES['articles-translate'] = {
    title: 'Articles <em>translate</em>',
    icon: '🔁',
    maxReward: 40,
    generate: function () { return articleTranslateRound((gameState && gameState.level) || 1); }
  };
  GAMES['articles-translate-en'] = {
    title: 'Articles <em>→ English</em>',
    icon: '🔀',
    maxReward: 40,
    generate: function () { return articleTranslateEnRound((gameState && gameState.level) || 1); }
  };

  const ARTICLE_LEVELS = [
    { n: 1, sub: 'el · la',                desc: 'Singular “the” — masculine vs. feminine.' },
    { n: 2, sub: 'el · la · los · las',    desc: 'Add plurals — singular & plural “the”.' },
    { n: 3, sub: 'un · una',               desc: 'Singular “a / an”.' },
    { n: 4, sub: 'un · una · unos · unas', desc: '“a” and “some” — singular & plural.' }
  ];

  const ARTICLE_GAME_INFO = {
    'articles': {
      title: 'El · la · <em style="color:var(--rojo);font-style:italic;">los · las</em>',
      blurb: 'Pick a level, then tap the correct article for each noun. 10 rounds.'
    },
    'articles-translate': {
      title: 'Articles <em style="color:var(--rojo);font-style:italic;">translate</em>',
      blurb: 'Pick a level, then translate each phrase with its article — “a ball” → “una pelota”. 10 rounds.'
    },
    'articles-translate-en': {
      title: 'Articles <em style="color:var(--rojo);font-style:italic;">→ English</em>',
      blurb: 'Pick a level, then translate the Spanish into English — “una pelota” → “a ball”. 10 rounds.'
    }
  };

  function renderArticleLevelPicker(gameId) {
    const container = document.getElementById('game-detail-content');
    if (!container) return;
    const info = ARTICLE_GAME_INFO[gameId] || ARTICLE_GAME_INFO['articles'];
    const title = info.title;
    const blurb = info.blurb;
    container.innerHTML =
      '<a href="#/juegos" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to games</a>'
      + '<div class="match-intro">'
      +   '<h2 style="font-family:\'DM Serif Display\',serif;font-size:32px;font-weight:400;margin-bottom:8px;">' + title + '</h2>'
      +   '<p style="color:var(--ink-soft);font-size:15px;margin-bottom:24px;">' + blurb + '</p>'
      +   '<div class="match-deck-grid">'
      +     ARTICLE_LEVELS.map(function (lv) {
              return '<button class="match-deck-btn" onclick="beginArticleGame(\'' + gameId + '\',' + lv.n + ')">'
                +      '<span class="mdb-label">Level ' + lv.n + ' · ' + lv.sub + '</span>'
                +      '<span class="mdb-best" style="text-transform:none;letter-spacing:0;">' + lv.desc + '</span>'
                +    '</button>';
            }).join('')
      +   '</div>'
      + '</div>';
  }

  function beginArticleGame(gameId, level) {
    if (!GAMES[gameId]) return;
    gameState = {
      gameId: gameId,
      level: level,
      round: 0,
      totalRounds: 10,
      score: 0,
      current: null,
      history: [],
      isSprint: false,
      sprintStart: null,
      sprintEnd: null,
      _answered: false
    };
    renderGameRound();
  }

  // ============================================================================
  // SITE SEARCH — the home-page "find anything" box
  // ----------------------------------------------------------------------------
  // Indexes (live, no precompute): site sections, every game card in the hub
  // (including the ones injected by companion files), vocab decks, individual
  // vocab words, and the 21 Historia countries. Each result routes via the hash
  // router, or — for words/decks — opens that deck in the flashcards view.
  // ============================================================================
  const SEARCH_SECTIONS = [
    { icon: '🃏', label: 'Flashcards (Vocabulary)', hash: '#/vocabulario', kw: 'vocab vocabulary flashcards words deck decks cards study' },
    { icon: '🔄', label: 'Verb practice',           hash: '#/verbos',      kw: 'verbs verbos conjugation conjugate tenses drill preterite imperfect subjunctive' },
    { icon: '📘', label: 'Grammar lessons',         hash: '#/lecciones',   kw: 'lessons lecciones grammar spanish 1 2 3 notes' },
    { icon: '🎮', label: 'Practice games',          hash: '#/juegos',      kw: 'games juegos play practice mini games' },
    { icon: '📚', label: 'Guided reading',          hash: '#/lectura',     kw: 'reading lectura passages comprehension' },
    { icon: '🎧', label: 'Listening',               hash: '#/escucha',     kw: 'listening escucha audio dictation comprehension' },
    { icon: '✍️', label: 'Writing topics',          hash: '#/escritura',   kw: 'writing escritura prompts compositions' },
    { icon: '🎙️', label: 'Speaking topics',         hash: '#/voces',       kw: 'speaking voces record oral pronunciation' },
    { icon: '🌎', label: 'Mundo — culture & geography', hash: '#/mundo',   kw: 'mundo culture cultura geography geografia countries flags world capitals' },
    { icon: '📜', label: 'Historia',                hash: '#/historia',    kw: 'historia history countries events timeline' },
    { icon: '🏛️', label: 'Civilizaciones antiguas', hash: '#/civilizaciones', kw: 'civilizations ancient maya inca aztec mexica olmec ruins pyramids empire map timeline civilizaciones' },
    { icon: '🔗', label: 'Student resources',       hash: '#/recursos',    kw: 'resources recursos links ixl classroom progressbook translator' },
    { icon: '★',  label: 'Rewards & shop (Lucas)',  hash: '#/lucas',       kw: 'lucas rewards shop coins store achievements badges' }
  ];

  function searchNorm(s) {
    return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
  }
  function searchEscape(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }
  function searchFirstSense(back) {
    return String(back || '').split('(')[0].split('/')[0].split(/[;,]/)[0].trim();
  }

  // Historia event vocab → which countries' timelines use each phrase. Built
  // once Historia is loaded; returns null until then (cross-link degrades
  // gracefully and fills in on a later keystroke).
  let _historiaVocabIndex = null;
  function historiaVocabIndex() {
    if (!HISTORIA || !HISTORIA.length) return null;
    if (_historiaVocabIndex) return _historiaVocabIndex;
    _historiaVocabIndex = [];
    HISTORIA.forEach(function (c) {
      const seen = {};
      (c.events || []).forEach(function (ev) {
        (ev.vocab || []).forEach(function (v) {
          const key = searchNorm(v);
          if (!key || seen[key]) return;
          seen[key] = true;
          _historiaVocabIndex.push({ key: key, phrase: v, code: c.country, name: c.countryName });
        });
      });
    });
    return _historiaVocabIndex;
  }

  // Pull in historia.js in the background so the cross-link has data. Cached by
  // the loader; we just clear our derived index so it rebuilds once data lands.
  function primeHistoriaForSearch() {
    try {
      if (typeof loadHistoriaModule === 'function') {
        loadHistoriaModule().then(function () { _historiaVocabIndex = null; }).catch(function () {});
      }
    } catch (e) { /* non-fatal */ }
  }

  // Relevance: exact match first, then prefix, then substring (Spanish or gloss).
  // Article-aware: also tests the bare noun so "casa" ranks "la casa" as exact.
  function rankScore(q, display, gloss) {
    const d = searchNorm(display), g = searchNorm(gloss || '');
    const db = d.replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '');
    if (d === q || g === q || db === q) return 4;
    if (d.indexOf(q) === 0 || db.indexOf(q) === 0 || g.indexOf(q) === 0) return 3;
    if (d.indexOf(q) !== -1) return 2;
    if (g.indexOf(q) !== -1) return 1;
    return 0;
  }

  // Deck key → friendly label, read once from the flashcard pills (falling back
  // to the Match-game labels, then the raw key).
  let _deckLabels = null;
  function deckLabels() {
    if (_deckLabels) return _deckLabels;
    _deckLabels = {};
    document.querySelectorAll('#vocabulario .pill').forEach(function (p) {
      const m = (p.getAttribute('onclick') || '').match(/loadDeck\('([^']+)'/);
      if (m) _deckLabels[m[1]] = (p.textContent || '').trim();
    });
    for (const k in decks) {
      if (!_deckLabels[k]) _deckLabels[k] = (typeof MATCH_DECK_LABELS !== 'undefined' && MATCH_DECK_LABELS[k]) || k;
    }
    return _deckLabels;
  }

  // Open a specific deck (and optionally a specific card) in the flashcards view.
  function openDeckByKey(key, idx) {
    if (!decks[key]) return;
    currentDeck = key;
    cardIdx = (typeof idx === 'number' && idx >= 0 && idx < decks[key].length) ? idx : 0;
    closeSiteSearch();
    if (window.location.hash !== '#/vocabulario') window.location.hash = '#/vocabulario';
    setTimeout(function () {
      document.querySelectorAll('#vocabulario .pill').forEach(function (p) {
        const m = (p.getAttribute('onclick') || '').match(/loadDeck\('([^']+)'/);
        p.classList.toggle('active', !!(m && m[1] === key));
      });
      const nameEl = document.getElementById('deck-name');
      if (nameEl) nameEl.textContent = deckLabels()[key] || key;
      if (typeof renderCard === 'function') renderCard();
    }, 30);
  }

  function siteSearchGo(hash) {
    closeSiteSearch();
    if (window.location.hash === hash) {
      const r = getRouteFromHash();
      showPage(r.page, r.param);
    } else {
      window.location.hash = hash;
    }
  }

  function closeSiteSearch() {
    const box = document.getElementById('siteSearchResults');
    if (box) box.style.display = 'none';
    const inp = document.getElementById('siteSearchInput');
    if (inp) inp.value = '';
  }

  function ssRow(icon, labelHtml, sub, onclick) {
    return '<button type="button" class="ss-row" onclick="' + onclick + '">' +
      '<span class="ss-icon">' + icon + '</span>' +
      '<span class="ss-text"><span class="ss-label">' + labelHtml + '</span>' +
      (sub ? '<span class="ss-sub">' + searchEscape(sub) + '</span>' : '') +
      '</span></button>';
  }

  function runSiteSearch(raw) {
    const box = document.getElementById('siteSearchResults');
    if (!box) return;
    const q = searchNorm(raw);
    if (q.length < 2) { box.innerHTML = ''; box.style.display = 'none'; return; }
    primeHistoriaForSearch(); // load historia.js in the background for cross-links

    const groups = [];

    // Sections
    const secRows = SEARCH_SECTIONS
      .filter(s => searchNorm(s.label).indexOf(q) !== -1 || searchNorm(s.kw).indexOf(q) !== -1)
      .map(s => ssRow(s.icon, searchEscape(s.label), '', "siteSearchGo('" + s.hash + "')"));
    if (secRows.length) groups.push(['Sections', secRows]);

    // Games — read straight from the hub so injected games are included
    const gameRows = [];
    document.querySelectorAll('#gameGrid a.game-card').forEach(function (a) {
      const h3 = a.querySelector('h3');
      const title = h3 ? (h3.textContent || '').trim() : '';
      const href = a.getAttribute('href') || '';
      if (title && href && searchNorm(title).indexOf(q) !== -1) {
        gameRows.push(ssRow('🎮', searchEscape(title), 'Game', "siteSearchGo('" + href + "')"));
      }
    });
    if (gameRows.length) groups.push(['Games', gameRows.slice(0, 8)]);

    // Vocabulary decks
    const dl = deckLabels();
    const deckRows = [];
    Object.keys(dl).forEach(function (k) {
      if (!decks[k]) return;
      if (searchNorm(dl[k]).indexOf(q) !== -1 || searchNorm(k).indexOf(q) !== -1) {
        deckRows.push(ssRow('🗂️', searchEscape(dl[k]), 'Flashcard deck · ' + decks[k].length + ' cards', "openDeckByKey('" + k + "')"));
      }
    });
    if (deckRows.length) groups.push(['Vocabulary decks', deckRows.slice(0, 8)]);

    // Historia countries
    const countryRows = (typeof HISTORIA_INDEX !== 'undefined' ? HISTORIA_INDEX : [])
      .filter(c => searchNorm(c.name).indexOf(q) !== -1)
      .map(c => ssRow('📜', searchEscape(c.name), 'Historia · ' + c.events + ' events', "siteSearchGo('#/historia/" + c.code.toLowerCase() + "')"));
    if (countryRows.length) groups.push(['Historia (countries)', countryRows]);

    // Words — consolidated: ONE row per word, listing every place it appears
    // (each deck + each Historia timeline) as clickable chips. Ranked so exact
    // matches come first, then the list is capped — so a term in many places
    // shows its best hits with all their locations rather than 12 stray rows.
    const wordMap = {}; // normKey -> entry
    function ssEntry(key, display, gloss) {
      let e = wordMap[key];
      if (!e) { e = wordMap[key] = { display: display, gloss: gloss || '', decks: {}, deckOrder: [], countries: {}, countryOrder: [] }; }
      else if (!e.gloss && gloss) e.gloss = gloss;
      return e;
    }
    for (const k of Object.keys(decks)) {
      const arr = decks[k];
      if (!Array.isArray(arr)) continue;
      for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (!c || !c.word) continue;
        if (searchNorm(c.word).indexOf(q) !== -1 || searchNorm(c.back).indexOf(q) !== -1) {
          const e = ssEntry(searchNorm(c.word), c.word, searchFirstSense(c.back));
          if (!(k in e.decks)) { e.decks[k] = i; e.deckOrder.push(k); }
        }
      }
    }
    const hvi = historiaVocabIndex();
    if (hvi) {
      for (const v of hvi) {
        if (v.key.indexOf(q) !== -1) {
          const e = ssEntry(v.key, v.phrase, '');
          if (!(v.code in e.countries)) { e.countries[v.code] = v.name; e.countryOrder.push(v.code); }
        }
      }
    }
    const wordEntries = Object.keys(wordMap).map(function (key) {
      wordMap[key].score = rankScore(q, wordMap[key].display, wordMap[key].gloss);
      return wordMap[key];
    }).sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      if (a.display.length !== b.display.length) return a.display.length - b.display.length;
      return a.display.localeCompare(b.display);
    }).slice(0, 15);

    if (wordEntries.length) {
      const wordRows = wordEntries.map(function (e) {
        const chips = [];
        e.deckOrder.forEach(function (k) {
          chips.push('<button type="button" class="ss-chip" onclick="openDeckByKey(\'' + k + '\',' + e.decks[k] + ')">🗂️ ' + searchEscape(dl[k] || k) + '</button>');
        });
        e.countryOrder.forEach(function (code) {
          chips.push('<button type="button" class="ss-chip" onclick="siteSearchGo(\'#/historia/' + code.toLowerCase() + '\')">📜 ' + searchEscape(e.countries[code]) + '</button>');
        });
        const labelHtml = searchEscape(e.display) + (e.gloss ? ' <span>— ' + searchEscape(e.gloss) + '</span>' : '');
        return '<div class="ss-word">' +
          '<div class="ss-word-head"><span class="ss-icon">🔤</span><span class="ss-label">' + labelHtml + '</span></div>' +
          '<div class="ss-chips">' + chips.join('') + '</div>' +
          '</div>';
      });
      groups.push(['Words', wordRows]);
    }

    if (!groups.length) {
      box.innerHTML = '<div style="padding:14px 16px;color:var(--ink-soft);font-size:14px;">No matches for “' + searchEscape(raw) + '”.</div>';
      box.style.display = 'block';
      return;
    }
    box.innerHTML = groups.map(g => '<div class="ss-group-label">' + g[0] + '</div>' + g[1].join('')).join('');
    box.style.display = 'block';
  }

  // Close the results when clicking outside the search box.
  document.addEventListener('click', function (e) {
    const wrap = document.querySelector('.site-search');
    const box = document.getElementById('siteSearchResults');
    if (!wrap || !box) return;
    if (!wrap.contains(e.target)) box.style.display = 'none';
  });

  // Bridge for external modules (e.g. practice-games.js) so we can keep growing
  // content without pushing index.html past GitHub's single-file size limit.
  window.ELP = { decks, GAMES };
