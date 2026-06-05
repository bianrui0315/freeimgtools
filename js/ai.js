import { showToast, initDragDrop } from './shared.js';
import { getSecurityConfig } from './security.js';

const ACTIONS = {
  'seo-pack': { title: 'AI Image SEO Pack', button: 'Generate SEO Pack' },
  alttext: { title: 'AI-Generated Alt Text', button: 'Generate Alt Text' },
  'product-alt': { title: 'Product Image Alt Text', button: 'Generate Product Alt Text' },
  caption: { title: 'Image Caption', button: 'Generate Caption' },
  filename: { title: 'SEO Filename', button: 'Generate SEO Filename' },
  tags: { title: 'Image Tags', button: 'Generate Image Tags' },
  classify: { title: 'Image Classification', button: 'Classify Image' },
};

const state = { file: null, action: 'seo-pack', copyText: '' };
let aiEnabled = true;

const els = {
  zone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  preview: document.getElementById('img-preview'),
  previewWrap: document.getElementById('preview-wrap'),
  actions: document.getElementById('ai-actions'),
  context: document.getElementById('context-input'),
  modeCards: [...document.querySelectorAll('.ai-mode-card')],
  generateBtn: document.getElementById('generate-btn'),
  output: document.getElementById('ai-output'),
  outputTitle: document.getElementById('output-title'),
  outputBody: document.getElementById('output-body'),
  copyOutput: document.getElementById('copy-output'),
};

function init() {
  initSecurityState();
  initDragDrop(els.zone, files => setFile(files[0]));
  els.fileInput?.addEventListener('change', e => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  });
  els.modeCards.forEach(card => {
    card.addEventListener('click', () => selectAction(card.dataset.action));
  });
  els.generateBtn?.addEventListener('click', runSelectedAction);
  els.copyOutput?.addEventListener('click', copyCurrentOutput);
  selectAction(state.action);
}

async function initSecurityState() {
  const config = await getSecurityConfig();
  aiEnabled = config.ai?.enabled === true;
  if (aiEnabled) return;

  if (els.generateBtn) {
    els.generateBtn.disabled = true;
    els.generateBtn.textContent = 'AI Disabled';
  }
}

async function setFile(file) {
  if (!file?.type?.startsWith('image/')) {
    showToast('Please select an image');
    return;
  }
  state.file = file;
  els.preview.src = URL.createObjectURL(file);
  els.previewWrap.classList.remove('hidden');
  els.output.classList.add('hidden');
  els.actions.classList.remove('hidden');
}

function selectAction(action) {
  state.action = ACTIONS[action] ? action : 'seo-pack';
  els.modeCards.forEach(card => card.classList.toggle('active', card.dataset.action === state.action));
  if (els.generateBtn) {
    els.generateBtn.dataset.label = ACTIONS[state.action].button;
    els.generateBtn.textContent = ACTIONS[state.action].button;
  }
}

async function runSelectedAction() {
  if (!aiEnabled) {
    showToast('AI is disabled to prevent unexpected Cloudflare usage.');
    return;
  }
  if (!state.file) {
    showToast('Please choose an image first');
    return;
  }
  setLoading(true);

  try {
    const data = await requestAi(state.action);
    if (state.action === 'classify') {
      renderClassification(data.result);
    } else if (state.action === 'seo-pack') {
      renderSeoPack(data.result);
    } else {
      renderSingle(ACTIONS[state.action].title, data.result || 'No result returned.');
    }
  } catch (err) {
    const message = cleanErrorMessage(err);
    showToast(message);
    renderSingle(ACTIONS[state.action].title, message);
  } finally {
    setLoading(false);
  }
}

async function requestAi(action) {
  const formData = new FormData();
  formData.append('image', state.file);
  formData.append('action', action);
  formData.append('context', els.context?.value || '');

  const res = await fetch('/api/ai', { method: 'POST', body: formData });
  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { error: text };
  }
  if (!res.ok) throw new Error(data.error || text || 'AI request failed');
  return data;
}

function renderSingle(title, value) {
  const text = normalizeText(value);
  const isFilename = state.action === 'filename';
  const isTags = state.action === 'tags';
  els.outputTitle.textContent = title;
  els.outputBody.innerHTML = `
    <div class="ai-output-grid">
      <div class="ai-output-card">
        <h5>${escapeHtml(isFilename ? 'Suggested filename' : isTags ? 'Suggested tags' : title)}</h5>
        ${isFilename ? `<code>${escapeHtml(cleanFilename(text) || text)}</code>` : `<p>${escapeHtml(text)}</p>`}
      </div>
    </div>
  `;
  state.copyText = isFilename ? (cleanFilename(text) || text) : text;
  els.output.classList.remove('hidden');
}

function renderClassification(result) {
  const tags = Array.isArray(result) ? result.slice(0, 10) : [];
  els.outputTitle.textContent = ACTIONS.classify.title;
  els.outputBody.innerHTML = tags.length
    ? `<div>${tags.map(t => `<span class="ai-tag">${escapeHtml(t.label)} <small style="opacity:0.6">${Math.round((t.score || 0) * 100)}%</small></span>`).join('')}</div>`
    : '<p>No classification result returned.</p>';
  state.copyText = tags.map(t => `${t.label}: ${Math.round((t.score || 0) * 100)}%`).join('\n');
  els.output.classList.remove('hidden');
}

function renderSeoPack(result) {
  const pack = normalizeSeoPack(result);
  els.outputTitle.textContent = ACTIONS['seo-pack'].title;

  if (pack.raw) {
    renderSingle(ACTIONS['seo-pack'].title, pack.raw);
    return;
  }

  const rows = [
    ['Alt text', pack.altText],
    ['Product alt text', pack.productAltText],
    ['Caption', pack.caption],
    ['SEO filename', pack.seoFilename, 'code'],
    ['Image title', pack.imageTitle],
    ['Tags', pack.tags.join(', ')],
  ].filter(([, value]) => value && String(value).trim());

  els.outputBody.innerHTML = `
    <div class="ai-output-grid">
      ${rows.map(([label, value, type]) => `
        <div class="ai-output-card">
          <h5>${escapeHtml(label)}</h5>
          ${type === 'code' ? `<code>${escapeHtml(value)}</code>` : `<p>${escapeHtml(value)}</p>`}
        </div>
      `).join('')}
    </div>
  `;

  state.copyText = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  els.output.classList.remove('hidden');
}

async function copyCurrentOutput() {
  if (!state.copyText) return;
  await navigator.clipboard.writeText(state.copyText);
  showToast('AI result copied to clipboard');
}

function setLoading(loading) {
  if (!els.generateBtn) return;
  els.generateBtn.disabled = loading;
  els.generateBtn.innerHTML = loading
    ? '<span class="spin">⟳</span> Analyzing...'
    : (els.generateBtn.dataset.label || ACTIONS[state.action].button);
}

function normalizeSeoPack(result) {
  if (!result || typeof result !== 'object') return { raw: normalizeText(result) };
  if (result.raw) return { raw: normalizeText(result.raw) };
  return {
    altText: normalizeText(result.altText),
    productAltText: normalizeText(result.productAltText),
    caption: normalizeText(result.caption),
    seoFilename: cleanFilename(result.seoFilename),
    imageTitle: normalizeText(result.imageTitle),
    tags: Array.isArray(result.tags) ? result.tags.map(normalizeText).filter(Boolean).slice(0, 12) : [],
  };
}

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function cleanFilename(value) {
  return normalizeText(value)
    .replace(/\.[a-z0-9]+$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function cleanErrorMessage(err) {
  const raw = String(err?.message || err || 'AI service unavailable.');
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.error) return parsed.error;
  } catch {}
  return raw.replace(/^AI processing failed:\s*/i, '').slice(0, 220);
}

document.addEventListener('DOMContentLoaded', init);
