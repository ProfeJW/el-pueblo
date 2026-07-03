  /* ============== COIN / DOBLÓN SYSTEM ============== */
  // Persistent storage: each student's progress saves locally in their browser.
  // Progress is keyed by student name so multiple students can share one device.

  const STORAGE_KEY = 'tertulia_progress_v1';
  const STUDENT_KEY = 'tertulia_student_name';
  const ANON_NAME = '__anonymous__'; // internal marker — never displayed to user

  // Returns the stored student name, or null if not signed in.
  // Does NOT prompt — sign-in is opt-in via the header button.
  function getStudentName() {
    const name = localStorage.getItem(STUDENT_KEY);
    return (name && name.trim()) ? name.trim().slice(0, 30) : null;
  }

  // Returns true if a real student has signed in (not just anonymous)
  function isSignedIn() {
    return getStudentName() !== null;
  }

  // Mutable so we can swap between anonymous and signed-in mid-session
  let STUDENT_NAME = getStudentName() || ANON_NAME;

  function defaultState() {
    return {
      coins: 0,
      cardsViewed: new Set(),
      srs: {},
      srsLastReward: null,
      verbsCorrect: 0,
      verbsAttempted: 0,
      quizCorrect: 0,
      listenedClips: new Set(),
      recordingsCount: 0,
      qualityRecordings: 0,
      wordsWritten: 0,
      poemsCompleted: 0,
      startTime: Date.now(),
      minutesAwarded: 0,
      streakConj: 0,
      bestStreak: 0,
      rachaStreak: 0,
      rachaBest: 0,
      rachaLastDay: null,
      achievements: new Set(),
      achievementsAt: {},
      lifetimeCoins: 0,
      daysActive: new Set(),
      lastPromptWords: 0,
      currentPromptCompleted: false,
      countriesViewed: new Set(),
      flagsCorrect: 0,
      flagStreak: 0,
      bestFlagStreak: 0,
      drillsCompleted: 0,
      perfectDrills: 0,
      readingPerfect: false,
      completedDecks: new Set(),
      unlockedItems: new Set(),
      redemptions: [],
      redeemedCodes: [],
      completedReadings: {}
    };
  }

  function loadState() {
    // Anonymous mode: start fresh in memory, nothing persisted
    if (STUDENT_NAME === ANON_NAME) return defaultState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY + ':' + STUDENT_NAME);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      const s = defaultState();
      // Restore primitives
      s.coins = parsed.coins || 0;
      s.verbsCorrect = parsed.verbsCorrect || 0;
      s.verbsAttempted = parsed.verbsAttempted || 0;
      s.quizCorrect = parsed.quizCorrect || 0;
      s.recordingsCount = parsed.recordingsCount || 0;
      s.qualityRecordings = parsed.qualityRecordings || 0;
      s.wordsWritten = parsed.wordsWritten || 0;
      s.poemsCompleted = parsed.poemsCompleted || 0;
      s.minutesAwarded = parsed.minutesAwarded || 0;
      s.bestStreak = parsed.bestStreak || 0;
      s.rachaStreak = parsed.rachaStreak || 0;
      s.rachaBest = parsed.rachaBest || 0;
      s.rachaLastDay = parsed.rachaLastDay || null;
      s.flagsCorrect = parsed.flagsCorrect || 0;
      s.bestFlagStreak = parsed.bestFlagStreak || 0;
      s.drillsCompleted = parsed.drillsCompleted || 0;
      s.perfectDrills = parsed.perfectDrills || 0;
      s.readingPerfect = parsed.readingPerfect === true;
      // Restore drill best scores per tense
      ['presente','preterito','imperfecto','futuro','condicional','subjuntivo','perfecto','mixed'].forEach(t => {
        const k = 'drillBest_' + t;
        if (parsed[k] != null) s[k] = parsed[k];
      });
      // Restore Sets from arrays
      if (Array.isArray(parsed.cardsViewed)) s.cardsViewed = new Set(parsed.cardsViewed);
      if (parsed.srs && typeof parsed.srs === 'object') s.srs = parsed.srs;
      s.srsLastReward = parsed.srsLastReward || null;
      if (Array.isArray(parsed.listenedClips)) s.listenedClips = new Set(parsed.listenedClips);
      if (Array.isArray(parsed.achievements)) s.achievements = new Set(parsed.achievements);
      if (parsed.achievementsAt && typeof parsed.achievementsAt === 'object') s.achievementsAt = parsed.achievementsAt;
      // Lifetime Lucas: for students from before this field existed, seed from their
      // current balance so the "earn N all-time" badges aren't unfairly zeroed.
      s.lifetimeCoins = parsed.lifetimeCoins != null ? parsed.lifetimeCoins : (parsed.coins || 0);
      if (Array.isArray(parsed.daysActive)) s.daysActive = new Set(parsed.daysActive);
      if (Array.isArray(parsed.countriesViewed)) s.countriesViewed = new Set(parsed.countriesViewed);
      if (Array.isArray(parsed.completedDecks)) s.completedDecks = new Set(parsed.completedDecks);
      if (Array.isArray(parsed.unlockedItems)) s.unlockedItems = new Set(parsed.unlockedItems);
      if (Array.isArray(parsed.redemptions)) s.redemptions = parsed.redemptions;
      if (Array.isArray(parsed.redeemedCodes)) s.redeemedCodes = parsed.redeemedCodes;
      if (parsed.completedReadings && typeof parsed.completedReadings === 'object') s.completedReadings = parsed.completedReadings;
      if (parsed.completedLessons && typeof parsed.completedLessons === 'object') s.completedLessons = parsed.completedLessons;
      // Game best scores
      ['game_best_days', 'game_best_dates', 'game_best_numbers-small', 'game_best_numbers-mid', 'game_best_numbers-big', 'game_best_time', 'game_best_weather', 'game_best_tu-usted', 'game_best_adjectives', 'game_best_reflexives', 'game_best_object-pronouns', 'game_best_plurals', 'game_best_vocab-type', 'game_best_vocab-mc'].forEach(k => {
        if (parsed[k] != null) s[k] = parsed[k];
      });
      // Match game best times + listening progress
      if (parsed.matchBest && typeof parsed.matchBest === 'object') s.matchBest = parsed.matchBest;
      if (parsed.completedDictation && typeof parsed.completedDictation === 'object') s.completedDictation = parsed.completedDictation;
      if (parsed.completedComprehension && typeof parsed.completedComprehension === 'object') s.completedComprehension = parsed.completedComprehension;
      if (parsed.compAnswers && typeof parsed.compAnswers === 'object') s.compAnswers = parsed.compAnswers;
      if (parsed.completedFillBlank && typeof parsed.completedFillBlank === 'object') s.completedFillBlank = parsed.completedFillBlank;
      return s;
    } catch (e) {
      console.warn('Failed to load saved progress, starting fresh:', e);
      return defaultState();
    }
  }

  function saveState() {
    // Anonymous mode: progress lives only in memory. Don't persist.
    if (STUDENT_NAME === ANON_NAME) return;
    try {
      const toSave = {
        coins: STATE.coins,
        cardsViewed: Array.from(STATE.cardsViewed),
        srs: STATE.srs || {},
        srsLastReward: STATE.srsLastReward || null,
        verbsCorrect: STATE.verbsCorrect,
        verbsAttempted: STATE.verbsAttempted,
        quizCorrect: STATE.quizCorrect,
        listenedClips: Array.from(STATE.listenedClips),
        recordingsCount: STATE.recordingsCount,
        qualityRecordings: STATE.qualityRecordings,
        wordsWritten: STATE.wordsWritten,
        poemsCompleted: STATE.poemsCompleted,
        minutesAwarded: STATE.minutesAwarded,
        bestStreak: STATE.bestStreak,
        rachaStreak: STATE.rachaStreak || 0,
        rachaBest: STATE.rachaBest || 0,
        rachaLastDay: STATE.rachaLastDay || null,
        achievements: Array.from(STATE.achievements),
        achievementsAt: STATE.achievementsAt || {},
        lifetimeCoins: STATE.lifetimeCoins || 0,
        daysActive: Array.from(STATE.daysActive || []),
        countriesViewed: Array.from(STATE.countriesViewed || []),
        flagsCorrect: STATE.flagsCorrect || 0,
        bestFlagStreak: STATE.bestFlagStreak || 0,
        drillsCompleted: STATE.drillsCompleted || 0,
        perfectDrills: STATE.perfectDrills || 0,
        readingPerfect: STATE.readingPerfect === true,
        completedDecks: Array.from(STATE.completedDecks || []),
        unlockedItems: Array.from(STATE.unlockedItems || []),
        redemptions: STATE.redemptions || [],
        redeemedCodes: STATE.redeemedCodes || [],
        completedReadings: STATE.completedReadings || {},
        completedLessons: STATE.completedLessons || {},
        game_best_days: STATE.game_best_days || 0,
        game_best_dates: STATE.game_best_dates || 0,
        'game_best_numbers-small': STATE['game_best_numbers-small'] || 0,
        'game_best_numbers-mid': STATE['game_best_numbers-mid'] || 0,
        'game_best_numbers-big': STATE['game_best_numbers-big'] || 0,
        game_best_time: STATE.game_best_time || 0,
        game_best_weather: STATE.game_best_weather || 0,
        'game_best_tu-usted': STATE['game_best_tu-usted'] || 0,
        game_best_adjectives: STATE.game_best_adjectives || 0,
        game_best_reflexives: STATE.game_best_reflexives || 0,
        'game_best_object-pronouns': STATE['game_best_object-pronouns'] || 0,
        game_best_plurals: STATE.game_best_plurals || 0,
        'game_best_vocab-type': STATE['game_best_vocab-type'] || 0,
        'game_best_vocab-mc': STATE['game_best_vocab-mc'] || 0,
        matchBest: STATE.matchBest || {},
        completedDictation: STATE.completedDictation || {},
        completedComprehension: STATE.completedComprehension || {},
        compAnswers: STATE.compAnswers || {},
        completedFillBlank: STATE.completedFillBlank || {},
        drillBest_presente: STATE.drillBest_presente,
        drillBest_preterito: STATE.drillBest_preterito,
        drillBest_imperfecto: STATE.drillBest_imperfecto,
        drillBest_futuro: STATE.drillBest_futuro,
        drillBest_condicional: STATE.drillBest_condicional,
        drillBest_perfecto: STATE.drillBest_perfecto,
        drillBest_subjuntivo: STATE.drillBest_subjuntivo,
        drillBest_pluperfectsubj: STATE.drillBest_pluperfectsubj,
        drillBest_mixed: STATE.drillBest_mixed,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY + ':' + STUDENT_NAME, JSON.stringify(toSave));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }

  function resetProgress() {
    if (confirm('Are you sure you want to erase all your progress? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY + ':' + STUDENT_NAME);
      location.reload();
    }
  }

  function switchStudent() {
    if (confirm('Switch to a different user? (Your current progress is still saved.)')) {
      localStorage.removeItem(STUDENT_KEY);
      location.reload();
    }
  }

