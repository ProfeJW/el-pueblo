# El Pueblo — notes for Claude sessions

## Site structure
- Source lives in `src/` (HTML shell + per-concern JS/CSS modules); `build.mjs`
  assembles `dist/` and also emits `dist/school/` — the **school edition**
  (same site with the Lucas coin system and sign-in hidden/neutered, and
  localStorage routed to sessionStorage so no student data survives the
  window closing). Never edit `dist/` directly; never remove the school build.
- Deploys to GitHub Pages automatically on push to `main`
  (main: https://profejw.github.io/el-pueblo/ · school: https://profejw.github.io/el-pueblo/school/).

## Coverage log (personal tracker — keep maintaining this)
`coverage-log.md` in the repo root tracks every time the user (Profe JW)
subs internally or covers CLD: date, type (Internal sub / CLD coverage),
and who it was for. When the user reports new coverage in any session:
1. Append a row to the Entries table (ISO date + weekday).
2. Update the Running totals table and the "Last updated" line.
3. Commit and merge to main like any other change.
The file is not part of the built site — it exists only in the repo.

## Daily sub coverage (site feature — keep maintaining this)
`sub-coverage.js` in the repo root feeds the "📋 Sub coverage" card at the top
of the home page. The card shows ONLY while `date` is today (America/New_York);
otherwise it hides itself, so stale days never linger. When the user gives the
day's coverage ("today's coverage: ..."):
1. Set `date` to today (YYYY-MM-DD) and put one string per line of coverage in
   `entries` (e.g. 'Sauers — covered by Williamson (per. 3)').
2. Commit → PR → merge so it deploys (both editions show it).
Also: if the coverage involves the user (Williamson) subbing or covering CLD,
append it to `coverage-log.md` too (see above).

## Conventions
- The user's GitHub accounts: repo owner **ProfeJW**; sessions authenticate
  as **Doobiejw** (a collaborator). Both are the same person (Jason).
- Ship flow: branch → PR → wait for the "Build check" workflow → merge.
