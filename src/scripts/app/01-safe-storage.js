  /* ============== SAFE STORAGE ============== */
  // localStorage can THROW on access (private/incognito mode, "block site data"
  // browser settings, or file:// in some browsers). An unguarded access during
  // init used to throw uncaught and abort this entire script — which left later
  // declarations (like `let HISTORIA`) permanently uninitialized and silently
  // broke the Historia pages while the rest of the site still navigated.
  // Wrap storage once here so every call site is safe, falling back to an
  // in-memory store when native storage is unavailable. When native storage
  // works normally, it is left completely untouched.
  (function installSafeStorage() {
    var native = null;
    try {
      native = window.localStorage;
      // Probe read AND write — Safari private mode exposes localStorage but
      // throws on setItem, so a read-only probe isn't enough.
      var probe = '__elpueblo_probe__';
      native.setItem(probe, '1');
      native.removeItem(probe);
    } catch (e) {
      native = null;
    }
    if (native) return; // storage is fully functional — do not interfere

    var mem = Object.create(null);
    var safe = {
      getItem: function (k) { k = String(k); return k in mem ? mem[k] : null; },
      setItem: function (k, v) { mem[String(k)] = String(v); },
      removeItem: function (k) { delete mem[String(k)]; },
      key: function (i) { return Object.keys(mem)[i] != null ? Object.keys(mem)[i] : null; },
      clear: function () { mem = Object.create(null); }
    };
    Object.defineProperty(safe, 'length', { get: function () { return Object.keys(mem).length; } });
    try {
      Object.defineProperty(window, 'localStorage', { configurable: true, get: function () { return safe; } });
    } catch (e) {
      try { window.localStorage = safe; } catch (e2) { /* nothing else we can do */ }
    }
  })();

