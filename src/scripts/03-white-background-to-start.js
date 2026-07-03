
(function () {
  var canvas, ctx, wrap, flash, inited = false;
  var W = 1000, H = 640;
  var tool = 'pen', color = '#1f1a14', size = 6;
  var drawing = false, startX = 0, startY = 0, snapshot = null, markerPts = null;
  var undoStack = [], redoStack = [];
  var deck = 'cotidiano', revealed = true, awarded = {};

  var PALETTE = ['#1f1a14', '#e23d4b', '#f2a33d', '#f4c20d', '#2e9e5b', '#2f7fd6', '#7e57c2', '#ffffff'];

  function $(id) { return document.getElementById(id); }

  window.initDrawActivity = function () {
    canvas = $('drawCanvas');
    if (!canvas) return;
    if (inited) return;
    inited = true;
    ctx = canvas.getContext('2d');
    wrap = $('drawCanvasWrap');
    flash = $('drawFlash');

    // White background to start
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);
    pushUndo();

    buildColors();
    buildDeckSelect();
    newWord();
    bindToolbar();
    bindCanvas();

    document.addEventListener('paste', function (e) {
      if (!isActive()) return;
      var items = (e.clipboardData && e.clipboardData.items) || [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].type && items[i].type.indexOf('image') === 0) {
          var blob = items[i].getAsFile();
          if (blob) { e.preventDefault(); drawImageBlob(blob); return; }
        }
      }
    });
  };

  function isActive() {
    var p = document.querySelector('.page[data-page="dibujar"]');
    return p && p.classList.contains('active');
  }

  /* ---------- word card ---------- */
  function buildDeckSelect() {
    var sel = $('drawDeckSelect');
    if (!sel) return;
    var pills = document.querySelectorAll('#vocabulario .pill');
    var seen = {};
    var opts = [];
    pills.forEach(function (b) {
      var oc = b.getAttribute('onclick') || '';
      var m = oc.match(/loadDeck\(\s*'([^']+)'/);
      if (m && !seen[m[1]] && window.ELP_DECKS && window.ELP_DECKS[m[1]]) {
        seen[m[1]] = 1;
        opts.push({ key: m[1], label: b.textContent.trim() });
      }
    });
    if (!opts.length && window.ELP_DECKS) {
      Object.keys(window.ELP_DECKS).forEach(function (k) { opts.push({ key: k, label: k }); });
    }
    opts.sort(function (a, b) { return a.label.localeCompare(b.label); });
    sel.innerHTML = opts.map(function (o) {
      return '<option value="' + o.key + '"' + (o.key === deck ? ' selected' : '') + '>' + o.label + '</option>';
    }).join('');
    if (!seen[deck] && opts.length) deck = opts[0].key;
    sel.value = deck;
    sel.addEventListener('change', function () { deck = sel.value; newWord(); });
  }

  function newWord() {
    var arr = window.ELP_DECKS && window.ELP_DECKS[deck];
    if (!arr || !arr.length) return;
    var w = arr[Math.floor(Math.random() * arr.length)];
    $('drawWord').textContent = w.word;
    $('drawCat').textContent = w.cat || '';
    $('drawMeaning').textContent = w.back || '';
    applyReveal();
  }

  function applyReveal() {
    var m = $('drawMeaning'), btn = $('drawRevealBtn');
    if (revealed) { m.classList.remove('hidden'); btn.textContent = 'Hide meaning'; }
    else { m.classList.add('hidden'); btn.textContent = 'Show meaning'; }
  }

  /* ---------- toolbar ---------- */
  function buildColors() {
    var box = $('drawColors');
    box.innerHTML = '';
    PALETTE.forEach(function (c, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'dt-swatch' + (i === 0 ? ' active' : '');
      b.style.background = c;
      b.setAttribute('data-color', c);
      b.title = c;
      b.addEventListener('click', function () { setColor(c, b); });
      box.appendChild(b);
    });
  }

  function setColor(c, swatchEl) {
    color = c;
    document.querySelectorAll('#drawColors .dt-swatch').forEach(function (s) { s.classList.remove('active'); });
    if (swatchEl) swatchEl.classList.add('active');
    var ci = $('drawColorInput'); if (ci) ci.value = c.length === 7 ? c : ci.value;
  }

  function setTool(t, el) {
    tool = t;
    document.querySelectorAll('#drawToolbar .dt-tool').forEach(function (b) { b.classList.remove('active'); });
    if (el) el.classList.add('active');
    canvas.style.cursor = (t === 'text') ? 'text' : 'crosshair';
  }

  function bindToolbar() {
    document.querySelectorAll('#drawToolbar .dt-tool').forEach(function (b) {
      b.addEventListener('click', function () { setTool(b.getAttribute('data-tool'), b); });
    });
    $('drawColorInput').addEventListener('input', function (e) {
      setColor(e.target.value, null);
      document.querySelectorAll('#drawColors .dt-swatch').forEach(function (s) { s.classList.remove('active'); });
    });
    $('drawSize').addEventListener('input', function (e) { size = parseInt(e.target.value, 10) || 1; });
    $('drawUndo').addEventListener('click', undo);
    $('drawRedo').addEventListener('click', redo);
    $('drawClear').addEventListener('click', function () {
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, W, H); pushUndo(); flashMsg('Cleared');
    });
    $('drawCopy').addEventListener('click', copyToClipboard);
    $('drawPaste').addEventListener('click', pasteFromClipboard);
    $('drawDownload').addEventListener('click', download);
    $('drawDone').addEventListener('click', markDone);
    $('drawRevealBtn').addEventListener('click', function () { revealed = !revealed; applyReveal(); });
    $('drawNewWordBtn').addEventListener('click', newWord);
    var tpls = $('drawTemplates');
    if (tpls) tpls.querySelectorAll('[data-tpl]').forEach(function (b) {
      b.addEventListener('click', function () { loadTemplate(b.getAttribute('data-tpl')); });
    });
  }

  /* ---------- coloring templates ---------- */
  function loadTemplate(key) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);
    if (key === 'blank') { pushUndo(); flashMsg('Blank canvas'); return; }
    var lib = window.ELP_DRAW_TEMPLATES || {};
    var svg = lib[key];
    if (!svg) { pushUndo(); flashMsg('Template unavailable'); return; }
    var blob = new Blob([svg], { type: 'image/svg+xml' });
    var url = URL.createObjectURL(blob);
    var img = new Image();
    img.onload = function () {
      var pad = 26;
      var iw = img.naturalWidth || img.width || 200;
      var ih = img.naturalHeight || img.height || 360;
      var ratio = iw / ih;
      var dh = H - pad * 2, dw = dh * ratio;
      if (dw > W - pad * 2) { dw = W - pad * 2; dh = dw / ratio; }
      ctx.globalAlpha = 1;
      ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
      URL.revokeObjectURL(url);
      pushUndo();
      flashMsg('Loaded — now color it in!');
    };
    img.onerror = function () { URL.revokeObjectURL(url); pushUndo(); flashMsg('Could not load template'); };
    img.src = url;
  }

  /* ---------- canvas drawing ---------- */
  function getPos(e) {
    var r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (W / r.width), y: (e.clientY - r.top) * (H / r.height) };
  }

  function bindCanvas() {
    canvas.addEventListener('pointerdown', function (e) {
      var p = getPos(e);
      if (tool === 'text') { startText(p, e); return; }
      drawing = true;
      startX = p.x; startY = p.y;
      snapshot = ctx.getImageData(0, 0, W, H);
      markerPts = [p];
      if (canvas.setPointerCapture) { try { canvas.setPointerCapture(e.pointerId); } catch (x) {} }
      if (tool === 'pen' || tool === 'eraser') {
        ctx.globalAlpha = 1;
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.lineWidth = size;
        ctx.strokeStyle = (tool === 'eraser') ? '#ffffff' : color;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + 0.01, p.y + 0.01);
        ctx.stroke();
      }
    });
    canvas.addEventListener('pointermove', function (e) {
      if (!drawing) return;
      var p = getPos(e);
      if (tool === 'pen' || tool === 'eraser') {
        ctx.lineTo(p.x, p.y); ctx.stroke();
      } else if (tool === 'marker') {
        markerPts.push(p);
        ctx.putImageData(snapshot, 0, 0);
        ctx.save();
        ctx.globalAlpha = 0.32; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.lineWidth = Math.max(size * 2.4, 10); ctx.strokeStyle = color;
        ctx.beginPath(); ctx.moveTo(markerPts[0].x, markerPts[0].y);
        for (var i = 1; i < markerPts.length; i++) ctx.lineTo(markerPts[i].x, markerPts[i].y);
        ctx.stroke(); ctx.restore();
      } else if (tool === 'line') {
        ctx.putImageData(snapshot, 0, 0); shapeStyle();
        ctx.beginPath(); ctx.moveTo(startX, startY); ctx.lineTo(p.x, p.y); ctx.stroke();
      } else if (tool === 'rect') {
        ctx.putImageData(snapshot, 0, 0); shapeStyle();
        ctx.strokeRect(Math.min(startX, p.x), Math.min(startY, p.y), Math.abs(p.x - startX), Math.abs(p.y - startY));
      } else if (tool === 'ellipse') {
        ctx.putImageData(snapshot, 0, 0); shapeStyle();
        ctx.beginPath();
        ctx.ellipse((startX + p.x) / 2, (startY + p.y) / 2, Math.abs(p.x - startX) / 2, Math.abs(p.y - startY) / 2, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
    function endStroke() {
      if (!drawing) return;
      drawing = false; markerPts = null;
      ctx.globalAlpha = 1;
      pushUndo();
    }
    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);
    window.addEventListener('pointerup', endStroke);
  }

  function shapeStyle() {
    ctx.globalAlpha = 1; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = size; ctx.strokeStyle = color;
  }

  /* ---------- text tool ---------- */
  function startText(p, e) {
    var existing = wrap.querySelector('.draw-text-input');
    if (existing) existing.blur();
    var r = wrap.getBoundingClientRect();
    var dispFont = Math.max(14, size * 3);
    var inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'draw-text-input';
    inp.style.left = (e.clientX - r.left) + 'px';
    inp.style.top = (e.clientY - r.top) + 'px';
    inp.style.fontSize = dispFont + 'px';
    inp.style.color = color;
    wrap.appendChild(inp);
    setTimeout(function () { inp.focus(); }, 0);
    var done = false;
    function commit() {
      if (done) return; done = true;
      var val = inp.value;
      if (val) {
        var scale = W / r.width;
        ctx.globalAlpha = 1;
        ctx.fillStyle = color;
        ctx.textBaseline = 'top';
        ctx.font = (dispFont * scale) + "px 'DM Serif Display', Georgia, serif";
        ctx.fillText(val, p.x, p.y);
        pushUndo();
      }
      if (inp.parentNode) inp.parentNode.removeChild(inp);
    }
    inp.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter') { ev.preventDefault(); commit(); }
      else if (ev.key === 'Escape') { done = true; if (inp.parentNode) inp.parentNode.removeChild(inp); }
    });
    inp.addEventListener('blur', commit);
  }

  /* ---------- undo / redo ---------- */
  function pushUndo() {
    try { undoStack.push(ctx.getImageData(0, 0, W, H)); } catch (e) { return; }
    if (undoStack.length > 25) undoStack.shift();
    redoStack = [];
  }
  function undo() {
    if (undoStack.length <= 1) return;
    redoStack.push(undoStack.pop());
    ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
  }
  function redo() {
    if (!redoStack.length) return;
    var s = redoStack.pop();
    undoStack.push(s);
    ctx.putImageData(s, 0, 0);
  }

  /* ---------- clipboard / export ---------- */
  function copyToClipboard() {
    if (!navigator.clipboard || !window.ClipboardItem) { flashMsg('Copy not supported — use Download'); return; }
    canvas.toBlob(function (blob) {
      if (!blob) { flashMsg('Copy failed'); return; }
      navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blob })])
        .then(function () { flashMsg('Copied to clipboard ✓'); })
        .catch(function () { flashMsg('Copy blocked — use Download'); });
    }, 'image/png');
  }
  function pasteFromClipboard() {
    if (navigator.clipboard && navigator.clipboard.read) {
      navigator.clipboard.read().then(function (items) {
        for (var i = 0; i < items.length; i++) {
          var types = items[i].types || [];
          for (var j = 0; j < types.length; j++) {
            if (types[j].indexOf('image') === 0) {
              items[i].getType(types[j]).then(drawImageBlob);
              return;
            }
          }
        }
        flashMsg('No image in clipboard — try Ctrl/Cmd+V');
      }).catch(function () { flashMsg('Paste blocked — try Ctrl/Cmd+V on the canvas'); });
    } else {
      flashMsg('Use Ctrl/Cmd+V to paste an image');
    }
  }
  function drawImageBlob(blob) {
    var url = URL.createObjectURL(blob);
    var img = new Image();
    img.onload = function () {
      var scale = Math.min(W / img.width, H / img.height, 1);
      var dw = img.width * scale, dh = img.height * scale;
      ctx.globalAlpha = 1;
      ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
      URL.revokeObjectURL(url);
      pushUndo();
      flashMsg('Image pasted ✓');
    };
    img.onerror = function () { URL.revokeObjectURL(url); flashMsg('Could not paste image'); };
    img.src = url;
  }
  function download() {
    var word = ($('drawWord').textContent || 'dibujo').replace(/[^a-z0-9áéíóúñ]+/gi, '-').toLowerCase();
    var a = document.createElement('a');
    a.download = 'dibujo-' + word + '.png';
    a.href = canvas.toDataURL('image/png');
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  /* ---------- done / reward ---------- */
  function markDone() {
    if (undoStack.length <= 1) { flashMsg('Draw something first!'); return; }
    var word = $('drawWord').textContent || '';
    if (awarded[word]) { flashMsg('Already earned for "' + word + '" — try a new word'); return; }
    awarded[word] = 1;
    if (typeof awardCoins === 'function') awardCoins(2, 'Dibujaste: ' + word);
    else flashMsg('Nice work! ✓');
  }

  /* ---------- flash toast ---------- */
  var flashTimer = null;
  function flashMsg(msg) {
    if (!flash) return;
    flash.textContent = msg;
    flash.classList.add('show');
    if (flashTimer) clearTimeout(flashTimer);
    flashTimer = setTimeout(function () { flash.classList.remove('show'); }, 1500);
  }
})();
