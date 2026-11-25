const fs = require('fs');
const path = require('path');

// Crisp dark-badge SVG favicon with glowing cyan-to-indigo algorithm compass/graph icon
// Works both over http://localhost and when opened directly via file://
const ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#060913"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#22d3ee"/><stop offset="55%" stop-color="#6366f1"/><stop offset="100%" stop-color="#a855f7"/></linearGradient></defs><rect x="2" y="2" width="60" height="60" rx="16" fill="url(#bg)" stroke="url(#g)" stroke-width="3.5"/><path d="M20 42 L32 18 L44 42" fill="none" stroke="url(#g)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><line x1="20" y1="42" x2="44" y2="42" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" opacity="0.55"/><circle cx="32" cy="18" r="5.5" fill="#22d3ee"/><circle cx="20" cy="42" r="5.5" fill="#6366f1"/><circle cx="44" cy="42" r="5.5" fill="#a855f7"/></svg>`;

const DATA_URI = `data:image/svg+xml,${encodeURIComponent(ICON_SVG)}`;
const FAVICON_TAG = `<link rel="icon" type="image/svg+xml" href="${DATA_URI}" />`;

function upsertFavicon(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const existingIconRegex = /<link\s+[^>]*rel=["'](?:shortcut\s+)?icon["'][^>]*>\s*/gi;

  if (existingIconRegex.test(content)) {
    content = content.replace(existingIconRegex, '');
  }

  if (/<\/title>/i.test(content)) {
    content = content.replace(/<\/title>/i, `</title>\n  ${FAVICON_TAG}`);
  } else if (/<\/head>/i.test(content)) {
    content = content.replace(/<\/head>/i, `  ${FAVICON_TAG}\n</head>`);
  } else {
    return false;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

const rootDir = path.join(__dirname, '..');
const visualizersDir = path.join(rootDir, 'public', 'visualizers');
const files = fs.readdirSync(visualizersDir).filter((f) => f.endsWith('.html'));

let updated = 0;
for (const file of files) {
  if (upsertFavicon(path.join(visualizersDir, file))) {
    updated++;
  }
}

const indexUpdated = upsertFavicon(path.join(rootDir, 'index.html'));
console.log(`Updated favicons: ${updated}/${files.length} visualizers, index.html=${indexUpdated}`);
