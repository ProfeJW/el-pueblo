  /* ============== YEAR MATCH / WHICH CAME FIRST ============== */
  // Show 4 Historia events from different time periods. Ask which happened first.
  // Tricky to do well: some event "years" are ranges ("1980-1992"), so we need
  // to extract the FIRST year from each range for comparison.
  let yearQuizEvents = null;
  let yearQuizCorrectIdx = -1;
  let yearCorrectCount = 0, yearTriesCount = 0;
  let yearAnswered = false;

  // Extract earliest year from an event year string.
  // Examples: "1973" → 1973; "1980–1992" → 1980; "~3000 BCE" → -3000; "1492" → 1492;
  // "The whole century" → null (skip events like this for year sorting)
  function parseEventYear(yearStr) {
    if (!yearStr) return null;
    const s = String(yearStr);
    // Skip non-numeric titles like "The whole century"
    if (!/\d/.test(s)) return null;
    // Check for BCE
    const isBCE = /BCE|B\.C\./i.test(s);
    // Extract the first 1-4 digit number
    const m = s.match(/(\d{1,4})/);
    if (!m) return null;
    let n = parseInt(m[1], 10);
    if (isBCE) n = -n;
    return n;
  }

  function newYearQuiz() {
    yearAnswered = false;
    if (!HISTORIA || HISTORIA.length === 0) {
      const el = document.getElementById('yearQuizOptions');
      if (el) el.innerHTML = '<div style="font-style: italic; opacity: 0.7; padding: 16px;">Loading events…</div>';
      if (typeof loadHistoriaModule === 'function') {
        loadHistoriaModule().then(() => newYearQuiz()).catch(() => {
          if (el) el.innerHTML = '<div style="font-style: italic; opacity: 0.7; padding: 16px;">Events unavailable right now. <a href="#/historia" style="color: var(--rojo);">Back to Historia</a>.</div>';
        });
      }
      return;
    }
    // Collect all events with a parseable year
    const allEvents = [];
    HISTORIA.forEach(country => {
      country.events.forEach(event => {
        const year = parseEventYear(event.year);
        if (year !== null) {
          allEvents.push({
            country: country.countryName,
            countryCode: country.country,
            title: event.title.replace(/<[^>]+>/g, ''),
            year: year,
            yearLabel: event.year
          });
        }
      });
    });
    if (allEvents.length < 4) {
      document.getElementById('yearQuizOptions').textContent = 'Not enough events with parseable years yet.';
      return;
    }
    // Pick 4 random events
    const shuffled = allEvents.sort(() => Math.random() - 0.5);
    yearQuizEvents = shuffled.slice(0, 4);
    // Determine the earliest (correct answer)
    let earliestIdx = 0;
    for (let i = 1; i < yearQuizEvents.length; i++) {
      if (yearQuizEvents[i].year < yearQuizEvents[earliestIdx].year) earliestIdx = i;
    }
    yearQuizCorrectIdx = earliestIdx;

    // Render options without dates (otherwise the answer is obvious)
    document.getElementById('yearQuizOptions').innerHTML = yearQuizEvents.map((e, i) => {
      const flag = FLAGS[e.countryCode] || '';
      return `
        <button class="trivia-opt" data-idx="${i}" onclick="answerYear(this)" style="text-align: left; padding: 14px 18px; display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 20px;">${flag}</span>
          <span><strong>${e.title}</strong> <span style="opacity: 0.6; font-size: 13px;">· ${e.country}</span></span>
        </button>
      `;
    }).join('');
    document.getElementById('yearQuizAnswer').textContent = '';
  }

  function answerYear(btn) {
    if (yearAnswered) return;
    yearAnswered = true;
    const all = document.querySelectorAll('#yearQuizOptions .trivia-opt');
    all.forEach(b => b.disabled = true);
    yearTriesCount++;

    const chosenIdx = parseInt(btn.getAttribute('data-idx'), 10);
    const isCorrect = chosenIdx === yearQuizCorrectIdx;

    if (isCorrect) {
      btn.classList.add('correct');
      yearCorrectCount++;
      STATE.yearCorrect = (STATE.yearCorrect || 0) + 1;
      awardCoins(3, 'Year match correct');
    } else {
      btn.classList.add('wrong');
      all.forEach(b => {
        if (parseInt(b.getAttribute('data-idx'), 10) === yearQuizCorrectIdx) b.classList.add('correct');
      });
    }

    // Reveal: sorted chronological list of all 4
    const sorted = [...yearQuizEvents].sort((a, b) => a.year - b.year);
    const sortedHtml = sorted.map(e => `<li><strong>${e.yearLabel}</strong> — ${e.title} (${e.country})</li>`).join('');
    document.getElementById('yearQuizAnswer').innerHTML = 
      `<strong>Chronological order:</strong><ol style="margin: 6px 0 0 0; padding-left: 20px;">${sortedHtml}</ol>`;
    document.getElementById('yearCorrect').textContent = yearCorrectCount;
    document.getElementById('yearTries').textContent = yearTriesCount;
  }

