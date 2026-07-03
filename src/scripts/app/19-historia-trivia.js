  /* ============== HISTORIA TRIVIA ============== */
  // Auto-generates multiple choice trivia questions from the HISTORIA data.
  // Question types vary: year, country, event title.
  // Wrong answers tell the student which event the answer relates to,
  // making mistakes pedagogically useful.
  // Country name / adjective aliases (English + Spanish + demonyms). Used to
  // redact giveaways from auto-generated questions, so the prompt never prints
  // the country that is also the correct answer. Covers all 21 countries.
  const COUNTRY_ALIASES = {
    AR: ['Argentina', 'Argentine', 'Argentinian', 'Argentinean'],
    BO: ['Bolivia', 'Bolivian'],
    CL: ['Chile', 'Chilean'],
    CO: ['Colombia', 'Colombian'],
    CR: ['Costa Rica', 'Costa Rican'],
    CU: ['Cuba', 'Cuban'],
    DO: ['Dominican Republic', 'República Dominicana', 'Dominican'],
    EC: ['Ecuador', 'Ecuadorian', 'Ecuadorean'],
    ES: ['España', 'Spain', 'Spanish', 'Spaniard', 'Spaniards'],
    GQ: ['Equatorial Guinea', 'Guinea Ecuatorial', 'Equatoguinean', 'Equatorial Guinean'],
    GT: ['Guatemala', 'Guatemalan'],
    HN: ['Honduras', 'Honduran'],
    MX: ['México', 'Mexico', 'Mexican'],
    NI: ['Nicaragua', 'Nicaraguan'],
    PA: ['Panamá', 'Panama', 'Panamanian'],
    PE: ['Perú', 'Peru', 'Peruvian'],
    PR: ['Puerto Rico', 'Puerto Rican'],
    PY: ['Paraguay', 'Paraguayan'],
    SV: ['El Salvador', 'Salvadoran', 'Salvadorean', 'Salvadorian'],
    UY: ['Uruguay', 'Uruguayan'],
    VE: ['Venezuela', 'Venezuelan']
  };
  // Longest terms first so multi-word names ("Costa Rica") are matched before
  // any substring could be.
  const ALL_COUNTRY_TERMS = Object.values(COUNTRY_ALIASES).flat().sort((a, b) => b.length - a.length);

  // Replace every country name/adjective in a string with a neutral blank, using
  // Unicode-aware boundaries so accented names (Perú, México, Panamá) match too.
  function redactCountryNames(text) {
    if (!text) return '';
    let out = String(text);
    ALL_COUNTRY_TERMS.forEach(term => {
      const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      let re;
      try {
        // Letter-boundary without lookbehind: capture the preceding non-letter
        // (or start) and re-emit it; lookahead guards the trailing edge.
        re = new RegExp('([^\\p{L}]|^)' + esc + '(?![\\p{L}])', 'giu');
      } catch (e) {
        re = new RegExp('(\\b)' + esc + '(\\b)', 'gi');
      }
      out = out.replace(re, '$1———');
    });
    return out.replace(/(\s*———\s*)+/g, ' ——— ').trim();
  }

  let triviaTarget = null;
  let triviaQuestionType = null;
  let triviaCorrectCount = 0, triviaTriesCount = 0;
  let triviaAnswered = false;

  function newTriviaQuiz() {
    triviaAnswered = false;
    if (!HISTORIA || HISTORIA.length === 0) {
      const el = document.getElementById('triviaQuestion');
      if (el) el.innerHTML = '<div style="font-style: italic; opacity: 0.7;">Loading questions…</div>';
      if (typeof loadHistoriaModule === 'function') {
        loadHistoriaModule().then(() => newTriviaQuiz()).catch(() => {
          if (el) el.innerHTML = '<div style="font-style: italic; opacity: 0.7;">Questions unavailable right now. <a href="#/historia" style="color: var(--ocre);">Back to Historia</a>.</div>';
        });
      }
      return;
    }

    // Pick a random country, then a random event from that country
    const country = HISTORIA[Math.floor(Math.random() * HISTORIA.length)];
    const event = country.events[Math.floor(Math.random() * country.events.length)];
    triviaTarget = { country, event };

    // Pick a random question type
    const questionTypes = ['country', 'year', 'event-title', 'arc-country'];
    triviaQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const allCountries = HISTORIA.map(c => c.countryName);
    let question, correctAnswer, options;

    if (triviaQuestionType === 'country') {
      // "In which country did X happen?"
      // Use the event title (minus any obvious country giveaway) as the question
      // Strip HTML, then redact every country name/adjective so the answer
      // isn't given away in the prompt (works for all 21 countries).
      const titleCue = redactCountryNames(event.title.replace(/<[^>]+>/g, ''));
      question = `In which country did this event occur — "${titleCue}" (${event.year})?`;
      correctAnswer = country.countryName;
      // Distractors: 3 other random countries
      const distractors = allCountries.filter(c => c !== correctAnswer).sort(() => Math.random() - 0.5).slice(0, 3);
      options = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);

    } else if (triviaQuestionType === 'year') {
      // "When did X happen?"
      const cleanTitle = event.title.replace(/<[^>]+>/g, '');
      question = `When did this happen — "${cleanTitle}" (in ${country.countryName})?`;
      correctAnswer = event.year;
      // Distractors: years from OTHER events
      const otherYears = [];
      HISTORIA.forEach(c => c.events.forEach(e => {
        if (e.year !== correctAnswer && !otherYears.includes(e.year)) otherYears.push(e.year);
      }));
      const distractors = otherYears.sort(() => Math.random() - 0.5).slice(0, 3);
      options = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);

    } else if (triviaQuestionType === 'event-title') {
      // "Which event happened in [country] in [year]?"
      const cleanTitle = event.title.replace(/<[^>]+>/g, '');
      question = `Which event happened in ${country.countryName} in ${event.year}?`;
      correctAnswer = cleanTitle;
      // Distractors: titles from OTHER events
      const otherEvents = [];
      HISTORIA.forEach(c => c.events.forEach(e => {
        const t = e.title.replace(/<[^>]+>/g, '');
        if (t !== correctAnswer) otherEvents.push(t);
      }));
      const distractors = otherEvents.sort(() => Math.random() - 0.5).slice(0, 3);
      options = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);

    } else if (triviaQuestionType === 'arc-country') {
      // "Which country's history is described here?" — show the country's arc
      // overview with all country names/adjectives redacted, ask for the country.
      let arc = redactCountryNames((country.arc || '').replace(/<[^>]+>/g, ''));
      if (arc.length > 320) arc = arc.slice(0, 317).replace(/\s+\S*$/, '') + '…';
      question = `Which country's history is described here? "${arc}"`;
      correctAnswer = country.countryName;
      const distractors = allCountries.filter(c => c !== correctAnswer).sort(() => Math.random() - 0.5).slice(0, 3);
      options = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);
    }

    triviaTarget.correctAnswer = correctAnswer;

    document.getElementById('triviaQuestion').textContent = question;
    document.getElementById('triviaOptions').innerHTML = options.map(o => {
      const escaped = String(o).replace(/'/g, "\\'").replace(/"/g, '&quot;');
      return `<button class="trivia-opt" data-answer="${escaped}" onclick="answerTrivia(this)">${o}</button>`;
    }).join('');
    document.getElementById('triviaAnswer').textContent = '';
  }

  function answerTrivia(btn) {
    if (triviaAnswered) return;
    triviaAnswered = true;
    const all = document.querySelectorAll('.trivia-opt');
    all.forEach(b => b.disabled = true);
    triviaTriesCount++;

    const chosen = btn.getAttribute('data-answer');
    const correctAnswer = String(triviaTarget.correctAnswer);
    const isCorrect = chosen === correctAnswer;

    if (isCorrect) {
      btn.classList.add('correct');
      triviaCorrectCount++;
      STATE.triviaCorrect = (STATE.triviaCorrect || 0) + 1;
      awardCoins(3, 'Trivia correct');
    } else {
      btn.classList.add('wrong');
      // Highlight correct one
      all.forEach(b => {
        if (b.getAttribute('data-answer') === correctAnswer) b.classList.add('correct');
      });
    }

    // Reveal: pedagogically useful — name the country (and the specific event,
    // when the question was about one) so the student can go read about it.
    if (triviaQuestionType === 'arc-country') {
      document.getElementById('triviaAnswer').innerHTML =
        `<strong>${triviaTarget.country.countryName}</strong><br><span style="font-size: 13px; opacity: 0.7;">Read ${triviaTarget.country.countryName}'s full timeline on the Historia page above.</span>`;
    } else {
      const cleanTitle = triviaTarget.event.title.replace(/<[^>]+>/g, '');
      document.getElementById('triviaAnswer').innerHTML =
        `<strong>${cleanTitle}</strong> · ${triviaTarget.country.countryName} · ${triviaTarget.event.year}<br><span style="font-size: 13px; opacity: 0.7;">Read about this on the Historia page above.</span>`;
    }
    document.getElementById('triviaCorrect').textContent = triviaCorrectCount;
    document.getElementById('triviaTries').textContent = triviaTriesCount;
  }

