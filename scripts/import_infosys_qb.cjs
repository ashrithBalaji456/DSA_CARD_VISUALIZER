const fs = require('fs');
const path = require('path');

const SRC_DIR =
  'C:\\Users\\ashri\\.gemini\\antigravity\\brain\\043072ad-5074-4c8f-950b-d6a007cb06c1\\scratch\\infosys-qb\\infosys-qb-main';
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'infosysBank.ts');

const rawQuestions = JSON.parse(
  fs.readFileSync(path.join(SRC_DIR, 'infosys_questions.json'), 'utf8')
);
const rawPlan = JSON.parse(
  fs.readFileSync(path.join(SRC_DIR, 'plan.json'), 'utf8')
);

function parseLeetCodeNumber(lc) {
  if (!lc || typeof lc !== 'string') return undefined;
  // Avoid matching "(related)" or "(variant)" as an exact 1:1 LC number unless we still want to record it
  const m = lc.match(/^(\d+)\.\s/);
  if (m) return Number(m[1]);
  const m2 = lc.match(/\(LC\s*(\d+)\)/i);
  if (m2) return Number(m2[1]);
  return undefined;
}

function isExactLeetCode(lc) {
  if (!lc || typeof lc !== 'string') return false;
  const lower = lc.toLowerCase();
  return !lower.includes('(related)') && !lower.includes('(variant)');
}

const questions = rawQuestions.map((r) => {
  const lcNum = parseLeetCodeNumber(r.leetcode);
  const altTitles = (r.titles || [])
    .filter((t) => t && t.toLowerCase() !== (r.name || '').toLowerCase())
    .slice(0, 6);

  return {
    slug: r.slug,
    name: r.name,
    altTitles,
    statement: r.statement || '',
    difficulty: r.difficulty || 'Medium',
    topic: r.main_topic || 'Miscellaneous',
    subtopics: (r.subtopics || []).slice(0, 8),
    roles: r.roles || [],
    years: r.years || [],
    leetcode: r.leetcode || '',
    leetcodeNumber: lcNum,
    leetcodeExact: isExactLeetCode(r.leetcode),
    gfg: r.gfg || '',
    hackerrank: r.hackerrank || '',
    codeforces: r.codeforces || '',
    companies: (r.companies || []).slice(0, 8),
    frequency: r.frequency || 'Low',
    frequencyScore: r.frequency_score || 0,
    sourceCount: r.source_count || 0,
    sources: (r.sources || []).slice(0, 14).map((s) => ({
      name: s.name,
      url: s.url,
    })),
    notes: r.notes || '',
  };
});

const plan = rawPlan.map((d) => ({
  phase: d.phase,
  day: d.day,
  title: d.title,
  tier: d.tier,
  focus: d.focus,
  slugs: d.slugs || [],
  isMock: Boolean(d.is_mock),
}));

const totalSourceCitations = questions.reduce((acc, q) => acc + q.sourceCount, 0);

const tsContent = `// Auto-generated from infosys-qb-main.zip (infosys_questions.json + plan.json)
// Do not edit manually; re-run scripts/import_infosys_qb.cjs if updating the bank.

export interface InfosysSource {
  name: string;
  url: string;
}

export interface InfosysBankQuestion {
  slug: string;
  name: string;
  altTitles: string[];
  statement: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  subtopics: string[];
  roles: string[];
  years: number[];
  leetcode: string;
  leetcodeNumber?: number;
  leetcodeExact: boolean;
  gfg: string;
  hackerrank: string;
  codeforces: string;
  companies: string[];
  frequency: 'Very High' | 'High' | 'Medium' | 'Low' | string;
  frequencyScore: number;
  sourceCount: number;
  sources: InfosysSource[];
  notes: string;
}

export interface InfosysPlanDay {
  phase: string;
  day: number;
  title: string;
  tier: string;
  focus: string;
  slugs: string[];
  isMock: boolean;
}

export const INFOSYS_TOTAL_CITATIONS = ${totalSourceCitations};

export const INFOSYS_QUESTIONS: InfosysBankQuestion[] = ${JSON.stringify(questions, null, 2)};

export const INFOSYS_PLAN: InfosysPlanDay[] = ${JSON.stringify(plan, null, 2)};
`;

fs.writeFileSync(OUT_FILE, tsContent, 'utf8');
console.log(
  `Generated src/data/infosysBank.ts: ${questions.length} questions, ${plan.length} plan days, ${totalSourceCitations} citations`
);
