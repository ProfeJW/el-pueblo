// One-time extractor: turns the monolithic index.html into the split source
// tree under src/ that build.mjs reassembles. Safe to re-run: it regenerates
// src/ from index.html and verifies the reassembly is byte-identical.
//
// Run:  node scripts/split-source.mjs
//
// Strategy
// - Every inline <style>/<script> body is moved to its own file; the body in
//   the shell is replaced with an /*INC:...*/ (or /*INCDIR:...*/) marker.
// - <script src="..."> tags are left untouched.
// - The one large app <script> is chunked at its top-level /* ==== NAME ==== */
//   section banners into src/scripts/app/NN-name.js. Chunks are exact,
//   contiguous slices of the original, so concatenation reproduces it exactly.

import { readFile, writeFile, mkdir, rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { assemble } from '../build.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'block';

function chunkAppScript(body) {
  // Boundaries at the start of every top-level section-banner line.
  const bannerRe = /^[ \t]*\/\* =+ .* =+ \*\/[ \t]*$/gm;
  const bounds = [];
  let m;
  while ((m = bannerRe.exec(body))) bounds.push({ idx: m.index, name: m[0].replace(/[^A-Za-z0-9 ]/g, '').trim() });
  const chunks = [];
  // Preamble before the first banner.
  const first = bounds.length ? bounds[0].idx : body.length;
  if (first > 0) chunks.push({ name: 'preamble', text: body.slice(0, first) });
  for (let i = 0; i < bounds.length; i++) {
    const start = bounds[i].idx;
    const end = i + 1 < bounds.length ? bounds[i + 1].idx : body.length;
    chunks.push({ name: bounds[i].name, text: body.slice(start, end) });
  }
  return chunks;
}

async function main() {
  const original = await readFile(join(ROOT, 'index.html'), 'utf8');

  await rm(SRC, { recursive: true, force: true });
  await mkdir(join(SRC, 'styles'), { recursive: true });
  await mkdir(join(SRC, 'scripts'), { recursive: true });
  await mkdir(join(SRC, 'scripts', 'app'), { recursive: true });

  let styleN = 0, scriptN = 0;
  const writes = [];

  const tagRe = /(<(script|style)\b([^>]*)>)([\s\S]*?)(<\/\2>)/g;
  let shell = '';
  let last = 0;
  let m;
  while ((m = tagRe.exec(original))) {
    const [full, open, name, attrs, body, close] = m;
    shell += original.slice(last, m.index);
    last = m.index + full.length;

    const isScript = name === 'script';
    if (isScript && /\bsrc=/.test(attrs)) { shell += full; continue; } // external, leave as-is

    if (name === 'style') {
      const rel = `styles/${String(styleN++).padStart(2, '0')}.css`;
      writes.push([join(SRC, rel), body]);
      shell += `${open}/*INC:${rel}*/${close}`;
    } else if (body.length > 100000) {
      // The big app script: chunk it into a directory.
      const chunks = chunkAppScript(body);
      let i = 0;
      for (const c of chunks) {
        const fn = `${String(i++).padStart(2, '0')}-${slug(c.name)}.js`;
        writes.push([join(SRC, 'scripts', 'app', fn), c.text]);
      }
      shell += `${open}/*INCDIR:scripts/app*/${close}`;
      console.log(`  app script -> ${chunks.length} chunks in scripts/app/`);
    } else {
      const hint = (body.match(/\/\/\s*(.+)|\/\*+\s*(.+?)\s*\*\//) || [])[1] || '';
      const rel = `scripts/${String(scriptN++).padStart(2, '0')}-${slug(hint) || 'inline'}.js`;
      writes.push([join(SRC, rel), body]);
      shell += `${open}/*INC:${rel}*/${close}`;
    }
  }
  shell += original.slice(last);

  for (const [p, c] of writes) await writeFile(p, c);
  await writeFile(join(SRC, 'index.html'), shell);
  console.log(`  wrote src/index.html (${(Buffer.byteLength(shell) / 1024).toFixed(0)} KB) + ${writes.length} part files`);

  // Prove it: raw reassembly must equal the original byte-for-byte.
  const rebuilt = await assemble({ minify: false });
  if (rebuilt !== original) {
    // Find first divergence for debugging.
    let i = 0; while (i < rebuilt.length && i < original.length && rebuilt[i] === original[i]) i++;
    console.error('BYTE-EXACT CHECK FAILED at offset', i);
    console.error('orig :', JSON.stringify(original.slice(i, i + 80)));
    console.error('built:', JSON.stringify(rebuilt.slice(i, i + 80)));
    process.exit(1);
  }
  console.log('  ✓ byte-exact reassembly verified — split is lossless');
}

main().catch(e => { console.error(e); process.exit(1); });
