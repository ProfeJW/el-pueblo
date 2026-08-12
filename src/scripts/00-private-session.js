
  // ==========================================================================
  // PRIVATE SESSION — the school side leaves nothing behind
  // --------------------------------------------------------------------------
  // Signing in is opt-in. Everyone who has NOT signed in is treated as a
  // classroom visitor on a shared machine, and for them this site must be
  // incapable of leaving a trace: no essay, no recording, no avatar, no score,
  // no theme choice on the disk when they walk away.
  //
  // The weak version of this is "wipe it on the way out". That is not enough in
  // a computer lab — a crash, a force-quit, a yanked power cable or a browser
  // killed by a lab-management tool all skip the exit handler, and whatever was
  // written stays for the next student to find. So nothing is written in the
  // first place: localStorage is swapped for an in-memory store that dies with
  // the tab, and recordings stay in memory instead of IndexedDB (see
  // saveAudioBlob). There is no window in which student work exists on disk.
  //
  // Two escapes, both deliberate:
  //   - a student who signs in has asked for their work to be kept, so
  //     persist() hands the session back to real storage; and
  //   - teacher mode (?teacher) keeps its own device notes.
  //
  // This also cleans up after earlier versions of the site, which did write
  // anonymous work to disk. Those files are already sitting on classroom
  // machines, so a fix that only changes what happens from now on would leave
  // every existing trace exactly where it is.
  // ==========================================================================
  (function privateSession() {
    var STUDENT_KEY = 'tertulia_student_name';
    var ANON = '__anonymous__';

    // Real storage, or null when the browser refuses it (private mode, blocked
    // site data, file://). Probe a write too — Safari private mode hands over a
    // localStorage object that throws on setItem.
    var native = null;
    try {
      native = window.localStorage;
      var probe = '__ep_probe__';
      native.setItem(probe, '1');
      native.removeItem(probe);
    } catch (e) {
      native = null;
    }

    var signedIn = false;
    if (native) {
      try {
        var n = native.getItem(STUDENT_KEY);
        signedIn = !!(n && n.trim() && n.trim() !== ANON);
      } catch (e) { signedIn = false; }
    }
    var teacher = false;
    try { teacher = window.location.search.indexOf('teacher') !== -1; } catch (e) {}

    // The school edition (dist/school/) has no sign-in and no Lucas at all, so
    // it is never anything but a shared classroom machine. It opts out of every
    // escape below. This is a flag from the build rather than an inference,
    // because dist/ and dist/school/ share one origin: a profile created on the
    // main site is visible from the school page, and "is anyone signed in?"
    // would quietly switch this guard off for a whole class.
    var schoolEdition = false;
    try { schoolEdition = window.__EP_SCHOOL_EDITION === true; } catch (e) {}

    // A signed-in student, or a teacher on their own device, asked for their
    // things to be kept. Leave storage completely alone for them.
    if (!schoolEdition && (signedIn || teacher)) {
      window.__epSession = { ephemeral: false, persist: function () {}, wipe: function () {} };
      return;
    }

    // ---- 1. Clear what earlier versions left on this machine ---------------
    // Only anonymous work: keys nobody chose to create. A named profile on this
    // device belongs to a student who opted in, and is not ours to delete.
    var namedProfiles = 0;
    var anonAudioKeys = [];
    if (native) {
      var doomed = [];
      try {
        for (var i = 0; i < native.length; i++) {
          var k = native.key(i);
          if (k == null) continue;
          if (k.indexOf('tertulia_progress_v1:') === 0) {
            if (k.slice('tertulia_progress_v1:'.length) === ANON) doomed.push(k);
            else namedProfiles++;
            continue;
          }
          if (k.indexOf('tertulia_responses:' + ANON + ':') === 0 ||
              k === 'tertulia_avatar:' + ANON ||
              k === 'ep_adq_awarded:anon' ||
              k === 'ep_adq_awarded:' + ANON) {
            doomed.push(k);
          }
        }
        // Recordings live in IndexedDB and are referenced by key from the
        // response entries. Read the references before dropping the entries,
        // or the blobs are orphaned on disk with no way left to find them.
        for (var d = 0; d < doomed.length; d++) {
          if (doomed[d].indexOf('tertulia_responses:') !== 0) continue;
          try {
            var list = JSON.parse(native.getItem(doomed[d]) || '[]');
            for (var r = 0; r < list.length; r++) {
              if (list[r] && list[r].audioKey) anonAudioKeys.push(list[r].audioKey);
            }
          } catch (e) { /* unreadable entry - the removeItem below still clears it */ }
        }
        for (var x = 0; x < doomed.length; x++) native.removeItem(doomed[x]);
      } catch (e) { /* storage went away mid-sweep; the shim below still applies */ }
    }

    // Drop the anonymous recordings. If nobody on this device has a saved
    // profile then no recording here belongs to anyone, so take the whole
    // database - that also collects blobs orphaned by earlier versions.
    try {
      if (window.indexedDB) {
        if (namedProfiles === 0) {
          indexedDB.deleteDatabase('tertulia_audio');
        } else if (anonAudioKeys.length) {
          var req = indexedDB.open('tertulia_audio', 1);
          req.onsuccess = function () {
            var db = req.result;
            try {
              if (!db.objectStoreNames.contains('recordings')) { db.close(); return; }
              var tx = db.transaction('recordings', 'readwrite');
              var store = tx.objectStore('recordings');
              for (var a = 0; a < anonAudioKeys.length; a++) store.delete(anonAudioKeys[a]);
              tx.oncomplete = function () { db.close(); };
            } catch (e) { try { db.close(); } catch (e2) {} }
          };
          // No onupgradeneeded handler: if the database does not exist there is
          // nothing to delete, and opening it would create an empty one.
          req.onupgradeneeded = function () { try { req.transaction.abort(); } catch (e) {} };
        }
      }
    } catch (e) { /* IndexedDB unavailable - nothing was stored there either */ }

    // ---- 2. Nothing written from here on ----------------------------------
    var mem = Object.create(null);
    var shim = {
      getItem: function (k) { k = String(k); return k in mem ? mem[k] : null; },
      setItem: function (k, v) { mem[String(k)] = String(v); },
      removeItem: function (k) { delete mem[String(k)]; },
      key: function (i) { var ks = Object.keys(mem); return i < ks.length ? ks[i] : null; },
      clear: function () { mem = Object.create(null); }
    };
    Object.defineProperty(shim, 'length', { get: function () { return Object.keys(mem).length; } });

    function install() {
      try {
        Object.defineProperty(window, 'localStorage', {
          configurable: true, get: function () { return shim; }
        });
        return true;
      } catch (e) {
        try { window.localStorage = shim; return true; } catch (e2) { return false; }
      }
    }
    install();

    window.__epSession = {
      ephemeral: true,

      // The student signed in, which is them asking for their work to be kept.
      // Hand the session back to real storage and carry over what they have
      // done so far, so signing in does not cost them the last twenty minutes.
      persist: function () {
        if (schoolEdition) return false;    // no way back to the disk from here
        if (!native) return false;          // browser is blocking storage anyway
        // Point the property back at the real store. Not `delete` — in Chromium
        // localStorage is an OWN property of window, not something inherited, so
        // deleting it removes it outright and every later call throws.
        try {
          Object.defineProperty(window, 'localStorage', {
            configurable: true, get: function () { return native; }
          });
        } catch (e) {
          try { window.localStorage = native; } catch (e2) { return false; }
        }
        try {
          for (var k in mem) native.setItem(k, mem[k]);
        } catch (e) { /* quota or a late block - the session still works */ }
        this.ephemeral = false;
        try { window.__epAudioPersist && window.__epAudioPersist(); } catch (e) {}
        return true;
      },

      // Belt and braces for the ordinary case where the tab is simply closed.
      // Everything above already means there is nothing on disk to remove; this
      // clears the in-memory copy and re-checks the database.
      wipe: function () {
        mem = Object.create(null);
        try {
          if (window.indexedDB && namedProfiles === 0) indexedDB.deleteDatabase('tertulia_audio');
        } catch (e) {}
      }
    };

    // pagehide fires on close, navigation and the iOS back-forward cache, where
    // unload does not. visibilitychange catches a tab swallowed by the OS.
    try {
      window.addEventListener('pagehide', function () {
        if (window.__epSession.ephemeral) window.__epSession.wipe();
      });
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden' && window.__epSession.ephemeral) {
          try {
            if (window.indexedDB && namedProfiles === 0) indexedDB.deleteDatabase('tertulia_audio');
          } catch (e) {}
        }
      });
    } catch (e) {}
  })();
