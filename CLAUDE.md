# El Pueblo — notes for Claude sessions

## Site structure
- Source lives in `src/` (HTML shell + per-concern JS/CSS modules); `build.mjs`
  assembles `dist/`. Layout is domain-first (nchspanish.com points at the root):
  the ROOT of `dist/` is the **school edition** (Lucas coin system and sign-in
  hidden/neutered, localStorage routed to sessionStorage so no student data
  survives the window closing); the FULL edition (coins + sign-in) is emitted
  at `dist/profe/`; `dist/school/` is a legacy redirect to the root. Never edit
  `dist/` directly; never remove the school transformation or /profe/.
- Deploys to GitHub Pages automatically on push to `main`
  (students: nchspanish.com / profejw.github.io/el-pueblo/ · full site: …/profe/).

## Coverage log (personal tracker — keep maintaining this)
`coverage-log.md` in the repo root tracks every time the user (Profe JW)
subs internally or covers CLD: date, type (Internal sub / CLD coverage),
and who it was for. When the user reports new coverage in any session:
1. Append a row to the Entries table (ISO date + weekday).
2. Update the Running totals table and the "Last updated" line.
3. Commit and merge to main like any other change.
The file is not part of the built site — it exists only in the repo.

## Conventions
- The user's GitHub accounts: repo owner **ProfeJW**; sessions authenticate
  as **Doobiejw** (a collaborator). Both are the same person (Jason).
- Ship flow: branch → PR → wait for the "Build check" workflow → merge.
