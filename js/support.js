(function () {
  const COFFEE_URL = 'https://buymeacoffee.com/bianrui0315';
  const QR_SRC = '/assets/buymeacoffee-qr.png';

  function createSupportSection() {
    const section = document.createElement('section');
    section.className = 'support-section';
    section.setAttribute('aria-labelledby', 'support-title');
    section.innerHTML = `
      <div class="support-inner">
        <div class="support-copy">
          <span class="support-kicker">Support FreeImgTools</span>
          <h2 id="support-title">Buy me a coffee</h2>
          <p>If these free browser image tools saved you time, you can support continued development, guides, maintenance, and open-source improvements.</p>
          <a class="support-button" href="${COFFEE_URL}" target="_blank" rel="noopener">Buy me a coffee</a>
        </div>
        <a class="support-qr" href="${COFFEE_URL}" target="_blank" rel="noopener" aria-label="Open Buy Me a Coffee for Rui Bian">
          <img src="${QR_SRC}" alt="QR code for Buy Me a Coffee">
          <span>Scan to support</span>
        </a>
      </div>
    `;
    return section;
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.support-section')) return;

    const footer = document.querySelector('footer');
    const section = createSupportSection();
    if (footer?.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  });
})();
