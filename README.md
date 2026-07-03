# El Pueblo

A free, self-paced **Spanish curriculum for English speakers** — 82 vocabulary
decks, 52 grammar lessons, a conjugation trainer, games, linguistics units, and
the history of all 21 Spanish-speaking countries. It's a static site (no server,
no framework) that runs entirely in the browser.

Live site: <https://profejw.github.io/el-pueblo/>

---

## How the project is laid out

The site used to be a single ~2.1 MB `index.html` (mostly one giant inline
`<script>`), which bumped GitHub's in-browser file-size limits and was painful to
edit. The **source is now split** and a small build step stitches it back
together.

```
src/
  index.html            The page shell (~224 KB) — markup + <!-- include markers -->
  styles/               The CSS, one file per original <style> block
  scripts/              Small inline scripts (theme, nav, etc.)
  scripts/app/          The main app, split into ~32 modules by feature
                        (00-preamble, spa-router, conjugation, games, …)

vocab-decks.js          Large content data files, edited directly at the repo
historia.js             root (they were already external <script src> files).
adquisicion.js          The build copies these into dist/ as-is (minified).
practice-games.js
grammar-games.js  actfl.js  draw-templates.js

hero-logo.svg  og-image.png  robots.txt  sitemap.xml   Static assets
images/  standards/                                     Static asset folders

build.mjs               Reassembles src/ (+ assets) into dist/, minifying JS/CSS
scripts/split-source.mjs  One-time tool that generated src/ from index.html
```

`index.html` at the repo root is the **legacy single-file build** that the old
GitHub Pages setup serves directly. See *Deploying* for how to retire it.

### The include markers

`src/index.html` stays a valid, browser-openable document. Where a block of CSS
or JS was inlined, it now holds a marker comment that the build replaces:

```html
<style>/*INC:styles/00.css*/</style>          <!-- inline one CSS file -->
<script>/*INC:scripts/00-....js*/</script>     <!-- inline one JS file -->
<script>/*INCDIR:scripts/app*/</script>        <!-- inline every file in a dir, sorted -->
```

---

## Editing

- **App logic / UI / lessons** → edit the relevant module in `src/scripts/app/`
  (e.g. grammar lessons live in `src/scripts/app/*grammar-lessons*.js`).
- **Styles** → `src/styles/`.
- **Page markup** → `src/index.html`.
- **Big content decks** (vocabulary, country history, acquisition activities) →
  the data files at the repo root (`vocab-decks.js`, `historia.js`, …).

You don't need to run the build just to preview a change — open
`src/index.html` directly in a browser and it works, because the markers are
valid comments. Run the build before deploying.

---

## Building & previewing

```bash
npm install        # one time — installs esbuild + html-minifier-terser
npm run build      # assemble + minify src/ and assets into dist/
npm run serve      # serve dist/ at http://localhost:8000
```

Other scripts:

- `npm run build:raw` — assemble without minifying (useful for debugging).
- `npm run split` — regenerate `src/` from the root `index.html` and verify the
  reassembly is byte-for-byte identical. Only needed if you ever edit the legacy
  monolith and want to re-derive the source tree.

Minification never renames identifiers, because the app relies on global
functions being reachable from inline `onclick="…"` handlers.

---

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds `src/` and
publishes `dist/` to GitHub Pages on every push to `main`.

**One-time setup:** in the repo's **Settings → Pages**, set **Source** to
**"GitHub Actions"**. Until you do this, Pages keeps serving the legacy root
`index.html` and the workflow's deploy step has no effect.

Once the Actions deploy is confirmed working, the root `index.html` is no longer
used and can be deleted (the root content `*.js` data files stay — the build
still copies them into `dist/`).
