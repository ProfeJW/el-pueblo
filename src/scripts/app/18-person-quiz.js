  /* ============== PERSON QUIZ ============== */
  // Pick a random person from PEOPLE, build a clue list (country, role, blurb keywords),
  // present 4 multiple-choice answers. 3 Lucas on correct.
  let personQuizTarget = null;
  let personCorrectCount = 0, personTriesCount = 0;
  let personAnswered = false;

  function newPersonQuiz() {
    personAnswered = false;
    const target = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];
    personQuizTarget = target;

    // Build clue list — start vague, get more specific
    const country = COUNTRIES.find(c => c.code === target.country);
    const clues = [];

    // Clue 1: country (always given)
    clues.push(`This person is from <strong>${country ? country.name : target.country}</strong> ${FLAGS[target.country] || ''}`);

    // Clue 2: role/profession
    clues.push(`Their role: <strong>${target.role}</strong>`);

    // Clue 3: first sentence of blurb, with the person's first name redacted to avoid giveaway
    const firstName = target.name.split(' ')[0];
    const lastName = target.name.split(' ').slice(-1)[0];
    let blurbHint = target.blurb;
    // Redact first name + last name if they appear in the blurb
    const redactRegex = new RegExp('\\b(' + firstName + '|' + lastName + ')\\b', 'gi');
    blurbHint = blurbHint.replace(redactRegex, '___');
    // Take first sentence only
    const firstSentence = blurbHint.split('.')[0] + '.';
    clues.push(firstSentence);

    // Render clue list
    const cluesList = document.getElementById('personQuizCluesList');
    cluesList.innerHTML = clues.map(c => '<li style="margin-bottom: 8px;">' + c + '</li>').join('');

    // Photo clue — set the image and reveal the wrapper. If the image fails to load
    // (school filter, broken URL, etc.) the onerror hides the wrapper so the quiz
    // still works text-only.
    const photoWrap = document.getElementById('personQuizPhotoWrap');
    const photo = document.getElementById('personQuizPhoto');
    if (photo && photoWrap) {
      if (target.img) {
        photoWrap.style.display = 'block';
        photo.onerror = function() { photoWrap.style.display = 'none'; };
        photo.src = target.img;
        photo.alt = 'photo clue';
      } else {
        photoWrap.style.display = 'none';
      }
    }

    // Build 4 multiple-choice options: correct + 3 distractors
    // Prefer distractors from the same country if available (harder); fall back to random
    const sameCountry = PEOPLE.filter(p => p.country === target.country && p.name !== target.name);
    const otherPeople = PEOPLE.filter(p => p.country !== target.country);
    const distractors = [];
    // First, try to fill from same country
    sameCountry.sort(() => Math.random() - 0.5).slice(0, 2).forEach(p => distractors.push(p));
    // Fill remaining from other countries (random)
    while (distractors.length < 3) {
      const candidate = otherPeople[Math.floor(Math.random() * otherPeople.length)];
      if (!distractors.find(d => d.name === candidate.name)) {
        distractors.push(candidate);
      }
    }
    const options = [target, ...distractors].sort(() => Math.random() - 0.5);

    document.getElementById('personQuizOptions').innerHTML = options.map(o => `
      <button class="person-opt" data-name="${o.name.replace(/"/g, '&quot;')}" onclick="answerPerson(this, '${o.name.replace(/'/g, "\\'")}')">${o.name}</button>
    `).join('');

    document.getElementById('personQuizAnswer').textContent = '';
  }

  function answerPerson(btn, name) {
    if (personAnswered) return;
    personAnswered = true;
    const all = document.querySelectorAll('.person-opt');
    all.forEach(b => b.disabled = true);
    personTriesCount++;

    const isCorrect = name === personQuizTarget.name;

    if (isCorrect) {
      btn.classList.add('correct');
      personCorrectCount++;
      STATE.peopleCorrect = (STATE.peopleCorrect || 0) + 1;
      awardCoins(3, 'Person correct: ' + personQuizTarget.name);
    } else {
      btn.classList.add('wrong');
      // Highlight the correct one
      all.forEach(b => {
        if (b.dataset.name === personQuizTarget.name) b.classList.add('correct');
      });
    }

    // Reveal: full name + country + the unredacted blurb
    const country = COUNTRIES.find(c => c.code === personQuizTarget.country);
    document.getElementById('personQuizAnswer').innerHTML = 
      `<strong>${personQuizTarget.name}</strong> · ${personQuizTarget.role} · ${country ? country.name : ''} — ${personQuizTarget.blurb}`;
    document.getElementById('personCorrect').textContent = personCorrectCount;
    document.getElementById('personTries').textContent = personTriesCount;
  }

