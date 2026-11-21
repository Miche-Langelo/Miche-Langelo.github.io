(() => {
  'use strict';
  const button = document.getElementById('copy-email');
  const link = document.getElementById('contact-email');
  const status = document.getElementById('copy-status');
  const manual = document.getElementById('copy-manual');
  if (!button || !link || !status || !manual) return;

  const email = link.textContent.trim();
  manual.value = email;
  button.hidden = false;
  let resetTimer;
  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    button.disabled = true;
    manual.hidden = true;
    status.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      button.textContent = 'Copied';
      status.textContent = 'Email address copied.';
      resetTimer = setTimeout(() => {
        button.textContent = 'Copy email';
        status.textContent = '';
      }, 4000);
    } catch {
      button.textContent = 'Copy email';
      status.textContent = 'Select the address below to copy it manually.';
      manual.hidden = false;
      manual.focus({ preventScroll: true });
      manual.select();
      manual.setSelectionRange(0, email.length);
    } finally {
      button.disabled = false;
    }
  });
})();
