(function () {
  const RESULT_SELECTORS = ['#results-section', '#result-section', '#ai-output', '#audit-result'];
  const PANEL_CLASS = 'tool-share-panel';

  function canonicalUrl() {
    return document.querySelector('link[rel="canonical"]')?.href || window.location.href.split('#')[0];
  }

  function toolTitle() {
    return document.querySelector('h1')?.textContent?.trim() || document.title.replace(/\s*[—|-].*$/, '').trim() || 'FreeImgTools';
  }

  function toast(message) {
    let node = document.getElementById('tool-share-toast');
    if (!node) {
      node = document.createElement('div');
      node.id = 'tool-share-toast';
      node.className = 'toast';
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add('show');
    window.clearTimeout(node._hideTimer);
    node._hideTimer = window.setTimeout(() => node.classList.remove('show'), 2600);
  }

  async function copyText(text, message = 'Link copied') {
    try {
      await navigator.clipboard.writeText(text);
      toast(message);
    } catch {
      const input = document.createElement('textarea');
      input.value = text;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      toast(message);
    }
  }

  function createPanel() {
    const panel = document.createElement('div');
    panel.className = PANEL_CLASS;
    panel.innerHTML = `
      <div class="tool-share-copy">
        <strong>Finished?</strong>
        <span>Share this free tool or open it later on your phone.</span>
      </div>
      <div class="tool-share-actions">
        <button type="button" data-share-action="share">Share this tool</button>
        <button type="button" data-share-action="copy">Copy link</button>
        <button type="button" data-share-action="phone">Use this on phone</button>
        <button type="button" data-share-action="bookmark">Bookmark this tool</button>
      </div>
      <div class="tool-share-phone hidden">
        <img src="/assets/freeimgtools-qr.svg" alt="QR code for FreeImgTools">
        <p>Scan to open FreeImgTools on your phone. For this exact tool page, use Copy link and send it to your phone.</p>
      </div>
    `;

    panel.addEventListener('click', async (event) => {
      const button = event.target.closest('button[data-share-action]');
      if (!button) return;
      const url = canonicalUrl();
      const title = toolTitle();

      if (button.dataset.shareAction === 'share') {
        if (navigator.share) {
          try {
            await navigator.share({ title, text: `${title} on FreeImgTools`, url });
            return;
          } catch (error) {
            if (error?.name === 'AbortError') return;
          }
        }
        await copyText(url, 'Share link copied');
      }

      if (button.dataset.shareAction === 'copy') {
        await copyText(url);
      }

      if (button.dataset.shareAction === 'phone') {
        panel.querySelector('.tool-share-phone')?.classList.toggle('hidden');
      }

      if (button.dataset.shareAction === 'bookmark') {
        const shortcut = /Mac|iPhone|iPad/.test(navigator.platform) ? 'Command+D' : 'Ctrl+D';
        toast(`Press ${shortcut} to bookmark this tool`);
      }
    });

    return panel;
  }

  function isVisible(node) {
    if (!node || node.classList.contains('hidden')) return false;
    const style = window.getComputedStyle(node);
    return style.display !== 'none' && style.visibility !== 'hidden';
  }

  function attachPanel(node) {
    if (!node || node.querySelector(`:scope > .${PANEL_CLASS}`)) return;
    node.appendChild(createPanel());
  }

  function scan() {
    RESULT_SELECTORS
      .map((selector) => document.querySelector(selector))
      .filter(isVisible)
      .forEach(attachPanel);
  }

  function show(target) {
    const node = typeof target === 'string' ? document.querySelector(target) : target;
    if (node) {
      attachPanel(node);
      return;
    }
    scan();
  }

  window.FreeImgToolsShare = { show };

  document.addEventListener('DOMContentLoaded', () => {
    scan();
    const observer = new MutationObserver(scan);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style', 'disabled'],
    });
  });
})();
