const fs = require('fs');
const path = require('path');

const problems = [
  {
    id: 'two-sum',
    number: 1,
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'Easy',
    categories: ['Arrays', 'Hashing'],
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.',
    inputFormat: 'nums = [int], target = int',
    outputFormat: '[index1, index2]',
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9', 'Only one valid answer exists.'],
    examples: [
      { exampleNumber: 1, input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].', type: 'official' },
      { exampleNumber: 2, input: 'nums = [3, 2, 4], target = 6', output: '[1, 2]', explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].', type: 'official' },
      { exampleNumber: 3, input: 'nums = [3, 3], target = 6', output: '[0, 1]', explanation: 'Both elements at index 0 and 1 sum to 6. We return [0, 1].', type: 'official' }
    ],
    approach: 'Single-pass Hash Map: Store numbers with their indices. For each x, compute complement = target - x. If complement is in map, return [map[complement], i].',
    flowSteps: [
      { step: 1, title: 'Initialize Map', description: 'Create an empty hash table seen = {}.', stateSnapshot: 'seen = {}, target = 9', highlight: 'Init' },
      { step: 2, title: 'Lookup Complement', description: 'At index i, complement = target - nums[i]. Check if in seen.', stateSnapshot: 'seen.has(complement)?', highlight: 'Check' },
      { step: 3, title: 'Return Pair', description: 'Return indices once match is found in O(1) lookup time.', stateSnapshot: 'return [seen[complement], i]', highlight: 'Result' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass through array of length n with O(1) hash map lookups.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Stores at most n elements in the hash map.',
    visualizerUrl: '/visualizers/two_sum_visualizer.html',
    keyObservations: ['Look backward using a hash table in O(1) instead of nested loops in O(n^2).'],
    importantPattern: 'Hash Map Complement Lookup (Lookback pattern)',
    commonMistakes: ['Reusing the same element index twice.'],
    optimalApproach: 'Single-Pass Hash Map',
    relatedProblems: [
      { number: 217, title: 'Contains Duplicate', difficulty: 'Easy' },
      { number: 49, title: 'Group Anagrams', difficulty: 'Medium' },
      { number: 128, title: 'Longest Consecutive Sequence', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/two-sum/'
  },
  {
    id: 'valid-anagram',
    number: 242,
    title: 'Valid Anagram',
    slug: 'valid-anagram',
    difficulty: 'Easy',
    categories: ['Strings', 'Hashing'],
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    inputFormat: 's = string, t = string',
    outputFormat: 'boolean (true | false)',
    constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's and t consist of lowercase English letters.'],
    examples: [
      { exampleNumber: 1, input: 's = "anagram", t = "nagaram"', output: 'true', explanation: 'Both strings have identical character frequencies.', type: 'official' },
      { exampleNumber: 2, input: 's = "rat", t = "car"', output: 'false', explanation: '"rat" contains \'t\', but "car" does not.', type: 'official' }
    ],
    approach: 'Fixed size array of length 26 to count frequency in s and decrement for t. Check if all counts are 0.',
    flowSteps: [
      { step: 1, title: 'Length Guard', description: 'If s.length !== t.length, return false immediately.', stateSnapshot: 's.length === t.length', highlight: 'Guard' },
      { step: 2, title: 'Count Frequencies', description: 'Increment for chars in s, decrement for chars in t.', stateSnapshot: 'count[s[i] - 97]++, count[t[i] - 97]--', highlight: 'Count' },
      { step: 3, title: 'Verify Zero Parity', description: 'If all 26 entries are 0, return true.', stateSnapshot: 'every(c => c === 0) -> true', highlight: 'Verify' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass over strings of length n.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Fixed-size array of 26 integers.',
    visualizerUrl: '/visualizers/valid_anagram_visualizer.html',
    keyObservations: ['Two strings are anagrams if and only if their character counts are identical.'],
    importantPattern: 'Character Frequency Counting',
    commonMistakes: ['Sorting both strings (O(n log n)) instead of O(n) array counting.'],
    optimalApproach: '26-Element Frequency Vector',
    relatedProblems: [
      { number: 49, title: 'Group Anagrams', difficulty: 'Medium' },
      { number: 1941, title: 'Check if All Characters Have Equal Number of Occurrences', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/'
  },
  {
    id: 'contains-duplicate',
    number: 217,
    title: 'Contains Duplicate',
    slug: 'contains-duplicate',
    difficulty: 'Easy',
    categories: ['Arrays', 'Hashing'],
    description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
    inputFormat: 'nums = [int]',
    outputFormat: 'boolean (true | false)',
    constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1, 2, 3, 1]', output: 'true', explanation: '1 appears twice.', type: 'official' },
      { exampleNumber: 2, input: 'nums = [1, 2, 3, 4]', output: 'false', explanation: 'All elements distinct.', type: 'official' }
    ],
    approach: 'Single-pass HashSet: Check if current number exists in set. If yes, return true early. Else add to set.',
    flowSteps: [
      { step: 1, title: 'Initialize Set', description: 'Create an empty set seen = new Set().', stateSnapshot: 'seen = Set()', highlight: 'Init' },
      { step: 2, title: 'Check & Insert', description: 'If seen.has(x) return true; else seen.add(x).', stateSnapshot: 'seen.has(x)?', highlight: 'Check' },
      { step: 3, title: 'Conclusion', description: 'If loop ends without duplicates, return false.', stateSnapshot: 'return false', highlight: 'Result' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Traverses nums once with O(1) set operations.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Set stores up to n elements.',
    visualizerUrl: '/visualizers/contains_duplicate_visualizer.html',
    keyObservations: ['Early termination upon first duplicate avoids full traversal on average.'],
    importantPattern: 'Set-based Duplicate Detection',
    commonMistakes: ['Nested loops leading to O(n^2) TLE.'],
    optimalApproach: 'Hash Set with Early Exit',
    relatedProblems: [
      { number: 1, title: 'Two Sum', difficulty: 'Easy' },
      { number: 2351, title: 'First Letter to Appear Twice (First Repeated Element)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/'
  },
  {
    id: 'valid-sudoku',
    number: 36,
    title: 'Valid Sudoku',
    slug: 'valid-sudoku',
    difficulty: 'Medium',
    categories: ['Arrays', 'Hashing'],
    description: 'Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to standard Sudoku rules: each row, column, and 3x3 sub-box must contain digits 1-9 without repetition.',
    inputFormat: 'board = character[9][9]',
    outputFormat: 'boolean (true | false)',
    constraints: ['board.length == 9', 'board[i].length == 9', 'board[i][j] is digit 1-9 or \'.\''],
    examples: [
      { exampleNumber: 1, input: 'board = [["5","3",".",".","7",".",".",".","."],...]', output: 'true', explanation: 'Valid configuration.', type: 'official' },
      { exampleNumber: 2, input: 'board = [["8","3",".",".","7",".",".",".","."],...]', output: 'false', explanation: 'Duplicate 8 in 3x3 box.', type: 'official' }
    ],
    approach: 'Track seen numbers using 9 sets for rows, 9 sets for columns, and 9 sets for 3x3 sub-boxes using boxIndex = Math.floor(r/3)*3 + Math.floor(c/3).',
    flowSteps: [
      { step: 1, title: 'Init Sets', description: 'Initialize 9 row sets, 9 col sets, and 9 box sets.', stateSnapshot: 'rows[9], cols[9], boxes[9]', highlight: 'Setup' },
      { step: 2, title: 'Scan Cells', description: 'For each non-empty cell (r, c), verify uniqueness.', stateSnapshot: 'boxIdx = (r/3)*3 + (c/3)', highlight: 'Validate' },
      { step: 3, title: 'Return Result', description: 'Return true if no collisions found.', stateSnapshot: 'return true', highlight: 'Success' }
    ],
    timeComplexity: 'O(1)',
    timeComplexityExplanation: 'Grid is always fixed at 9x9 = 81 cells.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Fixed memory for 81 entries.',
    visualizerUrl: '/visualizers/valid_sudoku_visualizer.html',
    keyObservations: ['Box index formula Math.floor(r/3)*3 + Math.floor(c/3) maps (r, c) to box 0..8.'],
    importantPattern: '2D Box Hashing',
    commonMistakes: ['Checking empty dot \'.\' cells.'],
    optimalApproach: 'Row, Column, and Sub-box Hash Sets',
    relatedProblems: [
      { number: 49, title: 'Group Anagrams', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/valid-sudoku/'
  },
  {
    id: 'product-of-array-except-self',
    number: 238,
    title: 'Product of Array Except Self',
    slug: 'product-of-array-except-self',
    difficulty: 'Medium',
    categories: ['Arrays'],
    description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must run in O(n) without division.',
    inputFormat: 'nums = [int]',
    outputFormat: '[int]',
    constraints: ['2 <= nums.length <= 10^5', '-30 <= nums[i] <= 30'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1, 2, 3, 4]', output: '[24, 12, 8, 6]', explanation: 'Multiplication excluding self.', type: 'official' },
      { exampleNumber: 2, input: 'nums = [-1, 1, 0, -3, 3]', output: '[0, 0, 9, 0, 0]', explanation: 'Handles zeros properly.', type: 'official' }
    ],
    approach: 'Two-pass algorithm: Fill answer with prefix products left to right. Then sweep right to left maintaining postfix product and multiply answer[i] *= postfix.',
    flowSteps: [
      { step: 1, title: 'Prefix Pass', description: 'answer[i] = answer[i-1] * nums[i-1].', stateSnapshot: 'answer = [1, 1, 2, 6]', highlight: 'Prefix' },
      { step: 2, title: 'Postfix Pass', description: 'answer[i] *= postfix; postfix *= nums[i].', stateSnapshot: 'postfix = 24, answer = [24, 12, 8, 6]', highlight: 'Postfix' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Two sequential passes over array of length n.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Output array does not count as extra space.',
    visualizerUrl: '/visualizers/product_of_array_except_self_visualizer.html',
    keyObservations: ['Product except self is prefixProduct * postfixProduct.'],
    importantPattern: 'Prefix & Postfix Accumulator Sweep',
    commonMistakes: ['Using division operator which is forbidden.'],
    optimalApproach: 'Two-Pass Prefix and Suffix In-Place',
    relatedProblems: [
      { number: 1480, title: 'Running Sum of 1d Array (Prefix Sum)', difficulty: 'Easy' },
      { number: 724, title: 'Find Pivot Index (Balanced Split Array)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/'
  },
  {
    id: 'top-k-frequent-elements',
    number: 347,
    title: 'Top K Frequent Elements',
    slug: 'top-k-frequent-elements',
    difficulty: 'Medium',
    categories: ['Arrays', 'Hashing', 'Heaps / Priority Queues'],
    description: 'Given an integer array nums and an integer k, return the k most frequent elements in any order. Runtime must be better than O(n log n).',
    inputFormat: 'nums = [int], k = int',
    outputFormat: '[int]',
    constraints: ['1 <= nums.length <= 10^5', 'k is within unique elements count'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1, 1, 1, 2, 2, 3], k = 2', output: '[1, 2]', explanation: '1 and 2 are top 2 frequent.', type: 'official' }
    ],
    approach: 'Bucket Sort: Count frequencies using a map. Create buckets array where index represents frequency count. Sweep buckets backward to collect top k.',
    flowSteps: [
      { step: 1, title: 'Count Frequencies', description: 'Map numbers to occurrence counts.', stateSnapshot: 'countMap = {1:3, 2:2, 3:1}', highlight: 'Count' },
      { step: 2, title: 'Bucket Array', description: 'Put numbers into buckets[frequency].', stateSnapshot: 'buckets[3] = [1], buckets[2] = [2]', highlight: 'Bucket' },
      { step: 3, title: 'Collect Top K', description: 'Iterate from bucket n down to 1.', stateSnapshot: 'result = [1, 2]', highlight: 'Collect' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Bucket sort achieves linear O(n) without sorting.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Buckets and hash map store up to n elements.',
    visualizerUrl: '/visualizers/top_k_frequent_elements_visualizer.html',
    keyObservations: ['Max frequency is bounded by n, enabling bucket indexing.'],
    importantPattern: 'Bucket Sort by Frequency',
    commonMistakes: ['Sorting entire map in O(n log n).'],
    optimalApproach: 'Bucket Sort (Inverse Frequency Indexing)',
    relatedProblems: [
      { number: 973, title: 'K Closest Points to Origin', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/'
  },
  {
    id: 'majority-element',
    number: 169,
    title: 'Majority Element',
    slug: 'majority-element',
    difficulty: 'Easy',
    categories: ['Arrays', 'Math'],
    description: 'Given an array nums of size n, return the majority element that appears more than ⌊n / 2⌋ times.',
    inputFormat: 'nums = [int]',
    outputFormat: 'int',
    constraints: ['1 <= n <= 5 * 10^4', 'Majority element always exists.'],
    examples: [
      { exampleNumber: 1, input: 'nums = [3, 2, 3]', output: '3', explanation: '3 appears 2 times (> 3/2).', type: 'official' }
    ],
    approach: 'Boyer-Moore Voting Algorithm: Candidate and count counter. Count increments when matching, decrements on mismatch.',
    flowSteps: [
      { step: 1, title: 'Nominate Candidate', description: 'If count === 0, candidate = nums[i].', stateSnapshot: 'candidate = 3, count = 1', highlight: 'Nominate' },
      { step: 2, title: 'Vote Balancing', description: 'num === candidate ? count++ : count--.', stateSnapshot: 'count balance', highlight: 'Vote' },
      { step: 3, title: 'Return Winner', description: 'Candidate surviving is majority.', stateSnapshot: 'return candidate', highlight: 'Winner' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single linear pass.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Only candidate and count variables.',
    visualizerUrl: '/visualizers/majority_element_visualizer.html',
    keyObservations: ['Majority element withstands cancellation from all other elements.'],
    importantPattern: 'Boyer-Moore Majority Vote',
    commonMistakes: ['Using extra hash map when O(1) space is required.'],
    optimalApproach: 'Boyer-Moore Voting Algorithm',
    relatedProblems: [
      { number: 229, title: 'Majority Element II', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/majority-element/'
  },
  {
    id: 'majority-element-ii',
    number: 229,
    title: 'Majority Element II',
    slug: 'majority-element-ii',
    difficulty: 'Medium',
    categories: ['Arrays', 'Hashing'],
    description: 'Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times in linear time and O(1) space.',
    inputFormat: 'nums = [int]',
    outputFormat: '[int]',
    constraints: ['1 <= nums.length <= 5 * 10^4'],
    examples: [
      { exampleNumber: 1, input: 'nums = [3, 2, 3]', output: '[3]', explanation: '3 appears 2 times (> 1).', type: 'official' }
    ],
    approach: 'Extended Boyer-Moore: At most 2 candidates can appear > n/3 times. Use dual candidates in pass 1, verify exact counts in pass 2.',
    flowSteps: [
      { step: 1, title: 'Dual Candidates', description: 'Track cand1, cand2 with count1, count2.', stateSnapshot: 'cand1 = null, cand2 = null', highlight: 'Dual' },
      { step: 2, title: 'Verification Pass', description: 'Count actual occurrences across array.', stateSnapshot: 'count occurrences', highlight: 'Verify' },
      { step: 3, title: 'Filter Winners', description: 'Keep candidates with count > n/3.', stateSnapshot: 'return winners', highlight: 'Result' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Two passes of length n.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Fixed dual candidate pointers.',
    visualizerUrl: '/visualizers/majority_element_ii_visualizer.html',
    keyObservations: ['At most k-1 elements can exceed n/k frequency.'],
    importantPattern: 'Extended Boyer-Moore Dual Candidate',
    commonMistakes: ['Skipping the second verification pass.'],
    optimalApproach: 'Extended Boyer-Moore (2 Candidates, 2 Passes)',
    relatedProblems: [
      { number: 169, title: 'Majority Element', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/majority-element-ii/'
  },
  {
    id: 'longest-consecutive-sequence',
    number: 128,
    title: 'Longest Consecutive Sequence',
    slug: 'longest-consecutive-sequence',
    difficulty: 'Medium',
    categories: ['Arrays', 'Hashing'],
    description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) time.',
    inputFormat: 'nums = [int]',
    outputFormat: 'int',
    constraints: ['0 <= nums.length <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'nums = [100, 4, 200, 1, 3, 2]', output: '4', explanation: 'Sequence is [1, 2, 3, 4].', type: 'official' }
    ],
    approach: 'HashSet sequence boundary: Only expand sequence if !numSet.has(x - 1). This ensures each element is visited at most twice.',
    flowSteps: [
      { step: 1, title: 'Set Insert', description: 'Store nums in HashSet for O(1) lookups.', stateSnapshot: 'set = Set(nums)', highlight: 'Init' },
      { step: 2, title: 'Start Boundary Check', description: 'If !set.has(x - 1), x is start of a sequence.', stateSnapshot: '!set.has(x - 1)', highlight: 'Start' },
      { step: 3, title: 'Count Streak', description: 'Increment while set.has(curr++).', stateSnapshot: 'streak = 4', highlight: 'Streak' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Each number is touched at most twice.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'HashSet stores up to n elements.',
    visualizerUrl: '/visualizers/longest_consecutive_sequence_visualizer.html',
    keyObservations: ['Filter starting numbers with !has(x - 1) to avoid redundant scans.'],
    importantPattern: 'Set Sequence Origin Detection',
    commonMistakes: ['Scanning from all numbers instead of sequence origins.'],
    optimalApproach: 'HashSet with Sequence Origin Filter',
    relatedProblems: [
      { number: 1, title: 'Two Sum', difficulty: 'Easy' },
      { number: 3, title: 'Longest Distinct Subarray (Sliding Window)', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/'
  },
  {
    id: 'group-anagrams',
    number: 49,
    title: 'Group Anagrams',
    slug: 'group-anagrams',
    difficulty: 'Medium',
    categories: ['Strings', 'Hashing'],
    description: 'Given an array of strings strs, group the anagrams together in any order.',
    inputFormat: 'strs = [string]',
    outputFormat: '[[string]]',
    constraints: ['1 <= strs.length <= 10^4', '0 <= strs[i].length <= 100'],
    examples: [
      { exampleNumber: 1, input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]', explanation: 'Grouped anagrams.', type: 'official' }
    ],
    approach: 'Canonical sorted key hashing: Sort each string (e.g. "eat" -> "aet") and group words under map[key].',
    flowSteps: [
      { step: 1, title: 'Canonical Key', description: 'Sort chars of word to form map key.', stateSnapshot: 'key = "aet"', highlight: 'Key' },
      { step: 2, title: 'Append to Bucket', description: 'map[key].push(word).', stateSnapshot: 'map["aet"] = ["eat", "tea"]', highlight: 'Bucket' },
      { step: 3, title: 'Return Values', description: 'Return all arrays in map.', stateSnapshot: 'return Array.from(map.values())', highlight: 'Result' }
    ],
    timeComplexity: 'O(n * k log k)',
    timeComplexityExplanation: 'Sorting string of length k takes k log k.',
    spaceComplexity: 'O(n * k)',
    spaceComplexityExplanation: 'Stores all characters across anagram groups.',
    visualizerUrl: '/visualizers/group_anagrams_visualizer.html',
    keyObservations: ['All anagrams share the identical sorted character representation.'],
    importantPattern: 'Canonical Representation Hashing',
    commonMistakes: ['Using ASCII sum which has hash collisions.'],
    optimalApproach: 'Sorted Key Hash Map Grouping',
    relatedProblems: [
      { number: 242, title: 'Valid Anagram', difficulty: 'Easy' },
      { number: 1941, title: 'Check if All Characters Have Equal Number of Occurrences', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/'
  },
  {
    id: 'max-meetings',
    number: 252,
    title: 'Max Meetings in One Room',
    slug: 'max-meetings',
    difficulty: 'Medium',
    categories: ['Greedy', 'Sorting'],
    description: 'Given start and end times of meetings, find the maximum number of meetings that can be accommodated in one room without overlap.',
    inputFormat: 'start = [int], end = [int]',
    outputFormat: 'int',
    constraints: ['1 <= n <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9]', output: '4', explanation: 'Meetings (1,2), (3,4), (5,7), (8,9) can be scheduled.', type: 'official' }
    ],
    approach: 'Greedy Interval Scheduling: Sort meetings by earliest finish time. Always pick the meeting that finishes earliest and starts after the previous meeting ended.',
    flowSteps: [
      { step: 1, title: 'Sort by End Time', description: 'Sort intervals by finishing time ascending.', stateSnapshot: 'intervals.sort((a,b) => a.end - b.end)', highlight: 'Sort' },
      { step: 2, title: 'Greedy Selection', description: 'If start >= lastEndTime, schedule meeting.', stateSnapshot: 'lastEndTime = current.end, count++', highlight: 'Schedule' }
    ],
    timeComplexity: 'O(n log n)',
    timeComplexityExplanation: 'Sorting intervals dominates runtime.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Holds meetings array.',
    visualizerUrl: '/visualizers/max_meetings_visualizer.html',
    keyObservations: ['Earliest end time leaves the maximum possible remaining time for subsequent meetings.'],
    importantPattern: 'Greedy Interval Scheduling',
    commonMistakes: ['Sorting by start time instead of end time.'],
    optimalApproach: 'Sort by Finish Time Greedy Selection',
    relatedProblems: [
      { number: 452, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium' },
      { number: 56, title: 'Meeting Rooms (Interval Overlap)', difficulty: 'Medium' },
      { number: 253, title: 'Minimum Railway Platforms (Interval Scheduling)', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms/'
  },
  {
    id: 'balanced-split-array',
    number: 724,
    title: 'Find Pivot Index (Balanced Split Array)',
    slug: 'find-pivot-index',
    difficulty: 'Easy',
    categories: ['Arrays', 'Prefix Sum'],
    description: 'Calculate the pivot index of an array where the sum of numbers strictly to the left equals the sum of numbers strictly to the right.',
    inputFormat: 'nums = [int]',
    outputFormat: 'int',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1, 7, 3, 6, 5, 6]', output: '3', explanation: 'Left sum 1+7+3 = 11, Right sum 5+6 = 11.', type: 'official' }
    ],
    approach: 'Compute totalSum. As you iterate i, rightSum = totalSum - leftSum - nums[i]. If leftSum === rightSum, return i.',
    flowSteps: [
      { step: 1, title: 'Compute Total Sum', description: 'Sum all elements in one pass.', stateSnapshot: 'totalSum = 28', highlight: 'Total' },
      { step: 2, title: 'Balance Check', description: 'Check if leftSum === totalSum - leftSum - num.', stateSnapshot: 'leftSum === rightSum?', highlight: 'Balance' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Two passes of array length n.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Only scalar sums stored.',
    visualizerUrl: '/visualizers/balanced_split_array_visualizer.html',
    keyObservations: ['rightSum = totalSum - leftSum - nums[i] eliminates extra array allocations.'],
    importantPattern: 'Running Prefix Sum Balance',
    commonMistakes: ['Including current element in left or right sum.'],
    optimalApproach: 'Total Sum Running Prefix Comparison',
    relatedProblems: [
      { number: 1480, title: 'Running Sum of 1d Array (Prefix Sum)', difficulty: 'Easy' },
      { number: 238, title: 'Product of Array Except Self', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/find-pivot-index/'
  },
  {
    id: 'floyds-cycle-detection',
    number: 141,
    title: 'Linked List Cycle (Floyd\'s Cycle Detection)',
    slug: 'linked-list-cycle',
    difficulty: 'Easy',
    categories: ['Linked Lists', 'Two Pointers'],
    description: 'Given head of a linked list, determine if the linked list has a cycle in it using two pointers (slow and fast).',
    inputFormat: 'head = ListNode',
    outputFormat: 'boolean (true | false)',
    constraints: ['0 <= nodes <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'Tail connects to node 1.', type: 'official' }
    ],
    approach: 'Tortoise and Hare: slow moves 1 step, fast moves 2 steps. If there is a cycle, fast and slow will meet.',
    flowSteps: [
      { step: 1, title: 'Init Pointers', description: 'Set slow = head, fast = head.', stateSnapshot: 'slow = head, fast = head', highlight: 'Init' },
      { step: 2, title: 'Advance Pointers', description: 'slow = slow.next, fast = fast.next.next.', stateSnapshot: 'moving through nodes', highlight: 'Advance' },
      { step: 3, title: 'Detect Collision', description: 'If slow === fast, return true.', stateSnapshot: 'slow === fast -> true', highlight: 'Collision' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Fast pointer catches slow within cycle length.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Only two pointer variables.',
    visualizerUrl: '/visualizers/floyd_s_cycle_detection_visualizer.html',
    keyObservations: ['In a cyclic track, the faster runner is guaranteed to lap the slower runner.'],
    importantPattern: 'Fast & Slow Pointers (Tortoise & Hare)',
    commonMistakes: ['Not checking fast.next !== null before fast.next.next.'],
    optimalApproach: 'Floyd\'s Tortoise and Hare Cycle Finding',
    relatedProblems: [
      { number: 876, title: 'Middle of the Linked List', difficulty: 'Easy' },
      { number: 83, title: 'Remove Duplicates from Sorted List', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/'
  },
  {
    id: 'k-closest-points-to-origin',
    number: 973,
    title: 'K Closest Points to Origin',
    slug: 'k-closest-points-to-origin',
    difficulty: 'Medium',
    categories: ['Heaps / Priority Queues', 'Math'],
    description: 'Given an array of points where points[i] = [xi, yi] and an integer k, return the k closest points to the origin (0, 0).',
    inputFormat: 'points = [[int, int]], k = int',
    outputFormat: '[[int, int]]',
    constraints: ['1 <= k <= points.length <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'points = [[1,3],[-2,2]], k = 1', output: '[[-2,2]]', explanation: 'Distance (-2)^2 + 2^2 = 8 is smaller than 1^2 + 3^2 = 10.', type: 'official' }
    ],
    approach: 'Max-Heap of size k: Keep the k closest elements. If current distance is smaller than heap top, pop root and push new point.',
    flowSteps: [
      { step: 1, title: 'Distance Metric', description: 'Euclidean squared distance x^2 + y^2.', stateSnapshot: 'dist = x*x + y*y', highlight: 'Distance' },
      { step: 2, title: 'Maintain Max-Heap', description: 'If heap size > k, pop maximum distance.', stateSnapshot: 'maxHeap.size === k', highlight: 'Heap' },
      { step: 3, title: 'Collect K Points', description: 'Remaining points in heap are the k closest.', stateSnapshot: 'return heap items', highlight: 'Result' }
    ],
    timeComplexity: 'O(n log k)',
    timeComplexityExplanation: 'Maintaining a heap of size k for n points takes O(n log k).',
    spaceComplexity: 'O(k)',
    spaceComplexityExplanation: 'Heap stores at most k items.',
    visualizerUrl: '/visualizers/k_closest_points_to_origin_visualizer.html',
    keyObservations: ['Square root is unnecessary since x^2 + y^2 preserves relative order.'],
    importantPattern: 'Bounded Max-Heap for Top-K Smallest',
    commonMistakes: ['Using Min-Heap of size n (O(n log n)) instead of Max-Heap of size k.'],
    optimalApproach: 'Bounded Max-Heap of size K',
    relatedProblems: [
      { number: 347, title: 'Top K Frequent Elements', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin/'
  },
  {
    id: 'min-moves-to-equal-elements',
    number: 453,
    title: 'Minimum Moves to Equal Array Elements',
    slug: 'min-moves-to-equal-elements',
    difficulty: 'Medium',
    categories: ['Arrays', 'Math'],
    description: 'Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal, where a move increments n - 1 elements by 1.',
    inputFormat: 'nums = [int]',
    outputFormat: 'int',
    constraints: ['1 <= nums.length <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1, 2, 3]', output: '3', explanation: '[1,2,3] -> [2,3,3] -> [3,4,3] -> [4,4,4].', type: 'official' }
    ],
    approach: 'Mathematical inversion: Incrementing n - 1 elements by 1 is mathematically equivalent to decrementing 1 element by 1. Therefore, total moves = sum(nums) - n * min(nums).',
    flowSteps: [
      { step: 1, title: 'Find Min Value', description: 'Locate minimum element in nums.', stateSnapshot: 'minVal = Math.min(...nums)', highlight: 'Min' },
      { step: 2, title: 'Accumulate Deviations', description: 'Sum (x - minVal) for all elements x.', stateSnapshot: 'moves += (x - minVal)', highlight: 'Sum' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass to find minimum and sum differences.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Constant space.',
    visualizerUrl: '/visualizers/min_moves_to_equal_elements_visualizer.html',
    keyObservations: ['Incrementing n - 1 elements by 1 is relative to decrementing 1 element by 1.'],
    importantPattern: 'Relative Delta Mathematical Inversion',
    commonMistakes: ['Simulating increments step-by-step.'],
    optimalApproach: 'Mathematical Reduction to Minimum Element',
    relatedProblems: [
      { number: 169, title: 'Majority Element', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/minimum-moves-to-equal-elements/'
  },
  {
    id: 'grid-reachability-bfs',
    number: 1091,
    title: 'Shortest Path in Binary Matrix (Grid Reachability BFS)',
    slug: 'shortest-path-in-binary-matrix',
    difficulty: 'Medium',
    categories: ['Graphs', 'Queues'],
    description: 'Given an n x n binary matrix grid, return the length of the shortest clear path from top-left (0, 0) to bottom-right (n - 1, n - 1) using BFS traversal.',
    inputFormat: 'grid = [[int]]',
    outputFormat: 'int',
    constraints: ['n == grid.length', 'grid[i][j] is 0 or 1'],
    examples: [
      { exampleNumber: 1, input: 'grid = [[0,1],[1,0]]', output: '2', explanation: 'Path (0,0) -> (1,1) length 2.', type: 'official' }
    ],
    approach: 'Breadth-First Search (BFS): Use queue to explore cells level by level across all 8 cardinal and diagonal directions.',
    flowSteps: [
      { step: 1, title: 'Queue Setup', description: 'Enqueue (0,0, dist=1) if grid[0][0] == 0.', stateSnapshot: 'queue = [[0, 0, 1]]', highlight: 'Init' },
      { step: 2, title: 'Level Traversal', description: 'Dequeue (r, c) and visit all valid 8 neighbor cells.', stateSnapshot: 'explore 8 directions', highlight: 'BFS' },
      { step: 3, title: 'Target Reached', description: 'Return dist when reaching destination.', stateSnapshot: 'r == n-1 && c == n-1', highlight: 'Found' }
    ],
    timeComplexity: 'O(n^2)',
    timeComplexityExplanation: 'Visits each cell in the n x n grid at most once.',
    spaceComplexity: 'O(n^2)',
    spaceComplexityExplanation: 'Queue stores at most n^2 coordinates.',
    visualizerUrl: '/visualizers/grid_reachability_bfs_visualizer.html',
    keyObservations: ['BFS guarantees shortest path in unweighted graphs.'],
    importantPattern: 'Multi-Directional BFS Grid Traversal',
    commonMistakes: ['Using DFS which does not guarantee shortest path.'],
    optimalApproach: 'Queue-based BFS with 8 Directions',
    relatedProblems: [
      { number: 232, title: 'Implement Queue using Stacks', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/'
  },
  {
    id: 'meeting-overlap',
    number: 56,
    title: 'Meeting Rooms (Interval Overlap)',
    slug: 'meeting-rooms',
    difficulty: 'Easy',
    categories: ['Arrays', 'Sorting', 'Greedy'],
    description: 'Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings without overlap.',
    inputFormat: 'intervals = [[int, int]]',
    outputFormat: 'boolean (true | false)',
    constraints: ['0 <= intervals.length <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'intervals = [[0,30],[5,10],[15,20]]', output: 'false', explanation: '[0,30] overlaps with [5,10].', type: 'official' },
      { exampleNumber: 2, input: 'intervals = [[7,10],[2,4]]', output: 'true', explanation: 'No overlapping intervals.', type: 'official' }
    ],
    approach: 'Sort intervals by start time. Iterate through intervals from i = 1 to n - 1: if intervals[i][0] < intervals[i - 1][1], return false.',
    flowSteps: [
      { step: 1, title: 'Sort by Start Time', description: 'Sort meetings by start ascending.', stateSnapshot: 'intervals.sort((a,b) => a[0] - b[0])', highlight: 'Sort' },
      { step: 2, title: 'Adjacent Check', description: 'If current start < previous end, conflict exists.', stateSnapshot: 'intervals[i][0] < intervals[i-1][1] -> false', highlight: 'Conflict' }
    ],
    timeComplexity: 'O(n log n)',
    timeComplexityExplanation: 'Sorting dominates.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'In-place sorting.',
    visualizerUrl: '/visualizers/meeting_overlap_visualizer.html',
    keyObservations: ['Sorting brings potential overlapping intervals directly adjacent to each other.'],
    importantPattern: 'Interval Sorting & Adjacent Sweep',
    commonMistakes: ['Comparing non-adjacent intervals without sorting.'],
    optimalApproach: 'Sort by Start Time Adjacent Comparison',
    relatedProblems: [
      { number: 252, title: 'Max Meetings in One Room', difficulty: 'Easy' },
      { number: 452, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms/'
  },
  {
    id: 'max-inventory-increase',
    number: 53,
    title: 'Maximum Subarray (Max Inventory Increase)',
    slug: 'maximum-subarray',
    difficulty: 'Medium',
    categories: ['Arrays', 'Dynamic Programming'],
    description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum (Kadane\'s Algorithm).',
    inputFormat: 'nums = [int]',
    outputFormat: 'int',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'Subarray [4,-1,2,1] has the largest sum = 6.', type: 'official' }
    ],
    approach: 'Kadane\'s Algorithm: Track currentSum and maxSum. At each step, currentSum = max(nums[i], currentSum + nums[i]). Update maxSum = max(maxSum, currentSum).',
    flowSteps: [
      { step: 1, title: 'State Init', description: 'currentSum = nums[0], maxSum = nums[0].', stateSnapshot: 'currentSum = nums[0], maxSum = nums[0]', highlight: 'Init' },
      { step: 2, title: 'Kadane Step', description: 'currentSum = max(nums[i], currentSum + nums[i]).', stateSnapshot: 'maxSum = max(maxSum, currentSum)', highlight: 'Update' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass of length n.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Constant variables.',
    visualizerUrl: '/visualizers/max_inventory_increase_visualizer.html',
    keyObservations: ['If currentSum drops below 0, discard it and restart at current element.'],
    importantPattern: 'Kadane\'s Running Subarray Sum',
    commonMistakes: ['Initializing maxSum to 0 when all elements are negative.'],
    optimalApproach: 'Kadane\'s Algorithm',
    relatedProblems: [
      { number: 55, title: 'Jump Game', difficulty: 'Medium' },
      { number: 1480, title: 'Running Sum of 1d Array (Prefix Sum)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/'
  },
  {
    id: 'longest-distinct-subarray',
    number: 3,
    title: 'Longest Distinct Subarray (Sliding Window)',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'Medium',
    categories: ['Sliding Window', 'Hashing', 'Arrays'],
    description: 'Given an array or string, find the length of the longest contiguous subarray or substring without repeating elements.',
    inputFormat: 'nums = [int] or s = string',
    outputFormat: 'int',
    constraints: ['0 <= length <= 5 * 10^4'],
    examples: [
      { exampleNumber: 1, input: 's = "abcabcbb"', output: '3', explanation: 'Longest distinct substring is "abc".', type: 'official' }
    ],
    approach: 'Sliding Window with lastSeen index map. When duplicate is found, shift left boundary to lastSeen[char] + 1.',
    flowSteps: [
      { step: 1, title: 'Expand Window', description: 'Advance right pointer and check last seen index.', stateSnapshot: 'right = 0, char = s[right]', highlight: 'Expand' },
      { step: 2, title: 'Jump Left Pointer', description: 'left = Math.max(left, lastSeen[char] + 1).', stateSnapshot: 'shift window start', highlight: 'Jump' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Each character processed once.',
    spaceComplexity: 'O(min(m, n))',
    spaceComplexityExplanation: 'Map stores unique items.',
    visualizerUrl: '/visualizers/longest_distinct_subarray_visualizer.html',
    keyObservations: ['Sliding window boundary jumps directly to duplicate position + 1.'],
    importantPattern: 'Fast-Forward Sliding Window',
    commonMistakes: ['Allowing left pointer to move backward.'],
    optimalApproach: 'Sliding Window with Last-Seen Index Map',
    relatedProblems: [
      { number: 128, title: 'Longest Consecutive Sequence', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
  },
  {
    id: 'min-stack',
    number: 155,
    title: 'Min Stack (Dual Stack O(1) Minimum)',
    slug: 'min-stack',
    difficulty: 'Medium',
    categories: ['Stacks'],
    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).',
    inputFormat: '["MinStack","push","push","push","getMin","pop","top","getMin"]',
    outputFormat: '[null,null,null,null,-3,null,0,-2]',
    constraints: ['Methods called up to 3 * 10^4 times'],
    examples: [
      { exampleNumber: 1, input: 'push(-2), push(0), push(-3), getMin() -> -3, pop(), top() -> 0, getMin() -> -2', output: '-3, 0, -2', explanation: 'O(1) min extraction.', type: 'official' }
    ],
    approach: 'Dual Stack technique: Maintain primary stack for values and secondary stack for running minimums. Every push pushes min(val, minStack.top()).',
    flowSteps: [
      { step: 1, title: 'Push Operation', description: 'stack.push(val); minStack.push(min(val, currentMin)).', stateSnapshot: 'minStack keeps track of minimum at each depth', highlight: 'Push' },
      { step: 2, title: 'GetMin in O(1)', description: 'minStack.top() directly returns current minimum.', stateSnapshot: 'return minStack.top()', highlight: 'O(1) Min' }
    ],
    timeComplexity: 'O(1)',
    timeComplexityExplanation: 'All operations push, pop, top, getMin run in constant O(1) time.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Dual stacks each hold n elements.',
    visualizerUrl: '/visualizers/minstack_dual_stack_visualizer.html',
    keyObservations: ['Pairing each value with the minimum seen up to that level enables instant rollback on pop.'],
    importantPattern: 'Dual Stack State Snapshot',
    commonMistakes: ['Scanning stack linearly for minimum (O(n) instead of O(1)).'],
    optimalApproach: 'Dual Stack with Parallel Minimum Tracking',
    relatedProblems: [
      { number: 20, title: 'Valid Parentheses (Balanced Stack)', difficulty: 'Easy' },
      { number: 496, title: 'Next Greater Element I', difficulty: 'Easy' },
      { number: 232, title: 'Implement Queue using Stacks', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/min-stack/'
  },
  {
    id: 'same-frequencies-hashmap',
    number: 1941,
    title: 'Check if All Characters Have Equal Number of Occurrences',
    slug: 'check-if-all-characters-have-equal-number-of-occurrences',
    difficulty: 'Easy',
    categories: ['Strings', 'Hashing'],
    description: 'Given a string s, return true if all characters that appear in s have the same number of occurrences, and false otherwise.',
    inputFormat: 's = string',
    outputFormat: 'boolean (true | false)',
    constraints: ['1 <= s.length <= 1000'],
    examples: [
      { exampleNumber: 1, input: 's = "abacbc"', output: 'true', explanation: 'Every character appears 2 times.', type: 'official' }
    ],
    approach: 'Count character frequencies with HashMap. Convert frequencies into a Set. If set.size === 1, return true.',
    flowSteps: [
      { step: 1, title: 'Frequency Count', description: 'Count each character using map.', stateSnapshot: 'freq = {a:2, b:2, c:2}', highlight: 'Count' },
      { step: 2, title: 'Uniqueness Check', description: 'new Set(Object.values(freq)).size === 1.', stateSnapshot: 'Set([2]).size === 1 -> true', highlight: 'Verify' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass to build frequency map.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'At most 26 lowercase English characters.',
    visualizerUrl: '/visualizers/same_frequencies_hashmap_visualizer.html',
    keyObservations: ['A Set of map values having size 1 implies all frequencies are identical.'],
    importantPattern: 'Frequency Homogeneity via Set',
    commonMistakes: ['Checking empty strings.'],
    optimalApproach: 'Frequency Hash Map + Set Length Check',
    relatedProblems: [
      { number: 242, title: 'Valid Anagram', difficulty: 'Easy' },
      { number: 49, title: 'Group Anagrams', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/'
  },
  {
    id: 'middle-of-the-linked-list',
    number: 876,
    title: 'Middle of the Linked List',
    slug: 'middle-of-the-linked-list',
    difficulty: 'Easy',
    categories: ['Linked Lists', 'Two Pointers'],
    description: 'Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.',
    inputFormat: 'head = ListNode',
    outputFormat: 'ListNode',
    constraints: ['1 <= nodes <= 100'],
    examples: [
      { exampleNumber: 1, input: 'head = [1,2,3,4,5]', output: '[3,4,5]', explanation: 'Middle node is 3.', type: 'official' }
    ],
    approach: 'Fast and slow pointer: slow advances 1 node, fast advances 2 nodes. When fast reaches end, slow is at middle.',
    flowSteps: [
      { step: 1, title: 'Init Pointers', description: 'slow = head, fast = head.', stateSnapshot: 'slow = 1, fast = 1', highlight: 'Init' },
      { step: 2, title: 'Advance Pointers', description: 'slow = slow.next, fast = fast.next.next.', stateSnapshot: 'slow at middle when fast at end', highlight: 'Traverse' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass traversal.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Two pointers only.',
    visualizerUrl: '/visualizers/middle_of_the_linked_list_visualizer.html',
    keyObservations: ['Fast travels at 2x speed, leaving slow at exactly 0.5x when fast finishes.'],
    importantPattern: '2x Fast-Slow Pointer Stride',
    commonMistakes: ['Not checking fast && fast.next.'],
    optimalApproach: 'Tortoise and Hare Midpoint Detection',
    relatedProblems: [
      { number: 141, title: 'Linked List Cycle (Floyd\'s Cycle Detection)', difficulty: 'Easy' },
      { number: 83, title: 'Remove Duplicates from Sorted List', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list/'
  },
  {
    id: 'remove-duplicates-linked-list',
    number: 83,
    title: 'Remove Duplicates from Sorted List',
    slug: 'remove-duplicates-from-sorted-list',
    difficulty: 'Easy',
    categories: ['Linked Lists'],
    description: 'Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.',
    inputFormat: 'head = ListNode',
    outputFormat: 'ListNode',
    constraints: ['0 <= nodes <= 300'],
    examples: [
      { exampleNumber: 1, input: 'head = [1,1,2]', output: '[1,2]', explanation: 'Duplicate 1 removed.', type: 'official' }
    ],
    approach: 'Single pointer curr: if curr.val === curr.next.val, bypass curr.next = curr.next.next. Else curr = curr.next.',
    flowSteps: [
      { step: 1, title: 'Check Next Node', description: 'Compare curr.val with curr.next.val.', stateSnapshot: 'curr.val === curr.next.val?', highlight: 'Compare' },
      { step: 2, title: 'Bypass Duplicate', description: 'curr.next = curr.next.next.', stateSnapshot: 'skip duplicate node', highlight: 'Bypass' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass visiting each node once.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'In-place pointer redirection.',
    visualizerUrl: '/visualizers/remove_duplicates_linked_list_visualizer.html',
    keyObservations: ['Because list is sorted, duplicates are strictly consecutive.'],
    importantPattern: 'Sequential Pointer Relinking',
    commonMistakes: ['Moving curr forward after deleting a duplicate (misses triplicates).'],
    optimalApproach: 'Single-Pass In-Place Bypass',
    relatedProblems: [
      { number: 876, title: 'Middle of the Linked List', difficulty: 'Easy' },
      { number: 141, title: 'Linked List Cycle (Floyd\'s Cycle Detection)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/'
  },
  {
    id: 'queue-using-two-stacks',
    number: 232,
    title: 'Implement Queue using Stacks',
    slug: 'implement-queue-using-stacks',
    difficulty: 'Easy',
    categories: ['Stacks', 'Queues'],
    description: 'Implement a first-in-first-out (FIFO) queue using only two standard LIFO stacks.',
    inputFormat: '["MyQueue","push","push","peek","pop","empty"]',
    outputFormat: '[null,null,null,1,1,false]',
    constraints: ['Up to 100 calls to push, pop, peek, empty'],
    examples: [
      { exampleNumber: 1, input: 'push(1), push(2), peek() -> 1, pop() -> 1, empty() -> false', output: '1, 1, false', explanation: 'FIFO behavior.', type: 'official' }
    ],
    approach: 'Dual Stack: inStack for push, outStack for pop/peek. When outStack is empty, pop everything from inStack to outStack to reverse order.',
    flowSteps: [
      { step: 1, title: 'Push to inStack', description: 'inStack.push(x).', stateSnapshot: 'inStack.push(x)', highlight: 'Push' },
      { step: 2, title: 'Lazy Transfer', description: 'If outStack empty, transfer inStack to outStack.', stateSnapshot: 'outStack.push(inStack.pop())', highlight: 'Transfer' }
    ],
    timeComplexity: 'O(1) Amortized',
    timeComplexityExplanation: 'Each element moved at most twice across stacks.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Total capacity holds n items.',
    visualizerUrl: '/visualizers/queue_using_two_stacks_visualizer.html',
    keyObservations: ['Reversing order twice produces original FIFO ordering.'],
    importantPattern: 'Lazy Amortized Reversal',
    commonMistakes: ['Transferring elements back and forth on every operation.'],
    optimalApproach: 'Dual Stack Amortized O(1)',
    relatedProblems: [
      { number: 155, title: 'Min Stack (Dual Stack O(1) Minimum)', difficulty: 'Medium' },
      { number: 20, title: 'Valid Parentheses (Balanced Stack)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks/'
  },
  {
    id: 'next-greater-element',
    number: 496,
    title: 'Next Greater Element I',
    slug: 'next-greater-element-i',
    difficulty: 'Easy',
    categories: ['Stacks', 'Arrays'],
    description: 'The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.',
    inputFormat: 'nums1 = [int], nums2 = [int]',
    outputFormat: '[int]',
    constraints: ['1 <= nums1.length <= nums2.length <= 1000'],
    examples: [
      { exampleNumber: 1, input: 'nums1 = [4,1,2], nums2 = [1,3,4,2]', output: '[-1,3,-1]', explanation: 'Next greater for 4 is none (-1), 1 is 3, 2 is none (-1).', type: 'official' }
    ],
    approach: 'Monotonic Decreasing Stack: Iterate nums2. While stack has smaller element than current, map[stack.pop()] = current. Then answer nums1 queries in O(1).',
    flowSteps: [
      { step: 1, title: 'Monotonic Stack', description: 'While stack.top() < x, map[stack.pop()] = x.', stateSnapshot: 'resolves next greater for smaller elements', highlight: 'Resolve' },
      { step: 2, title: 'Query Map', description: 'For each x in nums1, query map[x] ?? -1.', stateSnapshot: 'result.push(map[x] ?? -1)', highlight: 'Query' }
    ],
    timeComplexity: 'O(n + m)',
    timeComplexityExplanation: 'Each element pushed and popped once.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Stack and map store up to n elements.',
    visualizerUrl: '/visualizers/next_greater_element_visualizer.html',
    keyObservations: ['A monotonic decreasing stack naturally pairs elements with their first larger rightward neighbor.'],
    importantPattern: 'Monotonic Stack Resolution',
    commonMistakes: ['Nested loops leading to O(n * m) runtime.'],
    optimalApproach: 'Monotonic Stack + Hash Map Lookup',
    relatedProblems: [
      { number: 155, title: 'Min Stack (Dual Stack O(1) Minimum)', difficulty: 'Medium' },
      { number: 20, title: 'Valid Parentheses (Balanced Stack)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/'
  },
  {
    id: 'second-largest-element',
    number: 1796,
    title: 'Second Largest Element in Array',
    slug: 'second-largest-element',
    difficulty: 'Easy',
    categories: ['Arrays'],
    description: 'Given an array of integers, find the second largest distinct element without sorting the array.',
    inputFormat: 'nums = [int]',
    outputFormat: 'int',
    constraints: ['2 <= nums.length <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'nums = [12, 35, 1, 10, 34, 1]', output: '34', explanation: '35 is largest, 34 is second largest.', type: 'official' }
    ],
    approach: 'Single pass: Track largest and secondLargest. If x > largest: secondLargest = largest, largest = x. Else if x > secondLargest and x !== largest: secondLargest = x.',
    flowSteps: [
      { step: 1, title: 'Candidate Update', description: 'If x > largest: shift largest down to secondLargest.', stateSnapshot: 'secondLargest = largest; largest = x', highlight: 'Shift' },
      { step: 2, title: 'Runner Up Update', description: 'Else if x > secondLargest && x !== largest: secondLargest = x.', stateSnapshot: 'secondLargest = x', highlight: 'Runner Up' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single linear pass.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Two scalar variables.',
    visualizerUrl: '/visualizers/second_largest_playing_card_visualizer.html',
    keyObservations: ['Sorting costs O(n log n); two variables achieve optimal O(n) and O(1) space.'],
    importantPattern: 'Top-Two Variable Cascading',
    commonMistakes: ['Not handling duplicate instances of the largest element.'],
    optimalApproach: 'One-Pass Two-Variable Cascade',
    relatedProblems: [
      { number: 169, title: 'Majority Element', difficulty: 'Easy' },
      { number: 217, title: 'Contains Duplicate', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/second-largest-digit-in-a-string/'
  },
  {
    id: 'prefix-sum-array',
    number: 1480,
    title: 'Running Sum of 1d Array (Prefix Sum)',
    slug: 'running-sum-of-1d-array',
    difficulty: 'Easy',
    categories: ['Arrays', 'Prefix Sum'],
    description: 'Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.',
    inputFormat: 'nums = [int]',
    outputFormat: '[int]',
    constraints: ['1 <= nums.length <= 1000'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1,2,3,4]', output: '[1,3,6,10]', explanation: 'Running sum is 1, 1+2, 1+2+3, 1+2+3+4.', type: 'official' }
    ],
    approach: 'In-place accumulation: for i = 1 to n - 1: nums[i] += nums[i - 1].',
    flowSteps: [
      { step: 1, title: 'In-Place Accumulation', description: 'Add previous running sum to current value.', stateSnapshot: 'nums[i] += nums[i-1]', highlight: 'Accumulate' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass of length n.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'In-place modification.',
    visualizerUrl: '/visualizers/prefix_sum_array_visualizer.html',
    keyObservations: ['Prefix sums enable O(1) range sum queries range(i, j) = prefix[j] - prefix[i-1].'],
    importantPattern: 'Prefix Sum Array',
    commonMistakes: ['Recomputing sums repeatedly in O(n^2).'],
    optimalApproach: 'In-Place Running Sum Accumulation',
    relatedProblems: [
      { number: 724, title: 'Find Pivot Index (Balanced Split Array)', difficulty: 'Easy' },
      { number: 238, title: 'Product of Array Except Self', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/running-sum-of-1d-array/'
  },
  {
    id: 'first-repeated-element',
    number: 2351,
    title: 'First Letter to Appear Twice (First Repeated Element)',
    slug: 'first-letter-to-appear-twice',
    difficulty: 'Easy',
    categories: ['Arrays', 'Hashing'],
    description: 'Given a string or array, return the first element to appear twice in left-to-right order.',
    inputFormat: 's = string or nums = [int]',
    outputFormat: 'character or int',
    constraints: ['1 <= length <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 's = "abccbaacz"', output: '\'c\'', explanation: '\'c\' is the first character to appear twice.', type: 'official' }
    ],
    approach: 'Maintain a visited HashSet. The very first item x encountered where seen.has(x) is true is the answer.',
    flowSteps: [
      { step: 1, title: 'Inspect & Check', description: 'seen.has(x) ? return x : seen.add(x).', stateSnapshot: 'first duplicate hit', highlight: 'Check' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Terminates on first repeat.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Set stores visited unique items.',
    visualizerUrl: '/visualizers/first_repeated_element_visualizer.html',
    keyObservations: ['Checking set containment sequentially guarantees the first repeat encountered is earliest in time.'],
    importantPattern: 'Early-Exit HashSet Containment',
    commonMistakes: ['Returning the element with highest frequency instead of earliest second occurrence.'],
    optimalApproach: 'Set with Early Return',
    relatedProblems: [
      { number: 217, title: 'Contains Duplicate', difficulty: 'Easy' },
      { number: 1, title: 'Two Sum', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/first-letter-to-appear-twice/'
  },
  {
    id: 'valid-parentheses',
    number: 20,
    title: 'Valid Parentheses (Balanced Stack)',
    slug: 'valid-parentheses',
    difficulty: 'Easy',
    categories: ['Stacks', 'Strings'],
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    inputFormat: 's = string',
    outputFormat: 'boolean (true | false)',
    constraints: ['1 <= s.length <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 's = "()[]{}"', output: 'true', explanation: 'All matching.', type: 'official' },
      { exampleNumber: 2, input: 's = "(]"', output: 'false', explanation: 'Mismatched types.', type: 'official' }
    ],
    approach: 'LIFO Stack: Push closing bracket corresponding to open bracket. When closing bracket is seen, pop from stack and check match.',
    flowSteps: [
      { step: 1, title: 'Push Matching Bracket', description: 'if char == \'(\' push \')\', etc.', stateSnapshot: 'stack.push(match)', highlight: 'Push' },
      { step: 2, title: 'Validate Match', description: 'if stack.pop() !== char return false.', stateSnapshot: 'check match', highlight: 'Pop' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass of length n.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Stack holds up to n characters.',
    visualizerUrl: '/visualizers/balanced_parentheses_stack_visualizer.html',
    keyObservations: ['Last opened bracket must be the first closed bracket (LIFO).'],
    importantPattern: 'LIFO Matching Stack',
    commonMistakes: ['Forgetting to check if stack is empty at the end.'],
    optimalApproach: 'Stack Matching',
    relatedProblems: [
      { number: 155, title: 'Min Stack (Dual Stack O(1) Minimum)', difficulty: 'Medium' },
      { number: 232, title: 'Implement Queue using Stacks', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/'
  },
  {
    id: 'longest-equal-run',
    number: 1446,
    title: 'Consecutive Characters (Longest Equal Run)',
    slug: 'consecutive-characters',
    difficulty: 'Easy',
    categories: ['Arrays', 'Strings'],
    description: 'The power of the string is the maximum length of a non-empty substring that contains only one unique character. Given string s, return its power.',
    inputFormat: 's = string',
    outputFormat: 'int',
    constraints: ['1 <= s.length <= 500'],
    examples: [
      { exampleNumber: 1, input: 's = "leetcode"', output: '2', explanation: '"ee" has length 2.', type: 'official' }
    ],
    approach: 'Single pass tracking currentRun and maxRun. If s[i] === s[i-1], currentRun++; else currentRun = 1.',
    flowSteps: [
      { step: 1, title: 'Adjacent Match', description: 'Compare s[i] with s[i-1].', stateSnapshot: 's[i] === s[i-1] ? currentRun++ : currentRun = 1', highlight: 'Run' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Two scalar counters.',
    visualizerUrl: '/visualizers/longest_equal_run_playing_card_visualizer.html',
    keyObservations: ['Resetting the running counter on character change preserves contiguous runs.'],
    importantPattern: 'Consecutive Adjacent Streak',
    commonMistakes: ['Not updating maxRun on string boundary.'],
    optimalApproach: 'Running Streak Counter',
    relatedProblems: [
      { number: 3, title: 'Longest Distinct Subarray (Sliding Window)', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/consecutive-characters/'
  },
  {
    id: 'rotate-array',
    number: 189,
    title: 'Rotate Array',
    slug: 'rotate-array',
    difficulty: 'Medium',
    categories: ['Arrays', 'Two Pointers'],
    description: 'Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.',
    inputFormat: 'nums = [int], k = int',
    outputFormat: 'void (in-place)',
    constraints: ['1 <= nums.length <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'nums = [1,2,3,4,5,6,7], k = 3', output: '[5,6,7,1,2,3,4]', explanation: 'Rotated by 3 steps.', type: 'official' }
    ],
    approach: 'Triple Reverse: k = k % n. Reverse entire array. Reverse first k elements. Reverse remaining n - k elements.',
    flowSteps: [
      { step: 1, title: 'Reverse All', description: 'reverse(0, n - 1).', stateSnapshot: '[7,6,5,4,3,2,1]', highlight: 'Full Reverse' },
      { step: 2, title: 'Reverse Prefix', description: 'reverse(0, k - 1).', stateSnapshot: '[5,6,7,4,3,2,1]', highlight: 'Prefix' },
      { step: 3, title: 'Reverse Suffix', description: 'reverse(k, n - 1).', stateSnapshot: '[5,6,7,1,2,3,4]', highlight: 'Suffix' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Each element reversed twice in linear time.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'In-place two-pointer swap.',
    visualizerUrl: '/visualizers/array_rotation_playing_card_visualizer.html',
    keyObservations: ['Three simple reversals achieve cyclic rotation without allocating any extra buffer.'],
    importantPattern: 'Triple Reversal Cyclic Shift',
    commonMistakes: ['Forgetting k = k % n when k >= nums.length.'],
    optimalApproach: 'In-Place Triple Reversal',
    relatedProblems: [
      { number: 238, title: 'Product of Array Except Self', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/rotate-array/'
  },
  {
    id: 'minimum-arrows-to-burst-balloons',
    number: 452,
    title: 'Minimum Number of Arrows to Burst Balloons',
    slug: 'minimum-number-of-arrows-to-burst-balloons',
    difficulty: 'Medium',
    categories: ['Greedy', 'Sorting', 'Arrays'],
    description: 'Find the minimum number of arrows that must be shot to burst all balloons given their horizontal diameter intervals [xstart, xend].',
    inputFormat: 'points = [[int, int]]',
    outputFormat: 'int',
    constraints: ['1 <= points.length <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'points = [[10,16],[2,8],[1,6],[7,12]]', output: '2', explanation: 'Arrows at x = 6 and x = 12.', type: 'official' }
    ],
    approach: 'Greedy Interval End: Sort by xend ascending. If current xstart > lastArrowPos, shoot a new arrow at current xend.',
    flowSteps: [
      { step: 1, title: 'Sort by End Point', description: 'Sort balloons by xend ascending.', stateSnapshot: 'points.sort((a,b) => a[1] - b[1])', highlight: 'Sort' },
      { step: 2, title: 'Greedy Arrow Placement', description: 'Shoot arrow at earliest xend to burst overlapping intervals.', stateSnapshot: 'arrows++, lastArrow = balloon.end', highlight: 'Arrow' }
    ],
    timeComplexity: 'O(n log n)',
    timeComplexityExplanation: 'Sorting intervals dominates.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'In-place sorting.',
    visualizerUrl: '/visualizers/minimum_arrows_to_burst_balloons_visualizer.html',
    keyObservations: ['Placing an arrow at the earliest balloon end maximizes the chance of piercing subsequent overlapping balloons.'],
    importantPattern: 'Greedy Interval Piercing',
    commonMistakes: ['Integer overflow when using subtraction a[1] - b[1] instead of comparison.'],
    optimalApproach: 'Earliest End Coordinate Greedy Selection',
    relatedProblems: [
      { number: 252, title: 'Max Meetings in One Room', difficulty: 'Easy' },
      { number: 55, title: 'Jump Game', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/'
  },
  {
    id: 'jump-game',
    number: 55,
    title: 'Jump Game',
    slug: 'jump-game',
    difficulty: 'Medium',
    categories: ['Greedy', 'Dynamic Programming', 'Arrays'],
    description: 'You are given an integer array nums. You are initially positioned at index 0. Return true if you can reach the last index.',
    inputFormat: 'nums = [int]',
    outputFormat: 'boolean (true | false)',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'nums = [2,3,1,1,4]', output: 'true', explanation: 'Jump 1 step from 0 to 1, then 3 steps to last index.', type: 'official' },
      { exampleNumber: 2, input: 'nums = [3,2,1,0,4]', output: 'false', explanation: 'Always get stuck at index 3 with 0 jump.', type: 'official' }
    ],
    approach: 'Greedy Max Reachable: Maintain maxReach. For each i <= maxReach, update maxReach = max(maxReach, i + nums[i]). If maxReach >= n - 1, return true.',
    flowSteps: [
      { step: 1, title: 'Track Horizon', description: 'maxReach = max(maxReach, i + nums[i]).', stateSnapshot: 'maxReach updated at each step', highlight: 'Horizon' },
      { step: 2, title: 'Check Stagnation', description: 'If i > maxReach, cannot proceed.', stateSnapshot: 'return false if stuck', highlight: 'Check' }
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Single pass.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Only maxReach variable.',
    visualizerUrl: '/visualizers/jump_game_visualizer.html',
    keyObservations: ['At every step, extending the furthest reachable index guarantees optimal greedy progression.'],
    importantPattern: 'Greedy Reachable Horizon',
    commonMistakes: ['Using exponential recursion without memoization.'],
    optimalApproach: 'Greedy Horizon Tracking',
    relatedProblems: [
      { number: 452, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium' },
      { number: 53, title: 'Maximum Subarray (Max Inventory Increase)', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/jump-game/'
  },
  {
    id: 'greedy-coin-change',
    number: 322,
    title: 'Greedy Coin Change (Standard Denominations)',
    slug: 'coin-change',
    difficulty: 'Medium',
    categories: ['Greedy', 'Dynamic Programming'],
    description: 'Given standard coin denominations and an amount, find the minimum number of coins to make up that amount using greedy denomination selection.',
    inputFormat: 'coins = [int], amount = int',
    outputFormat: 'int',
    constraints: ['1 <= amount <= 10^4'],
    examples: [
      { exampleNumber: 1, input: 'coins = [25, 10, 5, 1], amount = 63', output: '6', explanation: '2x25 + 1x10 + 3x1 = 6 coins.', type: 'official' }
    ],
    approach: 'Sort coins in descending order. Repeatedly take the largest coin less than or equal to remaining amount.',
    flowSteps: [
      { step: 1, title: 'Pick Largest Coin', description: 'Take as many of largest coin as fit.', stateSnapshot: 'amount -= coin * count', highlight: 'Greedy Choice' }
    ],
    timeComplexity: 'O(coins.length)',
    timeComplexityExplanation: 'Iterates through coin denominations.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Constant space.',
    visualizerUrl: '/visualizers/greedy_coin_change_visualizer.html',
    keyObservations: ['Greedy works optimally for canonical coin systems (e.g., US currency).'],
    importantPattern: 'Largest-Denomination Greedy Choice',
    commonMistakes: ['Assuming greedy always works for non-canonical arbitrary coin systems (which requires DP).'],
    optimalApproach: 'Descending Greedy Coin Selection',
    relatedProblems: [
      { number: 1710, title: 'Fractional Knapsack (Greedy by Ratio)', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/coin-change/'
  },
  {
    id: 'fractional-knapsack',
    number: 1710,
    title: 'Fractional Knapsack (Greedy by Ratio)',
    slug: 'fractional-knapsack',
    difficulty: 'Medium',
    categories: ['Greedy', 'Sorting'],
    description: 'Given weights and values of n items and capacity W, maximize total value in knapsack where items can be broken down into fractions.',
    inputFormat: 'values = [int], weights = [int], W = int',
    outputFormat: 'double',
    constraints: ['1 <= n <= 10^5'],
    examples: [
      { exampleNumber: 1, input: 'values = [60, 100, 120], weights = [10, 20, 30], W = 50', output: '240.0', explanation: 'Take item 1 (60), item 2 (100), and 2/3 of item 3 (80) = 240.', type: 'official' }
    ],
    approach: 'Calculate value/weight ratio for each item. Sort items descending by ratio. Greedily take whole items, then take a fraction of the final item.',
    flowSteps: [
      { step: 1, title: 'Value Density Ratio', description: 'Sort by value/weight ratio descending.', stateSnapshot: 'items.sort((a,b) => (b.val/b.wt) - (a.val/a.wt))', highlight: 'Ratio' },
      { step: 2, title: 'Greedy Pack', description: 'Take full items while weight fits, then take fraction.', stateSnapshot: 'totalValue += fraction * item.val', highlight: 'Pack' }
    ],
    timeComplexity: 'O(n log n)',
    timeComplexityExplanation: 'Sorting by value density ratio.',
    spaceComplexity: 'O(n)',
    spaceComplexityExplanation: 'Holds items with density ratios.',
    visualizerUrl: '/visualizers/fractional_knapsack_visualizer.html',
    keyObservations: ['Because items can be divided, taking the highest value density item is provably optimal.'],
    importantPattern: 'Value Density Greedy Sort',
    commonMistakes: ['Confusing Fractional Knapsack (Greedy) with 0/1 Knapsack (DP).'],
    optimalApproach: 'Greedy by Value-to-Weight Ratio',
    relatedProblems: [
      { number: 322, title: 'Greedy Coin Change (Standard Denominations)', difficulty: 'Medium' },
      { number: 252, title: 'Max Meetings in One Room', difficulty: 'Easy' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/maximum-units-on-a-truck/'
  },
  {
    id: 'railway-platforms',
    number: 253,
    title: 'Minimum Railway Platforms (Interval Scheduling)',
    slug: 'minimum-platforms',
    difficulty: 'Medium',
    categories: ['Greedy', 'Sorting', 'Arrays'],
    description: 'Given arrival and departure times of trains, find the minimum number of platforms required at the railway station so that no train has to wait.',
    inputFormat: 'arr = [int], dep = [int]',
    outputFormat: 'int',
    constraints: ['1 <= n <= 50000'],
    examples: [
      { exampleNumber: 1, input: 'arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000]', output: '3', explanation: 'At 9:50, 3 trains are simultaneously at the station.', type: 'official' }
    ],
    approach: 'Sort arrival and departure arrays independently. Use two pointers i (arrivals) and j (departures). If arr[i] <= dep[j], platforms++, i++; else platforms--, j++. Update maxPlatforms.',
    flowSteps: [
      { step: 1, title: 'Dual Array Sort', description: 'Sort arrivals and departures separately.', stateSnapshot: 'arr.sort(), dep.sort()', highlight: 'Sort' },
      { step: 2, title: 'Two Pointer Timeline', description: 'arr[i] <= dep[j] ? needed++ : needed--.', stateSnapshot: 'maxPlatforms = max(maxPlatforms, needed)', highlight: 'Timeline' }
    ],
    timeComplexity: 'O(n log n)',
    timeComplexityExplanation: 'Sorting arrays dominates.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Two pointers only.',
    visualizerUrl: '/visualizers/railway_platforms_visualizer.html',
    keyObservations: ['Sorting arrivals and departures separately converts the problem into chronological events.'],
    importantPattern: 'Two-Pointer Timeline Sweep',
    commonMistakes: ['Keeping arrival and departure paired together instead of chronological independent sweep.'],
    optimalApproach: 'Chronological Event Sweep with Two Pointers',
    relatedProblems: [
      { number: 252, title: 'Max Meetings in One Room', difficulty: 'Easy' },
      { number: 56, title: 'Meeting Rooms (Interval Overlap)', difficulty: 'Medium' }
    ],
    leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/'
  }
];

const fileContent = `import type { DSAProblem } from '../types/problem';\n\nexport const PROBLEMS: DSAProblem[] = ${JSON.stringify(problems, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'problems.ts'), fileContent, 'utf8');
console.log('Successfully wrote', problems.length, 'problems to src/data/problems.ts');
