// Post-build validation — runs in CI after `npm run build`. Fast and
// deterministic (no browser): confirms the build actually assembled and that
// key content survived. `npm run build` itself already guarantees the JS parses
// (esbuild throws on a syntax error), so this focuses on wiring + content.
import { readFile, readdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const checks = [];
const ok = (name, pass, detail = '') => checks.push({ name, pass, detail });

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const html = await readFile(join(DIST, 'index.html'), 'utf8');
const bytes = (await stat(join(DIST, 'index.html'))).size;

ok('index.html is a full build (>1MB)', bytes > 1_000_000, (bytes / 1024 | 0) + ' KB');
ok('no unresolved include markers', !/\/\*INC(DIR)?:/.test(html));
ok('all three deck levels present', ['beginner', 'intermediate', 'advanced'].every(l => html.includes('data-level="' + l + '"')));
ok('deck level filter wired', html.includes('deckLevelFilter') && html.includes('filterDecks'));
ok('grammar lessons present (future + por/para)', html.includes('future-simple') && html.includes('por-para'));
ok('SEO metadata present', html.includes('property="og:image"') && html.includes('name="description"'));
ok('skip link present', html.includes('class="skip-link"'));

// Every runtime .js copied into dist/ must parse.
const jsFiles = (await readdir(DIST)).filter(f => f.endsWith('.js'));
ok('runtime JS files copied', jsFiles.length >= 6, jsFiles.join(', '));
for (const f of jsFiles) {
  try {
    await esbuild.transform(await readFile(join(DIST, f), 'utf8'), { loader: 'js' });
    ok('parses: ' + f, true);
  } catch (e) {
    ok('parses: ' + f, false, e.message.split('\n')[0]);
  }
}

let failed = 0;
for (const c of checks) {
  console.log((c.pass ? 'PASS  ' : 'FAIL  ') + c.name + (c.detail ? '   [' + c.detail + ']' : ''));
  if (!c.pass) failed++;
}
console.log('\n' + (failed === 0 ? 'ALL PASS (' + checks.length + ')' : failed + ' FAILED of ' + checks.length));
process.exit(failed === 0 ? 0 : 1);
