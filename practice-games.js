/* ==========================================================================
 * El Pueblo — Deck-powered practice games
 * --------------------------------------------------------------------------
 * Loaded as a separate file (after the main inline script) to keep index.html
 * under GitHub's ~1.99 MB single-file limit.
 *
 * These games reuse the existing `decks` vocabulary (word / cat / back / ex /
 * exEn) so they automatically cover EVERY theme — add a new deck and these
 * games pick it up for free, no extra authoring.
 *
 * Integration contract (from index.html):
 *   - window.ELP = { decks, GAMES }  ... bridge exposed by the inline script.
 *   - Each GAMES[id] needs: { title, icon, maxReward, generate() }.
 *   - generate() returns { promptLabel, promptDisplay, answer, hint, validAnswers? }.
 *   - The runner compares typed input with normalize(); validAnswers[] allows
 *     several acceptable spellings (e.g. with or without the article).
 *   - Cards link to #/game/<id>; the existing hash router + startGame() handle
 *     navigation and scoring/rewards/best-scores with no extra wiring.
 * ======================================================================== */
(function () {
  'use strict';

  var BRIDGE = window.ELP || {};
  var decks = BRIDGE.decks;
  var GAMES = BRIDGE.GAMES;
  if (!decks || !GAMES) {
    console.warn('[practice-games] Bridge (window.ELP) unavailable — vocab games not loaded.');
    return;
  }

  // ---- small helpers -------------------------------------------------------
  var ARTICLES = ['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas'];

  function splitArticle(word) {
    var parts = String(word).trim().split(/\s+/);
    if (parts.length > 1 && ARTICLES.indexOf(parts[0].toLowerCase()) !== -1) {
      return { article: parts[0].toLowerCase(), bare: parts.slice(1).join(' ') };
    }
    return { article: null, bare: String(word).trim() };
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Escape a value for safe embedding inside a single-quoted JS string that
  // itself lives inside an HTML attribute (used by the listening game button).
  function jsAttr(s) {
    return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  // ---- pooled card sources (built lazily, cached) --------------------------
  var _all = null;
  function allCards() {
    if (_all) return _all;
    _all = [];
    for (var k in decks) {
      var arr = decks[k];
      if (!Array.isArray(arr)) continue;
      for (var i = 0; i < arr.length; i++) {
        var c = arr[i];
        if (c && c.word && c.back) _all.push(c);
      }
    }
    return _all;
  }

  // Single-word targets only (reliable to scramble / blank / spell).
  function isSingleWord(bare) {
    return bare && !/\s/.test(bare) && /^[a-záéíóúüñ]{3,14}$/i.test(bare);
  }

  var _scramble = null;
  function scramblePool() {
    if (_scramble) return _scramble;
    _scramble = allCards().filter(function (c) {
      return isSingleWord(splitArticle(c.word).bare);
    });
    return _scramble;
  }

  var _cloze = null;
  function clozePool() {
    if (_cloze) return _cloze;
    _cloze = [];
    var cards = allCards();
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      if (!c.ex) continue;
      var bare = splitArticle(c.word).bare;
      if (!isSingleWord(bare)) continue;
      // Whole-word, case-insensitive, accent-sensitive match inside the example.
      var re = new RegExp('(^|[^\\p{L}])(' + escapeReg(bare) + ')(?=[^\\p{L}]|$)', 'iu');
      var m = c.ex.match(re);
      if (m) _cloze.push({ card: c, token: m[2] });
    }
    return _cloze;
  }

  function shuffleLetters(word) {
    var a = word.split('');
    for (var attempt = 0; attempt < 8; attempt++) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      if (a.join('') !== word) break;
    }
    return a.join('');
  }

  // ---- game definitions ----------------------------------------------------
  var NEW_GAMES = {
    'vocab-recall': {
      title: 'Vocab <em>recall</em>',
      icon: '🧠',
      maxReward: 35,
      generate: function () {
        var c = pick(allCards());
        var bare = splitArticle(c.word).bare;
        return {
          promptLabel: 'Write this in Spanish',
          promptDisplay: c.back,
          answer: c.word,
          validAnswers: [c.word, bare],
          hint: c.cat || 'Type the Spanish word'
        };
      }
    },
    'vocab-scramble': {
      title: 'Word <em>scramble</em>',
      icon: '🔤',
      maxReward: 30,
      generate: function () {
        var c = pick(scramblePool());
        var bare = splitArticle(c.word).bare;
        return {
          promptLabel: 'Unscramble the Spanish word',
          promptDisplay: shuffleLetters(bare).toUpperCase().split('').join(' '),
          answer: bare,
          validAnswers: [bare, c.word],
          hint: '“' + c.back + '”'
        };
      }
    },
    'vocab-cloze': {
      title: 'Sentence <em>cloze</em>',
      icon: '✏️',
      maxReward: 40,
      generate: function () {
        var entry = pick(clozePool());
        var c = entry.card;
        var bare = splitArticle(c.word).bare;
        // Blank every whole-word occurrence of the token. Word-boundary match
        // (not a plain string replace) so "sol" isn't blanked inside
        // "solamente"; global so a sentence that repeats the word doesn't leave
        // a copy visible and give the answer away.
        var blankRe = new RegExp('(^|[^\\p{L}])(' + escapeReg(entry.token) + ')(?=[^\\p{L}]|$)', 'gu');
        var blanked = c.ex.replace(blankRe, '$1______');
        return {
          promptLabel: 'Fill in the missing word',
          promptDisplay: blanked,
          answer: entry.token,
          validAnswers: [entry.token, bare],
          hint: c.exEn || ('Means: “' + c.back + '”')
        };
      }
    },
    'vocab-listen': {
      title: 'Listen & <em>spell</em>',
      icon: '🎧',
      maxReward: 35,
      generate: function () {
        var c = pick(allCards());
        var bare = splitArticle(c.word).bare;
        var safe = jsAttr(c.word);
        var play =
          '<button type="button" class="btn" style="font-size:18px;padding:14px 24px;" ' +
          'onclick="speakSpanish(\'' + safe + '\')">🔊 Play again</button>' +
          '<img src="data:," alt="" style="display:none" ' +
          'onerror="this.remove();if(window.speakSpanish)speakSpanish(\'' + safe + '\')">';
        return {
          promptLabel: 'Listen and type what you hear',
          promptDisplay: play,
          answer: c.word,
          validAnswers: [c.word, bare],
          hint: '“' + c.back + '”'
        };
      }
    }
  };

  // Register without clobbering anything that somehow already exists.
  Object.keys(NEW_GAMES).forEach(function (id) {
    if (!GAMES[id]) GAMES[id] = NEW_GAMES[id];
  });

  // ---- discoverability: inject clickable cards into the games hub ----------
  var CARDS = [
    { id: 'vocab-recall',   icon: '🧠', title: 'Vocab <em>recall</em>',     desc: 'See the English, type the Spanish word. Draws from every vocab deck.', reward: 'up to 35 Lucas' },
    { id: 'vocab-scramble', icon: '🔤', title: 'Word <em>scramble</em>',    desc: 'Letters are jumbled — rebuild the Spanish word. Meaning shown as a hint.', reward: 'up to 30 Lucas' },
    { id: 'vocab-cloze',    icon: '✏️', title: 'Sentence <em>cloze</em>',   desc: 'A real example sentence with one word missing — fill the blank.', reward: 'up to 40 Lucas' },
    { id: 'vocab-listen',   icon: '🎧', title: 'Listen & <em>spell</em>',   desc: 'Hear the word, then spell it. Listening + vocabulary in one.', reward: 'up to 35 Lucas' }
  ];

  function cardHTML(c) {
    return '' +
      '<a href="#/game/' + c.id + '" class="game-card">' +
        '<div class="game-icon">' + c.icon + '</div>' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.desc + '</p>' +
        '<div class="game-reward">All decks · ' + c.reward + '</div>' +
      '</a>';
  }

  function injectHub() {
    var grid = document.getElementById('gameGrid');
    if (!grid) return;

    // Fold these deck-powered games straight into the single Practice games
    // grid — no separate "Vocabulary games" heading. Skip any game already
    // shown so we never duplicate a card.
    var tmp = document.createElement('div');
    tmp.innerHTML = CARDS.map(cardHTML).join('');
    Array.prototype.slice.call(tmp.children).forEach(function (card) {
      var href = card.getAttribute('href');
      if (grid.querySelector('a[href="' + href + '"]')) return;
      grid.appendChild(card);
    });

    // If we're already sitting on the games page, refresh the best-scores panel
    // so the new games show up immediately.
    if (typeof window.renderGamesHub === 'function' && /juegos/.test(location.hash)) {
      try { window.renderGamesHub(); } catch (e) { /* non-fatal */ }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHub);
  } else {
    injectHub();
  }
})();
