/**
 * Cookie Consent + AdSense Loader
 * - Checks stored consent before loading AdSense
 * - Shows GDPR banner on first visit
 * - accepted  → load AdSense normally
 * - declined  → do not load AdSense
 * - no choice → show banner (AdSense not loaded until accepted)
 */
(function () {
  'use strict';

  var KEY = 'cookie_consent';          // localStorage key
  var LANG_KEY = 'freeimgtools_lang';
  var CLIENT = 'ca-pub-7946557800571551';
  var consent = localStorage.getItem(KEY);
  var lang = getLang();
  var copy = getCopy(lang);

  function getLang() {
    var params = new URLSearchParams(location.search);
    var code = params.get('lang') || localStorage.getItem(LANG_KEY) || (navigator.language || '').slice(0, 2) || 'en';
    return getCopy(code) ? code : 'en';
  }

  function getCopy(code) {
    var copies = {
      en: {
        label: 'Cookie consent',
        title: 'This site uses cookies',
        text: 'We use cookies to serve ads and analyse traffic. Ads help keep all tools free. You can accept, decline, or read our ',
        privacy: 'Privacy Policy',
        decline: 'Decline',
        accept: 'Accept All'
      },
      zh: {
        label: 'Cookie 同意',
        title: '本站使用 Cookie',
        text: '我们使用 Cookie 来展示广告并分析流量。广告帮助免费工具持续运行。你可以接受、拒绝，或阅读我们的',
        privacy: '隐私政策',
        decline: '拒绝',
        accept: '全部接受'
      },
      es: {
        label: 'Consentimiento de cookies',
        title: 'Este sitio usa cookies',
        text: 'Usamos cookies para mostrar anuncios y analizar tráfico. Los anuncios ayudan a mantener gratis las herramientas. Puedes aceptar, rechazar o leer nuestra ',
        privacy: 'Política de privacidad',
        decline: 'Rechazar',
        accept: 'Aceptar todo'
      },
      ja: {
        label: 'Cookie 同意',
        title: 'このサイトは Cookie を使用します',
        text: '広告表示とアクセス解析のために Cookie を使用します。広告は無料ツールの運営を支えます。承諾、拒否、または',
        privacy: 'プライバシーポリシー',
        decline: '拒否',
        accept: 'すべて承諾'
      },
      la: {
        label: 'Consensus crustulorum',
        title: 'Hic situs crustula utitur',
        text: 'Crustula ad nuntios et mensuram frequentiae utimur. Nuntii instrumenta gratuita servant. Potes accipere, recusare, aut legere ',
        privacy: 'Regula privata',
        decline: 'Recusa',
        accept: 'Omnia accipe'
      },
      fr: {
        label: 'Consentement aux cookies',
        title: 'Ce site utilise des cookies',
        text: 'Nous utilisons des cookies pour les annonces et l’analyse du trafic. Les annonces aident à garder les outils gratuits. Vous pouvez accepter, refuser ou lire notre ',
        privacy: 'Politique de confidentialité',
        decline: 'Refuser',
        accept: 'Tout accepter'
      },
      de: {
        label: 'Cookie-Einwilligung',
        title: 'Diese Website verwendet Cookies',
        text: 'Wir verwenden Cookies für Anzeigen und Traffic-Analyse. Anzeigen helfen, alle Tools kostenlos zu halten. Du kannst akzeptieren, ablehnen oder unsere ',
        privacy: 'Datenschutzerklärung',
        decline: 'Ablehnen',
        accept: 'Alle akzeptieren'
      }
    };
    return copies[code];
  }

  /* ── Load AdSense ──────────────────────────────────────────────────────── */
  function loadAdSense() {
    if (document.getElementById('freeimgtools-adsense-script')) return; // already loaded
    var s = document.createElement('script');
    s.id = 'freeimgtools-adsense-script';
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + CLIENT;
    document.head.appendChild(s);
  }

  /* ── Act on stored preference immediately ──────────────────────────────── */
  if (consent === 'accepted') {
    loadAdSense();
  }
  // 'declined' or null → don't load AdSense yet

  /* ── Banner (only if no preference stored) ─────────────────────────────── */
  if (!consent) {
    document.addEventListener('DOMContentLoaded', function () {
      showBanner();
    });
  }

  /* ── Expose a way for users to re-open settings ─────────────────────────── */
  window.__cookieConsent = {
    reset: function () {
      localStorage.removeItem(KEY);
      location.reload();
    },
    getStatus: function () {
      return localStorage.getItem(KEY);
    }
  };

  /* ── Banner UI ──────────────────────────────────────────────────────────── */
  function showBanner() {
    if (document.getElementById('cc-banner')) return;

    var banner = document.createElement('div');
    banner.id = 'cc-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', copy.label);
    banner.innerHTML = [
      '<div id="cc-inner">',
      '  <div id="cc-text">',
      '    <strong>' + copy.title + '</strong>',
      '    <p>' + copy.text,
      '    <a href="/privacy" id="cc-privacy-link">' + copy.privacy + '</a>.</p>',
      '  </div>',
      '  <div id="cc-btns">',
      '    <button id="cc-decline">' + copy.decline + '</button>',
      '    <button id="cc-accept">' + copy.accept + '</button>',
      '  </div>',
      '</div>'
    ].join('');

    /* ── Inline styles — no external CSS dependency ───────────────────────── */
    var css = [
      '#cc-banner{',
      '  position:fixed;bottom:0;left:0;right:0;z-index:99999;',
      '  padding:0 1rem 1rem;',
      '  pointer-events:none;',            // let clicks through the padding area
      '}',
      '#cc-inner{',
      '  max-width:720px;margin:0 auto;',
      '  background:rgba(255,255,255,0.92);',
      '  backdrop-filter:blur(24px) saturate(180%);',
      '  -webkit-backdrop-filter:blur(24px) saturate(180%);',
      '  border:1px solid rgba(0,0,0,0.10);',
      '  border-radius:16px;',
      '  padding:1.25rem 1.5rem;',
      '  display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;',
      '  box-shadow:0 8px 40px rgba(0,0,0,0.14);',
      '  pointer-events:all;',
      '  animation:cc-slide-up 0.35s cubic-bezier(0.34,1.56,0.64,1) both;',
      '}',
      '@media(prefers-color-scheme:dark){',
      '  #cc-inner{',
      '    background:rgba(28,28,30,0.92);',
      '    border-color:rgba(255,255,255,0.12);',
      '  }',
      '  #cc-text,#cc-text p{color:#e5e5ea;}',
      '  #cc-privacy-link{color:#0a84ff;}',
      '}',
      '#cc-text{flex:1;min-width:200px;}',
      '#cc-text strong{font-size:0.95rem;font-weight:700;color:#1c1c1e;display:block;margin-bottom:0.3rem;}',
      '@media(prefers-color-scheme:dark){#cc-text strong{color:#f2f2f7;}}',
      '#cc-text p{font-size:0.82rem;line-height:1.6;color:#48484a;margin:0;}',
      '#cc-privacy-link{color:#007AFF;text-decoration:none;}',
      '#cc-privacy-link:hover{text-decoration:underline;}',
      '#cc-btns{display:flex;gap:0.6rem;flex-shrink:0;}',
      '#cc-decline,#cc-accept{',
      '  border:none;border-radius:980px;',
      '  padding:0.55rem 1.25rem;',
      '  font-size:0.875rem;font-weight:600;',
      '  cursor:pointer;transition:opacity .15s,transform .15s;',
      '}',
      '#cc-decline:hover,#cc-accept:hover{opacity:.85;transform:scale(0.97);}',
      '#cc-decline{',
      '  background:rgba(0,0,0,0.07);',
      '  color:#1c1c1e;',
      '}',
      '@media(prefers-color-scheme:dark){',
      '  #cc-decline{background:rgba(255,255,255,0.12);color:#f2f2f7;}',
      '}',
      '#cc-accept{',
      '  background:#007AFF;color:#fff;',
      '}',
      '@keyframes cc-slide-up{',
      '  from{opacity:0;transform:translateY(24px);}',
      '  to{opacity:1;transform:translateY(0);}',
      '}',
      '@media(max-width:540px){',
      '  #cc-inner{flex-direction:column;gap:1rem;}',
      '  #cc-btns{width:100%;justify-content:flex-end;}',
      '}'
    ].join('');

    var styleEl = document.createElement('style');
    styleEl.id = 'cc-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    document.body.appendChild(banner);

    /* ── Button handlers ─────────────────────────────────────────────────── */
    document.getElementById('cc-accept').addEventListener('click', function () {
      localStorage.setItem(KEY, 'accepted');
      removeBanner();
      loadAdSense();
    });

    document.getElementById('cc-decline').addEventListener('click', function () {
      localStorage.setItem(KEY, 'declined');
      removeBanner();
      // AdSense is not loaded
    });
  }

  function removeBanner() {
    var b = document.getElementById('cc-banner');
    var s = document.getElementById('cc-styles');
    if (b) b.remove();
    if (s) s.remove();
  }

}());
