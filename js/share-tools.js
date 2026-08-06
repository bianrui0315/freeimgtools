(function () {
  const RESULT_SELECTORS = ['#results-section', '#result-section', '#ai-output', '#audit-result'];
  const START_SELECTORS = ['#upload-zone', '#drop-zone'];
  const PANEL_CLASS = 'tool-share-panel';
  const STARTER_CLASS = 'tool-share-starter';
  const RECENT_KEY = 'freeimgtools_recent_tools_v1';
  const SAVED_KEY = 'freeimgtools_saved_tools_v1';
  const COMPLETED_KEY = 'freeimgtools_completed_fixes_v1';
  const MAX_RECENT = 10;

  const COPY = {
    en: {
      myTools: 'My tools', myToolsTitle: 'Your shortcuts', empty: 'Use a tool once and it will show up here.', browse: 'Browse all tools',
      saved: 'Saved', recent: 'Recent', remove: 'Remove saved tool', done: 'Done. One less annoying thing.', shareStarter: 'Keep this shortcut',
      doneText: 'Next time a file fights back, remember FreeImgTools.net.', starterText: 'Save, share, or move this free tool to your phone.',
      share: 'Share this tool', copy: 'Copy link', phone: 'Use this on phone', save: 'Save for next time', savedButton: 'Saved to My tools',
      recommended: 'Try next', phoneText: 'Scan to open FreeImgTools on your phone. To send this exact page, tap Copy link.',
      copied: 'Link copied', shareCopied: 'Share link copied', savedToast: 'Saved in My tools for next time', removedToast: 'Removed from My tools',
      fixes: count => `${count} fixes finished on this device`,
      next: { resizeBefore: 'Resize before compressing', scanImages: 'Scan website images', targetGuide: 'Target size guide', compressProducts: 'Compress product images', productAlt: 'Generate product alt text', productGuide: 'Product image SEO guide', compressResized: 'Compress resized image', socialPreview: 'Make social preview', socialGuide: 'Social size guide', compressExtracted: 'Compress extracted images', makePdf: 'Make a PDF from photos', pdfTools: 'All PDF image tools', seoGuide: 'Image SEO guide', compressLarge: 'Compress large images', browseTools: 'Browse all tools', compress500: 'Compress to 500KB' },
    },
    zh: {
      myTools: '我的工具', myToolsTitle: '你的快捷入口', empty: '用过一次的工具会自动出现在这里。', browse: '浏览全部工具',
      saved: '已保存', recent: '最近使用', remove: '移除已保存工具', done: '完成。又少了一件烦心事。', shareStarter: '留住这个快捷工具',
      doneText: '下次文件又不听话，记住 FreeImgTools.net。', starterText: '保存、分享，或放到手机上继续使用。',
      share: '分享工具', copy: '复制链接', phone: '手机上使用', save: '保存下次再用', savedButton: '已保存到我的工具',
      recommended: '接着可以做', phoneText: '扫码在手机打开 FreeImgTools。要发送当前页面，请点“复制链接”。',
      copied: '链接已复制', shareCopied: '分享链接已复制', savedToast: '已保存到“我的工具”', removedToast: '已从“我的工具”移除',
      fixes: count => `这台设备已完成 ${count} 次处理`,
      next: { resizeBefore: '压缩前先调整尺寸', scanImages: '扫描网站图片', targetGuide: '目标大小指南', compressProducts: '压缩商品图片', productAlt: '生成商品 Alt 文本', productGuide: '商品图片 SEO 指南', compressResized: '压缩调整后的图片', socialPreview: '制作社交预览图', socialGuide: '社交图片尺寸指南', compressExtracted: '压缩导出的图片', makePdf: '用照片制作 PDF', pdfTools: '全部 PDF 图片工具', seoGuide: '图片 SEO 指南', compressLarge: '压缩大图片', browseTools: '浏览全部工具', compress500: '压缩到 500KB' },
    },
    es: {
      myTools: 'Mis herramientas', myToolsTitle: 'Tus accesos directos', empty: 'Las herramientas usadas aparecerán aquí.', browse: 'Ver todas',
      saved: 'Guardada', recent: 'Reciente', remove: 'Quitar herramienta', done: 'Listo. Un problema menos.', shareStarter: 'Guarda este atajo',
      doneText: 'La próxima vez, recuerda FreeImgTools.net.', starterText: 'Guarda, comparte o abre esta herramienta en tu móvil.',
      share: 'Compartir', copy: 'Copiar enlace', phone: 'Usar en móvil', save: 'Guardar para después', savedButton: 'Guardada en Mis herramientas',
      recommended: 'Prueba ahora', phoneText: 'Escanea para abrir FreeImgTools en tu móvil. Para esta página exacta, copia el enlace.',
      copied: 'Enlace copiado', shareCopied: 'Enlace para compartir copiado', savedToast: 'Guardada para la próxima vez', removedToast: 'Eliminada de Mis herramientas',
      fixes: count => `${count} tareas terminadas en este dispositivo`,
      next: { resizeBefore: 'Redimensionar antes de comprimir', scanImages: 'Revisar imágenes web', targetGuide: 'Guía de tamaño objetivo', compressProducts: 'Comprimir fotos de producto', productAlt: 'Generar alt de producto', productGuide: 'Guía SEO de producto', compressResized: 'Comprimir imagen redimensionada', socialPreview: 'Crear vista social', socialGuide: 'Guía de tamaños sociales', compressExtracted: 'Comprimir imágenes extraídas', makePdf: 'Crear PDF con fotos', pdfTools: 'Todas las herramientas PDF', seoGuide: 'Guía SEO de imágenes', compressLarge: 'Comprimir imágenes grandes', browseTools: 'Ver todas las herramientas', compress500: 'Comprimir a 500KB' },
    },
    ja: {
      myTools: 'マイツール', myToolsTitle: 'いつもの近道', empty: '一度使ったツールがここに表示されます。', browse: 'すべて見る',
      saved: '保存済み', recent: '最近', remove: '保存から削除', done: '完了。面倒が一つ減りました。', shareStarter: 'この近道を保存',
      doneText: '次にファイルで困ったら FreeImgTools.net を思い出してください。', starterText: '保存、共有、スマホで続けられます。',
      share: '共有', copy: 'リンクをコピー', phone: 'スマホで使う', save: '次回用に保存', savedButton: 'マイツールに保存済み',
      recommended: '次におすすめ', phoneText: 'QRコードでスマホから開けます。このページを送るにはリンクをコピーしてください。',
      copied: 'リンクをコピーしました', shareCopied: '共有リンクをコピーしました', savedToast: 'マイツールに保存しました', removedToast: 'マイツールから削除しました',
      fixes: count => `この端末で ${count} 回完了`,
      next: { resizeBefore: '圧縮前にサイズ変更', scanImages: 'サイト画像をチェック', targetGuide: '目標サイズガイド', compressProducts: '商品画像を圧縮', productAlt: '商品 Alt テキストを生成', productGuide: '商品画像 SEO ガイド', compressResized: '変更後の画像を圧縮', socialPreview: 'SNSプレビューを作る', socialGuide: 'SNSサイズガイド', compressExtracted: '書き出した画像を圧縮', makePdf: '写真からPDFを作る', pdfTools: 'すべてのPDF画像ツール', seoGuide: '画像SEOガイド', compressLarge: '大きな画像を圧縮', browseTools: 'すべてのツール', compress500: '500KBに圧縮' },
    },
    la: {
      myTools: 'Instrumenta mea', myToolsTitle: 'Compendia tua', empty: 'Instrumenta semel adhibita hic apparebunt.', browse: 'Omnia instrumenta',
      saved: 'Servatum', recent: 'Recens', remove: 'Instrumentum remove', done: 'Perfectum. Una molestia minor.', shareStarter: 'Hoc compendium serva',
      doneText: 'Proximo tempore FreeImgTools.net memento.', starterText: 'Serva, communica, vel in telephono aperi.',
      share: 'Communica', copy: 'Nexum copia', phone: 'In telephono', save: 'In posterum serva', savedButton: 'In instrumentis servatum',
      recommended: 'Deinde tenta', phoneText: 'Codicem explora ut FreeImgTools in telephono aperias. Hanc paginam mitte per nexum.',
      copied: 'Nexus copiatus', shareCopied: 'Nexus communicandus copiatus', savedToast: 'In instrumentis servatum', removedToast: 'Ex instrumentis remotum',
      fixes: count => `${count} opera in hoc instrumento perfecta`,
      next: { resizeBefore: 'Ante compressionem redige', scanImages: 'Imagines situs inspice', targetGuide: 'Dux magnitudinis', compressProducts: 'Imagines producti comprime', productAlt: 'Textum alt producti genera', productGuide: 'Dux SEO producti', compressResized: 'Imaginem redactam comprime', socialPreview: 'Praevisionem socialem fac', socialGuide: 'Dux mensurarum socialium', compressExtracted: 'Imagines extractas comprime', makePdf: 'PDF ex imaginibus fac', pdfTools: 'Omnia instrumenta PDF', seoGuide: 'Dux SEO imaginum', compressLarge: 'Imagines magnas comprime', browseTools: 'Omnia instrumenta', compress500: 'Ad 500KB comprime' },
    },
    fr: {
      myTools: 'Mes outils', myToolsTitle: 'Vos raccourcis', empty: 'Les outils utilisés apparaîtront ici.', browse: 'Voir tous les outils',
      saved: 'Enregistré', recent: 'Récent', remove: 'Retirer l’outil', done: 'Terminé. Un souci de moins.', shareStarter: 'Gardez ce raccourci',
      doneText: 'La prochaine fois, pensez à FreeImgTools.net.', starterText: 'Enregistrez, partagez ou ouvrez cet outil sur mobile.',
      share: 'Partager', copy: 'Copier le lien', phone: 'Utiliser sur mobile', save: 'Garder pour plus tard', savedButton: 'Enregistré dans Mes outils',
      recommended: 'À essayer ensuite', phoneText: 'Scannez pour ouvrir FreeImgTools sur mobile. Pour cette page précise, copiez le lien.',
      copied: 'Lien copié', shareCopied: 'Lien de partage copié', savedToast: 'Enregistré pour la prochaine fois', removedToast: 'Retiré de Mes outils',
      fixes: count => `${count} tâches terminées sur cet appareil`,
      next: { resizeBefore: 'Redimensionner avant compression', scanImages: 'Vérifier les images du site', targetGuide: 'Guide de taille cible', compressProducts: 'Compresser les images produit', productAlt: 'Générer le texte alt produit', productGuide: 'Guide SEO image produit', compressResized: 'Compresser l’image redimensionnée', socialPreview: 'Créer un aperçu social', socialGuide: 'Guide des tailles sociales', compressExtracted: 'Compresser les images extraites', makePdf: 'Créer un PDF avec des photos', pdfTools: 'Tous les outils PDF', seoGuide: 'Guide SEO image', compressLarge: 'Compresser les grandes images', browseTools: 'Voir tous les outils', compress500: 'Compresser à 500KB' },
    },
    de: {
      myTools: 'Meine Tools', myToolsTitle: 'Deine Schnellzugriffe', empty: 'Einmal verwendete Tools erscheinen hier.', browse: 'Alle Tools',
      saved: 'Gespeichert', recent: 'Zuletzt', remove: 'Tool entfernen', done: 'Fertig. Ein Problem weniger.', shareStarter: 'Diesen Zugriff speichern',
      doneText: 'Beim nächsten Dateiproblem: FreeImgTools.net.', starterText: 'Speichern, teilen oder auf dem Handy weiterverwenden.',
      share: 'Tool teilen', copy: 'Link kopieren', phone: 'Auf dem Handy', save: 'Für später speichern', savedButton: 'In Meine Tools gespeichert',
      recommended: 'Als Nächstes', phoneText: 'Scannen und FreeImgTools auf dem Handy öffnen. Für genau diese Seite den Link kopieren.',
      copied: 'Link kopiert', shareCopied: 'Freigabelink kopiert', savedToast: 'Für das nächste Mal gespeichert', removedToast: 'Aus Meine Tools entfernt',
      fixes: count => `${count} Aufgaben auf diesem Gerät erledigt`,
      next: { resizeBefore: 'Vor dem Komprimieren skalieren', scanImages: 'Website-Bilder prüfen', targetGuide: 'Zielgrößen-Leitfaden', compressProducts: 'Produktbilder komprimieren', productAlt: 'Produkt-Alt-Text erzeugen', productGuide: 'Produktbild-SEO-Leitfaden', compressResized: 'Skaliertes Bild komprimieren', socialPreview: 'Social-Vorschau erstellen', socialGuide: 'Social-Größen-Leitfaden', compressExtracted: 'Extrahierte Bilder komprimieren', makePdf: 'PDF aus Fotos erstellen', pdfTools: 'Alle PDF-Bildtools', seoGuide: 'Bild-SEO-Leitfaden', compressLarge: 'Große Bilder komprimieren', browseTools: 'Alle Tools', compress500: 'Auf 500KB komprimieren' },
    },
  };

  function language() {
    const code = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return COPY[code] ? code : 'en';
  }

  function text(key) {
    return COPY[language()][key] || COPY.en[key] || key;
  }

  function nextText(key) {
    return COPY[language()].next?.[key] || COPY.en.next[key] || key;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[char]);
  }

  function readList(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value.filter(item => item && item.path && item.title) : [];
    } catch {
      return [];
    }
  }

  function writeList(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Browsing modes that block storage still keep every tool usable.
    }
  }

  function normalizedPath(pathname = location.pathname) {
    const path = pathname.replace(/\.html$/, '').replace(/\/$/, '');
    return path || '/';
  }

  function canonicalUrl() {
    return document.querySelector('link[rel="canonical"]')?.href || window.location.href.split('#')[0].split('?')[0];
  }

  function toolTitle() {
    return document.querySelector('h1')?.textContent?.trim() || document.title.replace(/\s*[—|-].*$/, '').trim() || 'FreeImgTools';
  }

  function currentTool() {
    return {
      path: normalizedPath(),
      url: canonicalUrl(),
      title: toolTitle(),
      visitedAt: Date.now(),
    };
  }

  function isToolPage() {
    const path = normalizedPath();
    const excluded = new Set(['/', '/about', '/contact', '/privacy', '/terms', '/disclaimer', '/tools', '/guides', '/404']);
    if (excluded.has(path) || path.startsWith('/guides/')) return false;
    return Boolean(document.querySelector('#upload-zone, #drop-zone, #file-input, #url-input, .tool-layout, .ai-workspace'));
  }

  function recentTools() {
    return readList(RECENT_KEY);
  }

  function savedTools() {
    return readList(SAVED_KEY);
  }

  function isSaved(path = normalizedPath()) {
    return savedTools().some(item => item.path === normalizedPath(path));
  }

  function notifyMemoryChange() {
    document.dispatchEvent(new CustomEvent('freeimgtools:memory-change', {
      detail: { recent: recentTools(), saved: savedTools(), completed: completedCount() },
    }));
  }

  function rememberVisit() {
    if (!isToolPage()) return;
    const tool = currentTool();
    const next = [tool, ...recentTools().filter(item => item.path !== tool.path)].slice(0, MAX_RECENT);
    writeList(RECENT_KEY, next);
    notifyMemoryChange();
  }

  function toggleSaved(tool = currentTool()) {
    const saved = savedTools();
    const exists = saved.some(item => item.path === tool.path);
    const next = exists
      ? saved.filter(item => item.path !== tool.path)
      : [{ ...tool, savedAt: Date.now() }, ...saved.filter(item => item.path !== tool.path)].slice(0, MAX_RECENT);
    writeList(SAVED_KEY, next);
    notifyMemoryChange();
    return !exists;
  }

  function completedCount() {
    const value = Number.parseInt(localStorage.getItem(COMPLETED_KEY) || '0', 10);
    return Number.isFinite(value) && value > 0 ? value : 0;
  }

  function recordCompletion(node) {
    if (!node || node.dataset.fitCompletionRecorded === 'true') return;
    node.dataset.fitCompletionRecorded = 'true';
    try {
      localStorage.setItem(COMPLETED_KEY, String(completedCount() + 1));
    } catch {
      // Completion feedback does not depend on storage access.
    }
    notifyMemoryChange();
  }

  function combinedTools() {
    const saved = savedTools().map(item => ({ ...item, kind: 'saved' }));
    const savedPaths = new Set(saved.map(item => item.path));
    const recent = recentTools()
      .filter(item => !savedPaths.has(item.path))
      .map(item => ({ ...item, kind: 'recent' }));
    return [...saved, ...recent].slice(0, 6);
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

  async function copyText(value, message = text('copied')) {
    try {
      await navigator.clipboard.writeText(value);
      toast(message);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
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

  function recommendationsForPath(pathname) {
    const path = normalizedPath(pathname);
    let links;
    if (path.includes('compress')) {
      links = [
        { href: '/resize', label: nextText('resizeBefore') },
        { href: '/image-seo-audit', label: nextText('scanImages') },
        { href: '/guides/compress-image-to-target-size', label: nextText('targetGuide') },
      ];
    } else if (path.includes('shopify') || path.includes('amazon') || path.includes('etsy') || path.includes('product')) {
      links = [
        { href: '/compress-image-to-500kb', label: nextText('compressProducts') },
        { href: '/ai', label: nextText('productAlt') },
        { href: '/guides/product-image-seo', label: nextText('productGuide') },
      ];
    } else if (path.includes('resize') || path.includes('banner') || path.includes('cover') || path.includes('story')) {
      links = [
        { href: '/compress-image-to-500kb', label: nextText('compressResized') },
        { href: '/open-graph-image-resizer', label: nextText('socialPreview') },
        { href: '/guides/social-media-image-sizes', label: nextText('socialGuide') },
      ];
    } else if (path.includes('pdf')) {
      links = [
        { href: '/compress-image-to-500kb', label: nextText('compressExtracted') },
        { href: '/image-to-pdf', label: nextText('makePdf') },
        { href: '/pdf-tools', label: nextText('pdfTools') },
      ];
    } else if (path.includes('ai') || path.includes('image-seo-audit')) {
      links = [
        { href: '/guides/image-seo', label: nextText('seoGuide') },
        { href: '/compress-image-to-500kb', label: nextText('compressLarge') },
        { href: '/tools', label: nextText('browseTools') },
      ];
    } else {
      links = [
        { href: '/tools', label: nextText('browseTools') },
        { href: '/image-seo-audit', label: nextText('scanImages') },
        { href: '/compress-image-to-500kb', label: nextText('compress500') },
      ];
    }
    return links.filter(link => normalizedPath(link.href) !== path);
  }

  function createPanel(options = {}) {
    const compact = options.compact === true;
    const nextLinks = compact ? [] : recommendationsForPath(location.pathname);
    const panel = document.createElement('div');
    panel.className = compact ? `${PANEL_CLASS} ${STARTER_CLASS}` : PANEL_CLASS;
    panel.innerHTML = `
      <div class="tool-share-success" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg>
      </div>
      <div class="tool-share-copy">
        <strong>${escapeHtml(compact ? text('shareStarter') : text('done'))}</strong>
        <span>${escapeHtml(compact ? text('starterText') : text('doneText'))}</span>
        ${!compact && completedCount() > 1 ? `<small class="tool-share-streak">${escapeHtml(text('fixes')(completedCount()))}</small>` : ''}
      </div>
      <div class="tool-share-actions">
        <button type="button" data-share-action="share">${escapeHtml(text('share'))}</button>
        <button type="button" data-share-action="copy">${escapeHtml(text('copy'))}</button>
        <button type="button" data-share-action="phone">${escapeHtml(text('phone'))}</button>
        <button type="button" data-share-action="save">${escapeHtml(isSaved() ? text('savedButton') : text('save'))}</button>
      </div>
      ${nextLinks.length ? `
        <div class="tool-share-next">
          <strong>${escapeHtml(text('recommended'))}</strong>
          <div>${nextLinks.map(link => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join('')}</div>
        </div>
      ` : ''}
      <div class="tool-share-phone hidden">
        <img src="/assets/freeimgtools-qr.svg" alt="QR code for FreeImgTools">
        <p>${escapeHtml(text('phoneText'))}</p>
      </div>
    `;
    panel.querySelector('[data-share-action="save"]')?.classList.toggle('is-saved', isSaved());

    panel.addEventListener('click', async event => {
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
        await copyText(url, text('shareCopied'));
      }

      if (button.dataset.shareAction === 'copy') await copyText(url);

      if (button.dataset.shareAction === 'phone') {
        panel.querySelector('.tool-share-phone')?.classList.toggle('hidden');
      }

      if (button.dataset.shareAction === 'save') {
        const saved = toggleSaved();
        toast(saved ? text('savedToast') : text('removedToast'));
      }
    });

    return panel;
  }

  function syncPanels() {
    document.querySelectorAll(`.${PANEL_CLASS}`).forEach(panel => {
      const button = panel.querySelector('[data-share-action="save"]');
      if (!button) return;
      const saved = isSaved();
      button.textContent = saved ? text('savedButton') : text('save');
      button.classList.toggle('is-saved', saved);
    });
  }

  function isVisible(node) {
    if (!node || node.classList.contains('hidden')) return false;
    const style = window.getComputedStyle(node);
    return style.display !== 'none' && style.visibility !== 'hidden';
  }

  function attachPanel(node) {
    if (!node || node.querySelector(`:scope > .${PANEL_CLASS}`)) return;
    recordCompletion(node);
    node.appendChild(createPanel());
  }

  function attachStarterPanel(node) {
    if (!node || node.dataset.shareStarterAttached === 'true') return;
    node.dataset.shareStarterAttached = 'true';
    node.insertAdjacentElement('afterend', createPanel({ compact: true }));
  }

  function scan() {
    START_SELECTORS
      .map(selector => document.querySelector(selector))
      .filter(Boolean)
      .forEach(attachStarterPanel);

    RESULT_SELECTORS
      .map(selector => document.querySelector(selector))
      .filter(isVisible)
      .forEach(attachPanel);
  }

  let scanQueued = false;
  function scheduleScan() {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      scan();
    });
  }

  function closeOtherHeaderMenus() {
    document.querySelectorAll('.nav-tool-dropdown, .nav-support-menu').forEach(container => {
      container.classList.remove('is-open');
      const button = container.querySelector('button');
      const panel = container.querySelector('.nav-tool-panel, .nav-qr-popover');
      button?.setAttribute('aria-expanded', 'false');
      if (panel) panel.hidden = true;
    });
  }

  function renderMemoryMenu() {
    const discovery = document.querySelector('.nav-discovery');
    if (!discovery) return;
    discovery.querySelector('.nav-memory-menu')?.remove();

    const tools = combinedTools();
    const menu = document.createElement('div');
    menu.className = 'nav-memory-menu';
    menu.innerHTML = `
      <button class="nav-memory-trigger" type="button" aria-expanded="false" aria-controls="nav-memory-panel" aria-label="${escapeHtml(text('myTools'))}">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3.7l2.55 5.17 5.7.83-4.12 4.02.97 5.68L12 16.72 6.9 19.4l.97-5.68L3.75 9.7l5.7-.83L12 3.7z"/></svg>
        <span>${escapeHtml(text('myTools'))}</span>
        ${tools.length ? `<b>${tools.length}</b>` : ''}
      </button>
      <div class="nav-memory-panel" id="nav-memory-panel" hidden>
        <div class="nav-memory-head">
          <strong>${escapeHtml(text('myToolsTitle'))}</strong>
          <a href="/tools">${escapeHtml(text('browse'))}</a>
        </div>
        ${tools.length ? `<div class="nav-memory-list">${tools.map(item => `
          <div class="nav-memory-item">
            <a href="${escapeHtml(item.path)}">
              <span>${escapeHtml(item.title)}</span>
              <small>${escapeHtml(item.kind === 'saved' ? text('saved') : text('recent'))}</small>
            </a>
            ${item.kind === 'saved' ? `<button type="button" data-remove-saved="${escapeHtml(item.path)}" aria-label="${escapeHtml(text('remove'))}">
              <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>` : ''}
          </div>
        `).join('')}</div>` : `<p class="nav-memory-empty">${escapeHtml(text('empty'))}</p>`}
      </div>
    `;

    const toolsMenu = discovery.querySelector('.nav-tool-dropdown');
    toolsMenu?.insertAdjacentElement('afterend', menu);

    const trigger = menu.querySelector('.nav-memory-trigger');
    const panel = menu.querySelector('.nav-memory-panel');
    trigger?.addEventListener('click', event => {
      event.preventDefault();
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      closeOtherHeaderMenus();
      trigger.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      panel.hidden = !open;
    });

    menu.addEventListener('click', event => {
      const removeButton = event.target.closest('[data-remove-saved]');
      if (!removeButton) return;
      event.preventDefault();
      const item = savedTools().find(saved => saved.path === removeButton.dataset.removeSaved);
      if (item) {
        toggleSaved(item);
        toast(text('removedToast'));
      }
    });
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
  window.FreeImgToolsMemory = {
    recent: recentTools,
    saved: savedTools,
    combined: combinedTools,
    completed: completedCount,
    toggleSaved,
    isSaved,
  };

  document.addEventListener('freeimgtools:memory-change', () => {
    renderMemoryMenu();
    syncPanels();
  });

  document.addEventListener('freeimgtools:language-change', () => {
    rememberVisit();
    renderMemoryMenu();
    document.querySelectorAll(`.${PANEL_CLASS}`).forEach(panel => panel.remove());
    document.querySelectorAll('[data-share-starter-attached]').forEach(node => delete node.dataset.shareStarterAttached);
    scan();
  });

  document.addEventListener('click', event => {
    const menu = document.querySelector('.nav-memory-menu');
    if (menu?.contains(event.target)) return;
    menu?.classList.remove('is-open');
    const trigger = menu?.querySelector('.nav-memory-trigger');
    const panel = menu?.querySelector('.nav-memory-panel');
    trigger?.setAttribute('aria-expanded', 'false');
    if (panel) panel.hidden = true;
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const menu = document.querySelector('.nav-memory-menu');
    menu?.classList.remove('is-open');
    menu?.querySelector('.nav-memory-trigger')?.setAttribute('aria-expanded', 'false');
    const panel = menu?.querySelector('.nav-memory-panel');
    if (panel) panel.hidden = true;
  });

  document.addEventListener('DOMContentLoaded', () => {
    rememberVisit();
    scan();
    queueMicrotask(renderMemoryMenu);
    const observer = new MutationObserver(scheduleScan);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style'],
    });
  });
})();
