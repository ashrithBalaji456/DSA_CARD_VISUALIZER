export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface ProblemExample {
  exampleNumber: number;
  input: string;
  output: string;
  explanation: string;
  type: 'official' | 'illustrative';
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
  stateSnapshot?: string; // visual code/state preview for this step
  highlight?: string;
}

export interface SolutionVariant {
  id: string;
  label: string; // e.g., 'Brute Force', 'HashMap', 'Two Pointers', 'DP Tabulation'
  badge?: string; // e.g., 'Optimal', 'Better', 'Brute Force', 'Alternative'
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  visualizerUrl?: string;
  flowSteps?: FlowStep[];
}

export type InfosysRole = 'SP' | 'DSE' | 'Power Programmer' | 'System Engineer';

export interface InfosysMeta {
  roles?: InfosysRole[];
  frequency?: 'Very High' | 'High' | 'Medium' | 'Low';
  frequencyCount?: number;
  years?: number[];
  dayPlan?: number; // 1..30 for 30-Day Plan
  sourceCount?: number;
}

export interface DSAProblem {
  id: string;
  number: number;
  title: string;
  slug: string;
  difficulty: Difficulty;
  categories: string[];
  description: string;
  inputFormat?: string;
  outputFormat?: string;
  constraints?: string[];
  examples: ProblemExample[];
  approach?: string;
  flowSteps?: FlowStep[];
  timeComplexity: string;
  timeComplexityExplanation: string;
  spaceComplexity: string;
  spaceComplexityExplanation: string;
  visualizerUrl?: string; // path to interactive HTML visualizer page (e.g. '/visualizers/majority_element_ii_visualizer.html')
  solutions?: SolutionVariant[]; // multiple solution approaches / visualizers grouped under one problem
  infosys?: InfosysMeta; // optional Infosys OA / interview metadata
  addedDate?: string; // date the problem was added to the library (e.g. '2026-11-27')
  keyObservations?: string[];
  importantPattern?: string;
  commonMistakes?: string[];
  optimalApproach?: string;
  relatedProblems?: {
    number?: number;
    title: string;
    difficulty: Difficulty;
  }[];
  leetcodeUrl: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
}

export type SortOption =
  | 'number-asc'
  | 'number-desc'
  | 'difficulty-asc'
  | 'difficulty-desc'
  | 'title-asc'
  | 'title-desc'
  | 'date-desc'
  | 'date-asc';

export type StatusFilter = 'all' | 'solved' | 'unsolved' | 'bookmarked';

