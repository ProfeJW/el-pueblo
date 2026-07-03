
  /* Keep the home-page "N games" tile honest: count the real games once all
     game scripts have registered. Unions the JS registry (inline games plus
     the vocab/grammar games injected by the companion files) with any game
     linked statically in the page (e.g. the featured "match" card), so the
     number stays correct no matter how a future game is added. */
  (function () {
    function updateGameCount() {
      var el = document.getElementById('gameCountLabel');
      if (!el) return;
      var ids = {};
      try {
        var GAMES = (window.ELP && window.ELP.GAMES) || {};
        Object.keys(GAMES).forEach(function (id) { ids[id] = true; });
      } catch (e) { /* registry not ready — fall back to static links below */ }
      var links = document.querySelectorAll('a[href^="#/game/"]');
      for (var i = 0; i < links.length; i++) {
        var m = (links[i].getAttribute('href') || '').match(/#\/game\/([a-z0-9-]+)/i);
        if (m) ids[m[1]] = true;
      }
      var n = Object.keys(ids).length;
      if (n > 0) el.textContent = n;
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateGameCount);
    } else {
      updateGameCount();
    }
  })();
