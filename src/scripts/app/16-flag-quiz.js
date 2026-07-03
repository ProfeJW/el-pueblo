  /* ============== FLAG QUIZ ============== */
  let flagQuizCountry = null;
  let flagCorrect = 0, flagTries = 0;

  function newFlagQuiz() {
    const target = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    flagQuizCountry = target;
    // Build 4 options including correct
    const others = COUNTRIES.filter(c => c.code !== target.code).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [target, ...others].sort(() => Math.random() - 0.5);
    document.getElementById('flagQuizFlag').innerHTML = `<div class="flag-quiz-display">${FLAGS[target.code]}</div>`;
    document.getElementById('flagQuizOptions').innerHTML = options.map(o => `
      <button class="flag-opt" data-code="${o.code}" onclick="answerFlag(this, '${o.code}')">${o.name}</button>
    `).join('');
  }

  function answerFlag(btn, code) {
    const all = document.querySelectorAll('.flag-opt');
    all.forEach(b => b.disabled = true);
    flagTries++;
    if (code === flagQuizCountry.code) {
      btn.classList.add('correct');
      flagCorrect++;
      STATE.flagsCorrect = (STATE.flagsCorrect || 0) + 1;
      STATE.flagStreak = (STATE.flagStreak || 0) + 1;
      if (STATE.flagStreak > (STATE.bestFlagStreak || 0)) STATE.bestFlagStreak = STATE.flagStreak;
      // Bonus for streaks of 5
      let earned = 2;
      if (STATE.flagStreak > 0 && STATE.flagStreak % 5 === 0) {
        earned += 5;
        awardCoins(earned, 'Flag streak: ' + STATE.flagStreak + '!');
      } else {
        awardCoins(earned, 'Flag correct: ' + flagQuizCountry.name);
      }
    } else {
      btn.classList.add('wrong');
      all.forEach(b => { if (b.dataset.code === flagQuizCountry.code) b.classList.add('correct'); });
      STATE.flagStreak = 0;
    }
    document.getElementById('flagCorrect').textContent = flagCorrect;
    document.getElementById('flagTries').textContent = flagTries;
    setTimeout(newFlagQuiz, 1800);
  }

