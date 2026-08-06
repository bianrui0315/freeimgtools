(function () {
  const TOOLS = [
    { id: 'compress', path: '/compress', code: 'KB', keywords: 'compress shrink reduce smaller photo image email chat large huge too big' },
    { id: 'form', path: '/compress-image-for-online-form', code: 'OK', keywords: 'upload form file too large application 20kb 50kb 100kb 200kb 500kb portal limit' },
    { id: 'imagePdf', path: '/image-to-pdf', code: 'PDF', keywords: 'photos images to pdf homework school receipt notes scan document' },
    { id: 'pdfImage', path: '/pdf-to-image', code: 'JPG', keywords: 'pdf to image jpg png page extract convert adobe' },
    { id: 'avatar', path: '/instagram-profile-picture-resizer', code: 'PFP', keywords: 'avatar profile picture selfie anime icon circle instagram social cute' },
    { id: 'passport', path: '/passport-photo-resizer', code: 'ID', keywords: 'passport visa id photo application 2x2 600x600 government' },
    { id: 'social', path: '/instagram-story-resizer', code: 'POST', keywords: 'instagram story social post facebook tiktok portrait 1080 1920' },
    { id: 'youtube', path: '/youtube-thumbnail-resizer', code: 'YT', keywords: 'youtube thumbnail video cover 1280 720 creator' },
    { id: 'convert', path: '/convert', code: 'JPG', keywords: 'convert format jpg jpeg png webp avif change open compatibility' },
    { id: 'gif', path: '/gif-maker', code: 'GIF', keywords: 'gif animation animated meme reaction moving pictures' },
    { id: 'product', path: '/shopify-product-image-resizer', code: 'SHOP', keywords: 'product photo shopify amazon etsy store ecommerce marketplace square listing' },
    { id: 'seo', path: '/image-seo-audit', code: 'SEO', keywords: 'website image seo scan alt text filename speed audit blogger wordpress' },
  ];

  const COPY = {
    en: {
      title: 'Tell us what went wrong. We will pick the tool.',
      intro: 'No image vocabulary required. Type the problem in normal words.',
      placeholder: 'Try: my photo is too big for a form',
      search: 'Find my fix', popular: 'Popular fixes', noMatch: 'No exact match yet. Try “photo,” “PDF,” “avatar,” “form,” or “social.”',
      all: 'See all 50+ tools', welcome: 'Welcome back. Your useful stuff is still here.',
      welcomeText: 'Jump into a saved or recently used tool without searching again.', saved: 'Saved', recent: 'Recently used',
      completed: count => `You have finished ${count} image fixes on this device.`,
      install: 'Keep it one tap away', installTitle: 'Add FreeImgTools to your home screen',
      iosTip: 'On iPhone or iPad: tap Share, then choose “Add to Home Screen.”',
      tools: {
        compress: ['Photo too big', 'Make a large phone photo easier to send or upload.'],
        form: ['A form rejects my photo', 'Hit a strict 20KB, 50KB, 100KB, 200KB, or 500KB limit.'],
        imagePdf: ['Turn photos into one PDF', 'Combine homework, forms, receipts, or notes into a PDF.'],
        pdfImage: ['Turn a PDF page into a picture', 'Export PDF pages as JPG or PNG without Adobe.'],
        avatar: ['Make a profile picture', 'Fit a selfie, anime image, or group photo into an avatar.'],
        passport: ['Fix a passport or ID photo', 'Resize an application photo for a picky upload portal.'],
        social: ['Make a social story or post', 'Fit a picture for Instagram, TikTok, Facebook, and more.'],
        youtube: ['Make a YouTube thumbnail', 'Resize artwork to a clean 1280 x 720 thumbnail.'],
        convert: ['Change the image format', 'Switch between JPG, PNG, WebP, and AVIF.'],
        gif: ['Make a GIF', 'Turn several pictures into a small animation.'],
        product: ['Fix a product photo', 'Prepare square listing photos for online stores.'],
        seo: ['Check website images', 'Find large images, missing alt text, and weak filenames.'],
      },
    },
    zh: {
      title: '告诉我们哪里不对，工具由我们来选。', intro: '不需要懂图片术语，用平常话说出问题就行。', placeholder: '试试：我的照片太大，表单传不上去',
      search: '帮我找工具', popular: '热门解决办法', noMatch: '暂时没有完全匹配。试试“照片”“PDF”“头像”“表单”或“社交图片”。', all: '查看全部 50+ 工具',
      welcome: '欢迎回来。你常用的工具还在这里。', welcomeText: '不用重新找，直接继续使用保存或最近打开的工具。', saved: '已保存', recent: '最近使用',
      completed: count => `你已经在这台设备完成 ${count} 次图片处理。`, install: '放到主屏幕，一点就开', installTitle: '把 FreeImgTools 添加到主屏幕',
      iosTip: '在 iPhone 或 iPad 上：点“分享”，再选择“添加到主屏幕”。',
      tools: {
        compress: ['照片太大', '把手机大图变小，更容易发送或上传。'], form: ['表单拒绝我的照片', '压到 20KB、50KB、100KB、200KB 或 500KB。'],
        imagePdf: ['把照片合成一个 PDF', '把作业、表格、收据或笔记整理成 PDF。'], pdfImage: ['把 PDF 页面变成图片', '不用 Adobe，导出 JPG 或 PNG。'],
        avatar: ['制作头像', '把自拍、二次元图片或合照放进头像框。'], passport: ['修护照或证件照', '调整申请照片，满足挑剔的上传网站。'],
        social: ['制作社交 Story 或帖子', '适配 Instagram、TikTok、Facebook 等平台。'], youtube: ['制作 YouTube 缩略图', '调整为清晰的 1280 x 720 封面。'],
        convert: ['更换图片格式', '在 JPG、PNG、WebP 和 AVIF 之间转换。'], gif: ['制作 GIF 动图', '把多张图片变成小动画。'],
        product: ['处理商品照片', '为网店准备方形商品图。'], seo: ['检查网站图片', '找出大图、缺失 Alt 文本和不好的文件名。'],
      },
    },
    es: {
      title: 'Cuéntanos el problema. Elegimos la herramienta.', intro: 'No necesitas vocabulario técnico. Escríbelo con palabras normales.', placeholder: 'Prueba: mi foto es demasiado grande para un formulario',
      search: 'Encontrar solución', popular: 'Soluciones populares', noMatch: 'Sin coincidencia exacta. Prueba “foto”, “PDF”, “perfil”, “formulario” o “social”.', all: 'Ver las 50+ herramientas',
      welcome: 'Qué bueno verte. Tus herramientas siguen aquí.', welcomeText: 'Vuelve a una herramienta guardada o reciente sin buscar otra vez.', saved: 'Guardada', recent: 'Uso reciente',
      completed: count => `Has terminado ${count} tareas de imagen en este dispositivo.`, install: 'Tenerla a un toque', installTitle: 'Añadir FreeImgTools a la pantalla de inicio',
      iosTip: 'En iPhone o iPad: toca Compartir y luego “Añadir a pantalla de inicio”.',
      tools: {
        compress: ['La foto es muy grande', 'Haz una foto más fácil de enviar o subir.'], form: ['Un formulario rechaza mi foto', 'Cumple límites de 20KB, 50KB, 100KB, 200KB o 500KB.'],
        imagePdf: ['Fotos en un solo PDF', 'Une tareas, formularios, recibos o notas.'], pdfImage: ['PDF a imagen', 'Exporta páginas como JPG o PNG sin Adobe.'],
        avatar: ['Crear foto de perfil', 'Ajusta un selfie, anime o foto de grupo.'], passport: ['Arreglar foto de pasaporte o ID', 'Ajusta una foto para un portal exigente.'],
        social: ['Crear story o post', 'Ajusta para Instagram, TikTok, Facebook y más.'], youtube: ['Crear miniatura de YouTube', 'Redimensiona a 1280 x 720.'],
        convert: ['Cambiar formato', 'Convierte JPG, PNG, WebP y AVIF.'], gif: ['Crear un GIF', 'Convierte varias imágenes en animación.'],
        product: ['Arreglar foto de producto', 'Prepara fotos cuadradas para tiendas.'], seo: ['Revisar imágenes web', 'Encuentra imágenes grandes, alt faltante y nombres débiles.'],
      },
    },
    ja: {
      title: '困りごとを入力。合うツールを選びます。', intro: '画像の専門用語は不要です。普通の言葉で入力してください。', placeholder: '例：写真が大きすぎてフォームに送れない',
      search: '解決ツールを探す', popular: '人気の解決方法', noMatch: '完全一致がありません。「写真」「PDF」「アイコン」「フォーム」「SNS」を試してください。', all: '50+ の全ツールを見る',
      welcome: 'おかえりなさい。いつものツールはここです。', welcomeText: '保存済み・最近使ったツールをすぐ再開できます。', saved: '保存済み', recent: '最近使用',
      completed: count => `この端末で ${count} 回の画像作業を完了しました。`, install: 'ホーム画面からすぐ開く', installTitle: 'FreeImgTools をホーム画面に追加',
      iosTip: 'iPhone / iPad：共有をタップし、「ホーム画面に追加」を選びます。',
      tools: {
        compress: ['写真が大きすぎる', 'スマホ写真を送りやすく・アップしやすくします。'], form: ['フォームが写真を拒否する', '20KB〜500KBの厳しい制限に合わせます。'],
        imagePdf: ['写真を1つのPDFに', '宿題、書類、レシート、メモをまとめます。'], pdfImage: ['PDFページを画像に', 'AdobeなしでJPGやPNGにします。'],
        avatar: ['プロフィール画像を作る', '自撮り、アニメ画像、集合写真をアイコンに。'], passport: ['パスポート・証明写真を直す', '申請サイト向けに写真を調整します。'],
        social: ['SNSストーリー・投稿を作る', 'Instagram、TikTok、Facebookなどに合わせます。'], youtube: ['YouTubeサムネを作る', '1280 x 720にきれいに調整します。'],
        convert: ['画像形式を変える', 'JPG、PNG、WebP、AVIFを変換します。'], gif: ['GIFを作る', '複数の画像を小さなアニメにします。'],
        product: ['商品写真を直す', 'ネットショップ用の正方形画像を準備します。'], seo: ['サイト画像をチェック', '大きな画像、alt不足、弱い名前を見つけます。'],
      },
    },
    la: {
      title: 'Dic quid erraverit. Instrumentum eligemus.', intro: 'Verba technica non requiruntur. Problema simpliciter scribe.', placeholder: 'Exemplum: imago mea nimis magna est',
      search: 'Remedium reperi', popular: 'Remedia popularia', noMatch: 'Nondum repertum. Tenta “photo”, “PDF”, “avatar”, “forma”, aut “social”.', all: 'Omnia 50+ instrumenta',
      welcome: 'Salve iterum. Instrumenta tua hic manent.', welcomeText: 'Instrumentum servatum aut recens statim aperi.', saved: 'Servatum', recent: 'Nuper adhibitum',
      completed: count => `${count} opera imaginum in hoc instrumento perfecisti.`, install: 'Uno tactu aperi', installTitle: 'FreeImgTools in screen principali adde',
      iosTip: 'In iPhone vel iPad: preme Share, deinde “Add to Home Screen”.',
      tools: {
        compress: ['Imago nimis magna', 'Imaginem minorem fac ut mittatur.'], form: ['Forma imaginem recusat', 'Ad fines 20KB–500KB redige.'],
        imagePdf: ['Imagines in unum PDF', 'Scholas, formas, accepta, notas coniunge.'], pdfImage: ['PDF in imaginem', 'Paginas ut JPG vel PNG exporta.'],
        avatar: ['Imaginem profili fac', 'Effigiem ad circulum profili apta.'], passport: ['Imaginem documenti corrige', 'Imaginem ad petitionem apta.'],
        social: ['Historiam socialem fac', 'Ad Instagram, TikTok, Facebook apta.'], youtube: ['Imaginem YouTube fac', 'Ad 1280 x 720 redige.'],
        convert: ['Formam imaginis muta', 'JPG, PNG, WebP, AVIF converte.'], gif: ['GIF fac', 'Plures imagines anima.'],
        product: ['Imaginem producti corrige', 'Imagines quadratas tabernae para.'], seo: ['Imagines situs inspice', 'Imagines magnas et textum alt absentem reperi.'],
      },
    },
    fr: {
      title: 'Dites-nous le problème. Nous choisissons l’outil.', intro: 'Aucun jargon nécessaire. Décrivez simplement ce qui bloque.', placeholder: 'Essayez : ma photo est trop grande pour le formulaire',
      search: 'Trouver la solution', popular: 'Solutions populaires', noMatch: 'Pas de résultat exact. Essayez « photo », « PDF », « profil », « formulaire » ou « social ».', all: 'Voir les 50+ outils',
      welcome: 'Bon retour. Vos outils utiles sont toujours là.', welcomeText: 'Reprenez un outil enregistré ou récent sans chercher à nouveau.', saved: 'Enregistré', recent: 'Utilisé récemment',
      completed: count => `Vous avez terminé ${count} tâches image sur cet appareil.`, install: 'À un geste de vous', installTitle: 'Ajouter FreeImgTools à l’écran d’accueil',
      iosTip: 'Sur iPhone ou iPad : touchez Partager, puis « Sur l’écran d’accueil ».',
      tools: {
        compress: ['Photo trop grande', 'Rendez une photo plus facile à envoyer ou importer.'], form: ['Un formulaire refuse ma photo', 'Respectez une limite de 20KB à 500KB.'],
        imagePdf: ['Photos vers un seul PDF', 'Regroupez devoirs, formulaires, reçus ou notes.'], pdfImage: ['Page PDF vers image', 'Exportez en JPG ou PNG sans Adobe.'],
        avatar: ['Créer une photo de profil', 'Adaptez selfie, anime ou photo de groupe.'], passport: ['Corriger une photo d’identité', 'Adaptez la photo à un portail exigeant.'],
        social: ['Créer une story ou un post', 'Adaptez pour Instagram, TikTok, Facebook et plus.'], youtube: ['Créer une miniature YouTube', 'Redimensionnez proprement en 1280 x 720.'],
        convert: ['Changer le format', 'Convertissez JPG, PNG, WebP et AVIF.'], gif: ['Créer un GIF', 'Transformez plusieurs images en animation.'],
        product: ['Corriger une photo produit', 'Préparez des visuels carrés pour boutique.'], seo: ['Vérifier les images du site', 'Repérez images lourdes, alt manquants et noms faibles.'],
      },
    },
    de: {
      title: 'Sag uns, was nicht klappt. Wir wählen das Tool.', intro: 'Keine Fachbegriffe nötig. Beschreibe das Problem ganz normal.', placeholder: 'Beispiel: Mein Foto ist zu groß für das Formular',
      search: 'Lösung finden', popular: 'Beliebte Lösungen', noMatch: 'Kein genauer Treffer. Versuche „Foto“, „PDF“, „Profil“, „Formular“ oder „Social“.', all: 'Alle 50+ Tools',
      welcome: 'Willkommen zurück. Deine Tools sind noch da.', welcomeText: 'Öffne gespeicherte oder zuletzt verwendete Tools direkt.', saved: 'Gespeichert', recent: 'Zuletzt verwendet',
      completed: count => `Du hast ${count} Bildaufgaben auf diesem Gerät erledigt.`, install: 'Mit einem Tipp öffnen', installTitle: 'FreeImgTools zum Startbildschirm hinzufügen',
      iosTip: 'Auf iPhone oder iPad: Teilen antippen und „Zum Home-Bildschirm“ wählen.',
      tools: {
        compress: ['Foto zu groß', 'Mach ein Handyfoto leichter versendbar.'], form: ['Formular lehnt Foto ab', 'Erreiche Limits von 20KB bis 500KB.'],
        imagePdf: ['Fotos in eine PDF', 'Fasse Aufgaben, Formulare, Belege oder Notizen zusammen.'], pdfImage: ['PDF-Seite als Bild', 'Exportiere JPG oder PNG ohne Adobe.'],
        avatar: ['Profilbild erstellen', 'Passe Selfie, Animebild oder Gruppenfoto an.'], passport: ['Pass- oder Ausweisfoto korrigieren', 'Passe das Foto für ein strenges Portal an.'],
        social: ['Story oder Post erstellen', 'Für Instagram, TikTok, Facebook und mehr.'], youtube: ['YouTube-Thumbnail erstellen', 'Sauber auf 1280 x 720 skalieren.'],
        convert: ['Bildformat ändern', 'JPG, PNG, WebP und AVIF umwandeln.'], gif: ['GIF erstellen', 'Mehrere Bilder klein animieren.'],
        product: ['Produktfotografie korrigieren', 'Quadratische Shop-Bilder vorbereiten.'], seo: ['Website-Bilder prüfen', 'Große Bilder, fehlende Alt-Texte und schwache Namen finden.'],
      },
    },
  };

  let installPrompt = null;
  let activeQuery = '';
  let finderAnchorHandled = false;

  function language() {
    const code = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return COPY[code] ? code : 'en';
  }

  function copy() {
    return COPY[language()] || COPY.en;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[char]);
  }

  function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }

  function toolText(tool) {
    return copy().tools[tool.id] || COPY.en.tools[tool.id];
  }

  function rankedTools(query) {
    const normalizedQuery = normalize(query);
    const recentPaths = new Set(window.FreeImgToolsMemory?.recent().map(item => item.path) || []);
    if (!normalizedQuery) {
      const recent = TOOLS.filter(tool => recentPaths.has(tool.path));
      return [...recent, ...TOOLS.filter(tool => !recentPaths.has(tool.path))].slice(0, 4);
    }

    const terms = normalizedQuery.split(/\s+/).filter(Boolean);
    return TOOLS.map(tool => {
      const [label, description] = toolText(tool);
      const haystack = normalize(`${label} ${description} ${tool.keywords}`);
      let score = haystack.includes(normalizedQuery) ? 10 : 0;
      terms.forEach(term => {
        if (haystack.includes(term)) score += term.length > 3 ? 3 : 1;
      });
      if (recentPaths.has(tool.path)) score += 0.5;
      return { tool, score };
    })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(item => item.tool);
  }

  function resultMarkup(tool) {
    const [label, description] = toolText(tool);
    return `
      <a class="finder-result" href="${tool.path}">
        <span class="finder-code">${escapeHtml(tool.code)}</span>
        <span class="finder-result-copy"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(description)}</small></span>
        <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4"/></svg>
      </a>
    `;
  }

  function updateFinder(query) {
    activeQuery = query;
    const results = rankedTools(query);
    const resultNode = document.getElementById('problem-finder-results');
    const statusNode = document.getElementById('problem-finder-status');
    if (!resultNode || !statusNode) return;
    resultNode.innerHTML = results.length
      ? results.map(resultMarkup).join('')
      : `<div class="finder-empty">${escapeHtml(copy().noMatch)} <a href="/tools">${escapeHtml(copy().all)}</a></div>`;
    statusNode.textContent = query ? `${results.length}` : copy().popular;
  }

  function renderFinder() {
    const root = document.getElementById('problem-finder');
    if (!root) return;
    const c = copy();
    root.innerHTML = `
      <div class="problem-finder-heading">
        <h2 id="problem-finder-title">${escapeHtml(c.title)}</h2>
        <p>${escapeHtml(c.intro)}</p>
      </div>
      <form class="problem-search" role="search">
        <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.2 16.2L21 21"/></svg>
        <input id="problem-query" name="q" type="search" autocomplete="off" placeholder="${escapeHtml(c.placeholder)}" value="${escapeHtml(activeQuery)}" aria-controls="problem-finder-results">
        <button type="submit" title="${escapeHtml(c.search)}" aria-label="${escapeHtml(c.search)}">
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 6l4 4-4 4"/></svg>
        </button>
      </form>
      <div class="finder-quick" aria-label="${escapeHtml(c.popular)}">
        ${TOOLS.slice(0, 4).map(tool => `<button type="button" data-finder-tool="${tool.id}">${escapeHtml(toolText(tool)[0])}</button>`).join('')}
      </div>
      <div class="finder-status"><span id="problem-finder-status" aria-live="polite">${escapeHtml(c.popular)}</span><a href="/tools">${escapeHtml(c.all)}</a></div>
      <div class="finder-results" id="problem-finder-results"></div>
    `;

    const input = root.querySelector('#problem-query');
    input?.addEventListener('input', event => updateFinder(event.target.value));
    root.querySelector('.problem-search')?.addEventListener('submit', event => {
      event.preventDefault();
      const first = rankedTools(input?.value || '')[0];
      if (first) location.href = first.path;
    });
    root.querySelectorAll('[data-finder-tool]').forEach(button => {
      button.addEventListener('click', () => {
        const tool = TOOLS.find(item => item.id === button.dataset.finderTool);
        if (!tool || !input) return;
        input.value = toolText(tool)[0];
        updateFinder(input.value);
        input.focus();
      });
    });
    updateFinder(activeQuery);
    if (!finderAnchorHandled && location.hash === '#problem-finder') {
      finderAnchorHandled = true;
      window.setTimeout(() => root.scrollIntoView({ block: 'start' }), 80);
    }
  }

  function memoryToolCopy(item) {
    const known = TOOLS.find(tool => tool.path === item.path);
    if (known) return { code: known.code, label: toolText(known)[0], description: toolText(known)[1] };
    return { code: item.path.includes('pdf') ? 'PDF' : 'IMG', label: item.title, description: item.kind === 'saved' ? copy().saved : copy().recent };
  }

  function renderMemory() {
    const root = document.getElementById('home-memory');
    const memory = window.FreeImgToolsMemory;
    if (!root || !memory) return;
    const tools = memory.combined().slice(0, 4);
    if (!tools.length) {
      root.hidden = true;
      root.innerHTML = '';
      return;
    }

    const c = copy();
    const completed = memory.completed();
    root.hidden = false;
    root.innerHTML = `
      <div class="home-memory-heading">
        <div>
          <h2 id="home-memory-title">${escapeHtml(c.welcome)}</h2>
          <p>${escapeHtml(c.welcomeText)}</p>
          ${completed ? `<small>${escapeHtml(c.completed(completed))}</small>` : ''}
        </div>
        <a href="/tools">${escapeHtml(c.all)}</a>
      </div>
      <div class="home-memory-grid">
        ${tools.map(item => {
          const info = memoryToolCopy(item);
          return `<a class="home-memory-card" href="${escapeHtml(item.path)}">
            <span class="home-memory-code">${escapeHtml(info.code)}</span>
            <span><small>${escapeHtml(item.kind === 'saved' ? c.saved : c.recent)}</small><strong>${escapeHtml(info.label)}</strong><em>${escapeHtml(info.description)}</em></span>
          </a>`;
        }).join('')}
      </div>
    `;
  }

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;
  }

  function renderInstallAction() {
    const links = document.querySelector('.phone-qr-links');
    if (!links || window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) return;
    links.querySelector('.phone-install-action')?.remove();
    if (!installPrompt && !isIos()) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'phone-install-action';
    button.innerHTML = `<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M10 3v10M6 9l4 4 4-4M4 16h12"/></svg><span>${escapeHtml(copy().install)}</span>`;
    button.title = copy().installTitle;
    button.addEventListener('click', async () => {
      if (installPrompt) {
        installPrompt.prompt();
        await installPrompt.userChoice;
        installPrompt = null;
        renderInstallAction();
        return;
      }
      let tip = document.getElementById('ios-install-tip');
      if (!tip) {
        tip = document.createElement('p');
        tip.id = 'ios-install-tip';
        tip.className = 'ios-install-tip';
        document.querySelector('.phone-qr-copy')?.appendChild(tip);
      }
      tip.textContent = copy().iosTip;
    });
    links.appendChild(button);
  }

  function renderAll() {
    const currentInput = document.getElementById('problem-query');
    if (currentInput) activeQuery = currentInput.value;
    renderFinder();
    renderMemory();
    renderInstallAction();
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    renderInstallAction();
  });

  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    document.querySelector('.phone-install-action')?.remove();
  });

  document.addEventListener('freeimgtools:memory-change', renderMemory);
  document.addEventListener('freeimgtools:language-change', renderAll);
  document.addEventListener('DOMContentLoaded', () => {
    const initialQuery = new URLSearchParams(location.search).get('q');
    if (initialQuery) activeQuery = initialQuery;
    renderAll();
  });
})();
