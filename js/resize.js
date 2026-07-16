import { formatBytes, showToast, initDragDrop, fileToImage,
         downloadBlob, downloadZip, getExtension, stripExtension, blobToDataURL } from './shared.js';

const PRESETS = {
  custom: null,
  'web-full': { w: 1920, h: 1080, label: 'Full HD (1920×1080)' },
  'web-hd': { w: 1280, h: 720, label: 'HD (1280×720)' },
  'thumb': { w: 300, h: 300, label: 'Thumbnail (300×300)' },
  'yt-community-square': { w: 1600, h: 1600, label: 'YouTube Community Square (1600×1600)' },
  'yt-thumbnail': { w: 1280, h: 720, label: 'YouTube Thumbnail (1280×720)' },
  'yt-banner': { w: 2560, h: 1440, label: 'YouTube Banner (2560×1440)' },
  'ig-square': { w: 1080, h: 1080, label: 'Instagram Square' },
  'ig-portrait': { w: 1080, h: 1350, label: 'Instagram Portrait' },
  'ig-story': { w: 1080, h: 1920, label: 'Instagram Story' },
  'instagram-profile': { w: 320, h: 320, label: 'Instagram Profile Picture (320×320)' },
  'tiktok-profile': { w: 200, h: 200, label: 'TikTok Profile Picture (200×200)' },
  'discord-emoji': { w: 128, h: 128, label: 'Discord Emoji (128×128)' },
  'twitter': { w: 1200, h: 675, label: 'Twitter/X Card' },
  'og': { w: 1200, h: 630, label: 'Open Graph / Facebook' },
  'linkedin': { w: 1200, h: 627, label: 'LinkedIn Post' },
  'linkedin-banner': { w: 1584, h: 396, label: 'LinkedIn Banner (1584×396)' },
  'passport-square': { w: 600, h: 600, label: 'Passport Photo (600×600)' },
};

const state = { files: [], results: [] };

const els = {
  zone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  presetSelect: document.getElementById('preset'),
  widthInput: document.getElementById('width'),
  heightInput: document.getElementById('height'),
  lockAspect: document.getElementById('lock-aspect'),
  fitMode: document.getElementById('fit-mode'),
  processBtn: document.getElementById('process-btn'),
  resultsSection: document.getElementById('results-section'),
  resultsGrid: document.getElementById('results-grid'),
  bulkBar: document.getElementById('bulk-bar'),
  downloadAllBtn: document.getElementById('download-all'),
  fileQueue: document.getElementById('file-queue'),
  queueCount: document.getElementById('queue-count'),
};

let aspectRatio = null;

function init() {
  initDragDrop(els.zone, addFiles);
  els.fileInput.addEventListener('change', e => addFiles([...e.target.files]));

  els.presetSelect?.addEventListener('change', () => {
    const p = PRESETS[els.presetSelect.value];
    if (p) {
      els.widthInput.value = p.w;
      els.heightInput.value = p.h;
    }
  });

  els.widthInput?.addEventListener('input', () => {
    if (els.lockAspect?.checked && aspectRatio && els.widthInput.value) {
      els.heightInput.value = Math.round(parseInt(els.widthInput.value) / aspectRatio);
    }
  });
  els.heightInput?.addEventListener('input', () => {
    if (els.lockAspect?.checked && aspectRatio && els.heightInput.value) {
      els.widthInput.value = Math.round(parseInt(els.heightInput.value) * aspectRatio);
    }
  });

  els.processBtn.addEventListener('click', processAll);
  els.downloadAllBtn?.addEventListener('click', downloadAll);
}

function addFiles(files) {
  const valid = files.filter(f => f.type.startsWith('image/'));
  if (!valid.length) { showToast('Please select image files'); return; }

  // Set aspect ratio from first image
  if (valid.length === 1 || !state.files.length) {
    fileToImage(valid[0]).then(img => {
      aspectRatio = img.naturalWidth / img.naturalHeight;
      if (!els.widthInput.value) els.widthInput.value = img.naturalWidth;
      if (!els.heightInput.value) els.heightInput.value = img.naturalHeight;
    });
  }

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
        <div style="font-size:0.78rem;color:var(--text-muted)">${formatBytes(f.size)}</div>
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

  const targetW = parseInt(els.widthInput?.value) || 0;
  const targetH = parseInt(els.heightInput?.value) || 0;
  const fit = els.fitMode?.value || 'contain';

  if (!targetW && !targetH) { showToast('Enter at least one dimension'); return; }

  els.processBtn.disabled = true;
  els.processBtn.innerHTML = '<span class="spin">⟳</span> Resizing...';
  els.resultsSection.classList.remove('hidden');
  els.resultsGrid.innerHTML = '';

  for (let i = 0; i < state.files.length; i++) {
    const result = await resizeFile(state.files[i], targetW, targetH, fit);
    state.results.push(result);
    renderResult(result, i);
  }

  if (state.results.length > 1) els.bulkBar.classList.remove('hidden');
  els.processBtn.disabled = false;
  els.processBtn.innerHTML = '↺ Resize More';
}

async function resizeFile(file, targetW, targetH, fit) {
  const img = await fileToImage(file);
  const origW = img.naturalWidth;
  const origH = img.naturalHeight;
  const ratio = origW / origH;

  let w = targetW;
  let h = targetH;

  if (!w) w = Math.round(h * ratio);
  if (!h) h = Math.round(w / ratio);

  if (fit === 'contain') {
    if (targetW && targetH) {
      if (w / ratio > h) { w = Math.round(h * ratio); }
      else { h = Math.round(w / ratio); }
    }
  }
  // For 'cover' and 'exact', use w/h as-is

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  if (fit === 'cover' && targetW && targetH) {
    const scale = Math.max(w / origW, h / origH);
    const sw = w / scale;
    const sh = h / scale;
    const sx = (origW - sw) / 2;
    const sy = (origH - sh) / 2;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
  } else {
    ctx.drawImage(img, 0, 0, w, h);
  }

  const mime = file.type || 'image/jpeg';
  const blob = await new Promise(r => canvas.toBlob(r, mime, 0.92));
  const ext = getExtension(mime);
  const outputName = stripExtension(file.name) + `_${w}x${h}.` + ext;
  const thumb = await blobToDataURL(blob);

  return { file, blob, outputName, originalSize: file.size, newSize: blob.size,
           origW, origH, newW: w, newH: h, thumb };
}

function renderResult(result, index) {
  const div = document.createElement('div');
  div.className = 'result-item';
  div.innerHTML = `
    <img src="${result.thumb}" class="result-thumb" alt="resized">
    <div class="result-info">
      <div class="result-name">${result.outputName}</div>
      <div class="result-meta">
        <span style="color:var(--text-muted);font-size:0.8rem;">${result.origW}×${result.origH}</span>
        <span>→</span>
        <span style="font-weight:600;font-size:0.8rem;color:var(--primary)">${result.newW}×${result.newH}</span>
        <span style="color:var(--text-muted);font-size:0.78rem;">${formatBytes(result.newSize)}</span>
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
