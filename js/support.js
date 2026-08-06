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
        'Fix your image in seconds. Free. Ridiculously easy.': '几秒修好图片。免费。简单到离谱。',
        'Fix an Image Now': '现在修图片', 'Show Me All Tools': '显示全部工具', 'Crush to 100KB': '压到 100KB',
        'Free image tools for normal people in a hurry': '给普通人救急用的免费图片工具',
        'Make any image behave. Free, fast, weirdly satisfying.': '让任何图片乖乖听话。免费、快速、莫名爽。',
        'Fix a giant phone photo, cute profile picture, anime avatar, homework PDF, passport photo, marketplace listing, or social post without learning image software. Pick a shortcut, drop the file, grab the result.': '不用学修图软件，也能处理手机大图、可爱头像、二次元头像、作业 PDF、证件照、商品图和社交帖子。选一个入口，放文件，拿结果。',
        'Fix My Photo': '修好我的照片', 'Make a Cute Avatar': '做可爱头像', 'Turn Photos into PDF': '照片转 PDF',
        'Free no signup drama': '免费，不折腾注册', 'Phone friendly': '手机好用', '50+ tiny lifesavers': '50+ 个小救星',
        'Drop the image problem here': '把图片问题丢这里', 'Cute avatar ready': '可爱头像完成', 'Profile pics, anime icons, square crops': '头像、二次元图标、方形裁剪',
        'Homework and forms saved': '作业和表格救回来了', 'Photos to one clean PDF': '多张照片合成一个干净 PDF',
        'Fix family phone photos': '帮家人处理手机照片', 'Big camera roll pictures made usable': '把相册大图变得能上传能发送',
        'Now acceptable everywhere': '现在到哪都能用', 'photo-fixed-final-for-real.jpg': 'photo-fixed-final-for-real.jpg', 'take it': '拿走',
        'Start with your real-life problem': '从真实生活问题开始',
        'Not technical? Perfect. Click the situation.': '不懂技术？正好。点你的场景。',
        'See every shortcut →': '查看全部捷径 →',
        'Cute profile picture': '可爱头像', 'Make a selfie, anime avatar, pet photo, or group picture fit your profile circle.': '把自拍、二次元头像、宠物照或合照做成适合头像圈的尺寸。', 'Make my avatar →': '制作我的头像 →',
        'School or homework PDF': '学校/作业 PDF', 'Turn phone photos of homework, notes, receipts, or forms into one neat PDF.': '把作业、笔记、收据或表格照片合成一个整齐 PDF。', 'Build the PDF →': '生成 PDF →',
        'Help family from your phone': '手机上帮家人处理', 'Compress huge camera-roll photos and resize pictures without explaining pixels.': '不用解释像素，直接压缩相册大图、调整图片大小。', 'Open phone tools →': '打开手机工具 →',
        'Annoying upload form': '烦人的上传表单', 'When a site says “file too large,” crush the image to 100KB, 200KB, or 500KB.': '网站提示“文件太大”时，把图片压到 100KB、200KB 或 500KB。', 'Beat the limit →': '突破限制 →',
        'Passport, visa, ID photo': '护照、签证、证件照', 'Resize and compress application photos when the portal is extremely picky.': '申请网站特别挑剔时，快速调整并压缩证件照。', 'Fix ID photo →': '修证件照 →',
        'Social post glow-up': '社交帖子变好看', 'Resize for stories, thumbnails, banners, posts, covers, and share previews.': '调整 Story、缩略图、横幅、帖子、封面和链接预览尺寸。', 'Make it fit →': '让它合适 →',
        'Popular rescue buttons': '热门救急按钮', 'Choose the image headache you want gone.': '选择你想消灭的图片烦恼。',
        'Photo Too Big?': '照片太大？', 'Make huge phone photos small enough for email, forms, chats, and websites.': '把手机大图变小，适合邮件、表单、聊天和网站。', 'Shrink it →': '缩小它 →',
        'Avatar & Profile Pic': '头像和资料照', 'Make selfies, anime icons, cute pictures, and pet photos fit the little circle.': '让自拍、二次元图标、可爱图片和宠物照适配头像小圆圈。', 'Make it cute →': '变可爱 →',
        'Photos to PDF': '照片转 PDF', 'Turn homework, forms, receipts, and notes into one PDF that looks less chaotic.': '把作业、表格、收据和笔记合成一个不混乱的 PDF。',
        'Form Says File Too Large': '表单说文件太大', 'Crush the image to a strict size so the upload page finally stops complaining.': '把图片压到指定大小，让上传页面终于闭嘴。', 'Beat the form →': '搞定表单 →',
        'Passport & ID Photo': '护照和证件照', 'Resize application photos before the government portal rejects them again.': '在申请网站再次拒绝之前，把证件照尺寸调好。',
        'Social Story & Post': '社交 Story 和帖子', 'Make pictures fit Instagram, Facebook, YouTube, TikTok, LinkedIn, and previews.': '让图片适配 Instagram、Facebook、YouTube、TikTok、LinkedIn 和预览图。',
        'Stitch pictures into a little animation for chat, jokes, tutorials, or reactions.': '把图片拼成小动图，用于聊天、玩笑、教程或反应图。',
        'Caption & Alt Text': '标题和 Alt 文本', 'When you cannot think of the words, get captions, tags, and SEO text started.': '想不出怎么写时，先生成标题、标签和 SEO 文案。', 'Make AI help →': '让 AI 帮忙 →',
        'Start Compressing': '开始压缩', 'Run Image SEO Audit': '运行图片 SEO 检查', 'Open source on GitHub': '在 GitHub 查看开源项目',
        'Pick your escape hatch': '选择你的救急工具', 'What annoying image problem are we destroying?': '今天要解决哪个烦人的图片问题？',
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
        'Fix your image in seconds. Free. Ridiculously easy.': 'Arregla tu imagen en segundos. Gratis. Ridículamente fácil.',
        'Fix an Image Now': 'Arreglar una imagen', 'Show Me All Tools': 'Ver todas las herramientas', 'Crush to 100KB': 'Aplastar a 100KB',
        'Free image tools for normal people in a hurry': 'Herramientas gratis para gente normal con prisa',
        'Make any image behave. Free, fast, weirdly satisfying.': 'Haz que cualquier imagen obedezca. Gratis, rápido y curiosamente satisfactorio.',
        'Fix a giant phone photo, cute profile picture, anime avatar, homework PDF, passport photo, marketplace listing, or social post without learning image software. Pick a shortcut, drop the file, grab the result.': 'Arregla una foto enorme del móvil, un perfil bonito, un avatar anime, un PDF de tarea, una foto de pasaporte, una imagen de venta o una publicación social sin aprender software de edición. Elige un atajo, suelta el archivo y descarga.',
        'Fix My Photo': 'Arreglar mi foto', 'Make a Cute Avatar': 'Crear avatar bonito', 'Turn Photos into PDF': 'Fotos a PDF',
        'Free no signup drama': 'Gratis, sin registro', 'Phone friendly': 'Funciona en móvil', '50+ tiny lifesavers': '50+ salvavidas pequeños',
        'Drop the image problem here': 'Suelta aquí el problema', 'Cute avatar ready': 'Avatar bonito listo', 'Profile pics, anime icons, square crops': 'Perfiles, iconos anime y recortes cuadrados',
        'Homework and forms saved': 'Tareas y formularios salvados', 'Photos to one clean PDF': 'Fotos en un PDF limpio',
        'Fix family phone photos': 'Arregla fotos familiares del móvil', 'Big camera roll pictures made usable': 'Fotos enormes listas para usar',
        'Now acceptable everywhere': 'Ahora sirve en todas partes', 'take it': 'descargar',
        'Start with your real-life problem': 'Empieza con tu problema real',
        'Not technical? Perfect. Click the situation.': '¿No eres técnico? Perfecto. Elige la situación.',
        'See every shortcut →': 'Ver todos los atajos →',
        'Cute profile picture': 'Foto de perfil bonita', 'Make a selfie, anime avatar, pet photo, or group picture fit your profile circle.': 'Haz que un selfie, avatar anime, mascota o foto de grupo encaje en el círculo de perfil.', 'Make my avatar →': 'Crear mi avatar →',
        'School or homework PDF': 'PDF escolar o tarea', 'Turn phone photos of homework, notes, receipts, or forms into one neat PDF.': 'Convierte fotos de tareas, notas, recibos o formularios en un PDF ordenado.', 'Build the PDF →': 'Crear el PDF →',
        'Help family from your phone': 'Ayuda a la familia desde el móvil', 'Compress huge camera-roll photos and resize pictures without explaining pixels.': 'Comprime fotos enormes y redimensiona imágenes sin explicar píxeles.', 'Open phone tools →': 'Abrir herramientas móviles →',
        'Annoying upload form': 'Formulario molesto', 'When a site says “file too large,” crush the image to 100KB, 200KB, or 500KB.': 'Cuando un sitio dice “archivo demasiado grande”, baja la imagen a 100KB, 200KB o 500KB.', 'Beat the limit →': 'Vencer el límite →',
        'Passport, visa, ID photo': 'Pasaporte, visa, ID', 'Resize and compress application photos when the portal is extremely picky.': 'Redimensiona y comprime fotos cuando el portal es demasiado exigente.', 'Fix ID photo →': 'Arreglar foto ID →',
        'Social post glow-up': 'Mejora para redes', 'Resize for stories, thumbnails, banners, posts, covers, and share previews.': 'Ajusta stories, miniaturas, banners, posts, portadas y vistas previas.', 'Make it fit →': 'Hacer que encaje →',
        'Popular rescue buttons': 'Botones de rescate populares', 'Choose the image headache you want gone.': 'Elige el dolor de cabeza visual que quieres eliminar.',
        'Photo Too Big?': '¿Foto demasiado grande?', 'Make huge phone photos small enough for email, forms, chats, and websites.': 'Haz fotos del móvil pequeñas para correo, formularios, chats y sitios web.', 'Shrink it →': 'Reducir →',
        'Avatar & Profile Pic': 'Avatar y perfil', 'Make selfies, anime icons, cute pictures, and pet photos fit the little circle.': 'Haz que selfies, iconos anime, fotos bonitas y mascotas encajen en el círculo.', 'Make it cute →': 'Hacerlo bonito →',
        'Photos to PDF': 'Fotos a PDF', 'Turn homework, forms, receipts, and notes into one PDF that looks less chaotic.': 'Convierte tareas, formularios, recibos y notas en un PDF menos caótico.',
        'Form Says File Too Large': 'El formulario dice muy grande', 'Crush the image to a strict size so the upload page finally stops complaining.': 'Comprime la imagen a un tamaño estricto para que la página deje de quejarse.', 'Beat the form →': 'Vencer el formulario →',
        'Passport & ID Photo': 'Pasaporte y foto ID', 'Resize application photos before the government portal rejects them again.': 'Ajusta fotos de solicitud antes de que el portal las rechace otra vez.',
        'Social Story & Post': 'Story y post social', 'Make pictures fit Instagram, Facebook, YouTube, TikTok, LinkedIn, and previews.': 'Haz que las imágenes encajen en Instagram, Facebook, YouTube, TikTok, LinkedIn y previews.',
        'Stitch pictures into a little animation for chat, jokes, tutorials, or reactions.': 'Une imágenes en una pequeña animación para chats, bromas, tutoriales o reacciones.',
        'Caption & Alt Text': 'Caption y alt text', 'When you cannot think of the words, get captions, tags, and SEO text started.': 'Cuando no salen las palabras, empieza con captions, tags y texto SEO.', 'Make AI help →': 'Que ayude la AI →',
        'Start Compressing': 'Comenzar a comprimir', 'Run Image SEO Audit': 'Auditar SEO de imágenes', 'Open source on GitHub': 'Código abierto en GitHub',
        'Pick your escape hatch': 'Elige tu salida rápida', 'What annoying image problem are we destroying?': '¿Qué problema molesto de imagen vamos a destruir?',
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
        'Fix your image in seconds. Free. Ridiculously easy.': '画像を数秒で修正。無料。びっくりするほど簡単。',
        'Fix an Image Now': '今すぐ画像を直す', 'Show Me All Tools': '全ツールを見る', 'Crush to 100KB': '100KB に圧縮',
        'Free image tools for normal people in a hurry': '急いでいる普通の人のための無料画像ツール',
        'Make any image behave. Free, fast, weirdly satisfying.': 'どんな画像も思い通りに。無料、速い、妙に気持ちいい。',
        'Fix a giant phone photo, cute profile picture, anime avatar, homework PDF, passport photo, marketplace listing, or social post without learning image software. Pick a shortcut, drop the file, grab the result.': '大きすぎるスマホ写真、かわいいプロフィール画像、アニメ風アイコン、宿題PDF、証明写真、商品画像、SNS投稿を、画像ソフトを覚えずに直せます。近いショートカットを選んで、ファイルを入れて、結果を保存。',
        'Fix My Photo': '写真を直す', 'Make a Cute Avatar': 'かわいいアイコンを作る', 'Turn Photos into PDF': '写真をPDFにする',
        'Free no signup drama': '無料・登録なし', 'Phone friendly': 'スマホ対応', '50+ tiny lifesavers': '50+ の小さな救急ツール',
        'Drop the image problem here': '画像の問題をここへ', 'Cute avatar ready': 'かわいいアイコン完成', 'Profile pics, anime icons, square crops': 'プロフィール、アニメアイコン、正方形切り抜き',
        'Homework and forms saved': '宿題と書類を救出', 'Photos to one clean PDF': '写真をきれいなPDFに',
        'Fix family phone photos': '家族のスマホ写真を直す', 'Big camera roll pictures made usable': '大きな写真を使いやすく',
        'Now acceptable everywhere': 'これでどこでも使える', 'take it': '保存',
        'Start with your real-life problem': '生活の困りごとから選ぶ',
        'Not technical? Perfect. Click the situation.': '詳しくなくても大丈夫。状況を選ぶだけ。',
        'See every shortcut →': 'すべての近道を見る →',
        'Cute profile picture': 'かわいいプロフィール画像', 'Make a selfie, anime avatar, pet photo, or group picture fit your profile circle.': '自撮り、アニメ風アイコン、ペット写真、集合写真をプロフィール円に合わせます。', 'Make my avatar →': 'アイコンを作る →',
        'School or homework PDF': '学校・宿題PDF', 'Turn phone photos of homework, notes, receipts, or forms into one neat PDF.': '宿題、ノート、レシート、書類のスマホ写真を1つのPDFにまとめます。', 'Build the PDF →': 'PDFを作る →',
        'Help family from your phone': 'スマホで家族を手伝う', 'Compress huge camera-roll photos and resize pictures without explaining pixels.': 'ピクセル説明なしで大きな写真を圧縮・リサイズ。', 'Open phone tools →': 'スマホ用ツールへ →',
        'Annoying upload form': '面倒なアップロード欄', 'When a site says “file too large,” crush the image to 100KB, 200KB, or 500KB.': '「ファイルが大きすぎます」と出たら、100KB、200KB、500KBへ圧縮。', 'Beat the limit →': '制限を突破 →',
        'Passport, visa, ID photo': 'パスポート・ビザ・証明写真', 'Resize and compress application photos when the portal is extremely picky.': '厳しすぎる申請サイト向けに写真を調整・圧縮。', 'Fix ID photo →': '証明写真を直す →',
        'Social post glow-up': 'SNS投稿を整える', 'Resize for stories, thumbnails, banners, posts, covers, and share previews.': 'ストーリー、サムネ、バナー、投稿、カバー、共有プレビュー用に調整。', 'Make it fit →': '合わせる →',
        'Popular rescue buttons': '人気の救急ボタン', 'Choose the image headache you want gone.': '消したい画像の悩みを選んでください。',
        'Photo Too Big?': '写真が大きすぎる？', 'Make huge phone photos small enough for email, forms, chats, and websites.': '大きなスマホ写真をメール、フォーム、チャット、サイト用に小さくします。', 'Shrink it →': '小さくする →',
        'Avatar & Profile Pic': 'アバター・プロフィール画像', 'Make selfies, anime icons, cute pictures, and pet photos fit the little circle.': '自撮り、アニメアイコン、かわいい写真、ペット写真を丸い枠に合わせます。', 'Make it cute →': 'かわいくする →',
        'Photos to PDF': '写真をPDFへ', 'Turn homework, forms, receipts, and notes into one PDF that looks less chaotic.': '宿題、書類、レシート、メモを見やすいPDFにまとめます。',
        'Form Says File Too Large': 'フォームが大きすぎると言う', 'Crush the image to a strict size so the upload page finally stops complaining.': '画像を指定サイズまで圧縮して、アップロード画面を通します。', 'Beat the form →': 'フォームを通す →',
        'Passport & ID Photo': 'パスポート・証明写真', 'Resize application photos before the government portal rejects them again.': '申請サイトにまた拒否される前に写真サイズを整えます。',
        'Social Story & Post': 'SNSストーリー・投稿', 'Make pictures fit Instagram, Facebook, YouTube, TikTok, LinkedIn, and previews.': 'Instagram、Facebook、YouTube、TikTok、LinkedIn、プレビューに合わせます。',
        'Stitch pictures into a little animation for chat, jokes, tutorials, or reactions.': '画像をつなげて、チャット、ネタ、チュートリアル、リアクション用のGIFに。',
        'Caption & Alt Text': 'キャプション・Altテキスト', 'When you cannot think of the words, get captions, tags, and SEO text started.': '言葉が浮かばない時に、キャプション、タグ、SEO文を作り始めます。', 'Make AI help →': 'AIに手伝わせる →',
        'Start Compressing': '圧縮を開始', 'Run Image SEO Audit': '画像 SEO をチェック', 'Open source on GitHub': 'GitHub で公開中',
        'Pick your escape hatch': '救急ツールを選ぶ', 'What annoying image problem are we destroying?': 'どの面倒な画像問題を片付けますか？',
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
        'Fix your image in seconds. Free. Ridiculously easy.': 'Imaginem tuam secundis corrige. Gratis. Mire facile.',
        'Fix an Image Now': 'Imaginem nunc corrige', 'Show Me All Tools': 'Omnia instrumenta monstra', 'Crush to 100KB': 'Ad 100KB comprime',
        'Free image tools for normal people in a hurry': 'Instrumenta imaginum gratuita hominibus festinantibus',
        'Make any image behave. Free, fast, weirdly satisfying.': 'Fac ut imago pareat. Gratis, celeriter, mira voluptate.',
        'Fix a giant phone photo, cute profile picture, anime avatar, homework PDF, passport photo, marketplace listing, or social post without learning image software. Pick a shortcut, drop the file, grab the result.': 'Corrige photographema magnum telephoni, imaginem profili, avatarium anime, PDF scholare, photographema diplomatis, imaginem mercatus, vel nuntium socialem sine arte difficili. Elige viam brevem, mitte fasciculum, accipe exitum.',
        'Fix My Photo': 'Photographema corrige', 'Make a Cute Avatar': 'Avatarium pulchrum crea', 'Turn Photos into PDF': 'Photographemata in PDF',
        'Free no signup drama': 'Gratis sine inscriptione', 'Phone friendly': 'Telephonio aptum', '50+ tiny lifesavers': '50+ parva auxilia',
        'Drop the image problem here': 'Problema imaginis hic mitte', 'Cute avatar ready': 'Avatarium paratum', 'Profile pics, anime icons, square crops': 'Imagines profili, icones anime, quadrata',
        'Homework and forms saved': 'Pensum et formae servatae', 'Photos to one clean PDF': 'Photographemata in unum PDF',
        'Fix family phone photos': 'Imagines familiarum corrige', 'Big camera roll pictures made usable': 'Magnae imagines fiunt utiles',
        'Now acceptable everywhere': 'Nunc ubique accipitur', 'take it': 'accipe',
        'Start with your real-life problem': 'Incipe a vero problemate',
        'Not technical? Perfect. Click the situation.': 'Non technicus? Optime. Elige condicionem.',
        'See every shortcut →': 'Omnes vias breves vide →',
        'Cute profile picture': 'Imago profili pulchra', 'Make a selfie, anime avatar, pet photo, or group picture fit your profile circle.': 'Selfie, avatarium anime, animalis imaginem, vel coetus imaginem circulo apta.', 'Make my avatar →': 'Avatarium crea →',
        'School or homework PDF': 'PDF scholae vel pensi', 'Turn phone photos of homework, notes, receipts, or forms into one neat PDF.': 'Photographemata pensi, notarum, receptarum, vel formarum in unum PDF verte.', 'Build the PDF →': 'PDF crea →',
        'Help family from your phone': 'Familiam telephonio iuva', 'Compress huge camera-roll photos and resize pictures without explaining pixels.': 'Magnas imagines comprime et redimensiona sine pixel explicando.', 'Open phone tools →': 'Instrumenta mobilia aperi →',
        'Annoying upload form': 'Forma onerationis molesta', 'When a site says “file too large,” crush the image to 100KB, 200KB, or 500KB.': 'Cum situs dicit fasciculum nimis magnum esse, comprime ad 100KB, 200KB, vel 500KB.', 'Beat the limit →': 'Vince modum →',
        'Passport, visa, ID photo': 'Diploma, visa, ID photo', 'Resize and compress application photos when the portal is extremely picky.': 'Imagines petitionis redimensiona et comprime cum porta nimis exacta est.', 'Fix ID photo →': 'ID photo corrige →',
        'Social post glow-up': 'Nuntius socialis melior', 'Resize for stories, thumbnails, banners, posts, covers, and share previews.': 'Redimensiona pro fabulis, iconibus, vexillis, nuntiis, operculis, et praevisis.', 'Make it fit →': 'Apta fac →',
        'Popular rescue buttons': 'Bullae auxilii populares', 'Choose the image headache you want gone.': 'Elige molestiam imaginis delendam.',
        'Photo Too Big?': 'Photo nimis magna?', 'Make huge phone photos small enough for email, forms, chats, and websites.': 'Magna photographemata telephoni parva fac pro email, formis, colloquiis, et sitibus.', 'Shrink it →': 'Minue →',
        'Avatar & Profile Pic': 'Avatarium et profilum', 'Make selfies, anime icons, cute pictures, and pet photos fit the little circle.': 'Selfies, icones anime, imagines pulchras, et animalia circulo apta fac.', 'Make it cute →': 'Pulchrum fac →',
        'Photos to PDF': 'Photographemata ad PDF', 'Turn homework, forms, receipts, and notes into one PDF that looks less chaotic.': 'Pensum, formas, receptas, et notas in unum PDF ordinatum verte.',
        'Form Says File Too Large': 'Forma dicit fasciculum magnum', 'Crush the image to a strict size so the upload page finally stops complaining.': 'Imaginem ad magnitudinem strictam comprime ut pagina taceat.', 'Beat the form →': 'Formam vince →',
        'Passport & ID Photo': 'Diploma et ID photo', 'Resize application photos before the government portal rejects them again.': 'Imagines petitionis apta antequam porta eas iterum reiciat.',
        'Social Story & Post': 'Fabula et nuntius socialis', 'Make pictures fit Instagram, Facebook, YouTube, TikTok, LinkedIn, and previews.': 'Imagines apta pro Instagram, Facebook, YouTube, TikTok, LinkedIn, et praevisis.',
        'Stitch pictures into a little animation for chat, jokes, tutorials, or reactions.': 'Imagines coniunge in parvam animationem pro colloquiis, iocis, disciplinis, vel reactionibus.',
        'Caption & Alt Text': 'Titulus et textus alt', 'When you cannot think of the words, get captions, tags, and SEO text started.': 'Cum verba non veniunt, titulos, notas, et textum SEO incipe.', 'Make AI help →': 'AI adiuvet →',
        'Start Compressing': 'Comprimere incipias', 'Run Image SEO Audit': 'SEO imaginum examina', 'Open source on GitHub': 'Fons apertus in GitHub',
        'Pick your escape hatch': 'Exitum celerem elige', 'What annoying image problem are we destroying?': 'Quod molestum problema imaginis hodie delendum est?',
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
        'Fix your image in seconds. Free. Ridiculously easy.': 'Réparez votre image en quelques secondes. Gratuit. Ridiculement simple.',
        'Fix an Image Now': 'Réparer une image', 'Show Me All Tools': 'Voir tous les outils', 'Crush to 100KB': 'Écraser à 100KB',
        'Free image tools for normal people in a hurry': 'Outils image gratuits pour gens pressés',
        'Make any image behave. Free, fast, weirdly satisfying.': 'Faites obéir n’importe quelle image. Gratuit, rapide, bizarrement satisfaisant.',
        'Fix a giant phone photo, cute profile picture, anime avatar, homework PDF, passport photo, marketplace listing, or social post without learning image software. Pick a shortcut, drop the file, grab the result.': 'Réparez une grosse photo de téléphone, une jolie photo de profil, un avatar anime, un PDF de devoirs, une photo de passeport, une image de boutique ou un post social sans apprendre un logiciel d’image. Choisissez un raccourci, déposez le fichier, récupérez le résultat.',
        'Fix My Photo': 'Réparer ma photo', 'Make a Cute Avatar': 'Créer un avatar mignon', 'Turn Photos into PDF': 'Photos en PDF',
        'Free no signup drama': 'Gratuit, sans inscription', 'Phone friendly': 'Pratique sur mobile', '50+ tiny lifesavers': '50+ mini sauveteurs',
        'Drop the image problem here': 'Déposez le problème ici', 'Cute avatar ready': 'Avatar mignon prêt', 'Profile pics, anime icons, square crops': 'Profils, icônes anime, recadrages carrés',
        'Homework and forms saved': 'Devoirs et formulaires sauvés', 'Photos to one clean PDF': 'Photos vers un PDF propre',
        'Fix family phone photos': 'Réparer les photos de famille', 'Big camera roll pictures made usable': 'Grosses photos enfin utilisables',
        'Now acceptable everywhere': 'Accepté partout maintenant', 'take it': 'prendre',
        'Start with your real-life problem': 'Commencez par votre vrai problème',
        'Not technical? Perfect. Click the situation.': 'Pas technique ? Parfait. Cliquez sur la situation.',
        'See every shortcut →': 'Voir tous les raccourcis →',
        'Cute profile picture': 'Jolie photo de profil', 'Make a selfie, anime avatar, pet photo, or group picture fit your profile circle.': 'Faites entrer un selfie, avatar anime, animal ou photo de groupe dans le cercle du profil.', 'Make my avatar →': 'Créer mon avatar →',
        'School or homework PDF': 'PDF école ou devoirs', 'Turn phone photos of homework, notes, receipts, or forms into one neat PDF.': 'Transformez des photos de devoirs, notes, reçus ou formulaires en un PDF propre.', 'Build the PDF →': 'Créer le PDF →',
        'Help family from your phone': 'Aider la famille depuis le mobile', 'Compress huge camera-roll photos and resize pictures without explaining pixels.': 'Compressez de grosses photos et redimensionnez sans expliquer les pixels.', 'Open phone tools →': 'Ouvrir les outils mobile →',
        'Annoying upload form': 'Formulaire d’envoi pénible', 'When a site says “file too large,” crush the image to 100KB, 200KB, or 500KB.': 'Quand un site dit « fichier trop lourd », descendez l’image à 100KB, 200KB ou 500KB.', 'Beat the limit →': 'Battre la limite →',
        'Passport, visa, ID photo': 'Passeport, visa, photo ID', 'Resize and compress application photos when the portal is extremely picky.': 'Redimensionnez et compressez les photos quand le portail est très difficile.', 'Fix ID photo →': 'Réparer la photo ID →',
        'Social post glow-up': 'Améliorer un post social', 'Resize for stories, thumbnails, banners, posts, covers, and share previews.': 'Redimensionnez stories, miniatures, bannières, posts, couvertures et aperçus.', 'Make it fit →': 'Faire rentrer →',
        'Popular rescue buttons': 'Boutons de secours populaires', 'Choose the image headache you want gone.': 'Choisissez le mal de tête image à faire disparaître.',
        'Photo Too Big?': 'Photo trop lourde ?', 'Make huge phone photos small enough for email, forms, chats, and websites.': 'Réduisez les grosses photos pour email, formulaires, chats et sites web.', 'Shrink it →': 'Réduire →',
        'Avatar & Profile Pic': 'Avatar et photo de profil', 'Make selfies, anime icons, cute pictures, and pet photos fit the little circle.': 'Faites entrer selfies, icônes anime, images mignonnes et animaux dans le petit cercle.', 'Make it cute →': 'Rendre mignon →',
        'Photos to PDF': 'Photos en PDF', 'Turn homework, forms, receipts, and notes into one PDF that looks less chaotic.': 'Transformez devoirs, formulaires, reçus et notes en un PDF moins chaotique.',
        'Form Says File Too Large': 'Le formulaire dit trop lourd', 'Crush the image to a strict size so the upload page finally stops complaining.': 'Compressez à une taille stricte pour que la page d’envoi arrête de râler.', 'Beat the form →': 'Battre le formulaire →',
        'Passport & ID Photo': 'Passeport et photo ID', 'Resize application photos before the government portal rejects them again.': 'Ajustez les photos avant que le portail les rejette encore.',
        'Social Story & Post': 'Story et post social', 'Make pictures fit Instagram, Facebook, YouTube, TikTok, LinkedIn, and previews.': 'Adaptez les images à Instagram, Facebook, YouTube, TikTok, LinkedIn et aux aperçus.',
        'Stitch pictures into a little animation for chat, jokes, tutorials, or reactions.': 'Assemblez des images en petite animation pour chats, blagues, tutos ou réactions.',
        'Caption & Alt Text': 'Légende et alt text', 'When you cannot think of the words, get captions, tags, and SEO text started.': 'Quand les mots ne viennent pas, lancez légendes, tags et texte SEO.', 'Make AI help →': 'Faire aider par l’IA →',
        'Start Compressing': 'Commencer à compresser', 'Run Image SEO Audit': 'Analyser le SEO image', 'Open source on GitHub': 'Open source sur GitHub',
        'Pick your escape hatch': 'Choisissez votre sortie de secours', 'What annoying image problem are we destroying?': 'Quel problème d’image pénible détruit-on ?',
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
        'Fix your image in seconds. Free. Ridiculously easy.': 'Bild in Sekunden reparieren. Kostenlos. Lächerlich einfach.',
        'Fix an Image Now': 'Bild jetzt reparieren', 'Show Me All Tools': 'Alle Tools zeigen', 'Crush to 100KB': 'Auf 100KB drücken',
        'Free image tools for normal people in a hurry': 'Kostenlose Bild-Tools für normale Menschen mit Eile',
        'Make any image behave. Free, fast, weirdly satisfying.': 'Bring jedes Bild zur Vernunft. Kostenlos, schnell, seltsam befriedigend.',
        'Fix a giant phone photo, cute profile picture, anime avatar, homework PDF, passport photo, marketplace listing, or social post without learning image software. Pick a shortcut, drop the file, grab the result.': 'Repariere ein riesiges Handyfoto, ein süßes Profilbild, einen Anime-Avatar, ein Hausaufgaben-PDF, ein Passfoto, ein Verkaufsbild oder einen Social Post, ohne Bildsoftware zu lernen. Shortcut wählen, Datei ablegen, Ergebnis holen.',
        'Fix My Photo': 'Mein Foto reparieren', 'Make a Cute Avatar': 'Süßen Avatar machen', 'Turn Photos into PDF': 'Fotos in PDF',
        'Free no signup drama': 'Kostenlos, ohne Registrierung', 'Phone friendly': 'Handyfreundlich', '50+ tiny lifesavers': '50+ kleine Retter',
        'Drop the image problem here': 'Bildproblem hier ablegen', 'Cute avatar ready': 'Süßer Avatar fertig', 'Profile pics, anime icons, square crops': 'Profilbilder, Anime-Icons, quadratische Zuschnitte',
        'Homework and forms saved': 'Hausaufgaben und Formulare gerettet', 'Photos to one clean PDF': 'Fotos zu einem sauberen PDF',
        'Fix family phone photos': 'Familienfotos vom Handy reparieren', 'Big camera roll pictures made usable': 'Große Handyfotos werden nutzbar',
        'Now acceptable everywhere': 'Jetzt überall akzeptiert', 'take it': 'nehmen',
        'Start with your real-life problem': 'Starte mit deinem echten Problem',
        'Not technical? Perfect. Click the situation.': 'Nicht technisch? Perfekt. Klick die Situation.',
        'See every shortcut →': 'Alle Shortcuts ansehen →',
        'Cute profile picture': 'Süßes Profilbild', 'Make a selfie, anime avatar, pet photo, or group picture fit your profile circle.': 'Mach Selfie, Anime-Avatar, Haustierfoto oder Gruppenbild passend für den Profilkreis.', 'Make my avatar →': 'Avatar machen →',
        'School or homework PDF': 'Schule oder Hausaufgaben-PDF', 'Turn phone photos of homework, notes, receipts, or forms into one neat PDF.': 'Verwandle Handyfotos von Hausaufgaben, Notizen, Belegen oder Formularen in ein ordentliches PDF.', 'Build the PDF →': 'PDF erstellen →',
        'Help family from your phone': 'Familie vom Handy aus helfen', 'Compress huge camera-roll photos and resize pictures without explaining pixels.': 'Komprimiere große Handyfotos und ändere Größen ohne Pixel-Erklärung.', 'Open phone tools →': 'Handy-Tools öffnen →',
        'Annoying upload form': 'Nerviges Upload-Formular', 'When a site says “file too large,” crush the image to 100KB, 200KB, or 500KB.': 'Wenn eine Seite “Datei zu groß” sagt, drücke das Bild auf 100KB, 200KB oder 500KB.', 'Beat the limit →': 'Limit schlagen →',
        'Passport, visa, ID photo': 'Pass, Visum, Ausweisfoto', 'Resize and compress application photos when the portal is extremely picky.': 'Größe ändern und komprimieren, wenn das Portal extrem pingelig ist.', 'Fix ID photo →': 'Ausweisfoto reparieren →',
        'Social post glow-up': 'Social Post aufpolieren', 'Resize for stories, thumbnails, banners, posts, covers, and share previews.': 'Anpassen für Stories, Thumbnails, Banner, Posts, Cover und Vorschauen.', 'Make it fit →': 'Passend machen →',
        'Popular rescue buttons': 'Beliebte Rettungsbuttons', 'Choose the image headache you want gone.': 'Wähle das Bildproblem, das verschwinden soll.',
        'Photo Too Big?': 'Foto zu groß?', 'Make huge phone photos small enough for email, forms, chats, and websites.': 'Mache riesige Handyfotos klein genug für E-Mail, Formulare, Chats und Websites.', 'Shrink it →': 'Verkleinern →',
        'Avatar & Profile Pic': 'Avatar und Profilbild', 'Make selfies, anime icons, cute pictures, and pet photos fit the little circle.': 'Selfies, Anime-Icons, süße Bilder und Haustierfotos in den kleinen Kreis bringen.', 'Make it cute →': 'Süß machen →',
        'Photos to PDF': 'Fotos zu PDF', 'Turn homework, forms, receipts, and notes into one PDF that looks less chaotic.': 'Hausaufgaben, Formulare, Belege und Notizen in ein weniger chaotisches PDF verwandeln.',
        'Form Says File Too Large': 'Formular sagt Datei zu groß', 'Crush the image to a strict size so the upload page finally stops complaining.': 'Drücke das Bild auf eine strenge Größe, damit die Upload-Seite endlich Ruhe gibt.', 'Beat the form →': 'Formular schlagen →',
        'Passport & ID Photo': 'Pass- und Ausweisfoto', 'Resize application photos before the government portal rejects them again.': 'Antragsfotos anpassen, bevor das Portal sie wieder ablehnt.',
        'Social Story & Post': 'Social Story und Post', 'Make pictures fit Instagram, Facebook, YouTube, TikTok, LinkedIn, and previews.': 'Bilder passend machen für Instagram, Facebook, YouTube, TikTok, LinkedIn und Vorschauen.',
        'Stitch pictures into a little animation for chat, jokes, tutorials, or reactions.': 'Bilder zu einer kleinen Animation für Chat, Spaß, Tutorials oder Reaktionen verbinden.',
        'Caption & Alt Text': 'Caption und Alt-Text', 'When you cannot think of the words, get captions, tags, and SEO text started.': 'Wenn dir keine Worte einfallen, starte mit Captions, Tags und SEO-Text.', 'Make AI help →': 'AI helfen lassen →',
        'Start Compressing': 'Komprimieren starten', 'Run Image SEO Audit': 'Bild-SEO prüfen', 'Open source on GitHub': 'Open Source auf GitHub',
        'Pick your escape hatch': 'Wähle deinen Ausweg', 'What annoying image problem are we destroying?': 'Welches nervige Bildproblem zerstören wir?',
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
    const select = wrapper.querySelector('select');
    const handleLanguageSelect = event => {
      currentLang = event.target.value;
      localStorage.setItem(LANG_KEY, currentLang);
      const url = new URL(location.href);
      url.searchParams.set('lang', currentLang);
      history.replaceState({}, '', url);
      applyLanguage();
    };
    select?.addEventListener('change', handleLanguageSelect);
    select?.addEventListener('input', handleLanguageSelect);
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
      en: ['Cookie consent', 'This site uses cookies', 'Cookies help ads and traffic stats keep these free tools running. Accept, decline, or read our ', 'Privacy Policy', 'Decline', 'Accept All'],
      zh: ['Cookie 同意', '本站使用 Cookie', 'Cookie 用于广告和流量统计，帮助免费工具持续运行。你可以接受、拒绝，或阅读我们的', '隐私政策', '拒绝', '全部接受'],
      es: ['Consentimiento de cookies', 'Este sitio usa cookies', 'Las cookies ayudan con anuncios y estadísticas para mantener gratis las herramientas. Puedes aceptar, rechazar o leer nuestra ', 'Política de privacidad', 'Rechazar', 'Aceptar todo'],
      ja: ['Cookie 同意', 'このサイトは Cookie を使用します', 'Cookie は広告とアクセス解析に使われ、無料ツールの運営を支えます。承諾、拒否、または', 'プライバシーポリシー', '拒否', 'すべて承諾'],
      la: ['Consensus crustulorum', 'Hic situs crustula utitur', 'Crustula nuntiis et mensurae prosunt, ut instrumenta gratuita maneant. Potes accipere, recusare, aut legere ', 'Regula privata', 'Recusa', 'Omnia accipe'],
      fr: ['Consentement aux cookies', 'Ce site utilise des cookies', 'Les cookies aident les annonces et statistiques à garder ces outils gratuits. Vous pouvez accepter, refuser ou lire notre ', 'Politique de confidentialité', 'Refuser', 'Tout accepter'],
      de: ['Cookie-Einwilligung', 'Diese Website verwendet Cookies', 'Cookies helfen Anzeigen und Statistiken, diese Tools kostenlos zu halten. Du kannst akzeptieren, ablehnen oder unsere ', 'Datenschutzerklärung', 'Ablehnen', 'Alle akzeptieren'],
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
