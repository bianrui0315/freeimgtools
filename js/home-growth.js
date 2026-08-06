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
      navFind: 'Find a tool', navPopular: 'Popular fixes',
      heroTitle: 'Fix that image.', heroTitleSecond: 'Get on with your day.',
      heroIntro: 'Compress, resize, convert, or turn photos into a PDF. Pick what you need and finish the job in seconds.',
      heroPrimary: 'Choose my fix', heroSecondary: 'Browse all 50+ tools',
      heroFree: 'Free to use', heroAccount: 'No account', heroPhone: 'Works on phone',
      taskTitle: 'What do you need?', taskHint: 'Pick the closest problem',
      taskCompress: 'My file is too big', taskCompressHint: 'Make it ready to upload',
      taskPdf: 'I need a PDF', taskPdfHint: 'Turn several photos into one file',
      taskResize: 'It’s the wrong size', taskResizeHint: 'Fit profiles, posts, forms, and more',
      taskConvert: 'Change the format', taskConvertHint: 'WebP to JPG, PNG, AVIF, and more',
      title: 'Tell us what went wrong.',
      intro: 'Use normal words. We will point you to the right tool.',
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
      navFind: '查找工具', navPopular: '热门解决办法',
      heroTitle: '修好这张图。', heroTitleSecond: '然后继续你的事。',
      heroIntro: '压缩、改尺寸、转格式，或把照片变成 PDF。选出需要的，几秒搞定。',
      heroPrimary: '选择我的问题', heroSecondary: '浏览全部 50+ 工具',
      heroFree: '免费使用', heroAccount: '无需账号', heroPhone: '手机可用',
      taskTitle: '你要做什么？', taskHint: '选择最接近的问题',
      taskCompress: '文件太大', taskCompressHint: '变小后顺利上传',
      taskPdf: '我需要 PDF', taskPdfHint: '多张照片合成一个文件',
      taskResize: '尺寸不对', taskResizeHint: '适配头像、帖子、表单等',
      taskConvert: '更换格式', taskConvertHint: 'WebP 转 JPG、PNG、AVIF 等',
      title: '告诉我们哪里不对。', intro: '用平常话描述，我们会带你去正确的工具。', placeholder: '试试：我的照片太大，表单传不上去',
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
      navFind: 'Buscar herramienta', navPopular: 'Soluciones populares',
      heroTitle: 'Arregla esa imagen.', heroTitleSecond: 'Sigue con tu día.',
      heroIntro: 'Comprime, redimensiona, convierte o pasa fotos a PDF. Elige lo que necesitas y termina en segundos.',
      heroPrimary: 'Elegir mi solución', heroSecondary: 'Ver las 50+ herramientas',
      heroFree: 'Uso gratuito', heroAccount: 'Sin cuenta', heroPhone: 'Funciona en móvil',
      taskTitle: '¿Qué necesitas?', taskHint: 'Elige el problema más parecido',
      taskCompress: 'Mi archivo es muy grande', taskCompressHint: 'Déjalo listo para subir',
      taskPdf: 'Necesito un PDF', taskPdfHint: 'Une varias fotos en un archivo',
      taskResize: 'El tamaño no sirve', taskResizeHint: 'Para perfiles, posts y formularios',
      taskConvert: 'Cambiar el formato', taskConvertHint: 'WebP a JPG, PNG, AVIF y más',
      title: 'Cuéntanos qué salió mal.', intro: 'Usa palabras normales. Te llevamos a la herramienta correcta.', placeholder: 'Prueba: mi foto es demasiado grande para un formulario',
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
      navFind: 'ツールを探す', navPopular: '人気の解決方法',
      heroTitle: 'その画像を直そう。', heroTitleSecond: 'すぐ次の用事へ。',
      heroIntro: '圧縮、サイズ変更、形式変換、写真のPDF化。必要な作業を選んで数秒で完了。',
      heroPrimary: '困りごとを選ぶ', heroSecondary: '50+ の全ツールを見る',
      heroFree: '無料で使える', heroAccount: 'アカウント不要', heroPhone: 'スマホ対応',
      taskTitle: '何をしたいですか？', taskHint: '近い困りごとを選択',
      taskCompress: 'ファイルが大きすぎる', taskCompressHint: 'アップロードできるサイズへ',
      taskPdf: 'PDFが必要', taskPdfHint: '複数の写真を1つのファイルに',
      taskResize: 'サイズが合わない', taskResizeHint: 'プロフィール、投稿、フォームに対応',
      taskConvert: '形式を変えたい', taskConvertHint: 'WebPをJPG、PNG、AVIFなどへ',
      title: '何がうまくいかないか教えてください。', intro: '普段の言葉で大丈夫。合うツールへ案内します。', placeholder: '例：写真が大きすぎてフォームに送れない',
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
      navFind: 'Instrumentum reperi', navPopular: 'Remedia popularia',
      heroTitle: 'Imaginem corrige.', heroTitleSecond: 'Deinde perge.',
      heroIntro: 'Comprime, redimensiona, converte, aut imagines in PDF verte. Elige quod opus est et celeriter perfice.',
      heroPrimary: 'Remedium elige', heroSecondary: 'Omnia 50+ instrumenta',
      heroFree: 'Gratis', heroAccount: 'Sine ratione', heroPhone: 'Telephonio aptum',
      taskTitle: 'Quid opus est?', taskHint: 'Problema simillimum elige',
      taskCompress: 'Fasciculus nimis magnus est', taskCompressHint: 'Ad onerandum para',
      taskPdf: 'PDF mihi opus est', taskPdfHint: 'Plures imagines in unum coniunge',
      taskResize: 'Mensura non convenit', taskResizeHint: 'Ad profilia, nuntios, formas et alia',
      taskConvert: 'Formam muta', taskConvertHint: 'WebP in JPG, PNG, AVIF et alia',
      title: 'Dic quid erraverit.', intro: 'Verbis simplicibus utere. Ad instrumentum rectum ducemus.', placeholder: 'Exemplum: imago mea nimis magna est',
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
      navFind: 'Trouver un outil', navPopular: 'Solutions populaires',
      heroTitle: 'Réglez cette image.', heroTitleSecond: 'Passez à la suite.',
      heroIntro: 'Compressez, redimensionnez, convertissez ou créez un PDF avec vos photos. Choisissez et terminez en quelques secondes.',
      heroPrimary: 'Choisir ma solution', heroSecondary: 'Voir les 50+ outils',
      heroFree: 'Utilisation gratuite', heroAccount: 'Sans compte', heroPhone: 'Fonctionne sur mobile',
      taskTitle: 'De quoi avez-vous besoin ?', taskHint: 'Choisissez le problème le plus proche',
      taskCompress: 'Mon fichier est trop lourd', taskCompressHint: 'Préparez-le pour l’envoi',
      taskPdf: 'J’ai besoin d’un PDF', taskPdfHint: 'Regroupez plusieurs photos',
      taskResize: 'La taille ne convient pas', taskResizeHint: 'Pour profils, posts et formulaires',
      taskConvert: 'Changer le format', taskConvertHint: 'WebP vers JPG, PNG, AVIF et plus',
      title: 'Dites-nous ce qui bloque.', intro: 'Parlez normalement. Nous vous guidons vers le bon outil.', placeholder: 'Essayez : ma photo est trop grande pour le formulaire',
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
      navFind: 'Tool finden', navPopular: 'Beliebte Lösungen',
      heroTitle: 'Bring das Bild in Ordnung.', heroTitleSecond: 'Mach mit deinem Tag weiter.',
      heroIntro: 'Komprimieren, skalieren, konvertieren oder Fotos in eine PDF verwandeln. Wähle die Aufgabe und sei in Sekunden fertig.',
      heroPrimary: 'Meine Lösung wählen', heroSecondary: 'Alle 50+ Tools ansehen',
      heroFree: 'Kostenlos nutzbar', heroAccount: 'Kein Konto', heroPhone: 'Funktioniert mobil',
      taskTitle: 'Was brauchst du?', taskHint: 'Wähle das ähnlichste Problem',
      taskCompress: 'Meine Datei ist zu groß', taskCompressHint: 'Für den Upload verkleinern',
      taskPdf: 'Ich brauche eine PDF', taskPdfHint: 'Mehrere Fotos in eine Datei',
      taskResize: 'Die Größe stimmt nicht', taskResizeHint: 'Für Profile, Posts und Formulare',
      taskConvert: 'Format ändern', taskConvertHint: 'WebP in JPG, PNG, AVIF und mehr',
      title: 'Sag uns, was nicht klappt.', intro: 'Beschreibe es ganz normal. Wir zeigen dir das passende Tool.', placeholder: 'Beispiel: Mein Foto ist zu groß für das Formular',
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

  function renderHero() {
    const c = copy();
    document.querySelectorAll('[data-home-copy]').forEach(node => {
      const value = c[node.dataset.homeCopy];
      if (typeof value === 'string') node.textContent = value;
    });
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
    renderHero();
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
