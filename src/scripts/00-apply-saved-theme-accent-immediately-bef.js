
  // Apply saved theme + accent IMMEDIATELY before body renders to avoid a flash.
  // Lives in the head, outside any IIFE, so it runs first.
  (function applyThemeEarly() {
    try {
      var saved = localStorage.getItem('elPueblo_theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      // An explicit saved choice always wins; with no saved choice, follow the
      // operating system's colour-scheme preference.
      if (saved === 'cosmic' || (!saved && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'cosmic');
      }
      var accent = localStorage.getItem('elPueblo_accent');
      if (accent && ['pink','green','orange','yellow'].indexOf(accent) !== -1) {
        document.documentElement.setAttribute('data-accent', accent);
      }
    } catch (e) { /* localStorage might be blocked in some contexts */ }
  })();
