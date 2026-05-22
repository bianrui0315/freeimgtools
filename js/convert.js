import { formatBytes, showToast, initDragDrop, fileToImage,
         downloadBlob, downloadZip, getMimeType, getExtension,
         stripExtension, blobToDataURL } from './shared.js';

const state = { files: [], results: [] };

const els = {
  zone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  targetFormat: document.getElementById('target-format'),
  qualitySlider: document.getElementById('quality'),
  qualityVal: document.getElementById('quality-val'),
  processBtn: document.getElementById('process-btn'),
  resultsSection: document.getElementById('results-section'),
  resultsGrid: document.getElementById('results-grid'),
  bulkBar: document.getElementById('bulk-bar'),
  bulkCount: document.getElementById('bulk-count'),
  downloadAllBtn: document.getElementById('download-all'),
  fileQueue: document.getElementById('file-queue'),
  queueCount: document.getElementById('queue-count'),
};

function init() {
  initDragDrop(els.zone, addFiles);
  els.fileInput.addEventListener('change', e => addFiles([...e.target.files]));

  els.qualitySlider?.addEventListener('input', () => {
    els.qualityVal.textContent = els.qualitySlider.value;
  });

  // Show/hide quality for lossless formats
  els.targetFormat?.addEventListener('change', () => {
    const lossless = ['png', 'avif-lossless'];
    const wrap = document.getElementById('quality-wrap');
    if (wrap) wrap.classList.toggle('hidden', lossless.includes(els.targetFormat.value));
  });

  els.processBtn.addEventListener('click', processAll);
  els.downloadAllBtn?.addEventListener('click', downloadAll);

  // Pre-select format from URL query if present (for deep-link pages like /png-to-jpg/)
  const params = new URLSearchParams(location.search);
  if (params.get('from') && params.get('to') && els.targetFormat) {
    els.targetFormat.value = params.get('to');
  }
}

function addFiles(files) {
  const valid = files.filter(f => f.type.startsWith('image/'));
  if (!valid.length) { showToast('Please select image files'); return; }
  state.files.push(...valid);
  renderQueue();
  els.processBtn.disabled = false;
}

function renderQueue() {
  if (!state.files.length) { els.fileQueue.classList.add('hidden'); return; }
  els.fileQueue.classList.remove('hidden');
  els.queueCount.textContent = `${state.files.length} file${state.files.length > 1 ? 's' : ''} ready`;
  const list = document.getElementById('queue-list');
  list.innerHTML = state.files.map((f, i) => `
    <div class="result-item" style="padding:0.75rem 1rem;">
      <div class="result-info">
        <div class="result-name">${f.name}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${formatBytes(f.size)} · ${f.type.split('/')[1].toUpperCase()}</div>
      </div>
      <button onclick="removeFile(${i})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:1.1rem;">×</button>
    </div>
  `).join('');
}

window.removeFile = i => {
  state.files.splice(i, 1);
  renderQueue();
  if (!state.files.length) els.processBtn.disabled = true;
};

async function processAll() {
  if (!state.files.length) return;
  state.results = [];

  const format = els.targetFormat.value;
  const mimeType = getMimeType(format);
  const quality = parseInt(els.qualitySlider?.value ?? 90) / 100;

  els.processBtn.disabled = true;
  els.processBtn.innerHTML = '<span class="spin">⟳</span> Converting...';
  els.resultsSection.classList.remove('hidden');
  els.resultsGrid.innerHTML = '';

  for (let i = 0; i < state.files.length; i++) {
    const file = state.files[i];
    const result = await convertFile(file, mimeType, format, quality);
    state.results.push(result);
    renderResult(result, i);
  }

  if (state.results.length > 1) {
    els.bulkBar.classList.remove('hidden');
    els.bulkCount.textContent = `${state.results.length} files converted`;
  }

  els.processBtn.disabled = false;
  els.processBtn.innerHTML = '↺ Convert More';
}

async function convertFile(file, targetMime, ext, quality) {
  const img = await fileToImage(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');

  if (targetMime === 'image/jpeg') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);

  const blob = await new Promise(r => canvas.toBlob(r, targetMime, quality));
  const outputName = stripExtension(file.name) + '.' + getExtension(targetMime);
  const thumb = await blobToDataURL(blob);

  return { file, blob, outputName, originalSize: file.size, convertedSize: blob.size, thumb };
}

function renderResult(result, index) {
  const div = document.createElement('div');
  div.className = 'result-item';
  const origExt = result.file.name.split('.').pop().toUpperCase();
  const newExt = result.outputName.split('.').pop().toUpperCase();
  div.innerHTML = `
    <img src="${result.thumb}" class="result-thumb" alt="converted">
    <div class="result-info">
      <div class="result-name">${result.outputName}</div>
      <div class="result-meta">
        <span style="background:var(--bg);border:1px solid var(--border);border-radius:99px;padding:0.15rem 0.5rem;font-size:0.75rem;font-weight:600;color:var(--text-muted);">${origExt}</span>
        <span>→</span>
        <span style="background:var(--primary-light);border:1px solid #c7d2fe;border-radius:99px;padding:0.15rem 0.5rem;font-size:0.75rem;font-weight:600;color:var(--primary);">${newExt}</span>
        <span style="color:var(--text-muted)">${formatBytes(result.convertedSize)}</span>
      </div>
    </div>
    <button class="btn btn-secondary" style="flex-shrink:0;padding:0.45rem 0.85rem;font-size:0.8rem;"
      onclick="window._dl(${index})">↓ Download</button>
  `;
  els.resultsGrid.appendChild(div);
}

window._dl = i => downloadBlob(state.results[i].blob, state.results[i].outputName);

async function downloadAll() {
  await downloadZip(state.results.map(r => ({ blob: r.blob, filename: r.outputName })));
}

document.addEventListener('DOMContentLoaded', init);
