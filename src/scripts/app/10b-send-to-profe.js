  /* ============== SEND TO PROFE ============== */
  // Every results box carries a "Send to Profe" button (see activityStampHtml).
  // It draws the latest result onto a canvas score card — activity, settings,
  // score, student name, time — and offers the ways a school Chromebook or
  // phone can hand that picture to the teacher: Share sheet, clipboard,
  // download, or an email draft. No server: nothing leaves the device unless
  // the student sends it.
  let LAST_RESULT = null;
  // Prefilled "To:" for the email button. Empty = student types the address.
  const PROFE_EMAIL = '';
  const SEND_NAME_KEY = 'elpueblo_send_name';
  let _sendCardBlob = null;

  function sendProfeName() {
    const el = document.getElementById('sendProfeName');
    return el ? el.value.trim().slice(0, 40) : '';
  }

  function sendProfeDefaultName() {
    let saved = '';
    try { saved = localStorage.getItem(SEND_NAME_KEY) || ''; } catch (e) {}
    if (saved) return saved;
    if (typeof STUDENT_NAME === 'string' && STUDENT_NAME && STUDENT_NAME !== '__anonymous__') return STUDENT_NAME;
    return '';
  }

  function ensureSendProfeModal() {
    let bg = document.getElementById('sendProfeModal');
    if (bg) return bg;
    bg = document.createElement('div');
    bg.className = 'country-modal-bg';
    bg.id = 'sendProfeModal';
    bg.onclick = e => { if (e.target === bg) closeSendProfe(); };
    bg.innerHTML = `
      <div class="country-modal send-profe-modal">
        <button class="modal-close" onclick="closeSendProfe()" aria-label="Close">✕</button>
        <div class="modal-body">
          <h3>Send to <em>Profe</em></h3>
          <label class="send-profe-label" for="sendProfeName">Your name (first + last)</label>
          <input id="sendProfeName" class="send-profe-input" type="text" maxlength="40" autocomplete="off"
                 placeholder="Type your name" oninput="onSendProfeName()">
          <img id="sendProfePreview" class="send-profe-preview" alt="Your score card">
          <div class="send-profe-actions">
            <button type="button" class="btn primary" id="sendProfeShare" onclick="sendProfeShare()">📤 Share…</button>
            <button type="button" class="btn" id="sendProfeCopy" onclick="sendProfeCopy()">📋 Copy picture</button>
            <button type="button" class="btn" onclick="sendProfeDownload()">⬇ Save picture</button>
            <button type="button" class="btn" onclick="sendProfeEmail()">✉️ Email</button>
          </div>
          <p class="send-profe-help" id="sendProfeMsg">Copy the picture, then paste it (Ctrl+V) into your email or assignment — or Save it and attach the file.</p>
        </div>
      </div>`;
    document.body.appendChild(bg);
    return bg;
  }

  function openSendProfe() {
    if (!LAST_RESULT) return;
    const bg = ensureSendProfeModal();
    const input = document.getElementById('sendProfeName');
    if (!input.value) input.value = sendProfeDefaultName();
    // Hide buttons this browser can't do rather than letting them fail
    const canShareFiles = !!(navigator.canShare && window.File &&
      navigator.canShare({ files: [new File([''], 'x.png', { type: 'image/png' })] }));
    document.getElementById('sendProfeShare').style.display = canShareFiles ? '' : 'none';
    document.getElementById('sendProfeCopy').style.display = (navigator.clipboard && window.ClipboardItem) ? '' : 'none';
    sendProfeMsg('Copy the picture, then paste it (Ctrl+V) into your email or assignment — or Save it and attach the file.');
    renderSendProfeCard();
    bg.classList.add('open');
    if (!input.value) setTimeout(() => input.focus(), 50);
  }

  function closeSendProfe() {
    const bg = document.getElementById('sendProfeModal');
    if (bg) bg.classList.remove('open');
  }

  let _sendNameTimer = null;
  function onSendProfeName() {
    try { localStorage.setItem(SEND_NAME_KEY, sendProfeName()); } catch (e) {}
    clearTimeout(_sendNameTimer);
    _sendNameTimer = setTimeout(() => { renderSendProfeCard(); rcRefreshStamps(); }, 150);
  }

  function sendProfeMsg(text, isError) {
    const el = document.getElementById('sendProfeMsg');
    if (!el) return;
    el.textContent = text;
    el.style.color = isError ? 'var(--rojo)' : '';
  }

  // Word-wrap helper for canvas text; returns the y after the last line.
  function sendCardWrap(ctx, text, x, y, maxW, lineH) {
    const words = String(text).split(' ');
    let line = '';
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && line) {
        ctx.fillText(line, x, y);
        line = w;
        y += lineH;
      } else line = test;
    }
    if (line) { ctx.fillText(line, x, y); y += lineH; }
    return y;
  }

  // Same code the stamp shows; Profe verifies it at /profe/#/revisar.
  function sendProfeCheckCode() {
    const name = sendProfeName();
    return name ? rcMakeCode(name, LAST_RESULT.score, LAST_RESULT.activity, LAST_RESULT.ms) : '';
  }

  function drawSendProfeCard() {
    const r = LAST_RESULT;
    const W = 1000, H = 560, P = 56;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    // Fixed light palette so the picture reads the same in light or dark theme
    ctx.fillStyle = '#f4ede0'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#c43d2a'; ctx.fillRect(0, 0, W, 10);
    ctx.strokeStyle = '#1f1a14'; ctx.lineWidth = 2; ctx.strokeRect(20, 30, W - 40, H - 50);

    ctx.fillStyle = '#6b5f50';
    ctx.font = '600 18px "JetBrains Mono", monospace';
    ctx.fillText('EL PUEBLO · NCHSPANISH.COM', P, 80);

    ctx.fillStyle = '#1f1a14';
    ctx.font = '40px "DM Serif Display", Georgia, serif';
    let y = sendCardWrap(ctx, r.title, P, 140, W - 2 * P, 46);

    ctx.fillStyle = '#6b5f50';
    ctx.font = '22px Fraunces, Georgia, serif';
    if (r.details.length) y = sendCardWrap(ctx, r.details.join(' · '), P, y + 4, W - 2 * P, 30);

    ctx.fillStyle = '#d4922c';
    ctx.font = 'italic 110px "DM Serif Display", Georgia, serif';
    ctx.fillText(r.score || '—', P, Math.max(y + 110, 330));

    const name = sendProfeName();
    ctx.fillStyle = name ? '#1f1a14' : '#c43d2a';
    ctx.font = '600 28px Fraunces, Georgia, serif';
    ctx.fillText(name ? name : '(type your name above)', P, H - 92);
    ctx.fillStyle = '#6b5f50';
    ctx.font = '20px "JetBrains Mono", monospace';
    ctx.fillText(r.at.toLocaleString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }), P, H - 56);
    const code = sendProfeCheckCode();
    if (code) {
      ctx.textAlign = 'right';
      ctx.fillStyle = '#6b5f50';
      ctx.font = '600 16px "JetBrains Mono", monospace';
      ctx.fillText('CHECK CODE', W - P, H - 100);
      ctx.fillStyle = '#1f1a14';
      ctx.font = '700 32px "JetBrains Mono", monospace';
      ctx.fillText(code, W - P, H - 60);
      ctx.textAlign = 'left';
    }
    return c;
  }

  function renderSendProfeCard() {
    if (!LAST_RESULT) return;
    const c = drawSendProfeCard();
    document.getElementById('sendProfePreview').src = c.toDataURL('image/png');
    _sendCardBlob = null;
    c.toBlob(b => { _sendCardBlob = b; }, 'image/png');
  }

  function sendProfeFileName() {
    const slug = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 40);
    return [slug(sendProfeName()) || 'student', slug(LAST_RESULT.title)].join('_') + '.png';
  }

  function sendProfeSummary() {
    const r = LAST_RESULT;
    return [
      'Name: ' + (sendProfeName() || '—'),
      'Activity: ' + r.title,
      r.details.length ? 'Settings: ' + r.details.join(' · ') : '',
      'Score: ' + r.score,
      'Finished: ' + r.when,
      sendProfeName() ? 'Check code: ' + sendProfeCheckCode() : ''
    ].filter(Boolean).join('\n');
  }

  function sendProfeNeedsName() {
    if (sendProfeName()) return false;
    sendProfeMsg('Type your name first so Profe knows whose score this is.', true);
    document.getElementById('sendProfeName').focus();
    return true;
  }

  // Blob is made async; build it on demand if the student is very fast.
  function withSendProfeBlob(fn) {
    if (_sendCardBlob) return fn(_sendCardBlob);
    drawSendProfeCard().toBlob(b => { _sendCardBlob = b; fn(b); }, 'image/png');
  }

  function sendProfeShare() {
    if (sendProfeNeedsName()) return;
    withSendProfeBlob(blob => {
      const file = new File([blob], sendProfeFileName(), { type: 'image/png' });
      navigator.share({ files: [file], title: 'El Pueblo — ' + LAST_RESULT.title, text: sendProfeSummary() })
        .then(() => sendProfeMsg('Sent ✓'))
        .catch(e => { if (e && e.name !== 'AbortError') sendProfeMsg('Sharing didn’t work — try Copy picture or Save picture.', true); });
    });
  }

  function sendProfeCopy() {
    if (sendProfeNeedsName()) return;
    // ClipboardItem accepts a Promise, which keeps Safari's user-gesture rule happy
    const blobPromise = new Promise(res => withSendProfeBlob(res));
    navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blobPromise })])
      .then(() => sendProfeMsg('Copied ✓ Now paste it (Ctrl+V) into your email or assignment.'))
      .catch(() => sendProfeMsg('Copy was blocked — use Save picture and attach the file.', true));
  }

  function sendProfeDownload() {
    if (sendProfeNeedsName()) return;
    const a = document.createElement('a');
    a.download = sendProfeFileName();
    a.href = drawSendProfeCard().toDataURL('image/png');
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    sendProfeMsg('Saved ✓ Look in your Downloads, then attach it to your email or assignment.');
  }

  function sendProfeEmail() {
    if (sendProfeNeedsName()) return;
    const subject = 'El Pueblo — ' + LAST_RESULT.title + ' — ' + LAST_RESULT.score + ' — ' + sendProfeName();
    const body = sendProfeSummary() + '\n\n(Paste or attach my score picture here.)';
    window.location.href = 'mailto:' + encodeURIComponent(PROFE_EMAIL) +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    sendProfeMsg('Your email should open with the details filled in. Tip: Copy picture first, then paste it into the email.');
  }
