import { showToast } from './shared.js';

const form = document.getElementById('audit-form');
const input = document.getElementById('audit-url');
const button = document.getElementById('audit-btn');
const resultWrap = document.getElementById('audit-result');
const summaryGrid = document.getElementById('audit-summary');
const issueList = document.getElementById('audit-issues');
const imageTable = document.getElementById('audit-images');
const pageMeta = document.getElementById('audit-page-meta');
const recommendationGrid = document.getElementById('audit-recommendations');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = input.value.trim();
  if (!url) {
    showToast('Enter a website URL');
    return;
  }

  setLoading(true);
  try {
    const res = await fetch('/api/image-seo-audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Audit failed');
    renderAudit(data);
  } catch (err) {
    showToast(err.message || 'Audit failed');
  } finally {
    setLoading(false);
  }
});

function setLoading(loading) {
  button.disabled = loading;
  button.innerHTML = loading ? '<span class="spin">⟳</span> Scanning...' : 'Scan Website Images';
}

function renderAudit(data) {
  resultWrap.classList.remove('hidden');
  pageMeta.innerHTML = `
    <strong>${escapeHtml(data.title || 'Untitled page')}</strong>
    <span>${escapeHtml(data.url)}</span>
    ${data.canonical ? `<span>Canonical: ${escapeHtml(data.canonical)}</span>` : ''}
  `;

  summaryGrid.innerHTML = [
    ['Score', `${data.score}/100`],
    ['Images', data.summary.imageCount],
    ['Missing alt', data.summary.missingAlt],
    ['No width/height', data.summary.missingDimensions],
    ['Weak filenames', data.summary.weakFilename],
    ['Large files', data.summary.largeFiles],
    ['Known size', formatBytes(data.summary.knownBytes)],
  ].map(([label, value]) => `
    <div class="card" style="padding:1rem;">
      <div style="font-size:0.78rem;color:var(--text-muted);text-transform:uppercase;font-weight:700;">${label}</div>
      <div style="font-size:1.6rem;font-weight:800;color:var(--text);margin-top:0.25rem;">${value}</div>
    </div>
  `).join('');

  issueList.innerHTML = buildIssues(data).map(issue => `<li>${issue}</li>`).join('');
  if (recommendationGrid) {
    recommendationGrid.innerHTML = (data.recommendations || []).map(renderRecommendation).join('');
  }
  imageTable.innerHTML = data.images.map(renderImageRow).join('');
}

function buildIssues(data) {
  const s = data.summary;
  const issues = [];
  if (s.missingAlt) issues.push(`<strong>${s.missingAlt} images are missing alt attributes.</strong> Add descriptive alt text for informative images.`);
  if (s.emptyAlt) issues.push(`<strong>${s.emptyAlt} images use empty alt text.</strong> This is correct only for decorative images.`);
  if (s.missingDimensions) issues.push(`<strong>${s.missingDimensions} images are missing width or height.</strong> Add dimensions to reduce layout shift.`);
  if (s.missingResponsive) issues.push(`<strong>${s.missingResponsive} images do not expose srcset in the returned HTML.</strong> Responsive images can reduce wasted bytes on mobile.`);
  if (s.missingLazyLoading) issues.push(`<strong>${s.missingLazyLoading} non-first images are missing loading hints.</strong> Consider lazy loading below-the-fold images.`);
  if (s.weakFilename) issues.push(`<strong>${s.weakFilename} images have weak filenames.</strong> Rename files with descriptive keywords before uploading.`);
  if (s.legacyFormat) issues.push(`<strong>${s.legacyFormat} images use JPG, PNG, GIF, or BMP.</strong> Consider WebP or AVIF for web performance when compatibility allows.`);
  if (s.largeFiles) issues.push(`<strong>${s.largeFiles} checked images are over 500KB.</strong> Compress or resize these before publishing when visual quality allows.`);
  if (!issues.length) issues.push('No major image SEO issues found in the HTML returned by this page.');
  return issues;
}

function renderRecommendation(item) {
  return `
    <a href="${escapeHtml(item.href)}" class="tool-card audit-recommendation-card">
      <h3 style="font-size:0.95rem;">${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      <span class="arrow">${escapeHtml(item.action)} →</span>
    </a>
  `;
}

function renderImageRow(img) {
  const altBadge = img.altStatus === 'present'
    ? '<span class="ai-tag">alt ok</span>'
    : `<span class="ai-tag" style="background:#fee2e2;color:#991b1b;">${img.altStatus} alt</span>`;
  const sizeBadge = img.fileSize
    ? `<span class="ai-tag" style="${img.largeFile ? 'background:#fee2e2;color:#991b1b;' : 'background:#dcfce7;color:#166534;'}">${escapeHtml(img.fileSize)}</span>`
    : '<span style="color:var(--text-muted);">unknown</span>';
  return `
    <tr>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);max-width:260px;word-break:break-word;">${escapeHtml(img.filename || img.src)}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${altBadge}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${img.hasDimensions ? `${escapeHtml(img.width)} x ${escapeHtml(img.height)}` : 'missing'}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${img.weakFilename ? 'weak' : 'ok'}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${escapeHtml(img.format)}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${sizeBadge}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${img.hasSrcset ? 'yes' : 'missing'}</td>
      <td style="padding:0.75rem;border-bottom:1px solid var(--border);">${escapeHtml(img.loading || (img.index === 0 ? 'first image' : 'missing'))}</td>
    </tr>
  `;
}

function formatBytes(bytes) {
  const value = Number(bytes);
  if (!Number.isFinite(value) || value <= 0) return 'unknown';
  if (value >= 1024 * 1024) return `${(value / 1024 / 1024).toFixed(value >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
  if (value >= 1024) return `${Math.round(value / 1024)} KB`;
  return `${value} B`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
