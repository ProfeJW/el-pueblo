// ============================================================================
// The school side must leave nothing behind.
//
// The claim under test is not "it gets cleaned up on the way out" — a lab
// machine gets force-quit, crashed and power-cycled, and any exit handler is
// optional. The claim is that the disk is never written at all.
//
// So the assertions read the REAL storage, not the page's. Every check is made
// from a second page on the same origin that never loads the app (/__probe),
// where window.localStorage is the browser's own and no shim is installed.
// Asserting from inside the app would only prove the shim is lying convincingly.
//
//   npm run build && npm run test:privacy
// ============================================================================
import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
// Use CHROME_PATH when set, otherwise let Playwright find the browser it
// installed. Passing an executablePath that does not exist fails outright, so
// only pass one we can see.
const CHROME = process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)
  ? process.env.CHROME_PATH : undefined;
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
                '.png':'image/png', '.svg':'image/svg+xml', '.txt':'text/plain',
                '.xml':'application/xml', '.json':'application/json' };

const errs = [];
const fail = m => errs.push(m);

// ---- a static server, so both editions sit on ONE origin, as they do live ---
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  // A blank same-origin page that never loads the app. Storage assertions are
  // made from here, so they see the browser's own localStorage rather than the
  // in-memory shim the app installs over it.
  if (p === '/__probe') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!doctype html><title>probe</title>');
    return;
  }
  if (p.endsWith('/')) p += 'index.html';
  const file = join(DIST, p);
  if (!file.startsWith(DIST)) { res.writeHead(403).end(); return; }
  try {
    if ((await stat(file)).isDirectory()) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('not found'); }
});
await new Promise(r => server.listen(0, r));
const ORIGIN = 'http://localhost:' + server.address().port;

const browser = await chromium.launch({
  ...(CHROME ? { executablePath: CHROME } : {}),
  args: ['--no-sandbox'],
});

// Reads the browser's own storage for this origin, from a page with no app on it.
async function realStorage(ctx) {
  const p = await ctx.newPage();
  await p.goto(ORIGIN + '/__probe');
  const out = await p.evaluate(async () => {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
    let dbs = [];
    try { dbs = (await indexedDB.databases()).map(d => d.name); } catch {}
    return { keys, dbs };
  });
  await p.close();
  return out;
}

// Puts a previous student's work on the disk, the way older builds did.
async function seedResidue(ctx, extra = {}) {
  const p = await ctx.newPage();
  await p.goto(ORIGIN + '/__probe');
  await p.evaluate(async (extra) => {
    localStorage.setItem('tertulia_responses:__anonymous__:t1',
      JSON.stringify([{ kind:'writing', text:'Mi familia es de Guatemala.' },
                      { kind:'speaking', audioKey:'audio_old_1' }]));
    localStorage.setItem('tertulia_avatar:__anonymous__', JSON.stringify({ hair:'curly' }));
    localStorage.setItem('tertulia_progress_v1:__anonymous__', JSON.stringify({ coins: 40 }));
    localStorage.setItem('ep_adq_awarded:anon', JSON.stringify(['act1:1']));
    for (const [k, v] of Object.entries(extra)) localStorage.setItem(k, v);
    await new Promise((res, rej) => {
      const req = indexedDB.open('tertulia_audio', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('recordings');
      req.onsuccess = () => {
        const db = req.result;
        const tx = db.transaction('recordings', 'readwrite');
        tx.objectStore('recordings').put(new Blob(['pretend audio']), 'audio_old_1');
        tx.oncomplete = () => { db.close(); res(); };
        tx.onerror = () => rej(tx.error);
      };
      req.onerror = () => rej(req.error);
    });
  }, extra);
  await p.close();
}

// Uses the site the way a student in a computer lab would.
async function useTheSite(page) {
  await page.evaluate(() => {
    // things the app persists as you move around
    try { window.setAccent && window.setAccent('green'); } catch {}
    try { window.toggleTheme && window.toggleTheme(); } catch {}
    try { localStorage.setItem('tertulia_mundo_country', 'GT'); } catch {}
    try { localStorage.setItem('tertulia_lessons_view', 'grid'); } catch {}
    // written work, under whatever name the app is using for an anonymous visitor
    try {
      const n = (window.getStudentName && window.getStudentName()) || '__anonymous__';
      localStorage.setItem('tertulia_responses:' + n + ':t1',
        JSON.stringify([{ kind: 'writing', text: 'Me llamo Ana y vivo en Cincinnati.' }]));
      localStorage.setItem('tertulia_avatar:' + n, JSON.stringify({ hair: 'long' }));
    } catch {}
  });
  await page.waitForTimeout(150);
}

// ---------------------------------------------------------------------------
// 1. The school edition writes nothing, even after a lesson's worth of use
// ---------------------------------------------------------------------------
for (const [label, url] of [['school edition', '/school/'], ['main site, not signed in', '/']]) {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const jsErrs = []; page.on('pageerror', e => jsErrs.push(e.message));
  await page.goto(ORIGIN + url, { waitUntil: 'load' });
  await useTheSite(page);

  const during = await realStorage(ctx);
  if (during.keys.length) fail(`${label}: wrote to the disk WHILE running — ${JSON.stringify(during.keys)}`);
  if (during.dbs.includes('tertulia_audio')) fail(`${label}: opened the recordings database on disk`);
  if (jsErrs.length) fail(`${label}: JS errors — ${jsErrs.join('; ')}`);

  // the app must still work — an empty disk because the page crashed proves nothing
  const alive = await page.evaluate(() => ({
    ok: !!document.querySelector('body') && document.body.children.length > 3,
    ephemeral: !!(window.__epSession && window.__epSession.ephemeral),
    readback: localStorage.getItem('tertulia_mundo_country'),
  }));
  if (!alive.ok) fail(`${label}: page did not render`);
  if (!alive.ephemeral) fail(`${label}: session is not marked ephemeral`);
  if (alive.readback !== 'GT') fail(`${label}: storage does not read back within the session — the app would break`);

  // close it the way a student does, then come back
  await page.close();
  const after = await realStorage(ctx);
  if (after.keys.length) fail(`${label}: left keys behind after close — ${JSON.stringify(after.keys)}`);
  if (after.dbs.includes('tertulia_audio')) fail(`${label}: left the recordings database behind`);

  const p2 = await ctx.newPage();
  await p2.goto(ORIGIN + url, { waitUntil: 'load' });
  const carried = await p2.evaluate(() => ({
    resp: localStorage.getItem('tertulia_responses:__anonymous__:t1'),
    avatar: localStorage.getItem('tertulia_avatar:__anonymous__'),
    country: localStorage.getItem('tertulia_mundo_country'),
  }));
  if (carried.resp) fail(`${label}: the next student can read the previous one's writing`);
  if (carried.avatar) fail(`${label}: the previous student's avatar came back`);
  if (carried.country) fail(`${label}: browsing history carried over to the next student`);
  await ctx.close();
}

// ---------------------------------------------------------------------------
// 2. Work older builds already wrote to classroom machines gets cleared
// ---------------------------------------------------------------------------
{
  const ctx = await browser.newContext();
  await seedResidue(ctx);
  const before = await realStorage(ctx);
  if (!before.keys.some(k => k.includes('__anonymous__'))) fail('setup: residue was not seeded');

  const page = await ctx.newPage();
  await page.goto(ORIGIN + '/school/', { waitUntil: 'load' });
  await page.waitForTimeout(600);   // the IndexedDB sweep is async
  await page.close();

  const after = await realStorage(ctx);
  const left = after.keys.filter(k => k.includes('__anonymous__') || k === 'ep_adq_awarded:anon');
  if (left.length) fail(`residue survived the visit — ${JSON.stringify(left)}`);
  if (after.dbs.includes('tertulia_audio')) fail('the old recording is still on disk');
  await ctx.close();
}

// ---------------------------------------------------------------------------
// 3. A named profile is somebody's opt-in, and is not ours to delete
// ---------------------------------------------------------------------------
{
  const ctx = await browser.newContext();
  await seedResidue(ctx, { 'tertulia_progress_v1:Ana': JSON.stringify({ coins: 120 }) });
  const page = await ctx.newPage();
  await page.goto(ORIGIN + '/school/', { waitUntil: 'load' });
  await page.waitForTimeout(600);
  await page.close();

  const after = await realStorage(ctx);
  if (!after.keys.includes('tertulia_progress_v1:Ana'))
    fail("a signed-in student's saved profile was deleted");
  if (after.keys.some(k => k.includes('__anonymous__')))
    fail('anonymous residue survived when a named profile was present');
  await ctx.close();
}

// ---------------------------------------------------------------------------
// 4. Opting in still works — signing in on the main site keeps the work
// ---------------------------------------------------------------------------
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto(ORIGIN + '/', { waitUntil: 'load' });
  await page.evaluate(() => {
    localStorage.setItem('tertulia_mundo_country', 'PE');
    window.__epSession.persist();
    localStorage.setItem('tertulia_student_name', 'Ana');
  });
  const after = await realStorage(ctx);
  if (!after.keys.includes('tertulia_student_name'))
    fail('signing in did not reach the disk — opt-in persistence is broken');
  if (!after.keys.includes('tertulia_mundo_country'))
    fail('work done before signing in was lost instead of carried over');

  // and on the next visit the guard must stand down for them
  const p2 = await ctx.newPage();
  await p2.goto(ORIGIN + '/', { waitUntil: 'load' });
  const eph = await p2.evaluate(() => window.__epSession.ephemeral);
  if (eph) fail('a signed-in student is still being treated as anonymous');
  await ctx.close();
}

// ---------------------------------------------------------------------------
// 5. The school edition ignores a sign-in made on the main site (shared origin)
// ---------------------------------------------------------------------------
{
  const ctx = await browser.newContext();
  const p1 = await ctx.newPage();
  await p1.goto(ORIGIN + '/__probe');
  await p1.evaluate(() => localStorage.setItem('tertulia_student_name', 'Ana'));
  await p1.close();

  const page = await ctx.newPage();
  await page.goto(ORIGIN + '/school/', { waitUntil: 'load' });
  const eph = await page.evaluate(() => window.__epSession.ephemeral);
  if (!eph) fail('school edition trusted a sign-in from the main site and started writing to disk');
  await page.evaluate(() => localStorage.setItem('tertulia_responses:__anonymous__:t9', 'x'));
  const after = await realStorage(ctx);
  if (after.keys.includes('tertulia_responses:__anonymous__:t9'))
    fail('school edition wrote student work to disk');
  await ctx.close();
}

// ---------------------------------------------------------------------------
// 6. Nothing about the student is sent anywhere
//
// Uploads are a hard failure: no beacon, no analytics, no form post may carry a
// student's work off the device. Third-party GETs are a different thing — the
// page pulls fonts and public-domain images from other hosts, and those hosts
// see the school's IP address in their logs. That is a real consideration but
// not a defect, so it is printed as an inventory rather than failed on. If the
// list grows, someone should look at why.
// ---------------------------------------------------------------------------
let egress = [];
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const uploads = [], hosts = new Set();
  page.on('request', r => {
    const u = r.url();
    if (u.startsWith(ORIGIN) || u.startsWith('data:') || u.startsWith('blob:')) return;
    if (['POST', 'PUT', 'PATCH'].includes(r.method())) uploads.push(r.method() + ' ' + u);
    else { try { hosts.add(new URL(u).host); } catch { hosts.add(u); } }
  });
  await page.goto(ORIGIN + '/school/', { waitUntil: 'load' });
  await useTheSite(page);
  await page.waitForTimeout(400);
  if (uploads.length) fail(`school edition sent data off the device — ${JSON.stringify(uploads)}`);
  egress = [...hosts].sort();
  await ctx.close();
}

await browser.close();
server.close();

if (errs.length) { console.error('FAIL\n' + errs.join('\n')); process.exit(1); }
console.log([
  'ALL PASS',
  '  school edition and anonymous main site write nothing to disk, during use or after close',
  '  the next student inherits no writing, no avatar, no recording, no browsing history',
  '  work left by earlier builds is cleared on the next visit, recordings included',
  "  a signed-in student's own saved profile is left alone",
  '  opting in still persists, and carries over what was done before signing in',
  '  the school edition ignores a sign-in made on the main site at the same origin',
  '  nothing is uploaded anywhere',
  '',
  '  hosts the page loads from automatically (they see the school IP, not student work):',
  ...(egress.length ? egress.map(h => '    ' + h) : ['    none']),
].join('\n'));
