(function () {
  const RESULT_SELECTORS = ['#results-section', '#result-section', '#ai-output', '#audit-result'];
  const START_SELECTORS = ['#upload-zone', '#drop-zone'];
  const PANEL_CLASS = 'tool-share-panel';
  const STARTER_CLASS = 'tool-share-starter';

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

  function createPanel(options = {}) {
    const compact = options.compact === true;
    const nextLinks = compact ? [] : recommendationsForPath(location.pathname);
    const panel = document.createElement('div');
    panel.className = compact ? `${PANEL_CLASS} ${STARTER_CLASS}` : PANEL_CLASS;
    panel.innerHTML = `
      <div class="tool-share-copy">
        <strong>${compact ? 'Share this tool' : 'Finished?'}</strong>
        <span>${compact ? 'Copy, share, bookmark, or open FreeImgTools on your phone.' : 'Share this free tool or open it later on your phone.'}</span>
      </div>
      <div class="tool-share-actions">
        <button type="button" data-share-action="share">Share this tool</button>
        <button type="button" data-share-action="copy">Copy link</button>
        <button type="button" data-share-action="phone">Use this on phone</button>
        <button type="button" data-share-action="bookmark">Bookmark this tool</button>
      </div>
      ${nextLinks.length ? `
        <div class="tool-share-next">
          <strong>Recommended next</strong>
          <div>${nextLinks.map(link => `<a href="${link.href}">${link.label}</a>`).join('')}</div>
        </div>
      ` : ''}
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

  function recommendationsForPath(pathname) {
    const path = pathname.replace(/\.html$/, '');
    if (path.includes('compress')) {
      return [
        { href: '/resize', label: 'Resize before compressing' },
        { href: '/image-seo-audit', label: 'Scan website images' },
        { href: '/guides/compress-image-to-target-size', label: 'Target size guide' },
      ];
    }
    if (path.includes('shopify') || path.includes('amazon') || path.includes('etsy') || path.includes('product')) {
      return [
        { href: '/compress-image-to-500kb', label: 'Compress product images' },
        { href: '/ai', label: 'Generate product alt text' },
        { href: '/guides/product-image-seo', label: 'Product image SEO guide' },
      ];
    }
    if (path.includes('resize') || path.includes('banner') || path.includes('cover') || path.includes('story')) {
      return [
        { href: '/compress-image-to-500kb', label: 'Compress resized image' },
        { href: '/open-graph-image-resizer', label: 'Make social preview' },
        { href: '/guides/social-media-image-sizes', label: 'Social size guide' },
      ];
    }
    if (path.includes('pdf')) {
      return [
        { href: '/compress-image-to-500kb', label: 'Compress extracted images' },
        { href: '/image-to-pdf', label: 'Make a PDF from photos' },
        { href: '/pdf-tools', label: 'All PDF image tools' },
      ];
    }
    if (path.includes('ai') || path.includes('image-seo-audit')) {
      return [
        { href: '/guides/image-seo', label: 'Image SEO guide' },
        { href: '/compress-image-to-500kb', label: 'Compress large images' },
        { href: '/tools', label: 'Browse all tools' },
      ];
    }
    return [
      { href: '/tools', label: 'Browse all tools' },
      { href: '/image-seo-audit', label: 'Scan website images' },
      { href: '/compress-image-to-500kb', label: 'Compress to 500KB' },
    ];
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

  function attachStarterPanel(node) {
    if (!node || node.dataset.shareStarterAttached === 'true') return;
    node.dataset.shareStarterAttached = 'true';
    node.insertAdjacentElement('afterend', createPanel({ compact: true }));
  }

  function scan() {
    START_SELECTORS
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)
      .forEach(attachStarterPanel);

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
