import { formatBytes, showToast, initDragDrop, blobToDataURL } from './shared.js';

const state = { file: null };

const els = {
  zone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  preview: document.getElementById('img-preview'),
  previewWrap: document.getElementById('preview-wrap'),
  altBtn: document.getElementById('alt-btn'),
  classifyBtn: document.getElementById('classify-btn'),
  altResult: document.getElementById('alt-result'),
  altText: document.getElementById('alt-text'),
  classifyResult: document.getElementById('classify-result'),
  classifyTags: document.getElementById('classify-tags'),
  copyAlt: document.getElementById('copy-alt'),
};

function init() {
  initDragDrop(els.zone, files => setFile(files[0]));
  els.fileInput.addEventListener('change', e => { if (e.target.files[0]) setFile(e.target.files[0]); });
  els.altBtn?.addEventListener('click', generateAltText);
  els.classifyBtn?.addEventListener('click', classifyImage);
  els.copyAlt?.addEventListener('click', () => {
    navigator.clipboard.writeText(els.altText.textContent);
    showToast('Alt text copied to clipboard');
  });
}

async function setFile(file) {
  if (!file.type.startsWith('image/')) { showToast('Please select an image'); return; }
  state.file = file;
  const url = URL.createObjectURL(file);
  els.preview.src = url;
  els.previewWrap.classList.remove('hidden');
  els.altResult?.classList.add('hidden');
  els.classifyResult?.classList.add('hidden');
  document.getElementById('ai-actions').classList.remove('hidden');
}

async function generateAltText() {
  if (!state.file) return;
  setLoading(els.altBtn, true);

  try {
    const formData = new FormData();
    formData.append('image', state.file);
    formData.append('action', 'alttext');

    const res = await fetch('/api/ai', { method: 'POST', body: formData });

    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();

    els.altResult.classList.remove('hidden');
    els.altText.textContent = data.result || 'Could not generate alt text.';
  } catch (err) {
    showToast('AI service unavailable. Please deploy to Cloudflare to use AI features.');
    els.altResult.classList.remove('hidden');
    els.altText.textContent = '[Deploy to Cloudflare to enable AI features]';
  } finally {
    setLoading(els.altBtn, false);
  }
}

async function classifyImage() {
  if (!state.file) return;
  setLoading(els.classifyBtn, true);

  try {
    const formData = new FormData();
    formData.append('image', state.file);
    formData.append('action', 'classify');

    const res = await fetch('/api/ai', { method: 'POST', body: formData });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();

    els.classifyResult.classList.remove('hidden');
    const tags = Array.isArray(data.result) ? data.result.slice(0, 8) : [];
    els.classifyTags.innerHTML = tags.map(t =>
      `<span class="ai-tag">${t.label} <small style="opacity:0.6">${Math.round(t.score * 100)}%</small></span>`
    ).join('');
  } catch (err) {
    showToast('AI service unavailable. Please deploy to Cloudflare to use AI features.');
  } finally {
    setLoading(els.classifyBtn, false);
  }
}

function setLoading(btn, loading) {
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? '<span class="spin">⟳</span> Analyzing...'
    : btn.dataset.label || btn.textContent;
  if (!loading && btn.dataset.label) btn.innerHTML = btn.dataset.label;
}

document.addEventListener('DOMContentLoaded', init);
