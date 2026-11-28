import type { DSAProblem, InfosysMeta } from '../types/problem';
import { INFOSYS_QUESTIONS, type InfosysBankQuestion } from './infosysBank';

/**
 * Infosys OA & Interview metadata mapped to existing DSA Atlas problems by problem ID.
 */
export const INFOSYS_METADATA_BY_ID: Record<string, InfosysMeta> = {
  'valid-palindrome': {
    roles: ['DSE', 'System Engineer'],
    frequency: 'Very High',
    frequencyCount: 16,
    years: [2022, 2024, 2025],
    dayPlan: 3,
    sourceCount: 14,
  },
  'valid-anagram': {
    roles: ['DSE'],
    frequency: 'Very High',
    frequencyCount: 15,
    years: [2021, 2024, 2025, 2026],
    dayPlan: 3,
    sourceCount: 12,
  },
  'nth-fibonacci-number': {
    roles: ['SP', 'System Engineer', 'DSE'],
    frequency: 'Very High',
    frequencyCount: 15,
    years: [2024, 2025],
    dayPlan: 1,
    sourceCount: 14,
  },
};

/**
 * Explicit slug -> DSAProblem.id overrides for Infosys questions that don't have
 * an exact 1:1 LeetCode number match (or have a custom Infosys problem card).
 */
export const INFOSYS_SLUG_TO_PROBLEM_ID: Record<string, string> = {
  'merge intervals': 'meeting-rooms',
  'minimum railway platforms': 'minimum-railway-platforms',
  'maximum subarray sum kadane': 'max-inventory-increase',
  'coin change minimum coins': 'greedy-coin-change',
  'merge two sorted arrays place': 'merge-sorted-array',
  'merge sorted arrays without extra space': 'merge-sorted-array',
};

export interface InfosysResolvedItem {
  question: InfosysBankQuestion;
  linkedProblem?: DSAProblem;
  storageId: string;
}

export function resolveInfosysItems(problems: DSAProblem[]): InfosysResolvedItem[] {
  const byId = new Map<string, DSAProblem>();
  const byNumber = new Map<number, DSAProblem>();
  const byTitle = new Map<string, DSAProblem>();

  for (const p of problems) {
    byId.set(p.id, p);
    if (p.number && !byNumber.has(p.number)) {
      byNumber.set(p.number, p);
    }
    byTitle.set(p.title.toLowerCase().trim(), p);
  }

  return INFOSYS_QUESTIONS.map((q) => {
    let linkedProblem: DSAProblem | undefined;

    // 1. Explicit override by slug
    const overrideId = INFOSYS_SLUG_TO_PROBLEM_ID[q.slug];
    if (overrideId) {
      linkedProblem = byId.get(overrideId);
    }

    // 2. Exact LeetCode number match
    if (!linkedProblem && q.leetcodeExact && q.leetcodeNumber) {
      linkedProblem = byNumber.get(q.leetcodeNumber);
    }

    // 3. Exact title match
    if (!linkedProblem) {
      linkedProblem = byTitle.get(q.name.toLowerCase().trim());
    }

    return {
      question: q,
      linkedProblem,
      storageId: linkedProblem ? linkedProblem.id : `infosys:${q.slug}`,
    };
  });
}

export function buildInfosysProblemList(baseProblems: DSAProblem[]): DSAProblem[] {
  const result: DSAProblem[] = [];
  for (const p of baseProblems) {
    const meta = p.infosys || INFOSYS_METADATA_BY_ID[p.id];
    if (meta) {
      result.push({ ...p, infosys: meta });
    }
  }
  return result;
}
