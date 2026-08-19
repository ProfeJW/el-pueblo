/* El Pueblo — daily sub coverage (NCHHS).
   Shown as a card at the top of the home page ONLY while `date` is today
   (America/New_York time); older days auto-hide, so stale coverage never
   lingers. To update: set `date` to today (YYYY-MM-DD) and list the day's
   coverage lines in `entries`. Empty entries = card hidden.
   Example:
     date: '2026-08-19',
     entries: ['Sauers — covered by Williamson (per. 3)', 'CLD — Williamson (per. 5)'],
*/
window.ELP_SUB_COVERAGE = {
  date: '',
  entries: [],
  note: ''
};
