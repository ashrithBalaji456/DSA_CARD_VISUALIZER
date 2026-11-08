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

export type SortOption = 'number-asc' | 'number-desc' | 'difficulty-asc' | 'difficulty-desc' | 'title-asc' | 'title-desc';

export type StatusFilter = 'all' | 'solved' | 'unsolved' | 'bookmarked';

