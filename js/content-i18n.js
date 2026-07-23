(function () {
  const LANG_KEY = 'freeimgtools_lang';
  const SUPPORTED = new Set(['zh', 'es', 'ja', 'la', 'fr', 'de']);
  const EXACT = {};

  function add(en, zh, es, ja, la, fr, de) {
    EXACT[normalize(en)] = { zh, es, ja, la, fr, de };
  }

  function normalize(text) {
    return String(text)
      .replace(/\s+/g, ' ')
      .replace(/\s*▼\s*$/, '')
      .trim();
  }

  // Site-wide common labels, tool cards, and section headings.
  add('Frequently asked questions', '常见问题', 'Preguntas frecuentes', 'よくある質問', 'Quaestiones frequentes', 'Questions fréquentes', 'Häufig gestellte Fragen');
  add('Frequently Asked Questions', '常见问题', 'Preguntas frecuentes', 'よくある質問', 'Quaestiones frequentes', 'Questions fréquentes', 'Häufig gestellte Fragen');
  add('FAQ', '常见问题', 'Preguntas frecuentes', 'FAQ', 'FAQ', 'FAQ', 'FAQ');
  add('Related tools', '相关工具', 'Herramientas relacionadas', '関連ツール', 'Instrumenta cognata', 'Outils associés', 'Verwandte Tools');
  add('Related image tools', '相关图片工具', 'Herramientas de imagen relacionadas', '関連画像ツール', 'Instrumenta imaginum cognata', 'Outils image associés', 'Verwandte Bild-Tools');
  add('Related guides', '相关文章指南', 'Guías relacionadas', '関連ガイド', 'Duces cognati', 'Guides associés', 'Verwandte Guides');
  add('Related guides and tools', '相关指南和工具', 'Guías y herramientas relacionadas', '関連ガイドとツール', 'Duces et instrumenta cognata', 'Guides et outils associés', 'Verwandte Guides und Tools');
  add('Tools used in this guide', '本指南用到的工具', 'Herramientas usadas en esta guía', 'このガイドで使うツール', 'Instrumenta in hoc duce adhibita', 'Outils utilisés dans ce guide', 'In diesem Guide verwendete Tools');
  add('Other guides', '其他指南', 'Otras guías', 'その他のガイド', 'Alii duces', 'Autres guides', 'Weitere Guides');
  add('Other tools', '其他工具', 'Otras herramientas', 'その他のツール', 'Alia instrumenta', 'Autres outils', 'Weitere Tools');
  add('Other conversions', '其他转换', 'Otras conversiones', 'その他の変換', 'Aliae conversiones', 'Autres conversions', 'Weitere Konvertierungen');
  add('Related compression tools', '相关压缩工具', 'Herramientas de compresión relacionadas', '関連圧縮ツール', 'Instrumenta compressionis cognata', 'Outils de compression associés', 'Verwandte Komprimierungs-Tools');
  add('Related ecommerce image tools', '相关电商图片工具', 'Herramientas de imagen para ecommerce relacionadas', '関連EC画像ツール', 'Instrumenta imaginum mercaturae cognata', 'Outils image e-commerce associés', 'Verwandte E-Commerce-Bildtools');
  add('Related ID photo tools', '相关证件照工具', 'Herramientas relacionadas para fotos de ID', '関連証明写真ツール', 'Instrumenta photographiarum ID cognata', 'Outils photo d’identité associés', 'Verwandte Ausweisfoto-Tools');
  add('Download All', '全部下载', 'Descargar todo', 'すべてダウンロード', 'Omnia excipe', 'Tout télécharger', 'Alle herunterladen');
  add('↓ Download All (ZIP)', '↓ 全部下载（ZIP）', '↓ Descargar todo (ZIP)', '↓ すべてダウンロード（ZIP）', '↓ Omnia excipe (ZIP)', '↓ Tout télécharger (ZIP)', '↓ Alle herunterladen (ZIP)');
  add('Clear all', '清空全部', 'Borrar todo', 'すべてクリア', 'Omnia dele', 'Tout effacer', 'Alles löschen');
  add('Results', '结果', 'Resultados', '結果', 'Eventus', 'Résultats', 'Ergebnisse');
  add('Settings', '设置', 'Ajustes', '設定', 'Optiones', 'Réglages', 'Einstellungen');
  add('Conversion Settings', '转换设置', 'Ajustes de conversión', '変換設定', 'Optiones conversionis', 'Réglages de conversion', 'Konvertierungseinstellungen');
  add('Resize Settings', '尺寸设置', 'Ajustes de tamaño', 'サイズ設定', 'Optiones mensurae', 'Réglages de taille', 'Größeneinstellungen');
  add('Drop images here', '把图片拖到这里', 'Suelta imágenes aquí', 'ここに画像をドロップ', 'Imagines hic mitte', 'Déposez les images ici', 'Bilder hier ablegen');
  add('Drop your image here', '把图片拖到这里', 'Suelta tu imagen aquí', 'ここに画像をドロップ', 'Imaginem tuam hic mitte', 'Déposez votre image ici', 'Bild hier ablegen');
  add('Drop your photo here', '把照片拖到这里', 'Suelta tu foto aquí', 'ここに写真をドロップ', 'Photographiam tuam hic mitte', 'Déposez votre photo ici', 'Foto hier ablegen');
  add('or click to browse — JPG, PNG, WebP accepted', '或点击浏览 — 支持 JPG、PNG、WebP', 'o haz clic para elegir — acepta JPG, PNG, WebP', 'クリックして選択 — JPG、PNG、WebP 対応', 'aut preme ut eligas — JPG, PNG, WebP accipiuntur', 'ou cliquez pour choisir — JPG, PNG, WebP acceptés', 'oder klicken zum Auswählen — JPG, PNG, WebP unterstützt');
  add('or click to browse — JPG, PNG, WebP, AVIF accepted', '或点击浏览 — 支持 JPG、PNG、WebP、AVIF', 'o haz clic para elegir — acepta JPG, PNG, WebP, AVIF', 'クリックして選択 — JPG、PNG、WebP、AVIF 対応', 'aut preme ut eligas — JPG, PNG, WebP, AVIF accipiuntur', 'ou cliquez pour choisir — JPG, PNG, WebP, AVIF acceptés', 'oder klicken zum Auswählen — JPG, PNG, WebP, AVIF unterstützt');
  add('Are my images private?', '我的图片安全吗？', '¿Mis imágenes son privadas?', '画像はプライベートですか？', 'Suntne imagines meae privatae?', 'Mes images sont-elles privées ?', 'Sind meine Bilder privat?');
  add('Image Compressor', '图片压缩器', 'Compresor de imágenes', '画像圧縮ツール', 'Compressor imaginum', 'Compresseur d’images', 'Bildkompressor');
  add('Image Resizer', '图片尺寸调整器', 'Redimensionador de imágenes', '画像リサイズ', 'Mutator mensurae imaginum', 'Redimensionneur d’images', 'Bildgrößen-Tool');
  add('Format Converter', '格式转换器', 'Convertidor de formatos', '形式変換ツール', 'Conversor formarum', 'Convertisseur de format', 'Formatkonverter');
  add('Image Optimization Guides', '图片优化指南', 'Guías de optimización de imágenes', '画像最適化ガイド', 'Duces optimizationis imaginum', 'Guides d’optimisation d’images', 'Bildoptimierungs-Guides');
  add('All guides', '全部指南', 'Todas las guías', 'すべてのガイド', 'Omnes duces', 'Tous les guides', 'Alle Guides');
  add('Quick answers', '快速回答', 'Respuestas rápidas', 'クイック回答', 'Responsa brevia', 'Réponses rapides', 'Kurze Antworten');

  // Page titles and tool H1 labels.
  add('Page Not Found', '页面未找到', 'Página no encontrada', 'ページが見つかりません', 'Pagina non inventa', 'Page introuvable', 'Seite nicht gefunden');
  add('About Free Image Tools', '关于 Free Image Tools', 'Acerca de Free Image Tools', 'Free Image Tools について', 'De Free Image Tools', 'À propos de Free Image Tools', 'Über Free Image Tools');
  add('Add White Border to Photo', '给照片添加白边', 'Añadir borde blanco a una foto', '写真に白い余白を追加', 'Marginem albam photographiae adde', 'Ajouter une bordure blanche à une photo', 'Weißen Rand zum Foto hinzufügen');
  add('AI Image SEO Tools', 'AI 图片 SEO 工具', 'Herramientas IA de SEO de imágenes', 'AI 画像 SEO ツール', 'Instrumenta AI SEO imaginum', 'Outils IA de SEO image', 'KI-Bild-SEO-Tools');
  add('Amazon Product Image Resizer', 'Amazon 产品图片尺寸调整器', 'Redimensionador de imágenes de producto Amazon', 'Amazon 商品画像リサイズ', 'Mutator mensurae imaginum producti Amazon', 'Redimensionneur d’images produit Amazon', 'Amazon Produktbild-Resizer');
  add('AVIF to JPG / JPEG Converter', 'AVIF 转 JPG / JPEG 转换器', 'Convertidor AVIF a JPG / JPEG', 'AVIF から JPG / JPEG 変換', 'Conversor AVIF ad JPG / JPEG', 'Convertisseur AVIF vers JPG / JPEG', 'AVIF zu JPG / JPEG Konverter');
  add('Batch Convert WebP to PNG', '批量 WebP 转 PNG', 'Convertir WebP a PNG en lote', 'WebP を PNG に一括変換', 'WebP ad PNG catervatim convertere', 'Convertir WebP en PNG par lot', 'WebP stapelweise in PNG konvertieren');
  add('Compress Image for Online Form', '在线表单图片压缩', 'Comprimir imagen para formulario online', 'オンラインフォーム用画像圧縮', 'Imaginem pro forma interretiali comprimere', 'Compresser une image pour formulaire en ligne', 'Bild für Online-Formular komprimieren');
  add('Compress Image to 100KB', '图片压缩到 100KB', 'Comprimir imagen a 100KB', '画像を 100KB に圧縮', 'Imaginem ad 100KB comprimere', 'Compresser une image à 100KB', 'Bild auf 100KB komprimieren');
  add('Compress Image to 500KB', '图片压缩到 500KB', 'Comprimir imagen a 500KB', '画像を 500KB に圧縮', 'Imaginem ad 500KB comprimere', 'Compresser une image à 500KB', 'Bild auf 500KB komprimieren');
  add('Compress Image to 50KB', '图片压缩到 50KB', 'Comprimir imagen a 50KB', '画像を 50KB に圧縮', 'Imaginem ad 50KB comprimere', 'Compresser une image à 50KB', 'Bild auf 50KB komprimieren');
  add('Compress Image to Under 200KB', '图片压缩到 200KB 以下', 'Comprimir imagen por debajo de 200KB', '画像を 200KB 未満に圧縮', 'Imaginem sub 200KB comprimere', 'Compresser une image sous 200KB', 'Bild unter 200KB komprimieren');
  add('Compress JPG to 20KB', 'JPG 压缩到 20KB', 'Comprimir JPG a 20KB', 'JPG を 20KB に圧縮', 'JPG ad 20KB comprimere', 'Compresser un JPG à 20KB', 'JPG auf 20KB komprimieren');
  add('Compress Passport Photo to 240KB', '护照照片压缩到 240KB', 'Comprimir foto de pasaporte a 240KB', 'パスポート写真を 240KB に圧縮', 'Photographiam diplomatis ad 240KB comprimere', 'Compresser une photo de passeport à 240KB', 'Passfoto auf 240KB komprimieren');
  add('Compress Photo for Email', '邮件照片压缩', 'Comprimir foto para email', 'メール用写真圧縮', 'Photographiam pro electronico comprimere', 'Compresser une photo pour e-mail', 'Foto für E-Mail komprimieren');
  add('Bulk Image Compressor', '批量图片压缩器', 'Compresor de imágenes por lotes', '一括画像圧縮ツール', 'Compressor imaginum catervatim', 'Compresseur d’images par lot', 'Bulk-Bildkompressor');
  add('Contact', '联系', 'Contacto', 'お問い合わせ', 'Contactus', 'Contact', 'Kontakt');
  add('Convert Image to Base64 String', '图片转 Base64 字符串', 'Convertir imagen a cadena Base64', '画像を Base64 文字列に変換', 'Imaginem ad chordam Base64 convertere', 'Convertir une image en chaîne Base64', 'Bild in Base64-Zeichenkette konvertieren');
  add('Bulk Image Converter', '批量图片转换器', 'Convertidor de imágenes por lotes', '一括画像変換ツール', 'Conversor imaginum catervatim', 'Convertisseur d’images par lot', 'Bulk-Bildkonverter');
  add('Crop Image to Circle', '把图片裁剪成圆形', 'Recortar imagen en círculo', '画像を円形に切り抜く', 'Imaginem in circulum secare', 'Recadrer une image en cercle', 'Bild kreisförmig zuschneiden');
  add('Disclaimer', '免责声明', 'Aviso legal', '免責事項', 'Monitum', 'Avertissement', 'Haftungsausschluss');
  add('Discord Emoji Size & Resizer', 'Discord 表情尺寸与调整器', 'Tamaño y redimensionador de emoji Discord', 'Discord 絵文字サイズとリサイズ', 'Mensura et mutator Discord emoji', 'Taille et redimensionneur d’emoji Discord', 'Discord Emoji-Größe und Resizer');
  add('Discord Emoji Size Converter', 'Discord 表情尺寸转换器', 'Convertidor de tamaño de emoji Discord', 'Discord 絵文字サイズ変換', 'Conversor mensurae Discord emoji', 'Convertisseur de taille d’emoji Discord', 'Discord Emoji-Größenkonverter');
  add('Etsy Listing Photo Resizer', 'Etsy 商品照片尺寸调整器', 'Redimensionador de fotos para anuncios Etsy', 'Etsy 出品写真リサイズ', 'Mutator photographiarum Etsy', 'Redimensionneur de photos d’annonce Etsy', 'Etsy Listing-Foto-Resizer');
  add('Extract Color Palette from Image', '从图片提取调色板', 'Extraer paleta de colores de una imagen', '画像からカラーパレットを抽出', 'Tabulam colorum ex imagine extrahere', 'Extraire une palette de couleurs depuis une image', 'Farbpalette aus Bild extrahieren');
  add('Facebook Cover Photo Resizer', 'Facebook 封面照片尺寸调整器', 'Redimensionador de portada Facebook', 'Facebook カバー写真リサイズ', 'Mutator photographiae tegminis Facebook', 'Redimensionneur de photo de couverture Facebook', 'Facebook Titelbild-Resizer');
  add('GIF Maker Online', '在线 GIF 制作器', 'Creador de GIF online', 'オンライン GIF 作成ツール', 'Factor GIF interretialis', 'Créateur de GIF en ligne', 'GIF Maker online');
  add('Website Image SEO Scanner', '网站图片 SEO 扫描器', 'Escáner SEO de imágenes del sitio', 'Web サイト画像 SEO スキャナー', 'Inspector SEO imaginum situs', 'Scanner SEO des images du site', 'Website-Bild-SEO-Scanner');
  add('Image to PDF Converter', '图片转 PDF 转换器', 'Convertidor de imagen a PDF', '画像から PDF 変換', 'Conversor imaginis ad PDF', 'Convertisseur image vers PDF', 'Bild zu PDF Konverter');
  add('FreeImgTools: free img tools that run in your browser.', 'FreeImgTools：在浏览器中运行的免费图片工具。', 'FreeImgTools: herramientas de imagen gratis que funcionan en tu navegador.', 'FreeImgTools：ブラウザで動く無料画像ツール。', 'FreeImgTools: instrumenta imaginum gratuita in navigatro tuo currentia.', 'FreeImgTools : outils image gratuits qui fonctionnent dans votre navigateur.', 'FreeImgTools: kostenlose Bildtools, die in deinem Browser laufen.');
  add('Instagram Profile Picture Resizer', 'Instagram 头像尺寸调整器', 'Redimensionador de foto de perfil Instagram', 'Instagram プロフィール画像リサイズ', 'Mutator imaginis profili Instagram', 'Redimensionneur de photo de profil Instagram', 'Instagram Profilbild-Resizer');
  add('Instagram Story Resizer', 'Instagram Story 尺寸调整器', 'Redimensionador de Story Instagram', 'Instagram Story リサイズ', 'Mutator Instagram Story', 'Redimensionneur Instagram Story', 'Instagram Story-Resizer');
  add('JPG to PNG Converter', 'JPG 转 PNG 转换器', 'Convertidor JPG a PNG', 'JPG から PNG 変換', 'Conversor JPG ad PNG', 'Convertisseur JPG vers PNG', 'JPG zu PNG Konverter');
  add('JPG to WebP Converter', 'JPG 转 WebP 转换器', 'Convertidor JPG a WebP', 'JPG から WebP 変換', 'Conversor JPG ad WebP', 'Convertisseur JPG vers WebP', 'JPG zu WebP Konverter');
  add('LinkedIn Banner Resizer', 'LinkedIn 横幅尺寸调整器', 'Redimensionador de banner LinkedIn', 'LinkedIn バナーリサイズ', 'Mutator vexilli LinkedIn', 'Redimensionneur de bannière LinkedIn', 'LinkedIn Banner-Resizer');
  add('Compress, resize, and make PDFs from your phone.', '在手机上压缩、调整尺寸并制作 PDF。', 'Comprime, redimensiona y crea PDF desde tu teléfono.', 'スマホで圧縮・リサイズ・PDF 作成。', 'Ex telephono comprime, mensuram muta, PDF crea.', 'Compressez, redimensionnez et créez des PDF depuis votre téléphone.', 'Auf dem Handy komprimieren, skalieren und PDFs erstellen.');
  add('Open Graph Image Resizer', 'Open Graph 图片尺寸调整器', 'Redimensionador de imagen Open Graph', 'Open Graph 画像リサイズ', 'Mutator imaginis Open Graph', 'Redimensionneur d’image Open Graph', 'Open Graph Bild-Resizer');
  add('Passport Photo Resizer', '护照照片尺寸调整器', 'Redimensionador de foto de pasaporte', 'パスポート写真リサイズ', 'Mutator photographiae diplomatis', 'Redimensionneur de photo de passeport', 'Passfoto-Resizer');
  add('PDF to Image Converter', 'PDF 转图片转换器', 'Convertidor PDF a imagen', 'PDF から画像変換', 'Conversor PDF ad imaginem', 'Convertisseur PDF vers image', 'PDF zu Bild Konverter');
  add('Free PDF image tools, no Adobe required.', '免费 PDF 图片工具，无需 Adobe。', 'Herramientas PDF e imagen gratis, sin Adobe.', 'Adobe 不要の無料 PDF 画像ツール。', 'Instrumenta PDF et imaginum gratuita, Adobe non requiritur.', 'Outils PDF image gratuits, sans Adobe.', 'Kostenlose PDF-Bildtools, kein Adobe nötig.');
  add('PNG to JPG Converter', 'PNG 转 JPG 转换器', 'Convertidor PNG a JPG', 'PNG から JPG 変換', 'Conversor PNG ad JPG', 'Convertisseur PNG vers JPG', 'PNG zu JPG Konverter');
  add('PNG to WebP Converter', 'PNG 转 WebP 转换器', 'Convertidor PNG a WebP', 'PNG から WebP 変換', 'Conversor PNG ad WebP', 'Convertisseur PNG vers WebP', 'PNG zu WebP Konverter');
  add('Privacy Policy', '隐私政策', 'Política de privacidad', 'プライバシーポリシー', 'Ratio secreti', 'Politique de confidentialité', 'Datenschutzrichtlinie');
  add('YouTube Community Post Size & Resizer', 'YouTube 社区帖子尺寸与调整器', 'Tamaño y redimensionador para publicación de comunidad YouTube', 'YouTube コミュニティ投稿サイズとリサイズ', 'Mensura et mutator nuntii communitatis YouTube', 'Taille et redimensionneur de post Communauté YouTube', 'YouTube Community Post Größe und Resizer');
  add('Resize Photo for US Visa Application', '美国签证申请照片尺寸调整器', 'Redimensionar foto para solicitud de visa de EE. UU.', '米国ビザ申請用写真リサイズ', 'Photographiam pro visa US mutare', 'Redimensionner une photo pour visa américain', 'Foto für US-Visumantrag skalieren');
  add('Bulk Image Resizer', '批量图片尺寸调整器', 'Redimensionador de imágenes por lotes', '一括画像リサイズ', 'Mutator mensurae imaginum catervatim', 'Redimensionneur d’images par lot', 'Bulk-Bildgrößen-Tool');
  add('Shopify Product Image Resizer', 'Shopify 产品图片尺寸调整器', 'Redimensionador de imágenes de producto Shopify', 'Shopify 商品画像リサイズ', 'Mutator imaginum producti Shopify', 'Redimensionneur d’images produit Shopify', 'Shopify Produktbild-Resizer');
  add('Terms of Service', '服务条款', 'Términos de servicio', '利用規約', 'Condiciones servitii', 'Conditions d’utilisation', 'Nutzungsbedingungen');
  add('TikTok Profile Picture Resizer', 'TikTok 头像尺寸调整器', 'Redimensionador de foto de perfil TikTok', 'TikTok プロフィール画像リサイズ', 'Mutator imaginis profili TikTok', 'Redimensionneur de photo de profil TikTok', 'TikTok Profilbild-Resizer');
  add('All FreeImgTools', '全部 FreeImgTools 工具', 'Todas las herramientas FreeImgTools', 'すべての FreeImgTools', 'Omnia FreeImgTools', 'Tous les outils FreeImgTools', 'Alle FreeImgTools');
  add('WebP to JPG Converter', 'WebP 转 JPG 转换器', 'Convertidor WebP a JPG', 'WebP から JPG 変換', 'Conversor WebP ad JPG', 'Convertisseur WebP vers JPG', 'WebP zu JPG Konverter');
  add('YouTube Banner Size & Resizer', 'YouTube 横幅尺寸与调整器', 'Tamaño y redimensionador de banner YouTube', 'YouTube バナーサイズとリサイズ', 'Mensura et mutator vexilli YouTube', 'Taille et redimensionneur de bannière YouTube', 'YouTube Banner-Größe und Resizer');
  add('YouTube Thumbnail Size & Resizer', 'YouTube 缩略图尺寸与调整器', 'Tamaño y redimensionador de miniatura YouTube', 'YouTube サムネイルサイズとリサイズ', 'Mensura et mutator thumbnail YouTube', 'Taille et redimensionneur de miniature YouTube', 'YouTube Thumbnail-Größe und Resizer');

  // Guide titles and major guide headings.
  add('How to Compress an Image to a Target File Size', '如何把图片压缩到指定文件大小', 'Cómo comprimir una imagen a un tamaño objetivo', '画像を目標ファイルサイズに圧縮する方法', 'Quomodo imaginem ad magnitudinem destinatam comprimere', 'Comment compresser une image à une taille cible', 'So komprimierst du ein Bild auf eine Zielgröße');
  add('Why target-size compression is different', '为什么目标大小压缩不一样', 'Por qué la compresión por tamaño objetivo es diferente', '目標サイズ圧縮が通常と違う理由', 'Cur compressio ad magnitudinem differt', 'Pourquoi la compression à taille cible est différente', 'Warum Zielgrößen-Komprimierung anders ist');
  add('Recommended file size targets', '推荐文件大小目标', 'Tamaños de archivo recomendados', 'おすすめのファイルサイズ目標', 'Magnitudines fasciculi commendatae', 'Tailles de fichier recommandées', 'Empfohlene Dateigrößen');
  add('Step-by-step workflow', '分步流程', 'Flujo paso a paso', 'ステップ別ワークフロー', 'Ratio gradatim', 'Flux étape par étape', 'Schritt-für-Schritt-Workflow');
  add('Why your file is still too large', '为什么文件仍然太大', 'Por qué tu archivo sigue siendo demasiado grande', 'ファイルがまだ大きすぎる理由', 'Cur fasciculus adhuc nimis magnus est', 'Pourquoi votre fichier reste trop lourd', 'Warum deine Datei noch zu groß ist');

  add('Image Accessibility: Alt Text, WCAG, and Making Images Work for Everyone', '图片无障碍：Alt 文本、WCAG，以及让所有人都能理解图片', 'Accesibilidad de imágenes: alt text, WCAG e imágenes para todos', '画像アクセシビリティ：Alt テキスト、WCAG、誰にでも伝わる画像', 'Accessibilitas imaginum: textus alt, WCAG, imagines omnibus utiles', 'Accessibilité des images : texte alt, WCAG et images pour tous', 'Bild-Barrierefreiheit: Alt-Text, WCAG und Bilder für alle');
  add('Why image accessibility matters', '为什么图片无障碍很重要', 'Por qué importa la accesibilidad de imágenes', '画像アクセシビリティが重要な理由', 'Cur accessibilitas imaginum valet', 'Pourquoi l’accessibilité des images compte', 'Warum Bild-Barrierefreiheit wichtig ist');
  add('The alt attribute: the foundation of image accessibility', 'alt 属性：图片无障碍的基础', 'El atributo alt: base de la accesibilidad de imágenes', 'alt 属性：画像アクセシビリティの基礎', 'Attributum alt: fundamentum accessibilitatis', 'L’attribut alt : base de l’accessibilité des images', 'Das alt-Attribut: Grundlage der Bild-Barrierefreiheit');
  add('Writing alt text: practical guidelines', '编写 Alt 文本：实用建议', 'Escribir alt text: pautas prácticas', 'Alt テキストを書く実践ガイド', 'Textum alt scribere: regulae practicae', 'Rédiger un texte alt : conseils pratiques', 'Alt-Text schreiben: praktische Regeln');
  add('Alt text and image SEO', 'Alt 文本和图片 SEO', 'Alt text y SEO de imágenes', 'Alt テキストと画像 SEO', 'Textus alt et SEO imaginum', 'Texte alt et SEO image', 'Alt-Text und Bild-SEO');
  add('Testing image accessibility', '测试图片无障碍', 'Probar la accesibilidad de imágenes', '画像アクセシビリティをテストする', 'Accessibilitatem imaginum probare', 'Tester l’accessibilité des images', 'Bild-Barrierefreiheit testen');

  add('Image Compression Explained: Lossy vs. Lossless, Quality Settings, and File Size Targets', '图片压缩详解：有损、无损、质量设置和文件大小目标', 'Compresión de imágenes: con pérdida, sin pérdida, calidad y tamaños objetivo', '画像圧縮の解説：非可逆・可逆・品質設定・目標サイズ', 'Compressio imaginum explanata: amissiva, sine amissione, qualitas, magnitudo', 'Compression d’image : avec perte, sans perte, qualité et tailles cibles', 'Bildkomprimierung erklärt: verlustbehaftet, verlustfrei, Qualität und Zielgrößen');
  add('What is image compression?', '什么是图片压缩？', '¿Qué es la compresión de imágenes?', '画像圧縮とは？', 'Quid est compressio imaginum?', 'Qu’est-ce que la compression d’image ?', 'Was ist Bildkomprimierung?');
  add('Lossy compression: JPEG, WebP, AVIF', '有损压缩：JPEG、WebP、AVIF', 'Compresión con pérdida: JPEG, WebP, AVIF', '非可逆圧縮：JPEG、WebP、AVIF', 'Compressio amissiva: JPEG, WebP, AVIF', 'Compression avec perte : JPEG, WebP, AVIF', 'Verlustbehaftete Komprimierung: JPEG, WebP, AVIF');
  add('Lossless compression: PNG, WebP lossless', '无损压缩：PNG、WebP 无损', 'Compresión sin pérdida: PNG, WebP lossless', '可逆圧縮：PNG、WebP lossless', 'Compressio sine amissione: PNG, WebP', 'Compression sans perte : PNG, WebP lossless', 'Verlustfreie Komprimierung: PNG, WebP lossless');
  add('Choosing a quality setting for your use case', '按用途选择质量设置', 'Elegir calidad según tu caso de uso', '用途に合う品質設定を選ぶ', 'Qualitatem pro usu eligere', 'Choisir un réglage de qualité selon l’usage', 'Qualitätseinstellung nach Einsatzfall wählen');
  add('File size targets for common use cases', '常见用途的文件大小目标', 'Tamaños objetivo para usos comunes', 'よくある用途の目標ファイルサイズ', 'Magnitudines ad usus communes', 'Tailles cibles pour les usages courants', 'Zielgrößen für typische Anwendungsfälle');
  add('Converting to modern formats: WebP and AVIF', '转换为现代格式：WebP 和 AVIF', 'Convertir a formatos modernos: WebP y AVIF', '最新形式へ変換：WebP と AVIF', 'Ad formas modernas convertere: WebP et AVIF', 'Convertir vers des formats modernes : WebP et AVIF', 'In moderne Formate konvertieren: WebP und AVIF');

  add('Naming Images for SEO', '图片 SEO 命名指南', 'Nombrar imágenes para SEO', 'SEO 向け画像ファイル名', 'Imagines pro SEO nominare', 'Nommer les images pour le SEO', 'Bilder für SEO benennen');
  add('Why image file names matter', '为什么图片文件名很重要', 'Por qué importan los nombres de archivo', '画像ファイル名が重要な理由', 'Cur nomina fasciculorum valent', 'Pourquoi les noms de fichiers image comptent', 'Warum Bilddateinamen wichtig sind');
  add('The basic rules', '基本规则', 'Reglas básicas', '基本ルール', 'Regulae primariae', 'Les règles de base', 'Grundregeln');
  add('A five-step SEO image naming checklist', '五步图片 SEO 命名清单', 'Checklist SEO de nombres de imagen en cinco pasos', '5ステップ画像命名チェックリスト', 'Index quinque graduum pro nominibus SEO', 'Checklist SEO en cinq étapes', 'Fünf-Schritte-Checkliste für Bildnamen');
  add('SEO image naming convention', 'SEO 图片命名规范', 'Convención de nombres SEO para imágenes', 'SEO 画像命名ルール', 'Consuetudo nominandi imagines pro SEO', 'Convention de nommage SEO des images', 'SEO-Namenskonvention für Bilder');

  add('JPG, PNG, WebP, AVIF, GIF: Which Image Format Should You Use?', 'JPG、PNG、WebP、AVIF、GIF：应该用哪种图片格式？', 'JPG, PNG, WebP, AVIF, GIF: ¿qué formato usar?', 'JPG、PNG、WebP、AVIF、GIF：どの形式を使うべき？', 'JPG, PNG, WebP, AVIF, GIF: qua forma utaris?', 'JPG, PNG, WebP, AVIF, GIF : quel format choisir ?', 'JPG, PNG, WebP, AVIF, GIF: Welches Format solltest du nutzen?');
  add('Why format choice matters', '为什么格式选择很重要', 'Por qué importa elegir formato', '形式選びが重要な理由', 'Cur forma eligenda valet', 'Pourquoi le choix du format compte', 'Warum die Formatwahl wichtig ist');
  add('Best uses for JPEG', 'JPEG 最适合的用途', 'Mejores usos de JPEG', 'JPEG の最適な用途', 'Optimi usus JPEG', 'Meilleurs usages du JPEG', 'Beste Einsatzzwecke für JPEG');
  add('Where JPEG falls short', 'JPEG 的不足', 'Dónde JPEG se queda corto', 'JPEG の弱点', 'Ubi JPEG deficit', 'Les limites du JPEG', 'Wo JPEG Schwächen hat');
  add('Best uses for PNG', 'PNG 最适合的用途', 'Mejores usos de PNG', 'PNG の最適な用途', 'Optimi usus PNG', 'Meilleurs usages du PNG', 'Beste Einsatzzwecke für PNG');
  add('Best uses for WebP', 'WebP 最适合的用途', 'Mejores usos de WebP', 'WebP の最適な用途', 'Optimi usus WebP', 'Meilleurs usages du WebP', 'Beste Einsatzzwecke für WebP');
  add('Best uses for AVIF', 'AVIF 最适合的用途', 'Mejores usos de AVIF', 'AVIF の最適な用途', 'Optimi usus AVIF', 'Meilleurs usages de l’AVIF', 'Beste Einsatzzwecke für AVIF');
  add('Decision table: Format vs. use case', '决策表：格式与用途', 'Tabla de decisión: formato vs. uso', '判断表：形式と用途', 'Tabula decisionis: forma et usus', 'Table de décision : format et usage', 'Entscheidungstabelle: Format vs. Einsatz');

  add('Image SEO: Alt Text, Image Names, Speed & Google Images', '图片 SEO：Alt 文本、图片命名、速度和 Google 图片', 'SEO de imágenes: alt text, nombres, velocidad y Google Imágenes', '画像 SEO：Alt テキスト、画像名、速度、Google 画像', 'SEO imaginum: textus alt, nomina, celeritas, Google Images', 'SEO image : texte alt, noms, vitesse et Google Images', 'Bild-SEO: Alt-Text, Namen, Geschwindigkeit und Google Bilder');
  add('Why image SEO matters', '为什么图片 SEO 很重要', 'Por qué importa el SEO de imágenes', '画像 SEO が重要な理由', 'Cur SEO imaginum valet', 'Pourquoi le SEO image compte', 'Warum Bild-SEO wichtig ist');
  add('How to name images for SEO', '如何为 SEO 命名图片', 'Cómo nombrar imágenes para SEO', 'SEO 向け画像名の付け方', 'Quomodo imagines pro SEO nominare', 'Comment nommer les images pour le SEO', 'Bilder für SEO benennen');
  add('Alt text', 'Alt 文本', 'Alt text', 'Alt テキスト', 'Textus alt', 'Texte alt', 'Alt-Text');
  add('How to write effective alt text', '如何写有效的 Alt 文本', 'Cómo escribir alt text eficaz', '効果的な Alt テキストの書き方', 'Quomodo textum alt efficacem scribere', 'Comment écrire un texte alt efficace', 'Wirksamen Alt-Text schreiben');
  add('Image dimensions and file size', '图片尺寸和文件大小', 'Dimensiones y tamaño de archivo', '画像寸法とファイルサイズ', 'Mensurae imaginum et magnitudo fasciculi', 'Dimensions et poids des images', 'Bildabmessungen und Dateigröße');
  add('Structured data for images', '图片结构化数据', 'Datos estructurados para imágenes', '画像の構造化データ', 'Data structa pro imaginibus', 'Données structurées pour les images', 'Strukturierte Daten für Bilder');
  add('Image SEO checklist', '图片 SEO 检查清单', 'Checklist de SEO de imágenes', '画像 SEO チェックリスト', 'Index SEO imaginum', 'Checklist SEO image', 'Bild-SEO-Checkliste');

  add('How to Convert PDF to Image: JPG, PNG, WebP and DPI Explained', '如何把 PDF 转成图片：JPG、PNG、WebP 和 DPI 说明', 'Cómo convertir PDF a imagen: JPG, PNG, WebP y DPI', 'PDF を画像に変換する方法：JPG、PNG、WebP、DPI', 'Quomodo PDF in imaginem convertere: JPG, PNG, WebP, DPI', 'Convertir un PDF en image : JPG, PNG, WebP et DPI', 'PDF in Bild konvertieren: JPG, PNG, WebP und DPI erklärt');
  add('Why convert a PDF to an image?', '为什么要把 PDF 转成图片？', '¿Por qué convertir un PDF a imagen?', 'なぜ PDF を画像に変換するのか？', 'Cur PDF in imaginem convertere?', 'Pourquoi convertir un PDF en image ?', 'Warum ein PDF in ein Bild konvertieren?');
  add('Understanding DPI — dots per inch', '理解 DPI：每英寸点数', 'Entender DPI: puntos por pulgada', 'DPI を理解する：dots per inch', 'DPI intellegere: puncta per unciam', 'Comprendre le DPI : points par pouce', 'DPI verstehen: Punkte pro Zoll');
  add('Choosing an output format: JPG, PNG, or WebP', '选择输出格式：JPG、PNG 或 WebP', 'Elegir formato de salida: JPG, PNG o WebP', '出力形式を選ぶ：JPG、PNG、WebP', 'Formam exitus eligere: JPG, PNG, WebP', 'Choisir un format de sortie : JPG, PNG ou WebP', 'Ausgabeformat wählen: JPG, PNG oder WebP');
  add('Step-by-step: converting a PDF page to an image', '分步操作：把 PDF 页面转成图片', 'Paso a paso: convertir una página PDF en imagen', 'ステップ別：PDF ページを画像に変換', 'Gradatim: paginam PDF in imaginem convertere', 'Étape par étape : convertir une page PDF en image', 'Schritt für Schritt: PDF-Seite in Bild umwandeln');
  add('Recommended settings by use case', '按用途推荐设置', 'Ajustes recomendados según uso', '用途別おすすめ設定', 'Optiones commendatae pro usu', 'Réglages recommandés par usage', 'Empfohlene Einstellungen nach Einsatzfall');

  add('Product Image SEO Guide for Ecommerce Stores', '电商店铺产品图片 SEO 指南', 'Guía SEO de imágenes de producto para tiendas ecommerce', 'EC ストア向け商品画像 SEO ガイド', 'Dux SEO imaginum producti pro tabernis electronicis', 'Guide SEO des images produit pour boutiques e-commerce', 'Produktbild-SEO-Guide für E-Commerce-Shops');
  add('Product images are SEO assets', '产品图片是 SEO 资产', 'Las imágenes de producto son activos SEO', '商品画像は SEO 資産です', 'Imagines producti bona SEO sunt', 'Les images produit sont des actifs SEO', 'Produktbilder sind SEO-Assets');
  add('Use a product image naming system', '使用产品图片命名系统', 'Usa un sistema de nombres para imágenes de producto', '商品画像の命名ルールを使う', 'Systema nominandi imagines producti utere', 'Utilisez un système de nommage produit', 'Nutze ein Namenssystem für Produktbilder');
  add('Write alt text for each product angle', '为每个产品角度写 Alt 文本', 'Escribe alt text para cada ángulo del producto', '各商品アングルに Alt テキストを書く', 'Textum alt pro singulo angulo producti scribe', 'Rédigez un texte alt pour chaque angle produit', 'Schreibe Alt-Text für jede Produktansicht');

  add('How to Reduce Image File Size Without Losing Quality', '如何在不明显损失质量的情况下减小图片文件大小', 'Cómo reducir el tamaño de imagen sin perder calidad', '品質を落とさず画像ファイルサイズを減らす方法', 'Quomodo magnitudinem imaginis minuere sine qualitate perdita', 'Réduire le poids d’une image sans perdre en qualité', 'Bilddateigröße ohne Qualitätsverlust reduzieren');
  add('Why image file size matters', '为什么图片文件大小很重要', 'Por qué importa el tamaño de archivo', '画像ファイルサイズが重要な理由', 'Cur magnitudo fasciculi valet', 'Pourquoi le poids des images compte', 'Warum die Bilddateigröße wichtig ist');
  add('Step 1 — Resize to display dimensions', '第 1 步：调整到显示尺寸', 'Paso 1: redimensionar al tamaño visible', 'ステップ 1：表示サイズにリサイズ', 'Gradus 1 — ad mensuras ostensionis muta', 'Étape 1 — Redimensionner aux dimensions d’affichage', 'Schritt 1 — Auf Anzeigegröße skalieren');
  add('Step 2 — Switch to a more efficient format', '第 2 步：切换到更高效的格式', 'Paso 2: cambiar a un formato más eficiente', 'ステップ 2：より効率的な形式へ変換', 'Gradus 2 — ad formam efficaciorem transi', 'Étape 2 — Passer à un format plus efficace', 'Schritt 2 — Effizienteres Format wählen');
  add('Step 3 — Adjust compression quality', '第 3 步：调整压缩质量', 'Paso 3: ajustar la calidad de compresión', 'ステップ 3：圧縮品質を調整', 'Gradus 3 — qualitatem compressionis regla', 'Étape 3 — Ajuster la qualité de compression', 'Schritt 3 — Komprimierungsqualität anpassen');
  add('Step 4 — Strip metadata', '第 4 步：移除元数据', 'Paso 4: eliminar metadatos', 'ステップ 4：メタデータを削除', 'Gradus 4 — metadata remove', 'Étape 4 — Supprimer les métadonnées', 'Schritt 4 — Metadaten entfernen');
  add('Step 5 — Hit a specific file size target', '第 5 步：达到指定文件大小', 'Paso 5: alcanzar un tamaño objetivo', 'ステップ 5：目標ファイルサイズに合わせる', 'Gradus 5 — magnitudinem destinatam attinge', 'Étape 5 — Atteindre une taille cible', 'Schritt 5 — Ziel-Dateigröße erreichen');

  add('Social Media Image Sizes Guide', '社交媒体图片尺寸指南', 'Guía de tamaños de imagen para redes sociales', 'SNS 画像サイズガイド', 'Dux mensurarum imaginum socialium', 'Guide des tailles d’images réseaux sociaux', 'Social-Media-Bildgrößen-Guide');
  add('The practical size chart', '实用尺寸表', 'Tabla práctica de tamaños', '実用サイズ表', 'Tabula mensurarum practica', 'Tableau pratique des tailles', 'Praktische Größentabelle');
  add('Safe areas matter more than exact pixels', '安全区域比精确像素更重要', 'Las zonas seguras importan más que los píxeles exactos', '正確なピクセルより安全領域が重要', 'Areae tutae plus valent quam pixeli exacti', 'Les zones sûres comptent plus que les pixels exacts', 'Sicherheitsbereiche sind wichtiger als exakte Pixel');
  add('Format and compression', '格式和压缩', 'Formato y compresión', '形式と圧縮', 'Forma et compressio', 'Format et compression', 'Format und Komprimierung');

  add('Images and Web Performance: How to Optimize Images for Core Web Vitals', '图片和网页性能：如何为 Core Web Vitals 优化图片', 'Imágenes y rendimiento web: optimizar para Core Web Vitals', '画像と Web パフォーマンス：Core Web Vitals 向け最適化', 'Imagines et effectus interretialis: Core Web Vitals optimizare', 'Images et performance web : optimiser pour Core Web Vitals', 'Bilder und Web-Performance: Für Core Web Vitals optimieren');
  add('Why images are the #1 web performance problem', '为什么图片是网页性能的头号问题', 'Por qué las imágenes son el principal problema de rendimiento', '画像が Web パフォーマンス最大の問題である理由', 'Cur imagines primum problema effectus sunt', 'Pourquoi les images sont le premier problème de performance web', 'Warum Bilder das größte Web-Performance-Problem sind');
  add('Core Web Vitals explained', 'Core Web Vitals 解释', 'Core Web Vitals explicados', 'Core Web Vitals の説明', 'Core Web Vitals explicata', 'Core Web Vitals expliqués', 'Core Web Vitals erklärt');
  add('Practical audit checklist', '实用检查清单', 'Checklist práctica de auditoría', '実用監査チェックリスト', 'Index practicus inspectionis', 'Checklist d’audit pratique', 'Praktische Audit-Checkliste');

  // FAQ questions across tool pages and guide pages.
  add('What is FreeImgTools?', 'FreeImgTools 是什么？', '¿Qué es FreeImgTools?', 'FreeImgTools とは？', 'Quid est FreeImgTools?', 'Qu’est-ce que FreeImgTools ?', 'Was ist FreeImgTools?');
  add('Is FreeImgTools free?', 'FreeImgTools 免费吗？', '¿FreeImgTools es gratis?', 'FreeImgTools は無料ですか？', 'Estne FreeImgTools gratuitum?', 'FreeImgTools est-il gratuit ?', 'Ist FreeImgTools kostenlos?');
  add('Are my images uploaded to your server?', '我的图片会上传到你的服务器吗？', '¿Mis imágenes se suben a tu servidor?', '画像はサーバーにアップロードされますか？', 'Imagines meae ad servitorem mittunturne?', 'Mes images sont-elles envoyées à votre serveur ?', 'Werden meine Bilder auf euren Server hochgeladen?');
  add('Are my images uploaded to a server?', '我的图片会上传到服务器吗？', '¿Mis imágenes se suben a un servidor?', '画像はサーバーにアップロードされますか？', 'Imagines meae ad servitorem mittunturne?', 'Mes images sont-elles envoyées sur un serveur ?', 'Werden meine Bilder auf einen Server hochgeladen?');
  add('What image formats are supported?', '支持哪些图片格式？', '¿Qué formatos de imagen son compatibles?', 'どの画像形式に対応していますか？', 'Quae formae imaginum sustentantur?', 'Quels formats d’image sont pris en charge ?', 'Welche Bildformate werden unterstützt?');
  add('Is there a file size or file count limit?', '有文件大小或数量限制吗？', '¿Hay límite de tamaño o cantidad?', 'ファイルサイズや数に制限はありますか？', 'Estne finis magnitudinis aut numeri?', 'Y a-t-il une limite de taille ou de nombre ?', 'Gibt es Größen- oder Anzahl-Limits?');
  add('What does the AI alt text tool do?', 'AI Alt 文本工具能做什么？', '¿Qué hace la herramienta de alt text IA?', 'AI Alt テキストツールは何をしますか？', 'Quid facit instrumentum AI textus alt?', 'Que fait l’outil IA de texte alt ?', 'Was macht das KI-Alt-Text-Tool?');
  add('Can I check image file names for SEO?', '我可以检查图片文件名是否适合 SEO 吗？', '¿Puedo revisar nombres de archivo para SEO?', '画像ファイル名を SEO 用に確認できますか？', 'Possumne nomina fasciculorum pro SEO inspicere?', 'Puis-je vérifier les noms de fichiers pour le SEO ?', 'Kann ich Bilddateinamen für SEO prüfen?');
  add('Why convert to WebP or AVIF?', '为什么要转换成 WebP 或 AVIF？', '¿Por qué convertir a WebP o AVIF?', 'なぜ WebP や AVIF に変換するのですか？', 'Cur ad WebP aut AVIF convertere?', 'Pourquoi convertir en WebP ou AVIF ?', 'Warum in WebP oder AVIF konvertieren?');
  add('When NOT to compress', '什么时候不应该压缩', 'Cuándo NO comprimir', '圧縮しないほうがよい場合', 'Quando NON comprimere', 'Quand NE PAS compresser', 'Wann du NICHT komprimieren solltest');
  add('Does compressing a PNG give you a lossy result?', '压缩 PNG 会产生有损结果吗？', '¿Comprimir un PNG da un resultado con pérdida?', 'PNG を圧縮すると非可逆になりますか？', 'Datne compressio PNG effectum amissivum?', 'Compresser un PNG donne-t-il un résultat avec perte ?', 'Ist PNG-Komprimierung verlustbehaftet?');
  add('Can I restore quality after saving a JPEG?', '保存 JPEG 后还能恢复质量吗？', '¿Puedo recuperar calidad después de guardar un JPEG?', 'JPEG 保存後に品質を戻せますか？', 'Possumne qualitatem post JPEG servatum restituere?', 'Puis-je récupérer la qualité après avoir enregistré un JPEG ?', 'Kann ich Qualität nach dem Speichern als JPEG wiederherstellen?');
  add('Why does the same quality setting produce different file sizes for different images?', '为什么同样的质量设置会产生不同文件大小？', '¿Por qué la misma calidad produce tamaños distintos?', '同じ品質設定でサイズが違うのはなぜ？', 'Cur eadem qualitas magnitudines varias producit?', 'Pourquoi le même réglage de qualité donne-t-il des tailles différentes ?', 'Warum erzeugt dieselbe Qualität unterschiedliche Dateigrößen?');
  add('Is WebP always better than JPEG?', 'WebP 总是比 JPEG 更好吗？', '¿WebP siempre es mejor que JPEG?', 'WebP は常に JPEG より良いですか？', 'Estne WebP semper melius quam JPEG?', 'WebP est-il toujours meilleur que JPEG ?', 'Ist WebP immer besser als JPEG?');
  add('How does progressive JPEG work?', '渐进式 JPEG 是怎么工作的？', '¿Cómo funciona JPEG progresivo?', 'プログレッシブ JPEG はどう動きますか？', 'Quomodo JPEG progressivum operatur?', 'Comment fonctionne le JPEG progressif ?', 'Wie funktioniert progressives JPEG?');
  add('Is JPG the same as JPEG?', 'JPG 和 JPEG 一样吗？', '¿JPG es lo mismo que JPEG?', 'JPG と JPEG は同じですか？', 'Estne JPG idem ac JPEG?', 'JPG et JPEG sont-ils identiques ?', 'Ist JPG dasselbe wie JPEG?');
  add('Can I convert a JPEG to PNG to "get the quality back"?', '把 JPEG 转成 PNG 能“恢复质量”吗？', '¿Convertir JPEG a PNG recupera la calidad?', 'JPEG を PNG にすると品質は戻りますか？', 'Potestne JPEG in PNG conversum qualitatem restituere?', 'Convertir JPEG en PNG récupère-t-il la qualité ?', 'Kann JPEG zu PNG Qualität zurückbringen?');
  add('Should I use WebP for all images on my website?', '网站上的所有图片都应该用 WebP 吗？', '¿Debo usar WebP para todas las imágenes?', 'サイトの全画像に WebP を使うべきですか？', 'Debeo WebP pro omnibus imaginibus uti?', 'Faut-il utiliser WebP pour toutes les images ?', 'Sollte ich WebP für alle Website-Bilder nutzen?');
  add('Does AVIF support transparency?', 'AVIF 支持透明吗？', '¿AVIF admite transparencia?', 'AVIF は透過に対応していますか？', 'Sustentatne AVIF transparentiam?', 'AVIF prend-il en charge la transparence ?', 'Unterstützt AVIF Transparenz?');
  add('Why is my PNG file larger than my JPEG?', '为什么 PNG 文件比 JPEG 更大？', '¿Por qué mi PNG es más grande que mi JPEG?', 'PNG が JPEG より大きいのはなぜ？', 'Cur PNG meum maius est quam JPEG?', 'Pourquoi mon PNG est-il plus lourd que mon JPEG ?', 'Warum ist meine PNG-Datei größer als JPEG?');
  add('Does image alt text directly affect page ranking (not just image search)?', '图片 Alt 文本会直接影响网页排名吗（不只是图片搜索）？', '¿El alt text afecta directamente el ranking de la página?', 'Alt テキストはページ順位にも直接影響しますか？', 'Afficitne textus alt ordinem paginae directe?', 'Le texte alt affecte-t-il directement le classement de la page ?', 'Beeinflusst Alt-Text direkt das Seitenranking?');
  add('Does switching from JPEG to WebP affect image search rankings?', '从 JPEG 切换到 WebP 会影响图片搜索排名吗？', '¿Cambiar de JPEG a WebP afecta el ranking en imágenes?', 'JPEG から WebP への切替は画像検索順位に影響しますか？', 'Afficitne mutatio JPEG ad WebP ordines quaestionis imaginum?', 'Passer de JPEG à WebP affecte-t-il le classement image ?', 'Beeinflusst JPEG zu WebP das Bildsuchranking?');
  add('How long does it take for images to appear in Google Image Search?', '图片多久会出现在 Google 图片搜索中？', '¿Cuánto tardan las imágenes en aparecer en Google Imágenes?', 'Google 画像検索に表示されるまでどのくらい？', 'Quam diu imagines in Google Images apparere solent?', 'Combien de temps avant d’apparaître dans Google Images ?', 'Wie lange dauert es bis Bilder in Google Bilder erscheinen?');
  add('Is the title attribute on images useful for SEO?', '图片的 title 属性对 SEO 有用吗？', '¿El atributo title de imagen sirve para SEO?', '画像の title 属性は SEO に役立ちますか？', 'Estne attributum title imaginum utile SEO?', 'L’attribut title des images est-il utile au SEO ?', 'Ist das title-Attribut bei Bildern für SEO nützlich?');
  add('Should I compress images that are already indexed in Google Image Search?', '已经被 Google 图片索引的图片还应该压缩吗？', '¿Debo comprimir imágenes ya indexadas en Google Imágenes?', '既に Google 画像検索に登録された画像も圧縮すべき？', 'Debeo imagines iam indices compressere?', 'Faut-il compresser des images déjà indexées ?', 'Sollte ich bereits indexierte Bilder komprimieren?');
  add('Should I use WebP or AVIF for web images?', '网页图片应该用 WebP 还是 AVIF？', '¿Uso WebP o AVIF para imágenes web?', 'Web 画像は WebP と AVIF どちらがよい？', 'WebPne an AVIF pro imaginibus interretialibus?', 'WebP ou AVIF pour les images web ?', 'WebP oder AVIF für Webbilder?');
  add('What JPEG quality setting should I use for web images?', '网页图片应该用什么 JPEG 质量设置？', '¿Qué calidad JPEG usar para web?', 'Web 画像の JPEG 品質はどれがよい？', 'Qua qualitate JPEG pro imaginibus web utar?', 'Quel réglage JPEG utiliser pour le web ?', 'Welche JPEG-Qualität für Webbilder?');
  add('What is lossless image compression?', '什么是无损图片压缩？', '¿Qué es la compresión sin pérdida?', '可逆画像圧縮とは？', 'Quid est compressio imaginum sine amissione?', 'Qu’est-ce que la compression sans perte ?', 'Was ist verlustfreie Bildkomprimierung?');
  add('Why are my images slowing down my website?', '为什么图片会拖慢网站？', '¿Por qué mis imágenes ralentizan mi sitio?', '画像がサイトを遅くする理由は？', 'Cur imagines meae situm tardant?', 'Pourquoi mes images ralentissent-elles mon site ?', 'Warum verlangsamen Bilder meine Website?');
  add('When should I use PNG instead of JPEG?', '什么时候应该用 PNG 而不是 JPEG？', '¿Cuándo usar PNG en vez de JPEG?', 'JPEG ではなく PNG を使うべき時は？', 'Quando PNG pro JPEG uti debeo?', 'Quand utiliser PNG plutôt que JPEG ?', 'Wann sollte ich PNG statt JPEG nutzen?');
  add('Does compressing images hurt SEO?', '压缩图片会伤害 SEO 吗？', '¿Comprimir imágenes perjudica el SEO?', '画像圧縮は SEO に悪影響ですか？', 'Laeditne compressio imaginum SEO?', 'La compression d’images nuit-elle au SEO ?', 'Schadet Bildkomprimierung dem SEO?');
  add('Does converting a PDF to an image reduce quality?', '把 PDF 转成图片会降低质量吗？', '¿Convertir PDF a imagen reduce calidad?', 'PDF を画像にすると品質は下がりますか？', 'Minuitne PDF in imaginem conversum qualitatem?', 'Convertir un PDF en image réduit-il la qualité ?', 'Verringert PDF zu Bild die Qualität?');
  add('Why does my converted image look blurry?', '为什么转换后的图片看起来模糊？', '¿Por qué la imagen convertida se ve borrosa?', '変換後の画像がぼやける理由は？', 'Cur imago conversa turbida videtur?', 'Pourquoi l’image convertie est-elle floue ?', 'Warum sieht das konvertierte Bild unscharf aus?');
  add('How do I convert a PDF to an image on a Mac or iPhone without installing software?', '如何在 Mac 或 iPhone 上不安装软件把 PDF 转成图片？', '¿Cómo convierto PDF a imagen en Mac o iPhone sin instalar software?', 'Mac や iPhone でソフトなしに PDF を画像化するには？', 'Quomodo in Mac aut iPhone sine programmate PDF convertere?', 'Comment convertir un PDF en image sur Mac ou iPhone sans logiciel ?', 'Wie konvertiere ich PDF zu Bild auf Mac oder iPhone ohne Software?');
  add('What is the best format for using a PDF page on a website?', '网站上使用 PDF 页面时最佳图片格式是什么？', '¿Cuál es el mejor formato para usar una página PDF en web?', 'PDF ページを Web で使う最適形式は？', 'Quae forma optima est pro pagina PDF in situ?', 'Quel est le meilleur format pour une page PDF sur un site ?', 'Bestes Format für eine PDF-Seite auf einer Website?');
  add('What is the best way to reduce image file size without losing quality?', '在不明显损失质量的情况下减小图片文件大小的最佳方法是什么？', '¿Cuál es la mejor forma de reducir tamaño sin perder calidad?', '品質を落とさず画像を小さくする最良の方法は？', 'Quae optima ratio est magnitudinem sine qualitate perdita minuere?', 'Quelle est la meilleure façon de réduire le poids sans perdre en qualité ?', 'Wie reduziert man Bildgröße am besten ohne Qualitätsverlust?');
  add('How do I reduce image file size for email?', '如何减小邮件图片附件大小？', '¿Cómo reduzco imágenes para email?', 'メール用に画像サイズを減らすには？', 'Quomodo magnitudinem imaginis pro electronico minuere?', 'Comment réduire une image pour e-mail ?', 'Wie reduziere ich Bildgröße für E-Mail?');
  add('Can I reduce PNG file size without converting to another format?', '不转换格式也能减小 PNG 文件吗？', '¿Puedo reducir PNG sin cambiar de formato?', '形式を変えずに PNG を小さくできますか？', 'Possumne PNG minuere sine forma mutata?', 'Puis-je réduire un PNG sans changer de format ?', 'Kann ich PNG verkleinern ohne Formatwechsel?');
  add('How do I compress a photo to under 200KB for a visa or government application?', '如何把照片压缩到 200KB 以下用于签证或政府申请？', '¿Cómo comprimo una foto bajo 200KB para visa o trámite?', 'ビザや行政申請用に写真を 200KB 未満にするには？', 'Quomodo photo sub 200KB pro visa aut imperio comprimere?', 'Comment compresser une photo sous 200KB pour une demande officielle ?', 'Wie komprimiere ich ein Foto unter 200KB für Visum/Behörde?');
  add('Does compressing images affect their print quality?', '压缩图片会影响打印质量吗？', '¿Comprimir imágenes afecta la impresión?', '画像圧縮は印刷品質に影響しますか？', 'Afficitne compressio qualitatem imprimendi?', 'La compression affecte-t-elle la qualité d’impression ?', 'Beeinflusst Komprimierung die Druckqualität?');
  add('What is the LCP element, and how do I find it?', '什么是 LCP 元素，如何找到它？', '¿Qué es el elemento LCP y cómo lo encuentro?', 'LCP 要素とは何で、どう探す？', 'Quid est elementum LCP et quomodo invenio?', 'Qu’est-ce que l’élément LCP et comment le trouver ?', 'Was ist das LCP-Element und wie finde ich es?');
  add('Does lazy loading hurt SEO?', '懒加载会伤害 SEO 吗？', '¿Lazy loading perjudica el SEO?', '遅延読み込みは SEO に悪影響ですか？', 'Laeditne oneratio pigra SEO?', 'Le lazy loading nuit-il au SEO ?', 'Schadet Lazy Loading dem SEO?');
  add('How does a CDN help with image performance?', 'CDN 如何提升图片性能？', '¿Cómo ayuda un CDN al rendimiento de imágenes?', 'CDN は画像性能にどう役立ちますか？', 'Quomodo CDN effectui imaginum prodest?', 'Comment un CDN aide-t-il la performance image ?', 'Wie hilft ein CDN bei Bildperformance?');
  add('My LCP image is set as a CSS background-image. How do I optimize it?', '我的 LCP 图片是 CSS background-image，怎么优化？', 'Mi imagen LCP es background-image. ¿Cómo la optimizo?', 'LCP 画像が CSS background-image の場合どう最適化？', 'Imago LCP est CSS background-image. Quomodo optimizo?', 'Mon image LCP est en CSS background-image. Comment l’optimiser ?', 'Mein LCP-Bild ist CSS background-image. Wie optimiere ich es?');
  add('Is there a target file size that guarantees a good LCP score?', '有没有能保证 LCP 好成绩的目标文件大小？', '¿Hay un tamaño que garantice buen LCP?', '良い LCP を保証するファイルサイズはありますか？', 'Estne magnitudo quae bonum LCP praestat?', 'Existe-t-il une taille garantissant un bon LCP ?', 'Gibt es eine Dateigröße, die gutes LCP garantiert?');
  add('Will compressing make my image look worse?', '压缩会让图片变差吗？', '¿Comprimir empeora la imagen?', '圧縮すると画像は悪く見えますか？', 'Facietne compressio imaginem peiorem?', 'La compression dégrade-t-elle l’image ?', 'Sieht mein Bild durch Komprimierung schlechter aus?');
  add('Can I compress a WebP or AVIF file?', '我可以压缩 WebP 或 AVIF 文件吗？', '¿Puedo comprimir WebP o AVIF?', 'WebP や AVIF を圧縮できますか？', 'Possumne fasciculum WebP aut AVIF comprimere?', 'Puis-je compresser un fichier WebP ou AVIF ?', 'Kann ich eine WebP- oder AVIF-Datei komprimieren?');
  add('How many images can I compress at once?', '一次可以压缩多少张图片？', '¿Cuántas imágenes puedo comprimir a la vez?', '一度に何枚圧縮できますか？', 'Quot imagines simul comprimere possum?', 'Combien d’images puis-je compresser à la fois ?', 'Wie viele Bilder kann ich gleichzeitig komprimieren?');
  add('Why is PNG compression not reducing the file size much?', '为什么 PNG 压缩后文件没有小很多？', '¿Por qué PNG no reduce mucho el tamaño?', 'PNG 圧縮であまり小さくならない理由は？', 'Cur compressio PNG magnitudinem parum minuit?', 'Pourquoi la compression PNG réduit-elle peu le fichier ?', 'Warum reduziert PNG-Komprimierung die Größe kaum?');
  add('Will converting PNG to JPEG lose the transparent background?', 'PNG 转 JPEG 会丢失透明背景吗？', '¿PNG a JPEG pierde la transparencia?', 'PNG から JPEG にすると透明背景は消えますか？', 'Amittetne PNG in JPEG conversum fundum transparentem?', 'Convertir PNG en JPEG supprime-t-il la transparence ?', 'Geht Transparenz bei PNG zu JPEG verloren?');
  add('Does converting to WebP reduce quality?', '转换成 WebP 会降低质量吗？', '¿Convertir a WebP reduce la calidad?', 'WebP 変換で品質は下がりますか？', 'Minuitne conversio ad WebP qualitatem?', 'La conversion en WebP réduit-elle la qualité ?', 'Verringert WebP-Konvertierung die Qualität?');
  add('Is AVIF supported everywhere?', 'AVIF 到处都支持吗？', '¿AVIF es compatible en todas partes?', 'AVIF はどこでも対応していますか？', 'Sustentaturne AVIF ubique?', 'AVIF est-il pris en charge partout ?', 'Wird AVIF überall unterstützt?');
  add('Can I batch convert hundreds of images at once?', '可以一次批量转换几百张图片吗？', '¿Puedo convertir cientos de imágenes a la vez?', '数百枚を一括変換できますか？', 'Possumne centenas imaginum simul convertere?', 'Puis-je convertir des centaines d’images à la fois ?', 'Kann ich hunderte Bilder gleichzeitig konvertieren?');
  add('My converted file is larger than the original. Why?', '转换后的文件比原文件更大，为什么？', 'Mi archivo convertido es más grande. ¿Por qué?', '変換後のファイルが大きいのはなぜ？', 'Cur fasciculus conversus maior est?', 'Pourquoi le fichier converti est-il plus lourd ?', 'Warum ist die konvertierte Datei größer?');
  add('Can I resize without losing quality?', '可以无损调整尺寸吗？', '¿Puedo redimensionar sin perder calidad?', '品質を落とさずリサイズできますか？', 'Possumne mensuram mutare sine qualitate perdita?', 'Puis-je redimensionner sans perdre en qualité ?', 'Kann ich ohne Qualitätsverlust skalieren?');
  add('How do I resize to exact dimensions without distortion?', '如何在不变形的情况下调整到精确尺寸？', '¿Cómo redimensionar a medidas exactas sin distorsión?', '歪ませず正確な寸法にするには？', 'Quomodo ad mensuras exactas sine distortione mutare?', 'Comment redimensionner exactement sans déformation ?', 'Wie skaliere ich exakt ohne Verzerrung?');
  add('What size should I use for Instagram?', 'Instagram 应该用什么尺寸？', '¿Qué tamaño uso para Instagram?', 'Instagram にはどのサイズを使うべき？', 'Qua mensura pro Instagram utar?', 'Quelle taille utiliser pour Instagram ?', 'Welche Größe sollte ich für Instagram nutzen?');
  add('Can I batch resize multiple images to the same dimensions?', '可以批量把多张图片调整到相同尺寸吗？', '¿Puedo redimensionar varias imágenes al mismo tamaño?', '複数画像を同じ寸法に一括リサイズできますか？', 'Possumne multas imagines ad easdem mensuras mutare?', 'Puis-je redimensionner plusieurs images aux mêmes dimensions ?', 'Kann ich mehrere Bilder auf dieselbe Größe skalieren?');
  add('Do I need Adobe Acrobat or a login?', '需要 Adobe Acrobat 或登录吗？', '¿Necesito Adobe Acrobat o iniciar sesión?', 'Adobe Acrobat やログインは必要ですか？', 'Egone Adobe Acrobat aut ingressum requiro?', 'Ai-je besoin d’Adobe Acrobat ou d’un compte ?', 'Brauche ich Adobe Acrobat oder Login?');
  add('Can I convert all pages of a PDF at once?', '可以一次转换 PDF 的所有页面吗？', '¿Puedo convertir todas las páginas de un PDF a la vez?', 'PDF の全ページを一度に変換できますか？', 'Possumne omnes paginas PDF simul convertere?', 'Puis-je convertir toutes les pages d’un PDF à la fois ?', 'Kann ich alle PDF-Seiten auf einmal konvertieren?');
  add('What is the maximum PDF file size?', 'PDF 最大文件大小是多少？', '¿Cuál es el tamaño máximo del PDF?', 'PDF の最大サイズは？', 'Quae est maxima magnitudo PDF?', 'Quelle est la taille maximale d’un PDF ?', 'Wie groß darf eine PDF-Datei maximal sein?');
  add('Which output format should I use?', '应该使用哪种输出格式？', '¿Qué formato de salida debo usar?', 'どの出力形式を使うべき？', 'Qua forma exitus uti debeo?', 'Quel format de sortie choisir ?', 'Welches Ausgabeformat sollte ich nutzen?');
  add('Is my PDF uploaded to a server?', '我的 PDF 会上传到服务器吗？', '¿Mi PDF se sube a un servidor?', 'PDF はサーバーにアップロードされますか？', 'PDF meum ad servitorem mittiturne?', 'Mon PDF est-il envoyé sur un serveur ?', 'Wird mein PDF auf einen Server hochgeladen?');
  add('The PDF looks blurry. What should I do?', 'PDF 转出的图片模糊怎么办？', 'El PDF se ve borroso. ¿Qué hago?', 'PDF がぼやけます。どうすれば？', 'PDF turbidum videtur. Quid faciam?', 'Le PDF est flou. Que faire ?', 'Das PDF wirkt unscharf. Was tun?');
  add('Does converting JPG to PNG improve quality?', 'JPG 转 PNG 会提升质量吗？', '¿Convertir JPG a PNG mejora la calidad?', 'JPG を PNG にすると品質は上がりますか？', 'Melioratne JPG in PNG conversum qualitatem?', 'Convertir JPG en PNG améliore-t-il la qualité ?', 'Verbessert JPG zu PNG die Qualität?');
  add('Will the PNG file be larger than the JPG?', 'PNG 文件会比 JPG 更大吗？', '¿El PNG será más grande que el JPG?', 'PNG は JPG より大きくなりますか？', 'Eritne PNG maior quam JPG?', 'Le PNG sera-t-il plus lourd que le JPG ?', 'Wird PNG größer als JPG?');
  add('Can I convert multiple JPG files at once?', '可以一次转换多个 JPG 文件吗？', '¿Puedo convertir varios JPG a la vez?', '複数の JPG を一度に変換できますか？', 'Possumne plures JPG simul convertere?', 'Puis-je convertir plusieurs JPG à la fois ?', 'Kann ich mehrere JPG-Dateien gleichzeitig konvertieren?');
  add('Can I use this on iPhone?', '可以在 iPhone 上使用吗？', '¿Puedo usarlo en iPhone?', 'iPhone で使えますか？', 'Possumne hoc in iPhone uti?', 'Puis-je l’utiliser sur iPhone ?', 'Kann ich das auf dem iPhone nutzen?');
  add('Why are phone photos so large?', '为什么手机照片这么大？', '¿Por qué las fotos del móvil son tan grandes?', 'スマホ写真が大きいのはなぜ？', 'Cur photographiae telephonicae tam magnae sunt?', 'Pourquoi les photos de téléphone sont-elles si lourdes ?', 'Warum sind Handyfotos so groß?');
  add('Which tool should I use first?', '应该先用哪个工具？', '¿Qué herramienta uso primero?', '最初にどのツールを使うべき？', 'Quo instrumento primum utar?', 'Quel outil utiliser en premier ?', 'Welches Tool sollte ich zuerst nutzen?');

  const FAQ_FALLBACK = {
    zh: '按本页推荐设置操作即可。FreeImgTools 会尽量保持流程简单、快速，并优先使用浏览器本地处理来保护隐私。',
    es: 'Usa los ajustes recomendados de esta página. FreeImgTools mantiene el flujo simple y rápido, y prioriza el procesamiento local en el navegador para proteger la privacidad.',
    ja: 'このページの推奨設定を使ってください。FreeImgTools は操作をシンプルで速く保ち、できるだけブラウザ内処理でプライバシーを守ります。',
    la: 'Optionibus in hac pagina commendatis utere. FreeImgTools processum simplicem et celerem servat, et ubi fieri potest in navigatro tuo privatim operatur.',
    fr: 'Utilisez les réglages recommandés sur cette page. FreeImgTools garde le flux simple et rapide, avec un traitement local dans le navigateur quand c’est possible.',
    de: 'Nutze die empfohlenen Einstellungen auf dieser Seite. FreeImgTools hält den Ablauf einfach und schnell und verarbeitet Dateien möglichst lokal im Browser.'
  };

  function answer(test, zh, es, ja, la, fr, de) {
    return { test, text: { zh, es, ja, la, fr, de } };
  }

  const FAQ_ANSWER_PATTERNS = [
    answer(/uploaded|server|private|privacy|identity|application photos|files uploaded|uploaded to freeimgtools|safe for identity/i,
      '不会。核心图片和 PDF 工具在浏览器本地运行，文件不会上传到 FreeImgTools 服务器。AI 功能除外，它需要一次 Cloudflare 推理请求。',
      'No. Las herramientas principales de imagen y PDF se ejecutan localmente en el navegador; tus archivos no se suben a servidores de FreeImgTools. Las funciones de IA son la excepción porque requieren una solicitud a Cloudflare.',
      'いいえ。主要な画像・PDF ツールはブラウザ内で動作し、ファイルは FreeImgTools のサーバーへアップロードされません。AI 機能だけは Cloudflare への推論リクエストが必要です。',
      'Non. Instrumenta principalia imaginum et PDF in navigatro tuo currunt; fasciculi ad servitores FreeImgTools non mittuntur. Munera AI excepta sunt, quia petitionem Cloudflare requirunt.',
      'Non. Les outils image et PDF principaux fonctionnent localement dans le navigateur ; vos fichiers ne sont pas envoyés aux serveurs FreeImgTools. Les fonctions IA font exception car elles utilisent une requête Cloudflare.',
      'Nein. Die wichtigsten Bild- und PDF-Tools laufen lokal im Browser; deine Dateien werden nicht an FreeImgTools-Server gesendet. KI-Funktionen sind die Ausnahme, weil sie eine Cloudflare-Anfrage benötigen.'),
    answer(/adobe|login|without installing|without software|fastest way to convert pdf/i,
      '不需要 Adobe Acrobat、登录、订阅或安装软件。打开工具页，选择文件，预览或处理，然后下载结果即可，适合临时快速处理 PDF。',
      'No necesitas Adobe Acrobat, iniciar sesión, suscripción ni instalar software. Abre la herramienta, elige el archivo, previsualiza o procesa y descarga el resultado.',
      'Adobe Acrobat、ログイン、サブスク、インストールは不要です。ツールを開き、ファイルを選び、プレビューまたは処理して結果をダウンロードするだけです。',
      'Adobe Acrobat, ingressus, subscriptio aut institutio programmatis non requiruntur. Aperi instrumentum, elige fasciculum, praevisa aut effice, deinde excipe.',
      'Vous n’avez pas besoin d’Adobe Acrobat, de connexion, d’abonnement ni d’installation. Ouvrez l’outil, choisissez le fichier, prévisualisez ou traitez, puis téléchargez.',
      'Du brauchst kein Adobe Acrobat, kein Login, kein Abo und keine Installation. Tool öffnen, Datei wählen, Vorschau oder Verarbeitung starten und Ergebnis herunterladen.'),
    answer(/compress.*png|png compression|reduce png|png file larger/i,
      'PNG 通常是无损格式，质量滑块不会像 JPEG 那样明显减小体积。若是照片，转换为 WebP 或 JPEG 往往更小；若是截图、图标或透明图片，PNG 仍然合适。',
      'PNG suele ser sin pérdida, por eso el control de calidad no reduce el tamaño como en JPEG. Para fotos, WebP o JPEG suele ser más pequeño; para capturas, iconos o transparencia, PNG sigue siendo útil.',
      'PNG は通常可逆形式なので、品質スライダーでは JPEG ほど小さくなりません。写真なら WebP や JPEG、スクリーンショット・アイコン・透過なら PNG が向いています。',
      'PNG plerumque sine amissione est, ideo optio qualitatis magnitudinem non minuit sicut JPEG. Pro photis WebP aut JPEG saepe minora sunt; pro imaginibus perlucidis PNG valet.',
      'PNG est généralement sans perte, donc le réglage de qualité ne réduit pas le fichier comme avec JPEG. Pour les photos, WebP ou JPEG est souvent plus léger ; pour captures, icônes ou transparence, PNG reste adapté.',
      'PNG ist meist verlustfrei, daher verkleinert ein Qualitätsregler die Datei nicht wie bei JPEG. Für Fotos sind WebP oder JPEG oft kleiner; für Screenshots, Icons und Transparenz bleibt PNG passend.'),
    answer(/jpeg.*png|get the quality back|restore quality|jpg to png improve quality/i,
      '不能。JPEG 已经丢失的细节无法通过转成 PNG 恢复。PNG 只是不再继续有损压缩，通常文件还会变大。',
      'No. Los detalles perdidos en JPEG no vuelven al convertir a PNG. PNG solo evita más pérdida desde ese punto, y normalmente genera un archivo más grande.',
      'できません。JPEG で失われた細部は PNG に変換しても戻りません。PNG は以後の劣化を防ぐだけで、通常ファイルは大きくなります。',
      'Non. Detailia quae JPEG amisit per conversionem ad PNG restitui non possunt. PNG tantum postea damnum vitat, sed fasciculus saepe maior fit.',
      'Non. Les détails perdus dans un JPEG ne reviennent pas en PNG. PNG évite seulement une nouvelle perte ensuite, avec un fichier souvent plus lourd.',
      'Nein. Details, die durch JPEG verloren gingen, kommen durch PNG nicht zurück. PNG verhindert nur weitere Verluste und erzeugt meist größere Dateien.'),
    answer(/webp always|webp for all|webp or avif|why convert to webp|switching from jpeg to webp/i,
      'WebP 是大多数网页图片的安全默认选择，通常比 JPEG 小。AVIF 可能更小，但编码更慢、兼容性场景要多检查。重要图片建议保留高质量原图备份。',
      'WebP es una opción segura para la mayoría de imágenes web y suele ser más pequeño que JPEG. AVIF puede ser aún menor, pero codifica más lento y conviene revisar compatibilidad.',
      'WebP は多くの Web 画像で安全な既定候補で、JPEG より小さくなりやすいです。AVIF はさらに小さい場合がありますが、エンコードが遅く互換性確認が必要です。',
      'WebP pro plurimis imaginibus web optio tuta est et saepe JPEG minor. AVIF etiam minus esse potest, sed tardius coditur et compatibilitas inspicienda est.',
      'WebP est un bon choix par défaut pour la plupart des images web et il est souvent plus léger que JPEG. AVIF peut être encore plus petit, mais l’encodage est plus lent et la compatibilité doit être vérifiée.',
      'WebP ist für die meisten Webbilder ein guter Standard und oft kleiner als JPEG. AVIF kann noch kleiner sein, kodiert aber langsamer und braucht Kompatibilitätsprüfung.'),
    answer(/avif supported|avif support|avif.*transparency/i,
      'AVIF 支持透明度，现代浏览器支持度也很好，但并非所有旧软件、邮件客户端或上传系统都接受。面向网页可用 AVIF；需要最大兼容时用 JPG、PNG 或 WebP。',
      'AVIF admite transparencia y tiene buen soporte en navegadores modernos, pero no todo software antiguo, cliente de email o portal de subida lo acepta. Para máxima compatibilidad usa JPG, PNG o WebP.',
      'AVIF は透過に対応し、現代ブラウザでの対応も良好です。ただし古いソフト、メール、アップロード先では非対応の場合があります。最大互換なら JPG、PNG、WebP を使います。',
      'AVIF transparentiam sustinet et in navigatris modernis late valet, sed non omne vetus programma aut ratio onerandi id accipit. Pro maxima compatibilitate JPG, PNG aut WebP utere.',
      'AVIF prend en charge la transparence et fonctionne bien dans les navigateurs modernes, mais certains anciens logiciels, clients mail ou portails ne l’acceptent pas. Pour compatibilité maximale, utilisez JPG, PNG ou WebP.',
      'AVIF unterstützt Transparenz und moderne Browser gut, aber nicht jede ältere Software, Mail-App oder Upload-Plattform akzeptiert es. Für maximale Kompatibilität nutze JPG, PNG oder WebP.'),
    answer(/same quality setting|quality setting|jpeg quality|compressing.*look worse|quality loss|losing quality|reduce quality|print quality/i,
      '质量取决于图片内容和用途。照片通常用 80-90 质量就足够清晰；文字、截图、证件照或打印用途应使用更高质量，并避免反复保存有损格式。',
      'La calidad depende del contenido y del uso. Para fotos, calidad 80-90 suele verse nítida; para texto, capturas, documentos o impresión usa mayor calidad y evita guardar repetidamente en formatos con pérdida.',
      '品質は画像内容と用途で変わります。写真は品質 80-90 で十分なことが多く、文字・スクリーンショット・証明写真・印刷では高めの品質と再保存回数の抑制が大切です。',
      'Qualitas ex argumento et usu pendet. Pro photis qualitas 80-90 saepe satis clara est; pro textu, documentis aut typis qualitate altiore utere et formas amissivas saepe ne serves.',
      'La qualité dépend du contenu et de l’usage. Pour les photos, 80-90 suffit souvent ; pour texte, captures, documents ou impression, utilisez une qualité plus élevée et évitez les enregistrements avec perte répétés.',
      'Qualität hängt vom Inhalt und Zweck ab. Für Fotos reicht oft 80-90; bei Text, Screenshots, Dokumenten oder Druck nutze höhere Qualität und vermeide wiederholtes Speichern in verlustbehafteten Formaten.'),
    answer(/batch|how many|hundreds|multiple .*files|file count|limit|maximum .*size/i,
      '没有固定数量限制，实际取决于设备内存和浏览器性能。普通电脑一次处理几十到上百张通常没问题；特别大的文件建议分批处理。',
      'No hay un límite fijo; depende de la memoria del dispositivo y del navegador. Un ordenador normal suele manejar decenas o cientos de imágenes; para archivos muy grandes, divide el lote.',
      '固定上限はなく、端末メモリとブラウザ性能に依存します。一般的な PC なら数十から百枚以上を処理できます。大きなファイルは分けて処理してください。',
      'Finis certus non est; memoria machinae et navigatrum valent. Computatrum commune multas imagines tractare potest; fasciculos maximos in partes divide.',
      'Il n’y a pas de limite fixe ; cela dépend de la mémoire de l’appareil et du navigateur. Un ordinateur courant gère souvent des dizaines à centaines d’images ; divisez les très gros lots.',
      'Es gibt kein festes Limit; es hängt von Gerätespeicher und Browser ab. Normale Computer schaffen oft Dutzende bis Hunderte Bilder; sehr große Dateien besser aufteilen.'),
    answer(/transparent|transparency|png to jpeg/i,
      'JPEG 不支持透明背景，透明区域会被填成纯色，通常是白色。需要保留透明度时，请使用 PNG、WebP 或 AVIF。',
      'JPEG no admite transparencia; las zonas transparentes se rellenan con un color sólido, normalmente blanco. Para conservar transparencia, usa PNG, WebP o AVIF.',
      'JPEG は透過に対応していないため、透明部分は通常白などの単色で埋められます。透過を残すなら PNG、WebP、AVIF を使ってください。',
      'JPEG transparentiam non sustinet; areae perlucidae colore solido, saepe albo, implentur. Si transparentiam servare vis, PNG, WebP aut AVIF utere.',
      'JPEG ne prend pas en charge la transparence ; les zones transparentes deviennent une couleur unie, souvent blanche. Pour garder la transparence, utilisez PNG, WebP ou AVIF.',
      'JPEG unterstützt keine Transparenz; transparente Bereiche werden mit einer Vollfarbe, meist Weiß, gefüllt. Für Transparenz nutze PNG, WebP oder AVIF.'),
    answer(/converted file is larger|larger than the original|png file.*larger|png.*larger than.*jpg/i,
      '格式不同会导致文件变大。PNG 是无损格式，照片转 PNG 往往比原 JPEG 更大；如果目标是减小体积，优先试 WebP、JPEG 或降低尺寸。',
      'El archivo puede crecer por el cambio de formato. PNG es sin pérdida y una foto convertida desde JPEG suele pesar más. Si buscas menor tamaño, prueba WebP, JPEG o reduce dimensiones.',
      '形式の違いでファイルが大きくなることがあります。PNG は可逆なので、写真を JPEG から PNG にすると重くなりがちです。小さくしたいなら WebP、JPEG、リサイズを試してください。',
      'Forma mutata fasciculum maiorem facere potest. PNG sine amissione est, itaque photo ex JPEG in PNG saepe maior fit. Si minus opus est, WebP, JPEG aut minores mensuras tenta.',
      'Un fichier peut grossir à cause du format. PNG est sans perte, donc une photo convertie depuis JPEG devient souvent plus lourde. Pour réduire, essayez WebP, JPEG ou un redimensionnement.',
      'Durch Formatwechsel kann eine Datei größer werden. PNG ist verlustfrei, daher werden Fotos aus JPEG oft größer. Für kleinere Dateien nutze WebP, JPEG oder geringere Abmessungen.'),
    answer(/exact dimensions|without distortion|resize without losing|size should i use|instagram|same dimensions/i,
      '先按目标平台选择尺寸。需要精确宽高时使用裁剪/cover 模式避免拉伸变形；需要保留完整画面时使用 contain 模式并接受留白。',
      'Elige primero el tamaño de la plataforma. Para medidas exactas usa modo recorte/cover y evita distorsión; para conservar todo el encuadre usa contain y acepta bordes.',
      'まず対象プラットフォームのサイズを選びます。正確な幅高さが必要なら cover/切り抜きで歪みを避け、全体を残すなら contain で余白を許容します。',
      'Primum mensuram suggesti elige. Si mensurae exactae opus sunt, modo cover/secandi utere ne imago distorqueatur; si totam imaginem servare vis, modo contain utere.',
      'Choisissez d’abord la taille de la plateforme. Pour des dimensions exactes, utilisez le mode recadrage/cover sans déformation ; pour garder toute l’image, utilisez contain avec marges.',
      'Wähle zuerst die Zielgröße der Plattform. Für exakte Maße nutze Cover/Zuschneiden ohne Verzerrung; wenn alles sichtbar bleiben soll, nutze Contain mit Rand.'),
    answer(/pdf.*all pages|convert all pages/i,
      '当前为了保持简单、快速和隐私，PDF 转图片按页处理。选择页码、预览、下载；需要其他页面时重复操作即可。',
      'Para mantenerlo simple, rápido y privado, la conversión PDF a imagen procesa una página a la vez. Elige número de página, previsualiza y descarga; repite para más páginas.',
      'シンプル・高速・プライバシー重視のため、PDF から画像への変換は 1 ページずつ処理します。ページ番号を選び、プレビューしてダウンロードしてください。',
      'Ut simplex, celer et privatus maneat, PDF in imaginem pagina singula tractatur. Numerum paginae elige, praevisa, excipe; deinde repete.',
      'Pour rester simple, rapide et privé, la conversion PDF vers image traite une page à la fois. Choisissez la page, prévisualisez, téléchargez, puis répétez si besoin.',
      'Damit es einfach, schnell und privat bleibt, verarbeitet PDF zu Bild jeweils eine Seite. Seitenzahl wählen, Vorschau ansehen, herunterladen und bei Bedarf wiederholen.'),
    answer(/pdf.*blurry|converted image.*blurry|dpi/i,
      '提高 DPI。72 或 96 DPI 适合快速预览，150 DPI 适合网页和邮件，300 DPI 更适合打印或细文字。若原 PDF 本身低清，转换无法创造新细节。',
      'Aumenta el DPI. 72 o 96 DPI sirve para vista rápida, 150 DPI para web/email y 300 DPI para impresión o texto fino. Si el PDF original es borroso, la conversión no crea detalle nuevo.',
      'DPI を上げてください。72/96 DPI は簡易プレビュー、150 DPI は Web/メール、300 DPI は印刷や細かい文字向けです。元 PDF が低画質なら新しい細部は作れません。',
      'DPI auge. 72 aut 96 DPI praevisui celeri, 150 DPI interreti aut epistulis, 300 DPI typis aut textui minuto apta sunt. Si PDF originale turbidum est, nova detailia creari non possunt.',
      'Augmentez le DPI. 72 ou 96 DPI convient à l’aperçu, 150 DPI au web/email, 300 DPI à l’impression ou au texte fin. Si le PDF source est flou, la conversion ne crée pas de détails.',
      'Erhöhe die DPI. 72/96 DPI reichen für Vorschau, 150 DPI für Web/E-Mail, 300 DPI für Druck oder feinen Text. Wenn das Original-PDF unscharf ist, entstehen keine neuen Details.'),
    answer(/output format|best format|jpg|jpeg|png|webp|format/i,
      '按用途选格式：照片用 JPG 或 WebP，透明图和截图用 PNG/WebP，需要网页更小体积可试 WebP 或 AVIF，需要最大兼容性用 JPG/PNG。',
      'Elige según el uso: fotos en JPG o WebP, transparencia y capturas en PNG/WebP, menor peso web con WebP o AVIF, máxima compatibilidad con JPG/PNG.',
      '用途で選びます。写真は JPG/WebP、透過やスクリーンショットは PNG/WebP、Web で軽くしたいなら WebP/AVIF、互換性重視なら JPG/PNG です。',
      'Forma ex usu eligenda est: photos JPG aut WebP, transparentia et capturas PNG/WebP, pondus web minus WebP aut AVIF, compatibilitas maxima JPG/PNG.',
      'Choisissez selon l’usage : photos en JPG ou WebP, transparence et captures en PNG/WebP, poids web réduit avec WebP ou AVIF, compatibilité maximale avec JPG/PNG.',
      'Wähle nach Zweck: Fotos als JPG oder WebP, Transparenz und Screenshots als PNG/WebP, kleinere Webdateien mit WebP oder AVIF, maximale Kompatibilität mit JPG/PNG.'),
    answer(/alt text|file names|image search|image seo|ranking|seo|title attribute|indexed|google image/i,
      '图片 SEO 的重点是描述准确、加载快、文件名清晰、alt 文本有用，并让页面可被 Google 抓取。不要堆关键词，优先帮助真实用户理解图片。',
      'El SEO de imágenes mejora con descripciones precisas, carga rápida, nombres claros, alt text útil y páginas rastreables por Google. Evita rellenar palabras clave; ayuda primero al usuario real.',
      '画像 SEO は、正確な説明、速い読み込み、明確なファイル名、有用な alt テキスト、Google がクロールできるページで強くなります。キーワード詰め込みは避けます。',
      'SEO imaginum melior fit descriptionibus veris, celeritate, nominibus claris, textu alt utili et paginis a Google legendis. Verba clavis ne cumulaveris; usorem verum iuva.',
      'Le SEO image repose sur des descriptions précises, un chargement rapide, des noms clairs, un texte alt utile et des pages explorables par Google. Évitez le bourrage de mots-clés.',
      'Bild-SEO profitiert von genauen Beschreibungen, schneller Ladezeit, klaren Dateinamen, nützlichem Alt-Text und crawlbaren Seiten. Kein Keyword-Stuffing, echte Nutzer zuerst.'),
    answer(/lcp|lazy loading|cdn|web performance|slowing down|core web vitals|background-image/i,
      '网页性能优先看 LCP 图片：用正确尺寸、现代格式、合理压缩，并让首屏关键图尽早加载。非首屏图片可以懒加载，CDN 能降低访问延迟。',
      'Para rendimiento web, empieza por la imagen LCP: tamaño correcto, formato moderno, compresión razonable y carga temprana. Las imágenes fuera de pantalla pueden usar lazy loading; un CDN reduce latencia.',
      'Web 性能では LCP 画像が重要です。適切なサイズ、現代形式、適度な圧縮、早い読み込みを行います。画面外画像は lazy loading、CDN は遅延削減に役立ちます。',
      'Pro effectu web, imaginem LCP primo cura: mensura recta, forma moderna, compressio prudens, oneratio celeris. Imagines infra paginam pigre onerari possunt; CDN moram minuit.',
      'Pour la performance web, commencez par l’image LCP : bonnes dimensions, format moderne, compression raisonnable et chargement tôt. Le lazy loading convient hors écran ; un CDN réduit la latence.',
      'Für Webperformance zuerst das LCP-Bild optimieren: richtige Größe, modernes Format, sinnvolle Komprimierung und frühes Laden. Offscreen-Bilder lazy-loaden; CDN senkt Latenz.'),
    answer(/email|online form|visa|government|passport|240kb|200kb|100kb|50kb|20kb|500kb/i,
      '按提交系统显示的限制来做。通常先调整到要求的像素尺寸，再压缩到目标 KB。证件照和申请表请同时检查背景、比例、文件格式和官方要求。',
      'Sigue el límite exacto del portal. Normalmente conviene ajustar primero las dimensiones en píxeles y luego comprimir al KB objetivo. Para documentos o visas, revisa fondo, proporción, formato y reglas oficiales.',
      '提出先の制限に合わせてください。通常は先に必要なピクセル寸法へリサイズし、その後目標 KB に圧縮します。証明写真や申請では背景・比率・形式・公式要件も確認します。',
      'Finem quem porta ostendit sequere. Plerumque primum mensuras pixel muta, deinde ad KB destinatum comprime. Pro documentis aut visa, fundum, proportionem, formam et regulas publicas inspice.',
      'Suivez la limite exacte du portail. En général, redimensionnez d’abord aux pixels requis puis compressez au KB cible. Pour photo officielle ou visa, vérifiez fond, ratio, format et règles officielles.',
      'Halte dich an das Limit des Portals. Meist zuerst auf die geforderten Pixelmaße skalieren, dann auf Ziel-KB komprimieren. Bei Ausweis/Visum auch Hintergrund, Seitenverhältnis, Format und Regeln prüfen.'),
    answer(/freeimgtools|same as imgtool|free\?|what is freeimgtools|ai alt text/i,
      'FreeImgTools 是 freeimgtools.net 上的开源图片工具网站，提供压缩、转换、调整尺寸、PDF、GIF 和图片 SEO 工具。核心工具免费、无需账号，并强调隐私友好。',
      'FreeImgTools es un sitio open source en freeimgtools.net con herramientas para comprimir, convertir, redimensionar, PDF, GIF y SEO de imágenes. Las herramientas principales son gratis, sin cuenta y con foco en privacidad.',
      'FreeImgTools は freeimgtools.net のオープンソース画像ツールサイトで、圧縮、変換、リサイズ、PDF、GIF、画像 SEO を提供します。主要ツールは無料・アカウント不要・プライバシー重視です。',
      'FreeImgTools est situs apertus in freeimgtools.net cum instrumentis compressionis, conversionis, mensurae, PDF, GIF et SEO imaginum. Instrumenta principalia gratuita sunt et rationem non requirunt.',
      'FreeImgTools est un site open source sur freeimgtools.net pour compresser, convertir, redimensionner, gérer PDF/GIF et améliorer le SEO image. Les outils principaux sont gratuits, sans compte et orientés confidentialité.',
      'FreeImgTools ist eine Open-Source-Website auf freeimgtools.net für Komprimierung, Konvertierung, Resize, PDF, GIF und Bild-SEO. Die Haupttools sind kostenlos, ohne Konto und privacy-first.')
  ];

  function getLang() {
    const params = new URLSearchParams(location.search);
    const code = params.get('lang') || localStorage.getItem(LANG_KEY) || document.documentElement.lang || 'en';
    return SUPPORTED.has(code) ? code : 'en';
  }

  function shouldSkip(element) {
    return element.closest('script, style, code, pre, textarea, input, select, option, .nav-discovery, #cc-banner');
  }

  function translateText(original, lang) {
    if (!SUPPORTED.has(lang)) return original;
    const normalized = normalize(original);
    const hit = EXACT[normalized]?.[lang];
    if (hit) {
      return original.includes('▼') ? `${hit} ▼` : hit;
    }
    return original;
  }

  function getFaqAnswer(originalQuestion, lang) {
    if (!SUPPORTED.has(lang)) return null;
    const normalized = normalize(originalQuestion);
    const match = FAQ_ANSWER_PATTERNS.find(item => item.test.test(normalized));
    return match?.text?.[lang] || FAQ_FALLBACK[lang] || null;
  }

  function cacheOriginalHtml(element) {
    if (!element.dataset.contentI18nOriginalHtml) {
      element.dataset.contentI18nOriginalHtml = element.innerHTML;
    }
  }

  function restoreOriginalHtml(element) {
    if (element.dataset.contentI18nOriginalHtml && element.dataset.contentI18nTranslatedHtml === '1') {
      element.innerHTML = element.dataset.contentI18nOriginalHtml;
      delete element.dataset.contentI18nTranslatedHtml;
    }
  }

  function replaceFaqBody(details, summary, answerText, lang) {
    if (!answerText || lang === 'en') {
      restoreOriginalHtml(details);
      return;
    }
    cacheOriginalHtml(details);
    details.innerHTML = '';
    details.appendChild(summary);
    const answerElement = document.createElement('div');
    answerElement.className = 'i18n-faq-answer';
    answerElement.textContent = answerText;
    details.appendChild(answerElement);
    details.dataset.contentI18nTranslatedHtml = '1';
  }

  function translateDetailsFaqAnswers(lang) {
    document.querySelectorAll('details').forEach(details => {
      if (shouldSkip(details)) return;
      const summary = details.querySelector('summary');
      if (!summary) return;
      const originalQuestion = summary.dataset.contentI18nOriginal || summary.textContent.trim();
      const answerText = getFaqAnswer(originalQuestion, lang);
      replaceFaqBody(details, summary, answerText, lang);
    });
  }

  function translatePairedFaqAnswers(lang) {
    document.querySelectorAll('p').forEach(answerElement => {
      if (shouldSkip(answerElement)) return;
      const questionElement = answerElement.previousElementSibling;
      if (!questionElement || questionElement.tagName !== 'P') return;
      const originalQuestion = questionElement.dataset.contentI18nOriginal || questionElement.textContent.trim();
      if (!originalQuestion || !/[?？]$/.test(normalize(originalQuestion))) return;
      const answerText = getFaqAnswer(originalQuestion, lang);
      if (!answerText || lang === 'en') {
        if (answerElement.dataset.contentI18nOriginalAnswer) {
          answerElement.textContent = answerElement.dataset.contentI18nOriginalAnswer;
        }
        return;
      }
      if (!answerElement.dataset.contentI18nOriginalAnswer) {
        answerElement.dataset.contentI18nOriginalAnswer = answerElement.textContent.trim();
      }
      answerElement.textContent = answerText;
    });
  }

  function translateElement(element, lang) {
    if (shouldSkip(element)) return;
    if (element.children.length > 0) return;
    const original = element.dataset.contentI18nOriginal || element.textContent.trim();
    if (!original) return;
    if (!element.dataset.contentI18nOriginal) element.dataset.contentI18nOriginal = original;
    element.textContent = translateText(original, lang);
  }

  function applyContentI18n() {
    const lang = getLang();
    document.querySelectorAll('h1, h2, h3, h4, summary, p, li, button, a, span, strong, small').forEach(element => {
      translateElement(element, lang);
    });
    translateDetailsFaqAnswers(lang);
    translatePairedFaqAnswers(lang);
  }

  document.addEventListener('DOMContentLoaded', applyContentI18n);
  document.addEventListener('freeimgtools:language-change', applyContentI18n);
})();
