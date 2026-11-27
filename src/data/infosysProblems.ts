import type { DSAProblem, InfosysMeta } from '../types/problem';

/**
 * Infosys OA & Interview metadata mapped to existing DSA Atlas problems by problem ID.
 * Whenever new Infosys-specific cards or multi-solution cards are added, they can be
 * placed in INFOSYS_CUSTOM_PROBLEMS below or merged here.
 */
export const INFOSYS_METADATA_BY_ID: Record<string, InfosysMeta> = {
  'valid-palindrome': {
    roles: ['DSE', 'System Engineer'],
    frequency: 'Very High',
    frequencyCount: 16,
    years: [2022, 2024, 2025],
    dayPlan: 1,
    sourceCount: 14,
  },
  'valid-anagram': {
    roles: ['DSE', 'System Engineer'],
    frequency: 'Very High',
    frequencyCount: 15,
    years: [2021, 2024, 2025, 2026],
    dayPlan: 1,
    sourceCount: 12,
  },
  'two-sum': {
    roles: ['System Engineer', 'DSE'],
    frequency: 'Very High',
    frequencyCount: 14,
    years: [2020, 2022, 2024, 2025],
    dayPlan: 2,
    sourceCount: 11,
  },
  'subarray-sum-equals-k': {
    roles: ['SP', 'DSE'],
    frequency: 'Very High',
    frequencyCount: 12,
    years: [2022, 2023, 2024, 2025],
    dayPlan: 3,
    sourceCount: 9,
  },
  'longest-substring-without-repeating-characters': {
    roles: ['SP', 'DSE', 'Power Programmer'],
    frequency: 'Very High',
    frequencyCount: 12,
    years: [2021, 2023, 2024, 2025],
    dayPlan: 4,
    sourceCount: 10,
  },
  'trapping-rain-water': {
    roles: ['SP', 'Power Programmer'],
    frequency: 'High',
    frequencyCount: 10,
    years: [2022, 2023, 2024, 2025],
    dayPlan: 5,
    sourceCount: 8,
  },
  'container-with-most-water': {
    roles: ['DSE', 'SP'],
    frequency: 'High',
    frequencyCount: 9,
    years: [2021, 2023, 2024],
    dayPlan: 5,
    sourceCount: 7,
  },
  'valid-parentheses': {
    roles: ['System Engineer', 'DSE'],
    frequency: 'Very High',
    frequencyCount: 13,
    years: [2020, 2022, 2024, 2025],
    dayPlan: 6,
    sourceCount: 11,
  },
  'min-stack': {
    roles: ['SP', 'DSE'],
    frequency: 'High',
    frequencyCount: 8,
    years: [2022, 2024, 2025],
    dayPlan: 6,
    sourceCount: 6,
  },
  'daily-temperatures': {
    roles: ['SP', 'Power Programmer'],
    frequency: 'High',
    frequencyCount: 8,
    years: [2023, 2024, 2025],
    dayPlan: 7,
    sourceCount: 6,
  },
  'sliding-window-maximum': {
    roles: ['SP', 'Power Programmer'],
    frequency: 'High',
    frequencyCount: 9,
    years: [2022, 2024, 2025],
    dayPlan: 8,
    sourceCount: 7,
  },
  'jump-game': {
    roles: ['SP', 'DSE'],
    frequency: 'High',
    frequencyCount: 9,
    years: [2021, 2023, 2024, 2025],
    dayPlan: 9,
    sourceCount: 7,
  },
  'product-of-array-except-self': {
    roles: ['DSE', 'SP'],
    frequency: 'High',
    frequencyCount: 8,
    years: [2022, 2024, 2025],
    dayPlan: 10,
    sourceCount: 6,
  },
  'sort-colors': {
    roles: ['System Engineer', 'DSE'],
    frequency: 'High',
    frequencyCount: 9,
    years: [2020, 2022, 2024],
    dayPlan: 11,
    sourceCount: 7,
  },
  '3sum': {
    roles: ['SP', 'DSE'],
    frequency: 'High',
    frequencyCount: 10,
    years: [2021, 2023, 2024, 2025],
    dayPlan: 12,
    sourceCount: 8,
  },
  'top-k-frequent-elements': {
    roles: ['SP', 'Power Programmer'],
    frequency: 'High',
    frequencyCount: 8,
    years: [2022, 2024, 2025],
    dayPlan: 13,
    sourceCount: 6,
  },
};

/**
 * Dedicated Infosys-only problem cards (including multi-solution variants grouped under one problem).
 */
export const INFOSYS_CUSTOM_PROBLEMS: DSAProblem[] = [];

/**
 * Combines Infosys-tagged problems from the main library with INFOSYS_CUSTOM_PROBLEMS.
 */
export function buildInfosysProblemList(mainProblems: DSAProblem[]): DSAProblem[] {
  const fromMain: DSAProblem[] = mainProblems
    .filter((p) => Boolean(p.infosys || INFOSYS_METADATA_BY_ID[p.id]))
    .map((p) => ({
      ...p,
      infosys: p.infosys || INFOSYS_METADATA_BY_ID[p.id],
    }));

  const existingIds = new Set(fromMain.map((p) => p.id));
  const customOnly = INFOSYS_CUSTOM_PROBLEMS.filter((p) => !existingIds.has(p.id));

  return [...customOnly, ...fromMain];
}
