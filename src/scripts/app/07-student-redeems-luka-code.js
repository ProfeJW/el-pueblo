  /* ============== STUDENT REDEEMS LUKA CODE ============== */
  function redeemLukaCode() {
    const input = document.getElementById('lukaCodeInput');
    const code = input.value.trim().toUpperCase();
    if (!code) return;

    // First, try to validate as a portable (checksum-verified) code
    const portable = validatePortableCode(code);
    let amount = null;
    let reason = 'Teacher reward';

    if (portable) {
      amount = portable.amount;
    } else {
      // Fall back to old device-stored codes for backward compatibility
      const valid = JSON.parse(localStorage.getItem('tertulia_valid_codes') || '{}');
      const entry = valid[code];
      if (entry) {
        amount = entry.amount;
        reason = entry.reason || reason;
      }
    }

    if (amount === null) {
      alert('Invalid code. Make sure you typed it correctly.\n\nCodes look like: LUK-X-XXXX-XX');
      return;
    }

    // Track which codes this student has redeemed (one-time per student per code)
    if (!STATE.redeemedCodes) STATE.redeemedCodes = [];
    if (STATE.redeemedCodes.includes(code)) {
      alert('You\'ve already redeemed this code.');
      return;
    }

    STATE.redeemedCodes.push(code);
    awardCoins(amount, reason);
    input.value = '';
  }
