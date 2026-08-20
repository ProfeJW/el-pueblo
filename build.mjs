// El Pueblo build — assembles the split source in src/ back into a single
// deployable site in dist/, minifying JS and CSS.
//
// WHY THIS EXISTS
// The site used to be one ~2.1 MB index.html — mostly a single 1.7 MB inline
// <script>. That bumped GitHub's in-browser file-size limits and made the file
// painful to edit. The source now lives split under src/ (an HTML shell plus
// per-concern CSS/JS modules); this script stitches them back together.
//
// HOW THE SHELL REFERS TO ITS PARTS
//   <style>/*INC:styles/NN.css*/</style>        -> inline one CSS file
//   <script>/*INC:scripts/NN-name.js*/</script> -> inline one JS file
//   <script>/*INCDIR:scripts/app*/</script>     -> inline every JS file in a
//                                                  directory, sorted by name
// The markers are valid CSS/JS comments, so src/index.html stays a valid,
// browser-openable document even before building.
//
// CORRECTNESS NOTES
// - JS is minified with esbuild WITHOUT renaming identifiers. The app relies on
//   global functions being reachable from inline onclick="..." handlers, so
//   minifyIdentifiers must stay false or those handlers break.
// - HTML whitespace collapse is conservative and inline style/JS/CSS attribute
//   values are left untouched, so the theme's [style*="background: var(--ink)"]
//   substring selectors keep matching.

import { readFile, readdir, writeFile, mkdir, rm, cp, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join, extname } from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';
import { minify as minifyHtml } from 'html-minifier-terser';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');

// Runtime assets that must ship alongside index.html. These are copied to dist/;
// the .js ones are minified on the way.
const RUNTIME_JS = [
  'vocab-decks.js', 'draw-templates.js', 'practice-games.js',
  'grammar-games.js', 'actfl.js', 'adquisicion.js', 'historia.js',
];
const STATIC_ASSETS = ['hero-logo.svg', 'og-image.png', 'robots.txt', 'sitemap.xml'];
const STATIC_DIRS = ['images', 'standards'];

const INC_RE = /\/\*INC:([^*]+?)\*\//g;
const INCDIR_RE = /\/\*INCDIR:([^*]+?)\*\//g;

async function minifyJS(code) {
  // Whitespace + syntax only. NEVER rename identifiers (see header note).
  const out = await esbuild.transform(code, {
    loader: 'js',
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: false,
    legalComments: 'none',
  });
  return out.code;
}

async function minifyCSS(code) {
  const out = await esbuild.transform(code, { loader: 'css', minify: true });
  return out.code;
}

async function concatDir(relDir) {
  const dir = join(SRC, relDir);
  const files = (await readdir(dir)).filter(f => f.endsWith('.js')).sort();
  const parts = [];
  for (const f of files) parts.push(await readFile(join(dir, f), 'utf8'));
  // Files are exact contiguous slices of the original script — join with nothing.
  return parts.join('');
}

// Reassemble the full HTML from src/. minify=false reproduces the original
// document byte-for-byte (used to prove the split is lossless).
export async function assemble({ minify }) {
  let html = await readFile(join(SRC, 'index.html'), 'utf8');

  // Directory includes (the chunked app script) first.
  for (const m of [...html.matchAll(INCDIR_RE)]) {
    let body = await concatDir(m[1]);
    if (minify) body = await minifyJS(body);
    html = html.replace(m[0], () => body);
  }

  // Single-file includes.
  for (const m of [...html.matchAll(INC_RE)]) {
    const rel = m[1];
    let body = await readFile(join(SRC, rel), 'utf8');
    if (minify) body = extname(rel) === '.css' ? await minifyCSS(body) : await minifyJS(body);
    html = html.replace(m[0], () => body);
  }

  if (minify) {
    html = await minifyHtml(html, {
      collapseWhitespace: true,
      conservativeCollapse: true, // keep a single space — don't crush inline text
      removeComments: true,
      minifyJS: false,            // already minified; don't rename globals
      minifyCSS: false,           // protect [style*="..."] substring selectors
      keepClosingSlash: true,
      caseSensitive: true,
    });
  }
  return html;
}

async function copyAsset(name, { minify }) {
  const from = join(ROOT, name);
  if (!existsSync(from)) { console.warn('  (skip missing asset', name + ')'); return; }
  const to = join(DIST, name);
  if (minify && name.endsWith('.js')) {
    await writeFile(to, await minifyJS(await readFile(from, 'utf8')));
  } else {
    await cp(from, to);
  }
}


// ---- School edition ----------------------------------------------------
// A second copy of the site at dist/school/ for classroom use: identical
// content, but the Lucas coin system and the sign-in flow are hidden and
// neutered. The main site at dist/ is untouched.
const SCHOOL_OVERRIDE = `
<style id="school-mode">
  #signInBtn, #signOutBtn, #coinCounter, #nameChip, #toastContainer,
  #lucasExplainer, a[href="#/lucas"],
  .page[data-page="lucas"] { display: none !important; }
</style>
<script id="school-mode-js">
(function(){
  var noop = function(){};
  window.awardCoins = noop;
  window.showToast = noop;
  window.openSignInModal = noop;
  window.signOut = noop;
  function offLucas(){ if ((location.hash||'').indexOf('#/lucas') === 0) location.hash = '#/'; }
  window.addEventListener('hashchange', offLucas); offLucas();
  // Scrub coin-reward phrasing from visible text (text nodes only; listeners untouched).
  function scrub(){
    var rx = [
      [/\\s*[·•]\\s*\\+?\\d+\\s*Lucas\\b/g, ''],
      [/Earn Lucas while you learn/gi, ''],
      [/Get it right to earn Lucas\\.?\\s*/gi, ''],
      [/Earn Lucas based on difficulty: harder texts pay more\\.?/gi, ''],
      [/Earn Lucas based on accuracy —/gi, 'You get'],
      [/to track progress and earn Lucas/gi, '']
    ];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n; while ((n = w.nextNode())) {
      var t = n.nodeValue; if (!t || t.indexOf('ucas') === -1) continue;
      rx.forEach(function(p){ t = t.replace(p[0], p[1]); });
      if (t !== n.nodeValue) n.nodeValue = t;
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scrub);
  else scrub();
  setTimeout(scrub, 800); // catch late-rendered pages
})();
</script>
`;


// School edition, part 2: no persistence between visits. Route every
// localStorage access to sessionStorage, which the browser clears when the
// window closes. In-class scores/timers keep working (and survive an
// accidental reload of the same tab), but nothing about a student outlives
// the window. Must run BEFORE the app scripts, so it is injected in <head>.
const SCHOOL_EPHEMERAL = `<script id="school-ephemeral">(function(){try{var ss=window.sessionStorage;ss.setItem('__probe__','1');ss.removeItem('__probe__');Object.defineProperty(window,'localStorage',{configurable:true,get:function(){return ss;}});}catch(e){/* blocked storage: app's own safe-storage falls back to in-memory, which is even more ephemeral */}})();</script>`;

// (school assembly now happens inside build() — root IS the school edition)


async function build() {
  const minify = !process.argv.includes('--no-minify');
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  const html = await assemble({ minify });

  // Layout (domain-first, nchspanish.com points at the site root):
  //   dist/            -> SCHOOL edition (no Lucas, no sign-in, session-only storage)
  //   dist/profe/      -> FULL edition (Lucas coins + sign-in) for the teacher
  //   dist/school/     -> legacy redirect to / (old shared links keep working)
  const schoolHtml = html.replace('</body>', SCHOOL_OVERRIDE + '</body>');
  const charsetRe = /(<meta charset=[^>]*>)/i;
  const schoolFinal = charsetRe.test(schoolHtml)
    ? schoolHtml.replace(charsetRe, '$1' + SCHOOL_EPHEMERAL)
    : schoolHtml.replace('<head>', '<head>' + SCHOOL_EPHEMERAL);
  await writeFile(join(DIST, 'index.html'), schoolFinal);

  for (const js of RUNTIME_JS) await copyAsset(js, { minify });
  for (const a of STATIC_ASSETS) await copyAsset(a, { minify: false });
  for (const d of STATIC_DIRS) {
    if (existsSync(join(ROOT, d))) await cp(join(ROOT, d), join(DIST, d), { recursive: true });
  }

  // Full edition at /profe/ with its own copies of the relative-path assets.
  const PROFE = join(DIST, 'profe');
  await mkdir(PROFE, { recursive: true });
  await writeFile(join(PROFE, 'index.html'), html);
  for (const f of [...RUNTIME_JS, ...STATIC_ASSETS]) {
    if (existsSync(join(DIST, f))) await cp(join(DIST, f), join(PROFE, f));
  }
  for (const d of STATIC_DIRS) {
    if (existsSync(join(DIST, d))) await cp(join(DIST, d), join(PROFE, d), { recursive: true });
  }

  // Legacy /school/ links redirect to the new root (hash preserved).
  const SCHOOL = join(DIST, 'school');
  await mkdir(SCHOOL, { recursive: true });
  await writeFile(join(SCHOOL, 'index.html'),
    '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>El Pueblo</title>' +
    '<script>location.replace("../" + location.hash);</script>' +
    '<meta http-equiv="refresh" content="0; url=../"></head>' +
    '<body><p>Moved — <a href="../">continue to El Pueblo</a>.</p></body></html>');

  const outBytes = (await stat(join(DIST, 'index.html'))).size;
  console.log('Built dist/ (SCHOOL edition at root)', (outBytes / 1024).toFixed(0) + ' KB' + (minify ? ' (minified)' : ' (raw)') + ' · full edition at /profe/ · /school/ redirects to root');
}

// Run build unless imported for assemble().
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  build().catch(e => { console.error(e); process.exit(1); });
}
