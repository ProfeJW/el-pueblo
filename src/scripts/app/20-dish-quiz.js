  /* ============== DISH QUIZ ============== */
  // Show a dish description, ask which country it's from. Pulls from DISHES.
  // Distractor strategy: prefer countries that have *other* dishes in our data
  // (avoids "obviously not Argentina because they have no dishes" giveaways).
  let dishQuizTarget = null;
  let dishCorrectCount = 0, dishTriesCount = 0;
  let dishAnswered = false;

  function newDishQuiz() {
    dishAnswered = false;
    if (!DISHES || DISHES.length === 0) {
      const el = document.getElementById('dishQuizCard');
      if (el) el.textContent = 'No dishes loaded yet.';
      return;
    }
    // Pick a random dish
    dishQuizTarget = DISHES[Math.floor(Math.random() * DISHES.length)];

    // Build options: correct + 3 distractor countries
    const correctCode = dishQuizTarget.country;
    // Pull country codes from DISHES (countries that have any dish in our data)
    const allDishCountries = Array.from(new Set(DISHES.map(d => d.country)));
    const distractors = allDishCountries.filter(c => c !== correctCode).sort(() => Math.random() - 0.5).slice(0, 3);
    // If fewer than 3 distractors available, fall back to all countries
    while (distractors.length < 3) {
      const candidate = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)].code;
      if (candidate !== correctCode && !distractors.includes(candidate)) distractors.push(candidate);
    }
    const options = [correctCode, ...distractors].sort(() => Math.random() - 0.5);

    // Render the dish card (name + type + description, no flag/country hint)
    document.getElementById('dishQuizCard').innerHTML = `
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.7; margin-bottom: 8px;">Dish:</div>
      <div style="font-family: 'DM Serif Display', serif; font-size: 24px; line-height: 1.2; margin-bottom: 6px;">${dishQuizTarget.name}</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; opacity: 0.7; margin-bottom: 12px;">${dishQuizTarget.type}</div>
      <div style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.5;">${dishQuizTarget.description}</div>
    `;

    // Render options — country names with flags
    document.getElementById('dishQuizOptions').innerHTML = options.map(code => {
      const country = COUNTRIES.find(c => c.code === code);
      const flag = FLAGS[code] || '';
      return `<button class="trivia-opt" data-answer="${code}" onclick="answerDish(this)">${flag} ${country ? country.name : code}</button>`;
    }).join('');
    document.getElementById('dishQuizAnswer').textContent = '';
  }

  function answerDish(btn) {
    if (dishAnswered) return;
    dishAnswered = true;
    const all = document.querySelectorAll('#dishQuizOptions .trivia-opt');
    all.forEach(b => b.disabled = true);
    dishTriesCount++;

    const chosen = btn.getAttribute('data-answer');
    const correct = dishQuizTarget.country;
    const isCorrect = chosen === correct;

    if (isCorrect) {
      btn.classList.add('correct');
      dishCorrectCount++;
      STATE.dishCorrect = (STATE.dishCorrect || 0) + 1;
      awardCoins(3, 'Dish quiz correct');
    } else {
      btn.classList.add('wrong');
      all.forEach(b => {
        if (b.getAttribute('data-answer') === correct) b.classList.add('correct');
      });
    }

    const country = COUNTRIES.find(c => c.code === correct);
    document.getElementById('dishQuizAnswer').innerHTML = 
      `<strong>${dishQuizTarget.name}</strong> is from <strong>${country ? country.name : correct}</strong>. ${dishQuizTarget.where ? '<br><span style="font-size: 13px; opacity: 0.7;">Also eaten in: ' + dishQuizTarget.where + '</span>' : ''}`;
    document.getElementById('dishCorrect').textContent = dishCorrectCount;
    document.getElementById('dishTries').textContent = dishTriesCount;
  }

