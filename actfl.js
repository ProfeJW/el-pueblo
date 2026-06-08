/* ==========================================================================
 * El Pueblo — ACTFL standards badges (companion file)
 * --------------------------------------------------------------------------
 * Injects a small "★ Standards" badge under each activity page's header,
 * showing which ACTFL World-Readiness elements the activity builds:
 *   - Modes of communication: Interpretive · Interpersonal · Presentational
 *   - The 5 C's: Communication · Cultures · Connections · Comparisons · Communities
 *
 * Data-driven (this one file) so we don't hand-edit a badge into every page.
 * The full explanation + official links live on the Resources page.
 * ======================================================================== */
(function () {
  'use strict';

  // Short tooltips so a hover/long-press explains each tag.
  var MODE_INFO = {
    'Interpretive':   'Interpretive mode — understanding spoken/written Spanish (reading, listening).',
    'Interpersonal':  'Interpersonal mode — two-way, spontaneous communication.',
    'Presentational': 'Presentational mode — producing Spanish for an audience (writing, speaking).'
  };
  var C_INFO = {
    'Communication': 'Communication — using Spanish to share and understand meaning.',
    'Cultures':      'Cultures — practices, products, and perspectives of Spanish-speaking peoples.',
    'Connections':   'Connections — using Spanish to learn about other subjects (history, geography…).',
    'Comparisons':   'Comparisons — comparing Spanish and English to understand language itself.',
    'Communities':   'Communities — using Spanish beyond the classroom.'
  };

  // page (data-page value) -> standards it primarily builds
  var MAP = {
    vocabulario: { modes: ['Interpretive'], cs: ['Communication', 'Comparisons'], note: 'Word-building that fuels every mode.' },
    verbos:      { modes: ['Presentational'], cs: ['Comparisons'], note: 'Grammar patterns; compare Spanish & English structure.' },
    lecciones:   { modes: ['Interpretive'], cs: ['Communication', 'Comparisons'], note: 'Targeted grammar & usage.' },
    juegos:      { modes: ['Interpretive', 'Presentational'], cs: ['Communication', 'Comparisons'], note: 'Quick recall practice across skills.' },
    lectura:     { modes: ['Interpretive'], cs: ['Communication', 'Cultures'], note: 'Reading — interpret texts, meet authors & cultures.' },
    escucha:     { modes: ['Interpretive'], cs: ['Communication'], note: 'Listening — interpret spoken Spanish.' },
    escritura:   { modes: ['Presentational'], cs: ['Communication'], note: 'Writing — present ideas to a reader.' },
    voces:       { modes: ['Presentational', 'Interpersonal'], cs: ['Communication'], note: 'Speaking — present, and build toward conversation.' },
    mundo:       { modes: ['Interpretive'], cs: ['Cultures', 'Connections', 'Comparisons'], note: 'Countries & cultures of the Spanish-speaking world.' },
    historia:    { modes: ['Interpretive'], cs: ['Cultures', 'Connections'], note: 'History & heritage across the Spanish-speaking world.' }
  };

  function pill(text, tip, kind) {
    var bg = kind === 'mode' ? 'var(--ink)' : 'var(--card-bg)';
    var fg = kind === 'mode' ? 'var(--paper)' : 'var(--ink)';
    var bd = kind === 'mode' ? 'var(--ink)' : 'var(--line)';
    var s = document.createElement('span');
    s.textContent = text;
    if (tip) s.title = tip;
    s.style.cssText =
      'display:inline-block;font-family:\'JetBrains Mono\',monospace;font-size:10px;' +
      'letter-spacing:0.06em;text-transform:uppercase;padding:2px 9px;border-radius:999px;' +
      'background:' + bg + ';color:' + fg + ';border:1px solid ' + bd + ';white-space:nowrap;';
    return s;
  }

  function buildBadge(spec) {
    var wrap = document.createElement('div');
    wrap.className = 'actfl-badge';
    wrap.style.cssText =
      'display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin:2px 0 22px;';

    var label = document.createElement('a');
    label.href = '#/recursos';
    label.textContent = '★ Standards';
    label.title = 'ACTFL World-Readiness Standards — tap for details & official links';
    label.style.cssText =
      'font-family:\'JetBrains Mono\',monospace;font-size:10px;letter-spacing:0.12em;' +
      'text-transform:uppercase;color:var(--ink-soft);text-decoration:none;margin-right:2px;';
    wrap.appendChild(label);

    (spec.modes || []).forEach(function (m) { wrap.appendChild(pill(m, MODE_INFO[m], 'mode')); });
    (spec.cs || []).forEach(function (c) { wrap.appendChild(pill(c, C_INFO[c], 'c')); });

    if (spec.note) {
      var note = document.createElement('span');
      note.textContent = spec.note;
      note.style.cssText =
        'font-family:\'Fraunces\',serif;font-style:italic;font-size:12px;color:var(--ink-soft);' +
        'margin-left:4px;';
      wrap.appendChild(note);
    }
    return wrap;
  }

  function inject() {
    Object.keys(MAP).forEach(function (page) {
      var pageEl = document.querySelector('.page[data-page="' + page + '"]');
      if (!pageEl) return;
      var header = pageEl.querySelector('.section-header');
      if (!header || header.parentNode.querySelector('.actfl-badge')) return;
      header.parentNode.insertBefore(buildBadge(MAP[page]), header.nextSibling);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
