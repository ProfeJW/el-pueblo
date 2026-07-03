  /* ============== TEACHER MODE ============== */
  function checkTeacherMode() {
    if (window.location.search.includes('teacher')) {
      document.body.classList.add('teacher-mode');
      // Show the teacher's recent codes
      setTimeout(() => { try { renderRecentCodes(); } catch(e) {} }, 100);
    }
  }

  // ============================================================================
  // LUKA CODE SYSTEM
  // ----------------------------------------------------------------------------
  // Codes are self-validating with a checksum, so a code generated on the
  // teacher's device can be redeemed on any student's device — no shared backend
  // required.
  //
  // Format: LUK-{amount-segment}-{random}-{checksum}
  //   - amount-segment: 1 letter A-G representing one of the preset amounts
  //   - random: 4 chars for uniqueness
  //   - checksum: 2 chars computed from the rest of the code + a secret salt
  //
  // The secret salt below is the only thing keeping bad actors from forging
  // codes. For a high school classroom, this is more than enough; for a real
  // production app, you'd want a real backend.
  // ============================================================================

  const LUKA_CODE_SECRET = 'pueblo-tertulia-v1-salt';
  // Map letter codes to amounts. Add more here if you want other preset values.
  const LUKA_AMOUNT_MAP = {
    'A': 5,   'B': 10,  'C': 15,  'D': 25,
    'E': 50,  'F': 75,  'G': 100, 'H': 150,
    'I': 200, 'J': 250, 'K': 300, 'L': 500
  };
  const LUKA_AMOUNT_TO_LETTER = {};
  Object.keys(LUKA_AMOUNT_MAP).forEach(k => { LUKA_AMOUNT_TO_LETTER[LUKA_AMOUNT_MAP[k]] = k; });

  // Simple hash for checksum — not cryptographically secure, but fine here
  function lukaChecksum(input) {
    let h = 5381;
    const combined = input + LUKA_CODE_SECRET;
    for (let i = 0; i < combined.length; i++) {
      h = ((h << 5) + h) + combined.charCodeAt(i);
      h = h & 0xFFFFFFFF; // keep it 32-bit
    }
    // Convert to 2 base-32 characters
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    h = Math.abs(h);
    return chars[h % 32] + chars[Math.floor(h / 32) % 32];
  }

  // Generate a portable code for a given amount
  function makePortableCode(amount) {
    const letter = LUKA_AMOUNT_TO_LETTER[amount];
    if (!letter) return null; // amount must be one of the presets
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let r = '';
    for (let i = 0; i < 4; i++) r += chars.charAt(Math.floor(Math.random() * chars.length));
    const partial = letter + '-' + r;
    const checksum = lukaChecksum(partial);
    return 'LUK-' + partial + '-' + checksum;
  }

  // Validate a portable code; returns { amount } if valid, null if not
  function validatePortableCode(code) {
    // Expected format: LUK-X-XXXX-XX
    const match = code.match(/^LUK-([A-Z])-([A-Z0-9]{4})-([A-Z0-9]{2})$/);
    if (!match) return null;
    const [, letter, random, checksum] = match;
    const amount = LUKA_AMOUNT_MAP[letter];
    if (!amount) return null;
    const expected = lukaChecksum(letter + '-' + random);
    if (expected !== checksum) return null;
    return { amount };
  }

  function generateLukaCode() {
    const amount = parseInt(document.getElementById('t-luka-amount').value, 10);
    const reason = document.getElementById('t-luka-reason').value.trim() || 'Teacher reward';

    // Validate amount is one of our preset amounts
    if (!LUKA_AMOUNT_TO_LETTER[amount]) {
      const validAmounts = Object.keys(LUKA_AMOUNT_TO_LETTER).map(Number).sort((a,b) => a-b).join(', ');
      alert('Code amounts must be one of: ' + validAmounts + ' Lucas.\n\nThese are the preset amounts. Pick one and try again.');
      return;
    }

    const code = makePortableCode(amount);
    if (!code) { alert('Error generating code. Try again.'); return; }

    // Also save to local roster so the teacher can see their recent codes
    const recent = JSON.parse(localStorage.getItem('tertulia_recent_codes') || '[]');
    recent.unshift({ code, amount, reason, created: new Date().toISOString() });
    // Keep only the most recent 50
    if (recent.length > 50) recent.length = 50;
    localStorage.setItem('tertulia_recent_codes', JSON.stringify(recent));

    const out = document.getElementById('t-luka-output');
    out.textContent = code;
    out.classList.add('visible');

    // Refresh the recent-codes list display
    renderRecentCodes();

    // Try to copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
  }

  function renderRecentCodes() {
    const list = document.getElementById('t-recent-codes');
    if (!list) return;
    const recent = JSON.parse(localStorage.getItem('tertulia_recent_codes') || '[]');
    if (recent.length === 0) {
      list.innerHTML = '<p style="font-size: 13px; color: rgba(244,237,224,0.5); margin: 0;">No codes generated yet.</p>';
      return;
    }
    list.innerHTML = recent.slice(0, 10).map(r => {
      const date = new Date(r.created);
      const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' ' +
                      date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      return `
        <div class="recent-code-row">
          <div class="rc-code" onclick="copyCodeToClipboard('${r.code}', this)">${r.code}</div>
          <div class="rc-meta"><span class="rc-amt">${r.amount} L</span> · ${dateStr}</div>
          <div class="rc-reason">${escapeHtml(r.reason)}</div>
        </div>
      `;
    }).join('');
  }

  function copyCodeToClipboard(code, el) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        const originalText = el.textContent;
        el.textContent = 'Copied!';
        setTimeout(() => { el.textContent = originalText; }, 1200);
      }).catch(() => {});
    }
  }

  function pickLukaAmount(amount, btn) {
    document.getElementById('t-luka-amount').value = amount;
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function addAnnouncement() {
    const kind = document.getElementById('t-aviso-kind').value;
    const title = document.getElementById('t-aviso-title').value.trim();
    const body = document.getElementById('t-aviso-body').value.trim();
    const link = document.getElementById('t-aviso-url').value.trim();
    const due = document.getElementById('t-aviso-due').value.trim();
    if (!title || !body) { alert('Title and description are required.'); return; }

    const aviso = {
      kind, title, body,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
    if (due) aviso.due = due;

    // Auto-detect type based on URL
    if (link) {
      // YouTube ID extraction
      const ytMatch = link.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
      if (ytMatch) {
        aviso.youtubeId = ytMatch[1];
      } else if (link.includes('docs.google.com') || link.includes('drive.google.com')) {
        // Google Doc/Sheet/Slides — store original URL, embed will be generated at render time
        aviso.googleDocUrl = link;
        aviso.link = link; // also keep original for "open in new tab"
        if (kind !== 'doc') aviso.kind = 'doc'; // upgrade kind if user picked something else
      } else {
        aviso.link = link;
      }
    }

    const existing = JSON.parse(localStorage.getItem('tertulia_teacher_avisos') || '[]');
    existing.unshift(aviso);
    localStorage.setItem('tertulia_teacher_avisos', JSON.stringify(existing));

    // Clear form
    ['t-aviso-title','t-aviso-body','t-aviso-url','t-aviso-due'].forEach(id => document.getElementById(id).value = '');
    renderAvisos();
    alert('Announcement posted! It is visible on this device. To share with all students, click "Refresh export" and paste the JSON into the file\'s ANNOUNCEMENTS array.\n\nReminder: Google Docs must be set to "Anyone with the link can view" for the embed to work.');
  }

  function exportAnnouncements() {
    const teacher = JSON.parse(localStorage.getItem('tertulia_teacher_avisos') || '[]');
    document.getElementById('t-aviso-export').value = JSON.stringify(teacher, null, 2);
  }

  function addTopic() {
    const kind = document.getElementById('t-topic-kind').value;
    const id = document.getElementById('t-topic-id').value.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const title = document.getElementById('t-topic-title').value.trim();
    const body = document.getElementById('t-topic-body').value.trim();
    const tipsRaw = document.getElementById('t-topic-tips').value.trim();
    const due = document.getElementById('t-topic-due').value.trim();
    if (!id || !title || !body) { alert('Topic ID, title, and prompt body are all required.'); return; }

    const topic = {
      id, title, body,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
    if (tipsRaw) topic.tips = tipsRaw.split('\n').map(t => t.trim()).filter(Boolean);
    if (due) topic.due = due;

    const key = kind === 'writing' ? 'tertulia_teacher_writing_topics' : 'tertulia_teacher_speaking_topics';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    if (existing.some(t => t.id === id)) {
      if (!confirm('A topic with that ID already exists. Replace it?')) return;
      const idx = existing.findIndex(t => t.id === id);
      existing[idx] = topic;
    } else {
      existing.unshift(topic);
    }
    localStorage.setItem(key, JSON.stringify(existing));

    ['t-topic-id','t-topic-title','t-topic-body','t-topic-tips','t-topic-due'].forEach(id => document.getElementById(id).value = '');
    if (typeof renderTopicList === 'function') renderTopicList(kind);
    alert('Topic posted! It is visible on this device. To share with students, click "Refresh export" below and paste the JSON into the file\'s ' + (kind === 'writing' ? 'WRITING_TOPICS' : 'SPEAKING_TOPICS') + ' array.');
  }

  function exportTopics() {
    const writing = JSON.parse(localStorage.getItem('tertulia_teacher_writing_topics') || '[]');
    const speaking = JSON.parse(localStorage.getItem('tertulia_teacher_speaking_topics') || '[]');
    const out = '// WRITING_TOPICS additions:\n' + JSON.stringify(writing, null, 2) +
                '\n\n// SPEAKING_TOPICS additions:\n' + JSON.stringify(speaking, null, 2);
    document.getElementById('t-topic-export').value = out;
  }

  function exportAllResponses() {
    // Collect every student response on this device into one CSV
    const rows = [['student','topic_id','topic_kind','response_index','word_count','duration_seconds','text','saved_at']];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key.startsWith('tertulia_responses:')) continue;
      const parts = key.split(':');
      if (parts.length < 3) continue;
      const student = parts[1];
      const topicId = parts.slice(2).join(':');
      try {
        const responses = JSON.parse(localStorage.getItem(key) || '[]');
        responses.forEach((r, idx) => {
          rows.push([
            student,
            topicId,
            r.kind || '',
            idx + 1,
            r.wordCount || '',
            r.duration || '',
            r.kind === 'writing' ? (r.text || '') : '[audio recording — not exportable as text]',
            r.savedAt || ''
          ]);
        });
      } catch (e) {}
    }
    if (rows.length === 1) { alert('No student responses found on this device.'); return; }
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'el-pueblo-responses-' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  function viewAllStudents() {
    const out = document.getElementById('t-class-output');
    const all = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith('tertulia_progress_v1:')) {
        const name = k.replace('tertulia_progress_v1:', '');
        try {
          const data = JSON.parse(localStorage.getItem(k));
          all.push({
            name,
            coins: data.coins || 0,
            drills: data.drillsCompleted || 0,
            countries: (data.countriesViewed || []).length,
            words: data.wordsWritten || 0,
            minutes: data.minutesAwarded || 0
          });
        } catch (e) {}
      }
    }
    if (all.length === 0) {
      out.innerHTML = '<em style="color: rgba(244,237,224,0.5)">No student profiles found on this device yet.</em>';
      return;
    }
    all.sort((a, b) => b.coins - a.coins);
    out.innerHTML = '<table style="width:100%;font-size:12px;border-collapse:collapse"><tr style="border-bottom:1px solid rgba(244,237,224,0.2);text-align:left"><th style="padding:6px 4px">Student</th><th>Lucas</th><th>Drills</th><th>Countries</th><th>Words</th><th>Min</th></tr>' +
      all.map(s => `<tr style="border-bottom:1px dotted rgba(244,237,224,0.1)"><td style="padding:6px 4px">${s.name}</td><td style="color:var(--ocre)"><strong>${s.coins}</strong></td><td>${s.drills}</td><td>${s.countries}/21</td><td>${s.words}</td><td>${s.minutes}</td></tr>`).join('') +
      '</table>';
  }

  function exportClassCSV() {
    const all = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith('tertulia_progress_v1:')) {
        const name = k.replace('tertulia_progress_v1:', '');
        try {
          const data = JSON.parse(localStorage.getItem(k));
          all.push({
            name,
            coins: data.coins || 0,
            drillsCompleted: data.drillsCompleted || 0,
            perfectDrills: data.perfectDrills || 0,
            verbsCorrect: data.verbsCorrect || 0,
            cardsViewed: (data.cardsViewed || []).length,
            countriesViewed: (data.countriesViewed || []).length,
            quizCorrect: data.quizCorrect || 0,
            wordsWritten: data.wordsWritten || 0,
            poemsCompleted: data.poemsCompleted || 0,
            recordingsCount: data.recordingsCount || 0,
            qualityRecordings: data.qualityRecordings || 0,
            minutesAwarded: data.minutesAwarded || 0,
            achievements: (data.achievements || []).length,
            savedAt: data.savedAt || ''
          });
        } catch (e) {}
      }
    }
    if (all.length === 0) { alert('No student data found on this device.'); return; }
    const headers = Object.keys(all[0]);
    const csv = [headers.join(',')].concat(all.map(s => headers.map(h => `"${String(s[h]).replace(/"/g, '""')}"`).join(','))).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tertulia-class-' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

