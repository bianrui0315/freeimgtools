import {
  formatBytes,
  showToast,
  initDragDrop,
  fileToImage,
  downloadBlob,
  stripExtension,
  blobToDataURL,
} from './shared.js';

const state = {
  files: [],
  gifBlob: null,
  outputName: 'freeimgtools-animation.gif',
};

const els = {
  zone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  fileQueue: document.getElementById('file-queue'),
  queueCount: document.getElementById('queue-count'),
  queueList: document.getElementById('queue-list'),
  delay: document.getElementById('delay'),
  width: document.getElementById('width'),
  height: document.getElementById('height'),
  fitMode: document.getElementById('fit-mode'),
  quality: document.getElementById('quality'),
  qualityVal: document.getElementById('quality-val'),
  processBtn: document.getElementById('process-btn'),
  resultSection: document.getElementById('result-section'),
  resultPreview: document.getElementById('result-preview'),
  resultMeta: document.getElementById('result-meta'),
  downloadBtn: document.getElementById('download-btn'),
  clearBtn: document.getElementById('clear-btn'),
};

function init() {
  initDragDrop(els.zone, addFiles);
  els.fileInput.addEventListener('change', (event) => addFiles([...event.target.files]));
  els.quality.addEventListener('input', () => {
    els.qualityVal.textContent = els.quality.value;
  });
  els.processBtn.addEventListener('click', createGif);
  els.downloadBtn.addEventListener('click', () => {
    if (state.gifBlob) downloadBlob(state.gifBlob, state.outputName);
  });
  els.clearBtn?.addEventListener('click', clearAll);
}

function addFiles(files) {
  const valid = files.filter((file) => file.type.startsWith('image/'));
  if (!valid.length) {
    showToast('Please select image files');
    return;
  }

  const wasEmpty = state.files.length === 0;
  state.files.push(...valid);
  renderQueue();
  els.processBtn.disabled = state.files.length < 2;
  els.resultSection.classList.add('hidden');

  if (wasEmpty) {
    fileToImage(valid[0]).then((img) => {
      if (!els.width.value) els.width.value = Math.min(img.naturalWidth, 640);
      if (!els.height.value) {
        const ratio = img.naturalHeight / img.naturalWidth;
        els.height.value = Math.round(Number(els.width.value) * ratio);
      }
    }).catch(() => {});
  }
}

function renderQueue() {
  if (!state.files.length) {
    els.fileQueue.classList.add('hidden');
    return;
  }

  els.fileQueue.classList.remove('hidden');
  els.queueCount.textContent = `${state.files.length} frame${state.files.length > 1 ? 's' : ''} ready`;
  els.queueList.innerHTML = state.files.map((file, index) => `
    <div class="result-item" style="padding:0.75rem 1rem;">
      <div class="result-info">
        <div class="result-name">${file.name}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${formatBytes(file.size)}</div>
      </div>
      <button onclick="removeGifFrame(${index})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:1.1rem;padding:0.25rem;" aria-label="Remove frame">x</button>
    </div>
  `).join('');
}

window.removeGifFrame = (index) => {
  state.files.splice(index, 1);
  renderQueue();
  els.processBtn.disabled = state.files.length < 2;
};

async function createGif() {
  if (state.files.length < 2) {
    showToast('Add at least two images to make an animated GIF');
    return;
  }

  if (!window.GIF) {
    showToast('GIF library is still loading. Please try again in a moment.');
    return;
  }

  const width = clampNumber(els.width.value, 16, 2400, 640);
  const height = clampNumber(els.height.value, 16, 2400, 360);
  const delay = clampNumber(els.delay.value, 40, 10000, 500);
  const quality = clampNumber(els.quality.value, 1, 30, 10);
  const fit = els.fitMode.value;

  els.processBtn.disabled = true;
  els.processBtn.textContent = 'Preparing frames...';
  els.resultSection.classList.add('hidden');

  try {
    const gif = new window.GIF({
      workers: 2,
      quality,
      width,
      height,
      workerScript: 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js',
    });

    for (const file of state.files) {
      const img = await fileToImage(file);
      const canvas = renderFrame(img, width, height, fit);
      gif.addFrame(canvas, { delay, copy: true });
    }

    gif.on('progress', (progress) => {
      els.processBtn.textContent = `Creating GIF ${Math.round(progress * 100)}%`;
    });

    gif.on('finished', async (blob) => {
      state.gifBlob = blob;
      state.outputName = `${stripExtension(state.files[0].name)}-animation.gif`;
      els.resultPreview.src = await blobToDataURL(blob);
      els.resultMeta.textContent = `${state.files.length} frames · ${width}x${height}px · ${formatBytes(blob.size)}`;
      els.resultSection.classList.remove('hidden');
      els.processBtn.disabled = false;
      els.processBtn.textContent = 'Create GIF';
    });

    gif.render();
  } catch (error) {
    console.error(error);
    showToast('Could not create GIF. Try smaller dimensions or fewer frames.');
    els.processBtn.disabled = false;
    els.processBtn.textContent = 'Create GIF';
  }
}

function renderFrame(img, width, height, fit) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  if (fit === 'exact') {
    ctx.drawImage(img, 0, 0, width, height);
    return canvas;
  }

  const imageRatio = img.naturalWidth / img.naturalHeight;
  const targetRatio = width / height;
  const cover = fit === 'cover';
  const scaleByWidth = cover ? imageRatio < targetRatio : imageRatio > targetRatio;
  const drawW = scaleByWidth ? width : Math.round(height * imageRatio);
  const drawH = scaleByWidth ? Math.round(width / imageRatio) : height;
  const dx = Math.round((width - drawW) / 2);
  const dy = Math.round((height - drawH) / 2);

  ctx.drawImage(img, dx, dy, drawW, drawH);
  return canvas;
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function clearAll() {
  state.files = [];
  state.gifBlob = null;
  els.fileInput.value = '';
  els.resultSection.classList.add('hidden');
  els.processBtn.disabled = true;
  renderQueue();
}

document.addEventListener('DOMContentLoaded', init);
