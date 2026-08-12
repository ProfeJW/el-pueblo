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
```

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

Minification never renames identifiers, because the app relies on global
functions being reachable from inline `onclick="…"` handlers.

---

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds `src/` and
publishes `dist/` to GitHub Pages on every push to `main`. The repo's Pages
**Source** is set to **"GitHub Actions"**, so every push to `main` rebuilds and
redeploys automatically — just edit `src/` (or the root data files) and push.

---

## The school edition leaves no trace

`npm run build` produces two sites:

- `dist/` — the full site, with the Lucas coin system and the opt-in sign-in.
- `dist/school/` — the classroom edition. Same lessons, but no sign-in and no
  Lucas at all.

Because the school edition is used on shared machines by students who never
identify themselves, it holds one hard rule:

> **Nothing a student does on the school edition is ever written to the machine.**

Not "wiped on the way out" — never written. An exit handler is optional in a
computer lab: a crash, a force-quit, a pulled power cable or a lab-management
tool killing the browser all skip it, and whatever was written stays for the
next student. So `src/scripts/00-private-session.js` runs before anything else
on the page and swaps `localStorage` for an in-memory store, and recordings are
kept in memory instead of IndexedDB. Close the tab and it is gone, because it
was never anywhere else.

Two deliberate exceptions, both on the **main** site only: a student who signs
in has asked for their work to be kept, and teacher mode (`?teacher`) keeps its
own device notes. The school edition takes neither — it is flagged by the build
(`window.__EP_SCHOOL_EDITION`) rather than inferring from "is anyone signed in",
because `dist/` and `dist/school/` share one origin on GitHub Pages and a
profile made on the main site is visible from the school page.

The guard also clears work that **earlier builds already wrote** to classroom
machines — anonymous responses, avatars, progress and the recordings they point
at — on the next visit. A named profile is somebody's deliberate opt-in and is
left alone.

### Keeping it true

```bash
npm run build && npm run test:privacy
```

`tests/no-trace.mjs` drives a real browser and reads the browser's own storage
from a page that never loads the app, so it cannot be fooled by the in-memory
shim reporting what it likes. It checks that nothing is written during use or
after close, that the next visitor inherits nothing, that old residue is
cleared, that a named profile survives, that opting in still persists, and that
nothing is uploaded anywhere. CI runs it on every pull request.

**If you add a feature that stores something, run it.** One `localStorage.setItem`
in a new game is all it takes to break the promise, and nothing else will tell
you.

### What this does not cover

- Third-party hosts the page loads from — currently Google Fonts and Wikimedia
  images — see the school's IP address in their logs. No student work leaves the
  device (the test fails on any upload), but the requests themselves happen.
  Self-hosting the fonts and images would remove that.
- A student who deliberately signs in **on the main site** from a school machine
  leaves a profile there, by design. Point classroom devices at `/school/`,
  where sign-in does not exist.
- Two students sharing one tab without closing it are in the same session, so
  the second sees the first's work. Closing the tab is the boundary.
