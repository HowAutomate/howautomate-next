const fs = require('fs');

let raw;
try {
  raw = fs.readFileSync('./psi.json', 'utf8');
} catch {
  console.log('> ⚠️ psi.json not found');
  process.exit(0);
}

let d;
try {
  d = JSON.parse(raw);
} catch {
  console.log('> ⚠️ Could not parse PageSpeed response');
  process.exit(0);
}

const cats   = d.lighthouseResult?.categories || {};
const audits = d.lighthouseResult?.audits     || {};

if (!cats.performance) {
  console.log('> ⚠️ No performance data in response');
  process.exit(0);
}

const perf   = Math.round((cats.performance.score || 0) * 100);
const rating = s => s >= 0.9 ? '🟢 Good' : s >= 0.5 ? '🟡 Needs Work' : '🔴 Poor';

console.log('| Metric | Value | Rating |');
console.log('|---|---|---|');
console.log(`| Performance Score | **${perf}/100** | ${rating(cats.performance.score || 0)} |`);

['largest-contentful-paint', 'cumulative-layout-shift', 'first-contentful-paint', 'total-blocking-time'].forEach(k => {
  const a = audits[k];
  if (a) console.log(`| ${a.title} | ${a.displayValue} | ${rating(a.score || 0)} |`);
});

const opps = Object.values(audits)
  .filter(a => a.details?.type === 'opportunity' && (a.score || 1) < 0.9)
  .sort((a, b) => (b.details?.overallSavingsMs || 0) - (a.details?.overallSavingsMs || 0))
  .slice(0, 3);

if (opps.length > 0) {
  console.log('');
  console.log('**Top Opportunities:**');
  opps.forEach(o => console.log(`- ${o.title}: ~${Math.round(o.details?.overallSavingsMs || 0)}ms savings`));
}
