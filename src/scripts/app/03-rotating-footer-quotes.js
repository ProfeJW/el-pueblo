  /* ============== ROTATING FOOTER QUOTES ============== */
  // Each page load picks a random quote from this list and displays it
  // in the footer. Add new ones freely; keep attributions accurate.
  // Mark uncertain ones as "Common saying" or leave attribution as ""
  const FOOTER_QUOTES = [
    // — On language and identity —
    { quote: 'To have another language is to possess a second soul.', author: 'Charlemagne' },
    { quote: 'You live a new life for every new language you speak. If you know only one language, you live only once.', author: 'Czech proverb' },
    { quote: 'The limits of my language mean the limits of my world.', author: 'Ludwig Wittgenstein' },
    { quote: 'A different language is a different vision of life.', author: 'Federico Fellini' },
    { quote: 'Learning another language is not only learning different words for the same things, but learning another way to think about things.', author: 'Flora Lewis' },

    // — On the slow, honest reality of learning —
    { quote: 'You can learn a language in a year, but you cannot perfect it in a lifetime.', author: 'Common saying' },
    { quote: 'Becoming proficient in a second language typically requires 600 to 2,200 hours of study, depending on the language and the learner.', author: 'Foreign Service Institute research' },
    { quote: 'Spanish is rated a Category I language for English speakers — among the easiest to learn, with about 600 classroom hours needed for working proficiency.', author: 'U.S. Foreign Service Institute' },
    { quote: 'Daily practice beats weekly cramming. Twenty minutes a day for a year is worth more than a single intensive month.', author: 'Common saying among language teachers' },
    { quote: 'The best time to start learning a language was ten years ago. The second best time is today.', author: 'Adapted Chinese proverb' },

    // — On mistakes and humility —
    { quote: 'A person who never made a mistake never tried anything new.', author: 'Albert Einstein' },
    { quote: 'If you\'re not making mistakes, you\'re not really learning.', author: 'Common saying' },
    { quote: 'Embarrassment is the price of admission to fluency.', author: 'Anonymous language teacher' },
    { quote: 'Every native speaker of Spanish was once a child who made grammar mistakes for years.', author: 'Common pedagogical reminder' },

    // — On writers and Spanish-language literature —
    { quote: 'La lengua es la patria.', translation: 'Language is the homeland.', author: 'Often attributed to Cuban writer Heberto Padilla' },
    { quote: 'Yo no escribo para nadie. Escribo porque sí.', translation: 'I don\'t write for anyone. I write just because.', author: 'Jorge Luis Borges' },
    { quote: 'La realidad no es lo que sucede; es lo que la gente cree que sucede.', translation: 'Reality is not what happens; it\'s what people believe happens.', author: 'Gabriel García Márquez' },
    { quote: 'Las palabras son monedas. Hay que gastarlas, no guardarlas.', translation: 'Words are coins. You have to spend them, not save them.', author: 'Common saying' },

    // — Research and acquisition science —
    { quote: 'Comprehensible input — language slightly beyond your current level — is the engine of acquisition. Read, listen, watch.', author: 'Adapted from Stephen Krashen\'s Input Hypothesis' },
    { quote: 'The most successful language learners are those who can tolerate ambiguity — who can listen to a conversation and not need to understand every word.', author: 'Applied linguistics research' },
    { quote: 'Vocabulary is acquired through repeated exposure across many contexts — not through memorizing lists.', author: 'Common finding in second language acquisition research' },
    { quote: 'Spaced repetition — reviewing material at increasing intervals — is one of the best-documented techniques in memory science.', author: 'Cognitive science research' },

    // — On practice and persistence —
    { quote: 'Languages aren\'t learned. They\'re lived.', author: 'Anonymous polyglot' },
    { quote: 'The hardest part of learning a language isn\'t the grammar. It\'s the willingness to sound foolish for a while.', author: 'Common saying' },
    { quote: 'Fluency is not knowing everything. It is being comfortable not knowing some things.', author: 'Anonymous language teacher' },
    { quote: 'Speak from day one — even if all you can say is "Hello, my name is ___."', author: 'Common pedagogical advice' },

    // — On bilingualism and the brain —
    { quote: 'Bilingualism delays the onset of dementia symptoms by an average of four to five years.', author: 'Research by Ellen Bialystok and colleagues' },
    { quote: 'Bilingual brains show greater density of gray matter in regions associated with language, attention, and memory.', author: 'Neuroscience research' },
    { quote: 'Children who grow up bilingual outperform monolingual children on tests of executive function and attention.', author: 'Cognitive development research' },

    // — On culture and connection —
    { quote: 'When you speak someone\'s language, you walk in their world for a moment.', author: 'Common saying' },
    { quote: 'There are over 480 million native Spanish speakers worldwide — second only to Mandarin Chinese.', author: 'Instituto Cervantes, recent data' },
    { quote: 'Spanish is the official language of 21 countries — and the home of literatures, musics, and ways of being that one lifetime is not enough to know fully.', author: 'Common reflection' }
  ];

  function rotateFooterQuote() {
    const quoteEl = document.getElementById('footer-quote');
    const transEl = document.getElementById('footer-translation');
    const attrEl = document.getElementById('footer-attribution');
    if (!quoteEl || !attrEl) return;
    const pick = FOOTER_QUOTES[Math.floor(Math.random() * FOOTER_QUOTES.length)];
    quoteEl.textContent = '"' + pick.quote + '"';
    if (transEl) {
      transEl.textContent = pick.translation ? '— ' + pick.translation : '';
    }
    const author = pick.author ? '— ' + pick.author + ' · ' : '';
    attrEl.textContent = author + 'El Pueblo 2026–2027';
  }
  // Rotate on initial page load
  try { rotateFooterQuote(); } catch (e) {}


  /* ============== ACCENT/PUNCTUATION HELPER BAR ==============
   * Floats above the keyboard / bottom of screen when any text input is focused.
   * Click a button → inserts the character at the current cursor position.
   * Triggers an `input` event so frameworks/listeners (drill check, etc.) react. */
  let currentAccentTarget = null;       // the input or textarea currently receiving focus
  let accentBarUppercase = false;       // shift state

  function isAccentEligibleEl(el) {
    if (!el) return false;
    const tag = el.tagName;
    if (tag === 'TEXTAREA') return true;
    if (tag === 'INPUT') {
      const t = (el.type || 'text').toLowerCase();
      // Only text-like input types — skip checkboxes, buttons, numbers, etc.
      return t === 'text' || t === 'search' || t === '';
    }
    return false;
  }

  function showAccentBar() {
    const bar = document.getElementById('accentBar');
    if (!bar) return;
    bar.classList.add('visible');
    bar.setAttribute('aria-hidden', 'false');
  }
  function hideAccentBar() {
    const bar = document.getElementById('accentBar');
    if (!bar) return;
    bar.classList.remove('visible');
    bar.setAttribute('aria-hidden', 'true');
    accentBarUppercase = false;
    bar.classList.remove('uppercase');
    // Re-render button labels back to lowercase
    bar.querySelectorAll('button[data-char]').forEach(btn => {
      const ch = btn.getAttribute('data-char');
      btn.textContent = ch;
    });
  }

  function toggleAccentBarUppercase() {
    const bar = document.getElementById('accentBar');
    if (!bar) return;
    accentBarUppercase = !accentBarUppercase;
    bar.classList.toggle('uppercase', accentBarUppercase);
    bar.querySelectorAll('button[data-char]').forEach(btn => {
      const ch = btn.getAttribute('data-char');
      btn.textContent = accentBarUppercase ? ch.toUpperCase() : ch;
    });
    // Restore focus to the input
    if (currentAccentTarget) {
      try { currentAccentTarget.focus(); } catch (e) {}
    }
  }

  function insertAccentChar(ch) {
    const el = currentAccentTarget;
    if (!el) return;
    const insertChar = accentBarUppercase ? ch.toUpperCase() : ch;
    try {
      const start = el.selectionStart;
      const end = el.selectionEnd;
      if (typeof start === 'number' && typeof end === 'number') {
        const before = el.value.substring(0, start);
        const after = el.value.substring(end);
        el.value = before + insertChar + after;
        const newPos = start + insertChar.length;
        el.setSelectionRange(newPos, newPos);
      } else {
        el.value = (el.value || '') + insertChar;
      }
      // Fire native input event so drill handlers, frameworks, etc. see the change
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.focus();
    } catch (e) {
      // Some readonly fields, etc. — just ignore failures
    }
  }

  // Listen globally for focusin/focusout on the document
  document.addEventListener('focusin', e => {
    if (isAccentEligibleEl(e.target) && !e.target.readOnly) {
      currentAccentTarget = e.target;
      showAccentBar();
    }
  });
  document.addEventListener('focusout', e => {
    // Hide on a small delay — gives the accent button click a chance to refocus
    setTimeout(() => {
      const active = document.activeElement;
      if (!isAccentEligibleEl(active)) {
        currentAccentTarget = null;
        hideAccentBar();
      }
    }, 100);
  });


