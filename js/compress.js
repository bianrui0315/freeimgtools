import { formatBytes, savingsPercent, showToast, initDragDrop, fileToImage,
         downloadBlob, downloadZip, getMimeType, getExtension, stripExtension,
         blobToDataURL } from './shared.js';

const state = {
  files: [],
  results: [],
  processing: false,
};

const pageConfig = {
  targetBytes: Number(document.body?.dataset.compressTargetKb || 0) * 1024,
  defaultFormat: document.body?.dataset.defaultFormat,
  defaultQuality: document.body?.dataset.defaultQuality,
};

const els = {
  zone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  qualitySlider: document.getElementById('quality'),
  qualityVal: document.getElementById('quality-val'),
  formatSelect: document.getElementById('format'),
  stripExifToggle: document.getElementById('strip-exif'),
  processBtn: document.getElementById('process-btn'),
  clearBtn: document.getElementById('clear-btn'),
  resultsSection: document.getElementById('results-section'),
  resultsGrid: document.getElementById('results-grid'),
  bulkBar: document.getElementById('bulk-bar'),
  bulkCount: document.getElementById('bulk-count'),
  downloadAllBtn: document.getElementById('download-all'),
  fileQueue: document.getElementById('file-queue'),
  queueCount: document.getElementById('queue-count'),
  compareSection: document.getElementById('compare-section'),
};

function init() {
  applyPageDefaults();
  initDragDrop(els.zone, addFiles);
  els.fileInput.addEventListener('change', (e) => addFiles([...e.target.files]));

  els.qualitySlider.addEventListener('input', () => {
    els.qualityVal.textContent = els.qualitySlider.value;
  });

  els.processBtn.addEventListener('click', processAll);
  els.clearBtn?.addEventListener('click', clearAll);
  els.downloadAllBtn?.addEventListener('click', downloadAll);
}

function applyPageDefaults() {
  if (pageConfig.defaultFormat && els.formatSelect) {
    els.formatSelect.value = pageConfig.defaultFormat;
  }
  if (pageConfig.defaultQuality && els.qualitySlider) {
    els.qualitySlider.value = pageConfig.defaultQuality;
    els.qualityVal.textContent = pageConfig.defaultQuality;
  }
  if (pageConfig.targetBytes && els.processBtn) {
    els.processBtn.textContent = `Compress to ${formatBytes(pageConfig.targetBytes)}`;
    const panel = document.querySelector('.settings-panel');
    panel?.insertAdjacentHTML('beforeend', `
      <div style="margin-top:1rem;background:var(--primary-light);border-radius:var(--radius);padding:1rem;">
        <p style="font-size:0.78rem;color:var(--primary);line-height:1.6;">
          <strong>Target mode:</strong> This page automatically tests quality settings and keeps the highest-quality result under ${formatBytes(pageConfig.targetBytes)} when possible.
        </p>
      </div>
    `);
  }
}

function addFiles(files) {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif', 'image/bmp'];
  const valid = files.filter(f => validTypes.includes(f.type));
  if (!valid.length) { showToast('Please select image files'); return; }

  state.files.push(...valid);
  renderQueue();
  els.processBtn.disabled = false;
  els.resultsSection.classList.add('hidden');
}

function renderQueue() {
  if (!state.files.length) {
    els.fileQueue.classList.add('hidden');
    return;
  }
  els.fileQueue.classList.remove('hidden');
  els.queueCount.textContent = `${state.files.length} file${state.files.length > 1 ? 's' : ''} selected`;

  const list = document.getElementById('queue-list');
  list.innerHTML = state.files.map((f, i) => `
    <div class="result-item" style="padding:0.75rem 1rem;">
      <div class="result-info">
        <div class="result-name">${f.name}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${formatBytes(f.size)}</div>
      </div>
      <button onclick="removeFile(${i})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:1.1rem;padding:0.25rem;">×</button>
    </div>
  `).join('');
}

window.removeFile = (i) => {
  state.files.splice(i, 1);
  renderQueue();
  if (!state.files.length) els.processBtn.disabled = true;
};

async function processAll() {
  if (!state.files.length || state.processing) return;
  state.processing = true;
  state.results = [];

  const quality = parseInt(els.qualitySlider.value) / 100;
  const format = els.formatSelect.value;
  const mimeType = format === 'original' ? null : getMimeType(format);
  const strip = els.stripExifToggle?.checked;

  els.processBtn.disabled = true;
  els.processBtn.innerHTML = '<span class="spin">⟳</span> Processing...';
  els.resultsSection.classList.remove('hidden');
  els.resultsGrid.innerHTML = '';

  for (let i = 0; i < state.files.length; i++) {
    const file = state.files[i];
    const result = await compressFile(file, quality, mimeType || file.type, strip, pageConfig.targetBytes);
    state.results.push(result);
    renderResult(result, i);
  }

  updateBulkBar();
  els.processBtn.disabled = false;
  els.processBtn.innerHTML = pageConfig.targetBytes ? `✓ Compressed to ${formatBytes(pageConfig.targetBytes)}` : '✓ Process Images';
  state.processing = false;

  if (state.files.length === 1) renderCompare(state.files[0], state.results[0]);
}

async function compressFile(file, quality, targetMime, stripExifData, targetBytes = 0) {
  const img = await fileToImage(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');

  // White background for JPEG to handle transparency
  if (targetMime === 'image/jpeg') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);

  const { blob, qualityUsed, hitTarget } = targetBytes
    ? await compressToTarget(canvas, targetMime, targetBytes, quality)
    : { blob: await canvasToBlob(canvas, targetMime, quality), qualityUsed: quality, hitTarget: null };
  const ext = getExtension(targetMime);
  const outputName = stripExtension(file.name) + '.' + ext;
  const thumb = await blobToDataURL(blob);

  return { file, blob, outputName, originalSize: file.size, compressedSize: blob.size, thumb, ext, qualityUsed, hitTarget, targetBytes };
}

function canvasToBlob(canvas, targetMime, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error(`${targetMime} output is not supported by this browser`));
    }, targetMime, quality);
  });
}

async function compressToTarget(canvas, targetMime, targetBytes, maxQuality) {
  let low = 0.1;
  let high = Math.max(0.1, Math.min(1, maxQuality));
  let best = null;
  let smallest = null;

  for (let i = 0; i < 9; i++) {
    const quality = (low + high) / 2;
    const blob = await canvasToBlob(canvas, targetMime, quality);

    if (!smallest || blob.size < smallest.blob.size) {
      smallest = { blob, quality };
    }

    if (blob.size <= targetBytes) {
      best = { blob, quality };
      low = quality + 0.01;
    } else {
      high = quality - 0.01;
    }
  }

  const picked = best || smallest;
  return {
    blob: picked.blob,
    qualityUsed: picked.quality,
    hitTarget: picked.blob.size <= targetBytes,
  };
}

function renderResult(result, index) {
  const saved = savingsPercent(result.originalSize, result.compressedSize);
  const increased = result.compressedSize > result.originalSize;

  const div = document.createElement('div');
  div.className = 'result-item';
  div.innerHTML = `
    <img src="${result.thumb}" class="result-thumb" alt="preview">
    <div class="result-info">
      <div class="result-name">${result.outputName}</div>
      <div class="result-meta">
        <span class="size-badge original">${formatBytes(result.originalSize)}</span>
        <span>→</span>
        <span class="size-badge ${increased ? '' : 'saved'}">
          ${formatBytes(result.compressedSize)}
          ${!increased ? `(−${saved}%)` : `(+${Math.abs(saved)}%)`}
        </span>
      </div>
      ${result.targetBytes ? `<div style="font-size:0.75rem;color:${result.hitTarget ? 'var(--success)' : '#dc2626'};margin-top:0.25rem;">${result.hitTarget ? `Under ${formatBytes(result.targetBytes)}` : `Smallest result is still above ${formatBytes(result.targetBytes)}`} · quality ${Math.round(result.qualityUsed * 100)}</div>` : ''}
    </div>
    <button class="btn btn-secondary" style="flex-shrink:0;padding:0.45rem 0.85rem;font-size:0.8rem;"
      onclick="window._downloadOne(${index})">↓ Download</button>
  `;
  els.resultsGrid.appendChild(div);
}

window._downloadOne = (i) => {
  const r = state.results[i];
  downloadBlob(r.blob, r.outputName);
};

function updateBulkBar() {
  if (state.results.length > 1) {
    els.bulkBar?.classList.remove('hidden');
    if (els.bulkCount) {
      const totalSaved = state.results.reduce((acc, r) => acc + (r.originalSize - r.compressedSize), 0);
      els.bulkCount.textContent = `${state.results.length} files processed · ${formatBytes(Math.max(0, totalSaved))} total saved`;
    }
  }
}

async function downloadAll() {
  const items = state.results.map(r => ({ blob: r.blob, filename: r.outputName }));
  await downloadZip(items);
}

async function renderCompare(original, result) {
  if (!els.compareSection) return;
  els.compareSection.classList.remove('hidden');
  const origURL = URL.createObjectURL(original);
  document.getElementById('compare-before').src = origURL;
  document.getElementById('compare-after-img').src = result.thumb;

  const wrap = document.getElementById('compare-wrap');
  const afterDiv = document.getElementById('compare-after');
  const divider = document.getElementById('compare-divider');
  let dragging = false;

  function setPos(x) {
    const rect = wrap.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((x - rect.left) / rect.width) * 100));
    afterDiv.style.width = pct + '%';
    divider.style.left = pct + '%';
  }

  wrap.addEventListener('mousedown', (e) => { dragging = true; setPos(e.clientX); });
  wrap.addEventListener('touchstart', (e) => { dragging = true; setPos(e.touches[0].clientX); });
  window.addEventListener('mousemove', (e) => { if (dragging) setPos(e.clientX); });
  window.addEventListener('touchmove', (e) => { if (dragging) setPos(e.touches[0].clientX); });
  window.addEventListener('mouseup', () => dragging = false);
  window.addEventListener('touchend', () => dragging = false);
}

function clearAll() {
  state.files = [];
  state.results = [];
  renderQueue();
  els.resultsSection.classList.add('hidden');
  els.compareSection?.classList.add('hidden');
  els.bulkBar?.classList.add('hidden');
  els.processBtn.disabled = true;
  els.processBtn.innerHTML = pageConfig.targetBytes ? `Compress to ${formatBytes(pageConfig.targetBytes)}` : 'Compress Images';
  els.fileInput.value = '';
}

document.addEventListener('DOMContentLoaded', init);
