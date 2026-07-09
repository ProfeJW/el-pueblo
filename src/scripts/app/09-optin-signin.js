  /* ============== OPT-IN SIGN-IN ============== */
  // Anonymous by default. Students can choose to sign in (with a nickname) to:
  //   - persist progress across sessions
  //   - keep their Lucas
  //   - unlock the Shop / Achievements stats
  // Sign in is voluntary. Nothing is collected if they don't sign in.
  // The nickname is stored ONLY in their browser (localStorage), never sent anywhere.

  function openSignInModal() {
    const modal = document.getElementById('signInModal');
    if (modal) modal.classList.add('open');
    setTimeout(() => {
      const input = document.getElementById('signInNameInput');
      if (input) { input.focus(); input.select && input.select(); }
    }, 50);
  }

  function closeSignInModal() {
    const modal = document.getElementById('signInModal');
    if (modal) modal.classList.remove('open');
  }

  function confirmSignIn() {
    const input = document.getElementById('signInNameInput');
    if (!input) return;
    let name = (input.value || '').trim().slice(0, 30);
    if (!name) {
      // Soft inline feedback
      const err = document.getElementById('signInError');
      if (err) { err.textContent = 'Please enter a name to continue.'; err.style.display = 'block'; }
      return;
    }
    // Check if this name already has saved progress
    const existingRaw = localStorage.getItem(STORAGE_KEY + ':' + name);
    if (existingRaw) {
      // Confirm: use existing or start fresh?
      const useExisting = confirm(
        'A profile named "' + name + '" already exists on this device.\n\n' +
        'OK: continue with the saved progress for "' + name + '"\n' +
        'Cancel: pick a different name'
      );
      if (!useExisting) return;
      // Use existing: reload to pick up saved state
      localStorage.setItem(STUDENT_KEY, name);
      // Don't merge session progress — they chose existing
      location.reload();
      return;
    }
    // New name: migrate current session progress (anonymous Lucas + state) to this profile
    localStorage.setItem(STUDENT_KEY, name);
    STUDENT_NAME = name;
    // Force a save with the current in-memory STATE under the new name
    try { saveState(); } catch(e) {}
    closeSignInModal();
    // Refresh header UI to show signed-in state
    refreshAuthUI();
    // Friendly toast
    if (typeof showToast === 'function') {
      showToast('Signed in as ' + name + '. Your progress will save from here.');
    }
  }

  function signOut() {
    if (!isSignedIn()) return;
    const ok = confirm(
      'Sign out?\n\n' +
      'Your saved progress will stay on this device. You can sign back in later with the same name to pick up where you left off.\n\n' +
      'During anonymous use, Lucas and progress aren\'t saved.'
    );
    if (!ok) return;
    localStorage.removeItem(STUDENT_KEY);
    location.reload();
  }

  // ============================================================================
  // THEME TOGGLE — Sun (default warm paper) vs Cosmic (Web3 dark)
  // The early script in <head> already applied the saved theme before render.
  // This function flips it and persists the choice. The toggle button shows
  // the moon when in sun mode (click → go cosmic) and the sun when in cosmic
  // mode (click → go sun).
  // ============================================================================
  function toggleTheme() {
    const html = document.documentElement;
    const currentlyCosmic = html.getAttribute('data-theme') === 'cosmic';
    if (currentlyCosmic) {
      html.removeAttribute('data-theme');
      try { localStorage.setItem('elPueblo_theme', 'sun'); } catch (e) {}
    } else {
      html.setAttribute('data-theme', 'cosmic');
      try { localStorage.setItem('elPueblo_theme', 'cosmic'); } catch (e) {}
    }
    updateThemeToggleIcon();
  }

  function updateThemeToggleIcon() {
    const btn = document.getElementById('themeToggle');
    if (btn) {
      const isCosmic = document.documentElement.getAttribute('data-theme') === 'cosmic';
      btn.textContent = isCosmic ? '☀️' : '🌙';
      btn.setAttribute('aria-pressed', isCosmic ? 'true' : 'false');
      btn.setAttribute('title', isCosmic ? 'Switch to sun theme' : 'Switch to cosmic theme');
    }
    // Highlight the active accent dot
    const currentAccent = document.documentElement.getAttribute('data-accent') || 'pink';
    document.querySelectorAll('.accent-dot').forEach(d => {
      if (d.getAttribute('data-color') === currentAccent) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  // Set the cosmic accent color. No-op in sun mode aesthetics but the attribute
  // is still saved so it applies if user later switches to cosmic.
  function setAccent(color) {
    const valid = ['pink','green','orange','yellow'];
    if (valid.indexOf(color) === -1) return;
    document.documentElement.setAttribute('data-accent', color);
    try { localStorage.setItem('elPueblo_accent', color); } catch (e) {}
    updateThemeToggleIcon();
  }
  window.setAccent = setAccent;

  // Run once at startup so the button shows the right icon
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateThemeToggleIcon);
  } else {
    updateThemeToggleIcon();
  }

  // Expose for the onclick attribute
  window.toggleTheme = toggleTheme;

  // Update header UI based on signed-in status
  function refreshAuthUI() {
    const signedIn = isSignedIn();
    const signInBtn = document.getElementById('signInBtn');
    const nameChip = document.getElementById('nameChip');
    const coin = document.getElementById('coinCounter');
    const signOutBtn = document.getElementById('signOutBtn');
    if (signInBtn) signInBtn.style.display = signedIn ? 'none' : '';
    if (nameChip) nameChip.style.display = signedIn ? '' : 'none';
    if (coin) coin.style.display = signedIn ? '' : 'none';
    if (signOutBtn) signOutBtn.style.display = signedIn ? '' : 'none';
    // Populate the name chip with the student's name (escape to prevent HTML injection)
    if (signedIn) {
      const label = document.getElementById('nameChipLabel');
      if (label) {
        const name = getStudentName() || '';
        label.textContent = name;
      }
    }
  }

  const STATE = loadState();

  // Mark today as an active practice day (for the Dedicación streak badges).
  (function () {
    try {
      const today = new Date().toISOString().slice(0, 10);
      if (!STATE.daysActive) STATE.daysActive = new Set();
      if (!STATE.daysActive.has(today)) { STATE.daysActive.add(today); saveState(); }
    } catch (e) { /* non-fatal */ }
  })();

  // Badge categories, in display order. Each badge below belongs to one `cat`.
  const BADGE_CATS = [
    { id: 'vocab',      name: 'Vocabulario',      icon: '🗂️' },
    { id: 'verbs',      name: 'Verbos',           icon: '🔀' },
    { id: 'reading',    name: 'Lectura',          icon: '📖' },
    { id: 'listening',  name: 'Escucha',          icon: '🎧' },
    { id: 'writing',    name: 'Escritura',        icon: '✍️' },
    { id: 'speaking',   name: 'Habla',            icon: '🎙️' },
    { id: 'mundo',      name: 'Mundo e Historia', icon: '🌎' },
    { id: 'dedication', name: 'Dedicación',       icon: '🔥' },
    { id: 'mastery',    name: 'Maestría',         icon: '👑' }
  ];

  // Small metric helpers so badge progress() functions stay readable.
  function _objCount(o) { return o && typeof o === 'object' ? Object.keys(o).length : 0; }
  function _modulesUsed() {
    return (STATE.cardsViewed.size >= 1 ? 1 : 0)
      + ((STATE.drillsCompleted || 0) >= 1 ? 1 : 0)
      + (STATE.quizCorrect >= 1 ? 1 : 0)
      + (STATE.listenedClips.size >= 1 ? 1 : 0)
      + (STATE.wordsWritten >= 50 ? 1 : 0)
      + (STATE.recordingsCount >= 1 ? 1 : 0)
      + ((STATE.countriesViewed && STATE.countriesViewed.size >= 1) ? 1 : 0);
  }

  // Ground-up badge system: tiered ladders across 9 categories. Each badge has a
  // numeric target and a progress() returning the student's current count, so the
  // UI can render "47 / 50" progress bars generically. Unlocked when progress >= target.
  // Reward scales with tier difficulty. Legacy ids (first_card, card_50, …) are kept
  // so badges already earned by signed-in students stay earned after this rework.
  const ACHIEVEMENTS = [
    // ── Vocabulario — flashcards & decks ──────────────────────────────
    { id: 'first_card',      cat: 'vocab', icon: '📖', title: 'First steps',       desc: 'Flip your first flashcard',        reward: 8,   target: 1,    progress: () => STATE.cardsViewed.size },
    { id: 'card_50',         cat: 'vocab', icon: '📚', title: 'Fifty words',       desc: 'See 50 unique flashcards',         reward: 20,  target: 50,   progress: () => STATE.cardsViewed.size },
    { id: 'voc_cards_250',   cat: 'vocab', icon: '🧠', title: 'Word hoard',        desc: 'See 250 unique flashcards',        reward: 50,  target: 250,  progress: () => STATE.cardsViewed.size },
    { id: 'voc_cards_750',   cat: 'vocab', icon: '🏛️', title: 'Lexicon',           desc: 'See 750 unique flashcards',        reward: 100, target: 750,  progress: () => STATE.cardsViewed.size },
    { id: 'voc_cards_1500',  cat: 'vocab', icon: '👑', title: 'Walking dictionary',desc: 'See 1,500 unique flashcards',      reward: 180, target: 1500, progress: () => STATE.cardsViewed.size },
    { id: 'voc_deck_1',      cat: 'vocab', icon: '🎴', title: 'Deck done',         desc: 'Finish a full deck',               reward: 10,  target: 1,    progress: () => STATE.completedDecks.size },
    { id: 'voc_deck_5',      cat: 'vocab', icon: '🗃️', title: 'Five decks',        desc: 'Finish 5 full decks',              reward: 30,  target: 5,    progress: () => STATE.completedDecks.size },
    { id: 'voc_deck_15',     cat: 'vocab', icon: '📦', title: 'Fifteen decks',     desc: 'Finish 15 full decks',             reward: 70,  target: 15,   progress: () => STATE.completedDecks.size },
    { id: 'voc_deck_35',     cat: 'vocab', icon: '🎒', title: 'Deck collector',    desc: 'Finish 35 full decks',             reward: 130, target: 35,   progress: () => STATE.completedDecks.size },
    { id: 'voc_deck_all',    cat: 'vocab', icon: '🏆', title: 'Every last deck',   desc: 'Finish all 58 decks',              reward: 220, target: 58,   progress: () => STATE.completedDecks.size },
    // ── Verbos — conjugation drills ───────────────────────────────────
    { id: 'first_drill',     cat: 'verbs', icon: '✏️', title: 'First drill',       desc: 'Submit your first verb drill',     reward: 8,   target: 1,    progress: () => (STATE.drillsCompleted || 0) },
    { id: 'vrb_drill_10',    cat: 'verbs', icon: '🔁', title: 'Ten drills',        desc: 'Complete 10 verb drills',          reward: 25,  target: 10,   progress: () => (STATE.drillsCompleted || 0) },
    { id: 'vrb_drill_50',    cat: 'verbs', icon: '⚙️', title: 'Drill machine',     desc: 'Complete 50 verb drills',          reward: 70,  target: 50,   progress: () => (STATE.drillsCompleted || 0) },
    { id: 'vrb_drill_100',   cat: 'verbs', icon: '🛠️', title: 'Conjugation forge', desc: 'Complete 100 verb drills',         reward: 150, target: 100,  progress: () => (STATE.drillsCompleted || 0) },
    { id: 'drill_perfect',   cat: 'verbs', icon: '🎯', title: 'Perfect drill',     desc: 'Score 20/20 on a drill',           reward: 20,  target: 1,    progress: () => (STATE.perfectDrills || 0) },
    { id: 'drill_5_perfect', cat: 'verbs', icon: '🏆', title: 'Drill master',      desc: 'Score 20/20 on five drills',       reward: 60,  target: 5,    progress: () => (STATE.perfectDrills || 0) },
    { id: 'vrb_perfect_15',  cat: 'verbs', icon: '💎', title: 'Flawless fifteen',  desc: 'Score 20/20 on fifteen drills',    reward: 120, target: 15,   progress: () => (STATE.perfectDrills || 0) },
    { id: 'vrb_perfect_30',  cat: 'verbs', icon: '🌟', title: 'Conjugation deity', desc: 'Score 20/20 on thirty drills',     reward: 220, target: 30,   progress: () => (STATE.perfectDrills || 0) },
    // ── Lectura — reading & comprehension ─────────────────────────────
    { id: 'first_quiz',      cat: 'reading', icon: '🧠', title: 'Attentive reader', desc: 'Answer a reading question right',  reward: 8,   target: 1,    progress: () => STATE.quizCorrect },
    { id: 'rd_correct_10',   cat: 'reading', icon: '📰', title: 'Close reader',     desc: 'Answer 10 reading questions right',reward: 25,  target: 10,   progress: () => STATE.quizCorrect },
    { id: 'rd_correct_50',   cat: 'reading', icon: '🔍', title: 'Sharp eyes',       desc: 'Answer 50 reading questions right',reward: 70,  target: 50,   progress: () => STATE.quizCorrect },
    { id: 'all_quiz',        cat: 'reading', icon: '🎓', title: 'Total comprehension', desc: 'Get a perfect reading score',   reward: 20,  target: 1,    progress: () => (STATE.readingPerfect ? 1 : 0) },
    { id: 'rd_readings_5',   cat: 'reading', icon: '📕', title: 'Bookworm',         desc: 'Complete 5 readings',              reward: 40,  target: 5,    progress: () => _objCount(STATE.completedReadings) },
    { id: 'rd_readings_15',  cat: 'reading', icon: '📚', title: 'Well-read',        desc: 'Complete 15 readings',             reward: 100, target: 15,   progress: () => _objCount(STATE.completedReadings) },
    // ── Escucha — listening & dictation ───────────────────────────────
    { id: 'first_listen',    cat: 'listening', icon: '🎧', title: 'Open ears',      desc: 'Listen to your first audio',       reward: 8,   target: 1,    progress: () => STATE.listenedClips.size },
    { id: 'all_listen',      cat: 'listening', icon: '🌊', title: 'Full immersion', desc: 'Listen to 4 audio clips',          reward: 20,  target: 4,    progress: () => STATE.listenedClips.size },
    { id: 'ls_clips_12',     cat: 'listening', icon: '👂', title: 'Trained ear',    desc: 'Listen to 12 audio clips',         reward: 55,  target: 12,   progress: () => STATE.listenedClips.size },
    { id: 'ls_dict_1',       cat: 'listening', icon: '📝', title: 'First dictation',desc: 'Complete a dictation',             reward: 10,  target: 1,    progress: () => _objCount(STATE.completedDictation) },
    { id: 'ls_dict_8',       cat: 'listening', icon: '✒️', title: 'Steady hand',    desc: 'Complete 8 dictations',            reward: 45,  target: 8,    progress: () => _objCount(STATE.completedDictation) },
    { id: 'ls_dict_20',      cat: 'listening', icon: '🦻', title: 'Dictation pro',  desc: 'Complete 20 dictations',           reward: 110, target: 20,   progress: () => _objCount(STATE.completedDictation) },
    // ── Escritura — writing ───────────────────────────────────────────
    { id: 'first_words',     cat: 'writing', icon: '📝', title: 'First sentence',   desc: 'Write 50 words',                   reward: 8,   target: 50,   progress: () => STATE.wordsWritten },
    { id: 'wr_words_500',    cat: 'writing', icon: '🖋️', title: 'Getting fluent',  desc: 'Write 500 words total',            reward: 30,  target: 500,  progress: () => STATE.wordsWritten },
    { id: 'wr_words_2000',   cat: 'writing', icon: '📃', title: 'Prolific',         desc: 'Write 2,000 words total',          reward: 80,  target: 2000, progress: () => STATE.wordsWritten },
    { id: 'wr_words_5000',   cat: 'writing', icon: '🗞️', title: 'Novelist',        desc: 'Write 5,000 words total',          reward: 160, target: 5000, progress: () => STATE.wordsWritten },
    { id: 'poem_200',        cat: 'writing', icon: '🪶', title: 'Born poet',        desc: 'Finish a 200+ word piece',         reward: 25,  target: 1,    progress: () => STATE.poemsCompleted },
    { id: 'three_poems',     cat: 'writing', icon: '📜', title: 'Literary voice',   desc: 'Finish 3 long-form pieces',        reward: 60,  target: 3,    progress: () => STATE.poemsCompleted },
    { id: 'wr_poems_10',     cat: 'writing', icon: '🎭', title: 'Wordsmith',        desc: 'Finish 10 long-form pieces',       reward: 140, target: 10,   progress: () => STATE.poemsCompleted },
    // ── Habla — speaking ──────────────────────────────────────────────
    { id: 'first_rec',       cat: 'speaking', icon: '🎙️', title: 'Your voice',     desc: 'Record your first audio',          reward: 8,   target: 1,    progress: () => STATE.recordingsCount },
    { id: 'sp_rec_5',        cat: 'speaking', icon: '🗣️', title: 'Speaking up',    desc: 'Record 5 responses',               reward: 30,  target: 5,    progress: () => STATE.recordingsCount },
    { id: 'sp_rec_20',       cat: 'speaking', icon: '📣', title: 'Confident speaker',desc: 'Record 20 responses',            reward: 90,  target: 20,   progress: () => STATE.recordingsCount },
    { id: 'quality_rec',     cat: 'speaking', icon: '⭐', title: 'Quality recording',desc: 'Record 30+ seconds of speech',   reward: 25,  target: 1,    progress: () => STATE.qualityRecordings },
    { id: 'sp_quality_5',    cat: 'speaking', icon: '🌟', title: 'Clear and steady',desc: 'Five quality recordings',         reward: 60,  target: 5,    progress: () => STATE.qualityRecordings },
    { id: 'sp_quality_15',   cat: 'speaking', icon: '🏅', title: 'Native rhythm',   desc: 'Fifteen quality recordings',       reward: 130, target: 15,   progress: () => STATE.qualityRecordings },
    // ── Mundo e Historia — countries & flags ──────────────────────────
    { id: 'first_country',   cat: 'mundo', icon: '🌎', title: 'First destination', desc: 'Explore your first country',       reward: 6,   target: 1,    progress: () => (STATE.countriesViewed ? STATE.countriesViewed.size : 0) },
    { id: 'half_world',      cat: 'mundo', icon: '🗺️', title: 'Half the world',    desc: 'Explore 10 countries',             reward: 30,  target: 10,   progress: () => (STATE.countriesViewed ? STATE.countriesViewed.size : 0) },
    { id: 'cartographer',    cat: 'mundo', icon: '🧭', title: 'Cartographer',      desc: 'Explore all 21 countries',         reward: 90,  target: 21,   progress: () => (STATE.countriesViewed ? STATE.countriesViewed.size : 0) },
    { id: 'flag_streak_5',   cat: 'mundo', icon: '🚩', title: 'Flag streak',       desc: 'Get 5 flags right in a row',       reward: 20,  target: 5,    progress: () => (STATE.bestFlagStreak || 0) },
    { id: 'mn_flag_streak_10',cat: 'mundo',icon: '🎌', title: 'Flag savant',       desc: 'Get 10 flags right in a row',      reward: 50,  target: 10,   progress: () => (STATE.bestFlagStreak || 0) },
    { id: 'mn_flag_streak_20',cat: 'mundo',icon: '🏴', title: 'Vexillologist',     desc: 'Get 20 flags right in a row',      reward: 110, target: 20,   progress: () => (STATE.bestFlagStreak || 0) },
    { id: 'mn_flags_50',     cat: 'mundo', icon: '🟥', title: 'Flag fan',          desc: 'Get 50 flags right total',         reward: 35,  target: 50,   progress: () => (STATE.flagsCorrect || 0) },
    { id: 'mn_flags_150',    cat: 'mundo', icon: '🟨', title: 'Flag legend',       desc: 'Get 150 flags right total',        reward: 90,  target: 150,  progress: () => (STATE.flagsCorrect || 0) },
    // ── Dedicación — time, streaks, savings ───────────────────────────
    { id: 'time_15',         cat: 'dedication', icon: '⏱️', title: 'Quarter hour', desc: 'Practice 15 minutes total',        reward: 10,  target: 15,   progress: () => STATE.minutesAwarded },
    { id: 'time_60',         cat: 'dedication', icon: '🌅', title: 'A full hour',   desc: 'Practice 60 minutes total',        reward: 40,  target: 60,   progress: () => STATE.minutesAwarded },
    { id: 'dd_time_120',     cat: 'dedication', icon: '🕯️', title: 'Two hours deep',desc: 'Practice 120 minutes total',      reward: 80,  target: 120,  progress: () => STATE.minutesAwarded },
    { id: 'dd_days_3',       cat: 'dedication', icon: '📅', title: 'Habit forming', desc: 'Practice on 3 different days',      reward: 20,  target: 3,    progress: () => (STATE.daysActive ? STATE.daysActive.size : 0) },
    { id: 'dd_days_7',       cat: 'dedication', icon: '🗓️', title: 'Week of work',  desc: 'Practice on 7 different days',      reward: 50,  target: 7,    progress: () => (STATE.daysActive ? STATE.daysActive.size : 0) },
    { id: 'dd_days_30',      cat: 'dedication', icon: '🎖️', title: 'Month of practice',desc: 'Practice on 30 different days', reward: 150, target: 30,   progress: () => (STATE.daysActive ? STATE.daysActive.size : 0) },
    { id: 'dd_lucas_100',    cat: 'dedication', icon: '🪙', title: 'First hundred', desc: 'Earn 100 Lucas all-time',          reward: 15,  target: 100,  progress: () => (STATE.lifetimeCoins || 0) },
    { id: 'dd_lucas_500',    cat: 'dedication', icon: '💰', title: 'Saver',         desc: 'Earn 500 Lucas all-time',          reward: 50,  target: 500,  progress: () => (STATE.lifetimeCoins || 0) },
    { id: 'dd_lucas_2000',   cat: 'dedication', icon: '🏦', title: 'Lucas baron',   desc: 'Earn 2,000 Lucas all-time',        reward: 150, target: 2000, progress: () => (STATE.lifetimeCoins || 0) },
    // ── Maestría — cross-cutting mastery ──────────────────────────────
    { id: 'polyglot',        cat: 'mastery', icon: '🗝️', title: 'Pueblerino',      desc: 'Use all 7 modules at least once',  reward: 100, target: 7,    progress: () => _modulesUsed() },
    { id: 'mt_badges_10',    cat: 'mastery', icon: '🥉', title: 'Collector',       desc: 'Earn 10 badges',                   reward: 30,  target: 10,   progress: () => STATE.achievements.size },
    { id: 'mt_badges_25',    cat: 'mastery', icon: '🥈', title: 'Achiever',        desc: 'Earn 25 badges',                   reward: 80,  target: 25,   progress: () => STATE.achievements.size },
    { id: 'mt_badges_50',    cat: 'mastery', icon: '🥇', title: 'Completionist',   desc: 'Earn 50 badges',                   reward: 250, target: 50,   progress: () => STATE.achievements.size }
  ];

  let badgeFilter = 'all';
  function setBadgeFilter(f) { badgeFilter = f; renderAchievements(); }
  function badgeCurrent(a) { try { return a.progress() || 0; } catch (e) { return 0; } }

  function awardCoins(amount, reason) {
    STATE.coins += amount;
    if (amount > 0) STATE.lifetimeCoins = (STATE.lifetimeCoins || 0) + amount;
    document.getElementById('coinTotal').textContent = STATE.coins;
    const stat = document.getElementById('statCoins');
    if (stat) stat.textContent = STATE.coins;
    const counter = document.getElementById('coinCounter');
    counter.classList.remove('bumping');
    void counter.offsetWidth;
    counter.classList.add('bumping');
    if (reason) showToast(reason, amount);
    checkAchievements();
    updateStats();
    renderShop();
    saveState();
  }

  function showToast(title, amount) {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = 'toast';
    const anon = (STUDENT_NAME === ANON_NAME);
    if (amount > 0) {
      // Anonymous students see a subtle hint that Lucas don't save unless they sign in
      const subline = anon
        ? '<div style="font-size:11px;color:rgba(244,237,224,0.6);margin-top:2px;">Sign in to save your Lucas</div>'
        : '';
      t.innerHTML = `
        <span class="coin-icon medium"></span>
        <div class="toast-text">
          <div class="toast-title">${title}</div>
          <div><span class="toast-amount">+${amount}</span> Lucas</div>
          ${subline}
        </div>
      `;
    } else {
      t.innerHTML = `
        <span class="coin-icon medium"></span>
        <div class="toast-text">
          <div class="toast-title">${title}</div>
          <div style="font-size:13px;color:rgba(244,237,224,0.7)">${STATE.coins > 0 ? 'Total: ' + STATE.coins + ' Lucas' : 'Start practicing'}</div>
        </div>
      `;
    }
    c.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  function checkAchievements() {
    // Loop to a fixpoint so badges that count *other badges* (Collector, Achiever…)
    // can unlock in the same pass as the badge that tipped them over.
    let changed = false, guard = 0;
    do {
      changed = false; guard++;
      ACHIEVEMENTS.forEach(a => {
        if (!STATE.achievements.has(a.id) && badgeCurrent(a) >= a.target) {
          STATE.achievements.add(a.id);
          if (!STATE.achievementsAt) STATE.achievementsAt = {};
          STATE.achievementsAt[a.id] = new Date().toISOString();
          STATE.coins += a.reward;
          STATE.lifetimeCoins = (STATE.lifetimeCoins || 0) + a.reward;
          const ct = document.getElementById('coinTotal');
          if (ct) ct.textContent = STATE.coins;
          const stat = document.getElementById('statCoins');
          if (stat) stat.textContent = STATE.coins;
          showToast('🏅 Badge: ' + a.title, a.reward);
          changed = true;
        }
      });
      if (changed) { renderAchievements(); saveState(); }
    } while (changed && guard < 6);
  }

  function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    const earnedCount = ACHIEVEMENTS.filter(a => STATE.achievements.has(a.id)).length;
    const total = ACHIEVEMENTS.length;
    const pct = total ? Math.round(earnedCount / total * 100) : 0;
    const f = badgeFilter;

    let html = '';
    html += '<div class="badge-summary">'
      + '<span class="big">' + earnedCount + ' / ' + total + '</span>'
      + '<span class="lbl">badges earned</span>'
      + '<div class="badge-progress-track"><div class="badge-progress-fill" style="width:' + pct + '%"></div></div>'
      + '<span class="lbl">' + pct + '%</span></div>';
    html += '<div class="badge-filter">'
      + [['all', 'All'], ['earned', 'Earned'], ['locked', 'In progress']].map(o =>
          '<button class="' + (f === o[0] ? 'active' : '') + '" onclick="setBadgeFilter(\'' + o[0] + '\')">' + o[1] + '</button>').join('')
      + '</div>';

    BADGE_CATS.forEach(cat => {
      const all = ACHIEVEMENTS.filter(a => a.cat === cat.id);
      let list = all;
      if (f === 'earned') list = all.filter(a => STATE.achievements.has(a.id));
      else if (f === 'locked') list = all.filter(a => !STATE.achievements.has(a.id));
      if (!list.length) return;
      const catEarned = all.filter(a => STATE.achievements.has(a.id)).length;
      html += '<div class="badge-cat"><div class="badge-cat-head"><span class="ic">' + cat.icon + '</span>'
        + '<h4>' + cat.name + '</h4><span class="cnt">' + catEarned + ' / ' + all.length + '</span></div>'
        + '<div class="badge-cat-grid">';
      html += list.map(a => {
        const isE = STATE.achievements.has(a.id);
        const cur = Math.min(badgeCurrent(a), a.target);
        const p = a.target ? Math.min(100, Math.round(cur / a.target * 100)) : 0;
        const near = !isE && p >= 60;
        let inner = '<div class="b-icon">' + a.icon + '</div><h5>' + a.title + '</h5><p>' + a.desc + '</p>';
        if (isE) {
          const at = STATE.achievementsAt && STATE.achievementsAt[a.id];
          const d = at ? new Date(at).toLocaleDateString() : '';
          inner += '<div class="b-meta"><span class="b-reward">+' + a.reward + ' Lucas</span>'
            + (d ? '<span class="b-date">' + d + '</span>' : '') + '</div>';
        } else {
          inner += '<div class="b-bar"><div class="b-fill" style="width:' + p + '%"></div></div>'
            + '<div class="b-meta"><span>' + cur + ' / ' + a.target + '</span><span class="b-reward">+' + a.reward + '</span></div>';
        }
        return '<div class="badge ' + (isE ? 'earned' : (near ? 'near' : '')) + '">' + inner + '</div>';
      }).join('');
      html += '</div></div>';
    });
    grid.innerHTML = html;
  }

  function updateStats() {
    const sCards = document.getElementById('statCards');
    const sDrills = document.getElementById('statDrills');
    const sTime = document.getElementById('statTime');
    if (sCards) sCards.textContent = STATE.cardsViewed.size;
    if (sDrills) sDrills.textContent = STATE.drillsCompleted || 0;
    if (sTime) sTime.textContent = STATE.minutesAwarded;
  }

  // Track practice time silently (no passive coin reward — Lucas come from active skill)
  setInterval(() => {
    if (document.hidden) return;
    if (STATE.minutesAwarded >= 120) return;
    STATE.minutesAwarded++;
    saveState();
    checkAchievements();
    updateStats();
  }, 60000);

  
  const decks = window.ELP_DECKS || {};

  let currentDeck = 'cotidiano';
  let cardIdx = 0;

  // Spanish -> English-reader "sounds-like" pronunciation, e.g. "la madrugada"
  // -> "lah mah-droo-GAH-dah". Spanish spelling is phonetic, so this is
  // rule-based: syllabify, find the stressed syllable, map each syllable to
  // English phonemes with the stressed one in CAPS. Helpers stay private.
  const spanishRespell = (function () {
    const STRONG = 'aeoáéó', WEAK_ACC = 'íú', ACCENTED = 'áéíóú';
    const VOWELS = STRONG + 'iuü' + WEAK_ACC;
    const isV = c => !!c && VOWELS.includes(c);
    const softE = c => c === 'e' || c === 'i' || c === 'é' || c === 'í';
    const VMAP = { a: 'ah', á: 'ah', e: 'eh', é: 'eh', i: 'ee', í: 'ee', o: 'oh', ó: 'oh', u: 'oo', ú: 'oo', ü: 'oo' };
    const FALL = { ai: 'eye', ay: 'eye', ei: 'ay', ey: 'ay', oi: 'oy', oy: 'oy', au: 'ow', eu: 'eh-oo' };
    const INSEP = ['ch', 'll', 'rr'];
    const CLUS = ['pr', 'br', 'tr', 'dr', 'cr', 'gr', 'fr', 'pl', 'bl', 'cl', 'gl', 'fl'];
    function syllabify(w) {
      const n = w.length, nuclei = []; let i = 0;
      while (i < n) {
        if (isV(w[i])) {
          let j = i;
          while (j + 1 < n && isV(w[j + 1])) {
            const a = w[j], b = w[j + 1];
            if ((STRONG.includes(a) && STRONG.includes(b)) || WEAK_ACC.includes(a) || WEAK_ACC.includes(b)) break;
            j++;
          }
          nuclei.push({ start: i, end: j }); i = j + 1;
        } else i++;
      }
      if (nuclei.length <= 1) return [w];
      const cuts = [];
      for (let k = 0; k < nuclei.length - 1; k++) {
        const cStart = nuclei[k].end + 1, cEnd = nuclei[k + 1].start;
        const cons = w.slice(cStart, cEnd).toLowerCase();
        let b;
        if (cons.length <= 1) b = cStart;
        else if (cons.length === 2) b = (INSEP.includes(cons) || CLUS.includes(cons)) ? cStart : cStart + 1;
        else { const lt = cons.slice(-2); b = (CLUS.includes(lt) || INSEP.includes(lt)) ? cEnd - 2 : cEnd - 1; }
        cuts.push(b);
      }
      const parts = []; let prev = 0;
      for (const c of cuts) { parts.push(w.slice(prev, c)); prev = c; }
      parts.push(w.slice(prev));
      return parts;
    }
    function stressIdx(sylls, word) {
      for (let k = 0; k < sylls.length; k++) if ([...sylls[k]].some(c => ACCENTED.includes(c))) return k;
      const last = word[word.length - 1];
      if (isV(last) || last === 'n' || last === 's') return Math.max(0, sylls.length - 2);
      return sylls.length - 1;
    }
    function respellSyl(s) {
      const c = s.toLowerCase().split(''); let out = '';
      for (let i = 0; i < c.length; i++) {
        const ch = c[i], next = c[i + 1] || '', next2 = c[i + 2] || '', prev = c[i - 1] || '', nV = isV(next);
        if (isV(ch)) {
          if (FALL[ch + next] && !ACCENTED.includes(next)) { out += FALL[ch + next]; i++; continue; }
          if ((ch === 'i' || ch === 'í') && nV) { out += 'y'; continue; }
          if ((ch === 'u' || ch === 'ú' || ch === 'ü') && nV) { out += 'w'; continue; }
          if (isV(prev) && ch === 'i') { out += 'ee'; continue; }
          if (isV(prev) && ch === 'u') { out += 'oo'; continue; }
          out += VMAP[ch] || ch; continue;
        }
        switch (ch) {
          case 'h': break;
          case 'c': out += softE(next) ? 's' : 'k'; break;
          case 'z': out += 's'; break;
          case 'j': out += 'h'; break;
          case 'ñ': out += 'ny'; break;
          case 'v': out += 'b'; break;
          case 'x': out += (i === 0 ? 's' : 'ks'); break;
          case 'y': out += nV ? 'y' : 'ee'; break;
          case 'r': out += 'r'; break;
          case 'w': out += 'w'; break;
          case 'q': out += 'k'; if (next === 'u') i++; break;
          case 'g': if (softE(next)) { out += 'h'; break; } out += 'g'; if (next === 'u' && softE(next2)) i++; break;
          case 'l': if (next === 'l') { out += 'y'; i++; } else out += 'l'; break;
          default: out += ch;
        }
      }
      return out || s;
    }
    return function (phrase) {
      return String(phrase).trim().split(/\s+/).map(word => {
        const clean = word.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
        if (!clean) return '';
        const sylls = syllabify(clean);
        const st = stressIdx(sylls, clean);
        const r = sylls.map(respellSyl);
        if (r.length > 1) r[st] = r[st].toUpperCase();
        return r.join('-').replace(/hh+/gi, m => m[0]);
      }).filter(Boolean).join(' ');
    };
  })();

  function renderCard() {
    const deck = decks[currentDeck];
    const c = deck[cardIdx];
    document.getElementById('card-front').textContent = c.word;
    const pron = document.getElementById('card-pron');
    if (pron) pron.textContent = spanishRespell(c.word);
    document.getElementById('card-back').textContent = c.back;
    document.getElementById('card-cat').textContent = c.cat;
    document.getElementById('card-example').textContent = c.ex;
    document.getElementById('card-example-en').textContent = c.exEn;
    document.getElementById('card-num').textContent = String(cardIdx + 1).padStart(2, '0') + ' / ' + String(deck.length).padStart(2, '0');
    document.getElementById('card-num-back').textContent = String(cardIdx + 1).padStart(2, '0') + ' / ' + String(deck.length).padStart(2, '0');
    document.getElementById('card-progress').textContent = cardIdx + 1;
    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    fc.setAttribute('aria-pressed', 'false');
  }
  // Flashcards no longer award coins (engagement, not skill)
  // We still track unique cards viewed for the achievement system
  document.getElementById('flashcard').addEventListener('click', function() {
    if (this.classList.contains('flipped')) {
      const cardKey = currentDeck + ':' + cardIdx;
      if (!STATE.cardsViewed.has(cardKey)) {
        STATE.cardsViewed.add(cardKey);
        // Reward only when completing a full deck for first time
        const totalInDeck = decks[currentDeck].length;
        const seenInDeck = Array.from(STATE.cardsViewed).filter(k => k.startsWith(currentDeck + ':')).length;
        if (seenInDeck === totalInDeck) {
          const completedKey = 'deck_' + currentDeck;
          if (!STATE.completedDecks) STATE.completedDecks = new Set();
          if (!STATE.completedDecks.has(completedKey)) {
            STATE.completedDecks.add(completedKey);
            awardCoins(5, 'Completed deck: ' + currentDeck);
          }
        } else {
          saveState();
          checkAchievements();
        }
      }
    }
  });
  function nextCard() { const d = decks[currentDeck]; cardIdx = (cardIdx + 1) % d.length; renderCard(); }
  function prevCard() { const d = decks[currentDeck]; cardIdx = (cardIdx - 1 + d.length) % d.length; renderCard(); }
  function shuffleCards() { decks[currentDeck].sort(() => Math.random() - 0.5); cardIdx = 0; renderCard(); }
  function loadDeck(name, btn) {
    currentDeck = name;
    cardIdx = 0;
    // Scope to the deck buttons only, so the level-filter pills keep their state.
    document.querySelectorAll('#vocabulario .deck-pick .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('deck-name').textContent = btn.textContent;
    renderCard();
  }

  // Show/hide vocab deck buttons by proficiency level (data-level on each pill).
  function filterDecks(level, btn) {
    const bar = document.getElementById('deckLevelFilter');
    if (bar) bar.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');
    document.querySelectorAll('#vocabulario .deck-pick .pill').forEach(p => {
      const lvl = p.getAttribute('data-level');
      p.style.display = (level === 'all' || lvl === level) ? '' : 'none';
    });
  }

  // ============================================================================
  // REPASO — spaced repetition (Leitner boxes)
  // ----------------------------------------------------------------------------
  // Every word lives in a "box" 1–5. Review it: got it → box up (longer wait),
  // missed it → back to box 1 (see it again tomorrow). Due cards (wait elapsed)
  // resurface; mastered cards fade for weeks. State persists in STATE.srs keyed
  // by deck::word, so it works across all decks and survives reloads.
  // ============================================================================
  const SRS_DAY_MS = 86400000;
  // Interval in days before a card in each box becomes due again
  const SRS_INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 9, 5: 21 };
  const SRS_MASTERED_BOX = 5;
  const SRS_SESSION_MAX = 20;      // cards per review session
  const SRS_NEW_PER_SESSION = 10;  // cap brand-new cards introduced at once

  let srsState = null;            // active session
  let srsDir = 'es2en';           // 'es2en' (Spanish prompt) or 'en2es'

  function srsKey(deckKey, word) { return deckKey + '::' + word; }
  function srsCleanEn(back) { return (back || '').replace(/\s*\(.*?\)\s*/g, '').split(/[;,]/)[0].trim() || back; }

  // Gather every card across all decks, tagged with its SRS status
  function srsScan() {
    const now = Date.now();
    const due = [], fresh = [];
    let tracked = 0, mastered = 0;
    Object.keys(decks).forEach(dk => {
      decks[dk].forEach(card => {
        if (!card || !card.word) return;
        const key = srsKey(dk, card.word);
        const st = STATE.srs[key];
        if (!st) { fresh.push({ dk, card, key }); return; }
        tracked++;
        if (st.box >= SRS_MASTERED_BOX) mastered++;
        if (st.due <= now) due.push({ dk, card, key, box: st.box });
      });
    });
    return { due, fresh, tracked, mastered };
  }

  function srsDueCount() { return srsScan().due.length; }

  // Refresh the little "X due" badges on the vocab page CTA
  function updateRepasoBadges() {
    const scan = srsScan();
    const total = scan.due.length + scan.fresh.length;
    const badge = document.getElementById('vocabRepasoBadge');
    if (badge) {
      if (scan.due.length > 0) { badge.textContent = scan.due.length + ' due'; badge.classList.add('show'); }
      else if (total > 0) { badge.textContent = 'start'; badge.classList.add('show'); }
      else badge.classList.remove('show');
    }
  }

  function renderRepaso() {
    const container = document.getElementById('repasoContent');
    if (!container) return;
    updateRepasoBadges();
    const scan = srsScan();
    const newAvail = scan.fresh.length;
    const dirLabel = srsDir === 'es2en' ? 'Spanish → English' : 'English → Spanish';

    container.innerHTML = `
      <p style="font-size:17px;color:var(--ink-soft);line-height:1.5;max-width:620px;margin-bottom:8px;">
        Repaso shows you the words you're about to forget. Rate each one honestly — the ones you miss come back fast, the ones you know fade away for weeks. A few minutes a day beats cramming.
      </p>
      <div class="repaso-hero">
        <div class="repaso-stat"><div class="v due">${scan.due.length}</div><div class="k">Due now</div></div>
        <div class="repaso-stat"><div class="v">${newAvail}</div><div class="k">New to learn</div></div>
        <div class="repaso-stat"><div class="v">${scan.tracked}</div><div class="k">In progress</div></div>
        <div class="repaso-stat"><div class="v">${scan.mastered}</div><div class="k">Mastered</div></div>
      </div>
      <div class="repaso-controls">
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink-soft);">Direction:</span>
        <button class="pill ${srsDir === 'es2en' ? 'active' : ''}" onclick="setSrsDir('es2en')">Spanish → English</button>
        <button class="pill ${srsDir === 'en2es' ? 'active' : ''}" onclick="setSrsDir('en2es')">English → Spanish</button>
      </div>
      ${(scan.due.length + newAvail) === 0
        ? `<div style="text-align:center;padding:30px 0;">
             <div style="font-size:46px;">🎉</div>
             <p style="font-family:'Fraunces',serif;font-style:italic;font-size:18px;margin:8px 0;">¡Nada que repasar ahora!</p>
             <p style="color:var(--ink-soft);font-size:14px;">You're all caught up. Browse the <a href="#/vocabulario">flashcards</a> to add new words, then come back.</p>
           </div>`
        : `<div style="text-align:center;padding:8px 0 24px;">
             <p style="font-family:'Fraunces',serif;font-style:italic;font-size:17px;color:var(--ink);margin-bottom:6px;">
               ${scan.due.length > 0 ? scan.due.length + ' card' + (scan.due.length === 1 ? '' : 's') + ' ready to review' : 'No reviews due — learn some new words?'}
             </p>
             <p style="color:var(--ink-soft);font-size:13px;margin-bottom:20px;">Answering in: <strong>${dirLabel}</strong> · up to ${SRS_SESSION_MAX} cards this round</p>
             <button class="btn primary" style="font-size:16px;padding:14px 28px;" onclick="startRepaso()">Empezar repaso →</button>
           </div>`}
      <p style="font-size:12px;color:var(--ink-soft);margin-top:18px;line-height:1.6;text-align:center;">
        Boxes: 🟥 1 (tomorrow) → 🟧 2 → 🟨 3 → 🟩 4 → ⭐ 5 (mastered, 3 weeks). Miss a card and it drops to box 1.
      </p>`;
  }

  function setSrsDir(dir) { srsDir = dir; renderRepaso(); }

  function startRepaso() {
    const scan = srsScan();
    // Due cards first (oldest due first), then fill with new cards
    const dueSorted = scan.due.sort((a, b) => (STATE.srs[a.key].due) - (STATE.srs[b.key].due));
    const freshShuffled = scan.fresh.sort(() => Math.random() - 0.5).slice(0, SRS_NEW_PER_SESSION);
    let queue = dueSorted.slice(0, SRS_SESSION_MAX);
    if (queue.length < SRS_SESSION_MAX) queue = queue.concat(freshShuffled).slice(0, SRS_SESSION_MAX);
    queue.sort(() => Math.random() - 0.5);
    if (queue.length === 0) { renderRepaso(); return; }
    srsState = { queue, idx: 0, total: queue.length, reviewed: 0, correct: 0, flipped: false };
    renderRepasoCard();
  }

  function renderRepasoCard() {
    const s = srsState;
    const container = document.getElementById('repasoContent');
    if (!s || !container) return;
    if (s.idx >= s.queue.length) { finishRepaso(); return; }
    const item = s.queue[s.idx];
    const card = item.card;
    const st = STATE.srs[item.key];
    const box = st ? st.box : 0;
    const boxDots = box > 0 ? '●'.repeat(box) + '○'.repeat(5 - box) : '○○○○○ new';

    const prompt = srsDir === 'es2en' ? card.word : srsCleanEn(card.back);
    const answer = srsDir === 'es2en' ? card.back : card.word;
    const pct = Math.round((s.idx / s.total) * 100);

    container.innerHTML = `
      <div class="repaso-progress"><div style="width:${pct}%"></div></div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ink-soft);text-align:center;margin-bottom:12px;">
        Card ${s.idx + 1} / ${s.total} · ${MATCH_DECK_LABELS[item.dk] || item.dk}
      </div>
      <div class="repaso-card" id="repasoCard" role="button" tabindex="0" aria-expanded="false" aria-label="Review card — activate to reveal the answer" onclick="flipRepaso()" onkeydown="flipCardKey(event)">
        <div class="rc-tag">${box === 0 ? 'New word' : 'Box ' + box}</div>
        <div class="rc-box">${boxDots}</div>
        <div class="rc-prompt${prompt.length > 16 ? ' small' : ''}">${prompt}</div>
        <div class="rc-sub">${srsDir === 'es2en' ? card.cat || '' : 'Type/think the Spanish'}</div>
        <div class="rc-answer">
          <div class="rc-ans-word">${answer}</div>
          ${card.ex ? `<div class="rc-ex">${card.ex}</div>` : ''}
          ${card.exEn ? `<div class="rc-ex-en">${card.exEn}</div>` : ''}
        </div>
        <div class="rc-hint" id="repasoHint">Tap to reveal</div>
      </div>
      <div class="repaso-grade" id="repasoGrade" style="display:none;">
        <button class="again" onclick="gradeRepaso(0)">❌ Otra vez<br><span style="opacity:.8;font-size:10px;">missed it</span></button>
        <button class="hard" onclick="gradeRepaso(1)">😐 Difícil<br><span style="opacity:.8;font-size:10px;">slow, but got it</span></button>
        <button class="good" onclick="gradeRepaso(2)">✅ Lo sé<br><span style="opacity:.8;font-size:10px;">easy</span></button>
      </div>`;
  }

  // --- Accessible flip-card helpers ---------------------------------------
  // Flip cards are exposed as keyboard-operable buttons. flipCard() toggles the
  // visual flip and keeps aria-pressed in sync; flipCardKey() lets Enter/Space
  // activate a focused card the same way a click would.
  function flipCard(el) {
    const flipped = el.classList.toggle('flipped');
    el.setAttribute('aria-pressed', flipped ? 'true' : 'false');
  }
  function flipCardKey(e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      e.currentTarget.click();
    }
  }

  function flipRepaso() {
    const s = srsState;
    if (!s || s.flipped) return;
    s.flipped = true;
    const card = document.getElementById('repasoCard');
    if (card) { card.classList.add('flipped'); card.setAttribute('aria-expanded', 'true'); }
    const hint = document.getElementById('repasoHint');
    if (hint) hint.textContent = 'How well did you know it?';
    const grade = document.getElementById('repasoGrade');
    if (grade) grade.style.display = 'flex';
  }

  // quality: 0 = again, 1 = hard, 2 = good
  function gradeRepaso(quality) {
    const s = srsState;
    if (!s || !s.flipped) return;
    const item = s.queue[s.idx];
    const now = Date.now();
    const prev = STATE.srs[item.key] || { box: 0, n: 0, ok: 0 };
    let box = prev.box || 0;
    if (quality === 0) box = 1;                       // missed → back to box 1
    else if (quality === 1) box = Math.max(1, box);   // hard → stay (or enter box 1)
    else box = Math.min(SRS_MASTERED_BOX, (box || 0) + 1); // good → promote
    if (quality === 1 && (prev.box || 0) === 0) box = 1;   // new + hard → box 1
    if (quality === 2 && (prev.box || 0) === 0) box = 2;   // new + easy → box 2
    const intervalDays = SRS_INTERVALS[box] || 1;
    STATE.srs[item.key] = {
      box,
      due: now + intervalDays * SRS_DAY_MS,
      n: (prev.n || 0) + 1,
      ok: (prev.ok || 0) + (quality > 0 ? 1 : 0),
      last: now
    };
    s.reviewed++;
    if (quality > 0) s.correct++;
    s.idx++;
    s.flipped = false;
    saveState();
    renderRepasoCard();
  }

  function finishRepaso() {
    const s = srsState;
    const container = document.getElementById('repasoContent');
    if (!s || !container) return;

    // Reward: one small payout per day for doing a real session (pairs with Racha)
    let rewardMsg = '';
    const today = (typeof rachaDayKey === 'function') ? rachaDayKey() : new Date().toDateString();
    if (s.reviewed >= 5 && STATE.srsLastReward !== today) {
      STATE.srsLastReward = today;
      if (typeof awardCoins === 'function') awardCoins(10, 'Repaso · daily review');
      rewardMsg = '+10 Lucas for today\'s review!';
      saveState();
    }
    if (typeof checkAchievements === 'function') checkAchievements();
    updateRepasoBadges();

    const scan = srsScan();
    const acc = s.reviewed ? Math.round((s.correct / s.reviewed) * 100) : 0;

    container.innerHTML = `
      <div style="text-align:center;padding:10px 0;">
        <div style="font-size:54px;">${acc >= 80 ? '🌟' : acc >= 50 ? '🔥' : '🌱'}</div>
        <h3 style="font-family:'DM Serif Display',serif;font-weight:400;font-size:30px;margin:6px 0;">¡Repaso completo!</h3>
        <p style="font-size:16px;color:var(--ink);margin-bottom:4px;">Reviewed <strong>${s.reviewed}</strong> cards · ${s.correct} recalled (${acc}%)</p>
        ${rewardMsg ? `<p style="color:var(--verde);font-weight:600;margin-bottom:8px;">${rewardMsg}</p>` : ''}
        <p style="color:var(--ink-soft);font-size:14px;margin-bottom:20px;">
          ${scan.due.length > 0 ? scan.due.length + ' more due now.' : 'Nothing else due — see you tomorrow.'}
        </p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
          ${scan.due.length > 0 ? `<button class="btn primary" onclick="startRepaso()">Repasar más →</button>` : ''}
          <a href="#/vocabulario" class="btn" style="text-decoration:none;">Browse flashcards</a>
          <a href="#/racha" class="btn" style="text-decoration:none;">La Racha 🔥</a>
        </div>
      </div>`;
    srsState = null;
  }

