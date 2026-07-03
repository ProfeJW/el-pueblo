  /* ============== GAMES ============== */
  // Four mini-games: days, dates, small numbers, large numbers.
  // Each game = 10 rounds. Score-based Lucas: 0-3 right=0, 4-6=base, 7-8=base*1.5, 9=base*2, 10=max
  // Per-game state lives in this section; persistence saves best scores.

  // Spanish numbers 0-30 (most irregular range)
  const SPANISH_NUMS = {
    0:'cero', 1:'uno', 2:'dos', 3:'tres', 4:'cuatro', 5:'cinco', 6:'seis', 7:'siete', 8:'ocho', 9:'nueve',
    10:'diez', 11:'once', 12:'doce', 13:'trece', 14:'catorce', 15:'quince',
    16:'dieciséis', 17:'diecisiete', 18:'dieciocho', 19:'diecinueve',
    20:'veinte', 21:'veintiuno', 22:'veintidós', 23:'veintitrés', 24:'veinticuatro',
    25:'veinticinco', 26:'veintiséis', 27:'veintisiete', 28:'veintiocho', 29:'veintinueve',
    30:'treinta'
  };

  // Convert any number 0-9999 to Spanish words
  function numberToSpanish(n) {
    if (n < 0 || n > 9999) return '';
    if (n in SPANISH_NUMS) return SPANISH_NUMS[n];
    if (n < 100) {
      // 31-99
      const tens = Math.floor(n / 10) * 10;
      const ones = n % 10;
      const tensWords = { 30:'treinta', 40:'cuarenta', 50:'cincuenta', 60:'sesenta', 70:'setenta', 80:'ochenta', 90:'noventa' };
      if (ones === 0) return tensWords[tens];
      return tensWords[tens] + ' y ' + SPANISH_NUMS[ones];
    }
    if (n < 1000) {
      const hundreds = Math.floor(n / 100);
      const rest = n % 100;
      const hundredsWords = {
        1: 'cien', // exactly 100
        2: 'doscientos', 3: 'trescientos', 4: 'cuatrocientos', 5: 'quinientos',
        6: 'seiscientos', 7: 'setecientos', 8: 'ochocientos', 9: 'novecientos'
      };
      let result;
      if (n === 100) return 'cien';
      if (hundreds === 1) result = 'ciento';
      else result = hundredsWords[hundreds];
      if (rest === 0) return result;
      return result + ' ' + numberToSpanish(rest);
    }
    // 1000-9999
    const thousands = Math.floor(n / 1000);
    const rest = n % 1000;
    let result;
    if (thousands === 1) result = 'mil';
    else result = numberToSpanish(thousands) + ' mil';
    if (rest === 0) return result;
    return result + ' ' + numberToSpanish(rest);
  }

  // Days of the week
  const DAYS_ES = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
  const DAYS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const MONTHS_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Helper that generates a single sprint round for a given tense.
  // Used by every sprint variant (presente, preterito, etc.) so we don't duplicate the logic.
  // If tense is null, picks a random tense from the 5 indicative tenses.
  function generateSprintRound(fixedTense) {
    const tensesAvailable = [
      { key: 'presente', label: 'present' },
      { key: 'preterito', label: 'preterite' },
      { key: 'imperfecto', label: 'imperfect' },
      { key: 'futuro', label: 'future' },
      { key: 'condicional', label: 'conditional' }
    ];
    const pronouns = [
      { idx: 0, label: 'yo' },
      { idx: 1, label: 'tú' },
      { idx: 2, label: 'él / ella / usted' },
      { idx: 3, label: 'nosotros' },
      { idx: 5, label: 'ellos / ellas / ustedes' }
    ];
    const usable = verbs.filter(v =>
      v.conj && v.conj.presente && v.conj.preterito && v.conj.imperfecto && v.conj.futuro && v.conj.condicional
    );
    const verb = usable[Math.floor(Math.random() * usable.length)];
    const tense = fixedTense
      ? tensesAvailable.find(t => t.key === fixedTense)
      : tensesAvailable[Math.floor(Math.random() * tensesAvailable.length)];
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const answer = verb.conj[tense.key][pronoun.idx];
    return {
      promptLabel: 'Conjugate the verb',
      promptDisplay: `<strong>${verb.inf}</strong><br><span style="font-size: 14px; opacity: 0.7;">${verb.meaning.split('·')[0].trim()}</span><br><span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--rojo); margin-top: 8px; display: inline-block;">${pronoun.label} · ${tense.label}</span>`,
      answer: answer,
      hint: 'Accents are forgiven. Just type the conjugated form.'
    };
  }

  // Game definitions
  // "15" → "th", "21" → "st" — for accepting "March 15th"-style answers
  function enOrdinalSuffix(n) {
    if (n % 100 >= 11 && n % 100 <= 13) return 'th';
    if (n % 10 === 1) return 'st';
    if (n % 10 === 2) return 'nd';
    if (n % 10 === 3) return 'rd';
    return 'th';
  }

  const GAMES = {
    // Sprint games — all have isSprint:true. 10/10 to qualify for the leaderboard;
    // partial scores still earn Lucas based on accuracy.
    'verb-sprint': {
      title: 'Sprint · <em>Mixed</em>',
      icon: '⚡',
      maxReward: 50,
      isSprint: true,
      sprintMode: 'mixed',
      sprintLabel: 'All tenses',
      generate: () => generateSprintRound(null)
    },
    'verb-sprint-presente': {
      title: 'Sprint · <em>Presente</em>',
      icon: '🟢',
      maxReward: 40,
      isSprint: true,
      sprintMode: 'presente',
      sprintLabel: 'Present',
      generate: () => generateSprintRound('presente')
    },
    'verb-sprint-preterito': {
      title: 'Sprint · <em>Pretérito</em>',
      icon: '🔴',
      maxReward: 45,
      isSprint: true,
      sprintMode: 'preterito',
      sprintLabel: 'Preterite',
      generate: () => generateSprintRound('preterito')
    },
    'verb-sprint-imperfecto': {
      title: 'Sprint · <em>Imperfecto</em>',
      icon: '🟡',
      maxReward: 45,
      isSprint: true,
      sprintMode: 'imperfecto',
      sprintLabel: 'Imperfect',
      generate: () => generateSprintRound('imperfecto')
    },
    'verb-sprint-futuro': {
      title: 'Sprint · <em>Futuro</em>',
      icon: '🔵',
      maxReward: 45,
      isSprint: true,
      sprintMode: 'futuro',
      sprintLabel: 'Future',
      generate: () => generateSprintRound('futuro')
    },
    'verb-sprint-condicional': {
      title: 'Sprint · <em>Condicional</em>',
      icon: '🟣',
      maxReward: 45,
      isSprint: true,
      sprintMode: 'condicional',
      sprintLabel: 'Conditional',
      generate: () => generateSprintRound('condicional')
    },
    'familytree': {
      title: 'Family <em>tree</em>',
      icon: '🌳',
      maxReward: 40,
      generate: () => generateFamilyTreeRound()
    },
    'days': {
      title: 'Days of the <em>week</em>',
      icon: '📅',
      maxReward: 25,
      generate: () => {
        // Half the time go EN→ES, half ES→EN
        const idx = Math.floor(Math.random() * 7);
        const direction = Math.random() < 0.5 ? 'en2es' : 'es2en';
        if (direction === 'en2es') {
          return {
            promptLabel: 'Translate to Spanish',
            promptDisplay: DAYS_EN[idx],
            answer: DAYS_ES[idx],
            hint: 'Lowercase, no accent on most days'
          };
        } else {
          return {
            promptLabel: 'Translate to English',
            promptDisplay: DAYS_ES[idx],
            answer: DAYS_EN[idx].toLowerCase(),
            hint: 'Lowercase'
          };
        }
      }
    },
    'plurals': {
      title: 'Singular ↔ <em>plural</em>',
      icon: '🔁',
      maxReward: 35,
      generate: () => {
        // Pairs cover the core rules: vowel +s, consonant +es, -z → -ces,
        // accents that appear (exámenes) and disappear (canciones),
        // and no-change words (el paraguas → los paraguas).
        const pairs = [
          ['el libro', 'los libros'], ['la mesa', 'las mesas'], ['la casa', 'las casas'],
          ['el estudiante', 'los estudiantes'], ['la clase', 'las clases'],
          ['el papel', 'los papeles'], ['el profesor', 'los profesores'],
          ['la ciudad', 'las ciudades'], ['el reloj', 'los relojes'],
          ['el lápiz', 'los lápices'], ['la luz', 'las luces'],
          ['la voz', 'las voces'], ['el pez', 'los peces'],
          ['la canción', 'las canciones'], ['la región', 'las regiones'],
          ['el autobús', 'los autobuses'], ['el examen', 'los exámenes'],
          ['el joven', 'los jóvenes'], ['la imagen', 'las imágenes'],
          ['la mano', 'las manos'], ['el problema', 'los problemas'],
          ['el mapa', 'los mapas'], ['la flor', 'las flores'],
          ['el paraguas', 'los paraguas'], ['el cumpleaños', 'los cumpleaños']
        ];
        const pick = pairs[Math.floor(Math.random() * pairs.length)];
        const stripArticle = s => s.replace(/^(el|la|los|las)\s+/, '');
        // Half the time singular→plural, half plural→singular
        if (Math.random() < 0.5) {
          return {
            promptLabel: 'Make it plural (article too)',
            promptDisplay: pick[0],
            answer: pick[1],
            validAnswers: [pick[1], stripArticle(pick[1])],
            hint: 'los/las + plural noun'
          };
        }
        return {
          promptLabel: 'Make it singular (article too)',
          promptDisplay: pick[1],
          answer: pick[0],
          validAnswers: [pick[0], stripArticle(pick[0])],
          hint: 'el/la + singular noun'
        };
      }
    },
    // Vocab games run their own deck-picker flow (see startVocabGame) — these
    // entries exist so they show up in the best-scores grid and reward tiers.
    'vocab-type': {
      title: 'Vocab · <em>Type it</em>',
      icon: '⌨️',
      maxReward: 30,
      isCustomFlow: true,
      generate: () => null
    },
    'vocab-mc': {
      title: 'Vocab · <em>Pick it</em>',
      icon: '✅',
      maxReward: 20,
      isCustomFlow: true,
      generate: () => null
    },
    'dates': {
      title: 'Speaking <em>dates</em>',
      icon: '🗓️',
      maxReward: 35,
      generate: () => {
        const month = Math.floor(Math.random() * 12);
        // Day 1-28 to keep it valid in any month
        const day = Math.floor(Math.random() * 28) + 1;
        // Spanish format: "el [day] de [month]" — for the first, "el primero de [month]"
        const dayWord = day === 1 ? 'primero' : numberToSpanish(day);
        const esDate = 'el ' + dayWord + ' de ' + MONTHS_ES[month];
        // Half the time EN→ES, half ES→EN
        if (Math.random() < 0.5) {
          return {
            promptLabel: 'Write this date in Spanish',
            promptDisplay: MONTHS_EN[month] + ' ' + day,
            answer: esDate,
            validAnswers: day === 1
              ? [esDate, 'el uno de ' + MONTHS_ES[month]]
              : [esDate],
            hint: 'Format: "el [day] de [month]" — use "primero" for the 1st'
          };
        } else {
          const mEn = MONTHS_EN[month];
          const ord = enOrdinalSuffix(day);
          return {
            promptLabel: 'Write this date in English',
            promptDisplay: esDate,
            answer: mEn + ' ' + day,
            validAnswers: [
              mEn + ' ' + day,
              mEn + ' ' + day + ord,
              'the ' + day + ord + ' of ' + mEn,
              day + ' ' + mEn,
              day + ord + ' of ' + mEn
            ],
            hint: 'Like "' + MONTHS_EN[(month + 5) % 12] + ' 12"'
          };
        }
      }
    },
    'numbers-small': {
      title: 'Numbers <em>1–30</em>',
      icon: '🔢',
      maxReward: 25,
      generate: () => {
        const n = Math.floor(Math.random() * 30) + 1;
        if (Math.random() < 0.5) {
          return {
            promptLabel: 'Write this number in Spanish',
            promptDisplay: String(n),
            answer: numberToSpanish(n),
            hint: 'One word, lowercase'
          };
        }
        return {
          promptLabel: 'What number is this? Type the digits',
          promptDisplay: numberToSpanish(n),
          answer: String(n),
          hint: 'Digits, like 14'
        };
      }
    },
    'numbers-mid': {
      title: 'Numbers <em>30–100</em>',
      icon: '🔠',
      maxReward: 35,
      generate: () => {
        // Mix: half round tens, half compound numbers, plus 100 occasionally
        const r = Math.random();
        let n;
        if (r < 0.15) {
          // Round tens: 30, 40, 50, 60, 70, 80, 90
          n = (Math.floor(Math.random() * 7) + 3) * 10;
        } else if (r < 0.95) {
          // Compound: 31-99 (skip the tens themselves)
          do { n = Math.floor(Math.random() * 70) + 30; } while (n % 10 === 0);
        } else {
          // Occasionally 100
          n = 100;
        }
        if (Math.random() < 0.5) {
          return {
            promptLabel: 'Write this number in Spanish',
            promptDisplay: String(n),
            answer: numberToSpanish(n),
            hint: '"treinta y cinco" — use "y" between tens and ones'
          };
        }
        return {
          promptLabel: 'What number is this? Type the digits',
          promptDisplay: numberToSpanish(n),
          answer: String(n),
          hint: 'Digits, like 47'
        };
      }
    },
    'numbers-big': {
      title: 'Numbers <em>100–9999</em>',
      icon: '💯',
      maxReward: 50,
      generate: () => {
        // Mix of round numbers and tricky ones
        const r = Math.random();
        let n;
        if (r < 0.2) n = (Math.floor(Math.random() * 9) + 1) * 100; // round hundreds
        else if (r < 0.4) n = (Math.floor(Math.random() * 9) + 1) * 1000; // round thousands
        else n = Math.floor(Math.random() * 9900) + 100; // any
        if (Math.random() < 0.5) {
          return {
            promptLabel: 'Write this number in Spanish',
            promptDisplay: n.toLocaleString('en-US'),
            answer: numberToSpanish(n),
            hint: 'Use "y" between tens and ones (cuarenta y cinco). Use "ciento" for 100s combined with more.'
          };
        }
        return {
          promptLabel: 'What number is this? Type the digits',
          promptDisplay: numberToSpanish(n),
          answer: n.toLocaleString('en-US'),
          validAnswers: [String(n), n.toLocaleString('en-US')],
          hint: 'Digits, like 1250'
        };
      }
    },
    'time': {
      title: 'Telling <em>time</em>',
      icon: '🕐',
      maxReward: 40,
      generate: () => {
        // Generate a random time. Avoid 12:00 to keep it cleaner.
        const hour = Math.floor(Math.random() * 12) + 1; // 1-12
        // Common minutes: 00, 15, 30, 45, plus other multiples of 5
        const minuteOptions = [0, 0, 0, 15, 15, 30, 30, 45, 45, 5, 10, 20, 25, 35, 40, 50, 55];
        const minute = minuteOptions[Math.floor(Math.random() * minuteOptions.length)];
        const display = hour + ':' + String(minute).padStart(2, '0');
        const validAnswers = timeToSpanish(hour, minute);
        if (Math.random() < 0.5) {
          return {
            promptLabel: '¿Qué hora es? Write it out in Spanish',
            promptDisplay: display,
            answer: validAnswers[0], // primary answer shown if wrong
            validAnswers: validAnswers, // accept any of these
            hint: 'Es la una... / Son las dos y media / Son las tres menos cuarto / Andean: cinco para las nueve'
          };
        }
        // Reverse: read the Spanish, type the digital time
        return {
          promptLabel: 'What time is this? Type it in digits',
          promptDisplay: validAnswers[0],
          answer: display,
          validAnswers: [display, String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0')],
          hint: 'Digits, like 3:30'
        };
      }
    },
    'weather': {
      title: 'The <em>weather</em>',
      icon: '🌤️',
      maxReward: 30,
      generate: () => {
        // Each scenario: emoji visual + accepted Spanish answers + its own
        // hint (shown as the input placeholder) telling the expected form.
        const scenarios = [
          { display: '☀️', label: 'How would you describe this weather?', answers: ['hace sol', 'está soleado'], primary: 'hace sol', hint: 'Hace… (a weather expression)' },
          { display: '🥵 35°C / 95°F', label: 'How would you describe this weather?', answers: ['hace calor', 'hace mucho calor'], primary: 'hace calor', hint: 'Hace… (a weather expression)' },
          { display: '🥶 -5°C / 23°F', label: 'How would you describe this weather? (the temperature, not snow)', answers: ['hace frío', 'hace mucho frío'], primary: 'hace frío', hint: 'Hace… (a weather expression)' },
          { display: '💨', label: 'How would you describe this weather?', answers: ['hace viento'], primary: 'hace viento', hint: 'Hace… (a weather expression)' },
          { display: '🌧️', label: 'How would you say "it\'s raining"?', answers: ['llueve', 'está lloviendo'], primary: 'llueve', hint: 'One verb — or "está + -ando"' },
          { display: '🌨️', label: 'How would you say "it\'s snowing"?', answers: ['nieva', 'está nevando'], primary: 'nieva', hint: 'One verb — or "está + -ando"' },
          { display: '☁️', label: 'How would you describe this weather?', answers: ['está nublado', 'hay nubes'], primary: 'está nublado', hint: 'Está + adjective (or Hay + noun)' },
          { display: '⛈️', label: 'How would you describe this weather? (the storm itself)', answers: ['hay tormenta', 'hace tormenta', 'hay una tormenta'], primary: 'hay tormenta', hint: 'Hay + noun' },
          { display: '🌫️', label: 'How would you describe this weather? (fog)', answers: ['hay niebla'], primary: 'hay niebla', hint: 'Hay + noun' },
          { display: '🌤️', label: 'How would you describe this nice day overall?', answers: ['hace buen tiempo'], primary: 'hace buen tiempo', hint: 'Hace ____ tiempo' },
          // Season questions — la estación, article encouraged
          { display: '🌸 March, April, May', label: 'What season is it? (la estación)', answers: ['la primavera', 'primavera', 'es primavera', 'es la primavera'], primary: 'la primavera', hint: 'The season, with el/la' },
          { display: '☀️ June, July, August', label: 'What season is it? (la estación · Northern Hem.)', answers: ['el verano', 'verano', 'es verano', 'es el verano'], primary: 'el verano', hint: 'The season, with el/la' },
          { display: '🍂 September, October, November', label: 'What season is it? (la estación · Northern Hem.)', answers: ['el otoño', 'otoño', 'es otoño', 'es el otoño'], primary: 'el otoño', hint: 'The season, with el/la' },
          { display: '⛄ December, January, February', label: 'What season is it? (la estación · Northern Hem.)', answers: ['el invierno', 'invierno', 'es invierno', 'es el invierno'], primary: 'el invierno', hint: 'The season, with el/la' },
          // Translations — English shows the article so the Spanish gets one too
          { display: 'the umbrella', label: 'Translate to Spanish (include the article)', answers: ['el paraguas', 'paraguas'], primary: 'el paraguas', hint: 'el/la + noun' },
          { display: 'the snow', label: 'Translate to Spanish (include the article)', answers: ['la nieve', 'nieve'], primary: 'la nieve', hint: 'el/la + noun' },
          { display: 'the rain', label: 'Translate to Spanish (include the article)', answers: ['la lluvia', 'lluvia'], primary: 'la lluvia', hint: 'el/la + noun' },
          { display: 'the cloud', label: 'Translate to Spanish (include the article)', answers: ['la nube', 'nube'], primary: 'la nube', hint: 'el/la + noun' },
          { display: 'the lightning', label: 'Translate to Spanish (include the article)', answers: ['el relámpago', 'relámpago'], primary: 'el relámpago', hint: 'el/la + noun' },
          { display: 'the thunder', label: 'Translate to Spanish (include the article)', answers: ['el trueno', 'trueno'], primary: 'el trueno', hint: 'el/la + noun' },
          // Reverse direction — read the Spanish, answer in English
          { display: 'Hace sol', label: 'Translate to English', answers: ['it\'s sunny', 'it is sunny', 'its sunny', 'sunny'], primary: 'it\'s sunny', hint: 'In English' },
          { display: 'Hace frío', label: 'Translate to English', answers: ['it\'s cold', 'it is cold', 'its cold', 'cold'], primary: 'it\'s cold', hint: 'In English' },
          { display: 'Hace viento', label: 'Translate to English', answers: ['it\'s windy', 'it is windy', 'its windy', 'windy'], primary: 'it\'s windy', hint: 'In English' },
          { display: 'Está nublado', label: 'Translate to English', answers: ['it\'s cloudy', 'it is cloudy', 'its cloudy', 'cloudy'], primary: 'it\'s cloudy', hint: 'In English' },
          { display: 'Llueve', label: 'Translate to English', answers: ['it\'s raining', 'it is raining', 'its raining', 'raining', 'it rains'], primary: 'it\'s raining', hint: 'In English' },
          { display: 'Nieva', label: 'Translate to English', answers: ['it\'s snowing', 'it is snowing', 'its snowing', 'snowing', 'it snows'], primary: 'it\'s snowing', hint: 'In English' },
          { display: 'Hay niebla', label: 'Translate to English', answers: ['it\'s foggy', 'it is foggy', 'its foggy', 'foggy', 'there is fog', 'there\'s fog'], primary: 'it\'s foggy', hint: 'In English' },
          { display: 'la lluvia', label: 'Translate to English', answers: ['the rain', 'rain'], primary: 'the rain', hint: 'In English' },
          { display: 'la nube', label: 'Translate to English', answers: ['the cloud', 'cloud'], primary: 'the cloud', hint: 'In English' },
          { display: 'el paraguas', label: 'Translate to English', answers: ['the umbrella', 'umbrella'], primary: 'the umbrella', hint: 'In English' }
        ];
        const pick = scenarios[Math.floor(Math.random() * scenarios.length)];
        return {
          promptLabel: pick.label,
          promptDisplay: pick.display,
          answer: pick.primary,
          validAnswers: pick.answers,
          hint: pick.hint
        };
      }
    },
    'tu-usted': {
      title: 'Tú vs. <em>Usted</em>',
      icon: '🗣️',
      maxReward: 30,
      generate: () => {
        // Random social scenario — student types tú or usted
        const scenarios = [
          // tú scenarios
          { display: 'Your best friend from elementary school.', answer: 'tú' },
          { display: 'Your 8-year-old cousin.', answer: 'tú' },
          { display: 'A classmate you sit next to in class.', answer: 'tú' },
          { display: 'Your sister.', answer: 'tú' },
          { display: 'Your boyfriend or girlfriend.', answer: 'tú' },
          { display: 'A 10-year-old you meet at the park.', answer: 'tú' },
          { display: 'A teammate on your soccer team.', answer: 'tú' },
          { display: 'Your dog.', answer: 'tú' },
          { display: 'God in a prayer.', answer: 'tú' },
          { display: 'A teen your age at a friend\'s party.', answer: 'tú' },
          { display: 'Your roommate.', answer: 'tú' },
          { display: 'Your younger brother.', answer: 'tú' },
          // usted scenarios
          { display: 'Your Spanish teacher.', answer: 'usted' },
          { display: 'A police officer.', answer: 'usted' },
          { display: 'Your doctor.', answer: 'usted' },
          { display: 'An 80-year-old stranger on the bus.', answer: 'usted' },
          { display: 'A job interviewer.', answer: 'usted' },
          { display: 'Your friend\'s grandfather you just met.', answer: 'usted' },
          { display: 'The principal of your school.', answer: 'usted' },
          { display: 'A waiter at a formal restaurant.', answer: 'usted' },
          { display: 'A judge in court.', answer: 'usted' },
          { display: 'A 60-year-old store clerk you don\'t know.', answer: 'usted' },
          { display: 'A professor at a university.', answer: 'usted' },
          { display: 'Your mother\'s elderly coworker.', answer: 'usted' },
          { display: 'A senator giving a speech.', answer: 'usted' },
          { display: 'The CEO of a company you\'re visiting.', answer: 'usted' }
        ];
        const pick = scenarios[Math.floor(Math.random() * scenarios.length)];
        return {
          promptLabel: 'Speaking to this person, would you use…',
          promptDisplay: pick.display,
          answer: pick.answer,
          validAnswers: [pick.answer],
          hint: 'tú or usted?'
        };
      }
    },
    'adjectives': {
      title: 'Adjective <em>agreement</em>',
      icon: '✍️',
      maxReward: 35,
      generate: () => {
        // Two formats:
        //  (a) FILL-IN: shows a noun + a "lemma" adjective in parens; student types the correctly-agreeing form
        //  (b) FIX-IT: shows a noun phrase with a WRONG adjective form; student types the correct form
        //
        // Each entry: { noun, gender (m/f), number (sing/plur), adjLemma, correctForm, type }
        // adjLemma format options:
        //  - "alto" → 4 forms (alto/alta/altos/altas)
        //  - "grande" → 2 forms (grande/grandes)
        //  - "feliz" → 2 forms (feliz/felices)
        //  - "trabajador" → 4 forms (trabajador/trabajadora/trabajadores/trabajadoras)
        //  - "fácil" → 2 forms (fácil/fáciles)

        // Helper: derive the correct adjective form given lemma + gender + number
        function agree(lemma, g, n) {
          // Special pattern: ends in -ador, -edor, -idor, -or (forms feminine -a)
          if (/(?:[aei]dor|or)$/.test(lemma) && lemma !== 'mejor' && lemma !== 'peor' && lemma !== 'mayor' && lemma !== 'menor') {
            // trabajador → trabajadora/trabajadores/trabajadoras
            if (n === 'sing') return g === 'f' ? lemma + 'a' : lemma;
            return g === 'f' ? lemma + 'as' : lemma + 'es';
          }
          // Ends in -o (4 forms)
          if (lemma.endsWith('o')) {
            const stem = lemma.slice(0, -1);
            if (n === 'sing') return stem + (g === 'f' ? 'a' : 'o');
            return stem + (g === 'f' ? 'as' : 'os');
          }
          // Ends in -z (changes z→c before -es): feliz → felices
          if (lemma.endsWith('z')) {
            if (n === 'sing') return lemma;
            return lemma.slice(0, -1) + 'ces';
          }
          // Ends in -e or consonant (2 forms): grande/grandes, fácil/fáciles, joven/jóvenes
          if (n === 'sing') return lemma;
          // For consonants, add -es; for -e, add -s
          if (/[aeiou]$/.test(lemma)) return lemma + 's';
          return lemma + 'es';
        }

        const items = [
          // -O ending (4 forms) — alto, bajo, bonito, feo, simpático, etc.
          { noun: 'chica', gender: 'f', number: 'sing', lemma: 'alto', english: 'tall' },
          { noun: 'chicos', gender: 'm', number: 'plur', lemma: 'alto', english: 'tall' },
          { noun: 'casa', gender: 'f', number: 'sing', lemma: 'bonito', english: 'pretty' },
          { noun: 'flores', gender: 'f', number: 'plur', lemma: 'bonito', english: 'pretty' },
          { noun: 'perro', gender: 'm', number: 'sing', lemma: 'pequeño', english: 'small' },
          { noun: 'casas', gender: 'f', number: 'plur', lemma: 'pequeño', english: 'small' },
          { noun: 'libros', gender: 'm', number: 'plur', lemma: 'nuevo', english: 'new' },
          { noun: 'estudiantes', gender: 'f', number: 'plur', lemma: 'inteligente', english: 'intelligent' },
          { noun: 'amigas', gender: 'f', number: 'plur', lemma: 'simpático', english: 'nice/friendly' },
          { noun: 'profesor', gender: 'm', number: 'sing', lemma: 'serio', english: 'serious' },
          { noun: 'comida', gender: 'f', number: 'sing', lemma: 'rico', english: 'tasty' },
          { noun: 'sopa', gender: 'f', number: 'sing', lemma: 'frío', english: 'cold' },
          { noun: 'coche', gender: 'm', number: 'sing', lemma: 'rápido', english: 'fast' },
          { noun: 'chica', gender: 'f', number: 'sing', lemma: 'tímido', english: 'shy' },
          { noun: 'manzanas', gender: 'f', number: 'plur', lemma: 'rojo', english: 'red' },

          // -E ending (2 forms) — grande, inteligente, amable, fuerte, triste, alegre
          { noun: 'casa', gender: 'f', number: 'sing', lemma: 'grande', english: 'big' },
          { noun: 'casas', gender: 'f', number: 'plur', lemma: 'grande', english: 'big' },
          { noun: 'libros', gender: 'm', number: 'plur', lemma: 'interesante', english: 'interesting' },
          { noun: 'profesoras', gender: 'f', number: 'plur', lemma: 'amable', english: 'kind' },
          { noun: 'hombre', gender: 'm', number: 'sing', lemma: 'fuerte', english: 'strong' },

          // Consonant ending (2 forms) — fácil, difícil, joven, feliz
          { noun: 'examen', gender: 'm', number: 'sing', lemma: 'fácil', english: 'easy' },
          { noun: 'exámenes', gender: 'm', number: 'plur', lemma: 'fácil', english: 'easy' },
          { noun: 'tareas', gender: 'f', number: 'plur', lemma: 'difícil', english: 'difficult' },
          { noun: 'niño', gender: 'm', number: 'sing', lemma: 'feliz', english: 'happy' },
          { noun: 'niños', gender: 'm', number: 'plur', lemma: 'feliz', english: 'happy' },

          // -OR ending (4 forms with feminine) — trabajador
          { noun: 'estudiante', gender: 'f', number: 'sing', lemma: 'trabajador', english: 'hard-working' },
          { noun: 'mujeres', gender: 'f', number: 'plur', lemma: 'trabajador', english: 'hard-working' },
          { noun: 'hombre', gender: 'm', number: 'sing', lemma: 'trabajador', english: 'hard-working' }
        ];

        const pick = items[Math.floor(Math.random() * items.length)];
        const correctForm = agree(pick.lemma, pick.gender, pick.number);

        // Decide question type: 50/50 split
        const isFixIt = Math.random() < 0.5;

        if (isFixIt) {
          // FIX-IT: show a noun phrase with a WRONG adjective form. Student types correct.
          // Generate a wrong form different from the correct one.
          const wrongCandidates = [
            agree(pick.lemma, pick.gender === 'm' ? 'f' : 'm', pick.number),
            agree(pick.lemma, pick.gender, pick.number === 'sing' ? 'plur' : 'sing'),
            agree(pick.lemma, pick.gender === 'm' ? 'f' : 'm', pick.number === 'sing' ? 'plur' : 'sing'),
            pick.lemma  // unchanged lemma is often wrong
          ].filter(w => w !== correctForm);
          const wrongForm = wrongCandidates[Math.floor(Math.random() * wrongCandidates.length)];

          return {
            promptLabel: 'Fix the adjective — type the CORRECT form',
            promptDisplay: pick.noun + ' ' + wrongForm,
            answer: correctForm,
            validAnswers: [correctForm],
            hint: pick.english + ' · ' + (pick.gender === 'm' ? 'masc.' : 'fem.') + ' ' + (pick.number === 'sing' ? 'sing.' : 'plur.')
          };
        } else {
          // FILL-IN: show "noun (lemma)" — student types correct form
          return {
            promptLabel: 'Type the right form of the adjective',
            promptDisplay: pick.noun + ' (' + pick.lemma + ')',
            answer: correctForm,
            validAnswers: [correctForm],
            hint: pick.english + ' · ' + (pick.gender === 'm' ? 'masc.' : 'fem.') + ' ' + (pick.number === 'sing' ? 'sing.' : 'plur.')
          };
        }
      }
    },
    'reflexives': {
      title: 'Daily routine <em>reflexives</em>',
      icon: '🚿',
      maxReward: 35,
      generate: () => {
        // Each prompt: subject pronoun + reflexive verb (in English) → student types full "pronoun verb" form
        // pidx: 0=yo, 1=tú, 2=él/ella, 3=nosotros, 4=vosotros, 5=ellos
        // We skip vosotros (idx 4) by default
        const subjects = [
          { pidx: 0, label: 'I' },
          { pidx: 1, label: 'You (informal)' },
          { pidx: 2, label: 'He / She' },
          { pidx: 3, label: 'We' },
          { pidx: 5, label: 'They' }
        ];
        const verbs = [
          { inf: 'llamarse', en: 'to be named', forms: ['me llamo','te llamas','se llama','nos llamamos','os llamáis','se llaman'] },
          { inf: 'levantarse', en: 'to get up', forms: ['me levanto','te levantas','se levanta','nos levantamos','os levantáis','se levantan'] },
          { inf: 'ducharse', en: 'to shower', forms: ['me ducho','te duchas','se ducha','nos duchamos','os ducháis','se duchan'] },
          { inf: 'lavarse', en: 'to wash oneself', forms: ['me lavo','te lavas','se lava','nos lavamos','os laváis','se lavan'] },
          { inf: 'despertarse', en: 'to wake up', forms: ['me despierto','te despiertas','se despierta','nos despertamos','os despertáis','se despiertan'] },
          { inf: 'acostarse', en: 'to go to bed', forms: ['me acuesto','te acuestas','se acuesta','nos acostamos','os acostáis','se acuestan'] },
          { inf: 'vestirse', en: 'to get dressed', forms: ['me visto','te vistes','se viste','nos vestimos','os vestís','se visten'] },
          { inf: 'sentirse', en: 'to feel', forms: ['me siento','te sientes','se siente','nos sentimos','os sentís','se sienten'] }
        ];
        const subj = subjects[Math.floor(Math.random() * subjects.length)];
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const answer = verb.forms[subj.pidx];
        return {
          promptLabel: 'Conjugate: ' + subj.label + ' (' + verb.en + ')',
          promptDisplay: verb.inf,
          answer: answer,
          validAnswers: [answer],
          hint: 'Type pronoun + verb (e.g. "me lavo")'
        };
      }
    },
    'object-pronouns': {
      title: 'Object <em>pronouns</em>',
      icon: '🎯',
      maxReward: 35,
      generate: () => {
        // Each item: { phrase (the noun phrase to replace), kind (DO/IO), answer (the pronoun), context (a short sentence showing the noun) }
        const items = [
          // DIRECT OBJECT — gender/number agreement
          { phrase: 'el libro', kind: 'DO', answer: 'lo', context: 'Compro el libro.' },
          { phrase: 'la casa', kind: 'DO', answer: 'la', context: 'Vemos la casa.' },
          { phrase: 'los zapatos', kind: 'DO', answer: 'los', context: 'Quiero los zapatos.' },
          { phrase: 'las manzanas', kind: 'DO', answer: 'las', context: 'Como las manzanas.' },
          { phrase: 'a María', kind: 'DO', answer: 'la', context: 'Veo a María.' },
          { phrase: 'a Pedro', kind: 'DO', answer: 'lo', context: 'Conozco a Pedro.' },
          { phrase: 'a mis hermanos', kind: 'DO', answer: 'los', context: 'Llevo a mis hermanos al partido.' },
          { phrase: 'a mis hermanas', kind: 'DO', answer: 'las', context: 'Visito a mis hermanas.' },
          { phrase: 'el coche', kind: 'DO', answer: 'lo', context: 'Lavo el coche.' },
          { phrase: 'la mochila', kind: 'DO', answer: 'la', context: 'Llevo la mochila.' },
          { phrase: 'los problemas', kind: 'DO', answer: 'los', context: 'Resuelvo los problemas.' },
          { phrase: 'las llaves', kind: 'DO', answer: 'las', context: 'Tengo las llaves.' },
          { phrase: 'el periódico', kind: 'DO', answer: 'lo', context: 'Leo el periódico.' },
          { phrase: 'la película', kind: 'DO', answer: 'la', context: 'Miramos la película.' },
          { phrase: 'los regalos', kind: 'DO', answer: 'los', context: 'Abrimos los regalos.' },

          // INDIRECT OBJECT — no gender, just number
          { phrase: 'a María', kind: 'IO', answer: 'le', context: 'Doy el libro a María.' },
          { phrase: 'a Pedro', kind: 'IO', answer: 'le', context: 'Hablo a Pedro.' },
          { phrase: 'a mis padres', kind: 'IO', answer: 'les', context: 'Escribo a mis padres.' },
          { phrase: 'a mis amigas', kind: 'IO', answer: 'les', context: 'Mando un mensaje a mis amigas.' },
          { phrase: 'a usted', kind: 'IO', answer: 'le', context: 'Pregunto a usted.' },
          { phrase: 'a ustedes', kind: 'IO', answer: 'les', context: 'Enseño español a ustedes.' },
          { phrase: 'a mi abuela', kind: 'IO', answer: 'le', context: 'Compro flores a mi abuela.' },
          { phrase: 'a los estudiantes', kind: 'IO', answer: 'les', context: 'Explico la lección a los estudiantes.' },
          { phrase: 'a su novio', kind: 'IO', answer: 'le', context: 'Manda cartas a su novio.' },
          { phrase: 'a sus hijos', kind: 'IO', answer: 'les', context: 'Lee un cuento a sus hijos.' }
        ];

        const pick = items[Math.floor(Math.random() * items.length)];
        return {
          promptLabel: pick.kind === 'DO'
            ? 'Direct object: which pronoun replaces the underlined noun?'
            : 'Indirect object: which pronoun replaces the underlined noun?',
          promptDisplay: pick.context.replace(pick.phrase, '<u>' + pick.phrase + '</u>'),
          answer: pick.answer,
          validAnswers: [pick.answer],
          hint: pick.kind === 'DO'
            ? 'lo / la / los / las'
            : 'le / les'
        };
      }
    }
  };

  // Generate all valid Spanish ways to say a given hour:minute
  // Returns an array of acceptable answers (so 3:45 accepts both
  // "son las cuatro menos cuarto" AND "son las tres y cuarenta y cinco")
  function timeToSpanish(hour, minute) {
    const h = hour;
    // For minutes > 30, alternate form uses next hour
    const nextHour = h === 12 ? 1 : h + 1;
    const remainingMin = 60 - minute;

    function hourPhrase(n) {
      // "es la una" for 1, "son las X" for everything else
      if (n === 1) return 'es la una';
      const numWord = numberToSpanish(n);
      return 'son las ' + numWord;
    }

    function hourPhraseFalsy(n) {
      // for "menos" form: "la una menos..." / "las dos menos..."
      if (n === 1) return 'la una';
      return 'las ' + numberToSpanish(n);
    }

    // ANDEAN "para las" form: e.g. 8:55 = "son cinco para las nueve" (lit. "five for nine")
    // Used in Peru, Bolivia, Ecuador, parts of Mexico/Central America.
    // Only applies when minutes > 30 (i.e. for the "X minutes before the next hour" cases).
    function paraLasPhrase(remainingM, nextH) {
      // Forms accepted: "son X para las Y" or "X para las Y" (without "son")
      // Special case: 15 minutes can be "cuarto"
      const remainingPhrase = remainingM === 15 ? 'cuarto' : numberToSpanish(remainingM);
      const targetHourWord = nextH === 1 ? 'la una' : 'las ' + numberToSpanish(nextH);
      return [
        'son ' + remainingPhrase + ' para ' + targetHourWord,
        remainingPhrase + ' para ' + targetHourWord,
        'faltan ' + remainingPhrase + ' para ' + targetHourWord
      ];
    }

    const answers = [];
    if (minute === 0) {
      answers.push(hourPhrase(h) + ' en punto');
      answers.push(hourPhrase(h));
    } else if (minute === 15) {
      answers.push(hourPhrase(h) + ' y cuarto');
      answers.push(hourPhrase(h) + ' y quince');
    } else if (minute === 30) {
      answers.push(hourPhrase(h) + ' y media');
      answers.push(hourPhrase(h) + ' y treinta');
    } else if (minute === 45) {
      // 9:45 = "Son las diez menos cuarto" / "Son quince para las diez" (Andean)
      answers.push(hourPhrase(nextHour) + ' menos cuarto');
      answers.push(hourPhrase(nextHour) + ' menos quince');
      answers.push(hourPhrase(h) + ' y cuarenta y cinco');
      // Andean variants:
      paraLasPhrase(15, nextHour).forEach(a => answers.push(a));
    } else if (minute < 30) {
      // "son las X y Y"
      answers.push(hourPhrase(h) + ' y ' + numberToSpanish(minute));
    } else {
      // > 30 and !== 45: prefer "menos" form, but accept additive form too AND the Andean "para las"
      answers.push(hourPhrase(nextHour) + ' menos ' + numberToSpanish(remainingMin));
      answers.push(hourPhrase(h) + ' y ' + numberToSpanish(minute));
      // Andean variants:
      paraLasPhrase(remainingMin, nextHour).forEach(a => answers.push(a));
    }
    return answers;
  }

  function getGameBestScore(gameId) {
    const key = 'game_best_' + gameId;
    return STATE[key] || 0;
  }

  function setGameBestScore(gameId, score) {
    const key = 'game_best_' + gameId;
    if (score > (STATE[key] || 0)) {
      STATE[key] = score;
      saveState();
    }
  }

  function renderGamesHub() {
    const container = document.getElementById('gameBestScores');
    if (!container) return;
    container.innerHTML = Object.keys(GAMES).map(id => {
      const best = getGameBestScore(id);
      const game = GAMES[id];
      const cleanTitle = game.title.replace(/<[^>]+>/g, '');
      return `
        <div class="best-score-card">
          <span class="name">${cleanTitle}</span>
          ${best > 0
            ? `<span class="value">${best}/10</span>`
            : `<span class="empty">—</span>`}
        </div>
      `;
    }).join('');

    // SPRINT-SPECIFIC RENDERING
    // Two pieces: (a) per-card "best time" label below each sprint card,
    // (b) the sprint leaderboard panel at the bottom of the sprints section.
    if (!STATE.sprintBest) STATE.sprintBest = {};

    // Per-card best-time labels under each sprint card
    const sprintBestMap = {
      'verb-sprint-presente': 'sprint-best-presente',
      'verb-sprint-preterito': 'sprint-best-preterito',
      'verb-sprint-imperfecto': 'sprint-best-imperfecto',
      'verb-sprint-futuro': 'sprint-best-futuro',
      'verb-sprint-condicional': 'sprint-best-condicional',
      'verb-sprint': 'sprint-best-mixed'
    };
    Object.entries(sprintBestMap).forEach(([gameId, elId]) => {
      const el = document.getElementById(elId);
      if (!el) return;
      const best = STATE.sprintBest[gameId];
      if (best != null) {
        el.innerHTML = `<strong style="color: var(--verde);">⏱ Your best: ${best.toFixed(1)}s</strong>`;
      } else {
        el.textContent = 'No qualifying time yet';
      }
    });

    // Sprint leaderboard panel (dark card)
    const leaderboard = document.getElementById('sprintLeaderboard');
    if (leaderboard) {
      const sprintIds = Object.keys(GAMES).filter(id => GAMES[id].isSprint);
      // Sort: qualified sprints first (by fastest time), then unqualified
      const qualified = sprintIds
        .filter(id => STATE.sprintBest[id] != null)
        .sort((a, b) => STATE.sprintBest[a] - STATE.sprintBest[b]);
      const unqualified = sprintIds.filter(id => STATE.sprintBest[id] == null);
      const ordered = [...qualified, ...unqualified];

      if (qualified.length === 0) {
        leaderboard.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 16px; text-align: center; color: rgba(244,237,224,0.6); font-family: 'Fraunces', serif; font-style: italic; font-size: 14px;">
            No qualifying times yet. Get 10/10 on any sprint to land on the leaderboard.
          </div>
        `;
      } else {
        leaderboard.innerHTML = ordered.map((id, idx) => {
          const game = GAMES[id];
          const best = STATE.sprintBest[id];
          const rank = best != null ? idx + 1 : null;
          const cleanLabel = game.sprintLabel || game.title.replace(/<[^>]+>/g, '');
          const isQualified = best != null;
          return `
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: ${isQualified ? 'rgba(244,237,224,0.06)' : 'rgba(244,237,224,0.02)'}; border: 1px solid ${isQualified ? 'rgba(244,237,224,0.15)' : 'rgba(244,237,224,0.08)'}; border-radius: 3px;">
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: ${isQualified ? 'var(--ocre)' : 'rgba(244,237,224,0.3)'}; min-width: 22px; text-align: center; font-weight: 600;">
                ${isQualified ? '#' + rank : '—'}
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-family: 'DM Serif Display', serif; font-size: 14px; line-height: 1.2; ${isQualified ? '' : 'opacity: 0.55;'}">${cleanLabel}</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: ${isQualified ? 'var(--paper)' : 'rgba(244,237,224,0.4)'}; margin-top: 2px;">
                  ${isQualified ? best.toFixed(1) + 's' : 'Not qualified'}
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  // -- Game runtime
  let gameState = null; // { gameId, round, totalRounds, score, current, history }

  function startGame(gameId) {
    if (gameId === 'match') {
      startMatchGame();
      return;
    }
    if (gameId === 'articles' || gameId === 'articles-translate' || gameId === 'articles-translate-en') {
      renderArticleLevelPicker(gameId);
      return;
    }
    if (gameId === 'vocab-type') { startVocabGame('type'); return; }
    if (gameId === 'vocab-mc') { startVocabGame('mc'); return; }
    const game = GAMES[gameId];
    const container = document.getElementById('game-detail-content');
    if (!game) {
      container.innerHTML = '<p style="color: var(--ink-soft); padding: 24px 0;">Game not found. <a href="#/juegos">Back to games</a></p>';
      return;
    }
    gameState = {
      gameId,
      round: 0,
      totalRounds: 10,
      score: 0,
      current: null,
      history: [],
      // Sprint fields: start time recorded once on first round render so the timer
      // doesn't count the moment before students even see the first question
      isSprint: !!game.isSprint,
      sprintStart: null,
      sprintEnd: null
    };
    renderGameRound();
  }

  // ============================================================================
  // MATCHING GAME — deck-powered, timed
  // ----------------------------------------------------------------------------
  // Pick any vocab deck → grid of Spanish & English tiles → tap pairs to match
  // them → race the clock. Best time per deck saved in STATE.matchBest.
  // ============================================================================

  let matchState = null;

  // Friendly deck labels for the picker (reuses deck keys from `decks`)
  const MATCH_DECK_LABELS = {
    cotidiano: 'Everyday', escuela: 'School Life', emociones: 'Emotions',
    viajes: 'Travel', literatura: 'Literature', familia: 'Family',
    comida: 'Food', saludos: 'Greetings', deportes: 'Sports',
    colores: 'Colors', clases: 'Classes', salon: 'Classroom',
    relaciones: 'Relationships', adjetivos: 'Adjectives', adverbios: 'Adverbs',
    cuerpo: 'Body Parts', peru: '🇵🇪 Perú', espana: '🇪🇸 España',
    argentina: '🇦🇷 Argentina', mexico: '🇲🇽 México', colombia: '🇨🇴 Colombia',
    guatemala: '🇬🇹 Guatemala', honduras: '🇭🇳 Honduras', uruguay: '🇺🇾 Uruguay', paraguay: '🇵🇾 Paraguay',
    chile: '🇨🇱 Chile', cuba: '🇨🇺 Cuba', elsalvador: '🇸🇻 El Salvador',
    bolivia: '🇧🇴 Bolivia', venezuela: '🇻🇪 Venezuela', puertorico: '🇵🇷 Puerto Rico',
    diadelosmuertos: '💀 Día de los Muertos', futbol: '⚽ El fútbol',
    cumpleanos: '🎂 ¡Feliz cumpleaños!', verbosAr: '-AR Verbs',
    verbosEr: '-ER Verbs', verbosIr: '-IR Verbs',
    gente: 'People', pronombres: 'Pronouns', teneridioms: 'Tener Idioms',
    numeros: 'Numbers', calendario: 'Calendar', tiempo: 'Weather & Seasons',
    aeropuerto: '✈️ Air Travel', rutina: 'Daily Routine', restaurante: '🍽️ Restaurant',
    fiestas: '🎉 Holidays', tecnologia: '💻 Technology', gustar: 'Gustar Verbs',
    preguntas: 'Question Words', ropa: '👕 Clothing', lugares: 'Places in Town',
    casa: '🏠 House & Furniture', preposiciones: 'Prepositions', profesiones: 'Professions',
    animales: '🐾 Animals', hora: '🕐 Telling Time', mandatos: 'Classroom Commands'
  };

  // Sort deck keys alphabetically by their visible label, ignoring leading
  // emoji/punctuation and accents (so "Día" sorts as "Dia", "-AR" as "AR").
  function deckLabelCompare(a, b) {
    const norm = k => (MATCH_DECK_LABELS[k] || k)
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/^[^A-Za-z0-9]+/, '').trim().toLowerCase();
    return norm(a).localeCompare(norm(b));
  }

  function startMatchGame() {
    matchState = { deck: null, pairs: [], tiles: [], selected: null, matched: 0, startTime: null, timerInterval: null, elapsed: 0, locked: false };
    renderMatchDeckPicker();
  }

  function renderMatchDeckPicker() {
    const container = document.getElementById('game-detail-content');
    if (!container) return;
    const deckKeys = Object.keys(decks).filter(k => decks[k] && decks[k].length >= 6).sort(deckLabelCompare);
    container.innerHTML = `
      <a href="#/juegos" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to games</a>
      <div class="match-intro">
        <h2 style="font-family:'DM Serif Display',serif;font-size:32px;font-weight:400;margin-bottom:8px;">Match <em style="color:var(--rojo);font-style:italic;">it</em></h2>
        <p style="color:var(--ink-soft);font-size:15px;margin-bottom:8px;">Pick a deck. Match each Spanish word to its English meaning as fast as you can. Beat your best time.</p>
        <p style="color:var(--ink-soft);font-size:13px;margin-bottom:24px;">Each round uses 8 random pairs from the deck — so it's different every time.</p>
        <div class="match-deck-grid">
          ${deckKeys.map(k => {
            const label = MATCH_DECK_LABELS[k] || k;
            const best = (STATE.matchBest && STATE.matchBest[k]) ? STATE.matchBest[k] : null;
            return `
              <button class="match-deck-btn" onclick="beginMatchRound('${k}')">
                <span class="mdb-label">${label}</span>
                <span class="mdb-best">${best ? 'Best: ' + formatMatchTime(best) : 'Not played'}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function formatMatchTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return m > 0 ? `${m}:${String(rem).padStart(2,'0')}` : `${rem}s`;
  }

  function beginMatchRound(deckKey) {
    const deck = decks[deckKey];
    if (!deck || deck.length < 6) return;
    // Pick up to 8 random entries
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    const count = Math.min(8, shuffled.length);
    const chosen = shuffled.slice(0, count);

    // Build tile list: each pair → one ES tile + one EN tile
    const tiles = [];
    chosen.forEach((entry, i) => {
      // word may contain slashes / parens; keep it but trim
      const esText = entry.word;
      const enText = (entry.back || '').replace(/\s*\(.*?\)\s*/g, '').split(/[;,]/)[0].trim() || entry.back;
      tiles.push({ id: 'p' + i, side: 'es', text: esText, pairId: i, matched: false });
      tiles.push({ id: 'p' + i + '_en', side: 'en', text: enText, pairId: i, matched: false });
    });
    // Shuffle tile positions
    tiles.sort(() => Math.random() - 0.5);

    matchState = {
      deck: deckKey,
      tiles,
      pairCount: count,
      selected: null,
      matched: 0,
      startTime: Date.now(),
      timerInterval: null,
      elapsed: 0,
      locked: false
    };
    renderMatchBoard();
    // Start timer
    matchState.timerInterval = setInterval(() => {
      if (!matchState) return;
      matchState.elapsed = Date.now() - matchState.startTime;
      const el = document.getElementById('match-timer');
      if (el) el.textContent = formatMatchTime(matchState.elapsed);
    }, 200);
  }

  function renderMatchBoard() {
    const container = document.getElementById('game-detail-content');
    if (!container || !matchState) return;
    const label = MATCH_DECK_LABELS[matchState.deck] || matchState.deck;
    container.innerHTML = `
      <a href="javascript:void(0)" onclick="exitMatch()" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to decks</a>
      <div class="match-header">
        <div>
          <div class="match-deck-name">${label}</div>
          <div class="match-progress">${matchState.matched} / ${matchState.pairCount} matched</div>
        </div>
        <div class="match-timer-box">
          <div class="match-timer" id="match-timer">0s</div>
          <div class="match-timer-label">time</div>
        </div>
      </div>
      <div class="match-grid">
        ${matchState.tiles.map(t => `
          <button class="match-tile ${t.side}" data-tid="${t.id}" onclick="tapMatchTile('${t.id}')">
            ${t.text}
          </button>
        `).join('')}
      </div>
    `;
  }

  function tapMatchTile(tileId) {
    if (!matchState || matchState.locked) return;
    const tile = matchState.tiles.find(t => t.id === tileId);
    if (!tile || tile.matched) return;
    const btn = document.querySelector('.match-tile[data-tid="' + tileId + '"]');
    if (!btn) return;

    if (!matchState.selected) {
      // First selection
      matchState.selected = tile;
      btn.classList.add('selected');
      return;
    }

    if (matchState.selected.id === tile.id) {
      // Tapped the same tile — deselect
      matchState.selected = null;
      btn.classList.remove('selected');
      return;
    }

    // Second selection — check for match
    const first = matchState.selected;
    const firstBtn = document.querySelector('.match-tile[data-tid="' + first.id + '"]');

    if (first.pairId === tile.pairId && first.side !== tile.side) {
      // MATCH
      first.matched = true;
      tile.matched = true;
      matchState.matched++;
      if (firstBtn) { firstBtn.classList.remove('selected'); firstBtn.classList.add('matched'); firstBtn.disabled = true; }
      btn.classList.add('matched');
      btn.disabled = true;
      matchState.selected = null;

      const prog = document.querySelector('.match-progress');
      if (prog) prog.textContent = `${matchState.matched} / ${matchState.pairCount} matched`;

      if (matchState.matched === matchState.pairCount) {
        finishMatchRound();
      }
    } else {
      // NO MATCH — flash red, reset
      matchState.locked = true;
      btn.classList.add('wrong');
      if (firstBtn) firstBtn.classList.add('wrong');
      setTimeout(() => {
        if (firstBtn) { firstBtn.classList.remove('wrong', 'selected'); }
        btn.classList.remove('wrong');
        matchState.selected = null;
        matchState.locked = false;
      }, 700);
    }
  }

  function finishMatchRound() {
    if (matchState.timerInterval) clearInterval(matchState.timerInterval);
    const finalTime = matchState.elapsed || (Date.now() - matchState.startTime);
    const deckKey = matchState.deck;

    // Update best time
    if (!STATE.matchBest) STATE.matchBest = {};
    const prevBest = STATE.matchBest[deckKey];
    const isNewBest = !prevBest || finalTime < prevBest;
    if (isNewBest) STATE.matchBest[deckKey] = finalTime;

    // Award Lucas: base 15 for completing, +10 if under 45s, +5 if new best
    let reward = 15;
    let bonusText = [];
    if (finalTime < 45000) { reward += 10; bonusText.push('Speed bonus +10'); }
    if (isNewBest) { reward += 5; bonusText.push('New best +5'); }
    awardCoins(reward, 'Match game: ' + (MATCH_DECK_LABELS[deckKey] || deckKey));

    const container = document.getElementById('game-detail-content');
    if (!container) return;
    container.innerHTML = `
      <div class="match-results">
        <div class="match-results-icon">🎉</div>
        <h2 style="font-family:'DM Serif Display',serif;font-size:32px;font-weight:400;margin-bottom:8px;">¡Completado!</h2>
        <div class="match-final-time">${formatMatchTime(finalTime)}</div>
        ${isNewBest ? '<div class="match-newbest">⭐ New best time!</div>' : `<div class="match-prevbest">Best: ${formatMatchTime(prevBest)}</div>`}
        <div class="match-reward">+${reward} Lucas${bonusText.length ? ' · ' + bonusText.join(' · ') : ''}</div>
        <div class="match-results-actions">
          <button class="btn primary" onclick="beginMatchRound('${deckKey}')">Play again</button>
          <button class="btn" onclick="exitMatch()">Pick another deck</button>
        </div>
      </div>
    `;
  }

  function exitMatch() {
    if (matchState && matchState.timerInterval) clearInterval(matchState.timerInterval);
    renderMatchDeckPicker();
  }

  // ============================================================================
  // VOCAB GAMES — Type it (typed translation) & Pick it (multiple choice).
  // ----------------------------------------------------------------------------
  // Deck-powered like Match it: pick any vocab deck, choose which language you
  // answer in (Spanish, English, or mixed), then 10 rounds. Score-based Lucas
  // with the same tiers as the other games; best score saved per game.
  // ============================================================================
  let vocabState = null;

  function startVocabGame(mode) {
    // Preserve the direction choice across "play again"
    const prevDir = vocabState && vocabState.mode === mode ? vocabState.direction : 'mixed';
    vocabState = { mode, direction: prevDir, deck: null, items: [], round: 0, score: 0, history: [], answered: false, currentEntry: null, currentDir: null };
    renderVocabDeckPicker();
  }

  function vocabGameId() { return vocabState.mode === 'mc' ? 'vocab-mc' : 'vocab-type'; }

  function setVocabDirection(dir) {
    if (!vocabState) return;
    vocabState.direction = dir;
    renderVocabDeckPicker();
  }

  function renderVocabDeckPicker() {
    const container = document.getElementById('game-detail-content');
    if (!container || !vocabState) return;
    const isMc = vocabState.mode === 'mc';
    const deckKeys = Object.keys(decks).filter(k => decks[k] && decks[k].length >= 10).sort(deckLabelCompare);
    const best = getGameBestScore(vocabGameId());
    const dirPill = (dir, label) =>
      `<button class="pill ${vocabState.direction === dir ? 'active' : ''}" onclick="setVocabDirection('${dir}')">${label}</button>`;
    container.innerHTML = `
      <a href="#/juegos" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to games</a>
      <div class="match-intro">
        <h2 style="font-family:'DM Serif Display',serif;font-size:32px;font-weight:400;margin-bottom:8px;">${isMc ? 'Pick' : 'Type'} <em style="color:var(--rojo);font-style:italic;">it</em></h2>
        <p style="color:var(--ink-soft);font-size:15px;margin-bottom:8px;">${isMc
          ? 'Four choices, one right answer. A friendly way into any deck.'
          : 'We show a word, you type the translation. No choices to lean on.'} 10 rounds.${best > 0 ? ' Your best: ' + best + '/10.' : ''}</p>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--ink-soft);">You answer in:</span>
          ${dirPill('es', 'Spanish')}
          ${dirPill('en', 'English')}
          ${dirPill('mixed', 'Mixed')}
        </div>
        <div class="match-deck-grid">
          ${deckKeys.map(k => `
            <button class="match-deck-btn" onclick="beginVocabRound('${k}')">
              <span class="mdb-label">${MATCH_DECK_LABELS[k] || k}</span>
              <span class="mdb-best">${decks[k].length} words</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  // English side of a deck entry, cleaned the same way Match it does
  function vocabCleanEn(back) {
    return (back || '').replace(/\s*\(.*?\)\s*/g, '').split(/[;,]/)[0].trim() || back;
  }

  // All answers accepted for an entry in a given direction
  function vocabAcceptedAnswers(entry, dir) {
    const variants = [];
    if (dir === 'es') {
      // Answer in Spanish: each slash-variant, with and without its article —
      // and number-forgiving: "la aduana" also accepts "aduanas" / "las aduanas"
      // (English glosses like "customs" read as plural, so students pluralize).
      String(entry.word).split('/').forEach(part => {
        const t = part.trim();
        if (!t) return;
        variants.push(t);
        const m = t.match(/^(el|la|un|una|los|las|unos|unas)\s+(.+)$/i);
        const bare = m ? m[2] : t;
        if (m) variants.push(bare);
        if (!/\s/.test(bare) && !/s$/i.test(bare)) {
          const plural = /[aeiouáéíóú]$/i.test(bare) ? bare + 's'
                       : /z$/i.test(bare) ? bare.replace(/z$/i, 'ces')
                       : bare + 'es';
          variants.push(plural);
          const plArt = m ? { el: 'los', la: 'las', un: 'unos', una: 'unas' }[m[1].toLowerCase()] : null;
          if (plArt) variants.push(plArt + ' ' + plural);
        }
      });
    } else {
      // Answer in English: full meaning, paren-stripped, each alternative,
      // and verbs with or without the leading "to"
      const back = String(entry.back || '');
      variants.push(back);
      const stripped = back.replace(/\s*\(.*?\)\s*/g, ' ').trim();
      if (stripped) variants.push(stripped);
      stripped.split(/[;,\/]/).forEach(part => {
        const t = part.trim();
        if (!t) return;
        variants.push(t);
        const noTo = t.replace(/^to\s+/i, '');
        if (noTo !== t) variants.push(noTo);
      });
    }
    return variants;
  }

  function beginVocabRound(deckKey) {
    const deck = decks[deckKey];
    if (!deck || deck.length < 10 || !vocabState) return;
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    vocabState.deck = deckKey;
    vocabState.items = shuffled.slice(0, 10);
    vocabState.round = 0;
    vocabState.score = 0;
    vocabState.history = [];
    renderVocabRound();
  }

  function renderVocabRound() {
    const vs = vocabState;
    const container = document.getElementById('game-detail-content');
    if (!vs || !container) return;
    if (vs.round >= vs.items.length) { renderVocabResults(); return; }

    const entry = vs.items[vs.round];
    const dir = vs.direction === 'mixed' ? (Math.random() < 0.5 ? 'es' : 'en') : vs.direction;
    vs.currentEntry = entry;
    vs.currentDir = dir;
    vs.answered = false;

    // dir 'es' → prompt shows English, student answers in Spanish (and vice versa)
    const promptText = dir === 'es' ? vocabCleanEn(entry.back) : entry.word;
    const label = dir === 'es' ? 'Give the Spanish for…' : 'What does this mean in English?';
    const progress = `Round <strong>${vs.round + 1}</strong> / ${vs.items.length} · Score: <strong>${vs.score}</strong>`;

    let answerArea;
    if (vs.mode === 'mc') {
      const pool = decks[vs.deck].filter(e => e !== entry).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [entry, ...pool].sort(() => Math.random() - 0.5);
      answerArea = `
        <div id="vocabOptions" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:8px;">
          ${options.map(o => `
            <button class="btn" style="border-color:var(--paper);color:var(--paper);text-align:center;padding:14px 16px;font-size:15px;line-height:1.3;"
                    onclick="pickVocabOption(this, ${o === entry})">${dir === 'es' ? o.word : vocabCleanEn(o.back)}</button>
          `).join('')}
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>`;
    } else {
      answerArea = `
        <div class="game-input-row">
          <input type="text" class="game-input" id="vocabInput" autocomplete="off" autocapitalize="off" spellcheck="false"
                 placeholder="${dir === 'es' ? 'In Spanish…' : 'In English…'}"
                 onkeypress="if(event.key==='Enter') submitVocabAnswer()">
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:24px;">
          <button class="btn primary" style="border-color:var(--paper);background:var(--paper);color:var(--ink);" onclick="submitVocabAnswer()">Submit ↵</button>
          <button class="btn" style="border-color:var(--paper);color:var(--paper);margin-left:8px;" onclick="skipVocabRound()">Skip</button>
        </div>`;
    }

    container.innerHTML = `
      <div class="game-prompt-card">
        <div class="game-progress">${progress}</div>
        <div class="game-prompt-label">${label} · ${MATCH_DECK_LABELS[vs.deck] || vs.deck}</div>
        <div class="game-prompt-display">${promptText}</div>
        ${answerArea}
      </div>
    `;
    if (vs.mode !== 'mc') {
      setTimeout(() => { const inp = document.getElementById('vocabInput'); if (inp) inp.focus(); }, 50);
    }
  }

  function vocabPrimaryAnswer() {
    const vs = vocabState;
    return vs.currentDir === 'es' ? vs.currentEntry.word : vocabCleanEn(vs.currentEntry.back);
  }

  function pickVocabOption(btn, isCorrect) {
    const vs = vocabState;
    if (!vs || vs.answered) return;
    vs.answered = true;
    const fb = document.getElementById('gameFeedback');
    document.querySelectorAll('#vocabOptions button').forEach(b => b.disabled = true);
    if (isCorrect) {
      vs.score++;
      btn.style.background = 'var(--verde)';
      btn.style.borderColor = 'var(--verde)';
      if (fb) { fb.textContent = '✓ Correct!'; fb.className = 'game-feedback correct'; }
    } else {
      btn.style.background = 'var(--rojo)';
      btn.style.borderColor = 'var(--rojo)';
      if (fb) { fb.textContent = '✗ Correct answer: ' + vocabPrimaryAnswer(); fb.className = 'game-feedback wrong'; }
    }
    vs.history.push({
      prompt: vs.currentDir === 'es' ? vocabCleanEn(vs.currentEntry.back) : vs.currentEntry.word,
      userAnswer: btn.textContent.trim(),
      correctAnswer: vocabPrimaryAnswer(),
      isCorrect
    });
    vs.round++;
    setTimeout(renderVocabRound, isCorrect ? 900 : 1800);
  }

  function submitVocabAnswer() {
    const vs = vocabState;
    if (!vs || vs.answered) return;
    const input = document.getElementById('vocabInput');
    if (!input) return;
    const userAnswer = normalize(input.value);
    if (!userAnswer) return;
    vs.answered = true;
    const accepted = vocabAcceptedAnswers(vs.currentEntry, vs.currentDir);
    const isCorrect = accepted.some(a => normalize(a) === userAnswer);
    const fb = document.getElementById('gameFeedback');
    if (isCorrect) {
      vs.score++;
      input.classList.add('correct');
      if (fb) { fb.textContent = '✓ Correct!'; fb.className = 'game-feedback correct'; }
    } else {
      input.classList.add('wrong');
      if (fb) { fb.textContent = '✗ Correct answer: ' + vocabPrimaryAnswer(); fb.className = 'game-feedback wrong'; }
    }
    input.disabled = true;
    vs.history.push({
      prompt: vs.currentDir === 'es' ? vocabCleanEn(vs.currentEntry.back) : vs.currentEntry.word,
      userAnswer: input.value,
      correctAnswer: vocabPrimaryAnswer(),
      isCorrect
    });
    vs.round++;
    setTimeout(renderVocabRound, isCorrect ? 1200 : 2000);
  }

  function skipVocabRound() {
    const vs = vocabState;
    if (!vs || vs.answered) return;
    vs.history.push({
      prompt: vs.currentDir === 'es' ? vocabCleanEn(vs.currentEntry.back) : vs.currentEntry.word,
      userAnswer: '(skipped)',
      correctAnswer: vocabPrimaryAnswer(),
      isCorrect: false
    });
    vs.round++;
    renderVocabRound();
  }

  function renderVocabResults() {
    const vs = vocabState;
    const container = document.getElementById('game-detail-content');
    if (!vs || !container) return;
    const gameId = vocabGameId();
    const score = vs.score;
    const baseTier = GAMES[gameId].maxReward;

    let reward = 0, verdict = '';
    if (score === 10) { reward = baseTier; verdict = 'Perfect — flawless game'; }
    else if (score >= 9) { reward = Math.floor(baseTier * 0.7); verdict = 'Excellent'; }
    else if (score >= 7) { reward = Math.floor(baseTier * 0.5); verdict = 'Solid effort'; }
    else if (score >= 5) { reward = Math.floor(baseTier * 0.25); verdict = 'Keep practicing'; }
    else { reward = 0; verdict = 'Try again — you need 5+ to earn'; }

    const isNewBest = score > getGameBestScore(gameId);
    if (isNewBest && reward > 0) awardCoins(reward, verdict + ' (' + score + '/10) — new best!');
    setGameBestScore(gameId, score);
    saveState();

    const reviewHtml = vs.history.map(h => `
      <div style="display:grid;grid-template-columns:28px 1fr 1.4fr;gap:8px;padding:8px 0;border-bottom:1px dotted var(--line);align-items:center;text-align:left;font-size:14px;">
        <span>${h.isCorrect ? '✅' : '❌'}</span>
        <span style="color:var(--ink-soft);">${h.prompt}</span>
        <span>${h.isCorrect ? h.correctAnswer : '<s style="opacity:0.55;">' + (h.userAnswer || '—') + '</s> → <strong>' + h.correctAnswer + '</strong>'}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="game-results">
        <h3>${score}/10 — <em>${verdict}</em></h3>
        <p style="color:var(--ink-soft);font-size:14px;margin-bottom:8px;">${MATCH_DECK_LABELS[vs.deck] || vs.deck} · answered in ${vs.direction === 'es' ? 'Spanish' : vs.direction === 'en' ? 'English' : 'mixed languages'}</p>
        ${isNewBest && reward > 0
          ? `<p style="color:var(--verde);font-weight:600;margin-bottom:16px;">+${reward} Lucas — new personal best!</p>`
          : `<p style="color:var(--ink-soft);font-size:13px;margin-bottom:16px;">${reward > 0 ? 'Lucas are only awarded when you beat your best score (' + getGameBestScore(gameId) + '/10).' : verdict}</p>`}
        <div style="margin:16px 0;">${reviewHtml}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:20px;">
          <button class="btn primary" onclick="beginVocabRound('${vs.deck}')">Play again</button>
          <button class="btn" onclick="renderVocabDeckPicker()">Pick another deck</button>
          <a href="#/juegos" class="btn" style="text-decoration:none;">All games</a>
        </div>
      </div>
    `;
  }

  // ============================================================================
  // LA RACHA — daily challenge + streak
  // ----------------------------------------------------------------------------
  // One fixed set of 5 quick questions per calendar day (seeded by the date, so
  // every student gets the same "racha de hoy"). Completing it keeps the streak
  // alive: do it today and yesterday → streak grows; miss a day → it resets.
  // Lucas are awarded once per day, scaled by how many you get right.
  // ============================================================================
  let rachaState = null;
  const RACHA_LEN = 5;

  // Local YYYY-MM-DD for "today" (uses the device's calendar day)
  function rachaDayKey(d) {
    const dt = d || new Date();
    return dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
  }
  function rachaDayKeyOffset(days) {
    const dt = new Date();
    dt.setDate(dt.getDate() + days);
    return rachaDayKey(dt);
  }

  // Tiny seeded RNG (mulberry32) so the day's challenge is deterministic
  function rachaSeedFromString(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return h >>> 0;
  }
  function rachaRng(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Build the 5 questions for a given day key, deterministically.
  function buildRachaChallenge(dayKey) {
    // Fresh randomness every play (re-rollable) — not seeded by the date.
    const rand = rachaRng((Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0);
    const pick = arr => arr[Math.floor(rand() * arr.length)];
    const PRON_ES = ['yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos / ellas'];

    // Question generators, each returns {area, label, display, answer, validAnswers, hint}
    function qVocab() {
      const deckKeys = Object.keys(decks).filter(k => decks[k] && decks[k].length >= 8);
      const deck = decks[pick(deckKeys)];
      const entry = deck[Math.floor(rand() * deck.length)];
      const toEs = rand() < 0.5;
      if (toEs) {
        return { area: 'Vocab', label: 'Give the Spanish for…', display: vocabCleanEn(entry.back),
          answer: String(entry.word).split('/')[0].trim(), validAnswers: vocabAcceptedAnswers(entry, 'es'), hint: 'In Spanish' };
      }
      return { area: 'Vocab', label: 'What does this mean?', display: entry.word,
        answer: vocabCleanEn(entry.back), validAnswers: vocabAcceptedAnswers(entry, 'en'), hint: 'In English' };
    }
    function qVerb() {
      const v = pick(verbs);
      // Avoid vosotros (index 4) — most US classrooms skip it
      const idx = pick([0, 1, 2, 3, 5]);
      const ans = v.conj.presente[idx];
      return { area: 'Verbs', label: 'Conjugate · presente', display: v.inf + ' — ' + PRON_ES[idx],
        answer: ans, validAnswers: [ans], hint: 'Present tense' };
    }
    function qCapital() {
      const c = pick(COUNTRIES);
      const caps = String(c.capital).split('/').map(s => s.trim());
      return { area: 'Mundo', label: 'Capital of…', display: c.name,
        answer: c.capital, validAnswers: caps.concat([c.capital]), hint: 'The capital city' };
    }
    function qNumber() {
      const n = Math.floor(rand() * 100) + 1;
      return { area: 'Numbers', label: 'Write this number in Spanish', display: String(n),
        answer: numberToSpanish(n), validAnswers: [numberToSpanish(n)], hint: 'In words' };
    }
    function qDay() {
      const i = Math.floor(rand() * 7);
      const toEs = rand() < 0.5;
      if (toEs) return { area: 'Days', label: 'Translate to Spanish', display: DAYS_EN[i],
        answer: DAYS_ES[i], validAnswers: [DAYS_ES[i]], hint: 'Lowercase' };
      return { area: 'Days', label: 'Translate to English', display: DAYS_ES[i],
        answer: DAYS_EN[i].toLowerCase(), validAnswers: [DAYS_EN[i].toLowerCase()], hint: 'In English' };
    }
    function qPluperfectSubj() {
      const HABER_RA = ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'];
      const HABER_SE = ['hubiese', 'hubieses', 'hubiese', 'hubiésemos', 'hubieseis', 'hubiesen'];
      const pool = verbs.filter(v => v.conj && v.conj.participio);
      const v = pick(pool);
      const idx = pick([0, 1, 2, 3, 5]);
      const part = v.conj.participio;
      const ans = HABER_RA[idx] + ' ' + part;
      return { area: 'Verbs', label: 'Pluperfect subjunctive (hubiera + participle)', display: v.inf + ' — ' + PRON_ES[idx],
        answer: ans, validAnswers: [ans, HABER_SE[idx] + ' ' + part], hint: 'hubiera/hubieras… + -ado/-ido' };
    }
    function qPerfecto() {
      const HABER = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
      const pool = verbs.filter(v => v.conj && v.conj.participio);
      const v = pick(pool);
      const idx = pick([0, 1, 2, 3, 5]);
      const ans = HABER[idx] + ' ' + v.conj.participio;
      return { area: 'Verbs', label: 'Present perfect (haber + participle)', display: v.inf + ' — ' + PRON_ES[idx],
        answer: ans, validAnswers: [ans], hint: 'he/has/ha… + -ado/-ido' };
    }

    // Fixed: 2 vocab (sampled from ALL decks, incl. Religions & Dances) + 1 present
    // verb + 1 capital. The rotating 5th slot draws from a richer pool that now
    // includes the newer grammar (present perfect & pluperfect subjunctive).
    const rotators = [qNumber, qDay, qPerfecto, qPluperfectSubj];
    const lastSlot = pick(rotators)();
    const questions = [qVocab(), qVerb(), qVocab(), qCapital(), lastSlot];
    // Shuffle so the order varies
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  }

  // Is today's racha already completed?
  function rachaDoneToday() { return STATE.rachaLastDay === rachaDayKey(); }

  // Current streak as it stands right now (broken if last play is older than yesterday)
  function rachaCurrentStreak() {
    if (!STATE.rachaLastDay) return 0;
    const today = rachaDayKey();
    if (STATE.rachaLastDay === today || STATE.rachaLastDay === rachaDayKeyOffset(-1)) {
      return STATE.rachaStreak || 0;
    }
    return 0; // streak lapsed
  }

  // Update the home-page widget
  function updateRachaWidget() {
    const w = document.getElementById('rachaWidget');
    if (!w) return;
    const streak = rachaCurrentStreak();
    const done = rachaDoneToday();
    const headline = document.getElementById('rachaWidgetHeadline');
    const sub = document.getElementById('rachaWidgetSub');
    const cta = document.getElementById('rachaWidgetCta');
    const flame = document.getElementById('rachaWidgetFlame');
    w.classList.toggle('done', done);
    if (flame) flame.style.opacity = streak > 0 ? '1' : '0.4';
    if (done) {
      headline.textContent = streak > 0 ? '¡Racha de ' + streak + ' día' + (streak === 1 ? '' : 's') + '! 🎉' : '¡Completada!';
      sub.textContent = 'Done for today — come back tomorrow to keep it going.';
      cta.textContent = 'Review →';
    } else if (streak > 0) {
      headline.textContent = streak + '-day streak — keep it alive';
      sub.textContent = "Today's challenge is waiting. 5 quick questions.";
      cta.textContent = 'Play →';
    } else {
      headline.textContent = 'Start your streak today';
      sub.textContent = '5 quick questions — vocab, verbs, capitals & more.';
      cta.textContent = 'Play →';
    }
  }

  // Render the racha page (entry / in-progress / done all handled here)
  function renderRacha() {
    const container = document.getElementById('rachaContent');
    if (!container) return;
    updateRachaWidget();
    const streak = rachaCurrentStreak();
    const best = STATE.rachaBest || 0;

    // Build a 7-day strip (Mon..Sun of the current week) marking completed today
    const weekHtml = (() => {
      const labels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
      const today = new Date();
      // JS getDay: 0=Sun..6=Sat → convert to Mon=0
      const todayMon = (today.getDay() + 6) % 7;
      let cells = '';
      for (let i = 0; i < 7; i++) {
        const isToday = i === todayMon;
        const isHit = isToday && rachaDoneToday();
        cells += `<div class="racha-day${isHit ? ' hit' : ''}${isToday ? ' today' : ''}">
          <div class="dot">${isHit ? '🔥' : (isToday ? '·' : '')}</div>${labels[i]}</div>`;
      }
      return cells;
    })();

    const heroStats = `
      <div class="racha-hero">
        <div class="racha-hero-flame">${streak > 0 ? '🔥' : '🪵'}</div>
        <div class="racha-count">${streak}</div>
        <div class="racha-count-label">${streak === 1 ? 'day streak' : 'day streak'}</div>
        <div class="racha-week">${weekHtml}</div>
        <div class="racha-stat-row">
          <div class="racha-stat"><div class="v">${best}</div><div class="k">Best streak</div></div>
          <div class="racha-stat"><div class="v">${rachaDoneToday() ? '✓' : '—'}</div><div class="k">Today</div></div>
        </div>
      </div>`;

    if (rachaDoneToday()) {
      container.innerHTML = heroStats + `
        <div style="text-align:center; padding: 8px 0 24px;">
          <p style="font-family:'Fraunces',serif; font-style:italic; font-size:18px; color:var(--ink); margin-bottom:6px;">¡Ya completaste la racha de hoy!</p>
          <p style="color:var(--ink-soft); font-size:14px; max-width:460px; margin:0 auto 20px;">Your streak is secured for today. Want more practice? Play another round — new questions every time.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
            <button class="btn primary" style="font-size:16px; padding:14px 28px;" onclick="startRachaToday()">Jugar otra vez →</button>
            <a href="#/juegos" class="btn" style="text-decoration:none;">Play more games</a>
          </div>
        </div>`;
      return;
    }

    container.innerHTML = heroStats + `
      <div style="text-align:center; padding: 8px 0 28px;">
        <p style="font-family:'Fraunces',serif; font-style:italic; font-size:18px; color:var(--ink); margin-bottom:6px;">${streak > 0 ? 'Keep your ' + streak + '-day streak alive.' : 'Start your streak.'}</p>
        <p style="color:var(--ink-soft); font-size:14px; max-width:460px; margin:0 auto 22px;">5 quick questions — a fresh mix of vocab, verbs, capitals, numbers and days every time. Finish it to keep your 🔥 going.</p>
        <button class="btn primary" style="font-size:16px; padding:14px 28px;" onclick="startRachaToday()">Empezar la racha →</button>
      </div>`;
  }

  function startRachaToday() {
    rachaState = {
      questions: buildRachaChallenge(rachaDayKey()),
      round: 0, score: 0, history: [], answered: false
    };
    renderRachaQuestion();
  }

  function renderRachaQuestion() {
    const rs = rachaState;
    const container = document.getElementById('rachaContent');
    if (!rs || !container) return;
    if (rs.round >= rs.questions.length) { finishRacha(); return; }
    rs.answered = false;
    const q = rs.questions[rs.round];

    const pips = rs.questions.map((_, i) => {
      let cls = 'racha-pip';
      if (i < rs.round) cls += rs.history[i] && rs.history[i].isCorrect ? ' correct' : ' wrong';
      else if (i === rs.round) cls += ' current';
      return `<div class="${cls}"></div>`;
    }).join('');

    container.innerHTML = `
      <div class="racha-q-area">${pips}</div>
      <div class="game-prompt-card">
        <div class="game-progress">Question <strong>${rs.round + 1}</strong> / ${rs.questions.length} · Score: <strong>${rs.score}</strong></div>
        <div class="racha-tag">${q.area}</div>
        <div class="game-prompt-label">${q.label}</div>
        <div class="game-prompt-display">${q.display}</div>
        <div class="game-input-row">
          <input type="text" class="game-input" id="rachaInput" autocomplete="off" autocapitalize="off" spellcheck="false"
                 placeholder="${q.hint || 'Type your answer…'}"
                 onkeypress="if(event.key==='Enter') submitRachaAnswer()">
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:24px;">
          <button class="btn primary" style="border-color:var(--paper);background:var(--paper);color:var(--ink);" onclick="submitRachaAnswer()">Submit ↵</button>
          <button class="btn" style="border-color:var(--paper);color:var(--paper);margin-left:8px;" onclick="skipRachaRound()">Skip</button>
        </div>
      </div>`;
    setTimeout(() => { const inp = document.getElementById('rachaInput'); if (inp) inp.focus(); }, 50);
  }

  function submitRachaAnswer() {
    const rs = rachaState;
    if (!rs || rs.answered) return;
    const input = document.getElementById('rachaInput');
    if (!input) return;
    const userAnswer = normalize(input.value);
    if (!userAnswer) return;
    rs.answered = true;
    const q = rs.questions[rs.round];
    // Accept multiple slash-separated guesses: if any one of the student's
    // answers matches an accepted answer, count it correct. A learner who
    // writes "how many / how much" for ¿cuántos? still gets credit for the
    // correct "how many" instead of being marked wrong for the extra guess.
    const accepted = (q.validAnswers || [q.answer]).map(normalize);
    const guesses = input.value.split('/').map(normalize).filter(Boolean);
    const isCorrect = guesses.some(g => accepted.indexOf(g) !== -1);
    const fb = document.getElementById('gameFeedback');
    if (isCorrect) {
      rs.score++;
      input.classList.add('correct');
      if (fb) { fb.textContent = '✓ ¡Correcto!'; fb.className = 'game-feedback correct'; }
    } else {
      input.classList.add('wrong');
      if (fb) { fb.textContent = '✗ Answer: ' + q.answer; fb.className = 'game-feedback wrong'; }
    }
    input.disabled = true;
    rs.history.push({ prompt: q.display, userAnswer: input.value, correctAnswer: q.answer, isCorrect });
    rs.round++;
    setTimeout(renderRachaQuestion, isCorrect ? 1100 : 1900);
  }

  function skipRachaRound() {
    const rs = rachaState;
    if (!rs || rs.answered) return;
    const q = rs.questions[rs.round];
    rs.history.push({ prompt: q.display, userAnswer: '(skipped)', correctAnswer: q.answer, isCorrect: false });
    rs.round++;
    renderRachaQuestion();
  }

  function finishRacha() {
    const rs = rachaState;
    const container = document.getElementById('rachaContent');
    if (!rs || !container) return;

    // --- Streak bookkeeping (only counts once per day) ---
    const today = rachaDayKey();
    let streakMsg = '';
    if (STATE.rachaLastDay !== today) {
      const continued = STATE.rachaLastDay === rachaDayKeyOffset(-1);
      STATE.rachaStreak = continued ? (STATE.rachaStreak || 0) + 1 : 1;
      STATE.rachaLastDay = today;
      if (STATE.rachaStreak > (STATE.rachaBest || 0)) STATE.rachaBest = STATE.rachaStreak;
      // Lucas: 2 per correct + 5 bonus for a perfect day
      const reward = rs.score * 2 + (rs.score === RACHA_LEN ? 5 : 0);
      if (reward > 0) awardCoins(reward, 'La Racha · día ' + STATE.rachaStreak);
      saveState();
      streakMsg = continued
        ? '🔥 Streak extended to <strong>' + STATE.rachaStreak + '</strong> day' + (STATE.rachaStreak === 1 ? '' : 's') + '!'
        : '🔥 New streak started — <strong>day 1</strong>!';
    } else {
      streakMsg = 'Already counted for today — streak stays at <strong>' + STATE.rachaStreak + '</strong>.';
    }
    updateRachaWidget();

    const reviewHtml = rs.history.map(h => `
      <div style="display:grid;grid-template-columns:28px 1fr 1.4fr;gap:8px;padding:8px 0;border-bottom:1px dotted var(--line);align-items:center;text-align:left;font-size:14px;">
        <span>${h.isCorrect ? '✅' : '❌'}</span>
        <span style="color:var(--ink-soft);">${h.prompt}</span>
        <span>${h.isCorrect ? h.correctAnswer : '<s style="opacity:0.55;">' + (h.userAnswer || '—') + '</s> → <strong>' + h.correctAnswer + '</strong>'}</span>
      </div>`).join('');

    container.innerHTML = `
      <div class="game-results">
        <div style="font-size:52px;line-height:1;">${rs.score === RACHA_LEN ? '🌟' : rs.score >= 3 ? '🔥' : '🌱'}</div>
        <h3>${rs.score}/${RACHA_LEN} hoy</h3>
        <p style="font-size:16px;color:var(--ink);margin-bottom:6px;">${streakMsg}</p>
        <p style="color:var(--ink-soft);font-size:13px;margin-bottom:16px;">Best streak: ${STATE.rachaBest || 0} · Play again any time for a fresh set.</p>
        <div style="margin:16px 0;max-width:560px;margin-left:auto;margin-right:auto;">${reviewHtml}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:20px;">
          <button class="btn primary" style="font-size:15px;" onclick="startRachaToday()">Jugar otra vez →</button>
          <a href="#/juegos" class="btn" style="text-decoration:none;">Play more games →</a>
          <a href="#/" class="btn" style="text-decoration:none;">Home</a>
        </div>
      </div>`;
  }

  // ============================================================================
  // ABECEDARIO — interactive alphabet & vowel pronunciation
  // ----------------------------------------------------------------------------
  // Tap a letter → speakSpanish() reads its name + an example word aloud.
  // 27-letter modern RAE alphabet (includes ñ; ch/ll/rr are no longer separate
  // letters). Vowels get their own highlighted row with an English sound hint.
  // ============================================================================
  // cat = sound family (color + legend) · say = English equivalent · mouth = shape tip
  const ABC_VOWELS = [
    { L: 'A', name: 'a', sound: '“ah”', word: 'árbol',    en: 'tree',     cat: 'vowel', say: 'like “a” in father',  mouth: 'open wide, tongue low' },
    { L: 'E', name: 'e', sound: '“eh”', word: 'elefante', en: 'elephant', cat: 'vowel', say: 'like “e” in bed',     mouth: 'lips relaxed, slightly open' },
    { L: 'I', name: 'i', sound: '“ee”', word: 'isla',     en: 'island',   cat: 'vowel', say: 'like “ee” in see',    mouth: 'lips spread, like a smile' },
    { L: 'O', name: 'o', sound: '“oh”', word: 'oso',      en: 'bear',     cat: 'vowel', say: 'like “o” in note',    mouth: 'lips rounded' },
    { L: 'U', name: 'u', sound: '“oo”', word: 'uvas',     en: 'grapes',   cat: 'vowel', say: 'like “oo” in food',   mouth: 'lips tight and rounded' }
  ];
  const ABC_LETTERS = [
    { L: 'A', name: 'a',          word: 'árbol',    en: 'tree',     cat: 'vowel',     manner: 'Vowel · open',                          say: 'like “a” in father',          mouth: 'open wide, tongue low' },
    { L: 'B', name: 'be',         word: 'burro',    en: 'donkey',   cat: 'plosive',   manner: 'Plosive · bilabial /b/',                say: 'like “b” in boy',             mouth: 'lips together, then pop open' },
    { L: 'C', name: 'ce',         word: 'casa',     en: 'house',    cat: 'plosive',   manner: 'Plosive /k/ — fricative /s/ before e,i', say: '“k” (casa) or “s” (cena)',   mouth: 'back of tongue up; or tongue near teeth' },
    { L: 'D', name: 'de',         word: 'dedo',     en: 'finger',   cat: 'plosive',   manner: 'Plosive · dental /d/',                  say: 'like “d”, softer',            mouth: 'tongue tip on the upper teeth' },
    { L: 'E', name: 'e',          word: 'elefante', en: 'elephant', cat: 'vowel',     manner: 'Vowel · mid',                           say: 'like “e” in bed',             mouth: 'lips relaxed, slightly open' },
    { L: 'F', name: 'efe',        word: 'flor',     en: 'flower',   cat: 'fricative', manner: 'Fricative · labiodental /f/',           say: 'like “f” in fun',             mouth: 'top teeth on bottom lip, blow' },
    { L: 'G', name: 'ge',         word: 'gato',     en: 'cat',      cat: 'plosive',   manner: 'Plosive /g/ — guttural /x/ before e,i', say: '“g” in go (raspy “h” before e/i)', mouth: 'back of tongue to soft palate' },
    { L: 'H', name: 'hache',      word: 'hola',     en: 'hello',    cat: 'silent',    manner: 'Silent (muda) — no sound',              say: 'no sound at all',             mouth: 'do nothing — skip the h' },
    { L: 'I', name: 'i',          word: 'isla',     en: 'island',   cat: 'vowel',     manner: 'Vowel · close',                         say: 'like “ee” in see',            mouth: 'lips spread, like a smile' },
    { L: 'J', name: 'jota',       word: 'jirafa',   en: 'giraffe',  cat: 'fricative', manner: 'Guttural fricative · velar /x/',        say: 'a raspy “h” (as in “loch”)',  mouth: 'back of tongue to throat, push air' },
    { L: 'K', name: 'ka',         word: 'koala',    en: 'koala',    cat: 'plosive',   manner: 'Plosive · velar /k/',                   say: 'like “k” in kite',            mouth: 'back of tongue up, then release' },
    { L: 'L', name: 'ele',        word: 'luna',     en: 'moon',     cat: 'liquid',    manner: 'Lateral · alveolar /l/',                say: 'like “l” in light',           mouth: 'tongue tip on ridge behind teeth' },
    { L: 'M', name: 'eme',        word: 'mano',     en: 'hand',     cat: 'nasal',     manner: 'Nasal · bilabial /m/',                  say: 'like “m” in mom',             mouth: 'lips together, hum through nose' },
    { L: 'N', name: 'ene',        word: 'nariz',    en: 'nose',     cat: 'nasal',     manner: 'Nasal · alveolar /n/',                  say: 'like “n” in no',              mouth: 'tongue on ridge, hum' },
    { L: 'Ñ', name: 'eñe',        word: 'niño',     en: 'child',    cat: 'nasal',     manner: 'Nasal · palatal /ɲ/',                   say: 'like “ny” in canyon',         mouth: 'middle of tongue to roof' },
    { L: 'O', name: 'o',          word: 'oso',      en: 'bear',     cat: 'vowel',     manner: 'Vowel · mid',                           say: 'like “o” in note',            mouth: 'lips rounded' },
    { L: 'P', name: 'pe',         word: 'perro',    en: 'dog',      cat: 'plosive',   manner: 'Plosive · bilabial /p/',                say: 'like “p”, no puff of air',    mouth: 'lips together, soft release' },
    { L: 'Q', name: 'cu',         word: 'queso',    en: 'cheese',   cat: 'plosive',   manner: 'Plosive · velar /k/ (qu)',              say: 'like “k” (always written “qu”)', mouth: 'back of tongue up, then release' },
    { L: 'R', name: 'erre',       word: 'ratón',    en: 'mouse',    cat: 'liquid',    manner: 'Vibrant · tap /ɾ/ or rolled /r/',       say: 'tap like “tt” in butter; or rolled', mouth: 'tongue tip flicks/flutters the ridge' },
    { L: 'S', name: 'ese',        word: 'sol',      en: 'sun',      cat: 'fricative', manner: 'Fricative · alveolar /s/',              say: 'like “s” in sun',             mouth: 'tongue near ridge, hiss' },
    { L: 'T', name: 'te',         word: 'tortuga',  en: 'turtle',   cat: 'plosive',   manner: 'Plosive · dental /t/',                  say: 'like “t”, on the teeth',      mouth: 'tongue tip on upper teeth' },
    { L: 'U', name: 'u',          word: 'uvas',     en: 'grapes',   cat: 'vowel',     manner: 'Vowel · close',                         say: 'like “oo” in food',           mouth: 'lips tight and rounded' },
    { L: 'V', name: 'uve',        word: 'vaca',     en: 'cow',      cat: 'plosive',   manner: 'Plosive /b/ — sounds like B',           say: 'like “b” (V = B in Spanish!)', mouth: 'lips together, soft' },
    { L: 'W', name: 'uve doble',  word: 'wifi',     en: 'wifi',     cat: 'glide',     manner: 'Glide · /w/ (foreign words)',           say: 'like “w” in week',            mouth: 'lips rounded, then glide' },
    { L: 'X', name: 'equis',      word: 'taxi',     en: 'taxi',     cat: 'fricative', manner: 'Fricative /ks/ (guttural /x/ in “México”)', say: 'like “x” in taxi',        mouth: '“k” + “s” run together' },
    { L: 'Y', name: 'ye',         word: 'yate',     en: 'yacht',    cat: 'glide',     manner: 'Palatal glide /ʝ/ — or vowel /i/',      say: 'like “y” in yes',             mouth: 'middle of tongue toward roof' },
    { L: 'Z', name: 'zeta',       word: 'zapato',   en: 'shoe',     cat: 'fricative', manner: 'Fricative /s/ (or “th” in Spain)',      say: 'like “s” (or “th” in Spain)', mouth: 'tongue near ridge, hiss' }
  ];
  // Sound-family → color + label for the tags and legend
  const ABC_CATS = {
    vowel:     { color: 'var(--rojo)',     label: 'Vowel' },
    plosive:   { color: 'var(--ocre)',     label: 'Plosive (stop)' },
    fricative: { color: 'var(--verde)',    label: 'Fricative' },
    nasal:     { color: '#3e5a78',         label: 'Nasal' },
    liquid:    { color: '#8a4a6b',         label: 'Liquid (l / r)' },
    glide:     { color: '#b06a3a',         label: 'Glide' },
    silent:    { color: 'var(--ink-soft)', label: 'Silent' }
  };

  function renderAbecedario() {
    const container = document.getElementById('abecedarioContent');
    if (!container) return;
    // Warn if speech synthesis isn't available
    const note = document.getElementById('abcVoiceNote');
    if (note) note.style.display = ('speechSynthesis' in window) ? 'none' : 'block';

    const vowelTiles = ABC_VOWELS.map((v, i) => `
      <div class="abc-tile" role="button" tabindex="0" onclick="speakAbc('vowel', ${i})"
           onkeypress="if(event.key==='Enter'||event.key===' ')speakAbc('vowel', ${i})">
        <span class="abc-speaker">🔊</span>
        <span class="abc-letter">${v.L}${v.L.toLowerCase()}</span>
        <span class="abc-sound">${v.sound}</span>
        <span class="abc-word">${v.word}</span>
        <span class="abc-say">🗣 ${v.say}</span>
        <span class="abc-mouth">👄 ${v.mouth}</span>
      </div>`).join('');

    const letterTiles = ABC_LETTERS.map((l, i) => {
      const cat = ABC_CATS[l.cat] || { color: 'var(--ink-soft)', label: '' };
      return `
      <div class="abc-tile" role="button" tabindex="0" onclick="speakAbc('letter', ${i})"
           onkeypress="if(event.key==='Enter'||event.key===' ')speakAbc('letter', ${i})">
        <span class="abc-speaker">🔊</span>
        <span class="abc-letter">${l.L}${l.L.toLowerCase()}</span>
        <span class="abc-name">${l.name}</span>
        <span class="abc-chip" style="background:${cat.color};">${cat.label}</span>
        <span class="abc-manner">${l.manner}</span>
        <span class="abc-say">🗣 ${l.say}</span>
        <span class="abc-mouth">👄 ${l.mouth}</span>
        <span class="abc-word">${l.word} · ${l.en}</span>
      </div>`;
    }).join('');

    const legend = Object.keys(ABC_CATS).map(k =>
      `<span class="abc-legend-item"><span class="abc-legend-dot" style="background:${ABC_CATS[k].color};"></span>${ABC_CATS[k].label}</span>`
    ).join('');

    container.innerHTML = `
      <div class="abc-section-label">The five vowels — your foundation</div>
      <div class="abc-vowels">${vowelTiles}</div>
      <div class="abc-section-label">The full alphabet · 27 letters · <span style="text-transform:none;letter-spacing:0;">tap to hear · color = type of sound</span></div>
      <div class="abc-legend">${legend}</div>
      <div class="abc-grid">${letterTiles}</div>
      <p style="font-size:13px; color:var(--ink-soft); margin-top:24px; line-height:1.6;">
        Note: <em>ch</em>, <em>ll</em> and <em>rr</em> are digraphs (two-letter sounds), not separate letters in the modern alphabet.
        The letter <strong>h</strong> is always silent. <strong>R</strong> at the start of a word or <strong>rr</strong> between vowels is the rolled “double r.”
        Sounds shown are the common Latin-American pronunciation; a few differ in Spain (noted on the tiles).
      </p>`;
  }

  // Speak a tile's letter name + example word, with a brief highlight
  let abcSpeakTimer = null;
  function speakAbc(kind, idx) {
    const item = kind === 'vowel' ? ABC_VOWELS[idx] : ABC_LETTERS[idx];
    if (!item) return;
    const tiles = document.querySelectorAll(kind === 'vowel' ? '.abc-vowels .abc-tile' : '.abc-grid .abc-tile');
    const tile = tiles[idx];
    if (tile) {
      document.querySelectorAll('.abc-tile.speaking').forEach(t => t.classList.remove('speaking'));
      tile.classList.add('speaking');
      clearTimeout(abcSpeakTimer);
    }
    const done = () => { if (tile) tile.classList.remove('speaking'); };
    // Say the letter name, a short pause, then the example word
    const phrase = item.name + '. ' + item.word;
    if (typeof speakSpanish === 'function') {
      speakSpanish(phrase, done);
      abcSpeakTimer = setTimeout(done, 4000); // safety in case onend never fires
    } else {
      done();
    }
  }

  function renderGameRound() {
    if (!gameState) return;
    const game = GAMES[gameState.gameId];
    const container = document.getElementById('game-detail-content');

    if (gameState.round >= gameState.totalRounds) {
      // Stop the sprint timer if running
      if (gameState.isSprint && gameState.sprintStart && !gameState.sprintEnd) {
        gameState.sprintEnd = Date.now();
      }
      stopSprintTicker();
      renderGameResults();
      return;
    }

    gameState.current = game.generate();
    gameState.round++;
    gameState._answered = false;

    // For sprints: timer starts on the first round render (so students aren't
    // penalized for the brief moment between clicking "Play" and seeing Q1)
    if (gameState.isSprint && gameState.round === 1 && !gameState.sprintStart) {
      gameState.sprintStart = Date.now();
    }

    const sprintTimerHtml = gameState.isSprint
      ? `<div style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 12px; background: rgba(196, 61, 42, 0.18); border: 1px solid rgba(196, 61, 42, 0.4); border-radius: 3px; margin-left: 12px; font-family: 'JetBrains Mono', monospace; font-size: 12px;">
           ⏱ <span id="sprintTimer">0.0s</span>
         </div>`
      : '';

    // Interaction: either tappable choice buttons (when the round provides
    // `choices`, e.g. the article game) or the standard typed-answer input.
    const interactionHtml = (gameState.current.choices && Array.isArray(gameState.current.choices))
      ? `<div class="game-choice-row" id="choiceRow" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;">
           ${gameState.current.choices.map(ch =>
             `<button type="button" class="game-choice" data-val="${ch}"
                style="border:1px solid var(--paper);background:transparent;color:var(--paper);font-size:18px;padding:12px 22px;min-width:84px;border-radius:3px;cursor:pointer;font-family:'JetBrains Mono',monospace;"
                onclick="submitChoice('${ch}')">${ch}</button>`).join('')}
         </div>
         <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
         <div style="margin-top: 24px;">
           <button class="btn" style="border-color: var(--paper); color: var(--paper);" onclick="skipGameRound()">Skip</button>
         </div>`
      : `<div class="game-input-row">
           <input type="text" class="game-input" id="gameInput" autocomplete="off" autocapitalize="off" spellcheck="false"
                  placeholder="${gameState.current.hint || 'Type your answer…'}"
                  onkeypress="if(event.key==='Enter') submitGameAnswer()">
         </div>
         <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
         <div style="margin-top: 24px;">
           <button class="btn primary" style="border-color: var(--paper); background: var(--paper); color: var(--ink);" onclick="submitGameAnswer()">Submit ↵</button>
           <button class="btn" style="border-color: var(--paper); color: var(--paper); margin-left: 8px;" onclick="skipGameRound()">Skip</button>
         </div>`;

    container.innerHTML = `
      <div class="game-prompt-card">
        <div class="game-progress">
          Round <strong>${gameState.round}</strong> / ${gameState.totalRounds} · Score: <strong>${gameState.score}</strong>
          ${sprintTimerHtml}
        </div>
        <div class="game-prompt-label">${gameState.current.promptLabel}</div>
        <div class="game-prompt-display${gameState.gameId === 'tu-usted' || gameState.gameId === 'object-pronouns' ? ' scenario' : ''}">${gameState.current.promptDisplay}</div>
        ${interactionHtml}
      </div>
    `;

    // Start the visible ticker for sprints (ticks the on-screen timer every 100ms)
    if (gameState.isSprint) startSprintTicker();

    setTimeout(() => {
      const inp = document.getElementById('gameInput');
      if (inp) inp.focus();
    }, 100);
  }

  // Sprint timer ticker — updates the displayed elapsed time without blocking input.
  // Idempotent (safe to call multiple times); stops itself if state goes away.
  let sprintTickerInterval = null;
  function startSprintTicker() {
    stopSprintTicker();
    sprintTickerInterval = setInterval(() => {
      if (!gameState || !gameState.isSprint || !gameState.sprintStart || gameState.sprintEnd) {
        stopSprintTicker();
        return;
      }
      const el = document.getElementById('sprintTimer');
      if (!el) {
        stopSprintTicker();
        return;
      }
      const elapsed = (Date.now() - gameState.sprintStart) / 1000;
      el.textContent = elapsed.toFixed(1) + 's';
    }, 100);
  }
  function stopSprintTicker() {
    if (sprintTickerInterval) {
      clearInterval(sprintTickerInterval);
      sprintTickerInterval = null;
    }
  }

  function submitGameAnswer() {
    if (!gameState || !gameState.current) return;
    const input = document.getElementById('gameInput');
    if (!input) return;
    const userAnswer = normalize(input.value);
    const correctAnswer = normalize(gameState.current.answer);
    const fb = document.getElementById('gameFeedback');

    if (!userAnswer) return;

    // Some games (like time-telling) accept multiple valid answers
    let isCorrect = false;
    if (gameState.current.validAnswers && Array.isArray(gameState.current.validAnswers)) {
      isCorrect = gameState.current.validAnswers.some(ans => normalize(ans) === userAnswer);
    } else {
      isCorrect = userAnswer === correctAnswer;
    }
    if (isCorrect) {
      gameState.score++;
      input.classList.add('correct');
      fb.textContent = '✓ Correct!';
      fb.className = 'game-feedback correct';
    } else {
      input.classList.add('wrong');
      fb.textContent = '✗ Correct answer: ' + gameState.current.answer;
      fb.className = 'game-feedback wrong';
    }
    input.disabled = true;

    gameState.history.push({
      prompt: gameState.current.promptDisplay,
      userAnswer: input.value,
      correctAnswer: gameState.current.answer,
      isCorrect
    });

    setTimeout(() => renderGameRound(), 1500);
  }

  function skipGameRound() {
    if (!gameState || !gameState.current) return;
    gameState.history.push({
      prompt: gameState.current.promptDisplay,
      userAnswer: '(skipped)',
      correctAnswer: gameState.current.answer,
      isCorrect: false
    });
    renderGameRound();
  }

  // Tap-button answer (used by choice-based games like the article picker).
  // Mirrors submitGameAnswer's scoring/history, but grades a button value and
  // gives visual feedback on the buttons instead of a text input.
  function submitChoice(val) {
    if (!gameState || !gameState.current || gameState._answered) return;
    gameState._answered = true;
    const fb = document.getElementById('gameFeedback');
    const userAnswer = normalize(val);
    const correct = normalize(gameState.current.answer);
    let isCorrect;
    if (gameState.current.validAnswers && Array.isArray(gameState.current.validAnswers)) {
      isCorrect = gameState.current.validAnswers.some(ans => normalize(ans) === userAnswer);
    } else {
      isCorrect = userAnswer === correct;
    }
    if (isCorrect) gameState.score++;

    // Color the buttons: green on the right answer, red on a wrong pick.
    document.querySelectorAll('#choiceRow .game-choice').forEach(b => {
      b.disabled = true;
      const v = normalize(b.getAttribute('data-val') || '');
      if (v === correct) { b.style.background = 'var(--verde)'; b.style.color = '#fff'; b.style.borderColor = 'var(--verde)'; }
      else if (v === userAnswer && !isCorrect) { b.style.background = 'var(--rojo)'; b.style.color = '#fff'; b.style.borderColor = 'var(--rojo)'; }
    });
    if (fb) {
      if (isCorrect) { fb.textContent = '✓ Correct!'; fb.className = 'game-feedback correct'; }
      else { fb.textContent = '✗ Correct answer: ' + gameState.current.answer; fb.className = 'game-feedback wrong'; }
    }

    gameState.history.push({
      prompt: gameState.current.promptDisplay,
      userAnswer: val,
      correctAnswer: gameState.current.answer,
      isCorrect
    });
    setTimeout(() => renderGameRound(), 1300);
  }

  function renderGameResults() {
    if (!gameState) return;
    const game = GAMES[gameState.gameId];
    const container = document.getElementById('game-detail-content');
    const score = gameState.score;
    const max = gameState.totalRounds;

    // Reward tiers (matches verb drill philosophy: hard to earn, score-based)
    let reward = 0, verdict = '';
    const baseTier = game.maxReward; // 25, 35, 50
    if (score === 10) { reward = baseTier; verdict = 'Perfect — flawless game'; }
    else if (score >= 9) { reward = Math.floor(baseTier * 0.7); verdict = 'Excellent'; }
    else if (score >= 7) { reward = Math.floor(baseTier * 0.5); verdict = 'Solid effort'; }
    else if (score >= 5) { reward = Math.floor(baseTier * 0.25); verdict = 'Keep practicing'; }
    else { reward = 0; verdict = 'Try again — you need 5+ to earn'; }

    // Check if this is a personal best (score-wise)
    const previousBest = getGameBestScore(gameState.gameId);
    const isNewBest = score > previousBest;

    // ============================================================
    // SPRINT LEADERBOARD LOGIC
    // ------------------------------------------------------------
    // Sprints qualify for the leaderboard ONLY at 10/10 (Option C).
    // Partial scores still earn Lucas based on accuracy — so the
    // experience never punishes attempts; only the leaderboard is gated.
    // Once qualified, time matters. We track best time per sprint mode.
    // ============================================================
    let sprintBanner = '';
    let sprintTimeSeconds = null;
    let sprintIsFirstQualify = false;
    let sprintIsNewBestTime = false;
    let sprintPreviousBestTime = null;

    if (gameState.isSprint && gameState.sprintStart && gameState.sprintEnd) {
      sprintTimeSeconds = (gameState.sprintEnd - gameState.sprintStart) / 1000;
      if (!STATE.sprintBest) STATE.sprintBest = {};
      sprintPreviousBestTime = STATE.sprintBest[gameState.gameId] || null;

      if (score === 10) {
        // Qualified!
        sprintIsFirstQualify = sprintPreviousBestTime === null;
        sprintIsNewBestTime = sprintPreviousBestTime !== null && sprintTimeSeconds < sprintPreviousBestTime;

        if (sprintIsFirstQualify || sprintIsNewBestTime) {
          STATE.sprintBest[gameState.gameId] = sprintTimeSeconds;
        }
      }
    }

    // Award only if new best (prevents farming)
    let earned = 0;
    if (isNewBest && reward > 0) {
      earned = reward;
      let awardLabel = verdict + ' (' + score + '/10) — new best!';
      if (gameState.isSprint && sprintTimeSeconds !== null && score === 10) {
        awardLabel = 'Sprint qualified · ' + sprintTimeSeconds.toFixed(1) + 's';
      }
      awardCoins(reward, awardLabel);
    } else if (gameState.isSprint && score === 10 && sprintIsNewBestTime && reward > 0) {
      // Sprint speed bonus: even if score isn't a new high (already had 10/10), a faster time gets +10 Lucas
      earned = 10;
      awardCoins(10, 'Sprint · faster time! ' + sprintTimeSeconds.toFixed(1) + 's');
    }
    setGameBestScore(gameState.gameId, score);
    saveState();

    // Sprint banner (only for sprint games)
    if (gameState.isSprint) {
      if (score === 10 && sprintIsFirstQualify) {
        // First time qualifying — ¡Te calificaste!
        sprintBanner = `
          <div style="background: linear-gradient(135deg, var(--verde), #6a8a4f); color: var(--paper); padding: 24px; border-radius: 4px; margin-top: 16px; text-align: center; box-shadow: 0 4px 16px rgba(122, 154, 95, 0.3);">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; opacity: 0.9; margin-bottom: 8px;">First qualification</div>
            <div style="font-family: 'DM Serif Display', serif; font-size: 42px; font-style: italic; line-height: 1;">¡Te calificaste!</div>
            <div style="margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 20px;">${sprintTimeSeconds.toFixed(1)}s</div>
            <div style="margin-top: 6px; font-size: 13px; opacity: 0.85;">You're on the leaderboard. Beat your time to keep climbing.</div>
          </div>`;
      } else if (score === 10 && sprintIsNewBestTime) {
        // Beat your previous best time — ¡Ganaste!
        const improvement = (sprintPreviousBestTime - sprintTimeSeconds).toFixed(1);
        sprintBanner = `
          <div style="background: linear-gradient(135deg, var(--rojo), #a02f1f); color: var(--paper); padding: 24px; border-radius: 4px; margin-top: 16px; text-align: center; box-shadow: 0 4px 16px rgba(196, 61, 42, 0.3);">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; opacity: 0.9; margin-bottom: 8px;">New best time</div>
            <div style="font-family: 'DM Serif Display', serif; font-size: 42px; font-style: italic; line-height: 1;">¡Ganaste!</div>
            <div style="margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 20px;">${sprintTimeSeconds.toFixed(1)}s</div>
            <div style="margin-top: 6px; font-size: 13px; opacity: 0.85;">${improvement}s faster than your previous best of ${sprintPreviousBestTime.toFixed(1)}s.</div>
          </div>`;
      } else if (score === 10) {
        // Perfect score but didn't beat best time
        sprintBanner = `
          <div style="background: rgba(212, 146, 44, 0.12); border: 1px solid rgba(212, 146, 44, 0.35); padding: 20px; border-radius: 4px; margin-top: 16px; text-align: center;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--ocre); margin-bottom: 8px;">Perfect — qualified</div>
            <div style="font-family: 'DM Serif Display', serif; font-size: 28px; font-style: italic; color: var(--ink); margin-bottom: 4px;">${sprintTimeSeconds.toFixed(1)}s</div>
            <div style="font-size: 13px; color: var(--ink-soft);">Your best for this mode is still <strong>${sprintPreviousBestTime.toFixed(1)}s</strong>. Try again to beat it.</div>
          </div>`;
      } else {
        // Sprint but didn't qualify (less than 10/10)
        const missed = 10 - score;
        sprintBanner = `
          <div style="background: rgba(31, 26, 20, 0.05); border: 1px dashed var(--line); padding: 20px; border-radius: 4px; margin-top: 16px; text-align: center;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px;">No qualification — ${missed} mistake${missed === 1 ? '' : 's'}</div>
            <div style="font-family: 'Fraunces', serif; font-style: italic; font-size: 16px; color: var(--ink);">You need <strong>10/10</strong> to land on the sprint leaderboard.</div>
            <div style="font-size: 13px; color: var(--ink-soft); margin-top: 6px;">Your time was ${sprintTimeSeconds ? sprintTimeSeconds.toFixed(1) + 's' : '—'}. Review your mistakes below and try again.</div>
          </div>`;
      }
    }

    // Build review list (shows every round with correct answer for wrong ones)
    const reviewHtml = gameState.history.map((h, i) => `
      <div style="display: grid; grid-template-columns: 28px 1fr 1.4fr; gap: 8px; padding: 8px 0; border-bottom: 1px dotted var(--line); align-items: center; text-align: left; font-size: 14px;">
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ink-soft);">${String(i + 1).padStart(2, '0')}</span>
        <span style="font-family: 'DM Serif Display', serif; font-style: italic;">${h.prompt}</span>
        <span style="${h.isCorrect ? 'color: var(--verde);' : 'color: var(--rojo);'}">${h.isCorrect ? '✓ ' + h.correctAnswer : '✗ ' + h.correctAnswer + ' <span style="color:var(--ink-soft);font-size:12px">(you said: ' + escapeHtml(h.userAnswer) + ')</span>'}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="game-results">
        <h3>${score === 10 ? '¡<em>Perfecto</em>!' : score >= 7 ? 'Game <em>complete</em>' : 'Keep <em>going</em>'}</h3>
        <div class="verdict">${verdict}</div>
        <div class="score-display">${score}/10</div>
        ${sprintBanner}
        ${earned > 0
          ? `<div class="game-reward-banner" style="margin-top: 16px;"><span class="coin-icon"></span><strong style="color: var(--ocre); font-family: 'DM Serif Display', serif; font-size: 20px; font-style: italic;">+${earned} Lucas</strong></div>`
          : (isNewBest && !gameState.isSprint)
            ? `<div class="game-reward-banner" style="margin-top: 16px; background: rgba(196, 61, 42, 0.08); border-color: rgba(196, 61, 42, 0.3);"><span style="font-size: 20px;">📈</span><strong>New best — but you need 5+ to earn Lucas</strong></div>`
            : (!gameState.isSprint)
              ? `<div class="game-reward-banner" style="margin-top: 16px; background: rgba(31,26,20,0.04); border-color: var(--line);"><span style="font-size: 20px;">↻</span><strong style="color: var(--ink-soft);">Already beat ${previousBest}/10 before — no new Lucas, but great practice</strong></div>`
              : ''
        }
        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--line);">
          <h4 style="font-family: 'DM Serif Display', serif; font-size: 18px; font-weight: 400; margin-bottom: 12px;">Review your answers</h4>
          ${reviewHtml}
        </div>
        <div class="card-controls" style="margin-top: 24px; justify-content: center;">
          <button class="btn primary" onclick="startGame('${gameState.gameId}')">Play again</button>
          <a href="#/juegos" class="btn">Back to games</a>
        </div>
      </div>
    `;
  }

