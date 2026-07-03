  /* ============== SPA ROUTER ============== */
  // Hash-based router. URLs look like spanish-class.html#/verbos
  // Defaults to 'home' on load. Each "page" is a div.page with data-page attribute.

  const PAGE_TITLES = {
    civilizaciones: 'Civilizaciones antiguas',
    home: 'Home',
    avisos: 'From your teacher',
    vocabulario: 'Vocabulary',
    dibujar: 'Draw the word',
    verbos: 'Verb drill',
    lectura: 'Reading library',
    reading: 'Reading',
    escucha: 'Listening',
    escritura: 'Writing topics',
    voces: 'Speaking topics',
    mundo: 'World',
    'mundo-known-for': 'Known For · World',
    'mundo-people': 'People · World',
    'mundo-slang': 'Slang · World',
    'mundo-dishes': 'Dishes · World',
    historia: 'Historia',
    'historia-country': 'Country · Historia',
    'mundo-quiz-flags': 'Flag Quiz · World',
    'mundo-quiz-sites': 'Site Quiz · World',
    'mundo-quiz-people': 'Person Quiz · World',
    'mundo-quiz-historia': 'Historia Trivia · World',
    'mundo-quiz-dishes': 'Dish Quiz · World',
    'mundo-quiz-years': 'Which Came First · World',
    'mundo-quiz-origin': 'Where are they from · World',
    lucas: 'Lucas · Rewards & Shop',
    topic: 'Topic',
    juegos: 'Games',
    racha: 'La Racha',
    repaso: 'Repaso',
    abecedario: 'Abecedario',
    game: 'Game',
    lecciones: 'Grammar lessons',
    linguistica: 'Lingüística',
    adquisicion: 'Adquisición',
    lesson: 'Lesson',
    recursos: 'Student Resources'
  };


  // BULLETPROOF HISTORIA NAVIGATION — used by inline onclick on the home card.
  // This bypasses the global click interceptor / navigate / showPage chain
  // and directly manipulates the page state. If any part of the routing
  // system is broken for any reason, this still works.
  window.__goHistoria = function() {
    try {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      const target = document.querySelector('.page[data-page="historia"]');
      if (target) {
        target.classList.add('active');
        target.querySelectorAll('section').forEach(s => s.classList.add('visible'));
      }
      if (window.location.hash !== '#/historia') {
        window.location.hash = '#/historia';
      }
      if (typeof renderHistoriaHub === 'function') renderHistoriaHub();
      setTimeout(() => { if (typeof populateHistoriaMap === 'function') populateHistoriaMap(); }, 0);
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      document.title = 'Historia · El Pueblo';
    } catch (e) {
      // Last resort — even if all of the above fails, try a simple hash change
      window.location.hash = '#/historia';
    }
    return false;
  };

    function getRouteFromHash() {
    const h = window.location.hash;
    if (!h || h === '#' || h === '#/') return { page: 'home', param: null };
    // Support "#/page" and "#/page/param"
    const m = h.match(/^#\/?([a-z]+)(?:\/(.+))?/);
    if (m && PAGE_TITLES[m[1]]) {
      return { page: m[1], param: m[2] || null };
    }
    return { page: 'home', param: null };
  }

  function navigate(page, param, replace) {
    if (!PAGE_TITLES[page]) page = 'home';
    let newHash = page === 'home' ? '#/' : '#/' + page;
    if (param) newHash += '/' + param;
    if (window.location.hash !== newHash) {
      if (replace) {
        history.replaceState(null, '', newHash);
      } else {
        window.location.hash = newHash;
        return; // hashchange handler will call showPage
      }
    }
    showPage(page, param);
  }

  function showPage(page, param) {
    // Mundo subpath shortcut: #/mundo/known-for → page = 'mundo-known-for'
    // For nested paths like #/mundo/quiz/flags, convert slashes to hyphens:
    //   param = 'quiz/flags' → subpage = 'mundo-quiz-flags'
    if (page === 'mundo' && param) {
      const subpage = 'mundo-' + param.replace(/\//g, '-');
      page = subpage;
      param = null;
    }
    // Historia subpath: #/historia/peru → page = 'historia-country', param = 'peru'
    if (page === 'historia' && param) {
      page = 'historia-country';
      // param stays as the country code
    }
    // Backwards-compat: redirect old #/mundo/historia → #/historia
    if (page === 'mundo-historia') {
      page = 'historia';
      param = null;
    }
    // Backwards-compat: old separate logros / tienda → unified lucas
    if (page === 'logros' || page === 'tienda') {
      page = 'lucas';
      param = null;
    }
    // Hide all, show one
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.querySelector('.page[data-page="' + page + '"]');
    if (target) {
      target.classList.add('active');
      // Force all sections inside the active page to be visible.
      // The IntersectionObserver-based reveal system breaks on SPA navigation
      // (sections become display:block but never trigger the observer), so we
      // proactively mark them visible here.
      target.querySelectorAll('section').forEach(s => s.classList.add('visible'));
    }
    // Update nav highlight
    document.querySelectorAll('.nav-dropdown a').forEach(a => {
      const href = a.getAttribute('href') || '';
      const linkPage = href.replace(/^#\/?/, '').split('/')[0] || 'home';
      a.classList.toggle('active', linkPage === page);
    });
    // Update page title
    document.title = (PAGE_TITLES[page] || 'El Pueblo') + ' · El Pueblo';
    // Scroll to top of page area
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    // Page-specific lazy initialization
    if (page === 'verbos' && typeof newDrill === 'function' && drillItems && drillItems.length === 0) newDrill();
    if (page === 'escucha' && typeof renderDictation === 'function') renderDictation();
    if (page === 'mundo' && typeof renderCountries === 'function') { renderCountries(); }
    if (page === 'mundo-known-for' && typeof renderKnownFor === 'function') renderKnownFor();
    if (page === 'mundo-people' && typeof renderPeople === 'function') renderPeople();
    if (page === 'mundo-slang' && typeof renderSlang === 'function') renderSlang();
    if (page === 'mundo-dishes' && typeof renderDishes === 'function') renderDishes();
    if (page === 'mundo-arte' && typeof renderArte === 'function') renderArte();
    if (page === 'recursos' && typeof window.__initTranslator === 'function') window.__initTranslator();
    if (page === 'historia') {
      if (typeof renderHistoriaHub === 'function') renderHistoriaHub();
      // Populate the map view (it's the default) — needs DOM elements ready
      setTimeout(() => { if (typeof populateHistoriaMap === 'function') populateHistoriaMap(); }, 0);
    }
    if (page === 'historia-country') loadHistoriaModule().then(() => { if (typeof renderHistoriaCountry === 'function') renderHistoriaCountry(param); }).catch(() => {});
    if (page === 'civilizaciones' && typeof renderCivilizaciones === 'function') setTimeout(renderCivilizaciones, 0);
    if (page === 'mundo-quiz-flags' && typeof newFlagQuiz === 'function') newFlagQuiz();
    if (page === 'mundo-quiz-sites' && typeof newSiteQuiz === 'function') newSiteQuiz();
    if (page === 'mundo-quiz-people' && typeof newPersonQuiz === 'function') newPersonQuiz();
    if (page === 'mundo-quiz-historia') loadHistoriaModule().then(() => { if (typeof newTriviaQuiz === 'function') newTriviaQuiz(); }).catch(() => { const el = document.getElementById('triviaQuestion'); if (el) el.innerHTML = '<div style="font-style: italic; opacity: 0.7;">Questions unavailable right now. <a href="#/historia" style="color: var(--ocre);">Back to Historia</a>.</div>'; });
    if (page === 'mundo-quiz-dishes' && typeof newDishQuiz === 'function') newDishQuiz();
    if (page === 'mundo-quiz-years') loadHistoriaModule().then(() => { if (typeof newYearQuiz === 'function') newYearQuiz(); }).catch(() => { const el = document.getElementById('yearQuizOptions'); if (el) el.innerHTML = '<div style="font-style: italic; opacity: 0.7; padding: 16px;">Events unavailable right now. <a href="#/historia" style="color: var(--rojo);">Back to Historia</a>.</div>'; });
    if (page === 'mundo-quiz-arte' && typeof newArtQuiz === 'function') newArtQuiz();
    if (page === 'mundo-quiz-map' && typeof newCountryMapQuiz === 'function') newCountryMapQuiz();
    if (page === 'mundo-quiz-capitales' && typeof newCapitalMapQuiz === 'function') newCapitalMapQuiz();
    if (page === 'mundo-quiz-origin' && typeof newOriginQuiz === 'function') newOriginQuiz();
    if (page === 'lucas') {
      if (typeof renderShop === 'function') renderShop();
      if (typeof renderAchievements === 'function') { renderAchievements(); updateStats(); }
    }
    if (page === 'escritura' && typeof renderTopicList === 'function') renderTopicList('writing');
    if (page === 'voces' && typeof renderTopicList === 'function') renderTopicList('speaking');
    if (page === 'topic' && typeof renderTopicDetail === 'function') renderTopicDetail(param);
    if (page === 'lectura' && typeof renderReadingLibrary === 'function') renderReadingLibrary();
    if (page === 'reading' && typeof renderReadingDetail === 'function') renderReadingDetail(param);
    if (page === 'juegos' && typeof renderGamesHub === 'function') renderGamesHub();
    if (page === 'vocabulario' && typeof updateRepasoBadges === 'function') updateRepasoBadges();
    if (page === 'dibujar' && typeof window.initDrawActivity === 'function') window.initDrawActivity();
    if (page === 'racha' && typeof renderRacha === 'function') renderRacha();
    if (page === 'repaso' && typeof renderRepaso === 'function') renderRepaso();
    if (page === 'abecedario' && typeof renderAbecedario === 'function') renderAbecedario();
    if (page === 'game' && typeof startGame === 'function') startGame(param);
    if (page === 'lecciones' && typeof renderLessonsList === 'function') renderLessonsList();
    if (page === 'linguistica' && typeof renderLinguistica === 'function') renderLinguistica();
    if (page === 'adquisicion' && typeof renderAdquisicion === 'function') renderAdquisicion();
    if (page === 'lesson' && typeof renderLessonDetail === 'function') renderLessonDetail(param);
    // Move keyboard focus to the new section's heading on navigation so screen-reader
    // and keyboard users land in the fresh content instead of being stranded at the
    // top of this single-page document. Skipped on first load (no prior navigation).
    if (target && window.__elpNavigated) {
      const heading = target.querySelector('h1, h2');
      const focusEl = heading || target;
      focusEl.setAttribute('tabindex', '-1');
      try { focusEl.focus({ preventScroll: true }); } catch (e) { focusEl.focus(); }
    }
    window.__elpNavigated = true;
  }

  window.addEventListener('hashchange', () => {
    const r = getRouteFromHash();
    showPage(r.page, r.param);
  });

  // Intercept clicks on internal hash links and route them
  document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === '#' || href.startsWith('#/') || /^#[a-z]+$/.test(href)) {
      e.preventDefault();
      const cleaned = href.replace(/^#\/?/, '');
      const parts = cleaned.split('/');
      const page = parts[0] || 'home';
      // Preserve the FULL remainder as the param so nested paths like
      // `mundo/quiz/flags` survive (param = "quiz/flags", not just "quiz").
      // showPage uses this to resolve subpages like `mundo-quiz-flags`.
      const param = parts.length > 1 ? parts.slice(1).join('/') : null;
      navigate(page, param);
    }
  });


