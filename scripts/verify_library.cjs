const fs = require('fs');
const path = require('path');

const tsContent = fs.readFileSync('src/data/problems.ts', 'utf8');
const eqBracket = tsContent.indexOf('= [');
const jsonStart = eqBracket + 2;
const jsonEnd = tsContent.lastIndexOf(']');
const problems = JSON.parse(tsContent.slice(jsonStart, jsonEnd + 1));

console.log('Total problems in problems.ts:', problems.length);

const problemNumbers = new Map();
for (const p of problems) {
  problemNumbers.set(p.number, p.title);
}

let emptyRelated = 0;
let brokenLinks = 0;
let missingVisualizers = 0;
let missingDates = 0;

for (const p of problems) {
  if (!p.addedDate) {
    console.error(`Problem #${p.number} (${p.title}) has no addedDate!`);
    missingDates++;
  }
  if (!p.relatedProblems || p.relatedProblems.length === 0) {
    console.error(`Problem #${p.number} (${p.title}) has NO related problems!`);
    emptyRelated++;
  } else {
    for (const r of p.relatedProblems) {
      if (!problemNumbers.has(r.number)) {
        console.error(`Problem #${p.number} points to non-existent problem #${r.number} (${r.title})`);
        brokenLinks++;
      }
    }
  }

  // Check visualizer file
  if (!p.visualizerUrl) {
    console.error(`Problem #${p.number} (${p.title}) has no visualizerUrl!`);
    missingVisualizers++;
  } else {
    const vizPath = path.join(__dirname, '..', 'public', p.visualizerUrl);
    if (!fs.existsSync(vizPath)) {
      console.error(`Problem #${p.number} (${p.title}) visualizer missing: ${vizPath}`);
      missingVisualizers++;
    }
  }
}

console.log('=== VERIFICATION SUMMARY ===');
console.log('Total Problems:', problems.length);
console.log('Empty related lists:', emptyRelated);
console.log('Broken related links:', brokenLinks);
console.log('Missing visualizers:', missingVisualizers);
console.log('Missing added dates:', missingDates);

if (emptyRelated === 0 && brokenLinks === 0 && missingVisualizers === 0 && missingDates === 0) {
  console.log('ALL VERIFICATIONS PASSED PERFECTLY!');
} else {
  console.error('VERIFICATION FAILED!');
  process.exit(1);
}
