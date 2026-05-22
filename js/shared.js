// Shared utilities across all tool pages

export function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export function savingsPercent(original, compressed) {
  if (!original || original === 0) return 0;
  return Math.round(((original - compressed) / original) * 100);
}

export function showToast(message, duration = 2500) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

export function initDragDrop(zone, onFiles) {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const files = [...e.dataTransfer.files].filter(f => f.type.startsWith('image/'));
    if (files.length) onFiles(files);
  });
}

export function blobToDataURL(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(blob);
  });
}

export function fileToImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function createThumbURL(file) {
  return URL.createObjectURL(file);
}

export async function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function downloadZip(items) {
  // items: [{blob, filename}]
  // Use JSZip if available, otherwise fall back to sequential downloads
  if (window.JSZip) {
    const zip = new JSZip();
    items.forEach(({ blob, filename }) => zip.file(filename, blob));
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    await downloadBlob(zipBlob, 'imageflow-export.zip');
  } else {
    for (const { blob, filename } of items) {
      await downloadBlob(blob, filename);
      await new Promise(r => setTimeout(r, 200));
    }
  }
}

export function getMimeType(format) {
  const map = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    avif: 'image/avif',
  };
  return map[format.toLowerCase()] || 'image/jpeg';
}

export function getExtension(mimeType) {
  const map = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/avif': 'avif',
  };
  return map[mimeType] || 'jpg';
}

export function stripExtension(filename) {
  return filename.replace(/\.[^.]+$/, '');
}

// Strip EXIF from JPEG by removing APP1 segment — privacy feature
export async function stripExif(arrayBuffer) {
  const data = new Uint8Array(arrayBuffer);
  // If not JPEG, return as-is
  if (data[0] !== 0xFF || data[1] !== 0xD8) return arrayBuffer;

  const result = [0xFF, 0xD8];
  let i = 2;
  while (i < data.length) {
    if (data[i] !== 0xFF) break;
    const marker = data[i + 1];
    const segLen = (data[i + 2] << 8) | data[i + 3];
    // Skip APP1 (0xE1) which contains EXIF
    if (marker !== 0xE1) {
      result.push(...data.slice(i, i + 2 + segLen));
    }
    i += 2 + segLen;
  }
  return new Uint8Array(result).buffer;
}
