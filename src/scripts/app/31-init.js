  /* ============== INIT ============== */
  checkTeacherMode();
  applySavedUnlocks();
  renderAvatar();
  renderAvisos();
  updateRachaWidget();
  updateRepasoBadges();
  renderCard();
  applyVosotrosPreference();
  applyDrillDifficultyPreference();
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

  const PLURAL_LEVELS = [
    { n: 1, sub: 'regular + s',          desc: 'Vowel-ending nouns — just add -s.' },
    { n: 2, sub: '+ es',                 desc: 'Consonant-ending nouns — add -es.' },
    { n: 3, sub: '-z → -ces · accents',  desc: 'Spelling changes, accent shifts, no-change words.' },
    { n: 4, sub: 'un · una · el agua',   desc: 'Indefinite articles and the “el agua → las aguas” case.' }
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
    },
    'plurals': {
      title: 'Singular ↔ <em style="color:var(--rojo);font-style:italic;">plural</em>',
      blurb: 'Pick a level, then turn each noun singular↔plural — article and ending. 10 rounds.'
    }
  };

  // Shared level picker for the article games and the plurals game — each sets
  // gameState.level, which their generate() reads.
  function renderArticleLevelPicker(gameId) {
    const container = document.getElementById('game-detail-content');
    if (!container) return;
    const info = ARTICLE_GAME_INFO[gameId] || ARTICLE_GAME_INFO['articles'];
    const levels = gameId === 'plurals' ? PLURAL_LEVELS : ARTICLE_LEVELS;
    const title = info.title;
    const blurb = info.blurb;
    container.innerHTML =
      '<a href="#/juegos" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to games</a>'
      + '<div class="match-intro">'
      +   '<h2 style="font-family:\'DM Serif Display\',serif;font-size:32px;font-weight:400;margin-bottom:8px;">' + title + '</h2>'
      +   '<p style="color:var(--ink-soft);font-size:15px;margin-bottom:24px;">' + blurb + '</p>'
      +   '<div class="match-deck-grid">'
      +     levels.map(function (lv) {
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
  // A real full-site index, built once (lazily, on the first keystroke) from
  // the same data every page renders from: site sections, every grammar and
  // Lingüística lesson (title + every section body), verb drill modes/groups
  // and the verb list, readings (full text), listening clips and stories,
  // writing & speaking topics, Mundo (countries, known-for, people, deportes,
  // slang, dishes, arte), Civilizaciones, Historia (countries now, every event
  // once historia.js has loaded), games, student resources, vocab decks and
  // every word, plus a catch-all crawl of the headings on every page.
  //
  // Multi-word queries match when every word appears somewhere in an entry;
  // title hits rank above summary hits, which rank above body hits, and body
  // hits show a snippet so you can see WHY something matched. If nothing on
  // the site matches, the box offers to search the web instead.
  // ============================================================================
  const SEARCH_SECTIONS = [
    { icon: '🃏', label: 'Flashcards (Vocabulary)', hash: '#/vocabulario', kw: 'vocab vocabulary flashcards words deck decks cards study' },
    { icon: '🔄', label: 'Verb practice',           hash: '#/verbos',      kw: 'verbs verbos conjugation conjugate tenses drill preterite imperfect subjunctive commands' },
    { icon: '📘', label: 'Grammar lessons',         hash: '#/lecciones',   kw: 'lessons lecciones grammar spanish 1 2 3 notes' },
    { icon: '🔬', label: 'Lingüística',             hash: '#/linguistica', kw: 'linguistics linguistica phonology dialects sounds accents history of spanish' },
    { icon: '🧩', label: 'Adquisición — mixed-group activities', hash: '#/adquisicion', kw: 'adquisicion acquisition heritage speakers HL L2 activities El sketch de actualidad Entrada estructurada Gramática en contexto Mapa de variación léxica Nuestros caminos ¿A quién contratamos? ¿El mejor español?' },
    { icon: '🎮', label: 'Practice games',          hash: '#/juegos',      kw: 'games juegos play practice mini games' },
    { icon: '🖌️', label: 'Dibújalo — draw the word', hash: '#/dibujar',    kw: 'draw drawing dibujar dibujalo picture sketch' },
    { icon: '🔤', label: 'Abecedario',              hash: '#/abecedario',  kw: 'alphabet abecedario letters sounds pronunciation' },
    { icon: '🧠', label: 'Repaso — spaced repetition', hash: '#/repaso',   kw: 'repaso review spaced repetition due cards' },
    { icon: '🔥', label: 'La Racha — daily streak', hash: '#/racha',       kw: 'racha streak daily practice' },
    { icon: '📚', label: 'Guided reading',          hash: '#/lectura',     kw: 'reading lectura passages stories comprehension' },
    { icon: '🎧', label: 'Listening',               hash: '#/escucha',     kw: 'listening escucha audio dictation comprehension fill in the blank' },
    { icon: '✍️', label: 'Writing topics',          hash: '#/escritura',   kw: 'writing escritura prompts compositions' },
    { icon: '🎙️', label: 'Speaking topics',         hash: '#/voces',       kw: 'speaking voces record oral pronunciation' },
    { icon: '🌎', label: 'Mundo — culture & geography', hash: '#/mundo',   kw: 'mundo culture cultura geography geografia countries flags world capitals' },
    { icon: '🌍', label: 'Mundo · Known for',       hash: '#/mundo/known-for', kw: 'known for famous country identity' },
    { icon: '🎭', label: 'Mundo · People to know',  hash: '#/mundo/people', kw: 'people famous personas celebrities figures' },
    { icon: '⚽', label: 'Mundo · Deportes',        hash: '#/mundo/deportes', kw: 'sports deportes futbol soccer baseball athletes stars' },
    { icon: '💬', label: 'Mundo · Slang',           hash: '#/mundo/slang', kw: 'slang expressions everyday jerga modismos' },
    { icon: '🌮', label: 'Mundo · Dishes',          hash: '#/mundo/dishes', kw: 'food dishes comida platos recipes cuisine' },
    { icon: '🎨', label: 'Mundo · Arte',            hash: '#/mundo/arte',  kw: 'art arte artists painters muralists' },
    { icon: '🚩', label: 'Flag Quiz',               hash: '#/mundo/quiz/flags', kw: 'flag quiz banderas' },
    { icon: '🏛️', label: 'Place Quiz',              hash: '#/mundo/quiz/sites', kw: 'place site landmark quiz' },
    { icon: '🎭', label: 'Person Quiz',             hash: '#/mundo/quiz/people', kw: 'person people quiz' },
    { icon: '📜', label: 'Historia Trivia',         hash: '#/mundo/quiz/historia', kw: 'historia trivia history quiz' },
    { icon: '🌮', label: 'Dish Quiz',               hash: '#/mundo/quiz/dishes', kw: 'dish food quiz' },
    { icon: '⏳', label: 'Which came first?',       hash: '#/mundo/quiz/years', kw: 'which came first years timeline quiz' },
    { icon: '🎨', label: 'Art Quiz',                hash: '#/mundo/quiz/arte', kw: 'art quiz' },
    { icon: '🗺', label: 'Map Quiz',                hash: '#/mundo/quiz/map', kw: 'map quiz countries geography' },
    { icon: '🏛️', label: 'Capitals Quiz',           hash: '#/mundo/quiz/capitales', kw: 'capitals capitales quiz' },
    { icon: '📍', label: 'Where are they from?',    hash: '#/mundo/quiz/origin', kw: 'origin where are they from quiz' },
    { icon: '📜', label: 'Historia',                hash: '#/historia',    kw: 'historia history countries events timeline' },
    { icon: '🏛️', label: 'Civilizaciones antiguas', hash: '#/civilizaciones', kw: 'civilizations ancient pre-columbian maya inca aztec mexica olmec ruins pyramids empire map timeline civilizaciones' },
    { icon: '📣', label: 'From your teacher',       hash: '#/avisos',      kw: 'announcements avisos teacher notes news' },
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

  // Length-preserving accent fold (á→a, ñ→n, curly quotes→straight) so an index
  // into the folded text is the same index into the readable text — that is what
  // lets body matches show a snippet of the real sentence.
  const SS_FOLD = { 'á':'a','à':'a','ä':'a','â':'a','ã':'a','é':'e','è':'e','ë':'e','ê':'e','í':'i','ì':'i','ï':'i','î':'i','ó':'o','ò':'o','ö':'o','ô':'o','õ':'o','ú':'u','ù':'u','ü':'u','û':'u','ñ':'n','ç':'c','’':"'",'‘':"'",'“':'"','”':'"','—':'-','–':'-' };
  function ssFold(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[^\x00-\x7f]/g, function (ch) { return SS_FOLD[ch] || ch; });
  }
  // HTML → readable text (lesson bodies, titles, etc. carry <em>/<strong>/<br>).
  function ssPlain(html) {
    return String(html == null ? '' : html)
      .replace(/<br\s*\/?>/gi, ' ').replace(/<\/(p|li|div|h[1-6])>/gi, ' ').replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ').trim();
  }
  // Collect every string inside a nested data value (arrays / objects), skipping
  // fields that are plumbing rather than content (image URLs, ids, map shapes…).
  const SS_SKIP_KEYS = { img: 1, url: 1, href: 1, src: 1, color: 1, shape: 1, cx: 1, cy: 1, rx: 1, ry: 1, rot: 1, id: 1, reward: 1, sources: 1, pdfs: 1, links: 1, date: 1, correct: 1, code: 1 };
  function ssFlatten(v, depth) {
    depth = depth || 0;
    if (v == null || depth > 5) return '';
    if (typeof v === 'string') return v + ' ';
    if (typeof v === 'number') return v + ' ';
    if (Array.isArray(v)) { let s = ''; for (let i = 0; i < v.length; i++) s += ssFlatten(v[i], depth + 1); return s; }
    if (typeof v === 'object') { let s = ''; for (const k in v) { if (!SS_SKIP_KEYS[k] && Object.prototype.hasOwnProperty.call(v, k)) s += ssFlatten(v[k], depth + 1); } return s; }
    return '';
  }

  // Result groups, in display order (ties in relevance keep this order).
  const SS_GROUPS = [
    ['sections',  'Sections', 6],
    ['lessons',   'Lessons', 6],
    ['verbs',     'Verb practice', 6],
    ['games',     'Games', 6],
    ['decks',     'Vocabulary decks', 6],
    ['readings',  'Reading', 5],
    ['listening', 'Listening', 5],
    ['topics',    'Writing & speaking topics', 5],
    ['mundo',     'Mundo · countries', 5],
    ['culture',   'Mundo · culture', 6],
    ['civs',      'Civilizaciones antiguas', 4],
    ['historia',  'Historia', 6],
    ['resources', 'Student resources', 5],
    ['pages',     'Elsewhere on the site', 4]
  ];

  // The index: one flat array of entries. Each entry is
  //   { g: group key, icon, label: readable title, sub: readable context line,
  //     t: folded title, m: folded summary/tags, b: readable body, bf: folded body,
  //     go: function that opens it }
  let _ssIndex = null, _ssIndexKey = '', _ssRendered = null; // _ssRendered: the index the visible rows were numbered against
  function ssEntry(list, g, icon, label, sub, meta, body, go) {
    label = ssPlain(label); if (!label) return;
    const b = ssPlain(body);
    list.push({ g: g, icon: icon, label: label, sub: ssPlain(sub), t: ssFold(label), m: ssFold(ssPlain(meta)), b: b, bf: ssFold(b), go: go });
  }
  function ssCountryName(code) {
    code = String(code || '').toUpperCase();
    if (typeof COUNTRIES !== 'undefined') { const c = COUNTRIES.find(x => x.code === code); if (c) return c.name; }
    if (typeof HISTORIA_INDEX !== 'undefined') { const h = HISTORIA_INDEX.find(x => x.code === code); if (h) return h.name; }
    return code;
  }
  function ssPageHash(page) {
    if (page === 'home') return '#/';
    if (page.indexOf('mundo-quiz-') === 0) return '#/mundo/quiz/' + page.slice(11);
    if (page.indexOf('mundo-') === 0) return '#/mundo/' + page.slice(6);
    return '#/' + page;
  }
  const SS_DYNAMIC_PAGES = { lesson: 1, reading: 1, topic: 1, game: 1, 'historia-country': 1 };

  function ssHistoriaLoaded() { return !!(typeof HISTORIA !== 'undefined' && HISTORIA && HISTORIA.length); }

  function buildSiteSearchIndex() {
    const gameCards = document.querySelectorAll('#gameGrid a.game-card').length;
    const key = gameCards + ':' + (ssHistoriaLoaded() ? 1 : 0);
    if (_ssIndex && _ssIndexKey === key) return _ssIndex;
    const L = [];
    const goHash = h => function () { siteSearchGo(h); };

    // Sections
    SEARCH_SECTIONS.forEach(s => ssEntry(L, 'sections', s.icon, s.label, '', s.kw, '', goHash(s.hash)));

    // Lessons (grammar + Lingüística): title, tag, summary, every section, quiz questions
    if (typeof LESSONS !== 'undefined') {
      LESSONS.forEach(l => {
        const num = l.num || l.number;
        const isLing = l.level === 'ling';
        const sub = (isLing ? 'Lingüística' : 'Lesson ' + (num || '')) + (l.tag ? ' · ' + ssPlain(l.tag).replace(/^Lingüística · /, '') : '');
        const body = ssFlatten(l.sections) + ' ' + ssFlatten((l.quiz || []).map(q => q && q.q));
        ssEntry(L, 'lessons', isLing ? '🔬' : '📘', l.title, sub, (l.tag || '') + ' ' + (l.summary || '') + ' lesson ' + (num || ''), body, goHash('#/lesson/' + l.id));
      });
    }

    // Verb practice: every drill mode and verb group (read from the pickers, so
    // they stay in sync), plus the verb list itself.
    document.querySelectorAll('#drill-tense-picker .pill, #drill-group-picker .pill').forEach(p => {
      const oc = p.getAttribute('onclick') || '';
      const text = (p.textContent || '').trim();
      if (!text || !oc) return;
      const isGroup = oc.indexOf('setDrillGroup') === 0;
      ssEntry(L, 'verbs', '🔄', text, isGroup ? 'Verb practice · verb group' : 'Verb practice · drill mode',
        isGroup ? 'verbs drill group conjugation ' + (/stem/i.test(text) ? 'stem changing stem-changers boot verbs cambio de raíz' : '') : 'verbs drill mode practice conjugation',
        '', function () { ssOpenDrillPill(oc); });
    });
    if (typeof verbs !== 'undefined') {
      verbs.forEach(v => {
        if (!v || !v.inf) return;
        const pill = v.group ? "setDrillGroup('" + v.group + "', this)" : '';
        ssEntry(L, 'verbs', '🔄', v.inf, 'Verb · ' + ssPlain(v.meaning || ''), (v.meaning || '') + ' ' + (v.group || ''), ssFlatten(v.conj),
          pill ? function () { ssOpenDrillPill(pill); } : goHash('#/verbos'));
      });
    }

    // Games — read straight from the hub so injected companion games are included
    document.querySelectorAll('#gameGrid a.game-card').forEach(a => {
      const h3 = a.querySelector('h3'), p = a.querySelector('p');
      const href = a.getAttribute('href') || '';
      if (h3 && href) ssEntry(L, 'games', '🎮', h3.textContent, 'Game', p ? p.textContent : '', '', goHash(href));
    });

    // Vocabulary decks
    const dl = deckLabels();
    Object.keys(dl).forEach(k => {
      if (!decks[k]) return;
      ssEntry(L, 'decks', '🗂️', dl[k], 'Flashcard deck · ' + decks[k].length + ' cards', k.replace(/[-_]/g, ' '), '', function () { openDeckByKey(k); });
    });

    // Reading library — full text
    if (typeof READINGS !== 'undefined') {
      READINGS.forEach(r => {
        if (!r || !r.id) return;
        const sub = 'Reading · ' + (r.level || '') + (r.attribution ? ' · ' + ssPlain(r.attribution) : '');
        ssEntry(L, 'readings', '📚', r.title, sub, (r.author || '') + ' ' + (r.year || '') + ' ' + (r.preview || ''), ssFlatten(r.text) + ' ' + ssFlatten(r.questions), goHash('#/reading/' + r.id));
      });
    }

    // Listening — comprehension stories, dictation clips, fill-in-the-blank clips
    const goListen = mode => function () { ssOpenListening(mode); };
    if (typeof COMPREHENSION_STORIES !== 'undefined') {
      COMPREHENSION_STORIES.forEach(s => ssEntry(L, 'listening', '🎧', s.title, 'Listening · comprehension story' + (s.tag ? ' · ' + s.tag : ''), s.summary || '', ssFlatten(s.audio) + ' ' + ssFlatten(s.questions), goListen('comprehension')));
    }
    if (typeof DICTATION_CLIPS !== 'undefined') {
      Object.keys(DICTATION_CLIPS).forEach(level => {
        (DICTATION_CLIPS[level] || []).forEach(c => ssEntry(L, 'listening', '📝', c.text, 'Listening · dictation · ' + level + (c.en ? ' · ' + c.en : ''), c.en || '', '', goListen('dictation')));
      });
    }
    if (typeof FILL_BLANK_CLIPS !== 'undefined') {
      FILL_BLANK_CLIPS.forEach(c => ssEntry(L, 'listening', '🔠', c.audio, 'Listening · fill in the blank' + (c.en ? ' · ' + c.en : ''), c.en || '', '', goListen('fillblank')));
    }

    // Writing & speaking topics
    const topicEntry = (t, kind, icon) => {
      if (!t || !t.id) return;
      ssEntry(L, 'topics', icon, t.title, kind + ' topic · ' + (t.level || '') + (t.category ? ' · ' + t.category : ''), t.category || '', (t.body || '') + ' ' + ssFlatten(t.tips), goHash('#/topic/' + t.id));
    };
    if (typeof WRITING_TOPICS !== 'undefined') WRITING_TOPICS.forEach(t => topicEntry(t, 'Writing', '✍️'));
    if (typeof SPEAKING_TOPICS !== 'undefined') SPEAKING_TOPICS.forEach(t => topicEntry(t, 'Speaking', '🎙️'));

    // Mundo — countries (opens the country card), then the culture subpages
    if (typeof COUNTRIES !== 'undefined') {
      COUNTRIES.forEach(c => {
        const code = c.code;
        ssEntry(L, 'mundo', (typeof FLAGS !== 'undefined' && FLAGS[code] && FLAGS[code].length < 8) ? FLAGS[code] : '🌎', c.name,
          'Mundo · ' + (c.capital ? 'capital: ' + c.capital : 'country'),
          (c.capital || '') + ' ' + (c.langs || '') + ' ' + (c.currency || '') + ' ' + (c.region || ''),
          ssFlatten(c.dish) + ssFlatten(c.figures) + ssFlatten(c.geo) + ssFlatten(c.facts) + ssFlatten(c.blurb),
          function () { ssOpenCountry(code); });
      });
    }
    if (typeof KNOWN_FOR !== 'undefined') {
      Object.keys(KNOWN_FOR).forEach(code => {
        (KNOWN_FOR[code] || []).forEach(item => {
          if (!Array.isArray(item)) return;
          ssEntry(L, 'culture', item[0] || '🌍', item[1], 'Known for · ' + ssCountryName(code), ssCountryName(code), '', goHash('#/mundo/known-for'));
        });
      });
    }
    if (typeof PEOPLE !== 'undefined') {
      PEOPLE.forEach(p => ssEntry(L, 'culture', '🎭', p.name, 'People to know · ' + (p.role || '') + ' · ' + ssCountryName(p.country), (p.role || '') + ' ' + ssCountryName(p.country), p.blurb || '', goHash('#/mundo/people')));
    }
    if (typeof SPORTS_STARS !== 'undefined') {
      SPORTS_STARS.forEach(s => ssEntry(L, 'culture', '⚽', ssCountryName(s.code) + ' · ' + ssPlain(s.sport || 'Deportes'), 'Deportes · ' + ssCountryName(s.code), s.sport || '', ssFlatten(s.legends) + ssFlatten(s.current) + ssFlatten(s.rising) + ssFlatten(s.note), goHash('#/mundo/deportes')));
    }
    if (typeof SLANG !== 'undefined') {
      SLANG.forEach(s => ssEntry(L, 'culture', '💬', s.phrase, 'Slang · ' + ssPlain(s.where || ssCountryName(s.country) || ''), (s.literal || '') + ' ' + (s.where || ''), (s.meaning || '') + ' ' + (s.example || ''), goHash('#/mundo/slang')));
    }
    if (typeof DISHES !== 'undefined') {
      DISHES.forEach(d => ssEntry(L, 'culture', d.emoji || '🌮', d.name, 'Dish · ' + (d.type || '') + (d.country ? ' · ' + ssCountryName(d.country) : ''), (d.type || '') + ' ' + ssCountryName(d.country || ''), d.description || '', goHash('#/mundo/dishes')));
    }
    if (typeof ARTISTS !== 'undefined') {
      ARTISTS.forEach(a => ssEntry(L, 'culture', '🎨', a.name, 'Arte · ' + (a.tradition || '') + (a.country ? ' · ' + ssCountryName(a.country) : ''), (a.tradition || '') + ' ' + (a.years || '') + ' ' + ssCountryName(a.country || ''), (a.bio || '') + ' ' + ssFlatten(a.works), goHash('#/mundo/arte')));
    }

    // Civilizaciones antiguas
    if (typeof CIVS !== 'undefined') {
      CIVS.forEach(c => ssEntry(L, 'civs', '🏛️', c.name, 'Civilizaciones · ' + ssPlain(c.where || ''), c.where || '', (c.quienes || '') + ' ' + (c.construccion || '') + ' ' + (c.sitios || '') + ' ' + (c.final || ''), goHash('#/civilizaciones')));
    }

    // Historia — the 21 countries now; every event once historia.js is loaded
    if (typeof HISTORIA_INDEX !== 'undefined') {
      HISTORIA_INDEX.forEach(c => ssEntry(L, 'historia', '📜', c.name, 'Historia · ' + c.events + ' events', c.blurb || '', '', goHash('#/historia/' + c.code.toLowerCase())));
    }
    if (ssHistoriaLoaded()) {
      HISTORIA.forEach(c => {
        (c.events || []).forEach(ev => {
          ssEntry(L, 'historia', '📜', ev.title, 'Historia · ' + (ev.year || '') + ' · ' + (c.countryName || c.country), (ev.spanish || '') + ' ' + (ev.year || '') + ' ' + ssFlatten(ev.vocab), ev.body || '', goHash('#/historia/' + String(c.country).toLowerCase()));
        });
      });
    }

    // Student resources — the link cards on the Recursos page
    document.querySelectorAll('.page[data-page="recursos"] .resource-card').forEach(a => {
      const name = a.querySelector('.resource-name'), desc = a.querySelector('.resource-desc'), host = a.querySelector('.resource-host');
      const href = a.getAttribute('href') || '';
      if (!name) return;
      const go = /^https?:/.test(href) ? function () { closeSiteSearch(); window.open(href, '_blank', 'noopener'); } : goHash('#/recursos');
      ssEntry(L, 'resources', '🔗', name.textContent, 'Student resources' + (host ? ' · ' + host.textContent.trim() : ''), host ? host.textContent : '', desc ? desc.textContent : '', go);
    });

    // Catch-all: every heading on every static page, so things that live only in
    // page markup (shop items, quiz intros, the home cards) are still findable.
    const seenHeadings = {};
    L.forEach(e => { seenHeadings[e.t] = true; });
    document.querySelectorAll('.page[data-page]').forEach(pg => {
      const page = pg.getAttribute('data-page');
      if (!page || SS_DYNAMIC_PAGES[page]) return;
      const pageTitle = (typeof PAGE_TITLES !== 'undefined' && PAGE_TITLES[page]) || page;
      pg.querySelectorAll('h1, h2, h3, h4').forEach(h => {
        if (h.closest('.site-search, .site-search-results, .game-card, .resource-card')) return;
        const text = ssPlain(h.textContent);
        if (text.length < 3 || text.length > 90) return;
        const key = ssFold(text);
        if (seenHeadings[key]) return;
        seenHeadings[key] = true;
        ssEntry(L, 'pages', '📄', text, 'On the ' + pageTitle + ' page', '', '', goHash(ssPageHash(page)));
      });
    });

    _ssIndex = L; _ssIndexKey = key;
    return L;
  }

  // Query → tokens. Hyphens and apostrophes stay inside a token ("e→ie" → "e ie").
  function ssTokens(q) {
    return ssFold(q).replace(/[^a-z0-9'\-\s]/g, ' ').split(/\s+/).filter(Boolean);
  }
  // Does folded text contain the token? Falls back to a loose stem so "changes"
  // finds "changing"/"changers" and "cambios" finds "cambio".
  const SS_SUFFIXES = ['ing', 'ers', 'ies', 'es', 'ed', 'er', 's'];
  // First occurrence of `needle` that starts a word (so "shop" finds "shopping"
  // but not "workshop", and "ser" doesn't light up every "reserved").
  function ssFind(text, needle) {
    if (!text || !needle) return -1;
    let i = text.indexOf(needle);
    while (i !== -1) {
      if (i === 0 || !/[a-z0-9]/.test(text[i - 1])) return i;
      i = text.indexOf(needle, i + 1);
    }
    return -1;
  }
  // Where does the token (or its loose stem) match in the text? -1 if nowhere.
  // Returns [index, matchedLength].
  function ssLocate(text, tok) {
    let i = ssFind(text, tok);
    if (i !== -1) return [i, tok.length];
    for (let k = 0; k < SS_SUFFIXES.length; k++) {
      const suf = SS_SUFFIXES[k];
      if (tok.length - suf.length >= 4 && tok.slice(-suf.length) === suf) {
        const stem = tok.slice(0, -suf.length);
        i = ssFind(text, stem);
        if (i !== -1) return [i, stem.length];
        if (suf === 'ies') { i = ssFind(text, stem + 'y'); if (i !== -1) return [i, stem.length + 1]; }
      }
    }
    return null;
  }
  function ssHas(text, tok) { return !!ssLocate(text, tok); }
  // Relevance: 0 = no match. Every token must appear somewhere in the entry.
  function ssScore(e, toks, q) {
    let inTitle = 0, inMeta = 0;
    for (let i = 0; i < toks.length; i++) {
      const tok = toks[i];
      if (ssHas(e.t, tok)) inTitle++;
      else if (ssHas(e.m, tok)) inMeta++;
      else if (!ssHas(e.bf, tok)) return 0;
    }
    let s;
    if (inTitle === toks.length) {
      s = 100;
      if (e.t === q) s += 40; else if (e.t.indexOf(q) === 0) s += 20; else if (ssFind(e.t, q) !== -1) s += 10;
    } else if (inTitle + inMeta === toks.length) {
      s = 60 + inTitle * 5 + (ssFind(e.m, q) !== -1 ? 5 : 0);
    } else {
      s = 20 + inTitle * 5 + inMeta * 2 + (ssFind(e.bf, q) !== -1 ? 8 : 0);
    }
    return s;
  }
  // A short window of readable body text around the first match, with the match bolded.
  function ssSnippet(e, toks, q) {
    if (!e.bf) return '';
    let idx = ssFind(e.bf, q), len = q.length;
    for (let i = 0; i < toks.length && idx === -1; i++) {
      const loc = ssLocate(e.bf, toks[i]);
      if (loc) { idx = loc[0]; len = loc[1]; }
    }
    if (idx === -1) return '';
    // Extend the bolded span to the end of the word.
    let end = idx + len;
    while (end < e.b.length && /[a-z0-9áéíóúüñ]/i.test(e.b[end])) end++;
    let start = Math.max(0, idx - 48), stop = Math.min(e.b.length, end + 72);
    if (start > 0) { const sp = e.b.lastIndexOf(' ', idx - 1); if (sp >= start) start = sp + 1; }
    if (stop < e.b.length) { const sp = e.b.indexOf(' ', stop); if (sp !== -1 && sp - stop < 12) stop = sp; }
    return (start > 0 ? '…' : '') + searchEscape(e.b.slice(start, idx)) + '<b>' + searchEscape(e.b.slice(idx, end)) + '</b>' + searchEscape(e.b.slice(end, stop)) + (stop < e.b.length ? '…' : '');
  }

  // Historia event vocab → which countries' timelines use each phrase. Built
  // once Historia is loaded; returns null until then (cross-link degrades
  // gracefully and fills in on a later keystroke).
  let _historiaVocabIndex = null;
  function historiaVocabIndex() {
    if (!ssHistoriaLoaded()) return null;
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

  // Pull in historia.js in the background so the index has its events. Cached by
  // the loader; we just clear our derived indexes so they rebuild once data lands.
  function primeHistoriaForSearch() {
    try {
      if (typeof loadHistoriaModule === 'function') {
        loadHistoriaModule().then(function () { _historiaVocabIndex = null; }).catch(function () {}); // index rebuilds itself: its key changes once HISTORIA is populated
      }
    } catch (e) { /* non-fatal */ }
  }

  // Relevance for single words: exact match first, then prefix, then substring
  // (Spanish or gloss). Article-aware: also tests the bare noun so "casa" ranks
  // "la casa" as exact.
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
  // Open the verb page with a specific drill mode/group pill pressed. Pills are
  // matched by their onclick text because the group picker is rebuilt per mode.
  function ssOpenDrillPill(onclickText) {
    siteSearchGo('#/verbos');
    setTimeout(function () {
      const pill = Array.from(document.querySelectorAll('#drill-tense-picker .pill, #drill-group-picker .pill'))
        .find(p => (p.getAttribute('onclick') || '') === onclickText);
      if (pill) pill.click();
    }, 40);
  }
  function ssOpenListening(mode) {
    siteSearchGo('#/escucha');
    setTimeout(function () {
      const tab = Array.from(document.querySelectorAll('.listen-tab')).find(t => (t.getAttribute('onclick') || '').indexOf("'" + mode + "'") !== -1);
      if (tab) tab.click();
    }, 40);
  }
  function ssOpenCountry(code) {
    siteSearchGo('#/mundo');
    setTimeout(function () { if (typeof openCountry === 'function') openCountry(code); }, 60);
  }
  // Click handler for indexed rows: the entry's own opener.
  function ssGo(i) {
    const e = _ssRendered && _ssRendered[i];
    if (e && typeof e.go === 'function') e.go();
  }
  // Web fallback — opens the student's own search engine / dictionary in a new
  // tab with whatever is in the box.
  function ssWeb(where) {
    const inp = document.getElementById('siteSearchInput');
    const q = inp ? inp.value.trim() : '';
    if (!q) return;
    const enc = encodeURIComponent(q);
    const url = where === 'spanishdict' ? 'https://www.spanishdict.com/translate/' + enc
      : where === 'wordreference' ? 'https://www.wordreference.com/es/translation.asp?tranword=' + enc
      : 'https://www.google.com/search?q=' + enc;
    window.open(url, '_blank', 'noopener');
  }

  function closeSiteSearch() {
    const box = document.getElementById('siteSearchResults');
    if (box) box.style.display = 'none';
    const inp = document.getElementById('siteSearchInput');
    if (inp) inp.value = '';
  }

  function ssRow(icon, labelHtml, sub, onclick, snippetHtml) {
    return '<button type="button" class="ss-row" onclick="' + onclick + '">' +
      '<span class="ss-icon">' + icon + '</span>' +
      '<span class="ss-text"><span class="ss-label">' + labelHtml + '</span>' +
      (sub ? '<span class="ss-sub">' + searchEscape(sub) + '</span>' : '') +
      (snippetHtml ? '<span class="ss-snip">' + snippetHtml + '</span>' : '') +
      '</span></button>';
  }
  function ssWebRows(raw) {
    const q = searchEscape(raw);
    return '<div class="ss-group-label">Search the web</div>' +
      ssRow('🌐', 'Search Google for “' + q + '”', 'Opens in a new tab', "ssWeb('google')") +
      ssRow('📖', 'Look up “' + q + '” on SpanishDict', 'Dictionary · opens in a new tab', "ssWeb('spanishdict')") +
      ssRow('📗', 'Look up “' + q + '” on WordReference', 'Dictionary · opens in a new tab', "ssWeb('wordreference')");
  }

  function runSiteSearch(raw) {
    const box = document.getElementById('siteSearchResults');
    if (!box) return;
    const q = ssFold(raw).replace(/\s+/g, ' ').trim();
    if (q.length < 2) { box.innerHTML = ''; box.style.display = 'none'; return; }
    primeHistoriaForSearch(); // load historia.js in the background so its events join the index
    const toks = ssTokens(raw);
    const qn = searchNorm(raw);

    // ---- Indexed content: score every entry, bucket by group, cap per group
    const index = buildSiteSearchIndex();
    _ssRendered = index;
    const hits = {};
    for (let i = 0; i < index.length; i++) {
      const e = index[i];
      const s = ssScore(e, toks, q);
      if (!s) continue;
      (hits[e.g] = hits[e.g] || []).push({ e: e, i: i, s: s });
    }
    const groups = []; // { key, label, best, html[] }
    SS_GROUPS.forEach(function (g) {
      const list = hits[g[0]];
      if (!list || !list.length) return;
      list.sort(function (a, b) { return (b.s - a.s) || (a.e.label.length - b.e.label.length) || a.e.label.localeCompare(b.e.label); });
      const rows = list.slice(0, g[2]).map(function (h) {
        const snip = h.s < 100 ? ssSnippet(h.e, toks, q) : '';
        return ssRow(h.e.icon, searchEscape(h.e.label), h.e.sub, 'ssGo(' + h.i + ')', snip);
      });
      const more = list.length - rows.length;
      if (more > 0) rows.push('<div class="ss-more">+ ' + more + ' more in ' + g[1] + '</div>');
      groups.push({ label: g[1], best: list[0].s, rows: rows });
    });

    // ---- Words — consolidated: ONE row per word, listing every place it appears
    // (each deck + each Historia timeline) as clickable chips. Ranked so exact
    // matches come first, then the list is capped — so a term in many places
    // shows its best hits with all their locations rather than 12 stray rows.
    const dl = deckLabels();
    const wordMap = {}; // normKey -> entry
    function wordEntry(key, display, gloss) {
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
        if (searchNorm(c.word).indexOf(qn) !== -1 || searchNorm(c.back).indexOf(qn) !== -1) {
          const e = wordEntry(searchNorm(c.word), c.word, searchFirstSense(c.back));
          if (!(k in e.decks)) { e.decks[k] = i; e.deckOrder.push(k); }
        }
      }
    }
    const hvi = historiaVocabIndex();
    if (hvi) {
      for (const v of hvi) {
        if (v.key.indexOf(qn) !== -1) {
          const e = wordEntry(v.key, v.phrase, '');
          if (!(v.code in e.countries)) { e.countries[v.code] = v.name; e.countryOrder.push(v.code); }
        }
      }
    }
    const wordEntries = Object.keys(wordMap).map(function (key) {
      wordMap[key].score = rankScore(qn, wordMap[key].display, wordMap[key].gloss);
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
      // Put word matches on the same scale as indexed entries (exact word = title-exact).
      const wordBest = ({ 4: 140, 3: 115, 2: 65, 1: 30 })[wordEntries[0].score] || 30;
      groups.push({ label: 'Words', best: wordBest, rows: wordRows });
    }

    // Most relevant group first; ties keep the declared order.
    groups.sort(function (a, b) { return b.best - a.best; });

    if (!groups.length) {
      box.innerHTML = '<div class="ss-empty">Nothing on El Pueblo matches “' + searchEscape(raw) + '”. Try another word, or search the web:</div>' + ssWebRows(raw);
      box.style.display = 'block';
      return;
    }
    box.innerHTML = groups.map(g => '<div class="ss-group-label">' + g.label + '</div>' + g.rows.join('')).join('') + ssWebRows(raw);
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
