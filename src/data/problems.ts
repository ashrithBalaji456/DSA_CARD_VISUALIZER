import type { DSAProblem } from '../types/problem';

export const PROBLEMS: DSAProblem[] = [
  {
    "id": "two-sum",
    "number": 1,
    "title": "Two Sum",
    "slug": "two-sum",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Hashing"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "inputFormat": "nums = [int], target = int",
    "outputFormat": "[index1, index2]",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [3, 2, 4], target = 6",
        "output": "[1, 2]",
        "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2].",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "nums = [3, 3], target = 6",
        "output": "[0, 1]",
        "explanation": "Both elements at index 0 and 1 sum to 6. We return [0, 1].",
        "type": "official"
      }
    ],
    "approach": "Single-pass Hash Map: Store numbers with their indices. For each x, compute complement = target - x. If complement is in map, return [map[complement], i].",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Map",
        "description": "Create an empty hash table seen = {}.",
        "stateSnapshot": "seen = {}, target = 9",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Lookup Complement",
        "description": "At index i, complement = target - nums[i]. Check if in seen.",
        "stateSnapshot": "seen.has(complement)?",
        "highlight": "Check"
      },
      {
        "step": 3,
        "title": "Return Pair",
        "description": "Return indices once match is found in O(1) lookup time.",
        "stateSnapshot": "return [seen[complement], i]",
        "highlight": "Result"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass through array of length n with O(1) hash map lookups.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Stores at most n elements in the hash map.",
    "visualizerUrl": "/visualizers/two_sum_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Look backward using a hash table in O(1) instead of nested loops in O(n^2)."
    ],
    "importantPattern": "Hash Map Complement Lookup (Lookback pattern)",
    "commonMistakes": [
      "Reusing the same element index twice."
    ],
    "optimalApproach": "Single-Pass Hash Map",
    "relatedProblems": [
      {
        "number": 217,
        "title": "Contains Duplicate",
        "difficulty": "Easy"
      },
      {
        "number": 49,
        "title": "Group Anagrams",
        "difficulty": "Medium"
      },
      {
        "number": 128,
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium"
      },
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 18,
        "title": "4Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/two-sum/"
  },
  {
    "id": "valid-anagram",
    "number": 242,
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "difficulty": "Easy",
    "categories": [
      "Strings",
      "Hashing"
    ],
    "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "inputFormat": "s = string, t = string",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": "Both strings have identical character frequencies.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"rat\", t = \"car\"",
        "output": "false",
        "explanation": "\"rat\" contains 't', but \"car\" does not.",
        "type": "official"
      }
    ],
    "approach": "Fixed size array of length 26 to count frequency in s and decrement for t. Check if all counts are 0.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Length Guard",
        "description": "If s.length !== t.length, return false immediately.",
        "stateSnapshot": "s.length === t.length",
        "highlight": "Guard"
      },
      {
        "step": 2,
        "title": "Count Frequencies",
        "description": "Increment for chars in s, decrement for chars in t.",
        "stateSnapshot": "count[s[i] - 97]++, count[t[i] - 97]--",
        "highlight": "Count"
      },
      {
        "step": 3,
        "title": "Verify Zero Parity",
        "description": "If all 26 entries are 0, return true.",
        "stateSnapshot": "every(c => c === 0) -> true",
        "highlight": "Verify"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass over strings of length n.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Fixed-size array of 26 integers.",
    "visualizerUrl": "/visualizers/valid_anagram_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Two strings are anagrams if and only if their character counts are identical."
    ],
    "importantPattern": "Character Frequency Counting",
    "commonMistakes": [
      "Sorting both strings (O(n log n)) instead of O(n) array counting."
    ],
    "optimalApproach": "26-Element Frequency Vector",
    "solutions": [
      {
        "id": "utf16-frequency",
        "label": "UTF-16 Frequency Array",
        "badge": "Infosys DSE · O(n)",
        "approach": "Single-pass +1 / -1 cancellation using a fixed int[65536] UTF-16 frequency array supporting all characters, digits, and case.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "visualizerUrl": "/visualizers/valid_anagram_frequency_visualizer.html"
      },
      {
        "id": "sorting-equals",
        "label": "char[] Sorting + Arrays.equals",
        "badge": "Canonical Sort · O(n log n)",
        "approach": "Converts s1 and s2 to char[] arrays, sorts both with Arrays.sort(), and compares with Arrays.equals(a, b).",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(n)",
        "visualizerUrl": "/visualizers/valid_anagram_sorting_visualizer.html"
      },
      {
        "id": "lowercase-26-array",
        "label": "26-Letter Frequency Vector",
        "badge": "LeetCode 242 · O(n)",
        "approach": "Fixed-size int[26] array for lowercase English letters ('a'-'z') incrementing for s and decrementing for t.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "visualizerUrl": "/visualizers/valid_anagram_visualizer.html"
      }
    ],
    "infosys": {
      "roles": [
        "DSE"
      ],
      "frequency": "Very High",
      "frequencyCount": 15,
      "years": [
        2021,
        2024,
        2025,
        2026
      ],
      "dayPlan": 3,
      "sourceCount": 12
    },
    "relatedProblems": [
      {
        "number": 49,
        "title": "Group Anagrams",
        "difficulty": "Medium"
      },
      {
        "number": 1941,
        "title": "Check if All Characters Have Equal Number of Occurrences",
        "difficulty": "Easy"
      },
      {
        "number": 125,
        "title": "Valid Palindrome",
        "difficulty": "Easy"
      },
      {
        "number": 567,
        "title": "Permutation in String",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/"
  },
  {
    "id": "contains-duplicate",
    "number": 217,
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Hashing"
    ],
    "description": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "inputFormat": "nums = [int]",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 2, 3, 1]",
        "output": "true",
        "explanation": "1 appears twice.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [1, 2, 3, 4]",
        "output": "false",
        "explanation": "All elements distinct.",
        "type": "official"
      }
    ],
    "approach": "Single-pass HashSet: Check if current number exists in set. If yes, return true early. Else add to set.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Set",
        "description": "Create an empty set seen = new Set().",
        "stateSnapshot": "seen = Set()",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Check & Insert",
        "description": "If seen.has(x) return true; else seen.add(x).",
        "stateSnapshot": "seen.has(x)?",
        "highlight": "Check"
      },
      {
        "step": 3,
        "title": "Conclusion",
        "description": "If loop ends without duplicates, return false.",
        "stateSnapshot": "return false",
        "highlight": "Result"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Traverses nums once with O(1) set operations.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Set stores up to n elements.",
    "visualizerUrl": "/visualizers/contains_duplicate_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Early termination upon first duplicate avoids full traversal on average."
    ],
    "importantPattern": "Set-based Duplicate Detection",
    "commonMistakes": [
      "Nested loops leading to O(n^2) TLE."
    ],
    "optimalApproach": "Hash Set with Early Exit",
    "relatedProblems": [
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      },
      {
        "number": 2351,
        "title": "First Letter to Appear Twice (First Repeated Element)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate/"
  },
  {
    "id": "valid-sudoku",
    "number": 36,
    "title": "Valid Sudoku",
    "slug": "valid-sudoku",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Hashing"
    ],
    "description": "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to standard Sudoku rules: each row, column, and 3x3 sub-box must contain digits 1-9 without repetition.",
    "inputFormat": "board = character[9][9]",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "board.length == 9",
      "board[i].length == 9",
      "board[i][j] is digit 1-9 or '.'"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "board = [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],...]",
        "output": "true",
        "explanation": "Valid configuration.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "board = [[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],...]",
        "output": "false",
        "explanation": "Duplicate 8 in 3x3 box.",
        "type": "official"
      }
    ],
    "approach": "Track seen numbers using 9 sets for rows, 9 sets for columns, and 9 sets for 3x3 sub-boxes using boxIndex = Math.floor(r/3)*3 + Math.floor(c/3).",
    "flowSteps": [
      {
        "step": 1,
        "title": "Init Sets",
        "description": "Initialize 9 row sets, 9 col sets, and 9 box sets.",
        "stateSnapshot": "rows[9], cols[9], boxes[9]",
        "highlight": "Setup"
      },
      {
        "step": 2,
        "title": "Scan Cells",
        "description": "For each non-empty cell (r, c), verify uniqueness.",
        "stateSnapshot": "boxIdx = (r/3)*3 + (c/3)",
        "highlight": "Validate"
      },
      {
        "step": 3,
        "title": "Return Result",
        "description": "Return true if no collisions found.",
        "stateSnapshot": "return true",
        "highlight": "Success"
      }
    ],
    "timeComplexity": "O(1)",
    "timeComplexityExplanation": "Grid is always fixed at 9x9 = 81 cells.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Fixed memory for 81 entries.",
    "visualizerUrl": "/visualizers/valid_sudoku_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Box index formula Math.floor(r/3)*3 + Math.floor(c/3) maps (r, c) to box 0..8."
    ],
    "importantPattern": "2D Box Hashing",
    "commonMistakes": [
      "Checking empty dot '.' cells."
    ],
    "optimalApproach": "Row, Column, and Sub-box Hash Sets",
    "relatedProblems": [
      {
        "number": 49,
        "title": "Group Anagrams",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-sudoku/"
  },
  {
    "id": "product-of-array-except-self",
    "number": 238,
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self",
    "difficulty": "Medium",
    "categories": [
      "Arrays"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must run in O(n) without division.",
    "inputFormat": "nums = [int]",
    "outputFormat": "[int]",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 2, 3, 4]",
        "output": "[24, 12, 8, 6]",
        "explanation": "Multiplication excluding self.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [-1, 1, 0, -3, 3]",
        "output": "[0, 0, 9, 0, 0]",
        "explanation": "Handles zeros properly.",
        "type": "official"
      }
    ],
    "approach": "Two-pass algorithm: Fill answer with prefix products left to right. Then sweep right to left maintaining postfix product and multiply answer[i] *= postfix.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Prefix Pass",
        "description": "answer[i] = answer[i-1] * nums[i-1].",
        "stateSnapshot": "answer = [1, 1, 2, 6]",
        "highlight": "Prefix"
      },
      {
        "step": 2,
        "title": "Postfix Pass",
        "description": "answer[i] *= postfix; postfix *= nums[i].",
        "stateSnapshot": "postfix = 24, answer = [24, 12, 8, 6]",
        "highlight": "Postfix"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Two sequential passes over array of length n.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Output array does not count as extra space.",
    "visualizerUrl": "/visualizers/product_of_array_except_self_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Product except self is prefixProduct * postfixProduct."
    ],
    "importantPattern": "Prefix & Postfix Accumulator Sweep",
    "commonMistakes": [
      "Using division operator which is forbidden."
    ],
    "optimalApproach": "Two-Pass Prefix and Suffix In-Place",
    "relatedProblems": [
      {
        "number": 1480,
        "title": "Running Sum of 1d Array (Prefix Sum)",
        "difficulty": "Easy"
      },
      {
        "number": 724,
        "title": "Find Pivot Index (Balanced Split Array)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    "id": "top-k-frequent-elements",
    "number": 347,
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Hashing",
      "Heaps / Priority Queues"
    ],
    "description": "Given an integer array nums and an integer k, return the k most frequent elements in any order. Runtime must be better than O(n log n).",
    "inputFormat": "nums = [int], k = int",
    "outputFormat": "[int]",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "k is within unique elements count"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 1, 1, 2, 2, 3], k = 2",
        "output": "[1, 2]",
        "explanation": "1 and 2 are top 2 frequent.",
        "type": "official"
      }
    ],
    "approach": "Bucket Sort: Count frequencies using a map. Create buckets array where index represents frequency count. Sweep buckets backward to collect top k.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Count Frequencies",
        "description": "Map numbers to occurrence counts.",
        "stateSnapshot": "countMap = {1:3, 2:2, 3:1}",
        "highlight": "Count"
      },
      {
        "step": 2,
        "title": "Bucket Array",
        "description": "Put numbers into buckets[frequency].",
        "stateSnapshot": "buckets[3] = [1], buckets[2] = [2]",
        "highlight": "Bucket"
      },
      {
        "step": 3,
        "title": "Collect Top K",
        "description": "Iterate from bucket n down to 1.",
        "stateSnapshot": "result = [1, 2]",
        "highlight": "Collect"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Bucket sort achieves linear O(n) without sorting.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Buckets and hash map store up to n elements.",
    "visualizerUrl": "/visualizers/top_k_frequent_elements_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Max frequency is bounded by n, enabling bucket indexing."
    ],
    "importantPattern": "Bucket Sort by Frequency",
    "commonMistakes": [
      "Sorting entire map in O(n log n)."
    ],
    "optimalApproach": "Bucket Sort (Inverse Frequency Indexing)",
    "relatedProblems": [
      {
        "number": 973,
        "title": "K Closest Points to Origin",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    "id": "majority-element",
    "number": 169,
    "title": "Majority Element",
    "slug": "majority-element",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Math"
    ],
    "description": "Given an array nums of size n, return the majority element that appears more than ⌊n / 2⌋ times.",
    "inputFormat": "nums = [int]",
    "outputFormat": "int",
    "constraints": [
      "1 <= n <= 5 * 10^4",
      "Majority element always exists."
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [3, 2, 3]",
        "output": "3",
        "explanation": "3 appears 2 times (> 3/2).",
        "type": "official"
      }
    ],
    "approach": "Boyer-Moore Voting Algorithm: Candidate and count counter. Count increments when matching, decrements on mismatch.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Nominate Candidate",
        "description": "If count === 0, candidate = nums[i].",
        "stateSnapshot": "candidate = 3, count = 1",
        "highlight": "Nominate"
      },
      {
        "step": 2,
        "title": "Vote Balancing",
        "description": "num === candidate ? count++ : count--.",
        "stateSnapshot": "count balance",
        "highlight": "Vote"
      },
      {
        "step": 3,
        "title": "Return Winner",
        "description": "Candidate surviving is majority.",
        "stateSnapshot": "return candidate",
        "highlight": "Winner"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single linear pass.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Only candidate and count variables.",
    "visualizerUrl": "/visualizers/majority_element_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Majority element withstands cancellation from all other elements."
    ],
    "importantPattern": "Boyer-Moore Majority Vote",
    "commonMistakes": [
      "Using extra hash map when O(1) space is required."
    ],
    "optimalApproach": "Boyer-Moore Voting Algorithm",
    "relatedProblems": [
      {
        "number": 229,
        "title": "Majority Element II",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/majority-element/"
  },
  {
    "id": "majority-element-ii",
    "number": 229,
    "title": "Majority Element II",
    "slug": "majority-element-ii",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Hashing"
    ],
    "description": "Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times in linear time and O(1) space.",
    "inputFormat": "nums = [int]",
    "outputFormat": "[int]",
    "constraints": [
      "1 <= nums.length <= 5 * 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [3, 2, 3]",
        "output": "[3]",
        "explanation": "3 appears 2 times (> 1).",
        "type": "official"
      }
    ],
    "approach": "Extended Boyer-Moore: At most 2 candidates can appear > n/3 times. Use dual candidates in pass 1, verify exact counts in pass 2.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Dual Candidates",
        "description": "Track cand1, cand2 with count1, count2.",
        "stateSnapshot": "cand1 = null, cand2 = null",
        "highlight": "Dual"
      },
      {
        "step": 2,
        "title": "Verification Pass",
        "description": "Count actual occurrences across array.",
        "stateSnapshot": "count occurrences",
        "highlight": "Verify"
      },
      {
        "step": 3,
        "title": "Filter Winners",
        "description": "Keep candidates with count > n/3.",
        "stateSnapshot": "return winners",
        "highlight": "Result"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Two passes of length n.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Fixed dual candidate pointers.",
    "visualizerUrl": "/visualizers/majority_element_ii_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "At most k-1 elements can exceed n/k frequency."
    ],
    "importantPattern": "Extended Boyer-Moore Dual Candidate",
    "commonMistakes": [
      "Skipping the second verification pass."
    ],
    "optimalApproach": "Extended Boyer-Moore (2 Candidates, 2 Passes)",
    "relatedProblems": [
      {
        "number": 169,
        "title": "Majority Element",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/majority-element-ii/"
  },
  {
    "id": "longest-consecutive-sequence",
    "number": 128,
    "title": "Longest Consecutive Sequence",
    "slug": "longest-consecutive-sequence",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Hashing"
    ],
    "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) time.",
    "inputFormat": "nums = [int]",
    "outputFormat": "int",
    "constraints": [
      "0 <= nums.length <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [100, 4, 200, 1, 3, 2]",
        "output": "4",
        "explanation": "Sequence is [1, 2, 3, 4].",
        "type": "official"
      }
    ],
    "approach": "HashSet sequence boundary: Only expand sequence if !numSet.has(x - 1). This ensures each element is visited at most twice.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Set Insert",
        "description": "Store nums in HashSet for O(1) lookups.",
        "stateSnapshot": "set = Set(nums)",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Start Boundary Check",
        "description": "If !set.has(x - 1), x is start of a sequence.",
        "stateSnapshot": "!set.has(x - 1)",
        "highlight": "Start"
      },
      {
        "step": 3,
        "title": "Count Streak",
        "description": "Increment while set.has(curr++).",
        "stateSnapshot": "streak = 4",
        "highlight": "Streak"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each number is touched at most twice.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "HashSet stores up to n elements.",
    "visualizerUrl": "/visualizers/longest_consecutive_sequence_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Filter starting numbers with !has(x - 1) to avoid redundant scans."
    ],
    "importantPattern": "Set Sequence Origin Detection",
    "commonMistakes": [
      "Scanning from all numbers instead of sequence origins."
    ],
    "optimalApproach": "HashSet with Sequence Origin Filter",
    "relatedProblems": [
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    "id": "group-anagrams",
    "number": 49,
    "title": "Group Anagrams",
    "slug": "group-anagrams",
    "difficulty": "Medium",
    "categories": [
      "Strings",
      "Hashing"
    ],
    "description": "Given an array of strings strs, group the anagrams together in any order.",
    "inputFormat": "strs = [string]",
    "outputFormat": "[[string]]",
    "constraints": [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": "Grouped anagrams.",
        "type": "official"
      }
    ],
    "approach": "Canonical sorted key hashing: Sort each string (e.g. \"eat\" -> \"aet\") and group words under map[key].",
    "flowSteps": [
      {
        "step": 1,
        "title": "Canonical Key",
        "description": "Sort chars of word to form map key.",
        "stateSnapshot": "key = \"aet\"",
        "highlight": "Key"
      },
      {
        "step": 2,
        "title": "Append to Bucket",
        "description": "map[key].push(word).",
        "stateSnapshot": "map[\"aet\"] = [\"eat\", \"tea\"]",
        "highlight": "Bucket"
      },
      {
        "step": 3,
        "title": "Return Values",
        "description": "Return all arrays in map.",
        "stateSnapshot": "return Array.from(map.values())",
        "highlight": "Result"
      }
    ],
    "timeComplexity": "O(n * k log k)",
    "timeComplexityExplanation": "Sorting string of length k takes k log k.",
    "spaceComplexity": "O(n * k)",
    "spaceComplexityExplanation": "Stores all characters across anagram groups.",
    "visualizerUrl": "/visualizers/group_anagrams_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "All anagrams share the identical sorted character representation."
    ],
    "importantPattern": "Canonical Representation Hashing",
    "commonMistakes": [
      "Using ASCII sum which has hash collisions."
    ],
    "optimalApproach": "Sorted Key Hash Map Grouping",
    "relatedProblems": [
      {
        "number": 242,
        "title": "Valid Anagram",
        "difficulty": "Easy"
      },
      {
        "number": 1941,
        "title": "Check if All Characters Have Equal Number of Occurrences",
        "difficulty": "Easy"
      },
      {
        "number": 567,
        "title": "Permutation in String",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/"
  },
  {
    "id": "max-meetings",
    "number": 252,
    "title": "Max Meetings in One Room",
    "slug": "max-meetings",
    "difficulty": "Medium",
    "categories": [
      "Greedy",
      "Sorting"
    ],
    "description": "Given start and end times of meetings, find the maximum number of meetings that can be accommodated in one room without overlap.",
    "inputFormat": "start = [int], end = [int]",
    "outputFormat": "int",
    "constraints": [
      "1 <= n <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9]",
        "output": "4",
        "explanation": "Meetings (1,2), (3,4), (5,7), (8,9) can be scheduled.",
        "type": "official"
      }
    ],
    "approach": "Greedy Interval Scheduling: Sort meetings by earliest finish time. Always pick the meeting that finishes earliest and starts after the previous meeting ended.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Sort by End Time",
        "description": "Sort intervals by finishing time ascending.",
        "stateSnapshot": "intervals.sort((a,b) => a.end - b.end)",
        "highlight": "Sort"
      },
      {
        "step": 2,
        "title": "Greedy Selection",
        "description": "If start >= lastEndTime, schedule meeting.",
        "stateSnapshot": "lastEndTime = current.end, count++",
        "highlight": "Schedule"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "Sorting intervals dominates runtime.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Holds meetings array.",
    "visualizerUrl": "/visualizers/max_meetings_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Earliest end time leaves the maximum possible remaining time for subsequent meetings."
    ],
    "importantPattern": "Greedy Interval Scheduling",
    "commonMistakes": [
      "Sorting by start time instead of end time."
    ],
    "optimalApproach": "Sort by Finish Time Greedy Selection",
    "relatedProblems": [
      {
        "number": 452,
        "title": "Minimum Number of Arrows to Burst Balloons",
        "difficulty": "Medium"
      },
      {
        "number": 56,
        "title": "Meeting Rooms (Interval Overlap)",
        "difficulty": "Medium"
      },
      {
        "number": 253,
        "title": "Minimum Railway Platforms (Interval Scheduling)",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms/"
  },
  {
    "id": "balanced-split-array",
    "number": 724,
    "title": "Find Pivot Index (Balanced Split Array)",
    "slug": "find-pivot-index",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Prefix Sum"
    ],
    "description": "Calculate the pivot index of an array where the sum of numbers strictly to the left equals the sum of numbers strictly to the right.",
    "inputFormat": "nums = [int]",
    "outputFormat": "int",
    "constraints": [
      "1 <= nums.length <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 7, 3, 6, 5, 6]",
        "output": "3",
        "explanation": "Left sum 1+7+3 = 11, Right sum 5+6 = 11.",
        "type": "official"
      }
    ],
    "approach": "Compute totalSum. As you iterate i, rightSum = totalSum - leftSum - nums[i]. If leftSum === rightSum, return i.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Compute Total Sum",
        "description": "Sum all elements in one pass.",
        "stateSnapshot": "totalSum = 28",
        "highlight": "Total"
      },
      {
        "step": 2,
        "title": "Balance Check",
        "description": "Check if leftSum === totalSum - leftSum - num.",
        "stateSnapshot": "leftSum === rightSum?",
        "highlight": "Balance"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Two passes of array length n.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Only scalar sums stored.",
    "visualizerUrl": "/visualizers/balanced_split_array_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "rightSum = totalSum - leftSum - nums[i] eliminates extra array allocations."
    ],
    "importantPattern": "Running Prefix Sum Balance",
    "commonMistakes": [
      "Including current element in left or right sum."
    ],
    "optimalApproach": "Total Sum Running Prefix Comparison",
    "relatedProblems": [
      {
        "number": 1480,
        "title": "Running Sum of 1d Array (Prefix Sum)",
        "difficulty": "Easy"
      },
      {
        "number": 238,
        "title": "Product of Array Except Self",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/find-pivot-index/"
  },
  {
    "id": "floyds-cycle-detection",
    "number": 141,
    "title": "Linked List Cycle (Floyd's Cycle Detection)",
    "slug": "linked-list-cycle",
    "difficulty": "Easy",
    "categories": [
      "Linked Lists",
      "Two Pointers"
    ],
    "description": "Given head of a linked list, determine if the linked list has a cycle in it using two pointers (slow and fast).",
    "inputFormat": "head = ListNode",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "0 <= nodes <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "Tail connects to node 1.",
        "type": "official"
      }
    ],
    "approach": "Tortoise and Hare: slow moves 1 step, fast moves 2 steps. If there is a cycle, fast and slow will meet.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Init Pointers",
        "description": "Set slow = head, fast = head.",
        "stateSnapshot": "slow = head, fast = head",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Advance Pointers",
        "description": "slow = slow.next, fast = fast.next.next.",
        "stateSnapshot": "moving through nodes",
        "highlight": "Advance"
      },
      {
        "step": 3,
        "title": "Detect Collision",
        "description": "If slow === fast, return true.",
        "stateSnapshot": "slow === fast -> true",
        "highlight": "Collision"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Fast pointer catches slow within cycle length.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Only two pointer variables.",
    "visualizerUrl": "/visualizers/floyd_s_cycle_detection_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "In a cyclic track, the faster runner is guaranteed to lap the slower runner."
    ],
    "importantPattern": "Fast & Slow Pointers (Tortoise & Hare)",
    "commonMistakes": [
      "Not checking fast.next !== null before fast.next.next."
    ],
    "optimalApproach": "Floyd's Tortoise and Hare Cycle Finding",
    "relatedProblems": [
      {
        "number": 876,
        "title": "Middle of the Linked List",
        "difficulty": "Easy"
      },
      {
        "number": 83,
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
    "id": "k-closest-points-to-origin",
    "number": 973,
    "title": "K Closest Points to Origin",
    "slug": "k-closest-points-to-origin",
    "difficulty": "Medium",
    "categories": [
      "Heaps / Priority Queues",
      "Math"
    ],
    "description": "Given an array of points where points[i] = [xi, yi] and an integer k, return the k closest points to the origin (0, 0).",
    "inputFormat": "points = [[int, int]], k = int",
    "outputFormat": "[[int, int]]",
    "constraints": [
      "1 <= k <= points.length <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "points = [[1,3],[-2,2]], k = 1",
        "output": "[[-2,2]]",
        "explanation": "Distance (-2)^2 + 2^2 = 8 is smaller than 1^2 + 3^2 = 10.",
        "type": "official"
      }
    ],
    "approach": "Max-Heap of size k: Keep the k closest elements. If current distance is smaller than heap top, pop root and push new point.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Distance Metric",
        "description": "Euclidean squared distance x^2 + y^2.",
        "stateSnapshot": "dist = x*x + y*y",
        "highlight": "Distance"
      },
      {
        "step": 2,
        "title": "Maintain Max-Heap",
        "description": "If heap size > k, pop maximum distance.",
        "stateSnapshot": "maxHeap.size === k",
        "highlight": "Heap"
      },
      {
        "step": 3,
        "title": "Collect K Points",
        "description": "Remaining points in heap are the k closest.",
        "stateSnapshot": "return heap items",
        "highlight": "Result"
      }
    ],
    "timeComplexity": "O(n log k)",
    "timeComplexityExplanation": "Maintaining a heap of size k for n points takes O(n log k).",
    "spaceComplexity": "O(k)",
    "spaceComplexityExplanation": "Heap stores at most k items.",
    "visualizerUrl": "/visualizers/k_closest_points_to_origin_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Square root is unnecessary since x^2 + y^2 preserves relative order."
    ],
    "importantPattern": "Bounded Max-Heap for Top-K Smallest",
    "commonMistakes": [
      "Using Min-Heap of size n (O(n log n)) instead of Max-Heap of size k."
    ],
    "optimalApproach": "Bounded Max-Heap of size K",
    "relatedProblems": [
      {
        "number": 347,
        "title": "Top K Frequent Elements",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    "id": "min-moves-to-equal-elements",
    "number": 453,
    "title": "Minimum Moves to Equal Array Elements",
    "slug": "min-moves-to-equal-elements",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Math"
    ],
    "description": "Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal, where a move increments n - 1 elements by 1.",
    "inputFormat": "nums = [int]",
    "outputFormat": "int",
    "constraints": [
      "1 <= nums.length <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 2, 3]",
        "output": "3",
        "explanation": "[1,2,3] -> [2,3,3] -> [3,4,3] -> [4,4,4].",
        "type": "official"
      }
    ],
    "approach": "Mathematical inversion: Incrementing n - 1 elements by 1 is mathematically equivalent to decrementing 1 element by 1. Therefore, total moves = sum(nums) - n * min(nums).",
    "flowSteps": [
      {
        "step": 1,
        "title": "Find Min Value",
        "description": "Locate minimum element in nums.",
        "stateSnapshot": "minVal = Math.min(...nums)",
        "highlight": "Min"
      },
      {
        "step": 2,
        "title": "Accumulate Deviations",
        "description": "Sum (x - minVal) for all elements x.",
        "stateSnapshot": "moves += (x - minVal)",
        "highlight": "Sum"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass to find minimum and sum differences.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Constant space.",
    "visualizerUrl": "/visualizers/min_moves_to_equal_elements_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Incrementing n - 1 elements by 1 is relative to decrementing 1 element by 1."
    ],
    "importantPattern": "Relative Delta Mathematical Inversion",
    "commonMistakes": [
      "Simulating increments step-by-step."
    ],
    "optimalApproach": "Mathematical Reduction to Minimum Element",
    "relatedProblems": [
      {
        "number": 169,
        "title": "Majority Element",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/minimum-moves-to-equal-elements/"
  },
  {
    "id": "grid-reachability-bfs",
    "number": 1091,
    "title": "Shortest Path in Binary Matrix (Grid Reachability BFS)",
    "slug": "shortest-path-in-binary-matrix",
    "difficulty": "Medium",
    "categories": [
      "Graphs",
      "Queues"
    ],
    "description": "Given an n x n binary matrix grid, return the length of the shortest clear path from top-left (0, 0) to bottom-right (n - 1, n - 1) using BFS traversal.",
    "inputFormat": "grid = [[int]]",
    "outputFormat": "int",
    "constraints": [
      "n == grid.length",
      "grid[i][j] is 0 or 1"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "grid = [[0,1],[1,0]]",
        "output": "2",
        "explanation": "Path (0,0) -> (1,1) length 2.",
        "type": "official"
      }
    ],
    "approach": "Breadth-First Search (BFS): Use queue to explore cells level by level across all 8 cardinal and diagonal directions.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Queue Setup",
        "description": "Enqueue (0,0, dist=1) if grid[0][0] == 0.",
        "stateSnapshot": "queue = [[0, 0, 1]]",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Level Traversal",
        "description": "Dequeue (r, c) and visit all valid 8 neighbor cells.",
        "stateSnapshot": "explore 8 directions",
        "highlight": "BFS"
      },
      {
        "step": 3,
        "title": "Target Reached",
        "description": "Return dist when reaching destination.",
        "stateSnapshot": "r == n-1 && c == n-1",
        "highlight": "Found"
      }
    ],
    "timeComplexity": "O(n^2)",
    "timeComplexityExplanation": "Visits each cell in the n x n grid at most once.",
    "spaceComplexity": "O(n^2)",
    "spaceComplexityExplanation": "Queue stores at most n^2 coordinates.",
    "visualizerUrl": "/visualizers/grid_reachability_bfs_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "BFS guarantees shortest path in unweighted graphs."
    ],
    "importantPattern": "Multi-Directional BFS Grid Traversal",
    "commonMistakes": [
      "Using DFS which does not guarantee shortest path."
    ],
    "optimalApproach": "Queue-based BFS with 8 Directions",
    "relatedProblems": [
      {
        "number": 232,
        "title": "Implement Queue using Stacks",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
  },
  {
    "id": "meeting-overlap",
    "number": 56,
    "title": "Meeting Rooms (Interval Overlap)",
    "slug": "meeting-rooms",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Sorting",
      "Greedy"
    ],
    "description": "Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings without overlap.",
    "inputFormat": "intervals = [[int, int]]",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "0 <= intervals.length <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "false",
        "explanation": "[0,30] overlaps with [5,10].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "intervals = [[7,10],[2,4]]",
        "output": "true",
        "explanation": "No overlapping intervals.",
        "type": "official"
      }
    ],
    "approach": "Sort intervals by start time. Iterate through intervals from i = 1 to n - 1: if intervals[i][0] < intervals[i - 1][1], return false.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Sort by Start Time",
        "description": "Sort meetings by start ascending.",
        "stateSnapshot": "intervals.sort((a,b) => a[0] - b[0])",
        "highlight": "Sort"
      },
      {
        "step": 2,
        "title": "Adjacent Check",
        "description": "If current start < previous end, conflict exists.",
        "stateSnapshot": "intervals[i][0] < intervals[i-1][1] -> false",
        "highlight": "Conflict"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "Sorting dominates.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "In-place sorting.",
    "visualizerUrl": "/visualizers/meeting_overlap_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Sorting brings potential overlapping intervals directly adjacent to each other."
    ],
    "importantPattern": "Interval Sorting & Adjacent Sweep",
    "commonMistakes": [
      "Comparing non-adjacent intervals without sorting."
    ],
    "optimalApproach": "Sort by Start Time Adjacent Comparison",
    "relatedProblems": [
      {
        "number": 252,
        "title": "Max Meetings in One Room",
        "difficulty": "Easy"
      },
      {
        "number": 452,
        "title": "Minimum Number of Arrows to Burst Balloons",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms/"
  },
  {
    "id": "max-inventory-increase",
    "number": 53,
    "title": "Maximum Subarray (Max Inventory Increase)",
    "slug": "maximum-subarray",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Dynamic Programming"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum (Kadane's Algorithm).",
    "inputFormat": "nums = [int]",
    "outputFormat": "int",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "Subarray [4,-1,2,1] has the largest sum = 6.",
        "type": "official"
      }
    ],
    "approach": "Kadane's Algorithm: Track currentSum and maxSum. At each step, currentSum = max(nums[i], currentSum + nums[i]). Update maxSum = max(maxSum, currentSum).",
    "flowSteps": [
      {
        "step": 1,
        "title": "State Init",
        "description": "currentSum = nums[0], maxSum = nums[0].",
        "stateSnapshot": "currentSum = nums[0], maxSum = nums[0]",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Kadane Step",
        "description": "currentSum = max(nums[i], currentSum + nums[i]).",
        "stateSnapshot": "maxSum = max(maxSum, currentSum)",
        "highlight": "Update"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass of length n.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Constant variables.",
    "visualizerUrl": "/visualizers/max_inventory_increase_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "If currentSum drops below 0, discard it and restart at current element."
    ],
    "importantPattern": "Kadane's Running Subarray Sum",
    "commonMistakes": [
      "Initializing maxSum to 0 when all elements are negative."
    ],
    "optimalApproach": "Kadane's Algorithm",
    "relatedProblems": [
      {
        "number": 55,
        "title": "Jump Game",
        "difficulty": "Medium"
      },
      {
        "number": 1480,
        "title": "Running Sum of 1d Array (Prefix Sum)",
        "difficulty": "Easy"
      },
      {
        "number": 121,
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "number": 3,
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Hashing",
      "Strings"
    ],
    "description": "Given a string s, find the length of the longest substring without duplicate characters.\n\nA substring is a contiguous non-empty sequence of characters within a string.",
    "inputFormat": "s = string",
    "outputFormat": "int (maximum length)",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "The answer is \"wke\", with the length of 3. Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.",
        "type": "official"
      }
    ],
    "approach": "Sliding Window with HashSet: Maintain a dynamic window s[left..right] and a HashSet<Character> storing all characters currently in the window. As right advances from 0 to s.length() - 1, read ch = s.charAt(right). While set.contains(ch), remove s.charAt(left) from the set and increment left++ until the duplicate is evicted. Then add ch to the set and update maxLength = Math.max(maxLength, right - left + 1). Because both left and right only move forward, this runs in amortized O(n) time.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Window & Set",
        "description": "Set left = 0, maxLength = 0, and allocate an empty HashSet<Character> to track window characters.",
        "stateSnapshot": "left = 0, maxLength = 0, set = {}",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Shrink Window on Duplicate Conflict",
        "description": "While set.contains(s.charAt(right)): remove s.charAt(left) from set and advance left++ until the conflict is resolved.",
        "stateSnapshot": "while (set.contains(ch)) { set.remove(s[left++]); }",
        "highlight": "Evict"
      },
      {
        "step": 3,
        "title": "Expand Window & Update Max",
        "description": "Add s.charAt(right) to set, and update maxLength = Math.max(maxLength, right - left + 1).",
        "stateSnapshot": "set.add(ch); maxLength = max(maxLength, right - left + 1)",
        "highlight": "Expand"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each character is visited by right once and left at most once, and added/removed from the HashSet at most once.",
    "spaceComplexity": "O(min(n, |Σ|))",
    "spaceComplexityExplanation": "The HashSet stores at most min(n, |Σ|) distinct characters where Σ is the character alphabet.",
    "visualizerUrl": "/visualizers/longest_substring_without_repeating_characters_visualizer.html",
    "addedDate": "2026-11-20",
    "keyObservations": [
      "Contiguous substring constraint makes this ideal for a two-pointer sliding window where right expands and left contracts.",
      "Using a HashSet guarantees O(1) membership checks to immediately catch duplicate characters.",
      "Although there is a nested while loop, each character enters and exits the set at most once, maintaining linear O(n) runtime."
    ],
    "importantPattern": "Elastic Sliding Window with Dynamic Set Contraction",
    "commonMistakes": [
      "Confusing substrings (must be contiguous) with subsequences.",
      "Forgetting to handle spaces, digits, and special characters.",
      "Failing to advance the left pointer when removing duplicates from the HashSet."
    ],
    "optimalApproach": "Sliding Window with HashSet Eviction",
    "relatedProblems": [
      {
        "number": 128,
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium"
      },
      {
        "number": 1446,
        "title": "Consecutive Characters (Longest Equal Run)",
        "difficulty": "Easy"
      },
      {
        "number": 125,
        "title": "Valid Palindrome",
        "difficulty": "Easy"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 567,
        "title": "Permutation in String",
        "difficulty": "Medium"
      },
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 239,
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 340,
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "Medium"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      },
      {
        "number": 930,
        "title": "Binary Subarrays With Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "id": "min-stack",
    "number": 155,
    "title": "Min Stack (Dual Stack O(1) Minimum)",
    "slug": "min-stack",
    "difficulty": "Medium",
    "categories": [
      "Stacks"
    ],
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).",
    "inputFormat": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]",
    "outputFormat": "[null,null,null,null,-3,null,0,-2]",
    "constraints": [
      "Methods called up to 3 * 10^4 times"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "push(-2), push(0), push(-3), getMin() -> -3, pop(), top() -> 0, getMin() -> -2",
        "output": "-3, 0, -2",
        "explanation": "O(1) min extraction.",
        "type": "official"
      }
    ],
    "approach": "Dual Stack technique: Maintain primary stack for values and secondary minStack for prefix minimums. Every push pushes Math.min(val, minStack.peek()), and pop() pops both stacks in O(1) time.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Push Operation",
        "description": "stack.push(val); minStack.push(minStack.isEmpty() ? val : Math.min(val, minStack.peek())).",
        "stateSnapshot": "minStack keeps track of minimum at each depth",
        "highlight": "Push"
      },
      {
        "step": 2,
        "title": "Pop & GetMin in O(1)",
        "description": "pop() pops both stack and minStack; getMin() returns minStack.peek() in O(1).",
        "stateSnapshot": "return minStack.peek()",
        "highlight": "O(1) Min"
      }
    ],
    "timeComplexity": "O(1)",
    "timeComplexityExplanation": "All operations push, pop, top, getMin run in constant O(1) time.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Dual stacks each hold n elements.",
    "visualizerUrl": "/visualizers/minstack_dual_stack_visualizer.html",
    "addedDate": "2026-11-25",
    "keyObservations": [
      "Pairing each value with the minimum seen up to that level enables instant rollback on pop."
    ],
    "importantPattern": "Dual Stack State Snapshot",
    "commonMistakes": [
      "Scanning stack linearly for minimum (O(n) instead of O(1))."
    ],
    "optimalApproach": "Dual Stack with Parallel Minimum Tracking",
    "relatedProblems": [
      {
        "number": 20,
        "title": "Valid Parentheses (Balanced Stack)",
        "difficulty": "Easy"
      },
      {
        "number": 150,
        "title": "Evaluate Reverse Polish Notation",
        "difficulty": "Medium"
      },
      {
        "number": 496,
        "title": "Next Greater Element I",
        "difficulty": "Easy"
      },
      {
        "number": 232,
        "title": "Implement Queue using Stacks",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/min-stack/"
  },
  {
    "id": "same-frequencies-hashmap",
    "number": 1941,
    "title": "Check if All Characters Have Equal Number of Occurrences",
    "slug": "check-if-all-characters-have-equal-number-of-occurrences",
    "difficulty": "Easy",
    "categories": [
      "Strings",
      "Hashing"
    ],
    "description": "Given a string s, return true if all characters that appear in s have the same number of occurrences, and false otherwise.",
    "inputFormat": "s = string",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "1 <= s.length <= 1000"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"abacbc\"",
        "output": "true",
        "explanation": "Every character appears 2 times.",
        "type": "official"
      }
    ],
    "approach": "Count character frequencies with HashMap. Convert frequencies into a Set. If set.size === 1, return true.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Frequency Count",
        "description": "Count each character using map.",
        "stateSnapshot": "freq = {a:2, b:2, c:2}",
        "highlight": "Count"
      },
      {
        "step": 2,
        "title": "Uniqueness Check",
        "description": "new Set(Object.values(freq)).size === 1.",
        "stateSnapshot": "Set([2]).size === 1 -> true",
        "highlight": "Verify"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass to build frequency map.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "At most 26 lowercase English characters.",
    "visualizerUrl": "/visualizers/same_frequencies_hashmap_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "A Set of map values having size 1 implies all frequencies are identical."
    ],
    "importantPattern": "Frequency Homogeneity via Set",
    "commonMistakes": [
      "Checking empty strings."
    ],
    "optimalApproach": "Frequency Hash Map + Set Length Check",
    "relatedProblems": [
      {
        "number": 242,
        "title": "Valid Anagram",
        "difficulty": "Easy"
      },
      {
        "number": 49,
        "title": "Group Anagrams",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/"
  },
  {
    "id": "middle-of-the-linked-list",
    "number": 876,
    "title": "Middle of the Linked List",
    "slug": "middle-of-the-linked-list",
    "difficulty": "Easy",
    "categories": [
      "Linked Lists",
      "Two Pointers"
    ],
    "description": "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    "inputFormat": "head = ListNode",
    "outputFormat": "ListNode",
    "constraints": [
      "1 <= nodes <= 100"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "head = [1,2,3,4,5]",
        "output": "[3,4,5]",
        "explanation": "Middle node is 3.",
        "type": "official"
      }
    ],
    "approach": "Fast and slow pointer: slow advances 1 node, fast advances 2 nodes. When fast reaches end, slow is at middle.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Init Pointers",
        "description": "slow = head, fast = head.",
        "stateSnapshot": "slow = 1, fast = 1",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Advance Pointers",
        "description": "slow = slow.next, fast = fast.next.next.",
        "stateSnapshot": "slow at middle when fast at end",
        "highlight": "Traverse"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass traversal.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Two pointers only.",
    "visualizerUrl": "/visualizers/middle_of_the_linked_list_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Fast travels at 2x speed, leaving slow at exactly 0.5x when fast finishes."
    ],
    "importantPattern": "2x Fast-Slow Pointer Stride",
    "commonMistakes": [
      "Not checking fast && fast.next."
    ],
    "optimalApproach": "Tortoise and Hare Midpoint Detection",
    "relatedProblems": [
      {
        "number": 141,
        "title": "Linked List Cycle (Floyd's Cycle Detection)",
        "difficulty": "Easy"
      },
      {
        "number": 83,
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/"
  },
  {
    "id": "remove-duplicates-linked-list",
    "number": 83,
    "title": "Remove Duplicates from Sorted List",
    "slug": "remove-duplicates-from-sorted-list",
    "difficulty": "Easy",
    "categories": [
      "Linked Lists"
    ],
    "description": "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
    "inputFormat": "head = ListNode",
    "outputFormat": "ListNode",
    "constraints": [
      "0 <= nodes <= 300"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "head = [1,1,2]",
        "output": "[1,2]",
        "explanation": "Duplicate 1 removed.",
        "type": "official"
      }
    ],
    "approach": "Single pointer curr: if curr.val === curr.next.val, bypass curr.next = curr.next.next. Else curr = curr.next.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Check Next Node",
        "description": "Compare curr.val with curr.next.val.",
        "stateSnapshot": "curr.val === curr.next.val?",
        "highlight": "Compare"
      },
      {
        "step": 2,
        "title": "Bypass Duplicate",
        "description": "curr.next = curr.next.next.",
        "stateSnapshot": "skip duplicate node",
        "highlight": "Bypass"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass visiting each node once.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "In-place pointer redirection.",
    "visualizerUrl": "/visualizers/remove_duplicates_linked_list_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Because list is sorted, duplicates are strictly consecutive."
    ],
    "importantPattern": "Sequential Pointer Relinking",
    "commonMistakes": [
      "Moving curr forward after deleting a duplicate (misses triplicates)."
    ],
    "optimalApproach": "Single-Pass In-Place Bypass",
    "relatedProblems": [
      {
        "number": 876,
        "title": "Middle of the Linked List",
        "difficulty": "Easy"
      },
      {
        "number": 141,
        "title": "Linked List Cycle (Floyd's Cycle Detection)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
  },
  {
    "id": "queue-using-two-stacks",
    "number": 232,
    "title": "Implement Queue using Stacks",
    "slug": "implement-queue-using-stacks",
    "difficulty": "Easy",
    "categories": [
      "Stacks",
      "Queues"
    ],
    "description": "Implement a first-in-first-out (FIFO) queue using only two standard LIFO stacks.",
    "inputFormat": "[\"MyQueue\",\"push\",\"push\",\"peek\",\"pop\",\"empty\"]",
    "outputFormat": "[null,null,null,1,1,false]",
    "constraints": [
      "Up to 100 calls to push, pop, peek, empty"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "push(1), push(2), peek() -> 1, pop() -> 1, empty() -> false",
        "output": "1, 1, false",
        "explanation": "FIFO behavior.",
        "type": "official"
      }
    ],
    "approach": "Dual Stack: inStack for push, outStack for pop/peek. When outStack is empty, pop everything from inStack to outStack to reverse order.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Push to inStack",
        "description": "inStack.push(x).",
        "stateSnapshot": "inStack.push(x)",
        "highlight": "Push"
      },
      {
        "step": 2,
        "title": "Lazy Transfer",
        "description": "If outStack empty, transfer inStack to outStack.",
        "stateSnapshot": "outStack.push(inStack.pop())",
        "highlight": "Transfer"
      }
    ],
    "timeComplexity": "O(1) Amortized",
    "timeComplexityExplanation": "Each element moved at most twice across stacks.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Total capacity holds n items.",
    "visualizerUrl": "/visualizers/queue_using_two_stacks_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Reversing order twice produces original FIFO ordering."
    ],
    "importantPattern": "Lazy Amortized Reversal",
    "commonMistakes": [
      "Transferring elements back and forth on every operation."
    ],
    "optimalApproach": "Dual Stack Amortized O(1)",
    "relatedProblems": [
      {
        "number": 155,
        "title": "Min Stack (Dual Stack O(1) Minimum)",
        "difficulty": "Medium"
      },
      {
        "number": 20,
        "title": "Valid Parentheses (Balanced Stack)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/implement-queue-using-stacks/"
  },
  {
    "id": "next-greater-element",
    "number": 496,
    "title": "Next Greater Element I",
    "slug": "next-greater-element-i",
    "difficulty": "Easy",
    "categories": [
      "Stacks",
      "Arrays"
    ],
    "description": "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.",
    "inputFormat": "nums1 = [int], nums2 = [int]",
    "outputFormat": "[int]",
    "constraints": [
      "1 <= nums1.length <= nums2.length <= 1000"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums1 = [4,1,2], nums2 = [1,3,4,2]",
        "output": "[-1,3,-1]",
        "explanation": "Next greater for 4 is none (-1), 1 is 3, 2 is none (-1).",
        "type": "official"
      }
    ],
    "approach": "Monotonic Decreasing Stack: Iterate nums2. While stack has smaller element than current, map[stack.pop()] = current. Then answer nums1 queries in O(1).",
    "flowSteps": [
      {
        "step": 1,
        "title": "Monotonic Stack",
        "description": "While stack.top() < x, map[stack.pop()] = x.",
        "stateSnapshot": "resolves next greater for smaller elements",
        "highlight": "Resolve"
      },
      {
        "step": 2,
        "title": "Query Map",
        "description": "For each x in nums1, query map[x] ?? -1.",
        "stateSnapshot": "result.push(map[x] ?? -1)",
        "highlight": "Query"
      }
    ],
    "timeComplexity": "O(n + m)",
    "timeComplexityExplanation": "Each element pushed and popped once.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Stack and map store up to n elements.",
    "visualizerUrl": "/visualizers/next_greater_element_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "A monotonic decreasing stack naturally pairs elements with their first larger rightward neighbor."
    ],
    "importantPattern": "Monotonic Stack Resolution",
    "commonMistakes": [
      "Nested loops leading to O(n * m) runtime."
    ],
    "optimalApproach": "Monotonic Stack + Hash Map Lookup",
    "relatedProblems": [
      {
        "number": 739,
        "title": "Daily Temperatures",
        "difficulty": "Medium"
      },
      {
        "number": 155,
        "title": "Min Stack (Dual Stack O(1) Minimum)",
        "difficulty": "Medium"
      },
      {
        "number": 20,
        "title": "Valid Parentheses (Balanced Stack)",
        "difficulty": "Easy"
      },
      {
        "number": 239,
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/"
  },
  {
    "id": "second-largest-element",
    "number": 1796,
    "title": "Second Largest Element in Array",
    "slug": "second-largest-element",
    "difficulty": "Easy",
    "categories": [
      "Arrays"
    ],
    "description": "Given an array of integers, find the second largest distinct element without sorting the array.",
    "inputFormat": "nums = [int]",
    "outputFormat": "int",
    "constraints": [
      "2 <= nums.length <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [12, 35, 1, 10, 34, 1]",
        "output": "34",
        "explanation": "35 is largest, 34 is second largest.",
        "type": "official"
      }
    ],
    "approach": "Single pass: Track largest and secondLargest. If x > largest: secondLargest = largest, largest = x. Else if x > secondLargest and x !== largest: secondLargest = x.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Candidate Update",
        "description": "If x > largest: shift largest down to secondLargest.",
        "stateSnapshot": "secondLargest = largest; largest = x",
        "highlight": "Shift"
      },
      {
        "step": 2,
        "title": "Runner Up Update",
        "description": "Else if x > secondLargest && x !== largest: secondLargest = x.",
        "stateSnapshot": "secondLargest = x",
        "highlight": "Runner Up"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single linear pass.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Two scalar variables.",
    "visualizerUrl": "/visualizers/second_largest_playing_card_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Sorting costs O(n log n); two variables achieve optimal O(n) and O(1) space."
    ],
    "importantPattern": "Top-Two Variable Cascading",
    "commonMistakes": [
      "Not handling duplicate instances of the largest element."
    ],
    "optimalApproach": "One-Pass Two-Variable Cascade",
    "relatedProblems": [
      {
        "number": 169,
        "title": "Majority Element",
        "difficulty": "Easy"
      },
      {
        "number": 217,
        "title": "Contains Duplicate",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/second-largest-digit-in-a-string/"
  },
  {
    "id": "prefix-sum-array",
    "number": 1480,
    "title": "Running Sum of 1d Array (Prefix Sum)",
    "slug": "running-sum-of-1d-array",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Prefix Sum"
    ],
    "description": "Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.",
    "inputFormat": "nums = [int]",
    "outputFormat": "[int]",
    "constraints": [
      "1 <= nums.length <= 1000"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1,2,3,4]",
        "output": "[1,3,6,10]",
        "explanation": "Running sum is 1, 1+2, 1+2+3, 1+2+3+4.",
        "type": "official"
      }
    ],
    "approach": "In-place accumulation: for i = 1 to n - 1: nums[i] += nums[i - 1].",
    "flowSteps": [
      {
        "step": 1,
        "title": "In-Place Accumulation",
        "description": "Add previous running sum to current value.",
        "stateSnapshot": "nums[i] += nums[i-1]",
        "highlight": "Accumulate"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass of length n.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "In-place modification.",
    "visualizerUrl": "/visualizers/prefix_sum_array_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Prefix sums enable O(1) range sum queries range(i, j) = prefix[j] - prefix[i-1]."
    ],
    "importantPattern": "Prefix Sum Array",
    "commonMistakes": [
      "Recomputing sums repeatedly in O(n^2)."
    ],
    "optimalApproach": "In-Place Running Sum Accumulation",
    "relatedProblems": [
      {
        "number": 724,
        "title": "Find Pivot Index (Balanced Split Array)",
        "difficulty": "Easy"
      },
      {
        "number": 238,
        "title": "Product of Array Except Self",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/running-sum-of-1d-array/"
  },
  {
    "id": "first-repeated-element",
    "number": 2351,
    "title": "First Letter to Appear Twice (First Repeated Element)",
    "slug": "first-letter-to-appear-twice",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Hashing"
    ],
    "description": "Given a string or array, return the first element to appear twice in left-to-right order.",
    "inputFormat": "s = string or nums = [int]",
    "outputFormat": "character or int",
    "constraints": [
      "1 <= length <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"abccbaacz\"",
        "output": "'c'",
        "explanation": "'c' is the first character to appear twice.",
        "type": "official"
      }
    ],
    "approach": "Maintain a visited HashSet. The very first item x encountered where seen.has(x) is true is the answer.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Inspect & Check",
        "description": "seen.has(x) ? return x : seen.add(x).",
        "stateSnapshot": "first duplicate hit",
        "highlight": "Check"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Terminates on first repeat.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Set stores visited unique items.",
    "visualizerUrl": "/visualizers/first_repeated_element_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Checking set containment sequentially guarantees the first repeat encountered is earliest in time."
    ],
    "importantPattern": "Early-Exit HashSet Containment",
    "commonMistakes": [
      "Returning the element with highest frequency instead of earliest second occurrence."
    ],
    "optimalApproach": "Set with Early Return",
    "relatedProblems": [
      {
        "number": 217,
        "title": "Contains Duplicate",
        "difficulty": "Easy"
      },
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/first-letter-to-appear-twice/"
  },
  {
    "id": "valid-parentheses",
    "number": 20,
    "title": "Valid Parentheses (Balanced Stack)",
    "slug": "valid-parentheses",
    "difficulty": "Easy",
    "categories": [
      "Stacks",
      "Strings"
    ],
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "inputFormat": "s = string",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "1 <= s.length <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "All matching.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"(]\"",
        "output": "false",
        "explanation": "Mismatched types.",
        "type": "official"
      }
    ],
    "approach": "LIFO Stack: Push each opening bracket ('(', '{', '[') onto the stack. When a closing bracket is encountered, check that the stack is not empty, pop the top opening bracket, and verify that the types match.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Push Opening Bracket",
        "description": "If ch is '(', '{', or '[', push ch onto the LIFO stack.",
        "stateSnapshot": "stack.push(ch)",
        "highlight": "Push"
      },
      {
        "step": 2,
        "title": "Guard & Pop Top",
        "description": "If ch is a closing bracket and stack.isEmpty(), return false; otherwise pop char top = stack.pop().",
        "stateSnapshot": "char top = stack.pop()",
        "highlight": "Pop"
      },
      {
        "step": 3,
        "title": "Verify Pair & Empty End",
        "description": "Check that top matches ch's opening type; at the end of the string, return stack.isEmpty().",
        "stateSnapshot": "return stack.isEmpty()",
        "highlight": "Validate"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass of length n.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Stack holds up to n characters.",
    "visualizerUrl": "/visualizers/balanced_parentheses_stack_visualizer.html",
    "addedDate": "2026-11-25",
    "keyObservations": [
      "Last opened bracket must be the first closed bracket (LIFO)."
    ],
    "importantPattern": "LIFO Matching Stack",
    "commonMistakes": [
      "Forgetting to check if stack is empty at the end."
    ],
    "optimalApproach": "Stack Matching",
    "relatedProblems": [
      {
        "number": 155,
        "title": "Min Stack (Dual Stack O(1) Minimum)",
        "difficulty": "Medium"
      },
      {
        "number": 150,
        "title": "Evaluate Reverse Polish Notation",
        "difficulty": "Medium"
      },
      {
        "number": 232,
        "title": "Implement Queue using Stacks",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    "id": "longest-equal-run",
    "number": 1446,
    "title": "Consecutive Characters (Longest Equal Run)",
    "slug": "consecutive-characters",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Strings"
    ],
    "description": "The power of the string is the maximum length of a non-empty substring that contains only one unique character. Given string s, return its power.",
    "inputFormat": "s = string",
    "outputFormat": "int",
    "constraints": [
      "1 <= s.length <= 500"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"leetcode\"",
        "output": "2",
        "explanation": "\"ee\" has length 2.",
        "type": "official"
      }
    ],
    "approach": "Single pass tracking currentRun and maxRun. If s[i] === s[i-1], currentRun++; else currentRun = 1.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Adjacent Match",
        "description": "Compare s[i] with s[i-1].",
        "stateSnapshot": "s[i] === s[i-1] ? currentRun++ : currentRun = 1",
        "highlight": "Run"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Two scalar counters.",
    "visualizerUrl": "/visualizers/longest_equal_run_playing_card_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Resetting the running counter on character change preserves contiguous runs."
    ],
    "importantPattern": "Consecutive Adjacent Streak",
    "commonMistakes": [
      "Not updating maxRun on string boundary."
    ],
    "optimalApproach": "Running Streak Counter",
    "relatedProblems": [
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/consecutive-characters/"
  },
  {
    "id": "rotate-array",
    "number": 189,
    "title": "Rotate Array",
    "slug": "rotate-array",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Two Pointers"
    ],
    "description": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    "inputFormat": "nums = [int], k = int",
    "outputFormat": "void (in-place)",
    "constraints": [
      "1 <= nums.length <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]",
        "explanation": "Rotated by 3 steps.",
        "type": "official"
      }
    ],
    "approach": "Triple Reverse: k = k % n. Reverse entire array. Reverse first k elements. Reverse remaining n - k elements.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Reverse All",
        "description": "reverse(0, n - 1).",
        "stateSnapshot": "[7,6,5,4,3,2,1]",
        "highlight": "Full Reverse"
      },
      {
        "step": 2,
        "title": "Reverse Prefix",
        "description": "reverse(0, k - 1).",
        "stateSnapshot": "[5,6,7,4,3,2,1]",
        "highlight": "Prefix"
      },
      {
        "step": 3,
        "title": "Reverse Suffix",
        "description": "reverse(k, n - 1).",
        "stateSnapshot": "[5,6,7,1,2,3,4]",
        "highlight": "Suffix"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each element reversed twice in linear time.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "In-place two-pointer swap.",
    "visualizerUrl": "/visualizers/array_rotation_playing_card_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Three simple reversals achieve cyclic rotation without allocating any extra buffer."
    ],
    "importantPattern": "Triple Reversal Cyclic Shift",
    "commonMistakes": [
      "Forgetting k = k % n when k >= nums.length."
    ],
    "optimalApproach": "In-Place Triple Reversal",
    "relatedProblems": [
      {
        "number": 238,
        "title": "Product of Array Except Self",
        "difficulty": "Medium"
      },
      {
        "number": 31,
        "title": "Next Permutation",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/rotate-array/"
  },
  {
    "id": "minimum-arrows-to-burst-balloons",
    "number": 452,
    "title": "Minimum Number of Arrows to Burst Balloons",
    "slug": "minimum-number-of-arrows-to-burst-balloons",
    "difficulty": "Medium",
    "categories": [
      "Greedy",
      "Sorting",
      "Arrays"
    ],
    "description": "Find the minimum number of arrows that must be shot to burst all balloons given their horizontal diameter intervals [xstart, xend].",
    "inputFormat": "points = [[int, int]]",
    "outputFormat": "int",
    "constraints": [
      "1 <= points.length <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "points = [[10,16],[2,8],[1,6],[7,12]]",
        "output": "2",
        "explanation": "Arrows at x = 6 and x = 12.",
        "type": "official"
      }
    ],
    "approach": "Greedy Interval End: Sort by xend ascending. If current xstart > lastArrowPos, shoot a new arrow at current xend.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Sort by End Point",
        "description": "Sort balloons by xend ascending.",
        "stateSnapshot": "points.sort((a,b) => a[1] - b[1])",
        "highlight": "Sort"
      },
      {
        "step": 2,
        "title": "Greedy Arrow Placement",
        "description": "Shoot arrow at earliest xend to burst overlapping intervals.",
        "stateSnapshot": "arrows++, lastArrow = balloon.end",
        "highlight": "Arrow"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "Sorting intervals dominates.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "In-place sorting.",
    "visualizerUrl": "/visualizers/minimum_arrows_to_burst_balloons_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Placing an arrow at the earliest balloon end maximizes the chance of piercing subsequent overlapping balloons."
    ],
    "importantPattern": "Greedy Interval Piercing",
    "commonMistakes": [
      "Integer overflow when using subtraction a[1] - b[1] instead of comparison."
    ],
    "optimalApproach": "Earliest End Coordinate Greedy Selection",
    "relatedProblems": [
      {
        "number": 252,
        "title": "Max Meetings in One Room",
        "difficulty": "Easy"
      },
      {
        "number": 55,
        "title": "Jump Game",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
  },
  {
    "id": "jump-game",
    "number": 55,
    "title": "Jump Game",
    "slug": "jump-game",
    "difficulty": "Medium",
    "categories": [
      "Greedy",
      "Dynamic Programming",
      "Arrays"
    ],
    "description": "You are given an integer array nums. You are initially positioned at index 0. Return true if you can reach the last index.",
    "inputFormat": "nums = [int]",
    "outputFormat": "boolean (true | false)",
    "constraints": [
      "1 <= nums.length <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": "Jump 1 step from 0 to 1, then 3 steps to last index.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [3,2,1,0,4]",
        "output": "false",
        "explanation": "Always get stuck at index 3 with 0 jump.",
        "type": "official"
      }
    ],
    "approach": "Greedy Max Reachable: Maintain maxReach. For each i <= maxReach, update maxReach = max(maxReach, i + nums[i]). If maxReach >= n - 1, return true.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Track Horizon",
        "description": "maxReach = max(maxReach, i + nums[i]).",
        "stateSnapshot": "maxReach updated at each step",
        "highlight": "Horizon"
      },
      {
        "step": 2,
        "title": "Check Stagnation",
        "description": "If i > maxReach, cannot proceed.",
        "stateSnapshot": "return false if stuck",
        "highlight": "Check"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single pass.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Only maxReach variable.",
    "visualizerUrl": "/visualizers/jump_game_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "At every step, extending the furthest reachable index guarantees optimal greedy progression."
    ],
    "importantPattern": "Greedy Reachable Horizon",
    "commonMistakes": [
      "Using exponential recursion without memoization."
    ],
    "optimalApproach": "Greedy Horizon Tracking",
    "relatedProblems": [
      {
        "number": 452,
        "title": "Minimum Number of Arrows to Burst Balloons",
        "difficulty": "Medium"
      },
      {
        "number": 53,
        "title": "Maximum Subarray (Max Inventory Increase)",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/jump-game/"
  },
  {
    "id": "greedy-coin-change",
    "number": 322,
    "title": "Greedy Coin Change (Standard Denominations)",
    "slug": "coin-change",
    "difficulty": "Medium",
    "categories": [
      "Greedy",
      "Dynamic Programming"
    ],
    "description": "Given standard coin denominations and an amount, find the minimum number of coins to make up that amount using greedy denomination selection.",
    "inputFormat": "coins = [int], amount = int",
    "outputFormat": "int",
    "constraints": [
      "1 <= amount <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "coins = [25, 10, 5, 1], amount = 63",
        "output": "6",
        "explanation": "2x25 + 1x10 + 3x1 = 6 coins.",
        "type": "official"
      }
    ],
    "approach": "Sort coins in descending order. Repeatedly take the largest coin less than or equal to remaining amount.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Pick Largest Coin",
        "description": "Take as many of largest coin as fit.",
        "stateSnapshot": "amount -= coin * count",
        "highlight": "Greedy Choice"
      }
    ],
    "timeComplexity": "O(coins.length)",
    "timeComplexityExplanation": "Iterates through coin denominations.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Constant space.",
    "visualizerUrl": "/visualizers/greedy_coin_change_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Greedy works optimally for canonical coin systems (e.g., US currency)."
    ],
    "importantPattern": "Largest-Denomination Greedy Choice",
    "commonMistakes": [
      "Assuming greedy always works for non-canonical arbitrary coin systems (which requires DP)."
    ],
    "optimalApproach": "Descending Greedy Coin Selection",
    "relatedProblems": [
      {
        "number": 1710,
        "title": "Fractional Knapsack (Greedy by Ratio)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/coin-change/"
  },
  {
    "id": "fractional-knapsack",
    "number": 1710,
    "title": "Fractional Knapsack (Greedy by Ratio)",
    "slug": "fractional-knapsack",
    "difficulty": "Medium",
    "categories": [
      "Greedy",
      "Sorting"
    ],
    "description": "Given weights and values of n items and capacity W, maximize total value in knapsack where items can be broken down into fractions.",
    "inputFormat": "values = [int], weights = [int], W = int",
    "outputFormat": "double",
    "constraints": [
      "1 <= n <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "values = [60, 100, 120], weights = [10, 20, 30], W = 50",
        "output": "240.0",
        "explanation": "Take item 1 (60), item 2 (100), and 2/3 of item 3 (80) = 240.",
        "type": "official"
      }
    ],
    "approach": "Calculate value/weight ratio for each item. Sort items descending by ratio. Greedily take whole items, then take a fraction of the final item.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Value Density Ratio",
        "description": "Sort by value/weight ratio descending.",
        "stateSnapshot": "items.sort((a,b) => (b.val/b.wt) - (a.val/a.wt))",
        "highlight": "Ratio"
      },
      {
        "step": 2,
        "title": "Greedy Pack",
        "description": "Take full items while weight fits, then take fraction.",
        "stateSnapshot": "totalValue += fraction * item.val",
        "highlight": "Pack"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "Sorting by value density ratio.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Holds items with density ratios.",
    "visualizerUrl": "/visualizers/fractional_knapsack_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Because items can be divided, taking the highest value density item is provably optimal."
    ],
    "importantPattern": "Value Density Greedy Sort",
    "commonMistakes": [
      "Confusing Fractional Knapsack (Greedy) with 0/1 Knapsack (DP)."
    ],
    "optimalApproach": "Greedy by Value-to-Weight Ratio",
    "relatedProblems": [
      {
        "number": 322,
        "title": "Greedy Coin Change (Standard Denominations)",
        "difficulty": "Medium"
      },
      {
        "number": 252,
        "title": "Max Meetings in One Room",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-units-on-a-truck/"
  },
  {
    "id": "railway-platforms",
    "number": 253,
    "title": "Minimum Railway Platforms (Interval Scheduling)",
    "slug": "minimum-platforms",
    "difficulty": "Medium",
    "categories": [
      "Greedy",
      "Sorting",
      "Arrays"
    ],
    "description": "Given arrival and departure times of trains, find the minimum number of platforms required at the railway station so that no train has to wait.",
    "inputFormat": "arr = [int], dep = [int]",
    "outputFormat": "int",
    "constraints": [
      "1 <= n <= 50000"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000]",
        "output": "3",
        "explanation": "At 9:50, 3 trains are simultaneously at the station.",
        "type": "official"
      }
    ],
    "approach": "Sort arrival and departure arrays independently. Use two pointers i (arrivals) and j (departures). If arr[i] <= dep[j], platforms++, i++; else platforms--, j++. Update maxPlatforms.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Dual Array Sort",
        "description": "Sort arrivals and departures separately.",
        "stateSnapshot": "arr.sort(), dep.sort()",
        "highlight": "Sort"
      },
      {
        "step": 2,
        "title": "Two Pointer Timeline",
        "description": "arr[i] <= dep[j] ? needed++ : needed--.",
        "stateSnapshot": "maxPlatforms = max(maxPlatforms, needed)",
        "highlight": "Timeline"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "Sorting arrays dominates.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Two pointers only.",
    "visualizerUrl": "/visualizers/railway_platforms_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Sorting arrivals and departures separately converts the problem into chronological events."
    ],
    "importantPattern": "Two-Pointer Timeline Sweep",
    "commonMistakes": [
      "Keeping arrival and departure paired together instead of chronological independent sweep."
    ],
    "optimalApproach": "Chronological Event Sweep with Two Pointers",
    "relatedProblems": [
      {
        "number": 252,
        "title": "Max Meetings in One Room",
        "difficulty": "Easy"
      },
      {
        "number": 56,
        "title": "Meeting Rooms (Interval Overlap)",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/"
  },
  {
    "id": "reverse-pairs",
    "number": 493,
    "title": "Reverse Pairs",
    "slug": "reverse-pairs",
    "difficulty": "Hard",
    "categories": [
      "Arrays",
      "Sorting",
      "Two Pointers"
    ],
    "description": "Given an integer array nums, return the number of reverse pairs in the array.\n\nA reverse pair is defined as a pair (i, j) such that:\n• 0 <= i < j < nums.length and\n• nums[i] > 2 * nums[j]",
    "inputFormat": "nums = [int]",
    "outputFormat": "int (count of reverse pairs)",
    "constraints": [
      "1 <= nums.length <= 5 * 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 3, 2, 3, 1]",
        "output": "2",
        "explanation": "The reverse pairs are: (1, 4) since nums[1] = 3 > 2 * nums[4] = 2; and (3, 4) since nums[3] = 3 > 2 * nums[4] = 2.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [2, 4, 3, 5, 1]",
        "output": "3",
        "explanation": "The reverse pairs are: (1, 4) where 4 > 2*1; (2, 4) where 3 > 2*1; and (3, 4) where 5 > 2*1.",
        "type": "official"
      }
    ],
    "approach": "Divide and conquer using modified Merge Sort. Before merging two sorted halves [low..mid] and [mid+1..high], count qualifying pairs using a two-pointer scan in O(high - low) linear time, then merge the two sorted halves into a temporary buffer.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Divide Subarrays",
        "description": "Recursively split nums into left [low..mid] and right [mid+1..high] until base case (low >= high).",
        "stateSnapshot": "mid = low + (high - low) / 2",
        "highlight": "Divide"
      },
      {
        "step": 2,
        "title": "Monotonic Two-Pointer Scan",
        "description": "For each left element, advance right pointer while nums[left] > 2L * nums[right]. Accumulate (right - (mid + 1)).",
        "stateSnapshot": "count += right - (mid + 1)",
        "highlight": "Count"
      },
      {
        "step": 3,
        "title": "Merge Sorted Halves",
        "description": "Standard two-pointer merge into temp[] buffer and copy back to maintain sorted order for higher levels.",
        "stateSnapshot": "merge(nums, temp, low, mid, high)",
        "highlight": "Merge"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "O(log n) recursion tree depth with O(n) two-pointer pair counting and merging at each level.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "One auxiliary array temp[] of size n for merging, plus O(log n) call stack.",
    "visualizerUrl": "/visualizers/reverse_pairs_visualizer.html",
    "addedDate": "2026-11-09",
    "keyObservations": [
      "Sorting the halves allows the right pointer to advance monotonically without resetting, keeping countPairs strictly linear O(n).",
      "Always cast nums[left] and nums[right] to 64-bit long (2L * nums[right]) to prevent integer overflow."
    ],
    "importantPattern": "Modified Merge Sort (Divide & Conquer with Monotonic Two-Pointer Counting)",
    "commonMistakes": [
      "32-bit signed integer overflow when multiplying nums[j] by 2.",
      "Resetting the right pointer to mid + 1 for each left element instead of exploiting sorted monotonicity."
    ],
    "optimalApproach": "Modified Merge Sort with Two Pointers",
    "relatedProblems": [
      {
        "number": 189,
        "title": "Rotate Array",
        "difficulty": "Medium"
      },
      {
        "number": 1796,
        "title": "Second Largest Element in Array",
        "difficulty": "Easy"
      },
      {
        "number": 453,
        "title": "Minimum Moves to Equal Array Elements",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/reverse-pairs/"
  },
  {
    "id": "maximum-size-subarray-sum-equals-k",
    "number": 325,
    "title": "Maximum Size Subarray Sum Equals K",
    "slug": "maximum-size-subarray-sum-equals-k",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Hashing",
      "Prefix Sum"
    ],
    "description": "Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there is not one, return 0 instead.",
    "inputFormat": "nums = [int], k = int",
    "outputFormat": "int (maximum subarray length)",
    "constraints": [
      "1 <= nums.length <= 2 * 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "-10^9 <= k <= 10^9"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, -1, 5, -2, 3], k = 3",
        "output": "4",
        "explanation": "The subarray [1, -1, 5, -2] sums to 3 and has the maximum length 4.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [-2, -1, 2, 1], k = 1",
        "output": "2",
        "explanation": "The subarray [-1, 2] sums to 1 and has the maximum length 2.",
        "type": "official"
      }
    ],
    "approach": "Prefix Sum + Hash Table: Keep running sum and store the earliest index of each prefix sum. If running sum equals k, length is i + 1. If (running sum - k) exists in the map at index j, the subarray from j + 1 to i sums to k with length i - j. Never overwrite existing map entries to preserve the earliest index and maximize length.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Prefix Map",
        "description": "Create an empty map to record prefixSum -> earliestIndex, and set maxLength = 0.",
        "stateSnapshot": "seen = {}, prefixSum = 0, maxLen = 0",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Accumulate & Check Complement",
        "description": "At each element nums[i], prefixSum += nums[i]. Check if prefixSum == k (len = i + 1) or if (prefixSum - k) exists in seen.",
        "stateSnapshot": "complement = prefixSum - k",
        "highlight": "Check"
      },
      {
        "step": 3,
        "title": "Store Earliest Occurrence",
        "description": "If prefixSum is not yet in seen, insert seen[prefixSum] = i. If already present, do not overwrite to keep maximum subarray span.",
        "stateSnapshot": "seen.has(prefixSum) ? keep : set(i)",
        "highlight": "Update"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single linear scan through the array with O(1) hash map operations.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Stores at most n distinct prefix sums in the hash table.",
    "visualizerUrl": "/visualizers/maximum_size_subarray_sum_equals_k.html",
    "addedDate": "2026-11-10",
    "keyObservations": [
      "Subarray sum nums[j+1..i] = prefix[i] - prefix[j]. Thus prefix[j] = prefix[i] - k.",
      "Only save the earliest index where each prefix sum appears to maximize the span (i - j).",
      "Handling negative numbers prevents standard two-pointer sliding window, making prefix sum + hash map the optimal approach."
    ],
    "importantPattern": "Prefix Sum with Earliest Index Hash Map",
    "commonMistakes": [
      "Overwriting the index of an already recorded prefix sum, which shrinks subarray length.",
      "Trying to use a two-pointer sliding window when negative numbers are present."
    ],
    "optimalApproach": "Prefix Sum + Earliest-Index Hash Map",
    "relatedProblems": [
      {
        "number": 1480,
        "title": "Running Sum of 1d Array (Prefix Sum)",
        "difficulty": "Easy"
      },
      {
        "number": 724,
        "title": "Find Pivot Index (Balanced Split Array)",
        "difficulty": "Easy"
      },
      {
        "number": 53,
        "title": "Maximum Subarray (Max Inventory Increase)",
        "difficulty": "Medium"
      },
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/"
  },
  {
    "id": "subarray-sum-equals-k",
    "number": 560,
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Hashing",
      "Prefix Sum"
    ],
    "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    "inputFormat": "nums = [int], k = int",
    "outputFormat": "int (total count of subarrays)",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000",
      "-10^7 <= k <= 10^7"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 1, 1], k = 2",
        "output": "2",
        "explanation": "Two subarrays sum to 2: [nums[0], nums[1]] and [nums[1], nums[2]].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [1, 2, 3], k = 3",
        "output": "2",
        "explanation": "Two subarrays sum to 3: [nums[0], nums[1]] = 1+2=3, and [nums[2]] = 3.",
        "type": "official"
      }
    ],
    "approach": "Prefix Sum + Frequency Hash Map: Maintain a running sum prefixSum and a map recording frequencies of previously seen prefix sums (initialized with { 0: 1 }). For each number, prefixSum += num. If (prefixSum - k) exists in the map, add its frequency count to the result. Then increment the frequency of prefixSum in the map.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Map with Base Offset",
        "description": "Initialize prefixCount = { 0: 1 } to account for subarrays starting at index 0 whose sum directly equals k. Set prefixSum = 0 and totalCount = 0.",
        "stateSnapshot": "prefixCount = { 0: 1 }, prefixSum = 0, count = 0",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Add & Query Target Complement",
        "description": "At each element nums[i], prefixSum += nums[i]. Check if complement = (prefixSum - k) exists in prefixCount.",
        "stateSnapshot": "complement = prefixSum - k",
        "highlight": "Query"
      },
      {
        "step": 3,
        "title": "Accumulate & Record Frequency",
        "description": "If complement is found, add prefixCount[complement] to totalCount. Then increment prefixCount[prefixSum] by 1.",
        "stateSnapshot": "totalCount += count[comp], count[prefixSum]++",
        "highlight": "Update"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single linear traversal through the array with O(1) average-time hash map lookups and updates.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "The hash map stores at most n + 1 distinct prefix sum values.",
    "visualizerUrl": "/visualizers/subarray_sum_equals_k.html",
    "addedDate": "2026-11-10",
    "keyObservations": [
      "Subarray sum between indices (j, i] equals prefixSum[i] - prefixSum[j]. Setting this to k yields prefixSum[j] = prefixSum[i] - k.",
      "Always initialize the map with { 0: 1 } to capture subarrays whose sum equals k starting from index 0.",
      "Because negative numbers can occur, prefix sums are not monotonically increasing, so a sliding window cannot be used; a hash map is required."
    ],
    "importantPattern": "Prefix Sum with Frequency Hash Map",
    "commonMistakes": [
      "Forgetting the initial base case prefixCount[0] = 1, missing subarrays that sum to k starting at index 0.",
      "Attempting two-pointer sliding window on arrays with negative numbers."
    ],
    "optimalApproach": "Single-Pass Prefix Sum with Frequency Hash Map",
    "relatedProblems": [
      {
        "number": 325,
        "title": "Maximum Size Subarray Sum Equals K",
        "difficulty": "Medium"
      },
      {
        "number": 1480,
        "title": "Running Sum of 1d Array (Prefix Sum)",
        "difficulty": "Easy"
      },
      {
        "number": 724,
        "title": "Find Pivot Index (Balanced Split Array)",
        "difficulty": "Easy"
      },
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      },
      {
        "number": 930,
        "title": "Binary Subarrays With Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
  },
  {
    "id": "3sum",
    "number": 15,
    "title": "3Sum",
    "slug": "3sum",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Two Pointers",
      "Sorting"
    ],
    "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n\nNotice that the solution set must not contain duplicate triplets.",
    "inputFormat": "nums = [int]",
    "outputFormat": "[[int, int, int]] (list of unique triplets)",
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [-1, 0, 1, 2, -1, -4]",
        "output": "[[-1, -1, 2], [-1, 0, 1]]",
        "explanation": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1, 0, 1] and [-1, -1, 2].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [0, 1, 1]",
        "output": "[]",
        "explanation": "The only possible triplet does not sum up to 0.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "nums = [0, 0, 0]",
        "output": "[[0, 0, 0]]",
        "explanation": "The only possible triplet sums up to 0.",
        "type": "official"
      }
    ],
    "approach": "Sorting + Two Pointers: First sort nums in O(n log n). Loop through nums with anchor index i. Skip duplicate anchors. For each i, set left = i + 1 and right = n - 1. Calculate sum = nums[i] + nums[left] + nums[right]. If sum == 0, record triplet, advance left, retreat right, and skip identical values on both sides. If sum < 0, advance left; if sum > 0, retreat right.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Sort Array Ascending",
        "description": "Sort nums in non-decreasing order so negative values sit on the left and positive values sit on the right.",
        "stateSnapshot": "Arrays.sort(nums)",
        "highlight": "Sort"
      },
      {
        "step": 2,
        "title": "Fix Anchor & Skip Duplicate i",
        "description": "Iterate i from 0 to n - 3. If i > 0 and nums[i] == nums[i - 1], continue to avoid duplicate triplets.",
        "stateSnapshot": "if (i > 0 && nums[i] == nums[i-1]) continue",
        "highlight": "Anchor"
      },
      {
        "step": 3,
        "title": "Converging Two-Pointer Scan",
        "description": "Set left = i + 1, right = n - 1. If sum == 0, add triplet and skip duplicates; if sum < 0, left++; if sum > 0, right--.",
        "stateSnapshot": "sum = nums[i] + nums[left] + nums[right]",
        "highlight": "Pointers"
      }
    ],
    "timeComplexity": "O(n^2)",
    "timeComplexityExplanation": "O(n log n) sorting plus O(n) anchor iterations with an O(n) two-pointer convergence scan.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "O(1) auxiliary space beyond the output array and sorting stack space.",
    "visualizerUrl": "/visualizers/three_sum_visualizer.html",
    "addedDate": "2026-11-13",
    "keyObservations": [
      "Sorting transforms 3Sum into n Two Sum (sorted) problems, reducing time complexity from O(n^3) to O(n^2).",
      "To guarantee unique triplets without a HashSet, skip duplicate elements at the anchor (i), the left pointer, and the right pointer.",
      "If nums[i] > 0, we can terminate early because the remaining sorted elements are also positive and cannot sum to 0."
    ],
    "importantPattern": "Sorting + Converging Two Pointers (Lookaround pattern)",
    "commonMistakes": [
      "Forgetting to skip duplicates after finding a match, generating identical triplets.",
      "Incrementing only left or decrementing only right upon finding a match rather than moving both."
    ],
    "optimalApproach": "Sorting + Two Pointers with 3-Level Duplicate Pruning",
    "relatedProblems": [
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      },
      {
        "number": 493,
        "title": "Reverse Pairs",
        "difficulty": "Hard"
      },
      {
        "number": 189,
        "title": "Rotate Array",
        "difficulty": "Medium"
      },
      {
        "number": 56,
        "title": "Meeting Rooms (Interval Overlap)",
        "difficulty": "Medium"
      },
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 18,
        "title": "4Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/3sum/"
  },
  {
    "id": "next-permutation",
    "number": 31,
    "title": "Next Permutation",
    "slug": "next-permutation",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Two Pointers"
    ],
    "description": "A permutation of an array of integers is an arrangement of its members into a sequence or linear order.\n\nThe next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order using the default number comparison, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).\n\nGiven an array of integers nums, find the next permutation of nums. The replacement must be in place and use only constant extra memory.",
    "inputFormat": "nums = [int]",
    "outputFormat": "void (rearrange nums in place)",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 100"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 2, 3]",
        "output": "[1, 3, 2]",
        "explanation": "The next lexicographical permutation of [1, 2, 3] is [1, 3, 2].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [3, 2, 1]",
        "output": "[1, 2, 3]",
        "explanation": "[3, 2, 1] is the largest permutation, so wrap around to the smallest [1, 2, 3].",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "nums = [1, 1, 5]",
        "output": "[1, 5, 1]",
        "explanation": "Next lexicographical permutation is [1, 5, 1].",
        "type": "official"
      }
    ],
    "approach": "Three-Step In-Place Pivot Algorithm: 1. Find pivot: scan right-to-left to find first index i where nums[i] < nums[i+1]. 2. Find successor: if pivot exists, scan right-to-left to find smallest nums[j] > nums[i] and swap nums[i] with nums[j]. 3. Reverse suffix: reverse all elements from i + 1 to end to obtain the minimal lexicographical tail.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Find Pivot Breakpoint",
        "description": "Traverse backwards from index n - 2 to find the first index i where nums[i] < nums[i+1]. If none found, the whole array is descending.",
        "stateSnapshot": "while (i >= 0 && nums[i] >= nums[i+1]) i--",
        "highlight": "Pivot"
      },
      {
        "step": 2,
        "title": "Swap with Next Greater Element",
        "description": "If pivot i >= 0, find index j from the right where nums[j] > nums[i], then swap nums[i] and nums[j].",
        "stateSnapshot": "swap(nums, i, j)",
        "highlight": "Swap"
      },
      {
        "step": 3,
        "title": "Reverse Descending Suffix",
        "description": "Reverse elements from index i + 1 through n - 1 using two pointers to convert descending suffix into smallest ascending sequence.",
        "stateSnapshot": "reverse(nums, i + 1, n - 1)",
        "highlight": "Reverse"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "At most two backwards scans of length n and one half-array reversal, strictly linear O(n).",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Mutates the input array completely in place without auxiliary data structures.",
    "visualizerUrl": "/visualizers/next_permutation_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Any suffix that is non-increasing is already at its maximum lexicographical configuration and cannot be increased.",
      "The first element from the right that drops (nums[i] < nums[i+1]) is the highest-value position that can be made larger.",
      "Reversing the descending suffix guarantees the minimal lexicographical increment after the swap."
    ],
    "importantPattern": "Lexicographic Pivot Breakpoint + Suffix Reversal",
    "commonMistakes": [
      "Forgetting to handle arrays that are already in strictly descending order (must reverse whole array).",
      "Finding the maximum element in suffix instead of the smallest element strictly greater than nums[i]."
    ],
    "optimalApproach": "Single-Pass Pivot Search with In-Place Suffix Reversal",
    "relatedProblems": [
      {
        "number": 189,
        "title": "Rotate Array",
        "difficulty": "Medium"
      },
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 75,
        "title": "Sort Colors",
        "difficulty": "Medium"
      },
      {
        "number": 493,
        "title": "Reverse Pairs",
        "difficulty": "Hard"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/next-permutation/"
  },
  {
    "id": "sort-colors",
    "number": 75,
    "title": "Sort Colors",
    "slug": "sort-colors",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Two Pointers",
      "Sorting"
    ],
    "description": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the library's sort function and in one pass with constant extra space.",
    "inputFormat": "nums = [int] containing only 0s, 1s, and 2s",
    "outputFormat": "void (rearrange nums in place)",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 300",
      "nums[i] is either 0, 1, or 2"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [2, 0, 2, 1, 1, 0]",
        "output": "[0, 0, 1, 1, 2, 2]",
        "explanation": "Zeros are partitioned to front, ones in the middle, and twos at the back.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [2, 0, 1]",
        "output": "[0, 1, 2]",
        "explanation": "Values sorted in place to red (0), white (1), and blue (2).",
        "type": "official"
      }
    ],
    "approach": "Dutch National Flag 3-Way Partitioning: Maintain three pointers: low (next slot for 0), mid (current element under inspection), and high (next slot for 2). While mid <= high: if nums[mid] == 0, swap nums[low] and nums[mid], increment low and mid; if nums[mid] == 1, increment mid; if nums[mid] == 2, swap nums[mid] and nums[high], decrement high (do not increment mid since swapped element is uninspected).",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Tri-Pointers",
        "description": "Set low = 0 (boundary of 0s), mid = 0 (current scanner), and high = n - 1 (boundary of 2s).",
        "stateSnapshot": "low = 0, mid = 0, high = n - 1",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Inspect & Route Element",
        "description": "If nums[mid] == 0: swap(low++, mid++). If nums[mid] == 1: mid++. If nums[mid] == 2: swap(mid, high--).",
        "stateSnapshot": "nums[mid] matches 0, 1, or 2",
        "highlight": "Partition"
      },
      {
        "step": 3,
        "title": "Converge & Complete",
        "description": "Continue until mid > high, partitioning array cleanly into [0...low-1] as 0s, [low...high] as 1s, and [high+1...n-1] as 2s.",
        "stateSnapshot": "mid > high -> Sorted",
        "highlight": "Finish"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single-pass algorithm where either mid increments or high decrements on each step, guaranteeing at most n operations.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Operates strictly in place using three integer pointers.",
    "visualizerUrl": "/visualizers/sort_colors_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "When swapping nums[mid] with nums[low], nums[low] is guaranteed to be 1, so mid can safely advance.",
      "When swapping nums[mid] with nums[high], the element arriving at mid from high is unknown, so mid must NOT advance until checked.",
      "Solves the 3-category sorting problem in exactly one linear pass without auxiliary counting arrays."
    ],
    "importantPattern": "Dutch National Flag 3-Way Partitioning",
    "commonMistakes": [
      "Advancing mid after swapping with high, causing uninspected elements from the back to be skipped.",
      "Using two-pass counting sort instead of the required one-pass in-place algorithm."
    ],
    "optimalApproach": "One-Pass Dutch National Flag Algorithm",
    "relatedProblems": [
      {
        "number": 31,
        "title": "Next Permutation",
        "difficulty": "Medium"
      },
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 189,
        "title": "Rotate Array",
        "difficulty": "Medium"
      },
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 88,
        "title": "Merge Sorted Array",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/sort-colors/"
  },
  {
    "id": "valid-palindrome",
    "number": 125,
    "title": "Valid Palindrome",
    "slug": "valid-palindrome",
    "difficulty": "Easy",
    "categories": [
      "Two Pointers",
      "Strings"
    ],
    "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.",
    "inputFormat": "s = string",
    "outputFormat": "boolean (true if palindrome, false otherwise)",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "s = \" \"",
        "output": "true",
        "explanation": "s is an empty string \"\" after removing non-alphanumeric characters. An empty string reads the same forward and backward.",
        "type": "official"
      }
    ],
    "approach": "In-Place Converging Two Pointers: Position left = 0 and right = s.length - 1. While left < right, skip non-alphanumeric characters at both ends. Compare Character.toLowerCase(s[left]) with Character.toLowerCase(s[right]). If unequal, return false. Otherwise increment left and decrement right. If pointers meet without mismatch, return true.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Edge Pointers",
        "description": "Initialize left = 0 at start and right = s.length - 1 at end.",
        "stateSnapshot": "left = 0, right = n - 1",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Skip Non-Alphanumeric Chars",
        "description": "Advance left while left < right and !isLetterOrDigit(s[left]). Decrement right while left < right and !isLetterOrDigit(s[right]).",
        "stateSnapshot": "Skip punctuation & spaces",
        "highlight": "Filter"
      },
      {
        "step": 3,
        "title": "Case-Insensitive Match",
        "description": "Compare toLower(s[left]) === toLower(s[right]). If mismatch, return false; otherwise left++, right--.",
        "stateSnapshot": "toLower(s[left]) === toLower(s[right])",
        "highlight": "Compare"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each character is inspected by either left or right pointer at most once, running in strictly O(n) time.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Requires no string copies, regex filtering buffers, or reversed string allocations.",
    "visualizerUrl": "/visualizers/valid_palindrome_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Pre-filtering the string with regex or building a new string requires O(n) extra heap memory; two pointers do it in O(1) space.",
      "Numbers ('0'-'9') are alphanumeric and must match identically without case conversion.",
      "An empty string or string with only non-alphanumeric characters is trivially a valid palindrome."
    ],
    "importantPattern": "Two Pointers Converging with Predicate Skip",
    "commonMistakes": [
      "Filtering out digits or treating them as invalid characters.",
      "Creating new filtered strings or using regex replacements that consume O(n) memory."
    ],
    "optimalApproach": "In-Place Two-Pointer Scan with Character Filtering",
    "relatedProblems": [
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 242,
        "title": "Valid Anagram",
        "difficulty": "Easy"
      },
      {
        "number": 1446,
        "title": "Consecutive Characters (Longest Equal Run)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/"
  },
  {
    "id": "two-sum-ii-input-array-is-sorted",
    "number": 167,
    "title": "Two Sum II - Input Array Is Sorted",
    "slug": "two-sum-ii-input-array-is-sorted",
    "difficulty": "Medium",
    "categories": [
      "Two Pointers",
      "Arrays"
    ],
    "description": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.\n\nReturn the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.\n\nThe tests are generated such that there is exactly one solution. You may not use the same element twice.\n\nYour solution must use only constant extra space.",
    "inputFormat": "numbers = [int] (sorted non-decreasing), target = int",
    "outputFormat": "[int, int] (1-based indices)",
    "constraints": [
      "2 <= numbers.length <= 3 * 10^4",
      "-1000 <= numbers[i] <= 1000",
      "numbers is sorted in non-decreasing order",
      "-1000 <= target <= 1000",
      "The tests are generated such that there is exactly one solution"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "numbers = [2, 7, 11, 15], target = 9",
        "output": "[1, 2]",
        "explanation": "The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "numbers = [2, 3, 4], target = 6",
        "output": "[1, 3]",
        "explanation": "The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "numbers = [-1, 0], target = -1",
        "output": "[1, 2]",
        "explanation": "The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].",
        "type": "official"
      }
    ],
    "approach": "Two-Pointer Bilateral Convergence: Initialize left = 0 at start and right = numbers.length - 1 at end. Compute currentSum = numbers[left] + numbers[right]. If currentSum == target, return [left + 1, right + 1]. If currentSum < target, advance left to increase the sum. If currentSum > target, retreat right to decrease the sum.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Boundaries",
        "description": "Place left at index 0 and right at index n - 1.",
        "stateSnapshot": "left = 0, right = n - 1",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Evaluate Sum vs Target",
        "description": "Calculate currentSum = numbers[left] + numbers[right]. If currentSum < target: left++. If currentSum > target: right--.",
        "stateSnapshot": "currentSum = numbers[left] + numbers[right]",
        "highlight": "Evaluate"
      },
      {
        "step": 3,
        "title": "Target Found",
        "description": "When currentSum === target, return 1-based indices [left + 1, right + 1].",
        "stateSnapshot": "return [left + 1, right + 1]",
        "highlight": "Match"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each step moves either left rightward or right leftward, guaranteeing at most n pointer moves.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Operates strictly in constant auxiliary memory without hash tables.",
    "visualizerUrl": "/visualizers/two_sum_ii_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Because the array is already sorted, increasing left strictly increases the sum, and decreasing right strictly decreases the sum.",
      "The sorted property eliminates the need for hash map memory, reducing space complexity from O(n) to O(1).",
      "Problem requires 1-based index return format."
    ],
    "importantPattern": "Bilateral Converging Two Pointers on Sorted Arrays",
    "commonMistakes": [
      "Returning 0-based indices instead of the requested 1-based indices.",
      "Using a hash map when the problem strictly constrains extra space to O(1)."
    ],
    "optimalApproach": "Two-Pointer Converging Search",
    "relatedProblems": [
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      },
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 125,
        "title": "Valid Palindrome",
        "difficulty": "Easy"
      },
      {
        "number": 88,
        "title": "Merge Sorted Array",
        "difficulty": "Easy"
      },
      {
        "number": 18,
        "title": "4Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    "id": "calculate-digit-sum-of-a-string",
    "number": 2243,
    "title": "Calculate Digit Sum of a String",
    "slug": "calculate-digit-sum-of-a-string",
    "difficulty": "Easy",
    "categories": [
      "Strings",
      "Simulation"
    ],
    "description": "You are given a string s consisting of digits and an integer k.\n\nA round can be completed if the length of s is greater than k. In one round, do the following:\n1. Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.\n2. Replace each group of digits with a string representing the sum of all its digits. For example, \"346\" is replaced with 13 because 3 + 4 + 6 = 13.\n3. Merge consecutive new digit strings together, in order, to form a new string.\n\nRepeat the process until the string's length is less than or equal to k. Return s after all rounds have been completed.",
    "inputFormat": "s = string, k = int",
    "outputFormat": "string",
    "constraints": [
      "1 <= s.length <= 100",
      "2 <= k <= 100",
      "s consists of digits only"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"11111222223\", k = 3",
        "output": "\"135\"",
        "explanation": "- For round 1, divide s into groups of size 3: \"111\", \"112\", \"222\", and \"23\".\n  Replace each group with sum: 1+1+1=3, 1+1+2=4, 2+2+2=6, 2+3=5. New string: \"3465\".\n- For round 2, divide \"3465\" into groups of 3: \"346\" and \"5\".\n  Sums: 3+4+6=13, 5=5. New string: \"135\".\n- String length is 3 <= k, so process stops. Output is \"135\".",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"00000000\", k = 3",
        "output": "\"000\"",
        "explanation": "- Round 1: \"000\" -> \"0\", \"000\" -> \"0\", \"00\" -> \"0\". New string: \"000\".\n- Length is 3 <= k. Stop and return \"000\".",
        "type": "official"
      }
    ],
    "approach": "Iterative Chunk Partition & Summation: While s.length > k, construct a new StringBuilder. Step through index i by increments of k. For each window s[i .. min(i+k, s.length)], sum numeric values of chars (char - '0'), convert sum to string, and append to the builder. Update s with the merged result until length <= k.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Check Termination Condition",
        "description": "Check if s.length <= k. If so, return s immediately.",
        "stateSnapshot": "while (s.length > k)",
        "highlight": "Check"
      },
      {
        "step": 2,
        "title": "Partition into Groups of k",
        "description": "Iterate i from 0 to s.length with step k. Slice chunk s.substring(i, min(i+k, s.length)).",
        "stateSnapshot": "chunk = s.substring(i, min(i+k, n))",
        "highlight": "Chunk"
      },
      {
        "step": 3,
        "title": "Sum & Concatenate",
        "description": "Sum digits in chunk, append stringified sum to next round's StringBuilder, and repeat until s.length <= k.",
        "stateSnapshot": "nextStr.append(chunkSum)",
        "highlight": "Transform"
      }
    ],
    "timeComplexity": "O(n * log_k(n))",
    "timeComplexityExplanation": "In each round, the string shrinks roughly by a factor of k (since sum of k digits <= 9k, having at most log10(9k) digits).",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Allocates intermediate StringBuilders to hold transformed chunk sum strings during each round.",
    "visualizerUrl": "/visualizers/calculate_digit_sum_of_a_string_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "The last chunk may have fewer than k digits, but must be summed identically.",
      "The sum can produce multi-digit strings (e.g. 9+9+9 = 27), which contribute multiple characters to the next round.",
      "Because k >= 2, each round strictly shrinks the string length, guaranteeing termination."
    ],
    "importantPattern": "Chunk-Based String Reduction Simulation",
    "commonMistakes": [
      "Forgetting that the last chunk can be shorter than k digits.",
      "Assuming chunk sums are always single digits."
    ],
    "optimalApproach": "StringBuilder Chunk Slicing Simulation",
    "relatedProblems": [
      {
        "number": 1446,
        "title": "Consecutive Characters (Longest Equal Run)",
        "difficulty": "Easy"
      },
      {
        "number": 1941,
        "title": "Check if All Characters Have Equal Number of Occurrences",
        "difficulty": "Easy"
      },
      {
        "number": 125,
        "title": "Valid Palindrome",
        "difficulty": "Easy"
      },
      {
        "number": 242,
        "title": "Valid Anagram",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/calculate-digit-sum-of-a-string/"
  },
  {
    "id": "trapping-rain-water",
    "number": 42,
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water",
    "difficulty": "Hard",
    "categories": [
      "Two Pointers",
      "Arrays"
    ],
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "inputFormat": "height = [int]",
    "outputFormat": "int (total trapped water units)",
    "constraints": [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        "output": "6",
        "explanation": "The elevation map traps 6 units of rain water between peaks.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "height = [4, 2, 0, 3, 2, 5]",
        "output": "9",
        "explanation": "Between bar 4 and bar 5, a total of 9 units of water are trapped.",
        "type": "official"
      }
    ],
    "approach": "Two Pointers with Running Maxima: Place left = 0 and right = n - 1. Track leftMax and rightMax. Water trapped above index i is determined by min(leftMax, rightMax) - height[i]. If height[left] <= height[right]: if height[left] >= leftMax, update leftMax; else water += leftMax - height[left]; then left++. Otherwise: if height[right] >= rightMax, update rightMax; else water += rightMax - height[right]; then right--.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Dual Pointers & Maxima",
        "description": "Set left = 0, right = n - 1, leftMax = 0, rightMax = 0, and totalWater = 0.",
        "stateSnapshot": "left = 0, right = n - 1, leftMax = 0, rightMax = 0",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Compare Boundary Heights",
        "description": "Compare height[left] and height[right]. The smaller side is the limiting barrier that decides water depth.",
        "stateSnapshot": "height[left] <= height[right] ? Process Left : Process Right",
        "highlight": "Bottleneck"
      },
      {
        "step": 3,
        "title": "Trap Water & Advance",
        "description": "Accumulate trapped water (max(0, currentMax - height[curr])) and advance the corresponding pointer until left > right.",
        "stateSnapshot": "totalWater += max - height[i]",
        "highlight": "Accumulate"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each position in the array is visited exactly once as left and right pointers converge.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Maintains only four scalar variables (left, right, leftMax, rightMax) without prefix/suffix arrays or stacks.",
    "visualizerUrl": "/visualizers/trapping_rain_water_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Water level above any bar is strictly governed by min(maxLeft, maxRight) - height.",
      "If height[left] < height[right], we know with certainty that leftMax < rightMax (or bounded by right's height), so the water trapped at left depends only on leftMax.",
      "Reduces space complexity from O(n) (prefix/suffix arrays or monotonic stack) down to O(1)."
    ],
    "importantPattern": "Two Pointers Converging on Limiting Bottleneck",
    "commonMistakes": [
      "Using precomputed prefix-max arrays and suffix-max arrays when O(1) space is achievable.",
      "Moving both pointers inward simultaneously without verifying which side is the true limiting barrier."
    ],
    "optimalApproach": "Two-Pointer Running Maxima Convergence",
    "relatedProblems": [
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 53,
        "title": "Maximum Subarray (Max Inventory Increase)",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    "id": "container-with-most-water",
    "number": 11,
    "title": "Container With Most Water",
    "slug": "container-with-most-water",
    "difficulty": "Medium",
    "categories": [
      "Two Pointers",
      "Arrays",
      "Greedy"
    ],
    "description": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.\n\nNotice that you may not slant the container.",
    "inputFormat": "height = [int]",
    "outputFormat": "int (maximum water area)",
    "constraints": [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
        "output": "49",
        "explanation": "The vertical lines are at index 1 (height 8) and index 8 (height 7). Width = 8 - 1 = 7. Height = min(8, 7) = 7. Area = 7 * 7 = 49.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "height = [1, 1]",
        "output": "1",
        "explanation": "Width is 1, min height is 1, maximum area is 1.",
        "type": "official"
      }
    ],
    "approach": "Greedy Shrinking Two Pointers: Start with the widest possible container by setting left = 0 and right = n - 1. In each step, calculate area = (right - left) * min(height[left], height[right]) and update maxArea. Since area is limited by the shorter line, moving the taller line inward would decrease width while height cannot exceed the shorter line, guaranteeing a smaller area. Therefore, greedily advance the pointer at the shorter line.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Maximum Width",
        "description": "Start at maximum possible width: left = 0, right = n - 1, and maxArea = 0.",
        "stateSnapshot": "left = 0, right = n - 1, maxArea = 0",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Compute Area & Update Maximum",
        "description": "Calculate currentArea = (right - left) * min(height[left], height[right]). Update maxArea = max(maxArea, currentArea).",
        "stateSnapshot": "area = (right - left) * min(h[l], h[r])",
        "highlight": "Calculate"
      },
      {
        "step": 3,
        "title": "Greedily Advance Shorter Line",
        "description": "If height[left] < height[right], increment left; otherwise decrement right. Repeat until left >= right.",
        "stateSnapshot": "height[left] < height[right] ? left++ : right--",
        "highlight": "Advance"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Pointers start at opposite ends and move toward each other by 1 on each step, running in strictly O(n) time.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Requires only constant extra memory for pointer indices and area trackers.",
    "visualizerUrl": "/visualizers/container_with_most_water_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Width decreases on every single step. To find a larger area with smaller width, we MUST find taller lines.",
      "The shorter line is the limiting bottleneck; moving the taller line can never produce a larger area.",
      "Greedily discarding the shorter line prunes an entire row/column of inferior pairs in O(1) decision time."
    ],
    "importantPattern": "Two-Pointer Inward Contraction with Greedy Elimination",
    "commonMistakes": [
      "Moving both pointers inward simultaneously.",
      "Moving the pointer corresponding to the taller line, which mathematically cannot yield an area larger than the current one."
    ],
    "optimalApproach": "Greedy Two Pointers Converging on Shorter Bar",
    "relatedProblems": [
      {
        "number": 42,
        "title": "Trapping Rain Water",
        "difficulty": "Hard"
      },
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 125,
        "title": "Valid Palindrome",
        "difficulty": "Easy"
      },
      {
        "number": 121,
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    "id": "merge-sorted-array",
    "number": 88,
    "title": "Merge Sorted Array",
    "slug": "merge-sorted-array",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Two Pointers",
      "Sorting"
    ],
    "description": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.\n\nMerge nums1 and nums2 into a single array sorted in non-decreasing order.\n\nThe final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.",
    "inputFormat": "nums1 = [int], m = int, nums2 = [int], n = int",
    "outputFormat": "void (rearrange nums1 in place)",
    "constraints": [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 <= m, n <= 200",
      "1 <= m + n <= 200",
      "-10^9 <= nums1[i], nums2[j] <= 10^9"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3",
        "output": "[1, 2, 2, 3, 5, 6]",
        "explanation": "The arrays we are merging are [1, 2, 3] and [2, 5, 6]. The result of the merge is [1, 2, 2, 3, 5, 6].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums1 = [1], m = 1, nums2 = [], n = 0",
        "output": "[1]",
        "explanation": "The arrays we are merging are [1] and []. The result of the merge is [1].",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "nums1 = [0], m = 0, nums2 = [1], n = 1",
        "output": "[1]",
        "explanation": "The arrays we are merging are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no active elements in nums1.",
        "type": "official"
      }
    ],
    "approach": "Reverse Three-Pointer In-Place Merge: Initialize i = m - 1 (reading active elements of nums1), j = n - 1 (reading nums2), and write pointer k = m + n - 1 (back of nums1). Compare nums1[i] and nums2[j] and write the larger element into nums1[k], decrementing k and whichever pointer was chosen. Continue until one array is exhausted. If nums2 still has leftover elements (j >= 0), copy them into nums1[0..k]. Any remaining elements of nums1 are already in their correct sorted positions.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Dual Readers & Tail Writer",
        "description": "Set i = m - 1 (end of active nums1), j = n - 1 (end of nums2), and k = m + n - 1 (write boundary).",
        "stateSnapshot": "i = m - 1, j = n - 1, k = m + n - 1",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Reverse Convergence Comparison",
        "description": "While i >= 0 && j >= 0: if nums1[i] > nums2[j], nums1[k--] = nums1[i--]; else nums1[k--] = nums2[j--].",
        "stateSnapshot": "nums1[k] = max(nums1[i], nums2[j])",
        "highlight": "Compare"
      },
      {
        "step": 3,
        "title": "Copy Remaining nums2 Elements",
        "description": "While j >= 0: nums1[k--] = nums2[j--]. Leftover nums1 elements are already in their sorted final positions.",
        "stateSnapshot": "while (j >= 0) nums1[k--] = nums2[j--]",
        "highlight": "Cleanup"
      }
    ],
    "timeComplexity": "O(m + n)",
    "timeComplexityExplanation": "Each element from both arrays is inspected and placed into nums1 exactly once.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Operates strictly in-place inside the trailing buffer zeros of nums1 using three pointer variables.",
    "visualizerUrl": "/visualizers/merge_two_sorted_arrays_without_extra_space_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Merging forwards from index 0 would overwrite unread nums1 elements, requiring an O(m) auxiliary array.",
      "Merging backwards from index m + n - 1 guarantees k >= i at all times, making overwriting unread elements physically impossible.",
      "When j < 0, nums1[0..i] is already sorted and correctly placed, so no additional copy loop is needed for nums1."
    ],
    "importantPattern": "Reverse Three-Pointer In-Place Traversal",
    "commonMistakes": [
      "Merging from the front and clobbering unread values of nums1.",
      "Adding an unnecessary cleanup loop for nums1 when j < 0.",
      "Forgetting to handle m = 0 or n = 0 edge cases."
    ],
    "optimalApproach": "Reverse Three-Pointer In-Place Merge",
    "relatedProblems": [
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 75,
        "title": "Sort Colors",
        "difficulty": "Medium"
      },
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 31,
        "title": "Next Permutation",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/"
  },
  {
    "id": "4sum",
    "number": 18,
    "title": "4Sum",
    "slug": "4sum",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Two Pointers",
      "Sorting"
    ],
    "description": "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:\n- 0 <= a, b, c, d < n\n- a, b, c, and d are distinct.\n- nums[a] + nums[b] + nums[c] + nums[d] == target\n\nYou may return the answer in any order.",
    "inputFormat": "nums = [int], target = int",
    "outputFormat": "[[int, int, int, int]] (list of unique quadruplets)",
    "constraints": [
      "1 <= nums.length <= 200",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1, 0, -1, 0, -2, 2], target = 0",
        "output": "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
        "explanation": "The distinct quadruplets that sum up to 0 are [-2, -1, 1, 2], [-2, 0, 0, 2], and [-1, 0, 0, 1].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [2, 2, 2, 2, 2], target = 8",
        "output": "[[2, 2, 2, 2]]",
        "explanation": "There is only one unique combination of 4 elements summing to 8.",
        "type": "official"
      }
    ],
    "approach": "Sorting + Dual Anchors + Converging Two Pointers: Sort nums in O(n log n). Run two nested loops with anchors i (0 to n - 4) and j (i + 1 to n - 3), pruning duplicate elements whenever nums[i] == nums[i - 1] or nums[j] == nums[j - 1]. In the innermost loop, set left = j + 1 and right = n - 1. Compute 64-bit long sum = (long) nums[i] + nums[j] + nums[left] + nums[right]. If sum == target, record quadruplet, move left++ and right--, and skip identical values. If sum < target, advance left++; if sum > target, retreat right--.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Sort Array & Fix Dual Anchors",
        "description": "Sort nums ascending. Iterate anchor i from 0 to n-4 (skip if nums[i] == nums[i-1]). Iterate anchor j from i+1 to n-3 (skip if nums[j] == nums[j-1]).",
        "stateSnapshot": "Arrays.sort(nums); i in [0..n-4], j in [i+1..n-3]",
        "highlight": "Anchors"
      },
      {
        "step": 2,
        "title": "Bilateral Two-Pointer Convergence",
        "description": "Initialize left = j + 1 and right = n - 1. Compute 64-bit sum = (long) nums[i] + nums[j] + nums[left] + nums[right].",
        "stateSnapshot": "sum = (long) nums[i] + nums[j] + nums[left] + nums[right]",
        "highlight": "Evaluate"
      },
      {
        "step": 3,
        "title": "Match & 4-Level Duplicate Pruning",
        "description": "If sum == target, append [nums[i], nums[j], nums[left], nums[right]], then advance left, retreat right, and skip adjacent duplicate values.",
        "stateSnapshot": "result.add(...); while (left < right && nums[left] == nums[left-1]) left++",
        "highlight": "Prune"
      }
    ],
    "timeComplexity": "O(n^3)",
    "timeComplexityExplanation": "Sorting takes O(n log n). Dual nested anchor loops yield O(n^2) iterations, each running an O(n) two-pointer scan, giving strictly O(n^3) total time.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Operates purely in-place using scalar pointers without hash sets or auxiliary storage.",
    "visualizerUrl": "/visualizers/four_sum_visualizer.html",
    "addedDate": "2026-11-19",
    "keyObservations": [
      "Sorting reduces 4Sum from O(n^4) brute force down to O(n^3) by transforming the inner pair into sorted Two Sum.",
      "Guarantees unique quadruplets without a HashSet by skipping identical consecutive values at i, j, left, and right.",
      "Since elements can reach 10^9, four integers can sum up to 4 * 10^9, exceeding Java's 32-bit Integer.MAX_VALUE (2.14 * 10^9); 64-bit long casting is mandatory."
    ],
    "importantPattern": "Sorting + Dual Anchors + Converging Two Pointers",
    "commonMistakes": [
      "32-bit integer overflow when calculating sum without casting to long.",
      "Missing duplicate skips after a match, generating redundant quadruplets.",
      "Moving only left or only right upon finding a target match."
    ],
    "optimalApproach": "Sorting + Dual Anchors + Two Pointers with 4-Way Duplicate Pruning",
    "relatedProblems": [
      {
        "number": 15,
        "title": "3Sum",
        "difficulty": "Medium"
      },
      {
        "number": 1,
        "title": "Two Sum",
        "difficulty": "Easy"
      },
      {
        "number": 167,
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/4sum/"
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "number": 121,
    "title": "Best Time to Buy and Sell Stock",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "Easy",
    "categories": [
      "Arrays",
      "Dynamic Programming"
    ],
    "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "inputFormat": "prices = [int]",
    "outputFormat": "int (maximum profit)",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "prices = [7, 1, 5, 3, 6, 4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "prices = [7, 6, 4, 3, 1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and the max profit = 0.",
        "type": "official"
      }
    ],
    "approach": "One-Pass Valley-Peak Greedy Scan: Track minPrice (initialized to Integer.MAX_VALUE) and maxProfit (initialized to 0). Traverse through prices chronologically: if prices[i] < minPrice, update minPrice = prices[i] as our new lowest buy candidate; else compute today's profit = prices[i] - minPrice and update maxProfit = Math.max(maxProfit, profit). Scanning left-to-right inherently enforces the constraint that the buy day must strictly precede the sell day.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Buy Floor & Max Profit",
        "description": "Set minPrice = Integer.MAX_VALUE (lowest buy candidate) and maxProfit = 0.",
        "stateSnapshot": "minPrice = ∞, maxProfit = 0",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Track Lowest Buy Price",
        "description": "For each day i, if prices[i] < minPrice, update minPrice = prices[i] to anchor a cheaper buying floor for future days.",
        "stateSnapshot": "if (prices[i] < minPrice) minPrice = prices[i]",
        "highlight": "Valley"
      },
      {
        "step": 3,
        "title": "Evaluate Sell Profit",
        "description": "Else, compute profit = prices[i] - minPrice, and record maxProfit = Math.max(maxProfit, profit).",
        "stateSnapshot": "profit = prices[i] - minPrice; maxProfit = max(maxProfit, profit)",
        "highlight": "Profit"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single linear pass over the prices array with constant-time scalar comparisons.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Requires only two integer variables (minPrice and maxProfit).",
    "visualizerUrl": "/visualizers/best_time_to_buy_and_sell_stock_visualizer.html",
    "addedDate": "2026-11-20",
    "keyObservations": [
      "To maximize profit = prices[sell] - prices[buy] where buy < sell, we greedily buy at the lowest historical price before the current day.",
      "Updating minPrice when a new low is seen never invalidates past profits, as earlier profits are already safely stored in maxProfit.",
      "If stock prices are strictly decreasing, no profitable trade is made and maxProfit remains 0."
    ],
    "importantPattern": "Greedy One-Pass Valley-Peak Tracking (Kadane's Variant)",
    "commonMistakes": [
      "Using an O(n^2) nested loop checking all pairs, leading to Time Limit Exceeded (TLE) on 10^5 elements.",
      "Sorting the array, which destroys the chronological buy-before-sell invariant."
    ],
    "optimalApproach": "Single-Pass Greedy Running Minimum",
    "relatedProblems": [
      {
        "number": 53,
        "title": "Maximum Subarray (Max Inventory Increase)",
        "difficulty": "Medium"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 42,
        "title": "Trapping Rain Water",
        "difficulty": "Hard"
      },
      {
        "number": 1480,
        "title": "Running Sum of 1d Array (Prefix Sum)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    "id": "longest-repeating-character-replacement",
    "number": 424,
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Two Pointers",
      "Strings"
    ],
    "description": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.",
    "inputFormat": "s = string, k = int",
    "outputFormat": "int (maximum length)",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of only uppercase English letters",
      "0 <= k <= s.length"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"ABAB\", k = 2",
        "output": "4",
        "explanation": "Replace the two 'A's with two 'B's or vice versa to get \"BBBB\".",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"AABABBA\", k = 1",
        "output": "4",
        "explanation": "Replace the one 'A' in the middle with 'B' and form \"AABBBBA\". The substring \"BBBB\" has the longest repeating letters, which is 4.",
        "type": "official"
      }
    ],
    "approach": "Sliding Window with Frequency Array: Maintain a window s[left..right] and an int[26] array counting character frequencies inside the window. Track maxFreq, the maximum frequency of any single character seen in the current window. The number of replacements needed to make all characters in the window identical is (windowLength - maxFreq) = ((right - left + 1) - maxFreq). If replacements > k, the window is invalid; decrement freq[s.charAt(left) - 'A'] and advance left++. Update maxLength = Math.max(maxLength, right - left + 1). Crucially, maxFreq does not need to decrease when the window shrinks, because a smaller maxFreq cannot produce a window larger than our current best maxLength.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Frequency Counter & Pointers",
        "description": "Create int[26] freq, set left = 0, maxFreq = 0, and maxLength = 0.",
        "stateSnapshot": "freq = new int[26], left = 0, maxFreq = 0, maxLen = 0",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Expand Window & Update Max Frequency",
        "description": "At each right: increment freq[s.charAt(right) - 'A']++ and update maxFreq = Math.max(maxFreq, freq[s.charAt(right) - 'A']).",
        "stateSnapshot": "freq[ch - 'A']++; maxFreq = max(maxFreq, freq[ch - 'A'])",
        "highlight": "Expand"
      },
      {
        "step": 3,
        "title": "Contract Window When Replacements Exceed k",
        "description": "While (right - left + 1) - maxFreq > k: decrement freq[s.charAt(left) - 'A']-- and advance left++.",
        "stateSnapshot": "while (len - maxFreq > k) { freq[s[left++] - 'A']--; }",
        "highlight": "Contract"
      },
      {
        "step": 4,
        "title": "Record Maximum Window Length",
        "description": "Record maxLength = Math.max(maxLength, right - left + 1).",
        "stateSnapshot": "maxLength = max(maxLength, right - left + 1)",
        "highlight": "Record"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Both right and left pointers traverse the string at most once, and each character is processed in O(1) time.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Fixed 26-slot integer frequency array for uppercase English letters.",
    "visualizerUrl": "/visualizers/longest_repeating_character_replacement_visualizer.html",
    "addedDate": "2026-11-20",
    "keyObservations": [
      "To maximize the window while keeping at most k replacements, keep the most frequent letter intact and replace all other (windowLength - maxFreq) letters.",
      "The condition (right - left + 1) - maxFreq <= k defines a valid window.",
      "maxFreq does not need to be decremented when shrinking the window because a new optimal window length can only be achieved when maxFreq strictly increases."
    ],
    "importantPattern": "Sliding Window with Dynamic Majority Element Tracking",
    "commonMistakes": [
      "Recalculating the max frequency across all 26 letters inside the while loop, needlessly increasing runtime to O(26n).",
      "Shrinking the window until the entire string is valid from scratch rather than advancing left by one."
    ],
    "optimalApproach": "Sliding Window with Non-Decreasing Max Frequency",
    "relatedProblems": [
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 1446,
        "title": "Consecutive Characters (Longest Equal Run)",
        "difficulty": "Easy"
      },
      {
        "number": 11,
        "title": "Container With Most Water",
        "difficulty": "Medium"
      },
      {
        "number": 125,
        "title": "Valid Palindrome",
        "difficulty": "Easy"
      },
      {
        "number": 567,
        "title": "Permutation in String",
        "difficulty": "Medium"
      },
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 239,
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 340,
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "Medium"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/"
  },
  {
    "id": "permutation-in-string",
    "number": 567,
    "title": "Permutation in String",
    "slug": "permutation-in-string",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Two Pointers",
      "Hash Table",
      "Strings"
    ],
    "description": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.\n\nIn other words, return true if one of s1's permutations is a contiguous substring of s2.",
    "inputFormat": "s1 = string, s2 = string",
    "outputFormat": "boolean (true if permutation exists in s2, false otherwise)",
    "constraints": [
      "1 <= s1.length, s2.length <= 10^4",
      "s1 and s2 consist of lowercase English letters"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "output": "true",
        "explanation": "s2 contains one permutation of s1 (\"ba\" at indices [3..4]).",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s1 = \"ab\", s2 = \"eidboaoo\"",
        "output": "false",
        "explanation": "None of the substrings of length 2 in s2 match the character count signature of s1.",
        "type": "official"
      }
    ],
    "approach": "Fixed-Size Sliding Window with Dual Frequency Counters: Let n = s1.length() and m = s2.length(). If n > m, return false immediately. Create two integer frequency arrays of size 26: s1Freq and windowFreq. Count character frequencies for s1 and the initial window s2[0..n-1]. If Arrays.equals(s1Freq, windowFreq), return true. Otherwise, slide the fixed-size window across s2 from right = n to m - 1: add the incoming character s2[right] (increment windowFreq[s2.charAt(right) - 'a']++) and remove the outgoing character s2[right - n] (decrement windowFreq[s2.charAt(right - n) - 'a']--). After each slide, compare s1Freq and windowFreq using Arrays.equals. If equal, return true. If the loop completes without finding a match, return false.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Length Guard Check",
        "description": "If n = s1.length() > m = s2.length(), return false immediately because no permutation can fit.",
        "stateSnapshot": "if (n > m) return false;",
        "highlight": "Guard"
      },
      {
        "step": 2,
        "title": "Build Target & First Window Frequencies",
        "description": "Initialize s1Freq[26] and windowFreq[26]. Populate frequencies for all chars in s1 and the first window s2[0..n-1].",
        "stateSnapshot": "for(i = 0..n-1) { s1Freq[s1[i]-'a']++; windowFreq[s2[i]-'a']++; }",
        "highlight": "Count"
      },
      {
        "step": 3,
        "title": "Evaluate First Window",
        "description": "Check if Arrays.equals(s1Freq, windowFreq). If true, return true immediately.",
        "stateSnapshot": "if (Arrays.equals(s1Freq, windowFreq)) return true;",
        "highlight": "Check Initial"
      },
      {
        "step": 4,
        "title": "Slide Fixed-Size Window Across s2",
        "description": "For right from n to m - 1: add incoming char s2[right], remove outgoing char s2[right - n], and check Arrays.equals.",
        "stateSnapshot": "windowFreq[s2[R]-'a']++; windowFreq[s2[R-n]-'a']--; if (equals) return true;",
        "highlight": "Slide"
      },
      {
        "step": 5,
        "title": "Return False on Exhaustion",
        "description": "If all windows of length n are traversed without finding a frequency signature match, return false.",
        "stateSnapshot": "return false;",
        "highlight": "Done"
      }
    ],
    "timeComplexity": "O(n + m)",
    "timeComplexityExplanation": "O(n) to compute initial frequencies plus O(26 * (m - n)) = O(m) to slide across s2 and compare fixed 26-slot frequency arrays.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Fixed-size 26-element integer arrays for lowercase English letters regardless of input lengths.",
    "visualizerUrl": "/visualizers/permutation_in_string_visualizer.html",
    "addedDate": "2026-11-20",
    "keyObservations": [
      "Two strings of equal length are permutations/anagrams of each other if and only if their character frequencies match identically across all 26 lowercase English letters.",
      "Since any permutation of s1 must have length equal to s1.length() = n, every candidate is a contiguous substring of exact fixed length n.",
      "Shifting the sliding window one step right requires updating exactly two character counts: incrementing the incoming character and decrementing the outgoing character."
    ],
    "importantPattern": "Fixed-Size Sliding Window with Dual Array Frequency Signature Matching",
    "commonMistakes": [
      "Generating all n! permutations of s1, resulting in factorial exponential time complexity.",
      "Sorting every substring of length n in s2, degrading performance to O(m * n log n).",
      "Missing the edge case where n > m, leading to potential array index out-of-bounds errors."
    ],
    "optimalApproach": "Fixed-Size Sliding Window with int[26] Array Frequency Comparison",
    "relatedProblems": [
      {
        "number": 242,
        "title": "Valid Anagram",
        "difficulty": "Easy"
      },
      {
        "number": 49,
        "title": "Group Anagrams",
        "difficulty": "Medium"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 239,
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/"
  },
  {
    "id": "sliding-window-maximum",
    "number": 239,
    "title": "Sliding Window Maximum",
    "slug": "sliding-window-maximum",
    "difficulty": "Hard",
    "categories": [
      "Sliding Window",
      "Monotonic Deque",
      "Queue",
      "Arrays"
    ],
    "description": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.",
    "inputFormat": "nums = int[], k = int",
    "outputFormat": "int[] (maximums in each sliding window)",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= nums.length"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]",
        "explanation": "Window [1, 3, -1] -> 3; [3, -1, -3] -> 3; [-1, -3, 5] -> 5; [-3, 5, 3] -> 5; [5, 3, 6] -> 6; [3, 6, 7] -> 7.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [1], k = 1",
        "output": "[1]",
        "explanation": "Single element array with window size 1 yields [1].",
        "type": "official"
      }
    ],
    "approach": "Monotonic Decreasing Deque: Maintain a double-ended queue (Deque<Integer>) storing indices of candidate maximum elements in strictly decreasing order of their values. For each index i from 0 to n - 1: (1) Expire out-of-bounds indices from the front: while (!deque.isEmpty() && deque.peekFirst() <= i - k) deque.pollFirst(). (2) Maintain monotonic property at the back: while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast(), since earlier smaller or equal elements can never be the maximum of any window containing i. (3) Offer index i at the back: deque.offerLast(i). (4) Once the first window is formed (i >= k - 1), record the maximum at the front: result[index++] = nums[deque.peekFirst()]. This achieves amortized O(n) time and O(k) auxiliary space.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Expire Out-of-Bounds Indices",
        "description": "Remove indices from the front of the deque that fall outside [i - k + 1 .. i].",
        "stateSnapshot": "while (!deque.isEmpty() && deque.peekFirst() <= i - k) deque.pollFirst();",
        "highlight": "Expire"
      },
      {
        "step": 2,
        "title": "Prune Dominated Smaller Elements",
        "description": "Pop elements from the back of the deque that are <= nums[i], preserving decreasing monotonicity.",
        "stateSnapshot": "while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast();",
        "highlight": "Prune"
      },
      {
        "step": 3,
        "title": "Offer Current Index at Back",
        "description": "Append current index i at the back of the deque.",
        "stateSnapshot": "deque.offerLast(i);",
        "highlight": "Push"
      },
      {
        "step": 4,
        "title": "Emit Window Maximum",
        "description": "If i >= k - 1, the front index deque.peekFirst() holds the window maximum; record it into result[index++].",
        "stateSnapshot": "if (i >= k - 1) result[index++] = nums[deque.peekFirst()];",
        "highlight": "Emit"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Each index is pushed into the deque exactly once and popped at most once across the entire iteration, giving amortized O(1) work per element and O(n) total.",
    "spaceComplexity": "O(k)",
    "spaceComplexityExplanation": "The deque holds at most k indices representing candidate maximums within any single sliding window.",
    "visualizerUrl": "/visualizers/sliding_window_maximum_visualizer.html",
    "addedDate": "2026-11-20",
    "keyObservations": [
      "An element nums[j] where j < i and nums[j] <= nums[i] is permanently obsolete because nums[i] is greater or equal and will outlive nums[j] in future windows.",
      "Storing indices rather than values in the deque allows instant O(1) verification of whether the maximum element has slid out of bounds.",
      "The front of the deque deque.peekFirst() always holds the index of the maximum element for the current window in O(1) time."
    ],
    "importantPattern": "Monotonic Decreasing Deque with Boundary Expiration",
    "commonMistakes": [
      "Storing values instead of indices in the deque, making it impossible to check if the maximum element is still inside the current window.",
      "Using a Max-Heap / PriorityQueue which results in O(n log k) runtime and requires lazy deletion.",
      "Failing to prune equal elements (<= vs <), potentially violating strict capacity bounds."
    ],
    "optimalApproach": "Monotonic Decreasing Deque storing indices (ArrayDeque)",
    "relatedProblems": [
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 496,
        "title": "Next Greater Element I",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    "id": "minimum-window-substring",
    "number": 76,
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring",
    "difficulty": "Hard",
    "categories": [
      "Sliding Window",
      "Hash Table",
      "Strings",
      "Two Pointers"
    ],
    "description": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".\n\nThe testcases will be generated such that the answer is unique.",
    "inputFormat": "s = string, t = string",
    "outputFormat": "string (minimum window substring or \"\")",
    "constraints": [
      "1 <= s.length, t.length <= 10^5",
      "s and t consist of uppercase and lowercase English letters"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\"",
        "explanation": "Entire string s is the minimum window.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "s = \"a\", t = \"aa\"",
        "output": "\"\"",
        "explanation": "Both 'a's from t must be included in the window, but s only has one 'a'.",
        "type": "official"
      }
    ],
    "approach": "Dynamic Expand & Shrink Sliding Window with Frequency Ledger: Precompute required character counts from t into an ASCII frequency array need[128]. Maintain two pointers left = 0, right = 0, and a counter formed = 0 tracking how many required character occurrences are satisfied. As right expands from 0 to s.length() - 1: decrement need[s.charAt(right)]--; if need[s.charAt(right)] >= 0, it fulfilled a requirement from t, so increment formed++. When formed == t.length() (valid window), attempt to shrink from the left: update minLength and startIndex if right - left + 1 < minLength. Then release s.charAt(left) by incrementing need[s.charAt(left)]++; if need[s.charAt(left)] > 0, a mandatory character was lost, so decrement formed--. Advance left++. Return s.substring(startIndex, startIndex + minLength) or empty string if no window was found.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Record Target Demand",
        "description": "Count character frequencies in t using an int[128] array; set required = t.length().",
        "stateSnapshot": "for (char ch : t.toCharArray()) need[ch]++; required = t.length();",
        "highlight": "Init Demand"
      },
      {
        "step": 2,
        "title": "Expand Window to Right",
        "description": "Advance right, decrement need[s[right]]--, and if need[s[right]] >= 0 increment formed++.",
        "stateSnapshot": "need[s[right]]--; if (need[s[right]] >= 0) formed++;",
        "highlight": "Expand"
      },
      {
        "step": 3,
        "title": "Update Best Window Record",
        "description": "While formed == required: if current windowLength < minLength, update minLength and startIndex.",
        "stateSnapshot": "if (right - left + 1 < minLength) { minLength = right - left + 1; startIndex = left; }",
        "highlight": "Record Min"
      },
      {
        "step": 4,
        "title": "Shrink Window from Left",
        "description": "Release s[left] via need[s[left]]++; if need[s[left]] > 0 decrement formed--; advance left++.",
        "stateSnapshot": "need[s[left]]++; if (need[s[left]] > 0) formed--; left++;",
        "highlight": "Shrink"
      },
      {
        "step": 5,
        "title": "Extract Optimal Substring",
        "description": "Return s.substring(startIndex, startIndex + minLength) or \"\" if no valid window occurred.",
        "stateSnapshot": "return minLength == MAX ? \"\" : s.substring(startIndex, startIndex + minLength);",
        "highlight": "Done"
      }
    ],
    "timeComplexity": "O(m + n)",
    "timeComplexityExplanation": "O(n) to count characters in t, plus O(2m) = O(m) as both right and left pointers traverse s at most once.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Fixed 128-element integer array for ASCII characters.",
    "visualizerUrl": "/visualizers/minimum_window_substring_visualizer.html",
    "addedDate": "2026-11-20",
    "keyObservations": [
      "Positive values in need[c] represent deficit (characters still missing); negative values represent surplus (extra copies buffered inside the window).",
      "formed only increments when need[ch] >= 0 upon decrement, ensuring duplicate target characters are correctly required.",
      "Shrinking greedily from the left only stops when formed < required (i.e. need[leftChar] becomes > 0), ensuring the minimum valid window starting at each right boundary is discovered."
    ],
    "importantPattern": "Dynamic Expand-and-Shrink Sliding Window with Demand/Surplus Sign Invariant",
    "commonMistakes": [
      "Using full map equality comparisons on each character rather than formed counter, resulting in O(|Σ| * m) overhead.",
      "Handling case sensitivity incorrectly (e.g. using int[26] instead of int[128], which truncates or collides lowercase and uppercase letters).",
      "Failing to handle duplicate characters in t properly."
    ],
    "optimalApproach": "Dynamic Expand & Shrink Sliding Window with int[128] ASCII Demand Array",
    "relatedProblems": [
      {
        "number": 239,
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 567,
        "title": "Permutation in String",
        "difficulty": "Medium"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 340,
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "Medium"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    "id": "max-consecutive-ones-iii",
    "number": 1004,
    "title": "Max Consecutive Ones III",
    "slug": "max-consecutive-ones-iii",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Arrays",
      "Two Pointers",
      "Prefix Sum"
    ],
    "description": "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    "inputFormat": "nums = int[], k = int",
    "outputFormat": "int (maximum consecutive 1s after at most k flips)",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "nums[i] is either 0 or 1",
      "0 <= k <= nums.length"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
        "output": "6",
        "explanation": "Flip the 0s at indices 5 and 10 (or 4 and 5) to achieve 6 consecutive 1s: [1,1,1,0,0,1,1,1,1,1,1].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
        "output": "10",
        "explanation": "Flip the 0s at indices 5, 9, and 12 (or 4, 5, 9) to achieve 10 consecutive 1s.",
        "type": "official"
      }
    ],
    "approach": "Sliding Window with Zero Count Budget: Finding the longest run of 1s after flipping at most k zeros is equivalent to finding the longest contiguous subarray containing at most k zeros. Maintain two pointers left = 0 and right = 0, along with zeroCount = 0 and maxLength = 0. As right advances across nums: if nums[right] == 0, increment zeroCount++. When zeroCount exceeds k, shrink from the left by advancing left++ (decrementing zeroCount if nums[left] == 0) until zeroCount <= k. At each valid window, compute windowLength = right - left + 1 and record maxLength = Math.max(maxLength, windowLength). This yields linear O(n) time and O(1) auxiliary space.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Expand Window & Count Zeros",
        "description": "Increment zeroCount if the incoming element at nums[right] is 0.",
        "stateSnapshot": "if (nums[right] == 0) zeroCount++;",
        "highlight": "Expand"
      },
      {
        "step": 2,
        "title": "Shrink When Budget Exceeded",
        "description": "While zeroCount > k, decrement zeroCount if nums[left] is 0 and advance left forward.",
        "stateSnapshot": "while (zeroCount > k) { if (nums[left] == 0) zeroCount--; left++; }",
        "highlight": "Shrink"
      },
      {
        "step": 3,
        "title": "Calculate Valid Window Length",
        "description": "Calculate current window length as right - left + 1.",
        "stateSnapshot": "int windowLength = right - left + 1;",
        "highlight": "Window"
      },
      {
        "step": 4,
        "title": "Record Maximum Consecutive 1s",
        "description": "Update maxLength with the largest valid window observed so far.",
        "stateSnapshot": "maxLength = Math.max(maxLength, windowLength);",
        "highlight": "Record"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Both right and left pointers traverse each element of the array at most once, performing amortized O(1) work per element.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Only scalar counter and pointer variables (left, right, zeroCount, maxLength) are maintained in-place.",
    "visualizerUrl": "/visualizers/max_consecutive_ones_iii_visualizer.html",
    "addedDate": "2026-11-22",
    "keyObservations": [
      "Flipping at most k zeros to ones is mathematically identical to finding the longest contiguous subarray that contains at most k zeros.",
      "The sliding window condition is monotonic: expanding right increases or keeps zeroCount equal, while advancing left decreases or keeps zeroCount equal.",
      "Since each element enters the window once at right and exits at most once at left, total pointer advancements are bounded by 2n, ensuring strict linear runtime."
    ],
    "importantPattern": "Variable-Size Sliding Window with Deficit Quota (At Most K Zeros)",
    "commonMistakes": [
      "Attempting to generate all possible combinations of k flips, which leads to exponential O(C(n, k)) complexity.",
      "Not decrementing zeroCount when shrinking the window from the left.",
      "Resetting left back to right when zeroCount > k instead of incrementing left incrementally until the window becomes valid again."
    ],
    "optimalApproach": "Two-Pointer Sliding Window with Dynamic Left Shrinking and Zero Counter",
    "relatedProblems": [
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 1446,
        "title": "Consecutive Characters (Longest Equal Run)",
        "difficulty": "Easy"
      },
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 340,
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "Medium"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      },
      {
        "number": 930,
        "title": "Binary Subarrays With Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/"
  },
  {
    "id": "longest-substring-with-at-most-k-distinct-characters",
    "number": 340,
    "title": "Longest Substring with At Most K Distinct Characters",
    "slug": "longest-substring-with-at-most-k-distinct-characters",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Two Pointers",
      "Hash Table",
      "Strings"
    ],
    "description": "Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.",
    "inputFormat": "s = string, k = int",
    "outputFormat": "int (maximum length)",
    "constraints": [
      "1 <= s.length <= 5 * 10^4",
      "0 <= k <= 50",
      "s consists of English letters."
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"aababbcaacc\", k = 2",
        "output": "6",
        "explanation": "The longest substring with at most 2 distinct characters is \"aababb\" of length 6.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"abcddefg\", k = 3",
        "output": "4",
        "explanation": "The longest substring with at most 3 distinct characters is \"bcdd\" with length 4.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "s = \"eceba\", k = 2",
        "output": "3",
        "explanation": "T is \"ece\" which its length is 3.",
        "type": "official"
      }
    ],
    "approach": "Sliding Window with Frequency Map: Maintain an expandable window [left..right] and a frequency map tracking the counts of distinct characters currently in the window. As right pointer expands through s, insert or increment the count of s[right]. If the number of unique characters in the map exceeds k (map.size() > k), shrink the window from left by decrementing the count of s[left] and removing the key entirely when its frequency drops to 0, until map.size() <= k. At each valid step, update maxLength = Math.max(maxLength, right - left + 1). If k == 0, immediately return 0.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Check Zero Distinct Boundary & Initialize Map",
        "description": "If k == 0, return 0. Otherwise initialize HashMap<Character, Integer> map, left = 0, and maxLength = -1.",
        "stateSnapshot": "if (k == 0) return 0; Map<Character, Integer> map = new HashMap<>(); left = 0, maxLen = -1;",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Expand Right & Record Character Frequency",
        "description": "Increment right and update map.put(ch, map.getOrDefault(ch, 0) + 1).",
        "stateSnapshot": "map.put(s.charAt(right), map.getOrDefault(ch, 0) + 1);",
        "highlight": "Expand"
      },
      {
        "step": 3,
        "title": "Shrink Left When Unique Count Exceeds K",
        "description": "While map.size() > k: decrement count of s[left]. If count becomes 0, remove the key entirely (map.remove(leftChar)), then advance left++.",
        "stateSnapshot": "while (map.size() > k) { if (map.get(s[left]) == 1) map.remove(s[left]); else map.put(s[left], map.get(s[left])-1); left++; }",
        "highlight": "Shrink"
      },
      {
        "step": 4,
        "title": "Record Maximum Valid Substring Length",
        "description": "Calculate current window size right - left + 1 and update maxLength = Math.max(maxLength, right - left + 1).",
        "stateSnapshot": "maxLength = Math.max(maxLength, right - left + 1);",
        "highlight": "Record"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Both right and left pointers visit each index at most once. Character additions, lookups, and deletions in the map execute in amortized O(1) time.",
    "spaceComplexity": "O(k)",
    "spaceComplexityExplanation": "The hash map stores at most k + 1 distinct character keys at any given time during execution.",
    "visualizerUrl": "/visualizers/longest_substring_with_at_most_k_distinct_characters_visualizer.html",
    "addedDate": "2026-11-22",
    "keyObservations": [
      "When map.size() > k, only advancing left can reduce the number of distinct characters in the window.",
      "Crucially, when a character's frequency reaches 0, its key must be removed from the map via map.remove(), otherwise map.size() remains artificially inflated.",
      "If k = 0, no non-empty substring can satisfy having at most 0 distinct characters, so returning 0 immediately is required."
    ],
    "importantPattern": "Variable-Size Sliding Window with HashMap Frequency Tracking & Key Eviction",
    "commonMistakes": [
      "Leaving keys with a frequency of 0 in the hash map, preventing map.size() from decreasing.",
      "Forgetting to handle the edge case where k = 0.",
      "Shrinking by resetting left back to right instead of incrementing left incrementally."
    ],
    "optimalApproach": "Dynamic Two-Pointer Sliding Window with Character Frequency Map & Zero-Frequency Eviction",
    "relatedProblems": [
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      },
      {
        "number": 930,
        "title": "Binary Subarrays With Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/"
  },
  {
    "id": "number-of-substrings-containing-all-three-characters",
    "number": 1358,
    "title": "Number of Substrings Containing All Three Characters",
    "slug": "number-of-substrings-containing-all-three-characters",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Two Pointers",
      "Strings",
      "Hash Table"
    ],
    "description": "Given a string s consisting only of characters a, b and c, return the number of substrings containing at least one occurrence of all these characters a, b and c.",
    "inputFormat": "s = string",
    "outputFormat": "int (total valid substrings)",
    "constraints": [
      "3 <= s.length <= 5 * 10^4",
      "s only consists of 'a', 'b' or 'c' characters."
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "s = \"abcabc\"",
        "output": "10",
        "explanation": "The substrings containing at least one occurrence of the characters a, b and c are \"abc\", \"abca\", \"abcab\", \"abcabc\", \"bca\", \"bcab\", \"bcabc\", \"cab\", \"cabc\" and \"abc\".",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "s = \"aaacb\"",
        "output": "3",
        "explanation": "The substrings containing at least one occurrence of the characters a, b and c are \"aaacb\", \"aacb\" and \"acb\".",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "s = \"abc\"",
        "output": "1",
        "explanation": "The only valid substring is \"abc\".",
        "type": "official"
      }
    ],
    "approach": "Sliding Window with Suffix Extension Counting: Maintain a frequency array count of size 3 for 'a', 'b', and 'c'. As the right pointer traverses s from 0 to n - 1, increment count[s.charAt(right) - 'a']. When the current window [left..right] contains at least one of each character (count[0] > 0 && count[1] > 0 && count[2] > 0), any extension to the right up to index n - 1 will also contain all three characters. Therefore, there are exactly (n - right) valid substrings starting at index left. Add (n - right) to result, decrement count[s.charAt(left) - 'a'], and advance left++ until the triad condition is broken. This counts every valid substring in strict linear time.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Initialize Frequency Array & Counters",
        "description": "Allocate int[] count = new int[3], set left = 0, and result = 0.",
        "stateSnapshot": "int[] count = new int[3]; int left = 0, result = 0;",
        "highlight": "Init"
      },
      {
        "step": 2,
        "title": "Expand Window to Right",
        "description": "At index right, increment count[s.charAt(right) - 'a']++.",
        "stateSnapshot": "count[s.charAt(right) - 'a']++;",
        "highlight": "Expand"
      },
      {
        "step": 3,
        "title": "Count Suffix Extensions When Triad is Complete",
        "description": "While count[0] > 0 && count[1] > 0 && count[2] > 0: add (n - right) to result because all substrings starting at left and ending from right to n-1 are valid.",
        "stateSnapshot": "while (count[0] > 0 && count[1] > 0 && count[2] > 0) { result += n - right; count[s.charAt(left++) - 'a']--; }",
        "highlight": "Tally"
      },
      {
        "step": 4,
        "title": "Shrink Left Boundary",
        "description": "Decrement count[s.charAt(left) - 'a']-- and increment left++ to discover the next minimal valid window.",
        "stateSnapshot": "count[s.charAt(left) - 'a']--; left++;",
        "highlight": "Shrink"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Both left and right pointers traverse the string at most once, and each operation inside the loop runs in O(1) time.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Only a fixed-size 3-element integer array count is maintained for characters 'a', 'b', and 'c'.",
    "visualizerUrl": "/visualizers/number_of_substrings_containing_all_three_characters_visualizer.html",
    "addedDate": "2026-11-23",
    "keyObservations": [
      "If a substring s[left..right] already contains 'a', 'b', and 'c', extending it to s[left..right+1], s[left..right+2], ..., s[left..n-1] cannot remove any characters, so all (n - right) extensions starting at left are automatically valid.",
      "Counting batches of (n - right) suffixes converts what would be an O(n^2) substring enumeration problem into a strict O(n) single-pass algorithm.",
      "Advancing left++ inside the while loop ensures each starting position left is counted exactly once with zero duplicates."
    ],
    "importantPattern": "Variable Sliding Window with Suffix Extension Counting (n - right)",
    "commonMistakes": [
      "Generating every substring explicitly with nested loops, leading to O(n^2) or O(n^3) TLE.",
      "Double-counting substrings by not properly advancing left after adding (n - right).",
      "Using dynamic HashMaps with large overhead instead of a fixed int[3] array."
    ],
    "optimalApproach": "Two-Pointer Sliding Window with int[3] Triad Frequency and O(1) Suffix Accumulation (result += n - right)",
    "relatedProblems": [
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      },
      {
        "number": 424,
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 340,
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "Medium"
      },
      {
        "number": 76,
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
      },
      {
        "number": 930,
        "title": "Binary Subarrays With Sum",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/"
  },
  {
    "id": "binary-subarrays-with-sum",
    "number": 930,
    "title": "Binary Subarrays With Sum",
    "slug": "binary-subarrays-with-sum",
    "difficulty": "Medium",
    "categories": [
      "Sliding Window",
      "Prefix Sum",
      "Arrays",
      "Hash Table"
    ],
    "description": "Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.",
    "inputFormat": "nums = int[], goal = int",
    "outputFormat": "int (total subarrays with sum == goal)",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "nums[i] is either 0 or 1",
      "0 <= goal <= nums.length"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1,0,1,0,1], goal = 2",
        "output": "4",
        "explanation": "The 4 valid subarrays with sum 2 are: [1,0,1], [1,0,1,0], [0,1,0,1], and [1,0,1].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [0,0,0,0,0], goal = 0",
        "output": "15",
        "explanation": "All 15 non-empty subarrays have sum 0.",
        "type": "official"
      }
    ],
    "approach": "Exact Sum Reduction via atMost(goal) - atMost(goal - 1): Finding subarrays with an exact sum goal in a binary array containing zeros cannot be solved with a naive single-window sliding approach because expanding with zeros doesn't increase the sum and shrinking zeros doesn't reduce it. However, counting subarrays with sum <= goal is strictly monotonic. Once a valid window [left..right] has sum <= goal, every contiguous subarray ending at right (right - left + 1) also has sum <= goal. By defining helper function atMost(nums, goal) that computes total subarrays with sum <= goal in O(n) time and O(1) space, the exact count is simply atMost(nums, goal) - atMost(nums, goal - 1). If goal < 0, atMost immediately returns 0.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Formulate Reduction Identity",
        "description": "Express exact(goal) as atMost(nums, goal) - atMost(nums, goal - 1).",
        "stateSnapshot": "return atMost(nums, goal) - atMost(nums, goal - 1);",
        "highlight": "Identity"
      },
      {
        "step": 2,
        "title": "Check Non-Negative Goal Guard",
        "description": "If goal < 0, return 0 immediately since binary arrays cannot produce negative sums.",
        "stateSnapshot": "if (goal < 0) return 0;",
        "highlight": "Guard"
      },
      {
        "step": 3,
        "title": "Expand Window & Accumulate Sum",
        "description": "For right from 0 to n-1: add nums[right] to sum. While sum > goal, subtract nums[left] and advance left++.",
        "stateSnapshot": "sum += nums[right]; while (sum > goal) sum -= nums[left++];",
        "highlight": "Slide"
      },
      {
        "step": 4,
        "title": "Tally Valid Subarrays Ending at Right",
        "description": "Add (right - left + 1) to count, then subtract the two pass results to return the exact count.",
        "stateSnapshot": "count += right - left + 1;",
        "highlight": "Count"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Two linear sliding-window passes (atMost(goal) and atMost(goal - 1)), each advancing right and left at most n times, giving 2 * 2n = O(n) operations.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Uses only scalar pointers and counters (left, right, sum, count) with zero auxiliary data structures.",
    "visualizerUrl": "/visualizers/binary_subarrays_with_sum_visualizer.html",
    "addedDate": "2026-11-23",
    "keyObservations": [
      "Because zeros contribute 0 to the sum, multiple windows with different left boundaries can have the exact same sum, breaking naive two-pointer shrinking.",
      "The property sum <= goal is monotonic: adding elements increases or keeps sum same, shrinking reduces or keeps sum same.",
      "Computing exact(k) = atMost(k) - atMost(k - 1) is a universal pattern for counting contiguous subarrays with an exact sum or condition."
    ],
    "importantPattern": "atMost(K) - atMost(K - 1) Sliding Window Reduction (Inclusion-Exclusion)",
    "commonMistakes": [
      "Attempting a single sliding window directly on exact sum == goal, which gets stuck handling leading and trailing zeros.",
      "Forgetting the goal < 0 guard check when computing atMost(goal - 1) for goal = 0.",
      "Using HashMap prefix sums with O(n) space when an O(1) space two-pass sliding window exists for binary arrays."
    ],
    "optimalApproach": "Two-Pass Sliding Window via atMost(goal) - atMost(goal - 1) with O(1) Auxiliary Space",
    "relatedProblems": [
      {
        "number": 1248,
        "title": "Count Number of Nice Subarrays",
        "difficulty": "Medium"
      },
      {
        "number": 560,
        "title": "Subarray Sum Equals K",
        "difficulty": "Medium"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      },
      {
        "number": 340,
        "title": "Longest Substring with At Most K Distinct Characters",
        "difficulty": "Medium"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/binary-subarrays-with-sum/"
  },
  {
    "id": "count-number-of-nice-subarrays",
    "number": 1248,
    "title": "Count Number of Nice Subarrays",
    "slug": "count-number-of-nice-subarrays",
    "difficulty": "Medium",
    "categories": [
      "Arrays",
      "Two Pointers",
      "Sliding Window"
    ],
    "description": "Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.\n\nReturn the number of nice sub-arrays.",
    "inputFormat": "nums = [int], k = int",
    "outputFormat": "int (count of nice subarrays)",
    "constraints": [
      "1 <= nums.length <= 50000",
      "1 <= nums[i] <= 10^5",
      "1 <= k <= nums.length"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "nums = [1,1,2,1,1], k = 3",
        "output": "2",
        "explanation": "The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "nums = [2,4,6], k = 1",
        "output": "0",
        "explanation": "There are no odd numbers in the array, so 0 subarrays have 1 odd number.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "nums = [2,2,2,1,2,2,1,2,2,2], k = 2",
        "output": "16",
        "explanation": "There are 16 continuous subarrays containing exactly 2 odd numbers.",
        "type": "official"
      }
    ],
    "approach": "Parity Reduction to Binary Subarrays via atMost(nums, k) - atMost(nums, k - 1): Since each odd number contributes 1 to oddCount (nums[i] % 2 != 0) and each even number contributes 0, this problem maps directly to Binary Subarrays With Sum (LeetCode 930). Because the count of odd numbers in a window is monotonic with respect to expanding and shrinking, we can count all subarrays with at most k odds in O(n) time and O(1) space. The number of subarrays with exactly k odd numbers is exact(k) = atMost(nums, k) - atMost(nums, k - 1).",
    "flowSteps": [
      {
        "step": 1,
        "title": "Formulate Parity Reduction",
        "description": "Express exact(k) as atMost(nums, k) - atMost(nums, k - 1) using inclusion-exclusion.",
        "stateSnapshot": "return atMost(nums, k) - atMost(nums, k - 1);",
        "highlight": "Identity"
      },
      {
        "step": 2,
        "title": "Initialize Pointers & Parity Counters",
        "description": "In atMost(nums, k): initialize left = 0, oddCount = 0, count = 0.",
        "stateSnapshot": "int left = 0, oddCount = 0, count = 0;",
        "highlight": "Init"
      },
      {
        "step": 3,
        "title": "Expand Window & Check Parity",
        "description": "For right from 0 to n-1: if nums[right] % 2 != 0, increment oddCount++.",
        "stateSnapshot": "if (nums[right] % 2 != 0) oddCount++;",
        "highlight": "Expand"
      },
      {
        "step": 4,
        "title": "Shrink from Left when oddCount > k",
        "description": "While oddCount > k: if nums[left] % 2 != 0, decrement oddCount--, then left++.",
        "stateSnapshot": "while (oddCount > k) { if (nums[left++] % 2 != 0) oddCount--; }",
        "highlight": "Shrink"
      },
      {
        "step": 5,
        "title": "Tally Valid Subarrays Ending at Right",
        "description": "All (right - left + 1) subarrays ending at right have at most k odds: count += right - left + 1.",
        "stateSnapshot": "count += right - left + 1;",
        "highlight": "Count"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Two linear sliding-window passes (atMost(k) and atMost(k - 1)), each advancing right and left at most n times, resulting in 2 * 2n = O(n) total operations.",
    "spaceComplexity": "O(1)",
    "spaceComplexityExplanation": "Operates purely in-place with scalar pointers and counters (left, right, oddCount, count) without auxiliary data structures.",
    "visualizerUrl": "/visualizers/count_number_of_nice_subarrays_visualizer.html",
    "addedDate": "2026-11-24",
    "keyObservations": [
      "Binary Parity Equivalence: Every odd number is effectively 1 and every even number is 0, making this identical to LeetCode 930.",
      "Direct sliding window fails for exact k because even numbers can pad both sides of valid subarrays without changing oddCount.",
      "Computing exact(k) = atMost(k) - atMost(k - 1) cleanly handles even padding in O(1) auxiliary space without hashing."
    ],
    "importantPattern": "atMost(K) - atMost(K - 1) Sliding Window Reduction (Binary Parity Mapping)",
    "commonMistakes": [
      "Trying to use a single three-pointer sliding window, which leads to tricky edge cases with even number prefixes.",
      "Using HashMap prefix sums with O(n) extra space when an O(1) space two-pass sliding window is optimal.",
      "Checking nums[i] % 2 == 1 which can fail for negative numbers if present; use nums[i] % 2 != 0 or nums[i] & 1."
    ],
    "optimalApproach": "Two-Pass Sliding Window via atMost(nums, k) - atMost(nums, k - 1) with O(1) Space",
    "relatedProblems": [
      {
        "number": 930,
        "title": "Binary Subarrays With Sum",
        "difficulty": "Medium"
      },
      {
        "number": 560,
        "title": "Subarray Sum Equals K",
        "difficulty": "Medium"
      },
      {
        "number": 1004,
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
      },
      {
        "number": 1358,
        "title": "Number of Substrings Containing All Three Characters",
        "difficulty": "Medium"
      },
      {
        "number": 3,
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/count-number-of-nice-subarrays/"
  },
  {
    "id": "evaluate-reverse-polish-notation",
    "number": 150,
    "title": "Evaluate Reverse Polish Notation",
    "slug": "evaluate-reverse-polish-notation",
    "difficulty": "Medium",
    "categories": [
      "Stacks",
      "Arrays",
      "Math"
    ],
    "description": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression and return an integer that represents its value.",
    "inputFormat": "tokens = string[]",
    "outputFormat": "int (evaluated expression value)",
    "constraints": [
      "1 <= tokens.length <= 10^4",
      "tokens[i] is an operator ('+', '-', '*', '/') or an integer in [-200, 200]"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "explanation": "(4 + (13 / 5)) = 6",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
        "output": "22",
        "explanation": "((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22",
        "type": "official"
      }
    ],
    "approach": "LIFO Operand Stack: Scan tokens left to right. Push integer operands onto Stack<Integer>. When an operator (+, -, *, /) appears, pop first (right-hand operand) then pop second (left-hand operand), evaluate (second op first) with integer division truncating toward zero, and push the result back onto the stack.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Push Number Operands",
        "description": "If token is not +, -, *, or /, parse Integer.parseInt(token) and push onto stack.",
        "stateSnapshot": "stack.push(Integer.parseInt(token))",
        "highlight": "Push"
      },
      {
        "step": 2,
        "title": "Pop Two Operands in LIFO Order",
        "description": "Pop int first = stack.pop() (right operand) and int second = stack.pop() (left operand).",
        "stateSnapshot": "first = stack.pop(); second = stack.pop();",
        "highlight": "Pop Order"
      },
      {
        "step": 3,
        "title": "Evaluate & Push Intermediate Result",
        "description": "Compute result = second [op] first (division truncates toward zero) and push result back onto stack.",
        "stateSnapshot": "stack.push(result)",
        "highlight": "ALU Eval"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Single linear pass over n tokens; each token performs O(1) stack push/pop operations.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "The operand stack holds at most ceil(n / 2) integer operands.",
    "visualizerUrl": "/visualizers/evaluate_reverse_polish_notation_visualizer.html",
    "addedDate": "2026-11-25",
    "keyObservations": [
      "The first popped value is the RIGHT operand (first) and the second popped value is the LEFT operand (second), which is critical for subtraction and division.",
      "Postfix notation eliminates parentheses and operator precedence ambiguity because every operator immediately consumes its two most recent operands."
    ],
    "importantPattern": "LIFO Operand Evaluation Stack",
    "commonMistakes": [
      "Reversing subtraction or division operand order (doing first - second instead of second - first).",
      "Using floor division instead of truncation toward zero for negative integers (e.g., -7 / 3 should be -2, not -3)."
    ],
    "optimalApproach": "Single-Pass LIFO Stack<Integer> Postfix Evaluator",
    "relatedProblems": [
      {
        "number": 20,
        "title": "Valid Parentheses (Balanced Stack)",
        "difficulty": "Easy"
      },
      {
        "number": 155,
        "title": "Min Stack (Dual Stack O(1) Minimum)",
        "difficulty": "Medium"
      },
      {
        "number": 232,
        "title": "Implement Queue using Stacks",
        "difficulty": "Easy"
      },
      {
        "number": 496,
        "title": "Next Greater Element I",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
  },
  {
    "id": "daily-temperatures",
    "number": 739,
    "title": "Daily Temperatures",
    "slug": "daily-temperatures",
    "difficulty": "Medium",
    "categories": [
      "Stacks",
      "Arrays"
    ],
    "description": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    "inputFormat": "temperatures = int[]",
    "outputFormat": "int[] (days to wait for a warmer temperature)",
    "constraints": [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "For day 2 (75), day 6 (76) is the next warmer day (6 - 2 = 4 days wait).",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "temperatures = [30,40,50,60]",
        "output": "[1,1,1,0]",
        "explanation": "Strictly increasing temperatures mean each day waits 1 day except the last.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "temperatures = [30,60,90]",
        "output": "[1,1,0]",
        "explanation": "Day 0 waits 1 day for 60, day 1 waits 1 day for 90.",
        "type": "official"
      }
    ],
    "approach": "Monotonic Decreasing Stack: Maintain a Stack<Integer> of day indices whose temperatures are monotonically decreasing from bottom to top. As each day i arrives, while temperatures[i] > temperatures[stack.peek()], pop prevIndex and record answer[prevIndex] = i - prevIndex, then push i.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Resolve Colder Waiting Days",
        "description": "While !stack.isEmpty() && temperatures[i] > temperatures[stack.peek()], pop prevIndex and set answer[prevIndex] = i - prevIndex.",
        "stateSnapshot": "answer[prevIndex] = i - prevIndex",
        "highlight": "Monotonic Pop"
      },
      {
        "step": 2,
        "title": "Push Current Day Index",
        "description": "Push current day index i onto the stack to await a warmer future day.",
        "stateSnapshot": "stack.push(i)",
        "highlight": "Push"
      },
      {
        "step": 3,
        "title": "Return Answer Array",
        "description": "Any unresolved indices remaining in the stack automatically retain their default value 0.",
        "stateSnapshot": "return answer",
        "highlight": "Complete"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Amortized linear time: each day index is pushed onto the stack at most once and popped at most once (at most 2n stack operations).",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "The monotonic stack holds up to n day indices in the worst case (strictly decreasing temperatures).",
    "visualizerUrl": "/visualizers/daily_temperatures_monotonic_stack_visualizer.html",
    "addedDate": "2026-11-25",
    "keyObservations": [
      "Storing indices rather than temperatures on the stack allows both temperature lookup (temperatures[stack.peek()]) and exact day-distance calculation (i - prevIndex).",
      "Even though there is a while loop inside a for loop, each index is pushed once and popped at most once, guaranteeing O(n) total runtime."
    ],
    "importantPattern": "Monotonic Decreasing Stack (Next Greater Element)",
    "commonMistakes": [
      "Using >= instead of > when comparing temperatures[i] with temperatures[stack.peek()], which wrongly counts equal temperatures as warmer.",
      "Pushing temperature values instead of array indices, losing the ability to compute (i - prevIndex)."
    ],
    "optimalApproach": "Single-Pass Monotonic Decreasing Stack<Integer> of Indices",
    "relatedProblems": [
      {
        "number": 853,
        "title": "Car Fleet",
        "difficulty": "Medium"
      },
      {
        "number": 496,
        "title": "Next Greater Element I",
        "difficulty": "Easy"
      },
      {
        "number": 239,
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
      },
      {
        "number": 20,
        "title": "Valid Parentheses (Balanced Stack)",
        "difficulty": "Easy"
      },
      {
        "number": 155,
        "title": "Min Stack (Dual Stack O(1) Minimum)",
        "difficulty": "Medium"
      },
      {
        "number": 150,
        "title": "Evaluate Reverse Polish Notation",
        "difficulty": "Medium"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    "id": "car-fleet",
    "number": 853,
    "title": "Car Fleet",
    "slug": "car-fleet",
    "difficulty": "Medium",
    "categories": [
      "Stacks",
      "Sorting",
      "Arrays"
    ],
    "description": "There are n cars at given miles away from the starting mile 0, traveling to reach the mile target. A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car. Return the number of car fleets that will arrive at the destination.",
    "inputFormat": "target = int, position = int[], speed = int[]",
    "outputFormat": "int (number of car fleets)",
    "constraints": [
      "1 <= n <= 10^5",
      "0 < target <= 10^6",
      "0 <= position[i] < target (all unique)",
      "0 < speed[i] <= 10^6"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
        "output": "3",
        "explanation": "[10,2] & [8,4] meet at mile 12; [0,1] travels alone; [5,1] & [3,3] meet at mile 6.",
        "type": "official"
      },
      {
        "exampleNumber": 2,
        "input": "target = 10, position = [3], speed = [3]",
        "output": "1",
        "explanation": "Only one car, so there is 1 fleet.",
        "type": "official"
      },
      {
        "exampleNumber": 3,
        "input": "target = 100, position = [0,2,4], speed = [4,2,1]",
        "output": "1",
        "explanation": "All three cars catch up and merge into a single fleet.",
        "type": "official"
      }
    ],
    "approach": "Sort by Position Descending + Monotonic Arrival-Time Stack: Pair each car's [position, speed] and sort descending by position (closest to target first). Compute each car's arrival time (double)(target - pos) / speed. If stack.isEmpty() or time > stack.peek(), the car cannot catch the fleet ahead and forms a new fleet (stack.push(time)); otherwise it merges into the fleet ahead.",
    "flowSteps": [
      {
        "step": 1,
        "title": "Pair & Sort Descending",
        "description": "Build int[n][2] of [position, speed] and sort descending by position (closest to target first).",
        "stateSnapshot": "Arrays.sort(cars, (a, b) -> Integer.compare(b[0], a[0]))",
        "highlight": "Sort"
      },
      {
        "step": 2,
        "title": "Compute Arrival Time",
        "description": "Calculate double time = (double)(target - car[0]) / car[1] for each car from front to back.",
        "stateSnapshot": "time = (double)(target - car[0]) / car[1]",
        "highlight": "Time"
      },
      {
        "step": 3,
        "title": "Monotonic Stack Merge Check",
        "description": "If stack.isEmpty() || time > stack.peek(), push time as a new fleet; otherwise it catches up and merges.",
        "stateSnapshot": "return stack.size()",
        "highlight": "Fleet Stack"
      }
    ],
    "timeComplexity": "O(n log n)",
    "timeComplexityExplanation": "Dominated by sorting n [position, speed] pairs, followed by a single O(n) pass.",
    "spaceComplexity": "O(n)",
    "spaceComplexityExplanation": "Stores the n x 2 pairs array and up to n fleet arrival times in the stack.",
    "visualizerUrl": "/visualizers/car_fleet_monotonic_stack_visualizer.html",
    "addedDate": "2026-11-27",
    "keyObservations": [
      "Because cars cannot pass one another, a trailing car's fate depends only on the fleet directly ahead of it.",
      "Using floating-point double division (target - pos) / speed avoids integer truncation bugs when comparing exact arrival times."
    ],
    "importantPattern": "Position Sort + Monotonic Stack",
    "commonMistakes": [
      "Using integer division instead of (double) when computing arrival time, causing false ties.",
      "Sorting ascending by position instead of descending (front-most car must be processed first)."
    ],
    "optimalApproach": "Descending Position Sort + Monotonic Arrival-Time Stack<Double>",
    "relatedProblems": [
      {
        "number": 739,
        "title": "Daily Temperatures",
        "difficulty": "Medium"
      },
      {
        "number": 496,
        "title": "Next Greater Element I",
        "difficulty": "Easy"
      },
      {
        "number": 155,
        "title": "Min Stack (Dual Stack O(1) Minimum)",
        "difficulty": "Medium"
      },
      {
        "number": 20,
        "title": "Valid Parentheses (Balanced Stack)",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/car-fleet/"
  },
  {
    "id": "nth-fibonacci-number",
    "number": 509,
    "title": "Nth Fibonacci Number",
    "slug": "fibonacci-number",
    "difficulty": "Easy",
    "categories": [
      "Math",
      "Dynamic Programming"
    ],
    "description": "Write a recursive Fibonacci function and analyze/dry-run its complexity, along with memoized DP and O(1)-space no-temporary-variable iterative variants. Given n, compute F(n) where F(0) = 0, F(1) = 1, and F(n) = F(n - 1) + F(n - 2) for n > 1 (or print the first n Fibonacci terms).",
    "inputFormat": "n = int (0 <= n <= 30)",
    "outputFormat": "int (F(n), or first n Fibonacci terms for the series variant)",
    "constraints": [
      "0 <= n <= 30",
      "F(0) = 0, F(1) = 1",
      "DSE 2025 variant: compute/print Fibonacci without using a temporary variable"
    ],
    "examples": [
      {
        "exampleNumber": 1,
        "type": "official",
        "input": "n = 2",
        "output": "1",
        "explanation": "F(2) = F(1) + F(0) = 1 + 0 = 1."
      },
      {
        "exampleNumber": 2,
        "type": "official",
        "input": "n = 5",
        "output": "5",
        "explanation": "F(5) = F(4) + F(3) = 3 + 2 = 5 (series: 0, 1, 1, 2, 3)."
      }
    ],
    "flowSteps": [
      {
        "step": 1,
        "title": "Base Cases (n <= 1)",
        "description": "Handle F(0) = 0 and F(1) = 1 immediately without further recursion or loop iterations.",
        "stateSnapshot": "if (n <= 1) return n",
        "highlight": "Base Case"
      },
      {
        "step": 2,
        "title": "Memoized / Rolling Transition",
        "description": "Cache F(n) = fib(n-1) + fib(n-2) in dp[n] to avoid O(2^n) recomputation, or update pair without temp: b = a + b; a = b - a.",
        "stateSnapshot": "dp[n] = fib(n-1) + fib(n-2) | b = a + b; a = b - a",
        "highlight": "Recurrence"
      },
      {
        "step": 3,
        "title": "Return F(n) or Print Series",
        "description": "Return dp[n] (memoized), pair[1] (rolling no-temp), or print each term a in the series loop.",
        "stateSnapshot": "return F(n)",
        "highlight": "Result"
      }
    ],
    "timeComplexity": "O(n)",
    "timeComplexityExplanation": "Memoization and no-temp iterative variants compute each Fibonacci state once in O(n) time; pure recursion takes O(2^n) due to overlapping subproblems.",
    "spaceComplexity": "O(1) to O(n)",
    "spaceComplexityExplanation": "Iterative no-temp uses O(1) space; recursion + memoization uses O(n) for the dp array and call stack.",
    "visualizerUrl": "/visualizers/fibonacci_memoization_visualizer.html",
    "addedDate": "2026-11-27",
    "keyObservations": [
      "Pure recursion recomputes overlapping subproblems exponentially in O(2^n) time; adding an int[] dp cache collapses it to O(n).",
      "Without a temporary variable, advancing (a, b) -> (b, a + b) is done in-place via b = a + b; a = b - a.",
      "Also reported in Infosys interviews as: Fibonacci Number (Recursive + Complexity), Fibonacci Series (variants), Nth Fibonacci (DP). Also asked at Accenture and TCS."
    ],
    "importantPattern": "Recursion Tree -> Top-Down Memoization -> O(1) Rolling State",
    "commonMistakes": [
      "Forgetting base cases n == 0 or n == 1, causing infinite recursion or negative array indexing.",
      "Updating a = b; b = a + b without a temp variable (clobbers a before computing a + b); must do b = a + b; a = b - a."
    ],
    "optimalApproach": "Rolling State Without Temp Variable (O(n) time, O(1) space) & Top-Down Memoization (O(n) time, O(n) space)",
    "solutions": [
      {
        "id": "memoization",
        "label": "Recursion + Memoization",
        "badge": "Top-Down DP · O(n)",
        "approach": "Top-down recursive Fibonacci with an int[] dp memoization table initialized to -1 so each subproblem F(k) is solved at most once.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "visualizerUrl": "/visualizers/fibonacci_memoization_visualizer.html"
      },
      {
        "id": "recursive",
        "label": "Pure Recursion",
        "badge": "Baseline · O(2^n)",
        "approach": "Direct recursive definition fib(n - 1) + fib(n - 2) illustrating the binary recursion tree, call stack depth, and overlapping subproblems.",
        "timeComplexity": "O(2^n)",
        "spaceComplexity": "O(n)",
        "visualizerUrl": "/visualizers/fibonacci_recursive_visualizer.html"
      },
      {
        "id": "pair-no-temp",
        "label": "Nth Term (No Temp Var)",
        "badge": "DSE 2025 · O(1) Space",
        "approach": "Computes F(n) using a fixed 2-element rolling array pair = {0, 1} and in-place arithmetic (pair[1] = pair[0] + pair[1]; pair[0] = pair[1] - pair[0]) without a third variable.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "visualizerUrl": "/visualizers/fibonacci_pair_no_temp_visualizer.html"
      },
      {
        "id": "series-no-temp",
        "label": "Fibonacci Series (No Temp)",
        "badge": "Series Variant · O(1)",
        "approach": "Prints the first n Fibonacci terms using only two scalar variables a = 0, b = 1 updated via b = a + b; a = b - a.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "visualizerUrl": "/visualizers/fibonacci_series_no_temp_visualizer.html"
      }
    ],
    "infosys": {
      "roles": [
        "SP",
        "System Engineer",
        "DSE"
      ],
      "frequency": "Very High",
      "frequencyCount": 15,
      "years": [
        2024,
        2025
      ],
      "dayPlan": 1,
      "sourceCount": 14
    },
    "relatedProblems": [
      {
        "number": 53,
        "title": "Maximum Subarray (Max Inventory Increase)",
        "difficulty": "Medium"
      },
      {
        "number": 121,
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy"
      },
      {
        "number": 322,
        "title": "Greedy Coin Change (Standard Denominations)",
        "difficulty": "Medium"
      },
      {
        "number": 169,
        "title": "Majority Element",
        "difficulty": "Easy"
      }
    ],
    "leetcodeUrl": "https://leetcode.com/problems/fibonacci-number/"
  }
];
