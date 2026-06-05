let configPromise;
let scriptPromise;

export async function getSecurityConfig() {
  if (!configPromise) {
    configPromise = fetch('/api/security-config')
      .then(async res => {
        const data = await res.json().catch(() => ({}));
        return res.ok ? data : {};
      })
      .catch(() => ({}));
  }
  return configPromise;
}

export function createTurnstileGuard({ container, showToast = () => {} }) {
  const state = {
    enabled: false,
    token: '',
    widgetId: null,
    ready: null,
  };

  state.ready = init();

  async function init() {
    if (!container) return;

    const config = await getSecurityConfig();
    const turnstileConfig = config.turnstile || {};

    if (!turnstileConfig.enabled) {
      container.classList.add('hidden');
      return;
    }

    state.enabled = true;
    container.classList.remove('hidden');
    container.innerHTML = `
      <div class="human-check-label">Human verification</div>
      <div class="human-check-widget"></div>
      <p>Complete this check before using AI or scanner features.</p>
    `;

    await loadTurnstileScript();

    const widgetTarget = container.querySelector('.human-check-widget');
    state.widgetId = window.turnstile.render(widgetTarget, {
      sitekey: turnstileConfig.siteKey,
      theme: 'auto',
      callback: token => {
        state.token = token;
        container.classList.remove('human-check-error');
      },
      'expired-callback': () => {
        state.token = '';
      },
      'error-callback': () => {
        state.token = '';
        container.classList.add('human-check-error');
        showToast('Human verification could not load. Please refresh and try again.');
      },
    });
  }

  async function getToken() {
    await state.ready;
    if (!state.enabled) return '';
    if (state.token) return state.token;
    container?.classList.add('human-check-error');
    throw new Error('Please complete the human verification check first.');
  }

  function reset() {
    if (!state.enabled || state.widgetId === null || !window.turnstile) return;
    state.token = '';
    window.turnstile.reset(state.widgetId);
  }

  return { getToken, reset };
}

async function loadTurnstileScript() {
  if (window.turnstile) return;
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Could not load human verification.'));
      document.head.appendChild(script);
    });
  }
  await scriptPromise;
}
