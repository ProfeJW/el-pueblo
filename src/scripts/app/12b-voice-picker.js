  // ============================================================================
  // VOICE PICKER — the 🔊 button in the header
  // ----------------------------------------------------------------------------
  // Lists the device's Spanish voices, best first (natural before robotic,
  // Peru / Latin America before Spain — same order pickSpanishVoice uses).
  // ▶ plays a sample in that voice; tapping a row makes it the voice for every
  // listening activity. Saved per browser (on the school edition that means
  // until the window closes). "Automático" clears the choice.
  // ============================================================================
  const VOICE_PREF_KEY = 'elp_voice';
  const VOICE_SAMPLE = 'Hola, ¿qué tal? Me llamo Lucas. Uno, dos, tres.';
  const VOICE_COUNTRY = {
    'es-pe': 'Perú', 'es-419': 'Latinoamérica', 'es-mx': 'México', 'es-us': 'Estados Unidos', 'es-co': 'Colombia',
    'es-cl': 'Chile', 'es-ar': 'Argentina', 'es-ec': 'Ecuador', 'es-bo': 'Bolivia', 'es-ve': 'Venezuela',
    'es-uy': 'Uruguay', 'es-py': 'Paraguay', 'es-cr': 'Costa Rica', 'es-pa': 'Panamá', 'es-gt': 'Guatemala',
    'es-hn': 'Honduras', 'es-sv': 'El Salvador', 'es-ni': 'Nicaragua', 'es-do': 'República Dominicana',
    'es-pr': 'Puerto Rico', 'es-cu': 'Cuba', 'es-es': 'España'
  };

  function voiceKey(v) { return v ? (v.voiceURI || v.name || '') : ''; }

  function savedSpanishVoice(voices) {
    let key = '';
    try { key = localStorage.getItem(VOICE_PREF_KEY) || ''; } catch (e) {}
    if (!key) return null;
    return (voices || []).find(v => voiceKey(v) === key) || null;
  }

  function spanishVoicesRanked() {
    const all = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];
    const tag = v => String(v.lang || '').toLowerCase().replace('_', '-');
    const accent = v => { const i = LATAM_VOICE_ORDER.indexOf(tag(v)); return i >= 0 ? i : (tag(v) === 'es-es' ? 90 : 80); };
    return all.filter(v => tag(v).startsWith('es'))
      .sort((a, b) => (spanishVoiceTier(a) * 100 + accent(a)) - (spanishVoiceTier(b) * 100 + accent(b)));
  }

  function openVoicePicker() {
    const box = document.getElementById('voicePicker');
    if (!box) return;
    renderVoiceList();
    box.classList.add('open');
  }
  function closeVoicePicker() {
    const box = document.getElementById('voicePicker');
    if (box) box.classList.remove('open');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  function renderVoiceList() {
    const list = document.getElementById('voiceList');
    if (!list) return;
    if (!('speechSynthesis' in window)) {
      list.innerHTML = '<p style="color:var(--rojo);">This browser can\'t speak, so there are no voices to choose. Try Chrome.</p>';
      return;
    }
    const voices = spanishVoicesRanked();
    const saved = savedSpanishVoice(voices);
    const autoPick = pickSpanishVoice({ ignoreSaved: true }); // what "Automático" uses
    const autoName = autoPick.voice ? autoPick.voice.name : '';

    if (!voices.length) {
      list.innerHTML = '<p>No Spanish voices have loaded yet. Check that you\'re online, wait a second, and open this again.</p>';
      return;
    }
    const row = (key, title, sub, badge, selected, idx) => `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;margin-bottom:8px;border:2px solid ${selected ? 'var(--verde)' : 'var(--line)'};border-radius:6px;cursor:pointer;background:var(--card-bg);"
           role="radio" aria-checked="${selected}" tabindex="0"
           onclick="chooseVoice(${idx})" onkeypress="if(event.key==='Enter'||event.key===' ')chooseVoice(${idx})">
        <span style="font-size:18px;width:22px;text-align:center;">${selected ? '✅' : '○'}</span>
        <span style="flex:1;min-width:0;">
          <span style="display:block;font-weight:600;">${escapeHtml(title)}</span>
          <span style="display:block;font-size:12px;color:var(--ink-soft);">${sub}${badge ? ' · ' + badge : ''}</span>
        </span>
        ${idx >= 0 ? `<button type="button" class="btn" style="padding:6px 12px;" onclick="event.stopPropagation();previewVoice(${idx})" aria-label="Play a sample">▶</button>` : ''}
      </div>`;
    const badge = v => spanishVoiceTier(v) === 0
      ? '<span style="font-family:\'JetBrains Mono\',monospace;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--verde);">natural</span>'
      : spanishVoiceTier(v) === 2
        ? '<span style="font-family:\'JetBrains Mono\',monospace;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-soft);">robotic</span>'
        : '';
    list.innerHTML =
      row('', 'Automático', 'Best available' + (autoName ? ': ' + escapeHtml(autoName) : ''), '', !saved, -1)
      + voices.map((v, i) => {
          const country = VOICE_COUNTRY[String(v.lang).toLowerCase().replace('_', '-')] || v.lang;
          return row(voiceKey(v), v.name, escapeHtml(country) + (v.localService === false ? ' · needs internet' : ''), badge(v), saved && voiceKey(saved) === voiceKey(v), i);
        }).join('');
  }

  function chooseVoice(idx) {
    const voices = spanishVoicesRanked();
    try {
      if (idx < 0 || !voices[idx]) localStorage.removeItem(VOICE_PREF_KEY);
      else localStorage.setItem(VOICE_PREF_KEY, voiceKey(voices[idx]));
    } catch (e) {}
    renderVoiceList();
    if (idx >= 0) previewVoice(idx);
  }

  function previewVoice(idx) {
    const v = spanishVoicesRanked()[idx];
    if (!v) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(VOICE_SAMPLE);
    u.voice = v;
    u.lang = String(v.lang).replace('_', '-');
    u.rate = 0.9 * (spanishVoiceTier(v) === 2 ? 0.8 : 1);
    synth.speak(u);
  }

  // Voices load late in Chrome; refresh the list if it's open when they arrive.
  if ('speechSynthesis' in window && window.speechSynthesis.addEventListener) {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      const box = document.getElementById('voicePicker');
      if (box && box.classList.contains('open')) renderVoiceList();
    });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVoicePicker(); });
