(function () {
  const COFFEE_URL = 'https://buymeacoffee.com/bianrui0315';
  const QR_SRC = '/assets/buymeacoffee-qr.png';
  const LANG_KEY = 'freeimgtools_lang';

  const LANGUAGES = [
    ['en', 'English'],
    ['zh', '中文'],
    ['es', 'Español'],
    ['ja', '日本語'],
    ['la', 'Latine'],
    ['fr', 'Français'],
    ['de', 'Deutsch'],
  ];

  const TEXT = {
    en: {
      language: 'Language',
      tools: 'Tools',
      findTool: 'Find the right image tool',
      viewAll: 'View all',
      coffee: 'Buy me a coffee',
      coffeeQrLabel: 'Show Buy Me a Coffee QR code',
      supportTitle: 'Support FreeImgTools',
      supportText: 'Scan the code or open Buy Me a Coffee.',
      supportLink: 'Open Buy Me a Coffee',
      groups: {
        popular: 'Popular',
        compress: 'Compress by size',
        social: 'Social sizes',
        pdf: 'PDF and GIF',
        seo: 'SEO and AI',
        ecommerce: 'Ecommerce',
      },
      links: {
        compressImages: ['Compress images', 'Smaller JPG, PNG, WebP, AVIF'],
        convertFormats: ['Convert formats', 'JPG, PNG, WebP, AVIF'],
        resizeImages: ['Resize images', 'Custom pixels and presets'],
        allTools: ['All tools', 'Full FreeImgTools directory'],
        c50: ['Compress to 50KB', 'Strict upload limits'],
        c100: ['Compress to 100KB', 'Common form target'],
        c200: ['Compress under 200KB', 'Portal-friendly files'],
        c500: ['Compress to 500KB', 'Websites and stores'],
        og: ['Open Graph image', '1200 x 630 previews'],
        instagramStory: ['Instagram Story', '1080 x 1920 stories'],
        facebookCover: ['Facebook Cover', 'Cover photo crop'],
        linkedinBanner: ['LinkedIn Banner', 'Profile header image'],
        pdfToImage: ['PDF to Image', 'Export pages without Adobe'],
        imageToPdf: ['Image to PDF', 'Make PDFs without login'],
        gifMaker: ['GIF Maker', 'Images to animated GIF'],
        pdfTools: ['PDF tools', 'All PDF workflows'],
        aiTools: ['AI Image Tools', 'Alt text, captions, tags'],
        seoScanner: ['Website Image SEO Scanner', 'Audit images on a URL'],
        seoGuide: ['Image SEO Guide', 'Rank and accessibility basics'],
        productSeo: ['Product Image SEO', 'Ecommerce image search'],
        shopify: ['Shopify product images', '2048 square photos'],
        amazon: ['Amazon product images', 'Marketplace-ready squares'],
        etsy: ['Etsy listing photos', 'Listing image prep'],
        productCompress: ['Product photo compressor', 'Faster product pages'],
      },
      exact: {},
    },
    zh: {
      language: '语言',
      tools: '工具',
      findTool: '找到合适的图片工具',
      viewAll: '查看全部',
      coffee: '请我喝咖啡',
      coffeeQrLabel: '显示 Buy Me a Coffee 二维码',
      supportTitle: '支持 FreeImgTools',
      supportText: '扫码，或打开 Buy Me a Coffee 支持项目。',
      supportLink: '打开 Buy Me a Coffee',
      groups: { popular: '常用工具', compress: '按大小压缩', social: '社交尺寸', pdf: 'PDF 和 GIF', seo: 'SEO 和 AI', ecommerce: '电商图片' },
      links: {
        compressImages: ['压缩图片', '更小的 JPG、PNG、WebP、AVIF'],
        convertFormats: ['转换格式', 'JPG、PNG、WebP、AVIF'],
        resizeImages: ['调整图片尺寸', '自定义像素和预设'],
        allTools: ['全部工具', '完整 FreeImgTools 目录'],
        c50: ['压缩到 50KB', '严格上传限制'],
        c100: ['压缩到 100KB', '常见表单目标'],
        c200: ['压缩到 200KB 以下', '适合门户上传'],
        c500: ['压缩到 500KB', '适合网站和商店'],
        og: ['Open Graph 图片', '1200 x 630 链接预览'],
        instagramStory: ['Instagram Story', '1080 x 1920 故事尺寸'],
        facebookCover: ['Facebook 封面', '封面图裁剪'],
        linkedinBanner: ['LinkedIn 横幅', '个人资料头图'],
        pdfToImage: ['PDF 转图片', '不用 Adobe 导出页面'],
        imageToPdf: ['图片转 PDF', '无需登录制作 PDF'],
        gifMaker: ['GIF 制作器', '图片生成动图'],
        pdfTools: ['PDF 工具', '全部 PDF 流程'],
        aiTools: ['AI 图片工具', 'Alt 文本、标题、标签'],
        seoScanner: ['网站图片 SEO 扫描器', '扫描 URL 上的图片'],
        seoGuide: ['图片 SEO 指南', '排名和无障碍基础'],
        productSeo: ['产品图片 SEO', '电商图片搜索'],
        shopify: ['Shopify 产品图', '2048 方形图片'],
        amazon: ['Amazon 产品图', '适合平台的方图'],
        etsy: ['Etsy 商品图', '准备商品列表图片'],
        productCompress: ['产品图压缩', '更快的产品页面'],
      },
      exact: {
        Home: '首页', Tools: '工具', Compress: '压缩', Convert: '转换', Resize: '调整尺寸', Guides: '指南', 'AI Tools': 'AI 工具',
        About: '关于', Contact: '联系', 'Privacy Policy': '隐私政策', Terms: '条款', Disclaimer: '免责声明', 'PDF Tools': 'PDF 工具', 'Mobile Tools': '手机工具',
        'PDF to Image': 'PDF 转图片', 'Image to PDF': '图片转 PDF', 'GIF Maker': 'GIF 制作器',
        'FreeImgTools: free img tools that run in your browser.': 'FreeImgTools：在浏览器中运行的免费图片工具。',
        'Start Compressing': '开始压缩', 'Run Image SEO Audit': '运行图片 SEO 检查', 'Open source on GitHub': '在 GitHub 查看开源项目',
        'Popular tools': '常用工具', 'Choose the job you need done': '选择你要完成的任务', 'Browse all tools →': '浏览全部工具 →',
        'All FreeImgTools': '全部 FreeImgTools 工具', 'Popular image tools': '常用图片工具', 'Compress by target size': '按目标大小压缩',
        'Format converters': '格式转换器', 'Social and platform resizers': '社交和平台尺寸工具', 'Application and ID photo tools': '申请和证件照工具',
        'Ecommerce image tools': '电商图片工具', 'Image SEO and editing': '图片 SEO 和编辑',
      },
    },
    es: {
      language: 'Idioma',
      tools: 'Herramientas',
      findTool: 'Encuentra la herramienta adecuada',
      viewAll: 'Ver todo',
      coffee: 'Invítame un café',
      coffeeQrLabel: 'Mostrar código QR de Buy Me a Coffee',
      supportTitle: 'Apoya FreeImgTools',
      supportText: 'Escanea el código o abre Buy Me a Coffee.',
      supportLink: 'Abrir Buy Me a Coffee',
      groups: { popular: 'Popular', compress: 'Comprimir por tamaño', social: 'Tamaños sociales', pdf: 'PDF y GIF', seo: 'SEO e IA', ecommerce: 'Ecommerce' },
      links: {
        compressImages: ['Comprimir imágenes', 'JPG, PNG, WebP y AVIF más pequeños'],
        convertFormats: ['Convertir formatos', 'JPG, PNG, WebP, AVIF'],
        resizeImages: ['Redimensionar imágenes', 'Píxeles personalizados y presets'],
        allTools: ['Todas las herramientas', 'Directorio completo de FreeImgTools'],
        c50: ['Comprimir a 50KB', 'Límites de subida estrictos'],
        c100: ['Comprimir a 100KB', 'Objetivo común para formularios'],
        c200: ['Comprimir bajo 200KB', 'Archivos listos para portales'],
        c500: ['Comprimir a 500KB', 'Sitios web y tiendas'],
        og: ['Imagen Open Graph', 'Vistas previas 1200 x 630'],
        instagramStory: ['Historia de Instagram', 'Historias 1080 x 1920'],
        facebookCover: ['Portada de Facebook', 'Recorte para portada'],
        linkedinBanner: ['Banner de LinkedIn', 'Imagen de cabecera'],
        pdfToImage: ['PDF a imagen', 'Exporta páginas sin Adobe'],
        imageToPdf: ['Imagen a PDF', 'Crea PDFs sin iniciar sesión'],
        gifMaker: ['Creador de GIF', 'Imágenes a GIF animado'],
        pdfTools: ['Herramientas PDF', 'Todos los flujos PDF'],
        aiTools: ['Herramientas IA', 'Alt text, captions y tags'],
        seoScanner: ['Escáner SEO de imágenes', 'Audita imágenes de una URL'],
        seoGuide: ['Guía SEO de imágenes', 'Bases de ranking y accesibilidad'],
        productSeo: ['SEO de imágenes de producto', 'Búsqueda ecommerce'],
        shopify: ['Imágenes Shopify', 'Fotos cuadradas 2048'],
        amazon: ['Imágenes Amazon', 'Cuadradas para marketplace'],
        etsy: ['Fotos Etsy', 'Preparar imágenes de listing'],
        productCompress: ['Compresor de producto', 'Páginas de producto más rápidas'],
      },
      exact: {
        Home: 'Inicio', Tools: 'Herramientas', Compress: 'Comprimir', Convert: 'Convertir', Resize: 'Redimensionar', Guides: 'Guías', 'AI Tools': 'Herramientas IA',
        About: 'Acerca de', Contact: 'Contacto', 'Privacy Policy': 'Privacidad', Terms: 'Términos', Disclaimer: 'Aviso legal', 'PDF Tools': 'Herramientas PDF', 'Mobile Tools': 'Móvil',
        'PDF to Image': 'PDF a imagen', 'Image to PDF': 'Imagen a PDF', 'GIF Maker': 'Creador de GIF',
        'FreeImgTools: free img tools that run in your browser.': 'FreeImgTools: herramientas gratis para imágenes que funcionan en tu navegador.',
        'Start Compressing': 'Comenzar a comprimir', 'Run Image SEO Audit': 'Auditar SEO de imágenes', 'Open source on GitHub': 'Código abierto en GitHub',
        'Popular tools': 'Herramientas populares', 'Choose the job you need done': 'Elige la tarea que necesitas', 'Browse all tools →': 'Ver todas →',
        'All FreeImgTools': 'Todas las herramientas FreeImgTools', 'Popular image tools': 'Herramientas populares', 'Compress by target size': 'Comprimir por tamaño objetivo',
        'Format converters': 'Convertidores de formato', 'Social and platform resizers': 'Redimensionadores sociales', 'Application and ID photo tools': 'Fotos para trámites e ID',
        'Ecommerce image tools': 'Herramientas ecommerce', 'Image SEO and editing': 'SEO y edición de imágenes',
      },
    },
    ja: {
      language: '言語',
      tools: 'ツール',
      findTool: '目的に合う画像ツールを探す',
      viewAll: 'すべて表示',
      coffee: 'コーヒーで応援',
      coffeeQrLabel: 'Buy Me a Coffee のQRコードを表示',
      supportTitle: 'FreeImgTools を応援',
      supportText: 'QRコードを読み取るか、Buy Me a Coffee を開いてください。',
      supportLink: 'Buy Me a Coffee を開く',
      groups: { popular: '人気', compress: 'サイズ別圧縮', social: 'SNS サイズ', pdf: 'PDF と GIF', seo: 'SEO と AI', ecommerce: 'EC 画像' },
      links: {
        compressImages: ['画像を圧縮', 'JPG、PNG、WebP、AVIF を軽量化'],
        convertFormats: ['形式を変換', 'JPG、PNG、WebP、AVIF'],
        resizeImages: ['画像サイズ変更', 'カスタムピクセルとプリセット'],
        allTools: ['すべてのツール', 'FreeImgTools 全体の一覧'],
        c50: ['50KB に圧縮', '厳しいアップロード制限向け'],
        c100: ['100KB に圧縮', 'よくあるフォーム制限'],
        c200: ['200KB 未満に圧縮', 'ポータル提出向け'],
        c500: ['500KB に圧縮', 'Webサイトやショップ向け'],
        og: ['Open Graph 画像', '1200 x 630 プレビュー'],
        instagramStory: ['Instagram ストーリー', '1080 x 1920'],
        facebookCover: ['Facebook カバー', 'カバー写真の切り抜き'],
        linkedinBanner: ['LinkedIn バナー', 'プロフィールヘッダー'],
        pdfToImage: ['PDF を画像に', 'Adobe なしでページを書き出し'],
        imageToPdf: ['画像を PDF に', 'ログインなしで PDF 作成'],
        gifMaker: ['GIF メーカー', '画像からアニメ GIF'],
        pdfTools: ['PDF ツール', 'PDF ワークフロー一覧'],
        aiTools: ['AI 画像ツール', '代替テキスト、キャプション、タグ'],
        seoScanner: ['画像 SEO スキャナー', 'URL 上の画像を監査'],
        seoGuide: ['画像 SEO ガイド', '検索とアクセシビリティの基本'],
        productSeo: ['商品画像 SEO', 'EC 画像検索'],
        shopify: ['Shopify 商品画像', '2048 正方形写真'],
        amazon: ['Amazon 商品画像', 'マーケット向け正方形'],
        etsy: ['Etsy 商品写真', 'リスティング画像の準備'],
        productCompress: ['商品写真圧縮', '商品ページを高速化'],
      },
      exact: {
        Home: 'ホーム', Tools: 'ツール', Compress: '圧縮', Convert: '変換', Resize: 'サイズ変更', Guides: 'ガイド', 'AI Tools': 'AI ツール',
        About: '概要', Contact: '連絡先', 'Privacy Policy': 'プライバシー', Terms: '利用規約', Disclaimer: '免責事項', 'PDF Tools': 'PDF ツール', 'Mobile Tools': 'モバイル',
        'PDF to Image': 'PDF を画像に', 'Image to PDF': '画像を PDF に', 'GIF Maker': 'GIF メーカー',
        'FreeImgTools: free img tools that run in your browser.': 'FreeImgTools：ブラウザで動く無料画像ツール。',
        'Start Compressing': '圧縮を開始', 'Run Image SEO Audit': '画像 SEO をチェック', 'Open source on GitHub': 'GitHub で公開中',
        'Popular tools': '人気ツール', 'Choose the job you need done': 'やりたい作業を選ぶ', 'Browse all tools →': 'すべてのツール →',
        'All FreeImgTools': 'FreeImgTools 全ツール', 'Popular image tools': '人気の画像ツール', 'Compress by target size': '目標サイズで圧縮',
        'Format converters': '形式変換', 'Social and platform resizers': 'SNS・平台サイズ', 'Application and ID photo tools': '申請・証明写真ツール',
        'Ecommerce image tools': 'EC 画像ツール', 'Image SEO and editing': '画像 SEO と編集',
      },
    },
    la: {
      language: 'Lingua',
      tools: 'Instrumenta',
      findTool: 'Instrumentum imaginum idoneum reperi',
      viewAll: 'Omnia vide',
      coffee: 'Caffeam mihi eme',
      coffeeQrLabel: 'Codicem QR ad Buy Me a Coffee ostende',
      supportTitle: 'FreeImgTools sustine',
      supportText: 'Codicem lege aut Buy Me a Coffee aperi.',
      supportLink: 'Buy Me a Coffee aperi',
      groups: { popular: 'Usitata', compress: 'Comprime per magnitudinem', social: 'Mensurae sociales', pdf: 'PDF et GIF', seo: 'SEO et AI', ecommerce: 'Mercatura electronica' },
      links: {
        compressImages: ['Imagines comprime', 'JPG, PNG, WebP, AVIF minora'],
        convertFormats: ['Formas converte', 'JPG, PNG, WebP, AVIF'],
        resizeImages: ['Mensuram muta', 'Pixeli proprii et exempla'],
        allTools: ['Omnia instrumenta', 'Index FreeImgTools plenus'],
        c50: ['Ad 50KB comprime', 'Fines onerationis stricti'],
        c100: ['Ad 100KB comprime', 'Finis communis formularum'],
        c200: ['Sub 200KB comprime', 'Apta portis interretialibus'],
        c500: ['Ad 500KB comprime', 'Paginae et tabernae'],
        og: ['Imago Open Graph', 'Praevisiones 1200 x 630'],
        instagramStory: ['Instagram Story', '1080 x 1920'],
        facebookCover: ['Facebook operculum', 'Sectio imaginis operculi'],
        linkedinBanner: ['LinkedIn vexillum', 'Imago capitis profili'],
        pdfToImage: ['PDF in imaginem', 'Paginas sine Adobe exporta'],
        imageToPdf: ['Imago in PDF', 'PDF sine ingressu crea'],
        gifMaker: ['Factor GIF', 'Imagines in GIF animatum'],
        pdfTools: ['Instrumenta PDF', 'Omnes rationes PDF'],
        aiTools: ['Instrumenta AI', 'Textus alt, inscriptiones, tags'],
        seoScanner: ['Scrutator SEO imaginum', 'Imagines in URL examina'],
        seoGuide: ['Dux SEO imaginum', 'Ordo et accessibilitas'],
        productSeo: ['SEO imaginum producti', 'Quaestio mercaturae'],
        shopify: ['Imagines Shopify', 'Imagines quadratae 2048'],
        amazon: ['Imagines Amazon', 'Quadratae ad mercatum'],
        etsy: ['Imagines Etsy', 'Praepara imagines indicis'],
        productCompress: ['Compressor producti', 'Paginae producti celeriores'],
      },
      exact: {
        Home: 'Domus', Tools: 'Instrumenta', Compress: 'Comprime', Convert: 'Converte', Resize: 'Muta mensuram', Guides: 'Duces', 'AI Tools': 'Instrumenta AI',
        About: 'De nobis', Contact: 'Contactus', 'Privacy Policy': 'Privata', Terms: 'Termini', Disclaimer: 'Monitum', 'PDF Tools': 'Instrumenta PDF', 'Mobile Tools': 'Mobilia',
        'PDF to Image': 'PDF in imaginem', 'Image to PDF': 'Imago in PDF', 'GIF Maker': 'Factor GIF',
        'FreeImgTools: free img tools that run in your browser.': 'FreeImgTools: instrumenta imaginum gratuita in navigatro tuo operantur.',
        'Start Compressing': 'Comprimere incipias', 'Run Image SEO Audit': 'SEO imaginum examina', 'Open source on GitHub': 'Fons apertus in GitHub',
        'Popular tools': 'Instrumenta usitata', 'Choose the job you need done': 'Elige opus faciendum', 'Browse all tools →': 'Omnia instrumenta →',
        'All FreeImgTools': 'Omnia FreeImgTools', 'Popular image tools': 'Instrumenta imaginum usitata', 'Compress by target size': 'Comprime ad magnitudinem',
        'Format converters': 'Conversores formarum', 'Social and platform resizers': 'Mensurae socialium', 'Application and ID photo tools': 'Instrumenta photographiarum ID',
        'Ecommerce image tools': 'Instrumenta mercaturae', 'Image SEO and editing': 'SEO imaginum et editio',
      },
    },
    fr: {
      language: 'Langue',
      tools: 'Outils',
      findTool: 'Trouver le bon outil image',
      viewAll: 'Tout voir',
      coffee: 'M’offrir un café',
      coffeeQrLabel: 'Afficher le QR code Buy Me a Coffee',
      supportTitle: 'Soutenir FreeImgTools',
      supportText: 'Scannez le code ou ouvrez Buy Me a Coffee.',
      supportLink: 'Ouvrir Buy Me a Coffee',
      groups: { popular: 'Populaire', compress: 'Compresser par taille', social: 'Tailles réseaux sociaux', pdf: 'PDF et GIF', seo: 'SEO et IA', ecommerce: 'E-commerce' },
      links: {
        compressImages: ['Compresser des images', 'JPG, PNG, WebP, AVIF plus légers'],
        convertFormats: ['Convertir les formats', 'JPG, PNG, WebP, AVIF'],
        resizeImages: ['Redimensionner', 'Pixels personnalisés et modèles'],
        allTools: ['Tous les outils', 'Répertoire complet FreeImgTools'],
        c50: ['Compresser à 50KB', 'Limites strictes'],
        c100: ['Compresser à 100KB', 'Objectif courant de formulaire'],
        c200: ['Compresser sous 200KB', 'Fichiers prêts pour portails'],
        c500: ['Compresser à 500KB', 'Sites web et boutiques'],
        og: ['Image Open Graph', 'Aperçus 1200 x 630'],
        instagramStory: ['Story Instagram', 'Stories 1080 x 1920'],
        facebookCover: ['Couverture Facebook', 'Recadrage de couverture'],
        linkedinBanner: ['Bannière LinkedIn', 'Image d’en-tête'],
        pdfToImage: ['PDF en image', 'Exporter sans Adobe'],
        imageToPdf: ['Image en PDF', 'Créer des PDF sans connexion'],
        gifMaker: ['Créateur GIF', 'Images vers GIF animé'],
        pdfTools: ['Outils PDF', 'Tous les flux PDF'],
        aiTools: ['Outils image IA', 'Texte alt, légendes, tags'],
        seoScanner: ['Scanner SEO d’images', 'Auditer les images d’une URL'],
        seoGuide: ['Guide SEO image', 'Référencement et accessibilité'],
        productSeo: ['SEO image produit', 'Recherche e-commerce'],
        shopify: ['Images produit Shopify', 'Photos carrées 2048'],
        amazon: ['Images produit Amazon', 'Carrés marketplace'],
        etsy: ['Photos Etsy', 'Préparer les images de fiche'],
        productCompress: ['Compresseur produit', 'Pages produit plus rapides'],
      },
      exact: {
        Home: 'Accueil', Tools: 'Outils', Compress: 'Compresser', Convert: 'Convertir', Resize: 'Redimensionner', Guides: 'Guides', 'AI Tools': 'Outils IA',
        About: 'À propos', Contact: 'Contact', 'Privacy Policy': 'Confidentialité', Terms: 'Conditions', Disclaimer: 'Avertissement', 'PDF Tools': 'Outils PDF', 'Mobile Tools': 'Mobile',
        'PDF to Image': 'PDF en image', 'Image to PDF': 'Image en PDF', 'GIF Maker': 'Créateur GIF',
        'FreeImgTools: free img tools that run in your browser.': 'FreeImgTools : des outils image gratuits dans votre navigateur.',
        'Start Compressing': 'Commencer à compresser', 'Run Image SEO Audit': 'Analyser le SEO image', 'Open source on GitHub': 'Open source sur GitHub',
        'Popular tools': 'Outils populaires', 'Choose the job you need done': 'Choisissez la tâche à faire', 'Browse all tools →': 'Voir tous les outils →',
        'All FreeImgTools': 'Tous les outils FreeImgTools', 'Popular image tools': 'Outils image populaires', 'Compress by target size': 'Compresser par taille cible',
        'Format converters': 'Convertisseurs de format', 'Social and platform resizers': 'Tailles réseaux sociaux', 'Application and ID photo tools': 'Photos administratives et ID',
        'Ecommerce image tools': 'Outils image e-commerce', 'Image SEO and editing': 'SEO image et édition',
      },
    },
    de: {
      language: 'Sprache',
      tools: 'Tools',
      findTool: 'Das passende Bild-Tool finden',
      viewAll: 'Alle anzeigen',
      coffee: 'Spendier mir Kaffee',
      coffeeQrLabel: 'Buy Me a Coffee QR-Code anzeigen',
      supportTitle: 'FreeImgTools unterstützen',
      supportText: 'Scanne den Code oder öffne Buy Me a Coffee.',
      supportLink: 'Buy Me a Coffee öffnen',
      groups: { popular: 'Beliebt', compress: 'Nach Größe komprimieren', social: 'Social-Media-Größen', pdf: 'PDF und GIF', seo: 'SEO und KI', ecommerce: 'E-Commerce' },
      links: {
        compressImages: ['Bilder komprimieren', 'Kleinere JPG, PNG, WebP, AVIF'],
        convertFormats: ['Formate konvertieren', 'JPG, PNG, WebP, AVIF'],
        resizeImages: ['Bilder skalieren', 'Eigene Pixel und Vorlagen'],
        allTools: ['Alle Tools', 'Vollständiges FreeImgTools-Verzeichnis'],
        c50: ['Auf 50KB komprimieren', 'Strenge Upload-Limits'],
        c100: ['Auf 100KB komprimieren', 'Häufiges Formularziel'],
        c200: ['Unter 200KB komprimieren', 'Für Portale geeignet'],
        c500: ['Auf 500KB komprimieren', 'Websites und Shops'],
        og: ['Open-Graph-Bild', '1200 x 630 Vorschauen'],
        instagramStory: ['Instagram Story', '1080 x 1920 Stories'],
        facebookCover: ['Facebook Cover', 'Cover-Zuschnitt'],
        linkedinBanner: ['LinkedIn Banner', 'Profil-Headerbild'],
        pdfToImage: ['PDF zu Bild', 'Seiten ohne Adobe exportieren'],
        imageToPdf: ['Bild zu PDF', 'PDFs ohne Login erstellen'],
        gifMaker: ['GIF Maker', 'Bilder zu animiertem GIF'],
        pdfTools: ['PDF Tools', 'Alle PDF-Workflows'],
        aiTools: ['KI-Bildtools', 'Alt-Text, Captions, Tags'],
        seoScanner: ['Bild-SEO-Scanner', 'Bilder einer URL prüfen'],
        seoGuide: ['Bild-SEO-Leitfaden', 'Ranking und Barrierefreiheit'],
        productSeo: ['Produktbild-SEO', 'E-Commerce-Bildsuche'],
        shopify: ['Shopify Produktbilder', '2048 quadratische Fotos'],
        amazon: ['Amazon Produktbilder', 'Marketplace-fertige Quadrate'],
        etsy: ['Etsy Listing-Fotos', 'Listing-Bilder vorbereiten'],
        productCompress: ['Produktfoto-Kompressor', 'Schnellere Produktseiten'],
      },
      exact: {
        Home: 'Start', Tools: 'Tools', Compress: 'Komprimieren', Convert: 'Konvertieren', Resize: 'Skalieren', Guides: 'Guides', 'AI Tools': 'KI-Tools',
        About: 'Über uns', Contact: 'Kontakt', 'Privacy Policy': 'Datenschutz', Terms: 'Bedingungen', Disclaimer: 'Haftungsausschluss', 'PDF Tools': 'PDF Tools', 'Mobile Tools': 'Mobile Tools',
        'PDF to Image': 'PDF zu Bild', 'Image to PDF': 'Bild zu PDF', 'GIF Maker': 'GIF Maker',
        'FreeImgTools: free img tools that run in your browser.': 'FreeImgTools: kostenlose Bild-Tools direkt im Browser.',
        'Start Compressing': 'Komprimieren starten', 'Run Image SEO Audit': 'Bild-SEO prüfen', 'Open source on GitHub': 'Open Source auf GitHub',
        'Popular tools': 'Beliebte Tools', 'Choose the job you need done': 'Wähle deine Aufgabe', 'Browse all tools →': 'Alle Tools ansehen →',
        'All FreeImgTools': 'Alle FreeImgTools', 'Popular image tools': 'Beliebte Bild-Tools', 'Compress by target size': 'Nach Zielgröße komprimieren',
        'Format converters': 'Format-Konverter', 'Social and platform resizers': 'Social- und Plattformgrößen', 'Application and ID photo tools': 'Antrags- und Ausweisfoto-Tools',
        'Ecommerce image tools': 'E-Commerce-Bildtools', 'Image SEO and editing': 'Bild-SEO und Bearbeitung',
      },
    },
  };

  const TOOL_GROUPS = [
    { title: 'popular', links: [['compressImages', '/compress'], ['convertFormats', '/convert'], ['resizeImages', '/resize'], ['allTools', '/tools']] },
    { title: 'compress', links: [['c50', '/compress-image-to-50kb'], ['c100', '/compress-image-to-100kb'], ['c200', '/compress-image-under-200kb'], ['c500', '/compress-image-to-500kb']] },
    { title: 'social', links: [['og', '/open-graph-image-resizer'], ['instagramStory', '/instagram-story-resizer'], ['facebookCover', '/facebook-cover-photo-resizer'], ['linkedinBanner', '/linkedin-banner-resizer']] },
    { title: 'pdf', links: [['pdfToImage', '/pdf-to-image'], ['imageToPdf', '/image-to-pdf'], ['gifMaker', '/gif-maker'], ['pdfTools', '/pdf-tools']] },
    { title: 'seo', links: [['aiTools', '/ai'], ['seoScanner', '/image-seo-audit'], ['seoGuide', '/guides/image-seo'], ['productSeo', '/guides/product-image-seo']] },
    { title: 'ecommerce', links: [['shopify', '/shopify-product-image-resizer'], ['amazon', '/amazon-product-image-resizer'], ['etsy', '/etsy-listing-photo-resizer'], ['productCompress', '/compress-image-to-500kb']] },
  ];

  function getLang() {
    const params = new URLSearchParams(location.search);
    const requested = params.get('lang');
    const stored = localStorage.getItem(LANG_KEY);
    const browserLang = (navigator.language || '').slice(0, 2);
    const code = requested || stored || browserLang || 'en';
    return TEXT[code] ? code : 'en';
  }

  let currentLang = getLang();

  function t(key) {
    return TEXT[currentLang]?.[key] || TEXT.en[key] || key;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]);
  }

  function exactMap() {
    return Object.assign({}, TEXT.en.exact, TEXT[currentLang]?.exact || {});
  }

  function createToolsMenu() {
    const groups = TOOL_GROUPS.map(group => `
      <section class="nav-tool-group">
        <h3>${escapeHtml(t('groups')[group.title])}</h3>
        ${group.links.map(([key, href]) => {
          const [label, desc] = t('links')[key] || TEXT.en.links[key];
          return `
            <a href="${href}">
              <span>${escapeHtml(label)}</span>
              <small>${escapeHtml(desc)}</small>
            </a>
          `;
        }).join('')}
      </section>
    `).join('');

    const wrapper = document.createElement('div');
    wrapper.className = 'nav-tool-dropdown';
    wrapper.innerHTML = `
      <button class="nav-tool-trigger" type="button" aria-expanded="false" aria-controls="nav-tools-panel">
        <span class="nav-tool-spark" aria-hidden="true"></span>
        <span>${escapeHtml(t('tools'))}</span>
        <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4"/></svg>
      </button>
      <div class="nav-tool-panel" id="nav-tools-panel" hidden>
        <div class="nav-tool-panel-head">
          <strong>${escapeHtml(t('findTool'))}</strong>
          <a href="/tools">${escapeHtml(t('viewAll'))}</a>
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
      <a class="nav-coffee-button" href="${COFFEE_URL}" target="_blank" rel="noopener" aria-label="${escapeHtml(t('coffee'))}">
        <span aria-hidden="true">☕</span>
        <span>${escapeHtml(t('coffee'))}</span>
      </a>
      <button class="nav-qr-toggle" type="button" aria-expanded="false" aria-controls="nav-coffee-qr" aria-label="${escapeHtml(t('coffeeQrLabel'))}">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM16 16h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z"/>
        </svg>
      </button>
      <div class="nav-qr-popover" id="nav-coffee-qr" hidden>
        <img src="${QR_SRC}" alt="QR code for Buy Me a Coffee">
        <div>
          <strong>${escapeHtml(t('supportTitle'))}</strong>
          <p>${escapeHtml(t('supportText'))}</p>
          <a href="${COFFEE_URL}" target="_blank" rel="noopener">${escapeHtml(t('supportLink'))}</a>
        </div>
      </div>
    `;
    return wrapper;
  }

  function createLanguageMenu() {
    const wrapper = document.createElement('label');
    wrapper.className = 'nav-language-menu';
    wrapper.setAttribute('aria-label', t('language'));
    wrapper.innerHTML = `
      <span aria-hidden="true">🌐</span>
      <select aria-label="${escapeHtml(t('language'))}">
        ${LANGUAGES.map(([code, label]) => `<option value="${code}"${code === currentLang ? ' selected' : ''}>${escapeHtml(label)}</option>`).join('')}
      </select>
    `;
    wrapper.querySelector('select')?.addEventListener('change', event => {
      currentLang = event.target.value;
      localStorage.setItem(LANG_KEY, currentLang);
      applyLanguage();
    });
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
    if (!nav || !navInner || !logo) return;

    navInner.querySelector('.nav-discovery')?.remove();
    nav.classList.add('nav-enhanced');

    const originalToolsLink = navInner.querySelector('.nav-links a[href="/tools"]');
    originalToolsLink?.closest('li')?.classList.add('nav-tools-original');

    const discovery = document.createElement('div');
    discovery.className = 'nav-discovery';
    discovery.append(createToolsMenu(), createHeaderSupport(), createLanguageMenu());
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

    if (!document.body.dataset.fitHeaderEvents) {
      document.body.dataset.fitHeaderEvents = '1';
      document.addEventListener('click', event => {
        const discoveryEl = document.querySelector('.nav-discovery');
        if (discoveryEl?.contains(event.target)) return;
        document.querySelectorAll('.nav-tool-dropdown, .nav-support-menu').forEach(container => setDropdownOpen(container, false));
      });

      document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        document.querySelectorAll('.nav-tool-dropdown, .nav-support-menu').forEach(container => setDropdownOpen(container, false));
      });
    }
  }

  function translateExactText() {
    const map = exactMap();
    document.querySelectorAll('a, button, h1, h2, h3, p, span, strong, small, summary').forEach(element => {
      if (element.closest('.nav-discovery')) return;
      if (element.closest('#cc-banner')) return;
      if (element.children.length > 0) return;
      const original = element.dataset.i18nOriginal || element.textContent.trim();
      if (!original) return;
      if (!element.dataset.i18nOriginal) element.dataset.i18nOriginal = original;
      element.textContent = map[original] || original;
    });
  }

  function translateCookieBanner() {
    const copies = {
      en: ['Cookie consent', 'This site uses cookies', 'We use cookies to serve ads and analyse traffic. Ads help keep all tools free. You can accept, decline, or read our ', 'Privacy Policy', 'Decline', 'Accept All'],
      zh: ['Cookie 同意', '本站使用 Cookie', '我们使用 Cookie 来展示广告并分析流量。广告帮助免费工具持续运行。你可以接受、拒绝，或阅读我们的', '隐私政策', '拒绝', '全部接受'],
      es: ['Consentimiento de cookies', 'Este sitio usa cookies', 'Usamos cookies para mostrar anuncios y analizar tráfico. Los anuncios ayudan a mantener gratis las herramientas. Puedes aceptar, rechazar o leer nuestra ', 'Política de privacidad', 'Rechazar', 'Aceptar todo'],
      ja: ['Cookie 同意', 'このサイトは Cookie を使用します', '広告表示とアクセス解析のために Cookie を使用します。広告は無料ツールの運営を支えます。承諾、拒否、または', 'プライバシーポリシー', '拒否', 'すべて承諾'],
      la: ['Consensus crustulorum', 'Hic situs crustula utitur', 'Crustula ad nuntios et mensuram frequentiae utimur. Nuntii instrumenta gratuita servant. Potes accipere, recusare, aut legere ', 'Regula privata', 'Recusa', 'Omnia accipe'],
      fr: ['Consentement aux cookies', 'Ce site utilise des cookies', 'Nous utilisons des cookies pour les annonces et l’analyse du trafic. Les annonces aident à garder les outils gratuits. Vous pouvez accepter, refuser ou lire notre ', 'Politique de confidentialité', 'Refuser', 'Tout accepter'],
      de: ['Cookie-Einwilligung', 'Diese Website verwendet Cookies', 'Wir verwenden Cookies für Anzeigen und Traffic-Analyse. Anzeigen helfen, alle Tools kostenlos zu halten. Du kannst akzeptieren, ablehnen oder unsere ', 'Datenschutzerklärung', 'Ablehnen', 'Alle akzeptieren'],
    };
    const copy = copies[currentLang] || copies.en;
    const banner = document.getElementById('cc-banner');
    if (!banner) return;
    banner.setAttribute('aria-label', copy[0]);
    const title = banner.querySelector('#cc-text strong');
    const text = banner.querySelector('#cc-text p');
    const decline = banner.querySelector('#cc-decline');
    const accept = banner.querySelector('#cc-accept');
    if (title) title.textContent = copy[1];
    if (text) text.innerHTML = `${escapeHtml(copy[2])}<a href="/privacy" id="cc-privacy-link">${escapeHtml(copy[3])}</a>.`;
    if (decline) decline.textContent = copy[4];
    if (accept) accept.textContent = copy[5];
  }

  function applyLanguage() {
    document.documentElement.lang = currentLang;
    enhanceHeader();
    translateExactText();
    translateCookieBanner();
    document.dispatchEvent(new CustomEvent('freeimgtools:language-change', { detail: { lang: currentLang } }));
  }

  document.addEventListener('DOMContentLoaded', applyLanguage);
})();
