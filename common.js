// Shared helpers used by index.html and story.html. Load after data.js.

const pad2 = n => String(n).padStart(2, '0');
const parseDate = d => new Date(d + 'T00:00:00');
const dotDate = d => { const x = parseDate(d); return `${pad2(x.getDate())}.${pad2(x.getMonth() + 1)}.${x.getFullYear()}`; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthYear = d => { const x = parseDate(d); return `${MONTHS[x.getMonth()]} ${x.getFullYear()}`; };
const longDate  = d => { const x = parseDate(d); return `${x.getDate()} ${MONTHS[x.getMonth()]} ${x.getFullYear()}`; };

// "1 year, 4 months" since a YYYY-MM-DD date
function timeSince(date) {
  const s = parseDate(date), now = new Date();
  let m = (now.getFullYear() - s.getFullYear()) * 12 + (now.getMonth() - s.getMonth());
  if (now.getDate() < s.getDate()) m--;
  const y = Math.floor(m / 12), r = m % 12;
  const parts = [];
  if (y) parts.push(`${y} year${y > 1 ? 's' : ''}`);
  if (r) parts.push(`${r} month${r > 1 ? 's' : ''}`);
  return parts.length ? parts.join(', ') : 'under a month';
}

// ---- Councils -------------------------------------------------------------
const CONTROL_LABEL = { majority: 'Reform majority', minority: 'Reform minority', coalition: 'Reform-led coalition' };
const reformByCode = Object.fromEntries(COUNCILS.map(c => [c.code, c]));

// Loose council-name matching, so "Kent", "Kent County Council" and "County Durham" / "Durham County Council" line up
const norm = s => String(s).toLowerCase().replace(/&/g, 'and')
  .replace(/\b(county|borough|city|metropolitan|district|council|of|the|royal)\b/g, '')
  .replace(/[^a-z]/g, '');

const findReformCouncil = name => COUNCILS.find(c => norm(c.name) === norm(name));

// ---- Stories --------------------------------------------------------------
const slugify = s => String(s).toLowerCase()
  .replace(/^placeholder:\s*/, '')
  .replace(/&/g, 'and').replace(/%/g, '-percent')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  .slice(0, 70).replace(/-+$/, '');

// Each entry's link id: its own `id` if set, otherwise date + headline
const entryId  = e => e.id || `${e.date}-${slugify(e.title)}`;
const entryUrl = e => `story.html?id=${encodeURIComponent(entryId(e))}`;

// Every entry, paired with its section
const allEntries = () => SECTIONS.flatMap(s => s.entries.map(e => ({ e, s })));
