  /* ============== SLANG / EVERYDAY EXPRESSIONS ============== */
  // Each: { phrase, literal, meaning, example, country, where }
  // Authentic slang that Spanish learners rarely encounter in textbooks but hear daily
  // in Spanish-speaking countries. Includes tone notes where appropriate.
  const SLANG = [
    // ARGENTINA
    { phrase: 'Che', literal: 'hey / dude', meaning: 'The most iconic Argentine word — used to get someone\'s attention or as a filler like "you know." Where Che Guevara got his nickname (he used it constantly, so other Latin Americans called him "Che").', example: '¡Che, vení para acá!', country: 'AR', where: 'Argentina, Uruguay' },
    { phrase: 'Boludo', literal: 'sort of: "fool" or "idiot"', meaning: 'Among close friends, it means "dude" or "bro" — completely affectionate. But with strangers, it\'s an insult. Tone is everything.', example: 'Che boludo, ¿cómo andás?', country: 'AR', where: 'Argentina' },
    { phrase: 'Quilombo', literal: '"a mess"', meaning: 'A chaotic situation, a huge mess, total disorder. Useful for describing everything from a messy room to a political crisis.', example: '¡Qué quilombo hay en el centro!', country: 'AR', where: 'Argentina, Uruguay' },

    // MEXICO
    { phrase: '¡Órale!', literal: 'roughly "yeah!" or "let\'s go!"', meaning: 'Expresses agreement, surprise, encouragement, or "come on!" depending on tone. One of the most flexible words in Mexican Spanish.', example: '¡Órale, vamos a comer!', country: 'MX', where: 'Mexico' },
    { phrase: 'Chido', literal: 'no literal translation', meaning: '"Cool" or "awesome." The Mexican equivalent of "guay" (Spain) or "bacán" (Peru/Chile).', example: 'Esa película está muy chida.', country: 'MX', where: 'Mexico' },
    { phrase: '¿Qué onda?', literal: '"what wave?"', meaning: '"What\'s up?" / "How\'s it going?" — the most common casual greeting in Mexico.', example: '¡Hola! ¿Qué onda?', country: 'MX', where: 'Mexico, Central America' },
    { phrase: 'Aguas', literal: '"waters"', meaning: '"Watch out!" or "be careful!" — said to come from when people threw dirty water out of windows, yelling "aguas!" to warn passersby.', example: '¡Aguas con el coche!', country: 'MX', where: 'Mexico' },
    { phrase: 'No manches', literal: '"don\'t stain"', meaning: '"No way!" or "you\'re kidding!" — expresses disbelief or surprise. Family-friendly version of a stronger expression.', example: '¡No manches! ¿Te ganaste la lotería?', country: 'MX', where: 'Mexico' },

    // SPAIN
    { phrase: '¡Guay!', literal: 'no literal translation', meaning: '"Cool!" — the Spain equivalent of "chido" (Mexico). Used by basically everyone in Spain.', example: 'Tu camisa es muy guay.', country: 'ES', where: 'Spain' },
    { phrase: 'Vale', literal: '"it\'s worth"', meaning: '"OK" / "got it" / "sounds good." Spaniards say this constantly — it can fill almost any agreement slot.', example: 'Vale, nos vemos a las cinco.', country: 'ES', where: 'Spain (especially)' },
    { phrase: 'Tío / Tía', literal: '"uncle" / "aunt"', meaning: '"Dude" / "girl." Used informally between friends — has nothing to do with actual family members in this context.', example: '¡Tío, qué bueno verte!', country: 'ES', where: 'Spain' },
    { phrase: 'Flipar', literal: '"to flip"', meaning: '"To be amazed" or "to freak out" (positively). When something is amazing, you "flipa."', example: 'Estoy flipando con esta canción.', country: 'ES', where: 'Spain' },
    { phrase: 'Molar', literal: 'sort of: "to grind"', meaning: '"To be cool" or "to be liked." Works like gustar: "me mola" = "I like it / it\'s cool to me."', example: 'Esa peli me mola un montón.', country: 'ES', where: 'Spain' },

    // COLOMBIA
    { phrase: 'Chévere', literal: 'no literal translation', meaning: '"Cool" / "awesome" — used across Colombia, Venezuela, and parts of the Caribbean.', example: '¡Qué chévere tu fiesta!', country: 'CO', where: 'Colombia, Venezuela, Caribbean' },
    { phrase: 'Parcero / Parce', literal: '"partner"', meaning: '"Buddy" / "friend" — the Colombian word for a close friend. Often shortened to "parce."', example: '¿Qué tal, parce?', country: 'CO', where: 'Colombia' },
    { phrase: '¡Qué pena!', literal: '"what a shame!"', meaning: 'In Colombia, this means "sorry!" or "excuse me!" — not "what a pity" like elsewhere. Used to apologize for small things.', example: '¡Qué pena, llegué tarde!', country: 'CO', where: 'Colombia (different meaning elsewhere)' },

    // PERU / CHILE
    { phrase: 'Bacán', literal: 'no literal translation', meaning: '"Cool" / "awesome" — the Peruvian and Chilean version of chido/guay/chévere.', example: '¡Qué bacán tu mochila!', country: 'PE', where: 'Peru, Chile, Cuba' },
    { phrase: 'Pata', literal: '"paw"', meaning: '"Buddy" or "friend" in Peruvian Spanish. "Mi pata" = my friend.', example: 'Voy a salir con mis patas.', country: 'PE', where: 'Peru' },
    { phrase: 'Cachai', literal: 'sort of: "do you grab?"', meaning: '"You know?" / "you get it?" — Chilean filler word, used constantly in casual speech. From the verb "cachar" (to catch/grab).', example: 'Es una situación complicada, ¿cachai?', country: 'CL', where: 'Chile' },
    { phrase: 'Po', literal: 'no literal translation', meaning: 'A meaningless filler word Chileans add to the end of sentences for emphasis. From "pues."', example: 'Sí po, vamos al cine.', country: 'CL', where: 'Chile' },

    // CARIBBEAN (CUBA, PUERTO RICO, DR)
    { phrase: '¿Qué bolá?', literal: '"what ball?"', meaning: '"What\'s up?" — the iconic Cuban greeting. Even Obama used it on his 2016 Havana trip.', example: '¿Qué bolá, asere?', country: 'CU', where: 'Cuba' },
    { phrase: 'Asere', literal: 'no literal translation', meaning: '"Bro" / "dude" — Cuban term of endearment between friends. Comes from a West African word.', example: '¡Asere, qué bolá!', country: 'CU', where: 'Cuba' },
    { phrase: '¡Wepa!', literal: 'no literal translation', meaning: 'An exclamation of excitement, celebration, or encouragement. Like "yay!" or "let\'s go!"', example: '¡Wepa! ¡Ganamos!', country: 'PR', where: 'Puerto Rico' },
    { phrase: 'Janguear', literal: 'from English "to hang"', meaning: '"To hang out" — a Spanglish borrowing that became standard Puerto Rican Spanish. Conjugates like a regular -ar verb!', example: 'Vamos a janguear esta noche.', country: 'PR', where: 'Puerto Rico' },
    { phrase: 'Tatuá', literal: 'short for "está atado"', meaning: '"Got it" / "all set" / "deal." Dominican shortcut meaning everything\'s arranged.', example: '¿Vamos a la playa? — ¡Tatuá!', country: 'DO', where: 'Dominican Republic' },

    // UNIVERSAL / WIDESPREAD
    { phrase: 'No pasa nada', literal: '"nothing passes"', meaning: '"It\'s no big deal" / "no worries" / "don\'t worry about it." Used everywhere in the Spanish-speaking world.', example: 'Perdón por llegar tarde. — No pasa nada.', country: 'ES', where: 'Everywhere' },
    { phrase: 'Estar en las nubes', literal: '"to be in the clouds"', meaning: '"To be daydreaming" or "spacing out" — same as English "to have your head in the clouds."', example: 'Pablo siempre está en las nubes en clase.', country: 'ES', where: 'Everywhere' },
    { phrase: 'Echar la casa por la ventana', literal: '"to throw the house out the window"', meaning: 'To go all out, spare no expense. When you really splash out for a celebration.', example: 'Para la boda, echaron la casa por la ventana.', country: 'ES', where: 'Everywhere' },
    { phrase: 'Estar como una cabra', literal: '"to be like a goat"', meaning: '"To be crazy" / "to be nuts." A loving way to call someone wild or eccentric.', example: 'Mi tía está como una cabra, pero la queremos.', country: 'ES', where: 'Spain, widespread' },
    { phrase: 'Tener mala leche', literal: '"to have bad milk"', meaning: '"To be in a bad mood" or "to have a bad temper." Nothing to do with actual milk.', example: 'No le hables ahora, tiene mala leche.', country: 'ES', where: 'Spain, widespread' },
    { phrase: 'Ponerse las pilas', literal: '"to put on the batteries"', meaning: '"To get your act together" / "to step it up." When you need to focus or work harder.', example: 'Tengo que ponerme las pilas para el examen.', country: 'MX', where: 'Everywhere' },
    { phrase: 'Mucha mierda', literal: '"lots of [crud]"', meaning: '"Good luck!" — said to performers before they go on stage. Equivalent to "break a leg" in English. It\'s NOT vulgar in this context.', example: 'Tu obra empieza ahora. ¡Mucha mierda!', country: 'ES', where: 'Theater & performance, everywhere' },
    { phrase: 'Dar en el clavo', literal: '"to hit the nail"', meaning: '"To hit the nail on the head" / "to get it exactly right." Almost the same as the English idiom.', example: 'Diste en el clavo con esa respuesta.', country: 'ES', where: 'Everywhere' }
  ];

  function renderSlang() {
    const grid = document.getElementById('slangGrid');
    const tabs = document.getElementById('slangTabs');
    if (!grid) return;

    const availableCodes = Array.from(new Set(SLANG.map(s => s.country)));
    if (tabs) tabs.innerHTML = buildMundoCountryTabs(availableCodes);

    const slangToShow = mundoCountryFilter === 'all'
      ? SLANG
      : SLANG.filter(s => s.country === mundoCountryFilter);

    if (slangToShow.length === 0) {
      grid.innerHTML = `<div class="mundo-empty">No slang from the selected country yet.</div>`;
      return;
    }

    grid.innerHTML = slangToShow.map((s, i) => {
      const country = COUNTRIES.find(c => c.code === s.country);
      const flag = FLAGS[s.country] || '';
      return `
        <div class="slang-card" role="button" tabindex="0" aria-pressed="false" aria-label="Slang phrase${country ? ' from ' + country.code : ''} — activate to see the meaning" onclick="flipCard(this)" onkeydown="flipCardKey(event)">
          <div class="slang-card-inner">
            <div class="slang-card-face slang-card-front">
              <div class="country-flag-mini">${flag}</div>
              <div class="country-tag">${country ? country.code : ''}</div>
              <div class="phrase">${s.phrase}</div>
              <div class="literal">lit. ${s.literal}</div>
              <div class="tap-hint">tap to see meaning</div>
            </div>
            <div class="slang-card-face slang-card-back">
              <div class="meaning-label">Means</div>
              <div class="meaning">${s.meaning}</div>
              <div class="example">${escapeHtml(s.example)}</div>
              <div class="where">${s.where}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

