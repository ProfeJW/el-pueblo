  /* ============== RECORDING (now ties to current topic) ============== */
  let mediaRecorder = null;
  let recordedChunks = [];
  let recStartTime = null;
  let recTimerInterval = null;
  let recording = false;

  async function toggleRecording() {
    const btn = document.getElementById('rec-btn');
    const status = document.getElementById('rec-status');
    if (!recording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        recordedChunks = [];
        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) recordedChunks.push(e.data); };
        mediaRecorder.onstop = async () => {
          const blob = new Blob(recordedChunks, { type: 'audio/webm' });
          const dur = Math.floor((Date.now() - recStartTime) / 1000);
          stream.getTracks().forEach(t => t.stop());

          // Save recording to current topic
          if (currentTopic && currentTopic.kind === 'speaking') {
            // Persist the Blob in IndexedDB; store only the key in localStorage
            const audioKey = newAudioKey();
            try {
              await saveAudioBlob(audioKey, blob);
            } catch (err) {
              console.error('Failed to save audio to IndexedDB:', err);
              alert('Could not save the recording (browser storage error). It may still play in this session, but will not survive a refresh.');
            }

            const responses = getStudentResponses(currentTopic.id);
            const isFirstForThisTopic = responses.length === 0;
            responses.push({
              kind: 'speaking',
              audioKey,           // primary reference — looked up from IndexedDB on playback
              duration: dur,
              savedAt: new Date().toISOString()
            });
            saveStudentResponses(currentTopic.id, responses);

            // Award Lucas (only on first response per topic to prevent farming)
            STATE.recordingsCount = (STATE.recordingsCount || 0) + 1;
            if (isFirstForThisTopic) {
              if (dur >= 30) {
                STATE.qualityRecordings = (STATE.qualityRecordings || 0) + 1;
                awardCoins(10, 'Quality recording (' + dur + 's)');
              } else if (dur >= 15) {
                STATE.qualityRecordings = (STATE.qualityRecordings || 0) + 1;
                awardCoins(5, 'Recording (' + dur + 's)');
              } else {
                saveState();
                checkAchievements();
              }
            } else {
              saveState();
            }

            renderResponseList();
            renderTopicList('speaking');
          }
        };
        mediaRecorder.start();
        recording = true;
        recStartTime = Date.now();
        btn.classList.add('recording');
        status.textContent = '● Recording…';
        recTimerInterval = setInterval(() => {
          const s = Math.floor((Date.now() - recStartTime) / 1000);
          const el = document.getElementById('rec-timer');
          if (el) el.textContent = Math.floor(s/60) + ':' + String(s%60).padStart(2,'0');
        }, 200);
      } catch (e) {
        alert('Could not access microphone. Please allow access in your browser.');
      }
    } else {
      mediaRecorder.stop();
      recording = false;
      btn.classList.remove('recording');
      status.textContent = 'Recording saved ↓';
      clearInterval(recTimerInterval);
      setTimeout(() => {
        const t = document.getElementById('rec-timer');
        if (t) t.textContent = '0:00';
        const s = document.getElementById('rec-status');
        if (s) s.textContent = 'Ready to record';
      }, 2000);
    }
  }


