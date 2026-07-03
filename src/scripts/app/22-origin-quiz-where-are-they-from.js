  /* ============== ORIGIN QUIZ — "Where are they from?" ============== */
  // Shows a person's photo + name + role, asks the user to identify their country.
  // Different from Person Quiz (which asks WHO is being described, with country GIVEN as a clue).
  // This is the inverse: you SEE who they are, you have to PLACE them on the map.
  let originQuizTarget = null;
  let originCorrectCount = 0, originTriesCount = 0;
  let originAnswered = false;

  function newOriginQuiz() {
    originAnswered = false;
    if (!PEOPLE || PEOPLE.length === 0) {
      const el = document.getElementById('originQuizPerson');
      if (el) el.textContent = 'No people loaded yet.';
      return;
    }
    // Pick a random person
    originQuizTarget = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];

    // Render the person card — photo + name + role, NO country hint
    const initial = originQuizTarget.name.charAt(0);
    document.getElementById('originQuizPerson').innerHTML = `
      <div style="width: 110px; height: 110px; margin: 0 auto 12px; border-radius: 50%; overflow: hidden; background: rgba(244,237,224,0.15); display: flex; align-items: center; justify-content: center; position: relative;">
        <span style="position: absolute; font-family: 'DM Serif Display', serif; font-size: 48px; color: rgba(244,237,224,0.4);">${initial}</span>
        <img src="${originQuizTarget.img}" alt="${originQuizTarget.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 1;" onerror="this.style.display='none'">
      </div>
      <div style="font-family: 'DM Serif Display', serif; font-size: 22px; line-height: 1.2; margin-bottom: 4px;">${originQuizTarget.name}</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.7;">${originQuizTarget.role}</div>
    `;

    // Build 4 country options: correct + 3 distractors
    const correctCode = originQuizTarget.country;
    // Pull distractors from countries that have other people (more plausible)
    const otherPersonCountries = Array.from(new Set(PEOPLE.map(p => p.country))).filter(c => c !== correctCode);
    const distractors = otherPersonCountries.sort(() => Math.random() - 0.5).slice(0, 3);
    // If fewer than 3, fill from all countries
    while (distractors.length < 3) {
      const candidate = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)].code;
      if (candidate !== correctCode && !distractors.includes(candidate)) distractors.push(candidate);
    }
    const options = [correctCode, ...distractors].sort(() => Math.random() - 0.5);

    document.getElementById('originQuizOptions').innerHTML = options.map(code => {
      const country = COUNTRIES.find(c => c.code === code);
      const flag = FLAGS[code] || '';
      return `<button class="trivia-opt" data-answer="${code}" onclick="answerOrigin(this)">${flag} ${country ? country.name : code}</button>`;
    }).join('');
    document.getElementById('originQuizAnswer').textContent = '';
  }

  function answerOrigin(btn) {
    if (originAnswered) return;
    originAnswered = true;
    const all = document.querySelectorAll('#originQuizOptions .trivia-opt');
    all.forEach(b => b.disabled = true);
    originTriesCount++;

    const chosen = btn.getAttribute('data-answer');
    const correct = originQuizTarget.country;
    const isCorrect = chosen === correct;

    if (isCorrect) {
      btn.classList.add('correct');
      originCorrectCount++;
      STATE.originCorrect = (STATE.originCorrect || 0) + 1;
      awardCoins(3, 'Origin correct: ' + originQuizTarget.name);
    } else {
      btn.classList.add('wrong');
      all.forEach(b => {
        if (b.getAttribute('data-answer') === correct) b.classList.add('correct');
      });
    }

    const country = COUNTRIES.find(c => c.code === correct);
    document.getElementById('originQuizAnswer').innerHTML = 
      `<strong>${originQuizTarget.name}</strong> is from <strong>${country ? country.name : correct}</strong>. <span style="font-size: 13px; opacity: 0.7;">${originQuizTarget.blurb}</span>`;
    document.getElementById('originCorrect').textContent = originCorrectCount;
    document.getElementById('originTries').textContent = originTriesCount;
  }

