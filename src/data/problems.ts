import type { DSAProblem } from '../types/problem';

export const PROBLEMS: DSAProblem[] = [
  {
    id: 'majority-element-ii',
    number: 229,
    title: 'Majority Element II',
    slug: 'majority-element-ii',
    difficulty: 'Medium',
    categories: ['Arrays', 'Hashing'],
    description:
      'Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.\n\nCould you solve the problem in linear time and in O(1) space?',
    inputFormat: 'nums = [int]',
    outputFormat: '[int]',
    constraints: [
      '1 <= nums.length <= 5 * 10^4',
      '-10^9 <= nums[i] <= 10^9',
    ],
    examples: [
      {
        exampleNumber: 1,
        input: 'nums = [3, 2, 3]',
        output: '[3]',
        explanation: '3 appears 2 times, which is strictly > 3/3 = 1.',
        type: 'official',
      },
      {
        exampleNumber: 2,
        input: 'nums = [1]',
        output: '[1]',
        explanation: '1 appears 1 time, which is strictly > 1/3 = 0.',
        type: 'official',
      },
      {
        exampleNumber: 3,
        input: 'nums = [1, 2]',
        output: '[1, 2]',
        explanation: 'Both 1 and 2 appear 1 time, strictly > 2/3 = 0.',
        type: 'official',
      },
      {
        exampleNumber: 4,
        input: 'nums = [1, 2, 3, 4, 5]',
        output: '[]',
        explanation: 'Threshold is > 5/3 = 1. Every element appears only once, so none exceeds the threshold.',
        type: 'illustrative',
      },
    ],
    approach:
      'Extended Boyer-Moore Voting Algorithm: At most 2 elements can appear strictly more than ⌊n/3⌋ times. Maintain two candidate variables (cand1, cand2) and two counters (count1, count2). In Pass 1, identify the two most frequent candidates using triple-cancellation. In Pass 2, count their exact occurrences across the array to verify whether either candidate strictly exceeds ⌊n/3⌋.',
    flowSteps: [
      {
        step: 1,
        title: 'Initialize Dual Candidates',
        description: 'Set `cand1 = null, cand2 = null, count1 = 0, count2 = 0`.',
        stateSnapshot: 'cand1 = null, count1 = 0\ncand2 = null, count2 = 0',
        highlight: 'Dual tracking state',
      },
      {
        step: 2,
        title: 'First Pass: Candidate Selection',
        description: 'For each number x: match existing candidates first; otherwise fill an empty slot (count == 0); else decrement both counts.',
        stateSnapshot: 'x == cand1 ? count1++ :\nx == cand2 ? count2++ :\ncount1 == 0 ? cand1=x :\ncount2 == 0 ? cand2=x : {count1--; count2--}',
        highlight: 'Triple cancellation',
      },
      {
        step: 3,
        title: 'Second Pass: Frequency Verification',
        description: 'Reset counts to 0 and count exact occurrences of cand1 and cand2 across the array.',
        stateSnapshot: 'actualCount1 = 0, actualCount2 = 0\nfor x in nums: update actual counts',
        highlight: 'Verification pass',
      },
      {
        step: 4,
        title: 'Filter Elements Exceeding n/3',
        description: 'Append candidates whose actual count is strictly greater than `Math.floor(nums.length / 3)`.',
        stateSnapshot: 'threshold = Math.floor(n / 3)\nreturn valid candidates',
        highlight: 'Deterministic threshold test',
      },
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Two linear passes over the array: one to find potential candidates and one to verify their counts.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Only constant auxiliary variables (cand1, cand2, count1, count2) are used.',
    visualizerUrl: '/visualizers/majority_element_ii_visualizer.html',
    keyObservations: [
      'Mathematically, at most k - 1 elements can appear more than ⌊n/k⌋ times. For k = 3, at most 2 elements can satisfy the condition.',
      'Verification pass is strictly required because candidates are only possibilities and not guaranteed to exceed n/3.',
    ],
    importantPattern: 'Extended Boyer-Moore Majority Vote',
    commonMistakes: [
      'Skipping the verification pass (Pass 2) leading to false positives.',
      'Not prioritizing matching cand1 and cand2 before assigning an empty slot.',
      'Allowing cand1 and cand2 to hold identical values.',
    ],
    optimalApproach: 'Extended Boyer-Moore (2 Candidates, 2 Passes)',
    relatedProblems: [
      { number: 169, title: 'Majority Element', difficulty: 'Easy' },
    ],
    leetcodeUrl: 'https://leetcode.com/problems/majority-element-ii/',
  },
];
