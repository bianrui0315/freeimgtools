(function () {
  const COFFEE_URL = 'https://buymeacoffee.com/bianrui0315';
  const QR_SRC = '/assets/buymeacoffee-qr.png';

  const TOOL_GROUPS = [
    {
      title: 'Popular',
      links: [
        ['Compress images', '/compress', 'Smaller JPG, PNG, WebP, AVIF'],
        ['Convert formats', '/convert', 'JPG, PNG, WebP, AVIF'],
        ['Resize images', '/resize', 'Custom pixels and presets'],
        ['All tools', '/tools', 'Full FreeImgTools directory'],
      ],
    },
    {
      title: 'Compress by size',
      links: [
        ['Compress to 50KB', '/compress-image-to-50kb', 'Strict upload limits'],
        ['Compress to 100KB', '/compress-image-to-100kb', 'Common form target'],
        ['Compress under 200KB', '/compress-image-under-200kb', 'Portal-friendly files'],
        ['Compress to 500KB', '/compress-image-to-500kb', 'Websites and stores'],
      ],
    },
    {
      title: 'Social sizes',
      links: [
        ['Open Graph image', '/open-graph-image-resizer', '1200 x 630 previews'],
        ['Instagram Story', '/instagram-story-resizer', '1080 x 1920 stories'],
        ['Facebook Cover', '/facebook-cover-photo-resizer', 'Cover photo crop'],
        ['LinkedIn Banner', '/linkedin-banner-resizer', 'Profile header image'],
      ],
    },
    {
      title: 'PDF and GIF',
      links: [
        ['PDF to Image', '/pdf-to-image', 'Export pages without Adobe'],
        ['Image to PDF', '/image-to-pdf', 'Make PDFs without login'],
        ['GIF Maker', '/gif-maker', 'Images to animated GIF'],
        ['PDF tools', '/pdf-tools', 'All PDF workflows'],
      ],
    },
    {
      title: 'SEO and AI',
      links: [
        ['AI Image Tools', '/ai', 'Alt text, captions, tags'],
        ['Website Image SEO Scanner', '/image-seo-audit', 'Audit images on a URL'],
        ['Image SEO Guide', '/guides/image-seo', 'Rank and accessibility basics'],
        ['Product Image SEO', '/guides/product-image-seo', 'Ecommerce image search'],
      ],
    },
    {
      title: 'Ecommerce',
      links: [
        ['Shopify product images', '/shopify-product-image-resizer', '2048 square photos'],
        ['Amazon product images', '/amazon-product-image-resizer', 'Marketplace-ready squares'],
        ['Etsy listing photos', '/etsy-listing-photo-resizer', 'Listing image prep'],
        ['Product photo compressor', '/compress-image-to-500kb', 'Faster product pages'],
      ],
    },
  ];

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]);
  }

  function createToolsMenu() {
    const groups = TOOL_GROUPS.map(group => `
      <section class="nav-tool-group">
        <h3>${escapeHtml(group.title)}</h3>
        ${group.links.map(([label, href, desc]) => `
          <a href="${href}">
            <span>${escapeHtml(label)}</span>
            <small>${escapeHtml(desc)}</small>
          </a>
        `).join('')}
      </section>
    `).join('');

    const wrapper = document.createElement('div');
    wrapper.className = 'nav-tool-dropdown';
    wrapper.innerHTML = `
      <button class="nav-tool-trigger" type="button" aria-expanded="false" aria-controls="nav-tools-panel">
        <span class="nav-tool-spark" aria-hidden="true"></span>
        <span>Tools</span>
        <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4"/></svg>
      </button>
      <div class="nav-tool-panel" id="nav-tools-panel" hidden>
        <div class="nav-tool-panel-head">
          <strong>Find the right image tool</strong>
          <a href="/tools">View all</a>
        </div>
        <div class="nav-tool-groups">${groups}</div>
      </div>
    `;
    return wrapper;
  }

  function createHeaderSupport() {
    const wrapper = document.createElement('div');
    wrapper.className = 'nav-support-menu';
    wrapper.innerHTML = `
      <a class="nav-coffee-button" href="${COFFEE_URL}" target="_blank" rel="noopener" aria-label="Buy me a coffee">
        <span aria-hidden="true">☕</span>
        <span>Buy me a coffee</span>
      </a>
      <button class="nav-qr-toggle" type="button" aria-expanded="false" aria-controls="nav-coffee-qr" aria-label="Show Buy Me a Coffee QR code">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM16 16h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z"/>
        </svg>
      </button>
      <div class="nav-qr-popover" id="nav-coffee-qr" hidden>
        <img src="${QR_SRC}" alt="QR code for Buy Me a Coffee">
        <div>
          <strong>Support FreeImgTools</strong>
          <p>Scan the code or open Buy Me a Coffee.</p>
          <a href="${COFFEE_URL}" target="_blank" rel="noopener">Open Buy Me a Coffee</a>
        </div>
      </div>
    `;
    return wrapper;
  }

  function setDropdownOpen(container, open) {
    const button = container.querySelector('button');
    const panel = container.querySelector('.nav-tool-panel, .nav-qr-popover');
    if (!button || !panel) return;
    button.setAttribute('aria-expanded', String(open));
    container.classList.toggle('is-open', open);
    panel.hidden = !open;
  }

  function enhanceHeader() {
    const nav = document.querySelector('.nav');
    const navInner = document.querySelector('.nav-inner');
    const logo = navInner?.querySelector('.logo');
    if (!nav || !navInner || !logo || navInner.querySelector('.nav-discovery')) return;

    nav.classList.add('nav-enhanced');

    const originalToolsLink = navInner.querySelector('.nav-links a[href="/tools"]');
    originalToolsLink?.closest('li')?.classList.add('nav-tools-original');

    const discovery = document.createElement('div');
    discovery.className = 'nav-discovery';
    discovery.append(createToolsMenu(), createHeaderSupport());
    logo.insertAdjacentElement('afterend', discovery);

    const dropdowns = Array.from(discovery.querySelectorAll('.nav-tool-dropdown, .nav-support-menu'));
    dropdowns.forEach(container => {
      const button = container.querySelector('button');
      button?.addEventListener('click', event => {
        event.preventDefault();
        const nextOpen = button.getAttribute('aria-expanded') !== 'true';
        dropdowns.forEach(other => {
          if (other !== container) setDropdownOpen(other, false);
        });
        setDropdownOpen(container, nextOpen);
      });
    });

    document.addEventListener('click', event => {
      if (discovery.contains(event.target)) return;
      dropdowns.forEach(container => setDropdownOpen(container, false));
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      dropdowns.forEach(container => setDropdownOpen(container, false));
    });
  }

  document.addEventListener('DOMContentLoaded', enhanceHeader);
})();
