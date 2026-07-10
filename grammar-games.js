/* ==========================================================================
 * El Pueblo — Grammar & number practice games (companion file #2)
 * --------------------------------------------------------------------------
 * Adds more variety beyond the vocab games. Loaded after practice-games.js;
 * registers into window.ELP.GAMES and injects its own card section.
 *
 * Mix of:
 *   - deck-powered/rule-based generators (plurals, number → digits)
 *   - small hand-authored item banks (por/para, ser/estar, antonyms)
 *
 * Same generate() contract as the core runner:
 *   { promptLabel, promptDisplay, answer, hint, validAnswers? }
 * The runner compares with normalize() (accent-insensitive), and validAnswers
 * lets several spellings count (e.g. with or without the article).
 * ======================================================================== */
(function () {
  'use strict';

  var BRIDGE = window.ELP || {};
  var decks = BRIDGE.decks;
  var GAMES = BRIDGE.GAMES;
  if (!GAMES) {
    console.warn('[grammar-games] Bridge (window.ELP.GAMES) unavailable — grammar games not loaded.');
    return;
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // ---- deck helpers (shared shape with practice-games.js) ------------------
  var ARTICLES = ['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas'];
  function splitArticle(word) {
    var parts = String(word).trim().split(/\s+/);
    if (parts.length > 1 && ARTICLES.indexOf(parts[0].toLowerCase()) !== -1) {
      return { article: parts[0].toLowerCase(), bare: parts.slice(1).join(' ') };
    }
    return { article: null, bare: String(word).trim() };
  }

  // Singular nouns written "el/la <noun>" whose noun ends in an unaccented
  // vowel — the safe, regular "+s" pluralization (la casa → las casas).
  var _plural = null;
  function pluralPool() {
    if (_plural) return _plural;
    _plural = [];
    if (decks) {
      for (var k in decks) {
        var arr = decks[k];
        if (!Array.isArray(arr)) continue;
        for (var i = 0; i < arr.length; i++) {
          var c = arr[i];
          if (!c || !c.word) continue;
          var p = String(c.word).trim().split(/\s+/);
          if (p.length !== 2) continue;
          var art = p[0].toLowerCase();
          if (art !== 'el' && art !== 'la') continue;
          if (!/^[a-záéíóúñ]+[aeo]$/i.test(p[1])) continue; // single word, ends in a/e/o
          _plural.push({ article: art, bare: p[1], back: c.back });
        }
      }
    }
    return _plural;
  }

  // ---- hand-authored item banks -------------------------------------------
  // Each por/para item: clear, unambiguous usage.
  var POR_PARA = [
    { s: 'Gracias ___ tu ayuda.',              a: 'por',  en: 'Thanks for your help. (gratitude)' },
    { s: 'Este regalo es ___ ti.',             a: 'para', en: 'This gift is for you. (recipient)' },
    { s: 'Estudio ___ ser médico.',            a: 'para', en: 'I study to become a doctor. (goal)' },
    { s: 'Caminamos ___ el parque.',           a: 'por',  en: 'We walk through the park. (through)' },
    { s: 'Mañana salgo ___ Madrid.',           a: 'para', en: 'Tomorrow I leave for Madrid. (destination)' },
    { s: 'Pagué veinte dólares ___ el libro.', a: 'por',  en: 'I paid $20 for the book. (exchange)' },
    { s: 'La tarea es ___ el lunes.',          a: 'para', en: 'The homework is due Monday. (deadline)' },
    { s: 'Viajamos ___ tren.',                 a: 'por',  en: 'We travel by train. (means)' },
    { s: 'Te llamo ___ teléfono.',             a: 'por',  en: 'I call you by phone. (means)' },
    { s: 'Compré flores ___ mi madre.',        a: 'para', en: 'I bought flowers for my mother. (recipient)' },
    { s: 'Corro ___ la mañana.',               a: 'por',  en: 'I run in the morning. (part of day)' },
    { s: 'El tren pasa ___ el túnel.',         a: 'por',  en: 'The train goes through the tunnel.' },
    { s: 'Hay que terminar ___ las cinco.',    a: 'para', en: 'We must finish by five. (deadline)' },
    { s: 'Este vaso es ___ agua.',             a: 'para', en: 'This glass is for water. (purpose)' },
    { s: 'Estudié ___ dos horas.',             a: 'por',  en: 'I studied for two hours. (duration)' },
    { s: 'Gracias ___ todo.',                  a: 'por',  en: 'Thanks for everything.' }
  ];

  // Ser vs estar — type the correct conjugated form. normalize() is
  // accent-insensitive, so "esta" counts for "está".
  var SER_ESTAR = [
    { s: 'Yo ___ de Perú.',              a: 'soy',     en: 'I am from Peru. (origin)' },
    { s: 'Nosotros ___ cansados.',       a: 'estamos', en: 'We are tired. (condition)' },
    { s: 'La sopa ___ caliente.',        a: 'está',    en: 'The soup is hot (right now). (condition)' },
    { s: 'Ella ___ profesora.',          a: 'es',      en: 'She is a teacher. (profession)' },
    { s: '¿Dónde ___ el baño?',          a: 'está',    en: 'Where is the bathroom? (location)' },
    { s: 'Hoy ___ lunes.',               a: 'es',      en: 'Today is Monday. (day/date)' },
    { s: 'Los niños ___ en el parque.',  a: 'están',   en: 'The kids are at the park. (location)' },
    { s: 'Tú ___ muy alto.',             a: 'eres',    en: 'You are very tall. (trait)' },
    { s: 'Mi madre ___ enferma hoy.',    a: 'está',    en: 'My mom is sick today. (condition)' },
    { s: 'El libro ___ sobre la mesa.',  a: 'está',    en: 'The book is on the table. (location)' },
    { s: 'Ellos ___ mis amigos.',        a: 'son',     en: 'They are my friends. (identity)' },
    { s: 'Yo ___ contento ahora.',       a: 'estoy',   en: 'I am happy now. (mood)' },
    { s: 'La fiesta ___ a las ocho.',    a: 'es',      en: 'The party is at eight. (event time)' },
    { s: 'Nosotros ___ estudiantes.',    a: 'somos',   en: 'We are students. (identity)' },
    { s: 'El café ___ frío.',            a: 'está',    en: 'The coffee is cold. (condition)' }
  ];

  // Antonyms. validAnswers allows common alternatives.
  var ANTONYMS = [
    { w: 'grande',    en: 'big',         a: ['pequeño', 'chico'] },
    { w: 'alto',      en: 'tall',        a: ['bajo'] },
    { w: 'bueno',     en: 'good',        a: ['malo'] },
    { w: 'feliz',     en: 'happy',       a: ['triste'] },
    { w: 'fácil',     en: 'easy',        a: ['difícil'] },
    { w: 'frío',      en: 'cold',        a: ['caliente', 'calor'] },
    { w: 'nuevo',     en: 'new',         a: ['viejo'] },
    { w: 'rápido',    en: 'fast',        a: ['lento', 'despacio'] },
    { w: 'caro',      en: 'expensive',   a: ['barato'] },
    { w: 'abrir',     en: 'to open',     a: ['cerrar'] },
    { w: 'entrar',    en: 'to enter',    a: ['salir'] },
    { w: 'subir',     en: 'to go up',    a: ['bajar'] },
    { w: 'comprar',   en: 'to buy',      a: ['vender'] },
    { w: 'el día',    en: 'the day',     a: ['la noche', 'noche'] },
    { w: 'mucho',     en: 'a lot',       a: ['poco'] },
    { w: 'siempre',   en: 'always',      a: ['nunca'] },
    { w: 'cerca',     en: 'near',        a: ['lejos'] },
    { w: 'limpio',    en: 'clean',       a: ['sucio'] },
    { w: 'primero',   en: 'first',       a: ['último'] },
    { w: 'ganar',     en: 'to win',      a: ['perder'] },
    { w: 'recordar',  en: 'to remember', a: ['olvidar'] },
    { w: 'el amor',   en: 'love',        a: ['el odio', 'odio'] }
  ];

  // ---- game definitions ----------------------------------------------------
  var NEW_GAMES = {
    'numbers-words': {
      title: 'Numbers <em>in words</em>',
      icon: '✳️',
      maxReward: 30,
      generate: function () {
        var n;
        var r = Math.random();
        if (r < 0.5) n = Math.floor(Math.random() * 31);        // 0–30
        else if (r < 0.85) n = Math.floor(Math.random() * 100) + 1; // 1–100
        else n = (Math.floor(Math.random() * 9) + 1) * 100;     // round hundreds
        var word = (window.numberToSpanish ? window.numberToSpanish(n) : String(n));
        return {
          promptLabel: 'Write the number in digits',
          promptDisplay: word.charAt(0).toUpperCase() + word.slice(1),
          answer: String(n),
          hint: 'Digits only — e.g. 42'
        };
      }
    },
    'plurals': {
      // NOTE: the active "plurals" game lives in the app (29-games.js) and takes
      // precedence over this one via the bridge's "register only if absent"
      // rule. Kept here as a fallback if the app ever stops defining it.
      title: 'Singular → <em>plural</em>',
      icon: '➕',
      maxReward: 30,
      generate: function () {
        var pool = pluralPool();
        if (!pool.length) {
          return { promptLabel: 'Make it plural', promptDisplay: 'la casa', answer: 'las casas', validAnswers: ['las casas', 'casas'], hint: 'Article + noun + s' };
        }
        var c = pick(pool);
        var artPl = c.article === 'el' ? 'los' : 'las';
        var plural = artPl + ' ' + c.bare + 's';
        return {
          promptLabel: 'Make it plural (article + noun)',
          promptDisplay: c.article + ' ' + c.bare,
          answer: plural,
          validAnswers: [plural, c.bare + 's'],
          hint: '“' + c.back + '” — el→los, la→las, +s'
        };
      }
    },
    'por-para': {
      title: 'Por o <em>para</em>',
      icon: '🔀',
      maxReward: 40,
      generate: function () {
        var it = pick(POR_PARA);
        return {
          promptLabel: 'Fill the blank — por or para?',
          promptDisplay: it.s.replace('___', '<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>'),
          answer: it.a,
          hint: it.en
        };
      }
    },
    'ser-estar': {
      title: 'Ser o <em>estar</em>',
      icon: '🅱️',
      maxReward: 40,
      generate: function () {
        var it = pick(SER_ESTAR);
        return {
          promptLabel: 'Type the correct form of ser or estar',
          promptDisplay: it.s.replace('___', '<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>'),
          answer: it.a,
          hint: it.en
        };
      }
    },
    'antonyms': {
      title: 'Opposites · <em>antónimos</em>',
      icon: '↔️',
      maxReward: 35,
      generate: function () {
        var it = pick(ANTONYMS);
        return {
          promptLabel: 'Type the opposite (in Spanish)',
          promptDisplay: it.w,
          answer: it.a[0],
          validAnswers: it.a,
          hint: '“' + it.en + '” → its opposite'
        };
      }
    }
  };

  Object.keys(NEW_GAMES).forEach(function (id) {
    if (!GAMES[id]) GAMES[id] = NEW_GAMES[id];
  });

  // ---- discoverability: inject a card section into the games hub -----------
  var CARDS = [
    { id: 'por-para',      icon: '🔀', title: 'Por o <em>para</em>',          desc: 'The classic Spanish puzzle — pick the right one for each sentence.', reward: 'up to 40 Lucas' },
    { id: 'ser-estar',     icon: '🅱️', title: 'Ser o <em>estar</em>',         desc: 'Two verbs for "to be." Type the correct form in context.', reward: 'up to 40 Lucas' },
    { id: 'antonyms',      icon: '↔️', title: 'Opposites · <em>antónimos</em>', desc: 'See a word, type its opposite. Builds vocabulary range.', reward: 'up to 35 Lucas' },
    { id: 'plurals',       icon: '➕', title: 'Singular → <em>plural</em>',     desc: 'Turn a noun plural — article and ending. Drawn from your decks.', reward: 'up to 30 Lucas' },
    { id: 'numbers-words', icon: '✳️', title: 'Numbers <em>in words</em>',     desc: 'Read the Spanish number, type the digits. (The reverse drill.)', reward: 'up to 30 Lucas' }
  ];

  function cardHTML(c) {
    return '' +
      '<a href="#/game/' + c.id + '" class="game-card">' +
        '<div class="game-icon">' + c.icon + '</div>' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.desc + '</p>' +
        '<div class="game-reward">' + c.reward + '</div>' +
      '</a>';
  }

  function injectHub() {
    var grid = document.getElementById('gameGrid');
    if (!grid) return;

    // Fold these grammar/number games straight into the single Practice games
    // grid — no separate "Grammar & number games" heading. Skip any game that
    // already has a card (e.g. plurals lives in the main grid) so nothing
    // duplicates.
    var tmp = document.createElement('div');
    tmp.innerHTML = CARDS.map(cardHTML).join('');
    Array.prototype.slice.call(tmp.children).forEach(function (card) {
      var href = card.getAttribute('href');
      if (grid.querySelector('a[href="' + href + '"]')) return;
      grid.appendChild(card);
    });

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
