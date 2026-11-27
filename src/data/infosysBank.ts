// Auto-generated from infosys-qb-main.zip (infosys_questions.json + plan.json)
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

export const INFOSYS_TOTAL_CITATIONS = 1246;

export const INFOSYS_QUESTIONS: InfosysBankQuestion[] = [
  {
    "slug": "palindrome string check",
    "name": "Palindrome String Check",
    "altTitles": [
      "Check if a string is a palindrome",
      "Palindrome Number",
      "Palindrome Number Check",
      "Palindrome String Check / Valid Palindrome",
      "Valid Palindrome",
      "Valid Palindrome (String)"
    ],
    "statement": "Determine whether a string reads the same forwards and backwards (optionally ignoring non-alphanumeric characters and case).",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Digits",
      "Implementation",
      "Two Pointers",
      "basics",
      "digits",
      "two pointers"
    ],
    "roles": [
      "DSE",
      "System Engineer"
    ],
    "years": [
      2022,
      2024,
      2025
    ],
    "leetcode": "125. Valid Palindrome",
    "leetcodeNumber": 125,
    "leetcodeExact": true,
    "gfg": "GFG Palindrome String",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 16,
    "sourceCount": 14,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "JobRise",
        "url": "https://jobrise.io/en/blog/infosys-interview-questions-freshers/"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-2022/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-digital-specialist-engineer-off-campus/"
      },
      {
        "name": "InterviewBit",
        "url": "https://www.interviewbit.com/infosys-interview-questions/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": "Live coding with IDE sharing in the technical interview. | From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "check if two strings are anagrams",
    "name": "Check if Two Strings are Anagrams",
    "altTitles": [
      "Anagram Check",
      "Check Anagram",
      "Check Anagrams",
      "Valid Anagram"
    ],
    "statement": "Given two strings, check whether they are anagrams of each other.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Frequency Counting",
      "HashMap",
      "Sorting",
      "counting",
      "strings"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2021,
      2024,
      2025,
      2026
    ],
    "leetcode": "242. Valid Anagram",
    "leetcodeNumber": 242,
    "leetcodeExact": true,
    "gfg": "Anagram",
    "hackerrank": "HackerRank Anagram",
    "codeforces": "",
    "companies": [
      "Accenture",
      "TCS",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 15,
    "sourceCount": 12,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@pravallikaseshasai/hackwithinfy-guide-rounds-questions-how-i-landed-the-dse-role-bc4f64db465d"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-ses/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated. | Often given with a 10-minute time limit in PPI interviews."
  },
  {
    "slug": "nth fibonacci",
    "name": "Nth Fibonacci Number",
    "altTitles": [
      "Fibonacci Number (Recursive + Complexity)",
      "Fibonacci Series",
      "Fibonacci series (variants)",
      "Nth Fibonacci (DP)"
    ],
    "statement": "Write a recursive Fibonacci function and analyze/dry-run its complexity; memoized versions discussed.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "DP",
      "Implementation",
      "Math",
      "Memoization",
      "Recursion",
      "complexity analysis",
      "memoization"
    ],
    "roles": [
      "SP",
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "509. Fibonacci Number",
    "leetcodeNumber": 509,
    "leetcodeExact": true,
    "gfg": "Nth Fibonacci Number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Accenture",
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 15,
    "sourceCount": 14,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6567886/my-infosys-specialist-programmer-intervi-uiue/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-interview-experience-2024/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-dse-interview-experience-hackwithinfy/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-system-engineer/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": "DSE 2025 variant: Fibonacci without using a temporary variable."
  },
  {
    "slug": "prime check",
    "name": "Prime Number Check",
    "altTitles": [
      "Check Prime Number",
      "Prime Number Check / Print Primes"
    ],
    "statement": "Given numbers, determine whether each is prime (asked as quick live-coding/verification).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Primality"
    ],
    "roles": [
      "DSE",
      "System Engineer"
    ],
    "years": [
      2019,
      2020,
      2021,
      2022,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Prime Number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Accenture",
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 15,
    "sourceCount": 10,
    "sources": [
      {
        "name": "Dev.to",
        "url": "https://dev.to/vedantjain03/interview-experience-digital-specialist-engineer-infosys-4p4n"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@arpitakonar09/hackwithinfy-interview-experience-2020-a11c737401fb"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-interview-experience-2019-for-system-engineer-specialistses-role/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-dse-4/"
      }
    ],
    "notes": "PP 2021 interview also asked to check primality of array elements."
  },
  {
    "slug": "reverse string",
    "name": "Reverse a String",
    "altTitles": [
      "Reverse String",
      "Reverse a string (without built-ins)"
    ],
    "statement": "Reverse a given string, sometimes explicitly without using in-built library functions.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Implementation",
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2020,
      2023,
      2024,
      2025
    ],
    "leetcode": "344. Reverse String",
    "leetcodeNumber": 344,
    "leetcodeExact": true,
    "gfg": "GFG Reverse a String",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Accenture",
      "Cognizant",
      "TCS",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 15,
    "sourceCount": 12,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "JobRise",
        "url": "https://jobrise.io/en/blog/infosys-interview-questions-freshers/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-infytq-dse-interview-experience-2023/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-sessystem-engineer-specialist-interview-experience-2020/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "0 1 knapsack",
    "name": "0/1 Knapsack",
    "altTitles": [
      "0/1 Knapsack Problem",
      "0/1 Knapsack problem"
    ],
    "statement": "Maximize value under weight capacity; a knapsack variation was reported as the easy question in the HWI 2024 OA.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Knapsack",
      "knapsack"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "416. Partition Equal Subset Sum (related)",
    "leetcodeNumber": 416,
    "leetcodeExact": false,
    "gfg": "0 - 1 Knapsack Problem",
    "hackerrank": "HackerRank Knapsack",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS",
      "TCS Digital",
      "Wipro Turbo"
    ],
    "frequency": "Very High",
    "frequencyScore": 14,
    "sourceCount": 12,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@nandita27iitp/hackwithinfy-2024-infosys-interview-experience-fte-specialist-programmer-first-walk-in-719944683a2d"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-interview-experience-for-specialist-programmer/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "Also cited in HackWithInfy 2020 reports."
  },
  {
    "slug": "longest common subsequence",
    "name": "Longest Common Subsequence",
    "altTitles": [],
    "statement": "Return the length of the longest common subsequence of two strings.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "2D DP",
      "Strings",
      "strings"
    ],
    "roles": [
      "DSE",
      "SP"
    ],
    "years": [
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "leetcode": "1143. Longest Common Subsequence",
    "leetcodeNumber": 1143,
    "leetcodeExact": true,
    "gfg": "GFG Longest Common Subsequence",
    "hackerrank": "HackerRank Common Child (variant)",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Paytm",
      "TCS",
      "TCS Digital"
    ],
    "frequency": "Very High",
    "frequencyScore": 14,
    "sourceCount": 10,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      },
      {
        "name": "Medium (Smruti)",
        "url": "https://medium.com/@smrutipratisruti/my-hackwithinfy-journey-what-my-first-technical-interview-taught-me-6f2b854477df"
      },
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-dse-4/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-2023-off-campus/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum subarray sum kadane",
    "name": "Maximum Subarray Sum (Kadane)",
    "altTitles": [
      "Kadane's Algorithm (Maximum Subarray Sum)",
      "Maximum Subarray Sum (Kadane's Algorithm)"
    ],
    "statement": "Find the maximum sum of a contiguous subarray (Kadane's algorithm).",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "DP",
      "Kadane",
      "Kadane's algorithm"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "53. Maximum Subarray",
    "leetcodeNumber": 53,
    "leetcodeExact": true,
    "gfg": "GFG Kadane's Algorithm",
    "hackerrank": "HackerRank The Maximum Subarray",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft",
      "TCS",
      "TCS Digital",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 14,
    "sourceCount": 11,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "ideal arrays each element divides next",
    "name": "Count Ideal Arrays (Each Element Divides Next)",
    "altTitles": [
      "Count the Number of Ideal Arrays",
      "Divisibility Chain Arrays (count K-length arrays)",
      "Divisible Array Subsequences",
      "Unique Birthday Gift",
      "Unique Birthday Gift / Divisible Arrays"
    ],
    "statement": "Count integer arrays of length K with values in [1,N] where a[i+1] is divisible by a[i]; answer modulo 10000 (or 1e9+7 in variants).",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Combinatorics",
      "Counting",
      "DP",
      "Divisors",
      "HashSet",
      "Number Theory",
      "combinatorics",
      "divisors"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "leetcode": "Count the Number of Ideal Arrays (LC 2338)",
    "leetcodeNumber": 2338,
    "leetcodeExact": true,
    "gfg": "Count of arrays in which all adjacent elements are such that one of them divide the another",
    "hackerrank": "",
    "codeforces": "CF 414B Mashmokh and ACM (equivalent)",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 13,
    "sourceCount": 9,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/93031"
      },
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "CodeChef Discuss",
        "url": "https://discuss.codechef.com/t/infosys-sample-questions/92478"
      },
      {
        "name": "GitHub - karthikreddy-7/Infosys-SP-Coding-Questions",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions/blob/main/greedy/UniqueBirthdayGift.java"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1961872/infosys-dse-se-question/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": "Statement not in README; title from filename UniqueBirthdayGift.java. | Reported for DSE and System Engineer roles. | Divisor-chain counting DP. | Also circulated as an official Infosys sample question."
  },
  {
    "slug": "longest non decreasing subsequence xor m",
    "name": "Longest Non-Decreasing Subsequence with XOR >= M",
    "altTitles": [
      "Bitwise LIS",
      "LIS with Bitwise Condition",
      "Longest Good Subsequence (non-decreasing, XOR >= M)",
      "Longest Non-Decreasing Subsequence (Variation)",
      "Longest Non-Decreasing Subsequence (variation)"
    ],
    "statement": "Find the longest increasing subsequence where consecutive chosen pairs must additionally satisfy a bitwise (AND/XOR) constraint.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Binary Search",
      "Bit Manipulation",
      "LIS"
    ],
    "roles": [
      "DSE",
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "300. Longest Increasing Subsequence (variant)",
    "leetcodeNumber": 300,
    "leetcodeExact": false,
    "gfg": "Longest Increasing Subsequence",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 13,
    "sourceCount": 9,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - karthikreddy-7/Infosys-SP-Coding-Questions",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions/blob/main/DynamicProgramming/BitwiseSubsequence.java"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@pravallikaseshasai/hackwithinfy-guide-rounds-questions-how-i-landed-the-dse-role-bc4f64db465d"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      },
      {
        "name": "Scribd",
        "url": "https://www.scribd.com/document/635730305/INFOSYS-Sp-DSP-Placement-Material-By-PLACEMENT-LELO"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": "Condition equivalently means the two numbers have different highest set bits. | Same interview also touched anagrams, valid parentheses, matrix rotation on paper. | Original ask year unclear (~2022); kept for completeness."
  },
  {
    "slug": "maximize xor choosing at most n 2 elements",
    "name": "Maximize XOR Choosing At Most N/2 Elements",
    "altTitles": [
      "Khaled's Maximum XOR Subset (At Most N/2 Elements)",
      "Maximum XOR Subset",
      "Maximum XOR Subset (at most N/2 elements)",
      "Maximum XOR Subset (size at most N/2)"
    ],
    "statement": "Choose at most N/2 elements from array A to maximize the XOR of chosen elements (e.g., A=[2,4,6,8] -> choose [2,4,8], XOR=14).",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "DP",
      "Greedy",
      "Linear Basis",
      "Subset Selection",
      "XOR",
      "XOR Basis",
      "XOR basis",
      "greedy"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021,
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Maximum Subset XOR (variant)",
    "hackerrank": "",
    "codeforces": "XOR linear basis problems",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 13,
    "sourceCount": 8,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - karthikreddy-7/Infosys-SP-Coding-Questions",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions/blob/main/DynamicProgramming/MaxXORsubset.java"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/digital-specialist-engineer/coding-questions/"
      },
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": "Not from one of the five primary communities; included for coverage as a frequently cited PYQ. | From the Feb 2022 SP/DSE paper per PrepInsta. | Since choosing at most N/2 is not binding for XOR basis, reduces to maximum subset XOR."
  },
  {
    "slug": "coin change minimum coins",
    "name": "Coin Change (Minimum Coins)",
    "altTitles": [
      "Minimum Coins (Coin Change)",
      "Minimum Coins Required",
      "Minimum Coins Required (Coin Change)",
      "Minimum Coins to Make Amount"
    ],
    "statement": "Given coins of different denominations with infinite supply and a value V, find the minimum number of coins required to make V; print -1 if impossible.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Coin Change",
      "Greedy",
      "Unbounded Knapsack",
      "unbounded knapsack"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "322. Coin Change",
    "leetcodeNumber": 322,
    "leetcodeExact": true,
    "gfg": "Coin Change - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 12,
    "sourceCount": 8,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": "Full statement with examples in karthikreddy-7 README (MinCoinChange.java)."
  },
  {
    "slug": "binary search",
    "name": "Binary Search",
    "altTitles": [
      "Binary Search Implementation"
    ],
    "statement": "Search for a key in a sorted array in O(log n); also asked conceptually in interviews.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "basics"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "704. Binary Search",
    "leetcodeNumber": 704,
    "leetcodeExact": true,
    "gfg": "Binary Search",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 11,
    "sourceCount": 10,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-interview-experience-2024/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "merge intervals",
    "name": "Merge Intervals",
    "altTitles": [
      "Merge Overlapping Intervals"
    ],
    "statement": "Merge all overlapping intervals and return the non-overlapping result.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Arrays",
      "Intervals",
      "intervals",
      "sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "56. Merge Intervals",
    "leetcodeNumber": 56,
    "leetcodeExact": true,
    "gfg": "Overlapping Intervals",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "frequency": "Very High",
    "frequencyScore": 11,
    "sourceCount": 8,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/4540842/Infosys-or-Specialist-Programmer-or-Bangalore-or-2023-Batch-Offer/"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "rpg game maximum monsters defeated",
    "name": "RPG Game: Maximum Monsters Defeated",
    "altTitles": [
      "Maximum Monsters You Can Defeat (RPG Game)",
      "Monster Battle (RPG Monster Defeat)",
      "Monster Defeat Challenge",
      "Monster Defeat Quest"
    ],
    "statement": "Given n monsters each with a required experience threshold and an experience bonus, starting with initial experience e and free choice of fight order, maximize the number of monsters defeated.",
    "difficulty": "Hard",
    "topic": "Greedy",
    "subtopics": [
      "Priority Queue",
      "Simulation",
      "Sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 11,
    "sourceCount": 7,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - souraOP/Infosys-Specialist-Programmer-Questions",
        "url": "https://github.com/souraOP/Infosys-Specialist-Programmer-Questions/blob/main/RPGgame.java"
      },
      {
        "name": "GitHub - vedlab/infosys",
        "url": "https://github.com/vedlab/infosys"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": "Also called Monster Defeat Problem / monester.py. | Also called 'Monster Defeat Strategy' (Talent Battle) and 'Monster Defeat Sequence' (CCBP). | Reported from the 2022 SP/DSE online assessment."
  },
  {
    "slug": "two sum",
    "name": "Two Sum",
    "altTitles": [
      "Pair with given Sum (Two Sum)"
    ],
    "statement": "Find a pair of elements in an array whose sum equals a target.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Two Pointers",
      "arrays"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "1. Two Sum",
    "leetcodeNumber": 1,
    "leetcodeExact": true,
    "gfg": "Key Pair",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google",
      "everywhere"
    ],
    "frequency": "Very High",
    "frequencyScore": 11,
    "sourceCount": 9,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@ajais740/my-interview-experience-with-infosys-for-the-specialist-programmer-role-8d498a07e784"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "first non repeating character",
    "name": "First Non-Repeating Character",
    "altTitles": [
      "First Non-Repeating Character / Unique Letters"
    ],
    "statement": "Find the first character that appears exactly once in a string (variant: print all non-repeating letters).",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Frequency Counting",
      "HashMap",
      "Queue",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "387. First Unique Character in a String",
    "leetcodeNumber": 387,
    "leetcodeExact": true,
    "gfg": "GFG First non-repeating character in a stream",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Accenture",
      "Amazon",
      "Flipkart",
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 10,
    "sourceCount": 9,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@rhythm6194/interview-experience-for-the-power-programmer-specialist-programmer-role-at-infosys-mean-mern-858d3831693b"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "frequency array elements",
    "name": "Frequency of Array Elements",
    "altTitles": [
      "Count Frequencies of Array Elements",
      "Count Frequency of Elements",
      "Count Repeated vs Non-Repeated Elements",
      "Frequency of all elements/characters"
    ],
    "statement": "Find the frequency/occurrence of every element in an array or every character in a string using a map.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Counting",
      "Frequency Counting",
      "Strings"
    ],
    "roles": [
      "DSE",
      "System Engineer"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Count Frequencies in an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 10,
    "sourceCount": 7,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-specialist-engineer/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-dse-2022-2/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smallest base where n has all identical digits",
    "name": "Smallest Base Where N Has All Identical Digits",
    "altTitles": [
      "Base Representation / Same Digit Base Conversion",
      "Minimum Base for Uniform Digits",
      "Same Digit Base Conversion",
      "Smallest Base with All Same Digits",
      "Uniform Base Representation (Same Digit in Base K)"
    ],
    "statement": "Given a decimal number M, find the minimum base B such that the representation of M in base B consists of all identical digits.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Base Conversion",
      "Brute Force",
      "Number Systems",
      "Number Theory",
      "base conversion",
      "divisors"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 10,
    "sourceCount": 6,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - SkBashaOp/Infosys-SP-DSE-role-Coding",
        "url": "https://github.com/SkBashaOp/Infosys-SP-DSE-role-Coding"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/digital-specialist-engineer/coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "Also called 'Same Digit Base Conversion' on Lets-Code."
  },
  {
    "slug": "subset sum problem",
    "name": "Subset Sum Problem",
    "altTitles": [
      "Count of subsets with sum equal to X",
      "Subset Sum",
      "Subset-sum variation"
    ],
    "statement": "Given a set of non-negative integers and a value sum, check if there is a subset whose elements add up to the given sum.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "0/1 Knapsack variant",
      "0/1 knapsack",
      "Arrays",
      "Knapsack",
      "Recursion",
      "Subset Sum",
      "Subsets",
      "subset sum"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2020,
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "416. Partition Equal Subset Sum (related)",
    "leetcodeNumber": 416,
    "leetcodeExact": false,
    "gfg": "Count of subsets with sum equal to X",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 10,
    "sourceCount": 5,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-pp-role-through-hackwithinfy-2020/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-6/"
      }
    ],
    "notes": "Listed as question 34 (Subset Sum Check) in bhasidhshaik top-50 sheet."
  },
  {
    "slug": "valid parentheses",
    "name": "Valid Parentheses",
    "altTitles": [
      "Valid Parentheses / Balanced Brackets"
    ],
    "statement": "Check whether a string of brackets is balanced and properly nested.",
    "difficulty": "Easy",
    "topic": "Stack",
    "subtopics": [
      "Strings",
      "strings"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "20. Valid Parentheses",
    "leetcodeNumber": 20,
    "leetcodeExact": true,
    "gfg": "Parenthesis Checker",
    "hackerrank": "Balanced Brackets",
    "codeforces": "",
    "companies": [
      "Accenture",
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 10,
    "sourceCount": 9,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@pravallikaseshasai/hackwithinfy-guide-rounds-questions-how-i-landed-the-dse-role-bc4f64db465d"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "gift box packing k consecutive boxes max distinct value",
    "name": "Gift Box Packing (K Consecutive Boxes, Max Distinct Value)",
    "altTitles": [
      "Gift Box Packing",
      "Gift Box Packing (K boxes, distinct types value)",
      "Maximum Box Value Distribution (Gift Box Packing)"
    ],
    "statement": "Distribute N gifts (array) into exactly K boxes of consecutive gifts so that the total value, defined as the sum over boxes of the count of distinct gift types, is maximized.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "Distinct Elements",
      "Divide and Conquer Optimization",
      "Greedy",
      "Partition DP",
      "Partitioning",
      "Segment Tree Optimization"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 833B The Bakery (equivalent)",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 9,
    "sourceCount": 5,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - souraOP/Infosys-Specialist-Programmer-Questions",
        "url": "https://github.com/souraOP/Infosys-Specialist-Programmer-Questions/blob/main/santa.java"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "souraOP version framed as Santa/Wael distributing gifts."
  },
  {
    "slug": "longest increasing subsequence",
    "name": "Longest Increasing Subsequence",
    "altTitles": [
      "Longest Strictly Increasing Subsequence"
    ],
    "statement": "Find the length of the longest strictly increasing subsequence of an array.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "Binary Search",
      "LIS",
      "Patience Sorting",
      "binary search",
      "patience sorting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "300. Longest Increasing Subsequence",
    "leetcodeNumber": 300,
    "leetcodeExact": true,
    "gfg": "GFG Longest Increasing Subsequence",
    "hackerrank": "The Longest Increasing Subsequence",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "TCS Digital"
    ],
    "frequency": "Very High",
    "frequencyScore": 9,
    "sourceCount": 7,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - karthikreddy-7/Infosys-SP-Coding-Questions",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-program-power-programmer-interview-experience-wave-23/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": "Interviewers also reported asking 'LIS and LCS leetcode mediums' per search snippets."
  },
  {
    "slug": "longest substring without repeating characters",
    "name": "Longest Substring Without Repeating Characters",
    "altTitles": [
      "Longest Array/Substring Without Duplicates"
    ],
    "statement": "Find the length of the longest substring (or subarray) containing no duplicate characters/elements.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "HashSet",
      "Strings",
      "Two Pointers",
      "hash set",
      "strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "3. Longest Substring Without Repeating Characters",
    "leetcodeNumber": 3,
    "leetcodeExact": true,
    "gfg": "GFG Length of the longest substring",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart",
      "Microsoft",
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 9,
    "sourceCount": 8,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@nandita27iitp/hackwithinfy-2024-infosys-interview-experience-fte-specialist-programmer-first-walk-in-719944683a2d"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@tej_varshith/infosys-specialist-programmer-interview-experience-5e03d644cdc9"
      },
      {
        "name": "Quora",
        "url": "https://www.quora.com/What-are-the-questions-that-are-asked-in-the-technical-round-in-Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated. | Variants: longest array without duplicates; vector of strings variant in HWI 2024 walk-in."
  },
  {
    "slug": "merge sort implementation",
    "name": "Merge Sort Implementation",
    "altTitles": [
      "Merge Sort (implement)",
      "Merge Sort / Sort an Array"
    ],
    "statement": "Implement merge sort (write and explain the algorithm; LC 912 Sort an Array is the equivalent exercise).",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "Divide and Conquer",
      "Recursion",
      "divide and conquer",
      "recursion"
    ],
    "roles": [
      "DSE",
      "SP"
    ],
    "years": [
      2019,
      2022,
      2023,
      2025
    ],
    "leetcode": "LC 912 Sort an Array",
    "leetcodeExact": true,
    "gfg": "Merge Sort",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Very High",
    "frequencyScore": 9,
    "sourceCount": 6,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-digital-specialist-engineer-interview-experience/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-infytq-dse-interview-experience-2023/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-power-programmer-role-through-hackwithinfy/"
      },
      {
        "name": "InterviewBit",
        "url": "https://www.interviewbit.com/infosys-interview-questions/"
      }
    ],
    "notes": "Often asked as live coding in the technical interview."
  },
  {
    "slug": "rotate array by k steps",
    "name": "Rotate Array by K Steps",
    "altTitles": [
      "Rotate Array",
      "Rotate Array by K"
    ],
    "statement": "Rotate an array to the right (or left) by k steps.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Reversal Algorithm",
      "Reversal Trick",
      "reversal trick"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "189. Rotate Array",
    "leetcodeNumber": 189,
    "leetcodeExact": true,
    "gfg": "GFG Rotate Array",
    "hackerrank": "Arrays: Left Rotation",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 9,
    "sourceCount": 8,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": "Also reported as 'array rotation clockwise/anti-clockwise with prefix sum' in Power Programmer prep threads. From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "detect cycle linked list",
    "name": "Detect Cycle in Linked List",
    "altTitles": [
      "Detect Cycle in a Linked List",
      "Linked List Cycle",
      "Linked List Cycle Detection"
    ],
    "statement": "Determine whether a singly linked list contains a cycle (Floyd's tortoise-hare).",
    "difficulty": "Medium",
    "topic": "Linked List",
    "subtopics": [
      "Floyd Cycle Detection",
      "Floyd cycle detection",
      "Floyd's Cycle Detection",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "141. Linked List Cycle",
    "leetcodeNumber": 141,
    "leetcodeExact": true,
    "gfg": "Detect Loop in Linked List",
    "hackerrank": "Cycle Detection",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Cognizant",
      "Microsoft",
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 7,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "LinkedIn (Arnav Tyagi)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": "Core technique behind the custom linked-list-with-cycle SP 2026 OA question. From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "edit distance",
    "name": "Edit Distance",
    "altTitles": [],
    "statement": "Minimum insertions, deletions, and substitutions to convert one string into another.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "2D DP",
      "Strings",
      "strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "72. Edit Distance",
    "leetcodeNumber": 72,
    "leetcodeExact": true,
    "gfg": "Edit Distance",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 6,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys-technologies-limited/infosys-interview-experience-specialist-programmer-may-2022-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "factorial",
    "name": "Factorial",
    "altTitles": [
      "Factorial Using Recursion",
      "Factorial of N",
      "Factorial of a Number"
    ],
    "statement": "Compute the factorial of a non-negative integer N (iteratively or recursively).",
    "difficulty": "Easy",
    "topic": "Recursion",
    "subtopics": [
      "Math",
      "Recursion"
    ],
    "roles": [
      "DSE",
      "System Engineer"
    ],
    "years": [
      2022,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Factorial",
    "hackerrank": "Recursion: Fibonacci-style basics",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 6,
    "sources": [
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-2022/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "house robber",
    "name": "House Robber",
    "altTitles": [
      "House Robber (maximum possible stolen value)"
    ],
    "statement": "Maximize sum of stolen values from houses where adjacent houses cannot both be robbed.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "1D DP",
      "Arrays",
      "Non-adjacent Selection",
      "arrays"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "198. House Robber",
    "leetcodeNumber": 198,
    "leetcodeExact": true,
    "gfg": "Max possible stolen value from houses (Stickler Thief)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 7,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@ajais740/my-interview-experience-with-infosys-for-the-specialist-programmer-role-8d498a07e784"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-program-power-programmer-interview-experience-wave-23/"
      }
    ],
    "notes": "Asked in Wave-23 technical interview with GfG link shown to candidate. | From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "longest palindromic substring",
    "name": "Longest Palindromic Substring",
    "altTitles": [],
    "statement": "Find the longest palindromic substring in a given string; brute force then optimized (DP/expand-around-center).",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "DP",
      "Expand Around Center",
      "Strings",
      "Two Pointers",
      "expand around center"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2021,
      2024,
      2025
    ],
    "leetcode": "5. Longest Palindromic Substring",
    "leetcodeNumber": 5,
    "leetcodeExact": true,
    "gfg": "GFG Longest Palindromic Substring",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft",
      "TCS Digital"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 6,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-2/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "minimum railway platforms",
    "name": "Minimum Railway Platforms",
    "altTitles": [
      "Minimum Platforms",
      "Minimum Platforms Required"
    ],
    "statement": "Given arrival and departure times of trains, find the minimum number of platforms so that no train waits.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Intervals",
      "Sorting",
      "Sweep Line",
      "Two Pointers",
      "intervals",
      "sorting",
      "sweep line"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "253. Meeting Rooms II (analog)",
    "leetcodeNumber": 253,
    "leetcodeExact": true,
    "gfg": "GFG Minimum Platforms",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft",
      "TCS",
      "TCS Digital"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse linked list",
    "name": "Reverse a Linked List",
    "altTitles": [
      "Reverse Linked List",
      "Reverse a Singly Linked List"
    ],
    "statement": "Reverse a singly linked list iteratively or recursively and return the new head.",
    "difficulty": "Easy",
    "topic": "Linked List",
    "subtopics": [
      "Pointers",
      "Recursion",
      "pointers",
      "recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "206. Reverse Linked List",
    "leetcodeNumber": 206,
    "leetcodeExact": true,
    "gfg": "GFG Reverse a linked list",
    "hackerrank": "HackerRank Reverse a linked list",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 6,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "swap two numbers without temporary variable",
    "name": "Swap Two Numbers Without Temporary Variable",
    "altTitles": [
      "Swap Two Numbers Without Third Variable",
      "Swap Two Numbers Without a Third Variable",
      "Swap two numbers without a third variable"
    ],
    "statement": "Swap two integers without using a third variable (arithmetic or XOR trick).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Basics",
      "Bit Manipulation",
      "Implementation",
      "XOR trick",
      "basics"
    ],
    "roles": [
      "SP",
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Swap two numbers without using a temporary variable",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 8,
    "sourceCount": 7,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-3/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "best time buy and sell stock",
    "name": "Best Time to Buy and Sell Stock",
    "altTitles": [],
    "statement": "Maximize profit from one (or more) stock transactions given daily prices.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "DP",
      "Greedy",
      "Prefix Minimum",
      "prefix min"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "121. Best Time to Buy and Sell Stock",
    "leetcodeNumber": 121,
    "leetcodeExact": true,
    "gfg": "Buy stock with maximum profit",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Very High",
    "frequencyScore": 7,
    "sourceCount": 6,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated. | Same as 'max difference larger after smaller' phrasing in other lists."
  },
  {
    "slug": "merge two sorted linked lists",
    "name": "Merge Two Sorted Linked Lists",
    "altTitles": [
      "Merge Two Sorted Lists"
    ],
    "statement": "Merge two sorted linked lists into one sorted list (asked directly from LeetCode with 10-minute limit).",
    "difficulty": "Easy",
    "topic": "Linked List",
    "subtopics": [
      "Merge",
      "Merging",
      "Recursion",
      "Two Pointers",
      "merging"
    ],
    "roles": [
      "DSE",
      "Power Programmer"
    ],
    "years": [
      2021,
      2024,
      2025
    ],
    "leetcode": "21. Merge Two Sorted Lists",
    "leetcodeNumber": 21,
    "leetcodeExact": true,
    "gfg": "GFG Merge two sorted linked lists",
    "hackerrank": "Merge two sorted linked lists",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Very High",
    "frequencyScore": 7,
    "sourceCount": 5,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-dse-interview-experience-on-campus-2021/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "second largest element array",
    "name": "Second Largest Element in Array",
    "altTitles": [
      "Second Largest Element"
    ],
    "statement": "Find the second largest element of an array in one pass.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Implementation",
      "Scanning"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Second Largest",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS",
      "Wipro"
    ],
    "frequency": "Very High",
    "frequencyScore": 7,
    "sourceCount": 7,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "add two numbers as linked lists",
    "name": "Add Two Numbers as Linked Lists",
    "altTitles": [
      "Add Two Numbers",
      "Add Two Numbers Represented as Linked Lists",
      "Add Two Numbers Represented by Linked Lists"
    ],
    "statement": "Sum two numbers whose digits are stored in linked lists (reversed order) and return the result as a linked list.",
    "difficulty": "Medium",
    "topic": "Linked List",
    "subtopics": [
      "Carry Handling",
      "Math",
      "carry",
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "2. Add Two Numbers",
    "leetcodeNumber": 2,
    "leetcodeExact": true,
    "gfg": "Add two numbers represented by linked lists",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      },
      {
        "name": "LinkedIn (Arnav Tyagi)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": ""
  },
  {
    "slug": "armstrong check",
    "name": "Armstrong Number Check",
    "altTitles": [
      "Armstrong Number"
    ],
    "statement": "Verify whether the sum of each digit raised to the number of digits equals the original number.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Digits"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "Armstrong Number (LC 1134)",
    "leetcodeNumber": 1134,
    "leetcodeExact": true,
    "gfg": "Armstrong Numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 6,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary tree traversals",
    "name": "Binary Tree Traversals",
    "altTitles": [
      "Basic Tree Traversal (DFS/BFS)",
      "Binary tree / BST traversals (preorder etc.)"
    ],
    "statement": "Write code for a tree traversal (e.g. preorder traversal of a BST) and explain the recursion.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "BFS",
      "BST",
      "DFS",
      "Preorder",
      "Recursion",
      "traversal"
    ],
    "roles": [
      "DSE",
      "SP"
    ],
    "years": [
      2021,
      2024,
      2025
    ],
    "leetcode": "LC 144 Binary Tree Preorder Traversal",
    "leetcodeExact": true,
    "gfg": "Preorder Traversal",
    "hackerrank": "Tree: Preorder Traversal",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 4,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/6436250/"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6567886/my-infosys-specialist-programmer-intervi-uiue/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-digital-specialist-engineeroff-campus/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-3/"
      }
    ],
    "notes": "SP 2024 interviewer asked for any traversal plus recursion visualization."
  },
  {
    "slug": "choose x 0 k maximizing sum x xor i",
    "name": "Choose X in [0,K] Maximizing Sum of (X XOR A[i])",
    "altTitles": [
      "Maximize XOR-Sum with x in [0,K]",
      "Resil's Xor-Sum Maximization",
      "XOR-Sum Maximization"
    ],
    "statement": "Find an integer x in range [0, K] that maximizes Xor-sum(x) = (x XOR A[1]) + (x XOR A[2]) + ... + (x XOR A[N]).",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Greedy on Bits",
      "Greedy on bits",
      "XOR",
      "arrays",
      "greedy bit construction"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2022,
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 282C-style bit greedy",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      }
    ],
    "notes": "Not from one of the five primary communities; included for coverage as a frequently cited PYQ. | Greedy bit-by-bit: pick each bit where majority of A[i] has 0, subject to x <= K."
  },
  {
    "slug": "isomorphic strings",
    "name": "Isomorphic Strings",
    "altTitles": [],
    "statement": "Determine whether two strings are isomorphic under a one-to-one character mapping.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Strings",
      "mapping",
      "strings"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2021,
      2024,
      2025
    ],
    "leetcode": "205. Isomorphic Strings",
    "leetcodeNumber": 205,
    "leetcodeExact": true,
    "gfg": "GFG Isomorphic Strings",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys/interview-experience-by-ajay-singh-specialist-programmer-apr-2021-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "linked list cycle detection floyd",
    "name": "Linked List Cycle Detection (Floyd)",
    "altTitles": [
      "Detect Cycle in Linked List"
    ],
    "statement": "Detect whether a linked list contains a cycle using Floyd's slow/fast pointers.",
    "difficulty": "Easy",
    "topic": "Linked List",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "141. Linked List Cycle",
    "leetcodeNumber": 141,
    "leetcodeExact": true,
    "gfg": "Detect Loop in linked list",
    "hackerrank": "Cycle Detection",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 5,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "merge two sorted arrays place",
    "name": "Merge Two Sorted Arrays In-Place",
    "altTitles": [
      "Merge Sorted Array",
      "Merge Two Sorted Arrays",
      "Merge Two Sorted Arrays Without Extra Space"
    ],
    "statement": "Merge two sorted arrays into one sorted array (in place for LC 88 variant).",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Gap Method",
      "Sorting",
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "88. Merge Sorted Array (variant)",
    "leetcodeNumber": 88,
    "leetcodeExact": false,
    "gfg": "GFG Merge Without Extra Space",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 5,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "minimum cost make array zero subarray 1 cost x set zero cost y",
    "name": "Minimum Cost to Make Array Zero (Subarray -1 Cost X / Set-Zero Cost Y)",
    "altTitles": [
      "Array Minimization with Two Operations",
      "Minimum Cost Array Zeroing",
      "Minimum Cost to Make Array Zero"
    ],
    "statement": "Make all array elements zero using two operations: subtract 1 from every element of a subarray (cost X) or set a single element to zero (cost Y); minimize total cost.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Cost Optimization",
      "DP",
      "Optimization",
      "arrays",
      "cost optimization"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 3,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/digital-specialist-engineer/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "Lets-Code calls it 'Array Minimization Problem'."
  },
  {
    "slug": "minimum days make terrain strictly decreasing power 2 reductions",
    "name": "Minimum Days to Make Terrain Strictly Decreasing (Power-of-2 Reductions)",
    "altTitles": [
      "Downslope Terrain (strictly decreasing via power-of-2 digs)",
      "Mountain Terrain / Road in Rugged Terrain",
      "Terrain Downslope / Terrain Transformation",
      "Terrain Transformation (Power-of-2 Reductions)"
    ],
    "statement": "Given terrain heights, on day D you can reduce chosen positions by 2^(D-1); find the minimum number of days to make the sequence strictly decreasing (build the road).",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "Binary Search",
      "Bit Manipulation",
      "Greedy",
      "Math",
      "bit manipulation",
      "greedy"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021,
      2022,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 3,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "GeeksCodes",
        "url": "https://www.geekscodes.com/2025/02/infosys-hackwithinfy-2025-sample.html"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "Lets-Code calls it 'Terrain Transformation'; GeeksCodes lists it as 'build a road in rugged terrain'. | Lets-Code calls it 'Terrain Transformation'."
  },
  {
    "slug": "minimum spanning tree connect cities at min cost",
    "name": "Minimum Spanning Tree (Connect Cities at Min Cost)",
    "altTitles": [
      "Kruskal's MST question",
      "Minimum Cost to Connect All Cities (MST)",
      "Minimum Spanning Tree Problem"
    ],
    "statement": "Given N cities and weighted edges, find the minimum cost to connect all cities (minimum spanning tree).",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "Greedy",
      "Kruskal",
      "MST",
      "Union Find"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2021,
      2022,
      2025,
      2026
    ],
    "leetcode": "1584. Min Cost to Connect All Points (analog)",
    "leetcodeNumber": 1584,
    "leetcodeExact": true,
    "gfg": "Kruskal's Minimum Spanning Tree Algorithm",
    "hackerrank": "Kruskal (MST): Really Special Subtree",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-speacialist-programmer-2022/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-power-programmer-2021/"
      },
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum work transport wine between houses",
    "name": "Minimum Work to Transport Wine Between Houses",
    "altTitles": [
      "Wine Bottle Transport",
      "Wine Bottle Transport (min work)"
    ],
    "statement": "N houses on a line each have surplus or demand of wine bottles; moving one bottle between adjacent houses costs one unit of work. Find the minimum total work to satisfy all demands.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Prefix Balance",
      "Prefix Sum",
      "Prefix Sums",
      "arrays",
      "prefix sums"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Transport wine problem (SPOJ WINE similar)",
    "hackerrank": "",
    "codeforces": "SPOJ WINE / classic prefix balance problem",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      }
    ],
    "notes": "Full statement with examples in karthikreddy-7 README (wineSelling.java)."
  },
  {
    "slug": "next permutation",
    "name": "Next Permutation",
    "altTitles": [
      "Next Permutation (smallest greater number with same digits)"
    ],
    "statement": "Find the smallest number greater than a given number that can be formed using exactly the same digits.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Permutation",
      "Permutations",
      "Strings",
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "31. Next Permutation",
    "leetcodeNumber": 31,
    "leetcodeExact": true,
    "gfg": "GFG Next Permutation",
    "hackerrank": "Bigger is Greater",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 5,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-role/"
      }
    ],
    "notes": "Asked in offline second interview. | From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "partition equal subset sum",
    "name": "Partition Equal Subset Sum",
    "altTitles": [],
    "statement": "Determine whether an array can be partitioned into two subsets with equal sums.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "0/1 knapsack",
      "Knapsack",
      "Subset Sum",
      "Subsets",
      "subset sum"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "416. Partition Equal Subset Sum",
    "leetcodeNumber": 416,
    "leetcodeExact": true,
    "gfg": "Partition Equal Subset Sum",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys-technologies-limited/infosys-interview-experience-specialist-programmer-may-2022-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "queue using two stacks",
    "name": "Queue Using Two Stacks",
    "altTitles": [
      "Implement Queue Using Two Stacks",
      "Implement Queue using Stacks"
    ],
    "statement": "Classic problem: implement a queue with two stacks (costly dequeue variant discussed).",
    "difficulty": "Easy",
    "topic": "Queue",
    "subtopics": [
      "Design",
      "Queue",
      "Stack",
      "design",
      "stack"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2022,
      2024,
      2025
    ],
    "leetcode": "232. Implement Queue using Stacks",
    "leetcodeNumber": 232,
    "leetcodeExact": true,
    "gfg": "GFG Queue using Stacks",
    "hackerrank": "HackerRank Queue using Two Stacks",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-2022/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "remove duplicates from sorted array",
    "name": "Remove Duplicates from Sorted Array",
    "altTitles": [],
    "statement": "Remove duplicates in-place from a sorted array and return the new length.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "26. Remove Duplicates from Sorted Array",
    "leetcodeNumber": 26,
    "leetcodeExact": true,
    "gfg": "GFG Remove duplicate elements from sorted Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 5,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "rotate matrix by 90 degrees",
    "name": "Rotate Matrix by 90 Degrees",
    "altTitles": [
      "Matrix Rotation (rotate image 90 degrees)",
      "Rotate Matrix 90 Degrees"
    ],
    "statement": "Rotate a square matrix 90 degrees clockwise in place.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "In-place",
      "Matrix",
      "Simulation"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "48. Rotate Image",
    "leetcodeNumber": 48,
    "leetcodeExact": true,
    "gfg": "GFG Rotate a matrix by 90 degree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 5,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@pravallikaseshasai/hackwithinfy-guide-rounds-questions-how-i-landed-the-dse-role-bc4f64db465d"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sliding window maximum",
    "name": "Sliding Window Maximum",
    "altTitles": [
      "Maximum of all subarrays of size k"
    ],
    "statement": "Find the maximum element of every contiguous window of size k in an array; optimal solution uses a deque.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Arrays",
      "Deque",
      "Monotonic Queue"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2021,
      2022,
      2025,
      2026
    ],
    "leetcode": "239. Sliding Window Maximum",
    "leetcodeNumber": 239,
    "leetcodeExact": true,
    "gfg": "Maximum of all subarrays of size K",
    "hackerrank": "Deque-STL",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart"
    ],
    "frequency": "High",
    "frequencyScore": 6,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-speacialist-programmer-2022/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-power-programmer-2021-virtual-2/"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "3sum",
    "name": "3Sum",
    "altTitles": [
      "Three Sum"
    ],
    "statement": "Find all unique triplets that sum to zero (or a target).",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Sorting",
      "Two Pointers",
      "sorting",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "15. 3Sum",
    "leetcodeNumber": 15,
    "leetcodeExact": true,
    "gfg": "Find triplets with zero sum",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "arrays divisibility condition",
    "name": "Count Arrays with Divisibility Condition",
    "altTitles": [
      "Count Good Arrays (Divisibility Chains)"
    ],
    "statement": "Count integer arrays of length K with each element in 1..N where every element is divisible by the previous one; answer modulo 10000.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Counting",
      "Divisors",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "Count the Number of Ideal Arrays (LC 2338, related)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - souraOP/Infosys-Specialist-Programmer-Questions",
        "url": "https://github.com/souraOP/Infosys-Specialist-Programmer-Questions/blob/main/birthdayGift.java"
      }
    ],
    "notes": "souraOP frames it as a birthday gift story (birthdayGift.java); Bobby-chirra lists it as Count Good Arrays."
  },
  {
    "slug": "decimal binary conversion",
    "name": "Decimal to Binary Conversion",
    "altTitles": [],
    "statement": "Convert a base-10 number to its binary representation.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Bit Manipulation",
      "Number Systems"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Decimal to binary",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Cognizant",
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "detect cycle directed graph",
    "name": "Detect Cycle in Directed Graph",
    "altTitles": [
      "Detect Cycle in a Directed Graph"
    ],
    "statement": "Determine whether a directed graph contains a cycle (DFS colors / Kahn's algorithm).",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "Colors",
      "DFS",
      "Topological Sort"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "207. Course Schedule (analog)",
    "leetcodeNumber": 207,
    "leetcodeExact": true,
    "gfg": "Detect cycle in a directed graph",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart"
    ],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": "Course Schedule listed separately in the same repo."
  },
  {
    "slug": "dijkstra shortest path",
    "name": "Dijkstra Shortest Path",
    "altTitles": [
      "Dijkstra's Algorithm",
      "Dijkstra's Shortest Path"
    ],
    "statement": "Find shortest paths from a source in a weighted graph using Dijkstra's algorithm.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "Dijkstra",
      "Heap",
      "Priority Queue",
      "Shortest Path"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "743. Network Delay Time (analog)",
    "leetcodeNumber": 743,
    "leetcodeExact": true,
    "gfg": "Dijkstra Algorithm",
    "hackerrank": "Dijkstra: Shortest Reach 2",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "fibonacci series memoization",
    "name": "Fibonacci Series (with Memoization)",
    "altTitles": [
      "Fibonacci Series"
    ],
    "statement": "Print/compute the Fibonacci series up to N, discussing recursion vs memoization.",
    "difficulty": "Easy",
    "topic": "Recursion",
    "subtopics": [
      "DP",
      "Memoization"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019,
      2020,
      2022
    ],
    "leetcode": "509. Fibonacci Number",
    "leetcodeNumber": 509,
    "leetcodeExact": true,
    "gfg": "Program for n-th Fibonacci number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Medium",
        "url": "https://medium.com/@arpitakonar09/hackwithinfy-interview-experience-2020-a11c737401fb"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-power-programmer-interview-2019/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "gym minimum exercises drain energy",
    "name": "Gym: Minimum Exercises to Drain Energy",
    "altTitles": [
      "Gym (Minimum Exercises to Get Tired)",
      "Gym Exercise Fatigue",
      "Gym Exercises"
    ],
    "statement": "Each exercise drains some energy and can be done at most twice; find the minimum number of exercises to bring your energy to zero or below, or -1 if impossible.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Simulation",
      "Sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2020,
      2021,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - itsmeheisenberg/HackWithInfy",
        "url": "https://github.com/itsmeheisenberg/HackWithInfy"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      }
    ],
    "notes": "Repo includes question screenshots and the official sample paper PDF."
  },
  {
    "slug": "longest common prefix",
    "name": "Longest Common Prefix",
    "altTitles": [],
    "statement": "Find the longest common prefix among an array of strings.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Scanning",
      "Sorting",
      "Trie",
      "scanning"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "14. Longest Common Prefix",
    "leetcodeNumber": 14,
    "leetcodeExact": true,
    "gfg": "GFG Longest Common Prefix in an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum consecutive vacation days cancel at most k obligations",
    "name": "Maximum Consecutive Vacation Days (Cancel at Most K Obligations)",
    "altTitles": [
      "Maximum Vacation Days",
      "Maximum Vacation Days (cancel at most K obligations)",
      "Vacation Days",
      "Vacation Scheduling"
    ],
    "statement": "Within N days containing some obligation days, cancel at most K obligations to maximize the number of consecutive free (vacation) days.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Arrays",
      "Greedy",
      "Two Pointers",
      "gaps",
      "sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021,
      2024,
      2025
    ],
    "leetcode": "1004. Max Consecutive Ones III (analog)",
    "leetcodeNumber": 1004,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/digital-specialist-engineer/coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "Direct sliding-window with at most K removals."
  },
  {
    "slug": "maximum sum subarray at most k distinct elements",
    "name": "Maximum Sum Subarray with At Most K Distinct Elements",
    "altTitles": [
      "Maximum Sum Good Subarray (at most K distinct)"
    ],
    "statement": "Find the maximum sum of a contiguous subarray containing at most K distinct elements (empty subarray allowed, sum 0).",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "HashMap",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Similar to 2461/904 (distinct-constrained windows)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/maxGoodSubarray.java"
      },
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      },
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      },
      {
        "name": "Scribd",
        "url": "https://www.scribd.com/document/874558785/HackWithInfy-Practice-Questions-2025-Part-1"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize decimal value binary string swap flip costs",
    "name": "Minimize Decimal Value of Binary String (Swap/Flip Costs)",
    "altTitles": [
      "Binary String Ugliness",
      "Binary String Ugliness Minimization"
    ],
    "statement": "Minimize the decimal value of a binary string using swaps (cost A) and flips (cost B) within a limited budget.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Bit Manipulation",
      "Cost Optimization",
      "Optimization",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "Talent Battle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum adjacent swaps separate evens and odds",
    "name": "Minimum Adjacent Swaps to Separate Evens and Odds",
    "altTitles": [
      "Summer Array",
      "Summer Array Arrangement (min adjacent swaps parity split)",
      "Summer Array Rearrange"
    ],
    "statement": "Rearrange the array so all even numbers are on one side and odd numbers on the other using only adjacent swaps; find the minimum number of operations.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Arrays",
      "Counting",
      "Greedy",
      "Inversions",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/adjacentSwap.java"
      },
      {
        "name": "Talent Battle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum changes make mountain array",
    "name": "Minimum Changes to Make Mountain Array",
    "altTitles": [
      "Mountain Array",
      "Mountain Array (min changes)",
      "Mountain Array Minimum Changes"
    ],
    "statement": "Find the minimum number of element changes needed to turn an array into a mountain (strictly increasing then strictly decreasing).",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "DP",
      "Greedy",
      "LIS",
      "Two Pointers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "1671. Minimum Number of Removals to Make Mountain Array (similar)",
    "leetcodeNumber": 1671,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum window substring",
    "name": "Minimum Window Substring",
    "altTitles": [],
    "statement": "Find the smallest substring containing all characters of a target string.",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "subtopics": [
      "HashMap",
      "Strings",
      "hash map",
      "strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "76. Minimum Window Substring",
    "leetcodeNumber": 76,
    "leetcodeExact": true,
    "gfg": "GFG Smallest window containing all characters of another string",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "next higher palindrome",
    "name": "Next Higher Palindrome Number",
    "altTitles": [
      "Next smallest/higher palindrome number"
    ],
    "statement": "Given a number (often itself a palindrome), find the next larger palindrome number.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Implementation",
      "Strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020,
      2021,
      2024
    ],
    "leetcode": "LC 564 Find the Closest Palindrome (related)",
    "leetcodeExact": false,
    "gfg": "Closest Palindrome / Next higher palindromic number using the same set of digits",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-virtual-interview-experience-for-power-programmer-hackwithinfy-2020/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-power-programmer-2021-virtual-2/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-3/"
      }
    ],
    "notes": "SP 2024 version: first check if number is palindrome, then find the next palindrome."
  },
  {
    "slug": "islands",
    "name": "Number Of Islands",
    "altTitles": [
      "Count warship groups in 2D grid (Number of Islands variant)"
    ],
    "statement": "Count distinct groups of 1s (warships) connected horizontally or vertically in a 2D grid of 1s and 0s.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "BFS",
      "DFS",
      "Graphs",
      "Grid",
      "Matrix",
      "grid"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 200 Number of Islands",
    "leetcodeExact": true,
    "gfg": "Find the number of islands",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 5,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-specialist-programmer-full-time-on-campus-2025-batch/"
      }
    ],
    "notes": "Framed as counting warship groups. | From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "octal binary conversion",
    "name": "Octal to Binary Conversion",
    "altTitles": [],
    "statement": "Convert an octal number to its binary representation.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Systems"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Octal to Binary",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reduce n 1 min moves three ops",
    "name": "Reduce N To 1 Min Moves Three Ops",
    "altTitles": [
      "Enemy Army Reduction (General Ali)"
    ],
    "statement": "Reduce an army of N soldiers to 1 using minimum moves where each move is: subtract 1, halve (floor), or reduce by two-thirds (floor).",
    "difficulty": "Easy",
    "topic": "BFS",
    "subtopics": [
      "DP on Integers",
      "Memoization",
      "Shortest Path on States"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "Similar to 2059/397 (integer replacement style)",
    "leetcodeExact": true,
    "gfg": "Minimum steps to reduce N to 1 (variant)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      },
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      },
      {
        "name": "Scribd",
        "url": "https://www.scribd.com/document/727074379/Previous-HackWithInfy-Questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "remove duplicates from array",
    "name": "Remove Duplicates from Array",
    "altTitles": [
      "Remove Duplicates from Sorted Array"
    ],
    "statement": "Remove duplicate elements from a (sorted) array in place.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Remove Duplicates from Sorted Array (LC 26)",
    "leetcodeNumber": 26,
    "leetcodeExact": true,
    "gfg": "Remove duplicate elements from sorted Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 5,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "string rotation check",
    "name": "String Rotation Check",
    "altTitles": [
      "Arrays, hash-map and string rotation problem"
    ],
    "statement": "Medium interview problem combining arrays, hash maps and string rotation (e.g. check if one string is a rotation of another).",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Arrays",
      "Concatenation Trick",
      "HashMap"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2024,
      2025
    ],
    "leetcode": "796. Rotate String",
    "leetcodeNumber": 796,
    "leetcodeExact": true,
    "gfg": "Check if strings are rotations of each other",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-2022/"
      }
    ],
    "notes": "GfG SDE sheet also lists 'Check if string is rotated by two places'."
  },
  {
    "slug": "tower hanoi",
    "name": "Tower of Hanoi",
    "altTitles": [],
    "statement": "Generate the sequence of moves to transfer N disks between rods following the classic rules.",
    "difficulty": "Medium",
    "topic": "Recursion",
    "subtopics": [
      "Math",
      "classic"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Tower of Hanoi",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 5,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "activity selection",
    "name": "Activity Selection",
    "altTitles": [
      "Activity Selection / Assign Cookies"
    ],
    "statement": "Select the maximum number of non-overlapping activities (or greedily assign cookies to children).",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Intervals",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "LC 455 Assign Cookies",
    "leetcodeExact": true,
    "gfg": "Activity Selection",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      },
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "armstrong numbers range",
    "name": "Armstrong Numbers in Range",
    "altTitles": [
      "Armstrong Numbers",
      "Program for Armstrong Numbers"
    ],
    "statement": "Check if a number is an Armstrong number / print Armstrong numbers in a range (e.g. 0 to 999).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2022,
      2023,
      2024
    ],
    "leetcode": "1134. Armstrong Number",
    "leetcodeNumber": 1134,
    "leetcodeExact": true,
    "gfg": "Armstrong Numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "arrange numbers form largest",
    "name": "Arrange Numbers to Form Largest Number",
    "altTitles": [
      "Largest Number"
    ],
    "statement": "Arrange an array of non-negative integers so their concatenation is the largest possible number.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Custom Comparator",
      "Sorting",
      "Strings",
      "custom comparator",
      "sorting",
      "strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023
    ],
    "leetcode": "179. Largest Number",
    "leetcodeNumber": 179,
    "leetcodeExact": true,
    "gfg": "Largest Number formed from an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bfs traversal graph",
    "name": "BFS Traversal of Graph",
    "altTitles": [
      "Breadth-First Search on Graph"
    ],
    "statement": "Perform BFS on a graph, visiting nodes level by level with a queue.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Graphs",
      "Queue"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "BFS of graph",
    "hackerrank": "HackerRank BFS Shortest Reach",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "combination sum",
    "name": "Combination Sum",
    "altTitles": [],
    "statement": "Find all unique combinations of candidates summing to a target (elements reusable).",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Recursion",
      "recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Combination Sum (LC 39)",
    "leetcodeNumber": 39,
    "leetcodeExact": true,
    "gfg": "Combination Sum",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "convert decimal octal",
    "name": "Convert Decimal to Octal",
    "altTitles": [
      "Decimal to Octal Conversion"
    ],
    "statement": "Convert a base-10 number to its octal representation via repeated division by 8.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Systems"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bases where representation n starts 1",
    "name": "Count Bases Where Representation of N Starts With 1",
    "altTitles": [
      "Base Representation Starting Digit",
      "Count Bases Starting with Digit 1",
      "Count Bases Where N Starts With 1"
    ],
    "statement": "For each N (up to 1e12, up to 1e5 test cases), count bases b where N written in base b begins with digit 1, or INFINITY.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Base Conversion",
      "Counting",
      "Number Systems",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/98249"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "dfs traversal graph",
    "name": "DFS Traversal of Graph",
    "altTitles": [
      "Depth-First Search on Graph"
    ],
    "statement": "Perform DFS on a graph using recursion or an explicit stack.",
    "difficulty": "Medium",
    "topic": "DFS",
    "subtopics": [
      "Graphs",
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "DFS of Graph",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "MyGreatLearning",
        "url": "https://www.mygreatlearning.com/blog/infosys-sp-dse-interview-guide-2026/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "first n fibonacci numbers",
    "name": "First N Fibonacci Numbers",
    "altTitles": [
      "Print First N Fibonacci Numbers"
    ],
    "statement": "Generate and print the first N Fibonacci numbers.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Recursion",
      "Sequences"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "LC 509 Fibonacci Number (variant)",
    "leetcodeExact": false,
    "gfg": "GFG Print first n Fibonacci Numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Capgemini",
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": "iScalePro lists the DP/memoized nth-Fibonacci variant."
  },
  {
    "slug": "generate balanced parentheses",
    "name": "Generate Balanced Parentheses",
    "altTitles": [
      "Generate Parentheses"
    ],
    "statement": "Generate all combinations of well-formed parentheses for N pairs.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Recursion",
      "Strings",
      "strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "22. Generate Parentheses",
    "leetcodeNumber": 22,
    "leetcodeExact": true,
    "gfg": "GFG Generate Parentheses",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "group anagrams",
    "name": "Group Anagrams",
    "altTitles": [],
    "statement": "Group the anagrams together from an array of strings.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Sorting",
      "Strings",
      "sorting",
      "strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "49. Group Anagrams",
    "leetcodeNumber": 49,
    "leetcodeExact": true,
    "gfg": "GFG Print Anagrams Together",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "largest arrange array form biggest",
    "name": "Largest Number (Arrange Array to Form Biggest Number)",
    "altTitles": [
      "Largest Number"
    ],
    "statement": "Given an array of non-negative integers as strings, arrange them so that their concatenation forms the largest possible number; return it as a string.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Custom Sorting",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2025,
      2026
    ],
    "leetcode": "Largest Number (LC 179)",
    "leetcodeNumber": 179,
    "leetcodeExact": true,
    "gfg": "Arrange given numbers to form the biggest number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - karthikreddy-7/Infosys-SP-Coding-Questions",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      }
    ],
    "notes": "Full statement with examples in karthikreddy-7 README."
  },
  {
    "slug": "largest subset 1 n 1 product 1 mod n",
    "name": "Largest Subset of [1,N-1] with Product = 1 (mod N)",
    "altTitles": [
      "Largest Subset with Product = 1 (mod N)",
      "Modular Product Set"
    ],
    "statement": "Choose the largest set S of numbers from [1, N-1] such that the product of all elements of S is congruent to 1 modulo N.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Coprimality",
      "Modular Arithmetic",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1514C Product 1 Modulo N",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "Talent Battle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": "Statement matches Codeforces 1514C."
  },
  {
    "slug": "lis bitwise and or condition",
    "name": "LIS With Bitwise And Or Condition",
    "altTitles": [
      "Bitwise-Conditional LIS ((a AND b)*2 < (a OR b))"
    ],
    "statement": "Find the longest increasing subsequence such that every adjacent pair (a,b) in it satisfies (a & b) * 2 < (a | b).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Bit Manipulation",
      "LIS"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "300. Longest Increasing Subsequence (constrained variant)",
    "leetcodeNumber": 300,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "Talent Battle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "Condition means highest set bits of a and b differ."
  },
  {
    "slug": "maximum consecutive vacation days",
    "name": "Maximum Consecutive Vacation Days",
    "altTitles": [
      "Maximum Vacation Days (Andy's Vacation)"
    ],
    "statement": "Maximize the number of consecutive free days in an N-day period by canceling at most K obligations.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Arrays",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "Max Consecutive Ones III (LC 1004, analogous)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum depth binary tree",
    "name": "Maximum Depth of Binary Tree",
    "altTitles": [],
    "statement": "Return the height of a binary tree.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 104 Maximum Depth of Binary Tree",
    "leetcodeExact": true,
    "gfg": "Height of Binary Tree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "minimize ugliness binary string",
    "name": "Minimize Ugliness of Binary String",
    "altTitles": [
      "Minimum Ugliness of Binary String"
    ],
    "statement": "Reduce the decimal value of a binary string within a given operation budget using bit flips and adjacent swaps.",
    "difficulty": "Hard",
    "topic": "Greedy",
    "subtopics": [
      "Bit Manipulation",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum days terrain road",
    "name": "Minimum Days for Terrain Road",
    "altTitles": [
      "Minimum Days to Make Terrain Strictly Decreasing"
    ],
    "statement": "On day d you may reduce heights by at most a cumulative d*(d+1)/2; compute minimum days needed to make the terrain strictly decreasing.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Binary Search on Answer",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "missing",
    "name": "Missing Number",
    "altTitles": [],
    "statement": "Find the missing number in 0..n (XOR or sum method).",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "Math",
      "XOR",
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 268 Missing Number",
    "leetcodeExact": true,
    "gfg": "Missing number in array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "move zeroes end",
    "name": "Move Zeroes to End",
    "altTitles": [
      "Move Zeroes"
    ],
    "statement": "Move all zeros to the end of the array preserving relative order of non-zeros.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 283 Move Zeroes",
    "leetcodeExact": true,
    "gfg": "Move all zeroes to end of array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "n queens",
    "name": "N Queens",
    "altTitles": [
      "N-Queens",
      "N-Queens Problem"
    ],
    "statement": "Place N queens on an N x N board so that no two queens attack each other.",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "subtopics": [
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "51. N-Queens",
    "leetcodeNumber": 51,
    "leetcodeExact": true,
    "gfg": "GFG N-Queen Problem",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "next greater element",
    "name": "Next Greater Element",
    "altTitles": [
      "Next Greater Element (OA)"
    ],
    "statement": "For each element, find the next greater element to its right.",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Arrays",
      "Monotonic Stack"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "496. Next Greater Element I",
    "leetcodeNumber": 496,
    "leetcodeExact": true,
    "gfg": "Next Greater Element",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-ses/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-speacialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "next palindrome",
    "name": "Next Palindrome Number",
    "altTitles": [
      "Next Palindrome",
      "Next Smallest Palindrome"
    ],
    "statement": "Given an integer, output the next smallest palindrome (e.g., 123 -> 131).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Greedy",
      "Number Theory",
      "Strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019,
      2024
    ],
    "leetcode": "564. Find the Closest Palindrome (similar)",
    "leetcodeNumber": 564,
    "leetcodeExact": true,
    "gfg": "Closest Palindrome / Next higher palindromic number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-power-programmer-interview-2019/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "probability each color drawn from buckets",
    "name": "Probability of Each Color Drawn from Buckets",
    "altTitles": [
      "Ball Color Probability",
      "Ball Color Probability Distribution",
      "Buckets Probability"
    ],
    "statement": "Balls are transferred between N buckets in sequence; calculate the probability that each color is drawn from the final bucket.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Combinatorics",
      "DP",
      "Probability"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      },
      {
        "name": "Talent Battle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "remove minimum villains from front so heroes win",
    "name": "Remove Minimum Villains from Front So Heroes Win",
    "altTitles": [
      "Hero vs Villain Battle"
    ],
    "statement": "Given M heroes each with health H and a line of villains with powers, find the minimum number of villains to remove from the front so the heroes can defeat all remaining villains sequentially.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Prefix Sums",
      "Simulation",
      "Two Pointers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "GeeksCodes",
        "url": "https://www.geekscodes.com/2025/02/infosys-hackwithinfy-2025-sample.html"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse string without built ins",
    "name": "Reverse String Without Built-ins",
    "altTitles": [
      "Reverse a String"
    ],
    "statement": "Reverse a string (or array) in place without library functions.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "344. Reverse String",
    "leetcodeNumber": 344,
    "leetcodeExact": true,
    "gfg": "Reverse a String",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "search rotated sorted array",
    "name": "Search in Rotated Sorted Array",
    "altTitles": [],
    "statement": "Search for a target in a rotated sorted array in O(log n).",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "rotated array"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "33. Search in Rotated Sorted Array",
    "leetcodeNumber": 33,
    "leetcodeExact": true,
    "gfg": "Search in a Rotated Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "LinkedIn (Arnav Tyagi)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "single element sorted array",
    "name": "Single Element In Sorted Array",
    "altTitles": [
      "Element That Appears Once in Sorted Array",
      "Element that Appears Once in Sorted Array",
      "Element that appears once in sorted array",
      "Single Element in a Sorted Array"
    ],
    "statement": "Find the element that appears exactly once in a sorted array where every other element appears twice.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "Bit Manipulation",
      "parity of index"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "540. Single Element in a Sorted Array",
    "leetcodeNumber": 540,
    "leetcodeExact": true,
    "gfg": "Element appearing once",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "spiral matrix traversal",
    "name": "Spiral Matrix Traversal",
    "altTitles": [
      "Spiral Matrix",
      "Spiral Traversal of Matrix"
    ],
    "statement": "Print matrix elements in spiral order from the outer layer inward.",
    "difficulty": "Medium",
    "topic": "Simulation",
    "subtopics": [
      "Matrix",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 54 Spiral Matrix",
    "leetcodeExact": true,
    "gfg": "GFG Spirally traversing a matrix",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "string integer atoi",
    "name": "String to Integer (atoi)",
    "altTitles": [],
    "statement": "Implement atoi converting a string to a 32-bit signed integer with overflow handling.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Edge Cases",
      "Implementation",
      "Parsing",
      "edge cases",
      "implementation"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "8. String to Integer (atoi)",
    "leetcodeNumber": 8,
    "leetcodeExact": true,
    "gfg": "GFG Implement Atoi",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Microsoft"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "subarray sum",
    "name": "Subarray With Given Sum",
    "altTitles": [],
    "statement": "Find a contiguous subarray summing to a given value (also asked as: count subarrays with sum exactly K).",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Arrays",
      "HashMap",
      "Prefix Sum",
      "Prefix Sums",
      "Sliding Window"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "560. Subarray Sum Equals K",
    "leetcodeNumber": 560,
    "leetcodeExact": true,
    "gfg": "GFG Subarray with given sum",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum primes up n",
    "name": "Sum of Primes up to N",
    "altTitles": [
      "Prime Sum",
      "Sum of Prime Numbers from 1 to N"
    ],
    "statement": "Easy OA problem based on math and arrays involving finding prime numbers and their sums.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Arrays",
      "Number Theory",
      "Sieve"
    ],
    "roles": [
      "Power Programmer",
      "System Engineer"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Sum of all prime numbers between 1 and N",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-program-power-programmer-interview-experience-wave-23/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": "Also on the GfG Infosys SDE sheet (easy list)."
  },
  {
    "slug": "swap contents two arrays",
    "name": "Swap Contents of Two Arrays",
    "altTitles": [
      "Swap Two Arrays"
    ],
    "statement": "Exchange all elements between two arrays A and B.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Basics",
      "Implementation"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "swap two numbers using temporary variable",
    "name": "Swap Two Numbers Using a Temporary Variable",
    "altTitles": [
      "Swap Two Numbers"
    ],
    "statement": "Exchange the values of two variables using a temporary variable.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Basics"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Accenture",
      "TCS",
      "Wipro"
    ],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "trapping rain water",
    "name": "Trapping Rain Water",
    "altTitles": [],
    "statement": "Compute water trapped between bars of a histogram after raining.",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Prefix Max",
      "Two Pointers",
      "stack",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 42 Trapping Rain Water",
    "leetcodeExact": true,
    "gfg": "Trapping Rain Water",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "High",
    "frequencyScore": 4,
    "sourceCount": 4,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      }
    ],
    "notes": "prabal255 waterproblem.py. | From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "allocate minimum pages",
    "name": "Allocate Minimum Pages",
    "altTitles": [
      "Allocate Minimum Number of Pages"
    ],
    "statement": "Distribute books among students so the maximum pages assigned to any student is minimized (binary search on answer).",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "Binary Search on Answer",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "410. Split Array Largest Sum (analog)",
    "leetcodeNumber": 410,
    "leetcodeExact": true,
    "gfg": "Allocate Minimum Number of Pages",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "array rotation prefix sum queries",
    "name": "Array Rotation With Prefix Sum Queries",
    "altTitles": [
      "Array rotation (clockwise/anticlockwise) with prefix sum"
    ],
    "statement": "Rotate an array clockwise and anticlockwise and answer queries, using prefix sums for efficiency.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Prefix Sum",
      "Rotation"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2021,
      2025
    ],
    "leetcode": "LC 189 Rotate Array (related)",
    "leetcodeExact": false,
    "gfg": "Rotate Array / Queries on rotation of array",
    "hackerrank": "Circular Array Rotation",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-2/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-program-power-programmer-interview-experience-wave-23/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bfs shortest path unweighted graph",
    "name": "BFS Shortest Path in Unweighted Graph",
    "altTitles": [
      "Shortest Path in Unweighted Graph (BFS)"
    ],
    "statement": "Find the shortest path between nodes in an unweighted graph using BFS.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Graphs",
      "Queue",
      "Shortest Path"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Shortest path in an unweighted graph",
    "hackerrank": "BFS: Shortest Reach",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Medium",
        "url": "https://medium.com/@giga_dummy/infosys-sp-role-interview-experience-2025-by-dev-sharma-210bcfa7dfef"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "biggest meatball queue simulation",
    "name": "Biggest Meatball (Queue Simulation)",
    "altTitles": [
      "Biggest Meatball"
    ],
    "statement": "People submit meatballs to a queue; each day a portion is cut off and the remainder goes to the back of the queue. Determine whose meatball is served last.",
    "difficulty": "Medium",
    "topic": "Queue",
    "subtopics": [
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary search sorted array",
    "name": "Binary Search in Sorted Array",
    "altTitles": [
      "Binary Search"
    ],
    "statement": "Implement binary search to find a target's index in a sorted array.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 704 Binary Search",
    "leetcodeExact": true,
    "gfg": "GFG Binary Search",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bitwise and range l r",
    "name": "Bitwise AND of Range [L, R]",
    "altTitles": [
      "Bitwise AND of Numbers Range",
      "Bitwise AND of Numbers in Range [L,R]"
    ],
    "statement": "Compute the bitwise AND of all numbers in the range [L, R].",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Common Prefix of Bits",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "201. Bitwise AND of Numbers Range",
    "leetcodeNumber": 201,
    "leetcodeExact": true,
    "gfg": "Bitwise AND of Numbers Range",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "check if two rectangles overlap",
    "name": "Check if Two Rectangles Overlap",
    "altTitles": [
      "Rectangle Overlap Detection"
    ],
    "statement": "Given coordinates of two rectangles, determine whether they overlap.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "SP",
      "System Engineer"
    ],
    "years": [],
    "leetcode": "836. Rectangle Overlap",
    "leetcodeNumber": 836,
    "leetcodeExact": true,
    "gfg": "GFG Overlapping rectangles",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "choose b minimize inversions xor b",
    "name": "Choose B Minimize Inversions Of A XOR B",
    "altTitles": [
      "Minimum Inversions after XOR with chosen B"
    ],
    "statement": "Choose non-negative B to minimize the number of inversions in the array A' where A'[i] = A[i] XOR B; report minimum inversions (and B).",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Divide and Conquer on Bits",
      "Inversions",
      "Trie"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1416C XOR Inverse (equivalent)",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/digital-specialist-engineer/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "choose b xor all elements minimizing inversions",
    "name": "Choose B to XOR All Elements Minimizing Inversions",
    "altTitles": [
      "Minimum XOR Inversions"
    ],
    "statement": "Choose a value B, XOR every array element with B, and minimize the number of inversions in the resulting array.",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Divide and Conquer",
      "Inversion Count",
      "Trie"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1416C XOR Inverse",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/digital-specialist-engineer/coding-questions/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      }
    ],
    "notes": "Statement is identical to Codeforces 1416C."
  },
  {
    "slug": "climbing stairs",
    "name": "Climbing Stairs",
    "altTitles": [],
    "statement": "Count distinct ways to climb n stairs taking 1 or 2 steps at a time.",
    "difficulty": "Easy",
    "topic": "DP",
    "subtopics": [
      "Fibonacci",
      "recursion"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "Climbing Stairs (LC 70)",
    "leetcodeNumber": 70,
    "leetcodeExact": true,
    "gfg": "Count ways to reach the nth stair",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7233305/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "convert decimal hexadecimal",
    "name": "Convert Decimal to Hexadecimal",
    "altTitles": [
      "Decimal to Hexadecimal Conversion"
    ],
    "statement": "Convert a base-10 number to base-16.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Systems"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "convert octal decimal",
    "name": "Convert Octal to Decimal",
    "altTitles": [
      "Octal to Decimal Conversion"
    ],
    "statement": "Convert a base-8 number to its base-10 equivalent.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Systems"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "digits",
    "name": "Count Digits",
    "altTitles": [
      "Count Digits in a Number",
      "Count Total Digits in a Number"
    ],
    "statement": "Count the number of digits in a given integer.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Digits",
      "Implementation"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Count Digits",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "vowels and consonants string",
    "name": "Count Vowels and Consonants in String",
    "altTitles": [
      "Count Vowels and Consonants"
    ],
    "statement": "Count the vowels and consonants in a string.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Count vowels and consonants",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "repeated and non repeated elements",
    "name": "Find Repeated and Non-Repeated Elements",
    "altTitles": [
      "Count Repeated vs Non-Repeated Elements",
      "Element Frequency Analysis"
    ],
    "statement": "Count how many array elements are repeated and how many appear exactly once.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Frequency Counting",
      "frequency counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Count frequencies of array elements",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "gcd two numbers euclidean",
    "name": "GCD of Two Numbers (Euclidean)",
    "altTitles": [
      "GCD of Two Numbers"
    ],
    "statement": "Compute the greatest common divisor of two numbers (Euclidean algorithm).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Euclid",
      "Number Theory",
      "Recursion"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GCD of two numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "generate all subsets",
    "name": "Generate All Subsets",
    "altTitles": [
      "Find the Subset / Power Set Generation",
      "Subsets"
    ],
    "statement": "Generate all subsets (power set) of a given set, or find a subset meeting a condition.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Bit Manipulation",
      "Bitmask",
      "Recursion"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "78. Subsets",
    "leetcodeNumber": 78,
    "leetcodeExact": true,
    "gfg": "Power Set",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "identify palindrome",
    "name": "Identify Palindrome",
    "altTitles": [],
    "statement": "Check whether the given input (number/string) is a palindrome.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "Valid Palindrome (LC 125)",
    "leetcodeNumber": 125,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - BSGILL12/Identify-Palindrome",
        "url": "https://github.com/BSGILL12/Identify-Palindrome"
      },
      {
        "name": "GitHub - aakashverma1124/InfyTQ-Coding-Questions-Final-Round",
        "url": "https://github.com/aakashverma1124/InfyTQ-Coding-Questions-Final-Round"
      }
    ],
    "notes": ""
  },
  {
    "slug": "job sequencing deadlines",
    "name": "Job Sequencing with Deadlines",
    "altTitles": [
      "Job Sequencing Problem"
    ],
    "statement": "Schedule unit-time jobs with deadlines and profits to maximize total profit.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "DSU",
      "Heap",
      "Sorting",
      "Union Find"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "LC 1235 (related)",
    "leetcodeExact": false,
    "gfg": "GFG Job Sequencing Problem",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "kids greatest candies",
    "name": "Kids With the Greatest Number of Candies",
    "altTitles": [],
    "statement": "For each kid, check if giving them extra candies makes them have the most.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "max scan"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Kids With the Greatest Number of Candies (LC 1431)",
    "leetcodeNumber": 1431,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "kth largest element array",
    "name": "Kth Largest Element in Array",
    "altTitles": [
      "Kth Largest Element in an Array"
    ],
    "statement": "Find the kth largest element (heap or quickselect).",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Quickselect",
      "Sorting",
      "quickselect",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Kth Largest Element in an Array (LC 215)",
    "leetcodeNumber": 215,
    "leetcodeExact": true,
    "gfg": "Kth largest element",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "largest by deleting digit",
    "name": "Largest Number by Deleting Given Digit",
    "altTitles": [
      "Remove Digit to Maximize Number"
    ],
    "statement": "Delete one occurrence of a given digit from a number so that the resulting number is maximized.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Remove Digit From Number to Maximize Result (LC 2259)",
    "leetcodeNumber": 2259,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - SkBashaOp/Infosys-SP-DSE-role-Coding",
        "url": "https://github.com/SkBashaOp/Infosys-SP-DSE-role-Coding"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "largest concatenation",
    "name": "Largest Number Concatenation",
    "altTitles": [
      "Largest Number from Array Concatenation"
    ],
    "statement": "Arrange numbers so their concatenation forms the largest possible number.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Custom Comparator",
      "Sorting",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "179. Largest Number",
    "leetcodeNumber": 179,
    "leetcodeExact": true,
    "gfg": "Largest Number formed from an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub (karthikreddy-7)",
        "url": "https://github.com/karthikreddy-7/Infosys-SP-Coding-Questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "largest rectangle histogram",
    "name": "Largest Rectangle In Histogram",
    "altTitles": [],
    "statement": "Find the largest rectangular area under a histogram; stack-based O(n) solution.",
    "difficulty": "Hard",
    "topic": "Stack",
    "subtopics": [
      "Arrays",
      "Monotonic Stack"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "84. Largest Rectangle in Histogram",
    "leetcodeNumber": 84,
    "leetcodeExact": true,
    "gfg": "GFG Maximum Rectangular Area in a Histogram",
    "hackerrank": "Largest Rectangle",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-interview-experience-for-specialist-programmer/"
      }
    ],
    "notes": "Also listed as 'Max rectangle' on the SDE sheet hard list."
  },
  {
    "slug": "leaders array",
    "name": "Leaders in Array",
    "altTitles": [
      "Leaders in an Array"
    ],
    "statement": "Print all elements that are greater than or equal to all elements to their right.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Suffix Max",
      "Suffix Maximum"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Leaders in an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest common substring",
    "name": "Longest Common Substring",
    "altTitles": [],
    "statement": "Find the length of the longest substring common to two strings.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Strings"
    ],
    "roles": [
      "Power Programmer",
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "718. Maximum Length of Repeated Subarray (analog)",
    "leetcodeNumber": 718,
    "leetcodeExact": true,
    "gfg": "GFG Longest Common Substring",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lowest common ancestor binary tree",
    "name": "Lowest Common Ancestor of Binary Tree",
    "altTitles": [
      "Lowest Common Ancestor of a Binary Tree"
    ],
    "statement": "Find the lowest common ancestor of two nodes in a binary tree (or BST).",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "BST",
      "DFS",
      "binary tree",
      "recursion"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2020
    ],
    "leetcode": "LC 236 Lowest Common Ancestor of a Binary Tree",
    "leetcodeExact": true,
    "gfg": "Lowest Common Ancestor in a Binary Tree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/1035888/infosys-specialist-programmer-hyderabad-august-2020-offer"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lru cache design",
    "name": "LRU Cache (Design)",
    "altTitles": [
      "LRU Cache"
    ],
    "statement": "Design a fixed-capacity cache with least-recently-used eviction supporting get/put in O(1).",
    "difficulty": "Medium",
    "topic": "Design",
    "subtopics": [
      "Doubly Linked List",
      "HashMap",
      "doubly linked list",
      "hash map"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2025
    ],
    "leetcode": "146. LRU Cache",
    "leetcodeNumber": 146,
    "leetcodeExact": true,
    "gfg": "LRU Cache",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/2987311/Infosys-or-Specialist-Programmer-or-2023-batch/"
      },
      {
        "name": "Medium (Smruti)",
        "url": "https://medium.com/@smrutipratisruti/my-hackwithinfy-journey-what-my-first-technical-interview-taught-me-6f2b854477df"
      }
    ],
    "notes": ""
  },
  {
    "slug": "majority element",
    "name": "Majority Element",
    "altTitles": [],
    "statement": "Find the element appearing more than n/2 times (Boyer-Moore voting).",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Boyer-Moore",
      "HashMap"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "169. Majority Element",
    "leetcodeNumber": 169,
    "leetcodeExact": true,
    "gfg": "Majority Element",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximal rectangle binary matrix",
    "name": "Maximal Rectangle in Binary Matrix",
    "altTitles": [
      "Maximum Rectangle in Binary Matrix",
      "Maximum Rectangle of 1s"
    ],
    "statement": "Find the largest rectangle containing only 1s in a binary matrix.",
    "difficulty": "Hard",
    "topic": "Stack",
    "subtopics": [
      "DP",
      "Histogram Technique",
      "Matrix",
      "Stack"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "85. Maximal Rectangle",
    "leetcodeNumber": 85,
    "leetcodeExact": true,
    "gfg": "Max rectangle",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum difference larger element after smaller",
    "name": "Maximum Difference (Larger Element After Smaller)",
    "altTitles": [
      "Best Time to Buy and Sell Stock / Max Difference",
      "Maximum Difference (Larger After Smaller)",
      "Maximum Difference with Larger Element After Smaller"
    ],
    "statement": "Find the maximum difference between two elements where the larger element appears after the smaller (single-transaction stock profit).",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "DP",
      "Greedy",
      "Prefix Minimum"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "121. Best Time to Buy and Sell Stock (equivalent)",
    "leetcodeNumber": 121,
    "leetcodeExact": true,
    "gfg": "GFG Maximum difference between two elements",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS",
      "TCS Digital"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum product three numbers",
    "name": "Maximum Product of Three Numbers",
    "altTitles": [],
    "statement": "Find the maximum product obtainable from any three elements.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Math",
      "Sorting",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 628 Maximum Product of Three Numbers",
    "leetcodeExact": true,
    "gfg": "Maximum product of a triplet",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "merge sort implementation and dry run",
    "name": "Merge Sort Implementation and Dry Run",
    "altTitles": [
      "Merge Sort"
    ],
    "statement": "Implement merge sort and walk through a dry run with complexity analysis.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Divide and Conquer",
      "Recursion"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019,
      2021
    ],
    "leetcode": "912. Sort an Array",
    "leetcodeNumber": 912,
    "leetcodeExact": true,
    "gfg": "Merge Sort",
    "hackerrank": "Merge Sort: Counting Inversions (related)",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-power-programmer-interview-2019/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-power-programmer-2021-2/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "next permutation next greater same digits",
    "name": "Next Permutation / Next Greater Number Same Digits",
    "altTitles": [
      "Next Permutation"
    ],
    "statement": "Find the smallest number greater than the given number formed with the same digits (lexicographically next permutation).",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Permutations",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "31. Next Permutation",
    "leetcodeNumber": 31,
    "leetcodeExact": true,
    "gfg": "Next Permutation",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-role/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "next power two each element",
    "name": "Next Power of Two for Each Element",
    "altTitles": [
      "Array and Bit Manipulation",
      "Smallest Power of 2 >= Each Element",
      "Smallest Power of 2 >= Element",
      "Smallest Power of 2 Greater Than or Equal to Each Element"
    ],
    "statement": "For each array element, find the smallest power of 2 greater than or equal to it.",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "arrays",
      "bit tricks"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2023,
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Smallest power of 2 greater than or equal to n",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "oil tank min initial oil disturbances",
    "name": "Oil Tank Min Initial Oil Disturbances",
    "altTitles": [
      "Oil Tank Disturbance Minimization"
    ],
    "statement": "Customers arrive sequentially buying (-1) or selling (+1) liters at a tank of capacity C; find minimum initial oil X minimizing the number of disturbed (unserved) customers.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Prefix Sums",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      },
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "perfect check",
    "name": "Perfect Number Check",
    "altTitles": [
      "Perfect Number"
    ],
    "statement": "Check whether a number equals the sum of its proper divisors.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Divisors",
      "Number Theory"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "LC 507 Perfect Number",
    "leetcodeExact": true,
    "gfg": "GFG Perfect Number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "primes range sieve eratosthenes",
    "name": "Primes In Range (Sieve Of Eratosthenes)",
    "altTitles": [
      "Print prime numbers within a range / nth prime / Sieve"
    ],
    "statement": "Generate prime numbers within a given range (Sieve of Eratosthenes); variants ask for the nth prime number.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Sieve"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2020,
      2022
    ],
    "leetcode": "LC 204 Count Primes",
    "leetcodeExact": true,
    "gfg": "Sieve of Eratosthenes",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-interview-experience-for-power-programmer-2020/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-infytq-interview-experience-4/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "remove duplicates from string",
    "name": "Remove Duplicates From String",
    "altTitles": [
      "Remove/print duplicate characters from a string"
    ],
    "statement": "Remove all duplicate characters from a string, or print the duplicate characters with counts.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Counting",
      "HashMap",
      "HashSet"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2019,
      2022
    ],
    "leetcode": "LC 316 Remove Duplicate Letters (related)",
    "leetcodeExact": false,
    "gfg": "Remove duplicates from a given string / Print duplicates from a string",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-dse-2022-2/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-off-campus-interview-experience-hackwithinfy/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse and add until palindrome",
    "name": "Reverse and Add Until Palindrome",
    "altTitles": [
      "Identify Palindrome (Sum Palindrome)"
    ],
    "statement": "Repeatedly add a number to its digit-reverse until the result is a palindrome; report the palindrome (or steps).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Simulation",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Sum Palindrome",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "Lychrel-number style simulation."
  },
  {
    "slug": "reverse words string",
    "name": "Reverse Words in a String",
    "altTitles": [],
    "statement": "Reverse the order of words in a sentence.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Two Pointers",
      "parsing"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "LC 151 Reverse Words in a String",
    "leetcodeExact": true,
    "gfg": "GFG Reverse words in a given string",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "rotting oranges",
    "name": "Rotting Oranges",
    "altTitles": [],
    "statement": "Find the minimum time required for all oranges in a grid to become rotten via multi-source BFS.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Graphs",
      "Matrix",
      "Queue"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023,
      2024
    ],
    "leetcode": "LC 994 Rotting Oranges",
    "leetcodeExact": true,
    "gfg": "Rotten Oranges",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-2023-off-campus/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-6/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "set matrix zeroes",
    "name": "Set Matrix Zeroes",
    "altTitles": [
      "Zero Matrix"
    ],
    "statement": "If an element of a matrix is 0, set its entire row and column to 0.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Matrix",
      "in-place marking",
      "matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "LC 73 Set Matrix Zeroes",
    "leetcodeExact": true,
    "gfg": "Boolean Matrix",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - aakashverma1124/InfyTQ-Coding-Questions-Final-Round",
        "url": "https://github.com/aakashverma1124/InfyTQ-Coding-Questions-Final-Round"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "sort array",
    "name": "Sort an Array",
    "altTitles": [
      "Sort an Array (Implement Sorting Algorithms)"
    ],
    "statement": "Sort an array; repos include implementations of bubble, insertion, selection, merge, quick and heap sort as asked in interviews.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Heap Sort",
      "Merge Sort",
      "Quick Sort"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "Sort an Array (LC 912)",
    "leetcodeNumber": 912,
    "leetcodeExact": true,
    "gfg": "Merge Sort / Quick Sort",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sort people",
    "name": "Sort the People",
    "altTitles": [],
    "statement": "Sort names by corresponding heights in descending order.",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "HashMap",
      "arrays",
      "strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2418 Sort the People",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "sp oa 2025 07 12 set",
    "name": "SP OA 2025 07 12 Set",
    "altTitles": [
      "SP OA July 12 2025 Set (2 medium + 1 hard, DP/Graphs/Greedy/Trees)"
    ],
    "statement": "HackWithInfy/SP off-campus OA of July 12, 2025: three coding questions (2 medium, 1 hard) spanning DP, graphs, greedy and trees; exact statements not disclosed by candidates.",
    "difficulty": "Hard",
    "topic": "Miscellaneous",
    "subtopics": [
      "DP",
      "Graphs",
      "Greedy",
      "Trees"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "Medium (Dev Sharma)",
        "url": "https://medium.com/@giga_dummy/infosys-sp-role-interview-experience-2025-by-dev-sharma-210bcfa7dfef"
      },
      {
        "name": "Medium (Pravallika)",
        "url": "https://medium.com/@pravallikaseshasai/hackwithinfy-guide-rounds-questions-how-i-landed-the-dse-role-bc4f64db465d"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-specialist-programmer-sp-2026-passouts/"
      }
    ],
    "notes": "Round-level record kept because candidates did not disclose statements; solving ~2/3 led to SP interview shortlist, 1-1.5 to DSE."
  },
  {
    "slug": "split array into k segments maximizing sum distinct counts",
    "name": "Split Array into K Segments Maximizing Sum of Distinct Counts",
    "altTitles": [
      "Maximize Segment Diversity / Gift Box Packing"
    ],
    "statement": "Pack N items (gift types) into exactly K boxes formed by consecutive subarrays; each box's value is the number of distinct types inside. Maximize total value.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "distinct counts",
      "divide and conquer optimization",
      "segment splitting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Lets-Code (community PYQ aggregator)",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      },
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys/infosys-interview-experience-specialist-programmer-jul-2024-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "subarray sum equals k",
    "name": "Subarray Sum Equals K",
    "altTitles": [
      "Count Subarrays with Sum Exactly K",
      "Number of Subarrays with Sum Exactly K",
      "Number of subarrays having sum exactly equal to k"
    ],
    "statement": "Count subarrays whose sum equals k using prefix-sum hashmap.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Prefix Sum",
      "Prefix Sums",
      "prefix sums"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "560. Subarray Sum Equals K",
    "leetcodeNumber": 560,
    "leetcodeExact": true,
    "gfg": "GFG Subarrays with sum K",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "substring search strstr",
    "name": "Substring Search (strStr)",
    "altTitles": [
      "Find First Occurrence of Needle in Haystack",
      "Find First Occurrence of Substring (strStr)"
    ],
    "statement": "Return the index of the first occurrence (or all occurrences) of a pattern in a text.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "KMP",
      "Pattern Matching",
      "String Matching"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "28. Find the Index of the First Occurrence in a String",
    "leetcodeNumber": 28,
    "leetcodeExact": true,
    "gfg": "Search Pattern (KMP)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum digits",
    "name": "Sum of Digits",
    "altTitles": [],
    "statement": "Compute the sum of the digits of an integer.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Digits"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Sum of digits of a number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "transform array by parity",
    "name": "Transform Array by Parity",
    "altTitles": [],
    "statement": "",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Sorting",
      "counting",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 3467 Transform Array by Parity",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "travelling salesman problem",
    "name": "Travelling Salesman Problem",
    "altTitles": [],
    "statement": "Visit every city exactly once with minimum cost and return to start; discuss backtracking O(n!) and DP/approximation approaches.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Backtracking",
      "Bitmask",
      "Graphs"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Travelling Salesman Problem",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-pp-role-through-hackwithinfy-2020/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "wildcard pattern matching",
    "name": "Wildcard Pattern Matching",
    "altTitles": [
      "Wildcard Matching"
    ],
    "statement": "Match a string against a pattern containing '?' and '*' wildcards.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "2D DP",
      "Greedy",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "44. Wildcard Matching",
    "leetcodeNumber": 44,
    "leetcodeExact": true,
    "gfg": "GFG Wildcard Pattern Matching",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "word break",
    "name": "Word Break",
    "altTitles": [],
    "statement": "Determine whether a string can be segmented into dictionary words.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Strings",
      "Trie",
      "strings",
      "trie"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023
    ],
    "leetcode": "LC 139 Word Break",
    "leetcodeExact": true,
    "gfg": "Word Break",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 3,
    "sourceCount": 3,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys-technologies-limited/infosys-interview-experience-specialist-programmer-may-2022-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "add two matrices",
    "name": "Add Two Matrices",
    "altTitles": [
      "Matrix Addition"
    ],
    "statement": "Add corresponding elements of two matrices.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Matrix"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Program for Addition of Two Matrices",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "add two numbers as strings",
    "name": "Add Two Numbers Given as Strings",
    "altTitles": [
      "Add Strings (Big Integer Addition)"
    ],
    "statement": "Return the sum of two non-negative integers given as strings.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Carry Handling",
      "Math"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "415. Add Strings",
    "leetcodeNumber": 415,
    "leetcodeExact": true,
    "gfg": "Sum of two large numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "aggressive cows",
    "name": "Aggressive Cows",
    "altTitles": [
      "Aggressive Cows (variation)"
    ],
    "statement": "Variation of the classic Aggressive Cows problem: place items in stalls maximizing minimum distance; solvable by binary search on answer.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Binary Search on Answer",
      "Greedy"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 1552 Magnetic Force Between Two Balls",
    "leetcodeExact": true,
    "gfg": "Aggressive Cows",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-2022/"
      }
    ],
    "notes": "Also solvable with DP per the author."
  },
  {
    "slug": "allocate people houses left right unhoused",
    "name": "Allocate People to Houses Left-to-Right, Count Unhoused",
    "altTitles": [
      "Find the Homeless"
    ],
    "statement": "Allocate N people to N houses based on capacity constraints with left-to-right priority and count how many people remain unhoused.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Matching",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "array minimization game",
    "name": "Array Minimization Game",
    "altTitles": [],
    "statement": "Minimize the cost of reducing the whole array to zero, choosing between a subarray decrement operation and an element reset operation.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      }
    ],
    "notes": ""
  },
  {
    "slug": "array range update range sum queries",
    "name": "Array Range Update Range Sum Queries",
    "altTitles": [
      "Array Range-Update and Range-Sum Queries"
    ],
    "statement": "Process type-1 queries replacing A[i] with (i-l+1)*A[l] for l<=i<=r and type-2 range-sum queries; output total of all type-2 answers modulo 1e9+7.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Implementation",
      "Prefix Sums",
      "Range Queries"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      },
      {
        "name": "Scribd",
        "url": "https://www.scribd.com/document/874558785/HackWithInfy-Practice-Questions-2025-Part-1"
      }
    ],
    "notes": ""
  },
  {
    "slug": "balanced parentheses check",
    "name": "Balanced Parentheses Check",
    "altTitles": [
      "Valid / Balanced Parentheses"
    ],
    "statement": "Check whether the brackets in a string are balanced and properly nested using a stack.",
    "difficulty": "Easy",
    "topic": "Stack",
    "subtopics": [
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 20 Valid Parentheses",
    "leetcodeExact": true,
    "gfg": "GFG Parenthesis Checker",
    "hackerrank": "HackerRank Balanced Brackets",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary representation",
    "name": "Binary Representation Of Number",
    "altTitles": [
      "Binary Representation",
      "Binary Representation of a Number"
    ],
    "statement": "Print the binary representation of a given integer.",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Base Conversion",
      "Number Systems"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Binary representation of a given number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary search plus greedy oa 2025",
    "name": "Binary Search Plus Greedy OA 2025",
    "altTitles": [
      "Binary Search + Greedy Problem (Late 2025 OA)"
    ],
    "statement": "Medium OA problem combining binary search on answer with a greedy feasibility check; exact statement not disclosed.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Binary Search on Answer",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/7449933/infosys-off-campus-spdse-2025-2026-onlin-cam1/"
      }
    ],
    "notes": "Set composition: string brute force (easy), binary search + greedy (medium), bitmask DP + graph (hard)."
  },
  {
    "slug": "binary string decimal",
    "name": "Binary String to Decimal",
    "altTitles": [],
    "statement": "Convert a binary string to its decimal value.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Systems"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary tree inorder traversal",
    "name": "Binary Tree Inorder Traversal",
    "altTitles": [
      "Inorder Traversal of Binary Tree"
    ],
    "statement": "Perform inorder traversal of a binary tree (recursive/iterative).",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Recursion",
      "Stack"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "94. Binary Tree Inorder Traversal",
    "leetcodeNumber": 94,
    "leetcodeExact": true,
    "gfg": "GFG Inorder Traversal",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary tree level order traversal",
    "name": "Binary Tree Level Order Traversal",
    "altTitles": [
      "Level Order Traversal",
      "Level-Order Traversal of Binary Tree"
    ],
    "statement": "Perform a breadth-first (level-order) traversal of a binary tree using a queue.",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "BFS",
      "Queue"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "102. Binary Tree Level Order Traversal",
    "leetcodeNumber": 102,
    "leetcodeExact": true,
    "gfg": "GFG Level order traversal",
    "hackerrank": "Tree: Level Order Traversal",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binary tree maximum path sum",
    "name": "Binary Tree Maximum Path Sum",
    "altTitles": [],
    "statement": "Find the path with the maximum sum in a binary tree.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "DP on Trees"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Binary Tree Maximum Path Sum (LC 124)",
    "leetcodeNumber": 124,
    "leetcodeExact": true,
    "gfg": "Maximum path sum from any node",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "binomial coefficient ncr",
    "name": "Binomial Coefficient nCr",
    "altTitles": [
      "nCr Calculation"
    ],
    "statement": "Compute nCr (binomial coefficient).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Combinatorics"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "nCr",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bitmask dp graph oa 2025",
    "name": "Bitmask DP Graph OA 2025",
    "altTitles": [
      "Bitmask DP + Graph Problem (Late 2025 OA)"
    ],
    "statement": "Hard OA problem described as 'bitmask dp + graph + some miscellaneous'; exact statement not disclosed.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Bitmask DP",
      "Graphs"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/7449933/infosys-off-campus-spdse-2025-2026-onlin-cam1/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bitwise and all numbers range",
    "name": "Bitwise AND of All Numbers in Range",
    "altTitles": [
      "Bitwise AND of Numbers Range"
    ],
    "statement": "Compute the bitwise AND of all numbers in a range [L,R].",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "subtopics": [
      "common prefix",
      "shifting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024
    ],
    "leetcode": "LC 201 Bitwise AND of Numbers Range",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code (community PYQ aggregator)",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bst insertion",
    "name": "BST Insertion",
    "altTitles": [
      "Insert into a Binary Search Tree"
    ],
    "statement": "Insert a value into a binary search tree preserving BST property.",
    "difficulty": "Easy",
    "topic": "BST",
    "subtopics": [
      "Recursion",
      "Trees"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "701. Insert into a BST",
    "leetcodeNumber": 701,
    "leetcodeExact": true,
    "gfg": "Insert a node in a BST",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bubble sort",
    "name": "Bubble Sort",
    "altTitles": [
      "Bubble Sort Implementation"
    ],
    "statement": "Sort an array in ascending order using adjacent swaps.",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "Implementation",
      "basics"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Bubble Sort - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      },
      {
        "name": "InterviewBit",
        "url": "https://www.interviewbit.com/infosys-interview-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "build sum triangle whose last row is array",
    "name": "Build Sum Triangle Whose Last Row is the Array",
    "altTitles": [
      "Sum Triangle from Array"
    ],
    "statement": "Build a triangle where the bottom row is the array and each element above is the sum of the two below.",
    "difficulty": "Medium",
    "topic": "Recursion",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Sum Triangle from array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "buy and sell stock multiple transactions",
    "name": "Buy and Sell Stock Multiple Transactions",
    "altTitles": [
      "Best Time to Buy and Sell Stock II"
    ],
    "statement": "Maximize profit with unlimited transactions.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Best Time to Buy and Sell Stock II (LC 122)",
    "leetcodeNumber": 122,
    "leetcodeExact": true,
    "gfg": "Stock Buy and Sell",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "can convert string k moves",
    "name": "Can Convert String in K Moves",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Greedy",
      "HashMap",
      "hash map",
      "modular shifts"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Can Convert String in K Moves (LC 1540)",
    "leetcodeNumber": 1540,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "car fleet",
    "name": "Car Fleet",
    "altTitles": [],
    "statement": "Count car fleets arriving at the destination given positions and speeds.",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Monotonic Stack",
      "Sorting",
      "monotonic stack",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Car Fleet (LC 853)",
    "leetcodeNumber": 853,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "check balanced binary tree",
    "name": "Check Balanced Binary Tree",
    "altTitles": [
      "Balanced Binary Tree"
    ],
    "statement": "Check whether a binary tree is height-balanced.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "DFS"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Balanced Binary Tree (LC 110)",
    "leetcodeNumber": 110,
    "leetcodeExact": true,
    "gfg": "Check for Balanced Tree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "check if array is sorted",
    "name": "Check if Array is Sorted",
    "altTitles": [
      "Check if an Array Is Sorted"
    ],
    "statement": "Determine whether an array is sorted in non-decreasing order.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Implementation",
      "Scanning"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 1752 Check if Array Is Sorted and Rotated (related)",
    "leetcodeExact": false,
    "gfg": "Check if an Array is Sorted",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "Curated prep archive entry, not a specific OA report."
  },
  {
    "slug": "check string rotation by two places",
    "name": "Check String Rotation by Two Places",
    "altTitles": [
      "String Rotated by Two Places"
    ],
    "statement": "Check whether one string can be obtained by rotating another clockwise or anticlockwise by exactly two places.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Rotation"
    ],
    "roles": [
      "SP"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Check if a string is rotated by two places",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "check three points form triangle and compute area",
    "name": "Check Three Points Form a Triangle and Compute Area",
    "altTitles": [
      "Triangle Detection and Area"
    ],
    "statement": "Determine whether three points form a valid triangle and calculate its area.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 812 Largest Triangle Area (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "chef order scheduling profit penalties",
    "name": "Chef Order Scheduling Profit Penalties",
    "altTitles": [
      "Chef Order Processing and Profit"
    ],
    "statement": "Process orders by arrival time then shortest processing time; compute profit accounting for waiting penalties.",
    "difficulty": "Hard",
    "topic": "Greedy",
    "subtopics": [
      "Priority Queue",
      "Scheduling",
      "Simulation"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "Similar to 1834. Single-Threaded CPU",
    "leetcodeExact": true,
    "gfg": "Shortest Job First scheduling (variant)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "compute luggage charges weight threshold",
    "name": "Compute Luggage Charges with Weight Threshold",
    "altTitles": [
      "Airport Authority"
    ],
    "statement": "Calculate total luggage charges: base 1 dollar per item, doubled for items exceeding a weight threshold.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "container most water",
    "name": "Container With Most Water",
    "altTitles": [],
    "statement": "Find two lines forming a container holding the most water.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Greedy",
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Container With Most Water (LC 11)",
    "leetcodeNumber": 11,
    "leetcodeExact": true,
    "gfg": "Container with most water",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "distinct subset sums",
    "name": "Count Distinct Subset Sums",
    "altTitles": [
      "Find All Distinct Subset Sums",
      "Find all distinct subset sums"
    ],
    "statement": "List all distinct sums obtainable from subsets of the array.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Backtracking",
      "Bitset",
      "Subset Sum",
      "Subsets"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Find all distinct subset (or subsequence) sums of an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "elements appearing once vs multiple times",
    "name": "Count Elements Appearing Once vs Multiple Times",
    "altTitles": [
      "Element Frequency Analysis"
    ],
    "statement": "Determine how many elements appear multiple times and how many appear exactly once in an array.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Frequency Counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Bobby-chirra/Infosys-sp-dse",
        "url": "https://github.com/Bobby-chirra/Infosys-sp-dse"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum step grid paths avoiding one blocked cell",
    "name": "Count Minimum-Step Grid Paths Avoiding One Blocked Cell",
    "altTitles": [
      "Mark's Game"
    ],
    "statement": "Count the minimum-step paths from top-left to bottom-right of a grid that avoid one blocked cell.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Combinatorics",
      "Grid Paths"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "LC 63 Unique Paths II (combinatorial variant)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "non decreasing job cost assignments digits 0 9",
    "name": "Count Non-Decreasing Job Cost Assignments (Digits 0-9)",
    "altTitles": [
      "HR Issues"
    ],
    "statement": "Assign jobs with costs 0-9 to employees so each person gets a cost equal to or higher than the previous person; count the number of possible distributions.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Combinatorics",
      "Counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      }
    ],
    "notes": "Equivalent to counting non-decreasing digit sequences (stars and bars)."
  },
  {
    "slug": "odd minus even",
    "name": "Count Odd Minus Even",
    "altTitles": [
      "Count of Odd Numbers minus Even Numbers"
    ],
    "statement": "Return the difference between the count of odd numbers and even numbers in an array.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pairs x y digit sum sum prime",
    "name": "Count Pairs (x,y) with Digit-Sum Sum Prime",
    "altTitles": [
      "Special Prime Pairs"
    ],
    "statement": "Count pairs (x,y), 0<=x,y<=n, such that F(x)+F(y) is prime, where F is the digit sum.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "counting",
      "digit sum",
      "primes"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/library/round-2-most-asked-questions-hwi"
      }
    ],
    "notes": ""
  },
  {
    "slug": "permutations base y divisible by k",
    "name": "Count Permutations of a Base-y Number Divisible by K",
    "altTitles": [
      "Divisible by K"
    ],
    "statement": "Count permutations of the digits of a number in base y that are divisible by k.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Bitmask DP",
      "Number Theory",
      "Permutations"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smaller elements right",
    "name": "Count Smaller Elements To Right",
    "altTitles": [
      "Count Smaller Elements to the Right",
      "Count Smaller elements on right side"
    ],
    "statement": "For each element, count smaller elements to its right (BIT/merge sort).",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Fenwick Tree",
      "Inversions",
      "Merge Sort"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "315. Count of Smaller Numbers After Self",
    "leetcodeNumber": 315,
    "leetcodeExact": true,
    "gfg": "Count Smaller elements",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "subarrays divisible by k",
    "name": "Count Subarrays Divisible by K",
    "altTitles": [
      "Count Divisible Subarrays"
    ],
    "statement": "Count subarrays whose sum is divisible by K.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "HashMap",
      "Prefix Sum"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Subarray Sums Divisible by K (LC 974)",
    "leetcodeNumber": 974,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "subsets xor equal k",
    "name": "Count Subsets with XOR Equal to K",
    "altTitles": [],
    "statement": "Count the number of subsets whose XOR equals a target value K.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Bitmask DP",
      "Meet in the Middle",
      "XOR"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Count subsets having XOR value K",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "vowels string",
    "name": "Count Vowels in a String",
    "altTitles": [],
    "statement": "Count occurrences of vowel characters in a string.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Counting"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "ways select books by subject constraints",
    "name": "Count Ways to Select Books by Subject Constraints",
    "altTitles": [
      "Alisa In the Library"
    ],
    "statement": "Calculate the number of ways to select one mathematics book, two chemistry books, and specific science books from given quantities.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Combinatorics"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "cut string into maximum identical pieces",
    "name": "Cut String into Maximum Number of Identical Pieces",
    "altTitles": [
      "Identical String Pieces (Interesting String)"
    ],
    "statement": "Cut a string into the maximum number of identical contiguous pieces without rearranging characters.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Divisors",
      "Frequency Counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "GeeksCodes",
        "url": "https://www.geekscodes.com/2025/02/infosys-hackwithinfy-2025-sample.html"
      }
    ],
    "notes": "GeeksCodes lists it as the 'interesting string S of length N' problem."
  },
  {
    "slug": "cycle detection directed graph",
    "name": "Cycle Detection in Directed Graph",
    "altTitles": [
      "Detect Cycle in Directed Graph",
      "Detect Cycle in a Directed Graph"
    ],
    "statement": "Determine whether a directed graph contains a cycle using DFS with colors/recursion stack.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "Cycle Detection",
      "DFS",
      "Topological Sort"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "207. Course Schedule (application)",
    "leetcodeNumber": 207,
    "leetcodeExact": true,
    "gfg": "Detect cycle in a directed graph",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      }
    ],
    "notes": ""
  },
  {
    "slug": "design hashmap",
    "name": "Design a HashMap",
    "altTitles": [
      "Design HashMap"
    ],
    "statement": "Design a HashMap without built-in hash libraries, including a hash function and collision handling.",
    "difficulty": "Easy",
    "topic": "Design",
    "subtopics": [
      "Hashing"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "706. Design HashMap",
    "leetcodeNumber": 706,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "diameter binary tree",
    "name": "Diameter of Binary Tree",
    "altTitles": [],
    "statement": "Find the longest path between any two nodes of a binary tree.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "DFS"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Diameter of Binary Tree (LC 543)",
    "leetcodeNumber": 543,
    "leetcodeExact": true,
    "gfg": "Diameter of a Binary Tree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "diamond pattern printing",
    "name": "Diamond Pattern Printing",
    "altTitles": [
      "Print Diamond Pattern"
    ],
    "statement": "Print a diamond star pattern for given N.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Loops",
      "Pattern Printing"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Pattern printing problems",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Accenture",
      "TCS"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "difference odd even index elements",
    "name": "Difference Odd Even Index Elements",
    "altTitles": [
      "Difference of Elements at Odd vs Even Indexes"
    ],
    "statement": "Compute the difference between elements at odd indexes and even indexes of an array.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Traversal"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "difference odd and even index sums",
    "name": "Difference of Odd and Even Index Sums",
    "altTitles": [
      "Difference Between Odd and Even Indexed Elements"
    ],
    "statement": "Compute the difference between the sum of elements at odd indices and at even indices.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "dijkstra s algorithm",
    "name": "Dijkstra's Algorithm",
    "altTitles": [
      "Dijkstra's Shortest Path"
    ],
    "statement": "Find shortest paths from a source vertex to all vertices in a weighted graph.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "Greedy",
      "Heap",
      "Shortest Path"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 743 Network Delay Time (equivalent)",
    "leetcodeExact": true,
    "gfg": "GFG Dijkstra's shortest path algorithm",
    "hackerrank": "HackerRank Dijkstra: Shortest Reach 2",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "divide integers into two groups equal sums and near equal counts",
    "name": "Divide Integers into Two Groups with Equal Sums and Near-Equal Counts",
    "altTitles": [
      "Team Division"
    ],
    "statement": "Divide a set of integers into two groups whose sums are equal and whose sizes differ by at most one.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Partition",
      "Subset Sum"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "LC 416 Partition Equal Subset Sum (variant)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "eat pizzas",
    "name": "Eat Pizzas",
    "altTitles": [
      "Eat Pizzas!"
    ],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Sorting",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Eat Pizzas! (LC 3462)",
    "leetcodeNumber": 3462,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "fahrenheit celsius conversion",
    "name": "Fahrenheit/Celsius Conversion",
    "altTitles": [
      "Temperature Conversion"
    ],
    "statement": "Convert temperature between Fahrenheit and Celsius using the standard formula.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Program for Celsius To Fahrenheit conversion",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "building where alice and bob can meet",
    "name": "Find Building Where Alice and Bob Can Meet",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "Heap",
    "subtopics": [
      "Binary Search",
      "Monotonic Stack",
      "monotonic stack",
      "offline queries",
      "segment tree"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find Building Where Alice and Bob Can Meet (LC 2940)",
    "leetcodeNumber": 2940,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "duplicate floyd cycle",
    "name": "Find Duplicate Number (Floyd Cycle)",
    "altTitles": [
      "Find the Duplicate Number"
    ],
    "statement": "Find the repeated number in an array of n+1 integers in range 1..n without modifying it.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Binary Search",
      "Floyd Cycle Detection"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find the Duplicate Number (LC 287)",
    "leetcodeNumber": 287,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "first and last occurrence target via binary search",
    "name": "First (and Last) Occurrence of Target via Binary Search",
    "altTitles": [
      "First Occurrence in Sorted Array"
    ],
    "statement": "Locate the first occurrence of a target value in a sorted array using binary search.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "lower bound",
      "sorted arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024
    ],
    "leetcode": "LC 34 Find First and Last Position of Element in Sorted Array",
    "leetcodeExact": true,
    "gfg": "First and last occurrences of x - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code (community PYQ aggregator)",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "first alphabetically missing letter across strings",
    "name": "First Alphabetically Missing Letter Across Strings",
    "altTitles": [
      "First Missing Lowercase Letter"
    ],
    "statement": "Given a collection of strings, output the first lowercase letter (a-z) that appears in none of them, or -1 if all 26 letters appear.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Frequency Counting",
      "HashSet"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Viv786ek/HackWithInfy-Solution",
        "url": "https://github.com/Viv786ek/HackWithInfy-Solution"
      },
      {
        "name": "GitHub - Viv786ek/HackWithInfy-solution--2",
        "url": "https://github.com/Viv786ek/HackWithInfy-solution--2"
      }
    ],
    "notes": "Second repo holds another unnamed HWI problem solution."
  },
  {
    "slug": "first occurrence target sorted array",
    "name": "First Occurrence of Target in Sorted Array",
    "altTitles": [
      "First Occurrence in Sorted Array",
      "First Occurrence in Sorted Array (Binary Search)"
    ],
    "statement": "Find the index of the first occurrence of a target in a sorted array using binary search.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "34. Find First and Last Position (first half)",
    "leetcodeNumber": 34,
    "leetcodeExact": true,
    "gfg": "First and last occurrences of X",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "first unique character string",
    "name": "First Unique Character in a String",
    "altTitles": [
      "First Non-Repeating Character"
    ],
    "statement": "Find the first character in a string that appears exactly once.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "frequency",
      "hash map"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024
    ],
    "leetcode": "LC 387 First Unique Character in a String",
    "leetcodeExact": true,
    "gfg": "Non Repeating Character - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code (community PYQ aggregator)",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "first fit gift packing unpacked gifts",
    "name": "First-Fit Gift Packing, Count Unpacked Gifts",
    "altTitles": [
      "Santa and Gifts"
    ],
    "statement": "Match gifts to boxes scanning left-to-right with a first-fit rule and count how many gifts remain unpacked.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Matching",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "fold paper h x w h1 x w1 minimum moves",
    "name": "Fold Paper h x w to h1 x w1 in Minimum Moves",
    "altTitles": [
      "Paper Sheets (Minimum Folds)"
    ],
    "statement": "Fold a rectangular sheet from h x w to h1 x w1; folds are parallel to edges with integer results. Minimize the number of folds.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "doubling",
      "greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/library/round-2-most-asked-questions-hwi"
      }
    ],
    "notes": ""
  },
  {
    "slug": "gas station circuit",
    "name": "Gas Station Circuit",
    "altTitles": [
      "Gas Station"
    ],
    "statement": "Find the starting station to complete a circular route given gas and cost arrays.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Gas Station (LC 134)",
    "leetcodeNumber": 134,
    "leetcodeExact": true,
    "gfg": "Circular tour",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "gcd lcm two numbers",
    "name": "GCD / LCM of Two Numbers",
    "altTitles": [
      "GCD and LCM"
    ],
    "statement": "Compute the greatest common divisor and least common multiple of two numbers.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Euclidean Algorithm"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "LCM And GCD",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      }
    ],
    "notes": ""
  },
  {
    "slug": "get maximum generated array",
    "name": "Get Maximum in Generated Array",
    "altTitles": [],
    "statement": "Generate the array with nums[2i]=nums[i] and nums[2i+1]=nums[i]+nums[i+1] starting from 0,1 and return its maximum.",
    "difficulty": "Easy",
    "topic": "Simulation",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Get Maximum in Generated Array (LC 1646)",
    "leetcodeNumber": 1646,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - SkBashaOp/Infosys-SP-DSE-role-Coding",
        "url": "https://github.com/SkBashaOp/Infosys-SP-DSE-role-Coding"
      }
    ],
    "notes": ""
  },
  {
    "slug": "goal tracker average steps",
    "name": "Goal Tracker Average Steps",
    "altTitles": [
      "Goal Tracker (average steps per day)"
    ],
    "statement": "Calculate the average steps per day needed to reach a fitness goal.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "grid paths from 1 1 n m avoiding one cell",
    "name": "Grid Paths from (1,1) to (n,m) Avoiding One Cell",
    "altTitles": [
      "Parallel Columbus"
    ],
    "statement": "Count distinct shortest paths from grid cell (1,1) to (n,m) that avoid a blocked settlement at (x,y).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Combinatorics",
      "Grid Paths",
      "Modular Arithmetic"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "LC 63 Unique Paths II (combinatorial variant)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      }
    ],
    "notes": "nCr-based counting with one forbidden cell."
  },
  {
    "slug": "height binary tree recursive",
    "name": "Height of Binary Tree (Recursive)",
    "altTitles": [
      "Height of Binary Tree"
    ],
    "statement": "Write a recursive function to calculate the height of a binary tree.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Recursion"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024
    ],
    "leetcode": "104. Maximum Depth of Binary Tree",
    "leetcodeNumber": 104,
    "leetcodeExact": true,
    "gfg": "Height of Binary Tree",
    "hackerrank": "Tree: Height of a Binary Tree",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Medium",
        "url": "https://medium.com/@nandita27iitp/hackwithinfy-2024-infosys-interview-experience-fte-specialist-programmer-first-walk-in-719944683a2d"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/interview-questions/power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement strstr substring search",
    "name": "Implement strStr (Substring Search)",
    "altTitles": [
      "Find the Index of the First Occurrence in a String"
    ],
    "statement": "Return the index of the first occurrence of a needle string in a haystack string.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "KMP",
      "Pattern Matching"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find the Index of the First Occurrence in a String (LC 28)",
    "leetcodeNumber": 28,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement trie prefix tree",
    "name": "Implement Trie (Prefix Tree)",
    "altTitles": [],
    "statement": "Implement a prefix tree supporting insert and search.",
    "difficulty": "Medium",
    "topic": "Trie",
    "subtopics": [
      "Design",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "208. Implement Trie",
    "leetcodeNumber": 208,
    "leetcodeExact": true,
    "gfg": "Trie insert and search",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement union dsu",
    "name": "Implement Union-Find (DSU)",
    "altTitles": [
      "Disjoint Set Union (Union-Find) Implementation"
    ],
    "statement": "Implement Union-Find with path compression and union by rank.",
    "difficulty": "Medium",
    "topic": "Union Find",
    "subtopics": [
      "Design",
      "Graphs"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Disjoint Set (Union-Find)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "infix postfix",
    "name": "Infix to Postfix",
    "altTitles": [
      "Infix to Postfix Conversion"
    ],
    "statement": "Convert an infix expression to postfix notation using an operator-precedence stack.",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Expression Parsing"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Infix to Postfix",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "jump game reachability",
    "name": "Jump Game (Reachability)",
    "altTitles": [
      "Jump Game"
    ],
    "statement": "Determine if the last index is reachable given max jump lengths.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Jump Game (LC 55)",
    "leetcodeNumber": 55,
    "leetcodeExact": true,
    "gfg": "Jump Game",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "knight probability chessboard",
    "name": "Knight Probability on Chessboard",
    "altTitles": [
      "Probability of Knight Staying on Board",
      "Probability of Knight staying on board"
    ],
    "statement": "Compute the probability that a knight remains on the chessboard after K random moves.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Matrix",
      "Matrix DP",
      "Probability"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "688. Knight Probability in Chessboard",
    "leetcodeNumber": 688,
    "leetcodeExact": true,
    "gfg": "Probability of Knight",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "koko eating bananas",
    "name": "Koko Eating Bananas",
    "altTitles": [],
    "statement": "Find the minimum eating speed to finish all bananas within H hours (binary search on answer).",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Binary Search on Answer",
      "answer search",
      "greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Koko Eating Bananas (LC 875)",
    "leetcodeNumber": 875,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "large mod 11",
    "name": "Large Number Mod 11",
    "altTitles": [
      "Remainder of Very Large Number Divided by 11"
    ],
    "statement": "Find the remainder when a very large number (given as string) is divided by 11.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Big Numbers",
      "Modular Arithmetic",
      "Strings"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Remainder with 11 (GFG)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "largest after mutating substring",
    "name": "Largest Number After Mutating Substring",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Strings",
      "strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1946 Largest Number After Mutating Substring",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "largest from array elements",
    "name": "Largest Number from Array Elements",
    "altTitles": [
      "Arrange Numbers to Form Biggest Number"
    ],
    "statement": "Arrange the given numbers/digits to form the largest possible number.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Custom Comparator",
      "Greedy",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 179 Largest Number",
    "leetcodeExact": true,
    "gfg": "GFG Largest Number formed from an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Paytm"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "level order traversal bfs",
    "name": "Level Order Traversal (BFS)",
    "altTitles": [
      "Binary Tree Level Order Traversal"
    ],
    "statement": "Traverse a binary tree level by level.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Queue",
      "Trees"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Binary Tree Level Order Traversal (LC 102)",
    "leetcodeNumber": 102,
    "leetcodeExact": true,
    "gfg": "Level order traversal",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lexicographically smallest equivalent string",
    "name": "Lexicographically Smallest Equivalent String",
    "altTitles": [],
    "statement": "Given equivalence pairs of characters, build the lexicographically smallest equivalent string for a base string using union-find of character classes.",
    "difficulty": "Medium",
    "topic": "Union Find",
    "subtopics": [
      "DSU",
      "Graphs",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "1061. Lexicographically Smallest Equivalent String",
    "leetcodeNumber": 1061,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      },
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lis bitwise constraints between adjacent elements",
    "name": "LIS with Bitwise Constraints Between Adjacent Elements",
    "altTitles": [
      "Conditional Longest Increasing Subsequence"
    ],
    "statement": "Longest increasing subsequence where adjacent chosen elements must additionally satisfy bitwise (AND/OR/XOR) conditions.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "LIS",
      "bit manipulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "LC 300 (base problem)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code (community PYQ aggregator)",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lis difference constraint d",
    "name": "LIS With Difference Constraint D",
    "altTitles": [
      "LIS with Adjacent Difference at most D"
    ],
    "statement": "Find the length of the longest strictly increasing subsequence where the difference between consecutive chosen elements is at most D.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Binary Search",
      "LIS",
      "Segment Tree"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "2407. Longest Increasing Subsequence II",
    "leetcodeNumber": 2407,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest consecutive sequence",
    "name": "Longest Consecutive Sequence",
    "altTitles": [],
    "statement": "Find the length of the longest run of consecutive integers present in an array.",
    "difficulty": "Medium",
    "topic": "HashSet",
    "subtopics": [
      "Arrays",
      "arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 128 Longest Consecutive Sequence",
    "leetcodeExact": true,
    "gfg": "Longest consecutive subsequence",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "longest increasing subsequence increasing differences",
    "name": "Longest Increasing Subsequence with Increasing Differences",
    "altTitles": [
      "Special LIS"
    ],
    "statement": "Find the length of the longest increasing subsequence such that the differences between adjacent chosen elements are also increasing.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "LIS"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest palindromic subsequence",
    "name": "Longest Palindromic Subsequence",
    "altTitles": [],
    "statement": "Find the length of the longest palindromic subsequence in a string.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Interval DP",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "516. Longest Palindromic Subsequence",
    "leetcodeNumber": 516,
    "leetcodeExact": true,
    "gfg": "Longest Palindromic Subsequence",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest well performing interval",
    "name": "Longest Well-Performing Interval",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Monotonic Stack",
      "Prefix Sum",
      "monotonic stack",
      "prefix sums"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1124 Longest Well-Performing Interval",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "man no name",
    "name": "Man With No Name",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Miscellaneous",
    "subtopics": [],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - aakashverma1124/InfyTQ-Coding-Questions-Final-Round",
        "url": "https://github.com/aakashverma1124/InfyTQ-Coding-Questions-Final-Round"
      }
    ],
    "notes": "Statement not published; title from filename P4_ManWithNoName."
  },
  {
    "slug": "matrix chain multiplication",
    "name": "Matrix Chain Multiplication",
    "altTitles": [],
    "statement": "Find the minimum number of scalar multiplications to multiply a chain of matrices.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Interval DP"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Matrix Chain Multiplication",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "max cities reachable from city 1 avoiding devils tree",
    "name": "Max Cities Reachable from City 1 Avoiding Devils (Tree)",
    "altTitles": [
      "Maximum Number of Cities That Can Be Visited"
    ],
    "statement": "N cities form a tree (N-1 roads); M devils occupy some cities. Find the maximum number of cities visitable starting from city 1 without passing devil cities.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "BFS",
      "DFS",
      "tree"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeChef Discuss",
        "url": "https://discuss.codechef.com/t/infosys-hack-with-infy-power-programmer-interview-experience-2020-result-selected/75630"
      },
      {
        "name": "GeeksforGeeks (interview experience)",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-2020-interview-experience-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "max dishes one type no two adjacent",
    "name": "Max Dishes One Type No Two Adjacent",
    "altTitles": [
      "Non-Adjacent Dish Selection"
    ],
    "statement": "Choose as many dishes as possible of a single type such that no two chosen dishes are adjacent.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "max identical pieces rearrangeable string",
    "name": "Max Identical Pieces Rearrangeable String",
    "altTitles": [
      "Equal Pieces String"
    ],
    "statement": "Rearrange a string then cut it into the maximum number of identical pieces.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Frequency Counting",
      "GCD"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      }
    ],
    "notes": "Answer is GCD of character frequencies."
  },
  {
    "slug": "max sum middle elements over n 3 triplets",
    "name": "Max Sum of Middle Elements over n/3 Triplets",
    "altTitles": [
      "Maximum Sum of All Triplets Score"
    ],
    "statement": "Partition an array (n multiple of 3) into n/3 triplets (a<=b<=c); a triplet's score is b. Maximize the sum of scores.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "sorting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "LC 1561 Maximum Number of Coins You Can Get (same idea)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeChef Discuss",
        "url": "https://discuss.codechef.com/t/infosys-hack-with-infy-power-programmer-interview-experience-2020-result-selected/75630"
      },
      {
        "name": "GeeksforGeeks (interview experience)",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-2020-interview-experience-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximize minimum game score",
    "name": "Maximize the Minimum Game Score",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "subtopics": [
      "Greedy",
      "greedy",
      "simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 3449 Maximize the Minimum Game Score",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum and minimum array",
    "name": "Maximum and Minimum in Array",
    "altTitles": [
      "Find Maximum and Minimum in Array"
    ],
    "statement": "Find the largest and smallest elements of an array.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Find minimum and maximum element in an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum dishes single type without adjacent picks",
    "name": "Maximum Dishes of a Single Type Without Adjacent Picks",
    "altTitles": [
      "Maximum Non-Adjacent Dishes Selection"
    ],
    "statement": "From an array of dish types, choose the maximum number of dishes of one type such that no two chosen dishes are adjacent.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum element array",
    "name": "Maximum Element in Array",
    "altTitles": [
      "Find Largest Element in an Array"
    ],
    "statement": "Find the maximum value in an array.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Basics"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Largest element in the array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum funds connected component max sum",
    "name": "Maximum Funds (Connected Component Max Sum)",
    "altTitles": [
      "Maximum Funds"
    ],
    "statement": "Given n entities with fund values and pairs of connections, find the maximum total funds within any single connected component.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "Connected Components",
      "DFS",
      "Union Find"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - aakashverma1124/HackWithInfy-Problems",
        "url": "https://github.com/aakashverma1124/HackWithInfy-Problems"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum length chain pairs",
    "name": "Maximum Length Chain of Pairs",
    "altTitles": [
      "Max Length Chain",
      "Max Length Chain of Pairs",
      "Max length chain"
    ],
    "statement": "Find the longest chain of pairs where each pair's first value exceeds the previous pair's second.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Activity Selection",
      "DP",
      "Intervals",
      "Sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "646. Maximum Length of Pair Chain",
    "leetcodeNumber": 646,
    "leetcodeExact": true,
    "gfg": "GFG Max length chain",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum non adjacent picks one dish type",
    "name": "Maximum Non-Adjacent Picks of One Dish Type",
    "altTitles": [
      "The Dishes Problem"
    ],
    "statement": "From an array of dish types, select the maximum number of non-adjacent dishes of a single type; report the best type/count.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "arrays",
      "frequency analysis"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/library/round-2-most-asked-questions-hwi"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum consecutive values you can make",
    "name": "Maximum Number of Consecutive Values You Can Make",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Sorting",
      "coins",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1798 Maximum Number of Consecutive Values You Can Make",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum product after k increments",
    "name": "Maximum Product After K Increments",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Greedy",
      "greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2233 Maximum Product After K Increments",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum score words formed by letters",
    "name": "Maximum Score Words Formed by Letters",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "subtopics": [
      "Bitmask",
      "Strings",
      "bitmask",
      "counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1255 Maximum Score Words Formed by Letters",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum segment sum after removals",
    "name": "Maximum Segment Sum After Removals",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "Union Find",
    "subtopics": [
      "Reverse Processing",
      "offline processing",
      "prefix sums"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2382 Maximum Segment Sum After Removals",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum subarray sum at most k swaps",
    "name": "Maximum Subarray Sum with At Most K Swaps",
    "altTitles": [
      "Maximum Sum Subarray with K Swaps"
    ],
    "statement": "Maximize the sum of a subarray when up to K swaps with outside elements are allowed (Kadane + swap reasoning).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "Greedy",
      "Kadane"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "53. Maximum Subarray (variant)",
    "leetcodeNumber": 53,
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      },
      {
        "name": "Medium",
        "url": "https://medium.com/@tej_varshith/infosys-specialist-programmer-interview-experience-5e03d644cdc9"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum sum subsequence non adjacent elements",
    "name": "Maximum Sum of Subsequence With Non-adjacent Elements",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Segment Tree",
      "point updates",
      "segment tree"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 3165 Maximum Sum of Subsequence With Non-adjacent Elements",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "Plausible match for the segment-tree OA problem reported by SP 2024 candidates. From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum xor two numbers",
    "name": "Maximum XOR of Two Numbers",
    "altTitles": [
      "Maximum XOR of Two Numbers in an Array"
    ],
    "statement": "Find the maximum XOR of any two elements in the array.",
    "difficulty": "Medium",
    "topic": "Trie",
    "subtopics": [
      "Bit Manipulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Maximum XOR of Two Numbers in an Array (LC 421)",
    "leetcodeNumber": 421,
    "leetcodeExact": true,
    "gfg": "Maximum XOR of two numbers in an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "median two sorted arrays",
    "name": "Median of Two Sorted Arrays",
    "altTitles": [],
    "statement": "Find the median of two sorted arrays in O(log(m+n)).",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "Divide and Conquer",
      "partitioning"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 4 Median of Two Sorted Arrays",
    "leetcodeExact": true,
    "gfg": "Median of 2 Sorted Arrays of Different Sizes",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "middle linked list even length handling",
    "name": "Middle of Linked List with Even-Length Handling",
    "altTitles": [
      "Middle of Linked List"
    ],
    "statement": "Find the middle of a linked list; if length is even, print 'can find mid' (corner cases matter).",
    "difficulty": "Easy",
    "topic": "Linked List",
    "subtopics": [
      "Fast-Slow Pointers",
      "Two Pointers"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "876. Middle of the Linked List",
    "leetcodeNumber": 876,
    "leetcodeExact": true,
    "gfg": "Finding middle element in a linked list",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-power-programmer-interview-2019/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "middle linked list",
    "name": "Middle of the Linked List",
    "altTitles": [
      "Find Middle of Linked List"
    ],
    "statement": "Find the middle element of a singly linked list using slow/fast pointers.",
    "difficulty": "Easy",
    "topic": "Linked List",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "876. Middle of the Linked List",
    "leetcodeNumber": 876,
    "leetcodeExact": true,
    "gfg": "Finding middle element in a linked list",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "min stack o 1 minimum",
    "name": "Min Stack (O(1) Minimum)",
    "altTitles": [
      "Min Stack (getMin in O(1))"
    ],
    "statement": "Design a stack supporting push, pop, top and retrieving the minimum in O(1).",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Design"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "155. Min Stack",
    "leetcodeNumber": 155,
    "leetcodeExact": true,
    "gfg": "Get minimum element from stack",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize binary string value swap flip costs",
    "name": "Minimize Binary String Value with Swap/Flip Costs",
    "altTitles": [
      "Binary String Ugliness"
    ],
    "statement": "Minimize the decimal value of a binary string using swaps (cost A) and flips (cost B) with a limited number of coins.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Cost Optimization",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize heights ii tower k",
    "name": "Minimize Heights II (Tower +/- K)",
    "altTitles": [
      "Minimize the Heights II"
    ],
    "statement": "Add or subtract K to each tower height to minimize the difference between tallest and shortest.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "LC 910 Smallest Range II",
    "leetcodeExact": true,
    "gfg": "Minimize the Heights II",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Adobe"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum addition make integer beautiful",
    "name": "Minimum Addition to Make Integer Beautiful",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Digits",
      "Greedy",
      "digit sum",
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2457 Minimum Addition to Make Integer Beautiful",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "minimum borrowing buy all books",
    "name": "Minimum Borrowing to Buy All Books",
    "altTitles": [
      "Self Sufficient"
    ],
    "statement": "A student earns money and buys books, borrowing from savings/parents when short; buy books in an optimal order to minimize the amount borrowed.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Prefix Sums",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum changes transform array into mountain",
    "name": "Minimum Changes to Transform Array into Mountain",
    "altTitles": [
      "Array Mountain Pattern"
    ],
    "statement": "Change the minimum number of elements so the array forms a mountain: equal ends and values incrementing by 1 toward the middle.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Implementation",
      "Pattern Matching"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "GeeksCodes",
        "url": "https://www.geekscodes.com/2025/02/infosys-hackwithinfy-2025-sample.html"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum cost path grid",
    "name": "Minimum Cost Path in Grid",
    "altTitles": [
      "Minimum Cost Path"
    ],
    "statement": "Find the minimum-cost path in a grid (moving allowed directions), summing cell costs.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Dijkstra",
      "Dijkstra (4-direction variant)",
      "Dijkstra (variant)",
      "Grid",
      "Grids",
      "Matrix"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "64. Minimum Path Sum",
    "leetcodeNumber": 64,
    "leetcodeExact": true,
    "gfg": "GFG Minimum Cost Path",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum deletions make palindrome",
    "name": "Minimum Deletions To Make Palindrome",
    "altTitles": [
      "Minimum Number of Deletions to Make a Palindrome",
      "Minimum number of deletions to make a palindrome"
    ],
    "statement": "Minimum deletions so the remaining string is a palindrome (n - LPS).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "LCS",
      "LPS",
      "LPS Reduction",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "LC 1312 (related)",
    "leetcodeExact": false,
    "gfg": "GFG Minimum number of deletions to make a string palindrome",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum exercises drain energy each usable twice",
    "name": "Minimum Exercises to Drain Energy (Each Usable Twice)",
    "altTitles": [
      "Gym Exercise Exhaustion"
    ],
    "statement": "Starting with E energy, each exercise drains a given amount and can be used at most twice; find the minimum number of exercises to bring energy to zero or below.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      },
      {
        "name": "GeeksCodes",
        "url": "https://www.geekscodes.com/2025/02/infosys-hackwithinfy-2025-sample.html"
      }
    ],
    "notes": "Sort descending, take largest drains twice."
  },
  {
    "slug": "minimum insertions make palindrome",
    "name": "Minimum Insertions to Make Palindrome",
    "altTitles": [
      "Form a Palindrome",
      "Form a Palindrome (Minimum Insertions)",
      "Form a palindrome (min insertions)"
    ],
    "statement": "Find the minimum number of characters to insert to make a string a palindrome.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "LCS",
      "LCS Reduction",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "1312. Minimum Insertion Steps to Make a String Palindrome",
    "leetcodeNumber": 1312,
    "leetcodeExact": true,
    "gfg": "Form a palindrome",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum jumps reach end",
    "name": "Minimum Jumps to Reach End",
    "altTitles": [
      "Minimum Number of Jumps",
      "Minimum number of jumps"
    ],
    "statement": "Find the minimum number of jumps to reach the end of an array where each element is the max jump length.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "DP",
      "Jump Game"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "45. Jump Game II",
    "leetcodeNumber": 45,
    "leetcodeExact": true,
    "gfg": "GFG Minimum number of jumps",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum length subsequence same lcm as array",
    "name": "Minimum Length Subsequence With Same LCM As Array",
    "altTitles": [
      "Minimum subsequence with LCM equal to LCM of array"
    ],
    "statement": "Given an array (N <= 50), compute the LCM of the whole array and find the minimum number of elements whose LCM equals that value.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Bitmask DP",
      "LCM",
      "Number Theory"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/company-name-interview-experience-for-job-title-31/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-sp-role/"
      }
    ],
    "notes": "One candidate solved with bitmask DP, passing 7/10 test cases; another got TLE on 3/9 cases."
  },
  {
    "slug": "minimum possible sum beautiful array",
    "name": "Minimum Possible Sum of Beautiful Array",
    "altTitles": [
      "Find the Minimum Possible Sum of a Beautiful Array"
    ],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Math",
      "greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find the Minimum Possible Sum of a Beautiful Array (LC 2834)",
    "leetcodeNumber": 2834,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "See also the Sep 2024 'Beautiful Array' hard OA thread. From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "minimum replacements so all grid paths are palindromes",
    "name": "Minimum Replacements So All Grid Paths Are Palindromes",
    "altTitles": [
      "Palindromic Paths"
    ],
    "statement": "In a binary grid, find the minimum number of cell replacements so that every path from top-left to bottom-right reads as a palindrome.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Counting",
      "Greedy",
      "Grids"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1366C Palindromic Paths",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": "Statement matches Codeforces 1366C."
  },
  {
    "slug": "minimum reverse operations k subarray reversals banned positions",
    "name": "Minimum Reverse Operations (K-Subarray Reversals with Banned Positions)",
    "altTitles": [
      "Minimum Operations to Move 1 in an Array with Forbidden Positions"
    ],
    "statement": "An array has a single 1; in one operation reverse any subarray of size K. Some positions are forbidden. For every position find the minimum operations to move the 1 there (-1 if impossible).",
    "difficulty": "Hard",
    "topic": "BFS",
    "subtopics": [
      "graphs",
      "reachability",
      "sorted sets"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023
    ],
    "leetcode": "LC 2612 Minimum Reverse Operations",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/3240965/Infosys-OA-HARD"
      }
    ],
    "notes": "This Infosys OA question was subsequently added to LeetCode as LC 2612."
  },
  {
    "slug": "minimum subset lcm equal array lcm",
    "name": "Minimum Subset with LCM Equal to Array LCM",
    "altTitles": [
      "Smallest Subset with LCM Equal to LCM of Whole Array"
    ],
    "statement": "Given n integers, find the minimum number of elements to select so that the LCM of the selected elements equals the LCM of the entire array.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Bitmask DP",
      "LCM",
      "Number Theory"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/company-name-interview-experience-for-job-title-31/"
      },
      {
        "name": "LinkedIn (Arnav Tyagi - related post by Sharad Patil)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": "Candidate used bitmask DP, 7/10 test cases (3 TLE)."
  },
  {
    "slug": "minimum sum k avoiding array",
    "name": "Minimum Sum K-Avoiding Array",
    "altTitles": [
      "Determine the Minimum Sum of a k-avoiding Array"
    ],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "HashSet",
      "Math",
      "hash set",
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Determine the Minimum Sum of a k-avoiding Array (LC 2829)",
    "leetcodeNumber": 2829,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "minimum swaps sort array",
    "name": "Minimum Swaps to Sort Array",
    "altTitles": [
      "Minimum Swaps to Sort"
    ],
    "statement": "Return the minimum number of swaps needed to sort an array, via cycle detection.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Cycle Decomposition",
      "Cycle Detection",
      "Graphs",
      "Sorting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Minimum number of swaps required to sort an array",
    "hackerrank": "HackerRank Minimum Swaps 2",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum total distance traveled",
    "name": "Minimum Total Distance Traveled",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Sorting",
      "robots and factories",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2463 Minimum Total Distance Traveled",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "multiply two matrices",
    "name": "Multiply Two Matrices",
    "altTitles": [
      "Matrix Multiplication"
    ],
    "statement": "Multiply two matrices and output the product matrix.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Matrix"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Multiply two matrices",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "ncr mod m",
    "name": "nCr mod M",
    "altTitles": [
      "nCr modulo m"
    ],
    "statement": "Compute nCr % m where nCr = n!/(r!(n-r)!).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Combinatorics",
      "Modular Inverse"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "nCr mod p",
    "hackerrank": "nCr queries",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "nodes at distance k tree",
    "name": "Nodes At Distance K In Tree",
    "altTitles": [
      "Nodes at distance K from a source node in a tree"
    ],
    "statement": "Find all nodes at distance k from a given source node in a tree, including nodes above the source.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "BFS",
      "DFS",
      "Graphs"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2023,
      2024
    ],
    "leetcode": "LC 863 All Nodes Distance K in Binary Tree",
    "leetcodeExact": true,
    "gfg": "Print all nodes at distance K from a given node",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/competitive-exam-experiences/hackwithinfy-exam-experience/"
      }
    ],
    "notes": "Hidden test cases failed for nodes above the source."
  },
  {
    "slug": "base conversion",
    "name": "Number Base Conversion",
    "altTitles": [
      "Number System Conversion (Octal/Binary/Decimal)"
    ],
    "statement": "Convert a number between bases, e.g. octal to decimal or decimal to binary/octal.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Systems"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Program for Decimal to Binary Conversion",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - EngineerInd/Infosys-Coding-Interview-Questions",
        "url": "https://github.com/EngineerInd/Infosys-Coding-Interview-Questions"
      },
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "beautiful integers range",
    "name": "Number of Beautiful Integers in the Range",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Digit DP",
      "digit DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2827 Number of Beautiful Integers in the Range",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "nodes value one",
    "name": "Number of Nodes With Value One",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "BFS",
      "Bit Manipulation",
      "Simulation",
      "flips"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2445 Number of Nodes With Value One",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "open doors",
    "name": "Number Of Open Doors",
    "altTitles": [
      "Number of Open Doors (perfect squares)"
    ],
    "statement": "N doors toggled in N passes; count doors left open (perfect squares up to N).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Perfect Squares",
      "Puzzles"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "319. Bulb Switcher",
    "leetcodeNumber": 319,
    "leetcodeExact": true,
    "gfg": "Number Of Open Doors",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "subsequences equal gcd",
    "name": "Number of Subsequences With Equal GCD",
    "altTitles": [
      "Find the Number of Subsequences With Equal GCD"
    ],
    "statement": "",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "GCD",
      "Math",
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find the Number of Subsequences With Equal GCD (LC 3336)",
    "leetcodeNumber": 3336,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "Plausible match for the 'DP + GCD' OA problem reported in the Mar 2025 SP thread. From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "overlapping rectangles",
    "name": "Overlapping Rectangles",
    "altTitles": [],
    "statement": "Determine whether two axis-aligned rectangles overlap.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "836. Rectangle Overlap",
    "leetcodeNumber": 836,
    "leetcodeExact": true,
    "gfg": "Find if two rectangles overlap",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pair sum",
    "name": "Pair with Given Sum",
    "altTitles": [
      "Two Sum"
    ],
    "statement": "Find two numbers in an array that add up to a target.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1 Two Sum",
    "leetcodeExact": true,
    "gfg": "GFG Key Pair",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "TCS"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "palindrome partitioning",
    "name": "Palindrome Partitioning",
    "altTitles": [],
    "statement": "Partition a string so every substring is a palindrome; return all partitions.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "DP",
      "Strings",
      "strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 131 Palindrome Partitioning",
    "leetcodeExact": true,
    "gfg": "Palindromic Partitioning",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "partition k segments min occurrence spread cost",
    "name": "Partition K Segments Min Occurrence Spread Cost",
    "altTitles": [
      "Array Partitioning with Segment Cost (first/last occurrence spread)"
    ],
    "statement": "Split array into k consecutive segments minimizing total cost, where a segment's cost sums (last occurrence - first occurrence) over its unique elements.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Divide and Conquer Optimization",
      "Partition DP"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1527E Partition Game (equivalent)",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "power function fast exponentiation",
    "name": "Power Function (Fast Exponentiation)",
    "altTitles": [
      "Pow(x, n)"
    ],
    "statement": "Compute x raised to n using fast exponentiation.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Divide and Conquer",
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Pow(x, n) (LC 50)",
    "leetcodeNumber": 50,
    "leetcodeExact": true,
    "gfg": "Power of numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pyramid or diamond pattern",
    "name": "Print Pyramid or Diamond Pattern",
    "altTitles": [
      "Pattern Printing (Pyramid / Diamond)"
    ],
    "statement": "Print a pyramid or diamond star pattern using loops.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Loops",
      "Patterns"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Capgemini",
      "TCS"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      },
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "probability each color after sequential ball transfers",
    "name": "Probability of Each Color After Sequential Ball Transfers",
    "altTitles": [
      "Ball Color Probability"
    ],
    "statement": "Balls are transferred sequentially between buckets; compute the probability of drawing each color from the final bucket.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "DP",
      "Probability"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reachable numbers via 1 then strip trailing zeros",
    "name": "Reachable Numbers via +1 Then Strip Trailing Zeros",
    "altTitles": [
      "Beautiful Function"
    ],
    "statement": "Repeatedly apply: add 1 to x, then remove all trailing zeros. Count how many distinct numbers are reachable.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "cycle detection",
      "simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1157A Reachable Numbers (identical)",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/library/round-2-most-asked-questions-hwi"
      }
    ],
    "notes": ""
  },
  {
    "slug": "rearrange array elements by sign",
    "name": "Rearrange Array Elements by Sign",
    "altTitles": [],
    "statement": "Alternate positive and negative numbers preserving relative order.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2149 Rearrange Array Elements by Sign",
    "leetcodeExact": true,
    "gfg": "Alternate positive and negative numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "redistribute three stone piles target sizes",
    "name": "Redistribute Three Stone Piles to Target Sizes",
    "altTitles": [
      "Stone Pile Distribution"
    ],
    "statement": "Determine whether three piles of stones can reach target sizes when one pile may be split and distributed between the other two.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Greedy",
      "Logic"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "remove k digits minimize ticket price non zero",
    "name": "Remove K Digits to Minimize Ticket Price (Non-Zero)",
    "altTitles": [
      "Amusement Park"
    ],
    "statement": "Remove K digits from a ticket price so that the resulting price is minimized while remaining non-zero.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Stack",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2023
    ],
    "leetcode": "LC 402 Remove K Digits",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse reverse integer",
    "name": "Reverse a Number / Reverse Integer",
    "altTitles": [
      "Reverse Integer"
    ],
    "statement": "Reverse the digits of an integer (with overflow handling in LC variant).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Digits"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "Reverse Integer (LC 7)",
    "leetcodeNumber": 7,
    "leetcodeExact": true,
    "gfg": "Reverse a number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      },
      {
        "name": "GitHub - sandhyaDasareddy/infosys-interview-coding-solutions",
        "url": "https://github.com/sandhyaDasareddy/infosys-interview-coding-solutions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse array",
    "name": "Reverse an Array",
    "altTitles": [],
    "statement": "Reverse an array of integers using the two-pointer technique.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Reverse an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "PlacementPapers.app",
        "url": "https://placementpapers.app/infosys/coding-questions/"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse nodes k group",
    "name": "Reverse Nodes in k-Group",
    "altTitles": [],
    "statement": "Reverse a linked list k nodes at a time.",
    "difficulty": "Hard",
    "topic": "Linked List",
    "subtopics": [
      "Recursion",
      "pointers",
      "recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 25 Reverse Nodes in k-Group",
    "leetcodeExact": true,
    "gfg": "Reverse a Linked List in groups of given size",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "rotate matrix",
    "name": "Rotate Matrix",
    "altTitles": [
      "Rotate Image (Rotate Matrix 90 Degrees)"
    ],
    "statement": "Rotate an NxN matrix by 90 degrees in place.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Rotate Image (LC 48)",
    "leetcodeNumber": 48,
    "leetcodeExact": true,
    "gfg": "Rotate by 90 degree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "search linked list",
    "name": "Search in Linked List",
    "altTitles": [
      "Linear Search in Linked List",
      "Linear search in a linked list"
    ],
    "statement": "Perform a linear search for a value in a linked list (15-minute live coding task).",
    "difficulty": "Easy",
    "topic": "Linked List",
    "subtopics": [
      "Searching",
      "Traversal"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Search an element in a Linked List",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-digital-specialist-engineeroff-campus/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-dse-ses/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sentence palindrome",
    "name": "Sentence Palindrome",
    "altTitles": [],
    "statement": "Check if a sentence is a palindrome after ignoring spaces, punctuation and case.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "125. Valid Palindrome (analog)",
    "leetcodeNumber": 125,
    "leetcodeExact": true,
    "gfg": "GFG Sentence Palindrome",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "shortest path weighted graph dijkstra",
    "name": "Shortest Path in Weighted Graph (Dijkstra)",
    "altTitles": [
      "Dijkstra's Algorithm"
    ],
    "statement": "Find shortest paths from a source to all vertices in a non-negative weighted graph.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "Heap",
      "Shortest Path"
    ],
    "roles": [
      "SP"
    ],
    "years": [],
    "leetcode": "743. Network Delay Time (application)",
    "leetcodeNumber": 743,
    "leetcodeExact": true,
    "gfg": "Implementing Dijkstra Algorithm",
    "hackerrank": "Dijkstra: Shortest Reach 2",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      },
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "shortest path negative edges bellman ford",
    "name": "Shortest Path Negative Edges Bellman Ford",
    "altTitles": [
      "Shortest Path with Negative Edge Weights"
    ],
    "statement": "Find the shortest path between two nodes in a directed graph that may contain negative-weight edges (Bellman-Ford).",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "Bellman-Ford",
      "Shortest Path"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Bellman-Ford Algorithm",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sieve eratosthenes",
    "name": "Sieve Of Eratosthenes",
    "altTitles": [
      "Sieve of Eratosthenes (easy OA slot)"
    ],
    "statement": "Easy OA question directly based on the Sieve of Eratosthenes for generating primes.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Primes",
      "Sieve"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "Count Primes (LC 204)",
    "leetcodeNumber": 204,
    "leetcodeExact": true,
    "gfg": "Sieve of Eratosthenes",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-interview-experience-for-power-programmer-2020/"
      }
    ],
    "notes": "Same article's interview asked for the nth prime number."
  },
  {
    "slug": "single element among pairs xor",
    "name": "Single Element Among Pairs (XOR)",
    "altTitles": [
      "Party of Couples (single element by XOR)"
    ],
    "statement": "Everyone comes in pairs except one person; find the lone element (XOR trick).",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "XOR"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "136. Single Number",
    "leetcodeNumber": 136,
    "leetcodeExact": true,
    "gfg": "Party of Couples",
    "hackerrank": "Lonely Integer",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "single",
    "name": "Single Number",
    "altTitles": [
      "Single Number (XOR)"
    ],
    "statement": "Every element appears twice except one; find it using XOR.",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "XOR"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Single Number (LC 136)",
    "leetcodeNumber": 136,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "Lonely Integer",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smallest non representable subset sum",
    "name": "Smallest Non-Representable Subset Sum",
    "altTitles": [
      "Smallest Positive Integer Not Representable as Subset Sum",
      "Smallest positive integer not representable as subset sum"
    ],
    "statement": "Find the smallest positive integer that cannot be represented as a sum of any subset of a sorted positive array.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Math",
      "Sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "LC 330 Patching Array (related)",
    "leetcodeExact": false,
    "gfg": "GFG Smallest positive integer value not possible as subset sum",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smallest value among four consecutive identical elements matrix",
    "name": "Smallest Value Among Four Consecutive Identical Elements in Matrix",
    "altTitles": [
      "Four in a Line"
    ],
    "statement": "In a matrix, find the smallest value among all sets of four consecutive identical elements appearing horizontally, vertically, or diagonally.",
    "difficulty": "Medium",
    "topic": "Simulation",
    "subtopics": [
      "Implementation",
      "Matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": "Connect-Four style matrix scan."
  },
  {
    "slug": "soldier next multiple power range max bonus",
    "name": "Soldier Next Multiple Power Range Max Bonus",
    "altTitles": [
      "Soldier Treasure Chest XP Maximization (Bob's Game)"
    ],
    "statement": "For each soldier find the first soldier to the right whose power is a multiple of the current soldier's power, and accumulate the maximum chest bonus values in the ranges between them.",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Number Theory",
      "Preprocessing",
      "Range Maximum Query",
      "Sparse Table"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      },
      {
        "name": "Scribd",
        "url": "https://www.scribd.com/document/727074379/Previous-HackWithInfy-Questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sort characters by frequency",
    "name": "Sort Characters by Frequency",
    "altTitles": [],
    "statement": "Sort characters of a string in decreasing order of frequency.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Heap",
      "Sorting",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "Sort Characters By Frequency (LC 451)",
    "leetcodeNumber": 451,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sort string characters",
    "name": "Sort String Characters",
    "altTitles": [
      "Sort String of Characters",
      "Sort a String of Characters"
    ],
    "statement": "Sort the characters of a string (counting sort acceptable).",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "Counting Sort",
      "Strings"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Sort a string of characters",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "split array into k segments minimizing first last occurrence cost",
    "name": "Split Array into K Segments Minimizing First/Last Occurrence Cost",
    "altTitles": [
      "Array Partitioning with Cost Minimization"
    ],
    "statement": "Split an array into k consecutive segments where each segment's cost is the sum over unique elements of the distance between their first and last occurrence; minimize total cost.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "Divide and Conquer Optimization"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022,
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1527E Partition Game",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/specialist-programmer/coding-questions/"
      }
    ],
    "notes": "Statement matches Codeforces 1527E almost exactly."
  },
  {
    "slug": "split pile reach x y",
    "name": "Split Pile To Reach X Y",
    "altTitles": [
      "Stone Pile Distribution"
    ],
    "statement": "Given three piles, split one pile's stones onto the other two; determine if the two remaining piles can contain exactly x and y stones.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Casework",
      "Logic"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "Codeforces-style A/B problem",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "stack using array",
    "name": "Stack Using Array",
    "altTitles": [
      "Implement Stack Using Array"
    ],
    "statement": "Implement a basic stack with push/pop using an array.",
    "difficulty": "Easy",
    "topic": "Stack",
    "subtopics": [
      "Design"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Implement Stack using Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "stone game viii",
    "name": "Stone Game VIII",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Game Theory",
      "Prefix Sum",
      "game theory",
      "prefix sums"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1872 Stone Game VIII",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "string matching kmp",
    "name": "String Matching (KMP)",
    "altTitles": [
      "KMP Pattern Matching",
      "String matching problem"
    ],
    "statement": "Write code for a string matching problem (pattern searching in text).",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "KMP",
      "Pattern Matching",
      "Pattern Searching"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "Find the Index of the First Occurrence in a String (LC 28)",
    "leetcodeNumber": 28,
    "leetcodeExact": true,
    "gfg": "Naive algorithm for Pattern Searching / KMP Algorithm",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-interview-experience-2024/"
      }
    ],
    "notes": "Exact variant not specified in the article."
  },
  {
    "slug": "string rotated by exactly two places",
    "name": "String Rotated by Exactly Two Places",
    "altTitles": [
      "Check if String is Rotated by Two Places"
    ],
    "statement": "Check whether one string can be obtained from another by rotating it exactly two places (left or right).",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Rotation"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Check if a string can be obtained by rotating another string 2 places",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "subtract two matrices",
    "name": "Subtract Two Matrices",
    "altTitles": [
      "Matrix Subtraction"
    ],
    "statement": "Subtract corresponding elements of two matrices.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Matrix"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      },
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum absolute adjacent differences from position",
    "name": "Sum Absolute Adjacent Differences From Position",
    "altTitles": [
      "Sum of Absolute Adjacent Differences from Position"
    ],
    "statement": "Starting from a user-specified position, compute the sum of absolute differences between adjacent numbers.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Traversal"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "DailyRecruitment",
        "url": "https://www.dailyrecruitment.in/infosys-sp-and-dse-coding-solved-questions-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum triangle from array",
    "name": "Sum Triangle from Array",
    "altTitles": [
      "Print Sum Triangle for a Given Array",
      "Triangle Formation (Sum Triangle)"
    ],
    "statement": "Build a triangle where each row element is the sum of the two adjacent elements in the row below.",
    "difficulty": "Easy",
    "topic": "Recursion",
    "subtopics": [
      "Arrays",
      "Recursion"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Program to print Sum Triangle for a given array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      },
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "team division",
    "name": "Team Division",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Miscellaneous",
    "subtopics": [],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019,
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - aakashverma1124/InfyTQ-Coding-Questions-Final-Round",
        "url": "https://github.com/aakashverma1124/InfyTQ-Coding-Questions-Final-Round"
      }
    ],
    "notes": "Statement not published; title from filename P3_TeamDivision."
  },
  {
    "slug": "ternary xor split minimizing maximum",
    "name": "Ternary XOR: Split Number Minimizing the Maximum",
    "altTitles": [
      "TOR"
    ],
    "statement": "Find two ternary numbers (digits 0,1,2) whose digit-wise sum mod 3 (TOR) equals a given ternary number, minimizing the maximum of the two.",
    "difficulty": "Hard",
    "topic": "Greedy",
    "subtopics": [
      "Base-3",
      "Math",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "CF 1328C Ternary XOR",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": "Statement matches Codeforces 1328C."
  },
  {
    "slug": "beautiful subsets",
    "name": "The Number of Beautiful Subsets",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Counting",
      "DP",
      "combinatorics",
      "hash map"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 2597 The Number of Beautiful Subsets",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "lower case",
    "name": "To Lower Case",
    "altTitles": [],
    "statement": "Convert a string to lowercase without built-ins.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "ASCII",
      "implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 709 To Lower Case",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 2,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      },
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "top k frequent elements",
    "name": "Top K Frequent Elements",
    "altTitles": [],
    "statement": "Find the K most frequent elements in an array using a heap or counting.",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Bucket Sort",
      "HashMap"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "347. Top K Frequent Elements",
    "leetcodeNumber": 347,
    "leetcodeExact": true,
    "gfg": "GFG Top K Frequent Elements",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "unique paths grid",
    "name": "Unique Paths in Grid",
    "altTitles": [
      "Unique Grid Paths"
    ],
    "statement": "Count the paths from the top-left to bottom-right corner of a grid moving only right/down.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "2D DP",
      "Combinatorics",
      "Grid",
      "Grid Paths"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024,
      2025
    ],
    "leetcode": "62. Unique Paths",
    "leetcodeNumber": 62,
    "leetcodeExact": true,
    "gfg": "GFG Count all possible paths",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "unique paths obstacles",
    "name": "Unique Paths With Obstacles",
    "altTitles": [
      "Count Unique Paths in Grid with Obstacles"
    ],
    "statement": "Count unique paths from top-left to bottom-right of an MxN grid containing blocked cells.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "2D DP",
      "Grid"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025,
      2026
    ],
    "leetcode": "63. Unique Paths II",
    "leetcodeNumber": 63,
    "leetcodeExact": true,
    "gfg": "Unique paths in a grid with obstacles",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS",
      "Wipro"
    ],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PlacementPreps",
        "url": "https://www.placementpreps.in/company-prep/infosys-hackwithinfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "withdraw amount from array ends minimum transactions",
    "name": "Withdraw Amount from Array Ends in Minimum Transactions",
    "altTitles": [
      "Minimum Withdrawals"
    ],
    "statement": "Withdraw a specified total cash amount taking notes only from either end of an array using the minimum number of transactions.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Greedy",
      "Prefix Sums",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021,
      2024
    ],
    "leetcode": "LC 1658 Minimum Operations to Reduce X to Zero (similar)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Medium",
    "frequencyScore": 2,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infytq-previous-year-papers/advantage-coding-round-question/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "1d minesweeper valid configurations",
    "name": "1D Minesweeper - Count Valid Configurations",
    "altTitles": [
      "Mine Detection String Validation"
    ],
    "statement": "A string contains '*' (mines), digits (count of adjacent mines) and '?' (unknown). Count the ways to replace '?' so every digit is consistent with adjacent mines. Example: '??0?1?' -> 2.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "constraint satisfaction",
      "strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1198775/hackwithinfy-round1-problem7-may-2021"
      }
    ],
    "notes": "String length up to 1e5."
  },
  {
    "slug": "3d knapsack three resource limits",
    "name": "3D Knapsack with Three Resource Limits",
    "altTitles": [
      "Max Profit Selecting Items with 3 Resource Limits"
    ],
    "statement": "Select items to maximize profit subject to three simultaneous resource capacity limits (3D DP).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Knapsack",
      "Multi-dimensional DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "3sum closest",
    "name": "3Sum Closest",
    "altTitles": [],
    "statement": "Find three numbers whose sum is closest to a target.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Sorting",
      "Two Pointers"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2024
    ],
    "leetcode": "16. 3Sum Closest",
    "leetcodeNumber": 16,
    "leetcodeExact": true,
    "gfg": "Three Sum Closest",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium",
        "url": "https://medium.com/@rhythm6194/interview-experience-for-the-power-programmer-specialist-programmer-role-at-infosys-mean-mern-858d3831693b"
      }
    ],
    "notes": ""
  },
  {
    "slug": "4sum",
    "name": "4Sum",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "sorting",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 18 4Sum",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "add strings big addition",
    "name": "Add Strings (Big Number Addition)",
    "altTitles": [
      "Add Two Number Strings"
    ],
    "statement": "Return the sum of two non-negative integers given as strings.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Carry Handling",
      "Math"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "415. Add Strings",
    "leetcodeNumber": 415,
    "leetcodeExact": true,
    "gfg": "Sum of two large numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "add two non negative integer strings",
    "name": "Add Two Non-Negative Integer Strings",
    "altTitles": [
      "Add Strings"
    ],
    "statement": "Return the sum of two non-negative integers given as strings, as a string.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Carry Handling",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 415 Add Strings",
    "leetcodeExact": true,
    "gfg": "GFG Sum of two large numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "alien dictionary",
    "name": "Alien Dictionary",
    "altTitles": [
      "Alien Dictionary (variant)"
    ],
    "statement": "Question conceptually close to the Alien Dictionary problem: derive character order from a sorted list of alien-language words.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "Strings",
      "Topological Sort"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 269 Alien Dictionary",
    "leetcodeExact": true,
    "gfg": "Alien Dictionary",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-sp-role/"
      }
    ],
    "notes": "Reported as 'similar to Alien Dictionary, not the same'."
  },
  {
    "slug": "alternating bits check",
    "name": "Alternating Bits Check",
    "altTitles": [
      "Bulb glowing pattern from binary of n (alternating bits)"
    ],
    "statement": "Given toggle count n, bulbs glow only when the binary representation of n consists of alternating bits starting from 1.",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Binary Representation"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 693 Binary Number with Alternating Bits",
    "leetcodeExact": true,
    "gfg": "Check if a number has bits in alternate pattern",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-specialist-programmer-full-time-on-campus-2025-batch/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "any base decimal",
    "name": "Any Base To Decimal",
    "altTitles": [
      "Convert from Any Base to Decimal"
    ],
    "statement": "Convert a number given in an arbitrary base to decimal.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Base Conversion",
      "Number Systems"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Convert from any base to decimal",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "Base-conversion family also appears as an actual SP/DSE OA question (minimum uniform-digit base)."
  },
  {
    "slug": "area circle inscribed right triangle",
    "name": "Area of Circle Inscribed in Right Triangle",
    "altTitles": [
      "Incircle Area of Right Triangle"
    ],
    "statement": "Calculate the area of the circle inscribed in a right-angled triangle given its sides.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Area of Incircle of a Right Angled Triangle",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "array rotation queries prefix sums",
    "name": "Array Rotation Queries with Prefix Sums",
    "altTitles": [
      "Array Rotation with Prefix Sum"
    ],
    "statement": "Handle clockwise/anti-clockwise array rotations combined with prefix-sum range queries.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Prefix Sum",
      "Queries",
      "Rotation"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2025
    ],
    "leetcode": "189. Rotate Array (related)",
    "leetcodeNumber": 189,
    "leetcodeExact": false,
    "gfg": "Array rotation with queries",
    "hackerrank": "Circular Array Rotation",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-program-power-programmer-interview-experience-wave-23/"
      }
    ],
    "notes": "Array rotation also cited among most-asked Infosys OA basics."
  },
  {
    "slug": "assign cookies",
    "name": "Assign Cookies",
    "altTitles": [],
    "statement": "Assign cookies to children by greed factor to maximize content children.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Sorting",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Assign Cookies (LC 455)",
    "leetcodeNumber": 455,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      }
    ],
    "notes": ""
  },
  {
    "slug": "average steps per day reach goal",
    "name": "Average Steps per Day to Reach Goal",
    "altTitles": [
      "Goal Tracker"
    ],
    "statement": "Calculate the average steps per day needed to reach a fitness goal given progress so far.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "basic area computations",
    "name": "Basic Area Computations",
    "altTitles": [
      "Area of Rectangle, Right Angled Triangle and Circle"
    ],
    "statement": "Compute areas of basic geometric shapes.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Area of Rectangle, Right Angled Triangle and Circle",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "beautiful array statement unclear",
    "name": "Beautiful Array (statement unclear)",
    "altTitles": [
      "Beautiful Array (Infosys Hard OA, Sep 2024)"
    ],
    "statement": "Hard OA problem defining a 'beautiful' array (full statement was posted as images; commenters asked for clarification of the definition).",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "unknown"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "possibly LC 2834 Find the Minimum Possible Sum of a Beautiful Array",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/5835112/Infosys-Hard-OA/"
      }
    ],
    "notes": "Statement images not machine-readable; LC 2834 appears in the Infosys company tag and may be related."
  },
  {
    "slug": "best time buy and sell stock ii",
    "name": "Best Time to Buy and Sell Stock II",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 122 Best Time to Buy and Sell Stock II",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "bfs and dfs implementation",
    "name": "BFS And DFS Implementation",
    "altTitles": [],
    "statement": "Implement/explain BFS and DFS graph traversals.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "BFS",
      "DFS"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "BFS for a Graph / DFS for a Graph",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-specialist-engineer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bfs variation interview 2025",
    "name": "BFS Variation Interview 2025",
    "altTitles": [
      "Graph BFS Variation (SP interview)"
    ],
    "statement": "Graph problem involving a slight variation of BFS; candidate passed 9/9 test cases after fixing a boundary comparison.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Graphs"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Dev Sharma)",
        "url": "https://medium.com/@giga_dummy/infosys-sp-role-interview-experience-2025-by-dev-sharma-210bcfa7dfef"
      }
    ],
    "notes": "Interview also included a tree partitioning problem and a LeetCode-hard sliding window problem; topological sort and doubly linked lists discussed."
  },
  {
    "slug": "book allocation",
    "name": "Book Allocation",
    "altTitles": [
      "Allocate minimum number of pages"
    ],
    "statement": "Allocate books to students minimizing the maximum pages assigned (binary search on answer).",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 410 Split Array Largest Sum",
    "leetcodeExact": true,
    "gfg": "Allocate minimum number of pages",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "book allocation minimize maximum pages",
    "name": "Book Allocation (Minimize Maximum Pages)",
    "altTitles": [
      "Allocate Minimum Number of Pages"
    ],
    "statement": "Allocate books to students so the maximum pages assigned to any student is minimized.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Binary Search on Answer",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 410 Split Array Largest Sum (equivalent)",
    "leetcodeExact": true,
    "gfg": "GFG Allocate minimum number of pages",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "bst implementation and height",
    "name": "BST Implementation And Height",
    "altTitles": [
      "Implement BST and find its depth"
    ],
    "statement": "Implement a binary search tree and find its depth/height.",
    "difficulty": "Easy",
    "topic": "BST",
    "subtopics": [
      "Recursion",
      "Trees"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2021
    ],
    "leetcode": "LC 104 Maximum Depth of Binary Tree (related)",
    "leetcodeExact": false,
    "gfg": "Height of Binary Tree",
    "hackerrank": "Tree: Height of a Binary Tree",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-2/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "budget vs fun knapsack max fun min cost tiebreak",
    "name": "Budget vs Fun Knapsack (Max Fun, Min Cost Tiebreak)",
    "altTitles": [
      "Budget vs Fun Optimization"
    ],
    "statement": "Given N items with cost C[i] and fun F[i] and budget M, choose a subset maximizing fun; among equal-fun subsets choose minimum total cost. Return [min cost used, max fun].",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "0/1 Knapsack",
      "Tie-breaking"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "0-1 Knapsack Problem (variant)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LinkedIn (Suryakant Sahu)",
        "url": "https://www.linkedin.com/posts/suryakant-sahu-60aa37222_infosys-dsa-problemsolving-activity-7370320359264444416-JZUb"
      }
    ],
    "notes": ""
  },
  {
    "slug": "build heap from array",
    "name": "Build Heap from Array",
    "altTitles": [],
    "statement": "Construct a binary heap from an unsorted array (heapify).",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Building Heap from Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      }
    ],
    "notes": ""
  },
  {
    "slug": "build linked list bit op next pointers sum until cycle",
    "name": "Build Linked List with Bit-Op Next Pointers, Sum Until Cycle",
    "altTitles": [
      "Linked List Construction with Cycle Detection and Bit Operations"
    ],
    "statement": "Construct a linked list where next nodes are derived via bit operations, then traverse summing values and stop adding once a cycle is entered (cycle detection required).",
    "difficulty": "Hard",
    "topic": "Linked List",
    "subtopics": [
      "bit manipulation",
      "cycle detection",
      "simulation"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2026
    ],
    "leetcode": "LC 141/142 Linked List Cycle (core technique)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7517874/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "buy two chocolates",
    "name": "Buy Two Chocolates",
    "altTitles": [],
    "statement": "Buy exactly two chocolates minimizing cost while keeping non-negative leftover money.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Buy Two Chocolates (LC 2706)",
    "leetcodeNumber": 2706,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      }
    ],
    "notes": ""
  },
  {
    "slug": "candy distribute minimum candies by ratings",
    "name": "Candy (Distribute Minimum Candies by Ratings)",
    "altTitles": [
      "Ninja and Candies (Candy Distribution by Ratings)"
    ],
    "statement": "Children stand in a line with ratings; each gets at least one candy and higher-rated children get more than neighbors. Minimize total candies.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "arrays",
      "two passes"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021
    ],
    "leetcode": "LC 135 Candy",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys/interview-experience-by-ajay-singh-specialist-programmer-apr-2021-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "candy distribution",
    "name": "Candy Distribution",
    "altTitles": [
      "Candies (HackerRank)"
    ],
    "statement": "Distribute candies to children with ratings so each child gets at least one and higher-rated children get more than neighbors; minimize total.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 135 Candy",
    "leetcodeExact": true,
    "gfg": "Candy Distribution",
    "hackerrank": "Candies",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-2022/"
      }
    ],
    "notes": "Author said it was exactly the HackerRank 'Candies' problem; complexity discussion followed."
  },
  {
    "slug": "card extraction minimum score permutation 3 operations",
    "name": "Card Extraction Minimum Score (Permutation, 3 Operations)",
    "altTitles": [
      "Card Arrangement Minimum Score"
    ],
    "statement": "Cards numbered 1..n lie in a permutation. Extract cards in increasing order 1,2,...,n using: move first card to end (cost = its value), move last card to front (cost = its value), or discard front/back cards that are next-in-order for free. Minimize total score.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "arrays",
      "deque",
      "simulation"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/4773746/Infosys-OA-Question-Specialist-Programmer/"
      }
    ],
    "notes": "Constraints n <= 1e5. Example: n=5, [3,5,1,4,2] -> 15."
  },
  {
    "slug": "celsius fahrenheit",
    "name": "Celsius To Fahrenheit",
    "altTitles": [
      "Celsius to Fahrenheit Conversion"
    ],
    "statement": "Convert temperature from Celsius to Fahrenheit.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Program for Celsius To Fahrenheit conversion",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "check if divisors is prime",
    "name": "Check If Number Of Divisors Is Prime",
    "altTitles": [
      "Is divisor count prime"
    ],
    "statement": "Given n, determine whether the count of its divisors from 1 to n is a prime number.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Divisors",
      "Number Theory"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-digital-specialist-engineer-through-infytq/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "check if one string is rotation another",
    "name": "Check if One String is a Rotation of Another",
    "altTitles": [
      "String Rotation Check"
    ],
    "statement": "Determine whether s2 is a rotation of s1 (classically via substring check on s1+s1).",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Concatenation Trick"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "796. Rotate String",
    "leetcodeNumber": 796,
    "leetcodeExact": true,
    "gfg": "Check if strings are rotations of each other",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "choose m n intervals maximizing intersection length",
    "name": "Choose M of N Intervals Maximizing Intersection Length",
    "altTitles": [
      "Maximum Length of M Intersection of N Intervals",
      "Maximum Length of M-Interval Intersection"
    ],
    "statement": "Given N intervals, select exactly M of them so that the length of their common intersection is maximized; return that maximum length.",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Heap",
      "Intervals",
      "Sorting",
      "greedy",
      "intervals",
      "sorting",
      "sweep line"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1390884/infosys-online-assessment-questions-2021/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "choose set from 1 n 1 product 1 mod n",
    "name": "Choose Set from [1,N-1] with Product 1 mod N",
    "altTitles": [
      "Modular Product Set"
    ],
    "statement": "Choose a set of integers S from [1,N-1] such that the product of its elements is congruent to 1 modulo N (maximize size / output set).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Modular Arithmetic",
      "Number Theory"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "combination sum ii",
    "name": "Combination Sum II",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "dedup",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 40 Combination Sum II",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "common divisors",
    "name": "Common Divisors",
    "altTitles": [
      "Common Divisors of Two Numbers"
    ],
    "statement": "Count the common divisors of two numbers.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "GCD",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Common Divisors of Two Numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "common divisors two numbers",
    "name": "Common Divisors Of Two Numbers",
    "altTitles": [
      "Common Divisors"
    ],
    "statement": "Count the common divisors of two numbers.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "GCD",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Common Divisors of Two Numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "arrays exactly k perfectly even adjacent pairs",
    "name": "Count Arrays with Exactly K Perfectly-Even Adjacent Pairs",
    "altTitles": [
      "K-Perfectly Even Arrays"
    ],
    "statement": "Count arrays of length N with values in [1,M] where exactly K adjacent pairs (X,Y) satisfy X*Y-X-Y being even.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Combinatorics",
      "Counting",
      "Parity"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/5585661/Infosys-OA/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "distinct values every subtree",
    "name": "Count Distinct Values in Every Subtree",
    "altTitles": [
      "Corporate Skill Diversity"
    ],
    "statement": "Given an organizational tree, count distinct skill values within each subtree.",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "hash set",
      "small-to-large merging"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 1519 Number of Nodes in the Sub-Tree With the Same Label (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys/infosys-interview-experience-specialist-programmer-jul-2024-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "good edges tree",
    "name": "Count Good Edges in Tree",
    "altTitles": [
      "Good Edges in a Tree"
    ],
    "statement": "An edge of a tree is good if removing it yields two components in which all node values are distinct within each component; count the good edges.",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "HashSet"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - souraOP/Infosys-Specialist-Programmer-Questions",
        "url": "https://github.com/souraOP/Infosys-Specialist-Programmer-Questions/blob/main/goodEdgesInTree.java"
      }
    ],
    "notes": ""
  },
  {
    "slug": "grid fillings bounded row max difference",
    "name": "Count Grid Fillings with Bounded Row-Max Difference",
    "altTitles": [
      "Bob's Fuzzy Grid"
    ],
    "statement": "Fill an N x M grid with integers 1..K such that the absolute difference between the maximum elements of any two consecutive rows is at most X. Count valid grids modulo 1e9+7.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "combinatorics",
      "counting",
      "row maxima"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/4602324/Fu*k!-Infosys/"
      }
    ],
    "notes": "Reportedly no candidate passed all test cases."
  },
  {
    "slug": "nodes binary tree recursive",
    "name": "Count Nodes in Binary Tree (Recursive)",
    "altTitles": [
      "Count Nodes in Binary Tree"
    ],
    "statement": "Write a recursive function to count the nodes of a binary tree.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "Recursion"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "222. Count Complete Tree Nodes (related)",
    "leetcodeNumber": 222,
    "leetcodeExact": false,
    "gfg": "Count Non-Leaf Nodes in Tree (related)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/interview-questions/power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "occurrences digit 0 from 1 n",
    "name": "Count Occurrences of Digit 0 from 1 to N",
    "altTitles": [
      "Count Digit Zero from 1 to N"
    ],
    "statement": "Count how many times the digit '0' appears when writing all numbers from 1 to N.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "digit counting",
      "number theory"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 233 Number of Digit One (same technique)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys/infosys-interview-experience-specialist-programmer-jul-2024-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smaller numbers after self",
    "name": "Count of Smaller Numbers After Self",
    "altTitles": [
      "Count Smaller Elements After Self"
    ],
    "statement": "For each element, count how many smaller elements appear to its right.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "BIT/Fenwick",
      "Inversions",
      "Merge Sort"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 315 Count of Smaller Numbers After Self",
    "leetcodeExact": true,
    "gfg": "GFG Count smaller elements on right side",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "Inversion counting also underlies the SP/DSE 'Minimum XOR Inversions' OA question."
  },
  {
    "slug": "pairs b b x and b divisible by d",
    "name": "Count Pairs (A,B) with A^B <= X and (A+B) Divisible by D",
    "altTitles": [
      "Pairs with Power and Divisibility Constraints"
    ],
    "statement": "Count positive integer pairs (A, B) with A, B <= N such that A^B <= X and A+B is divisible by D.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Counting",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Scribd (Previous HackWithInfy Questions)",
        "url": "https://www.scribd.com/document/727074379/Previous-HackWithInfy-Questions"
      }
    ],
    "notes": "Lower-confidence source (aggregated PDF)."
  },
  {
    "slug": "pairs frequency distinct inequality",
    "name": "Count Pairs Frequency Distinct Inequality",
    "altTitles": [
      "Frequency-Distinct Pair Counting"
    ],
    "statement": "Count pairs (i,j), i<j, satisfying frequency(1..i, A[i]) + frequency(j..N, A[j]) <= floor(distinct(1..i)/2) + floor(distinct(j..N)/2).",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Combinatorics",
      "Fenwick Tree",
      "Prefix/Suffix Processing"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pairs maximizing get l r function",
    "name": "Count Pairs Maximizing get(L,R) Function",
    "altTitles": [
      "Array Range GET(l,r) Pair Count",
      "GET(l,r) maximizing index pairs"
    ],
    "statement": "GET(l,r)=0 if max of interior elements >= min(arr[l],arr[r]); else min(arr[l],arr[r])^2*(r-l). Count index pairs (l,r) achieving the maximum GET value. n up to 1e5.",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Math",
      "Monotonic Stack",
      "Range Queries",
      "Stack"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-oa-experience-for-specialist-programmer/"
      }
    ],
    "notes": "From an OA held at IIT Patna/NIT Patna/IIIT Bhagalpur. | Reported as the 'easy' question of a 4-question OA with very high constraints."
  },
  {
    "slug": "pairs under frequency and distinct constraints",
    "name": "Count Pairs Under Frequency and Distinct-Count Constraints",
    "altTitles": [
      "Frequency-Distinct Pair Counting"
    ],
    "statement": "Count pairs (i,j), i<j, where frequency(1,i,A[i])+frequency(j,N,A[j])<=L and floor(distinct(1,i)/2)+floor(distinct(j,N)/2)<=L, mod 1e9+7.",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Frequency Counting",
      "Range Queries",
      "Two Pointers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/132334"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pairs sum divisible by m",
    "name": "Count Pairs With Sum Divisible By M",
    "altTitles": [
      "Count distinct pairs with sum divisible by m"
    ],
    "statement": "Given an array of n elements and m, count all distinct pairs whose sum is divisible by m.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Math",
      "Modulo"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "LC 1497 Check If Array Pairs Are Divisible by k (related)",
    "leetcodeExact": false,
    "gfg": "Count pairs in array whose sum is divisible by K",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-interview-experience-2019-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "partitions where each segment product has x distinct factors",
    "name": "Count Partitions Where Each Segment Product Has X Distinct Factors",
    "altTitles": [
      "Array Partition with Factor Divisibility"
    ],
    "statement": "Partition array into consecutive subsegments where each subsegment's product is divisible by at least X distinct factors; count valid partitions mod 1e9+7.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Modular Arithmetic",
      "Number Theory",
      "Prefix Products"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6954222/infosys-sp-dse-online-assessment-problem-rgpf/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "partitions whose mex sequence is non decreasing",
    "name": "Count Partitions Whose MEX Sequence Is Non-Decreasing",
    "altTitles": [
      "Good Array Division"
    ],
    "statement": "Partition array into contiguous subarrays; replacing each by its MEX must give a non-decreasing sequence. Count valid partitions.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Array Partitioning",
      "MEX"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/5585661/Infosys-OA/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "prefixes forming alternating p q magical pattern",
    "name": "Count Prefixes Forming Alternating P-Q Magical Pattern",
    "altTitles": [
      "Magical Berry Pattern"
    ],
    "statement": "A string is magical if it equals P+Q+P+...+P with (K+1) copies of P and K copies of Q alternating (P or Q may be empty). Count how many prefixes of the given berry string are magical.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Combinatorics",
      "Pattern Matching",
      "Z-function"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6954222/infosys-sp-dse-online-assessment-problem-rgpf/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "primes large range",
    "name": "Count Primes In Large Range",
    "altTitles": [
      "Count primes in a huge range (up to 1e18)"
    ],
    "statement": "Count prime numbers within a given range where bounds can be up to 10^18.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Primality Testing"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Segmented Sieve",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-2019-ses-interview/"
      }
    ],
    "notes": "Candidate solved partially."
  },
  {
    "slug": "subarrays xor k",
    "name": "Count Subarrays with XOR >= K",
    "altTitles": [
      "Count Subarrays with XOR at Least K",
      "Count Subarrays with XOR at least K"
    ],
    "statement": "Count subarrays whose bitwise XOR is at least K (reported as the hard problem of an on-campus DSE OA).",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Prefix XOR",
      "Subarrays",
      "Trie",
      "prefix XOR",
      "subarrays",
      "trie"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Count pairs/subarrays with XOR constraints (Trie-based)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/7449933/infosys-off-campus-spdse-2025-2026-onlin-cam1/"
      }
    ],
    "notes": "Same megathread also reports GCD/math, graph, tree, binary-search+greedy, string brute-force and bitmask-DP+graph problems without full statements. | Same thread reports an easy-medium recursion/DFS array problem in the same set."
  },
  {
    "slug": "subsets forming exactly x connected components x prime",
    "name": "Count Subsets Forming Exactly X Connected Components (X Prime)",
    "altTitles": [
      "Eldoria Cities - Prime Connected Components",
      "Prime Connected Realms",
      "Tree Subsets Giving Prime Number of Components"
    ],
    "statement": "Given N cities connected as a tree (bridges), for every prime X count the non-empty subsets of cities whose induced graph has exactly X connected components; sum answers over all primes up to N.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "Combinatorics",
      "Connected Components",
      "DP",
      "Prime Numbers",
      "Primes",
      "Tree DP",
      "combinatorics",
      "connected components"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6954222/infosys-sp-dse-online-assessment-problem-rgpf/"
      }
    ],
    "notes": "Example given with 4 cities, parents [-1,1,1,1], answer 4."
  },
  {
    "slug": "swaps producing maximum longest path permutation graph",
    "name": "Count Swaps Producing Maximum Longest Path in Permutation Graph",
    "altTitles": [
      "Permutation Swaps (Longest Path)"
    ],
    "statement": "Permutation P defines a graph where i points to P[i]; count index pairs (i,j) whose swap yields the maximum possible longest path.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "Combinatorics",
      "Permutation Cycles"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/5585661/Infosys-OA/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "valid subarrays xor sum at least k",
    "name": "Count Valid Subarrays with XOR Sum at Least K",
    "altTitles": [
      "Count Subarrays with XOR >= K"
    ],
    "statement": "Count subarrays whose XOR sum is greater than or equal to a given integer K.",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Prefix XOR",
      "Trie"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/7449933/infosys-off-campus-spdse-2025-2026-onlin-cam1/"
      }
    ],
    "notes": "Same thread reports SP L3 papers with binary search+greedy, string brute force, and bitmask-DP+graph problems, plus a GCD math-trick problem."
  },
  {
    "slug": "decode string",
    "name": "Decode String",
    "altTitles": [],
    "statement": "Decode a string encoded as k[substring] with possible nesting.",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Recursion",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Decode String (LC 394)",
    "leetcodeNumber": 394,
    "leetcodeExact": true,
    "gfg": "Decode the string",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/decodeStringQS.java"
      }
    ],
    "notes": ""
  },
  {
    "slug": "design hashmap without built libraries",
    "name": "Design HashMap Without Built-in Libraries",
    "altTitles": [
      "Design HashMap"
    ],
    "statement": "Design a HashMap from scratch without using built-in hash libraries.",
    "difficulty": "Medium",
    "topic": "Design",
    "subtopics": [
      "Arrays",
      "Hashing"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "706. Design HashMap",
    "leetcodeNumber": 706,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "design url shortener",
    "name": "Design URL Shortener",
    "altTitles": [
      "Design a TinyURL / URL shortener"
    ],
    "statement": "Design a system to create shortened URLs from long URLs, using hash-map based encoding/decoding.",
    "difficulty": "Medium",
    "topic": "Design",
    "subtopics": [
      "HashMap",
      "Hashing",
      "System Design"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 535 Encode and Decode TinyURL",
    "leetcodeExact": true,
    "gfg": "How to design a tiny URL or URL shortener?",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "diameter tree",
    "name": "Diameter Of Tree",
    "altTitles": [
      "Diameter of a tree"
    ],
    "statement": "Find the diameter (longest path) of a tree; described as a standard problem.",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Recursion"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2021
    ],
    "leetcode": "LC 543 Diameter of Binary Tree",
    "leetcodeExact": true,
    "gfg": "Diameter of a Binary Tree",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-2/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "digit replacement subsegment queries",
    "name": "Digit Replacement Subsegment Queries",
    "altTitles": [
      "Digit replacement and longest alternating subsegment queries"
    ],
    "statement": "Given an N-digit integer and Q queries: type 1 replaces digits, type 2 asks longest subsegment where adjacent digits differ; multiply all type-2 answers.",
    "difficulty": "Hard",
    "topic": "Implementation",
    "subtopics": [
      "Queries",
      "Segment Tree",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-6/"
      }
    ],
    "notes": "Segment-tree style query problem."
  },
  {
    "slug": "distinct prefix min array after point updates",
    "name": "Distinct Count in Prefix-Min Array After Point Updates",
    "altTitles": [
      "Distinct Elements in Minimum Prefix Array"
    ],
    "statement": "For each query (X,Y): decrease A[X-1] by Y, build B where B[i]=min(B[i-1],A[i]), then report the count of distinct elements in B.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Ordered Set",
      "Prefix Minimum",
      "Queries"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/4806669/INFOSYS-ONCAMPUS-OA-Round-Questions-2024/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "divide n events into k segments minimizing occurrence cost",
    "name": "Divide N Events into K Segments Minimizing Occurrence Cost",
    "altTitles": [
      "Log File Analysis (K-Segment Min Cost)"
    ],
    "statement": "Divide N log events into K contiguous segments minimizing a cost based on repeated occurrences within segments.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "counting",
      "partition DP"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys/infosys-interview-experience-specialist-programmer-jul-2024-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "doors toggle puzzle perfect squares",
    "name": "Doors Toggle Puzzle (Perfect Squares)",
    "altTitles": [
      "Number of Open Doors"
    ],
    "statement": "N doors are toggled in N passes; count how many remain open (perfect squares).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Puzzles"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 319 Bulb Switcher",
    "leetcodeExact": true,
    "gfg": "GFG Number of open doors",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "dp grid onsite 2025",
    "name": "DP On Grid Onsite 2025",
    "altTitles": [
      "DP on Grid (45-min onsite round)"
    ],
    "statement": "One of two problems in the 45-minute pre-interview onsite coding round; described only as a DP-on-grid problem.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "2D DP",
      "Grid"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LinkedIn (Arnav Tyagi)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": "GfG SP 2025 experience confirms this onsite 2-question round is usually DP + graph."
  },
  {
    "slug": "dp string onsite 2025",
    "name": "DP On String Onsite 2025",
    "altTitles": [
      "DP on String (45-min onsite round)"
    ],
    "statement": "One of two problems in the 45-minute pre-interview onsite coding round; described only as a DP-on-string problem.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LinkedIn (Arnav Tyagi)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": "Paired with a DP-on-grid problem in the same round."
  },
  {
    "slug": "dsu path compression and rank",
    "name": "DSU with Path Compression and Rank",
    "altTitles": [
      "Disjoint Set Union"
    ],
    "statement": "Implement Disjoint Set Union with path compression and union by rank.",
    "difficulty": "Hard",
    "topic": "Union Find",
    "subtopics": [
      "Design",
      "Graphs"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "547. Number of Provinces (application)",
    "leetcodeNumber": 547,
    "leetcodeExact": true,
    "gfg": "Union-Find",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "efficient janitor",
    "name": "Efficient Janitor",
    "altTitles": [],
    "statement": "Given bag weights between 1.01 and 3.00 kg and a trip capacity of 3.00 kg, find the minimum number of trips to carry all bags (classic HackWithInfy 2019 problem).",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Backtracking",
      "Bin Packing",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019
    ],
    "leetcode": "Boats to Save People (LC 881, analogous)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "Efficient Janitor (HackerRank-hosted HWI question)",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bishwanathdas2502/efficient_janitor",
        "url": "https://github.com/bishwanathdas2502/efficient_janitor"
      }
    ],
    "notes": ""
  },
  {
    "slug": "equilibrium index",
    "name": "Equilibrium Index",
    "altTitles": [],
    "statement": "Find an index where the sum of elements on the left equals the sum on the right.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Prefix Sum"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find Pivot Index (LC 724)",
    "leetcodeNumber": 724,
    "leetcodeExact": true,
    "gfg": "Equilibrium Point",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "even odd check",
    "name": "Even/Odd Check",
    "altTitles": [
      "Check if a Number is Even"
    ],
    "statement": "Return true if a number is even, false otherwise.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Basics"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": "Trivial; included only because it is explicitly listed."
  },
  {
    "slug": "external merge sort",
    "name": "External Merge Sort",
    "altTitles": [
      "Sort a 2GB file with 1GB RAM"
    ],
    "statement": "Design an algorithm to sort a 2GB file when only 1GB of RAM is available (external sorting).",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Design",
      "Divide and Conquer",
      "External Sort"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "External Sorting",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-role-hackwithinfy-2020/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "extract and distinct numbers mixed string",
    "name": "Extract and Count Distinct Numbers in a Mixed String",
    "altTitles": [
      "Count Unique Numbers in a String"
    ],
    "statement": "Extract numeric values embedded in a mixed string and count the distinct ones.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "HashSet",
      "Parsing"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "fibonacci without temp variable",
    "name": "Fibonacci Without Temp Variable",
    "altTitles": [
      "Fibonacci Series Without Temporary Variable"
    ],
    "statement": "Print the Fibonacci series without using a temporary swap variable.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Loops",
      "Math"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-dse-interview-experience-hackwithinfy/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "duplicate elements",
    "name": "Find Duplicate Elements",
    "altTitles": [
      "Find Duplicates in an Array"
    ],
    "statement": "Identify repeated elements within an array.",
    "difficulty": "Easy",
    "topic": "HashSet",
    "subtopics": [
      "Arrays",
      "Counting"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "LC 217 Contains Duplicate / LC 442 Find All Duplicates",
    "leetcodeExact": true,
    "gfg": "GFG Find duplicates in an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "JobRise",
        "url": "https://jobrise.io/en/blog/infosys-interview-questions-freshers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum rotated sorted array",
    "name": "Find Minimum in Rotated Sorted Array",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "rotated array"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 153 Find Minimum in Rotated Sorted Array",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "missing invoices year range",
    "name": "Find Missing Invoices in Year Range",
    "altTitles": [
      "Missing Invoice Finder"
    ],
    "statement": "Given invoices between a start and end year, find the missing invoice numbers; optimized with a HashMap after brute force.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Missing Elements"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2021
    ],
    "leetcode": "268. Missing Number (similar)",
    "leetcodeNumber": 268,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-power-programmer-2021-2/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "missing members by frequency comparison",
    "name": "Find Missing Members By Frequency Comparison",
    "altTitles": [
      "Party T-shirt frequency tracking"
    ],
    "statement": "Track which people left a party across three turns by comparing T-shirt number frequencies of remaining groups using hash maps.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "Counting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "LC 389 Find the Difference (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-interview-experience-2019-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pairs difference",
    "name": "Find Pairs With Given Difference",
    "altTitles": [
      "Pairs where first + k = second"
    ],
    "statement": "Given k and a list of n numbers, find all pairs where the first number plus k equals the second number.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Arrays",
      "HashSet"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 532 K-diff Pairs in an Array",
    "leetcodeExact": true,
    "gfg": "Find a pair with the given difference",
    "hackerrank": "Pairs",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-digital-specialist-engineer-through-infytq/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "duplicate",
    "name": "Find the Duplicate Number",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Floyd cycle detection",
      "binary search"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 287 Find the Duplicate Number",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "index first occurrence string",
    "name": "Find the Index of the First Occurrence in a String",
    "altTitles": [],
    "statement": "",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "KMP",
      "substring search"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 28 Find the Index of the First Occurrence in a String",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "single person at couples party",
    "name": "Find the Single Person at Couples Party",
    "altTitles": [
      "Party of Couples"
    ],
    "statement": "Every element appears twice except one; find the element that appears once.",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "XOR"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 136 Single Number",
    "leetcodeExact": true,
    "gfg": "GFG Party of Couples",
    "hackerrank": "HackerRank Lonely Integer",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "first occurrence via binary search",
    "name": "First Occurrence via Binary Search",
    "altTitles": [
      "First Occurrence in Sorted Array"
    ],
    "statement": "Find the first occurrence of a target in a sorted array using binary search.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "34. Find First and Last Position of Element in Sorted Array",
    "leetcodeNumber": 34,
    "leetcodeExact": true,
    "gfg": "First and last occurrences of x",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": "An unspecified medium binary search question was also asked in a 2022 SP interview (Medium/@tushar_patil)."
  },
  {
    "slug": "floyd warshall",
    "name": "Floyd Warshall",
    "altTitles": [
      "Floyd-Warshall All-Pairs Shortest Paths"
    ],
    "statement": "Compute shortest distances between all pairs of vertices.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "DP",
      "Shortest Path"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Find the City With the Smallest Number of Neighbors (LC 1334)",
    "leetcodeNumber": 1334,
    "leetcodeExact": true,
    "gfg": "Floyd Warshall",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "four points form square",
    "name": "Four Points Form Square",
    "altTitles": [
      "Check if given four points form a square"
    ],
    "statement": "Given four points, determine whether they form a square.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 593 Valid Square",
    "leetcodeExact": true,
    "gfg": "Check if given four points form a square",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "four points square check",
    "name": "Four Points Square Check",
    "altTitles": [
      "Check if Four Points Form a Square"
    ],
    "statement": "Given four points, determine whether they form a square.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 593 Valid Square",
    "leetcodeExact": true,
    "gfg": "GFG Check if given four points form a square",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "fractional knapsack",
    "name": "Fractional Knapsack",
    "altTitles": [],
    "statement": "Implement the fractional knapsack greedy algorithm.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Knapsack",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Fractional Knapsack Problem",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/competitive-exam-experiences/hackwithinfy-exam-experience/"
      }
    ],
    "notes": "Author called it an expected question."
  },
  {
    "slug": "gas station",
    "name": "Gas Station",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "circular array"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 134 Gas Station",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "gas station circular tour",
    "name": "Gas Station Circular Tour",
    "altTitles": [
      "Circular Tour"
    ],
    "statement": "Find the starting petrol pump from which a truck can complete a circular tour of all pumps.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Queue"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 134 Gas Station",
    "leetcodeExact": true,
    "gfg": "Circular Tour",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-specialist-programmer-l2-interview-experience-off-campus/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "gcd math trick oa oct 2025",
    "name": "GCD Math Trick OA Oct 2025",
    "altTitles": [
      "GCD Math-Trick Problem (Oct 2025 OA)"
    ],
    "statement": "Hard math problem built around GCD with a mathematical trick; exact statement not disclosed by the reporter.",
    "difficulty": "Hard",
    "topic": "Math",
    "subtopics": [
      "GCD",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/7449933/infosys-off-campus-spdse-2025-2026-onlin-cam1/"
      }
    ],
    "notes": "Same OA also had one hard graph problem and one hard tree problem (statements not disclosed)."
  },
  {
    "slug": "gcd strings",
    "name": "GCD of Strings",
    "altTitles": [
      "Greatest Common Divisor of Strings"
    ],
    "statement": "Find the largest string that divides both input strings.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "GCD",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Greatest Common Divisor of Strings (LC 1071)",
    "leetcodeNumber": 1071,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "generate validate permutations backtracking",
    "name": "Generate/Validate Permutations (Backtracking)",
    "altTitles": [
      "Valid Permutations"
    ],
    "statement": "Interview problem requiring recursion/backtracking with index or character swapping to produce valid permutations.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Permutations",
      "Recursion"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "46. Permutations",
    "leetcodeNumber": 46,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium",
        "url": "https://medium.com/@tej_varshith/infosys-specialist-programmer-interview-experience-5e03d644cdc9"
      }
    ],
    "notes": ""
  },
  {
    "slug": "good circles d 2 as sum two squares",
    "name": "Good Circles (d^2 as Sum of Two Squares)",
    "altTitles": [
      "Good Circles"
    ],
    "statement": "Given squared diameters of circles, count circles in which a right triangle with integer base and height and hypotenuse equal to the diameter can be inscribed, i.e. d^2 = a^2 + b^2.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Pythagorean Triples"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - satyajeetramnit/Placement-2023",
        "url": "https://github.com/satyajeetramnit/Placement-2023/blob/main/Infosys/HackWithInfy/Problem%20Statement.md"
      }
    ],
    "notes": "Repo also contains an Infosys drive 31.07.2022 solution file."
  },
  {
    "slug": "graph coloring write program",
    "name": "Graph Coloring (Write Program)",
    "altTitles": [
      "Graph Coloring"
    ],
    "statement": "Write a program based on the graph coloring algorithm (asked in a Power Programmer onsite).",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "backtracking",
      "greedy coloring"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "M-Coloring Problem - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "InterviewBit",
        "url": "https://www.interviewbit.com/infosys-interview-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "graph traversal per level state updates dungeon game style",
    "name": "Graph Traversal with Per-Level State Updates (Dungeon-Game Style)",
    "altTitles": [
      "Level-State Graph DP (Dungeon Game-like)"
    ],
    "statement": "A graph/DP problem where the traversal state changes at each level and entering a node updates the state; reported as similar to Dungeon Game.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "BFS",
      "DP",
      "state-space"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2026
    ],
    "leetcode": "LC 174 Dungeon Game (similar)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7517874/"
      }
    ],
    "notes": "Candidate could not solve; determined SP vs DSE cut."
  },
  {
    "slug": "great chain probability blue red balls",
    "name": "Great Chain Probability Blue Red Balls",
    "altTitles": [
      "Great Chain Probability Calculation"
    ],
    "statement": "Compute the probability of constructing a 'great' chain of length N from blue/red balls where good chains satisfy B[i] <= R[i]+K plus extra symmetry conditions for great.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Combinatorics",
      "Probability"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "greatest common divisor strings",
    "name": "Greatest Common Divisor of Strings",
    "altTitles": [],
    "statement": "",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "GCD",
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1071 Greatest Common Divisor of Strings",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "greatest three",
    "name": "Greatest of Three",
    "altTitles": [
      "Greatest of Three Numbers"
    ],
    "statement": "Find the largest of three numbers.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Comparison"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "greatest three numbers",
    "name": "Greatest Of Three Numbers",
    "altTitles": [],
    "statement": "Find the largest of three numbers.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Greatest of three numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "handshakes that don t cross catalan dp",
    "name": "Handshakes That Don't Cross (Catalan DP)",
    "altTitles": [
      "Handshake Calculation Problem"
    ],
    "statement": "DP problem on counting/computing handshakes (reported as the hard option in a DSE face-to-face coding test).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Catalan numbers",
      "combinatorics"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 1259 Handshakes That Don't Cross (probable)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/7204748/infosys-digital-specialist-engineer-2025-qt1y/"
      }
    ],
    "notes": "Exact statement not given; description matches the classic non-crossing handshakes DP."
  },
  {
    "slug": "hash 6 unique character chunks file",
    "name": "Hash 6 Unique Character Chunks Of File",
    "altTitles": [
      "Map 6-unique-character chunks of a huge file"
    ],
    "statement": "Read a file of billions of characters and map every 6-letter chunk of unique characters to a unique value, printing the output.",
    "difficulty": "Hard",
    "topic": "Strings",
    "subtopics": [
      "Big Data",
      "Hashing",
      "Sliding Window"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-interview-experience-2019-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "hero vs villains binary search",
    "name": "Hero vs Villains (Binary Search)",
    "altTitles": [
      "Hero Defeats Villains with Limited Lives"
    ],
    "statement": "Determine outcomes when a hero with limited lives fights villains; solved with binary search per the sheet.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "hopping steps avoiding corrupted jump game variant",
    "name": "Hopping Steps Avoiding Corrupted (Jump Game Variant)",
    "altTitles": [
      "Character Hopping over Corrupted Steps"
    ],
    "statement": "Help a character hop across steps without landing on corrupted ones (jump-game / climbing-stairs style).",
    "difficulty": "Easy",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "Jump Game"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Similar to 55. Jump Game / 746. Min Cost Climbing Stairs",
    "leetcodeExact": true,
    "gfg": "Frog Jump / Geek Jump",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Harshitha S M)",
        "url": "https://medium.com/@harshitha.s.m.33/my-hackwithinfy-journey-part-1-the-qualifier-test-and-the-interview-26b5b12fdeaa"
      }
    ],
    "notes": ""
  },
  {
    "slug": "house robber max non adjacent sum",
    "name": "House Robber (Max Non-Adjacent Sum)",
    "altTitles": [
      "House Robber"
    ],
    "statement": "Maximize the sum of chosen elements with no two adjacent (stickler thief).",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 198 House Robber",
    "leetcodeExact": true,
    "gfg": "GFG Stickler Thief",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "house robber ii circular",
    "name": "House Robber II (Circular)",
    "altTitles": [
      "Circular House Robber"
    ],
    "statement": "Maximum sum of non-adjacent houses arranged in a circle (first and last are adjacent).",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "1D DP",
      "Circular Arrays"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "213. House Robber II",
    "leetcodeNumber": 213,
    "leetcodeExact": true,
    "gfg": "Stickler Thief II",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LinkedIn (Arnav Tyagi - related post by Sharad Patil)",
        "url": "https://www.linkedin.com/posts/arnav-tyagi222004_hwi-infosys-interviewexperience-activity-7369381006371381248-fdN1"
      }
    ],
    "notes": ""
  },
  {
    "slug": "hwi 2024 oa set",
    "name": "HWI 2024 OA Set",
    "altTitles": [
      "HackWithInfy 2024 OA Set (arithmetic/recursion easy, greedy medium, tree or DP hard)"
    ],
    "statement": "HackWithInfy 2024 online round (April 2024): 3 questions - easy on arithmetic + recursion, medium partially greedy, hard on tree data structure (a DP hard variant was reported in parallel slots).",
    "difficulty": "Hard",
    "topic": "Miscellaneous",
    "subtopics": [
      "DP",
      "Greedy",
      "Recursion",
      "Trees"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/competitive-exam-experiences/hackwithinfy-online-assessment-exam-experience-2024/"
      }
    ],
    "notes": "Round-level record; cutoff reported ~2 optimized solves."
  },
  {
    "slug": "identical matrices check",
    "name": "Identical Matrices Check",
    "altTitles": [
      "Check if Two Matrices are Identical",
      "Check if two given matrices are identical"
    ],
    "statement": "Check whether two matrices are element-wise identical.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Check if two matrices are identical",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "identify missing players from shirt numbers",
    "name": "Identify Missing Players from Shirt Numbers",
    "altTitles": [
      "Missing Cricket Players"
    ],
    "statement": "A cricket team loses a player each day; given the shirt numbers present, identify the missing player(s).",
    "difficulty": "Easy",
    "topic": "HashSet",
    "subtopics": [
      "Arrays",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 268 Missing Number (variant)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/hackwithinfy/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement bfs and dfs graph",
    "name": "Implement BFS and DFS on a Graph",
    "altTitles": [
      "BFS and DFS Implementation"
    ],
    "statement": "Write programs implementing breadth-first search and depth-first search on a graph.",
    "difficulty": "Easy",
    "topic": "Graphs",
    "subtopics": [
      "BFS",
      "DFS",
      "adjacency list"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "BFS of Graph / DFS of Graph - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "InterviewBit",
        "url": "https://www.interviewbit.com/infosys-interview-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement lru cache",
    "name": "Implement LRU Cache",
    "altTitles": [
      "LRU Cache"
    ],
    "statement": "Design and implement an LRU cache with given conditions, discussing queue-based and optimized HashMap+DLL approaches.",
    "difficulty": "Medium",
    "topic": "Design",
    "subtopics": [
      "Doubly Linked List",
      "HashMap"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "146. LRU Cache",
    "leetcodeNumber": 146,
    "leetcodeExact": true,
    "gfg": "LRU Cache",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeChef Discuss",
        "url": "https://discuss.codechef.com/t/infosys-hack-with-infy-power-programmer-interview-experience-2020-result-selected/75630"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement trie",
    "name": "Implement Trie",
    "altTitles": [
      "Implement Trie (Prefix Tree)"
    ],
    "statement": "Implement a Trie with insert and search operations.",
    "difficulty": "Medium",
    "topic": "Trie",
    "subtopics": [
      "Design",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 208 Implement Trie",
    "leetcodeExact": true,
    "gfg": "GFG Trie Insert and Search",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement trie insert search",
    "name": "Implement Trie (Insert/Search)",
    "altTitles": [
      "Trie Implementation"
    ],
    "statement": "Implement a Trie with insert and search operations.",
    "difficulty": "Medium",
    "topic": "Trie",
    "subtopics": [
      "Design",
      "Strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "208. Implement Trie (Prefix Tree)",
    "leetcodeNumber": 208,
    "leetcodeExact": true,
    "gfg": "Insert and Search in a Trie",
    "hackerrank": "Contacts",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "implement union path compression",
    "name": "Implement Union-Find with Path Compression",
    "altTitles": [
      "Disjoint Set Union (Union-Find)"
    ],
    "statement": "Implement Disjoint Set Union with path compression and union by rank.",
    "difficulty": "Medium",
    "topic": "Union Find",
    "subtopics": [
      "Design",
      "Graphs"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Disjoint Set (Union-Find)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "infix postfix conversion",
    "name": "Infix to Postfix Conversion",
    "altTitles": [],
    "statement": "Convert an infix expression to postfix notation using a stack.",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Expression Parsing"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Infix to Postfix",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "injected fish minimum moves",
    "name": "Injected Fish Minimum Moves",
    "altTitles": [
      "Fish eating minimum moves"
    ],
    "statement": "A fish of size x with a hunger injection can eat any smaller fish y and become size x+y. Find minimum additions/removals of fishes so exactly one injected fish remains.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Simulation",
      "Sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-specialist-programmerlateral/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "insert interval",
    "name": "Insert Interval",
    "altTitles": [],
    "statement": "Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Intervals",
      "Sorting"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 57 Insert Interval",
    "leetcodeExact": true,
    "gfg": "Insert Interval",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-specialist-programmer-l2-interview-experience-off-campus/"
      }
    ],
    "notes": "Solved live on LeetCode during interview."
  },
  {
    "slug": "insert into bst",
    "name": "Insert into a BST",
    "altTitles": [
      "Binary Search Tree Insertion"
    ],
    "statement": "Insert a value into a binary search tree maintaining BST properties.",
    "difficulty": "Easy",
    "topic": "BST",
    "subtopics": [
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 701 Insert into a Binary Search Tree",
    "leetcodeExact": true,
    "gfg": "GFG Insert a node in a BST",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "integer square root",
    "name": "Integer Square Root",
    "altTitles": [
      "Sqrt(x)"
    ],
    "statement": "Compute the integer square root of x without built-ins.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Sqrt(x) (LC 69)",
    "leetcodeNumber": 69,
    "leetcodeExact": true,
    "gfg": "Square root of a number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "integer roman",
    "name": "Integer to Roman",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "greedy",
      "strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 12 Integer to Roman",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "jan 2026 offline 2d list queries",
    "name": "Jan 2026 Offline 2D List Queries",
    "altTitles": [
      "Query Operations on 2D List (Jan 2026 offline test, Q1)"
    ],
    "statement": "Easy slot: query-based operations on a 2D list with a very long statement; tricky parsing/logic despite easy label.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "2D Arrays",
      "Queries",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Varun)",
        "url": "https://medium.com/@sbvc.varun/infosys-sp-dse-off-campus-test-experience-offline-jan-2026-8605a34b2703"
      }
    ],
    "notes": "Jan 2026 paper had 4 problems: Easy/Medium/Hard/Complex mapped to DSE ~7LPA, SP L3 ~11LPA, SP L2 ~16LPA, SP ~21LPA tiers."
  },
  {
    "slug": "jan 2026 offline graph state dp",
    "name": "Jan 2026 Offline Graph State DP",
    "altTitles": [
      "Graph + State DP Problem (Jan 2026 offline test, Q3)"
    ],
    "statement": "Hard slot: graph-based problem combined with state-based DP; sample tests passed easily but hidden tests punished weak state transitions.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "DP on Graphs",
      "State Machines"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Varun)",
        "url": "https://medium.com/@sbvc.varun/infosys-sp-dse-off-campus-test-experience-offline-jan-2026-8605a34b2703"
      }
    ],
    "notes": ""
  },
  {
    "slug": "jan 2026 offline tree range queries",
    "name": "Jan 2026 Offline Tree Range Queries",
    "altTitles": [
      "Tree with Range Queries (Jan 2026 offline test, Q4)"
    ],
    "statement": "Complex slot: tree-based problem with range queries; edge cases very hard to identify, above typical interview level.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "Range Queries",
      "Segment Tree / Euler Tour"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Varun)",
        "url": "https://medium.com/@sbvc.varun/infosys-sp-dse-off-campus-test-experience-offline-jan-2026-8605a34b2703"
      }
    ],
    "notes": ""
  },
  {
    "slug": "jan 2026 offline two pointer sliding window",
    "name": "Jan 2026 Offline Two Pointer Sliding Window",
    "altTitles": [
      "Two-Pointer / Sliding Window Problem (Jan 2026 offline test, Q2)"
    ],
    "statement": "Medium slot: standard pattern-based two-pointers + sliding window question; incorrect window updates easily cause WA/TLE.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2026
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Varun)",
        "url": "https://medium.com/@sbvc.varun/infosys-sp-dse-off-campus-test-experience-offline-jan-2026-8605a34b2703"
      }
    ],
    "notes": ""
  },
  {
    "slug": "jump game",
    "name": "Jump Game",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "DP",
      "arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 55 Jump Game",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "jump game ii minimum jumps",
    "name": "Jump Game II (Minimum Jumps)",
    "altTitles": [
      "Jump Game II"
    ],
    "statement": "Find the minimum number of jumps to reach the last index.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "BFS on ranges"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Jump Game II (LC 45)",
    "leetcodeNumber": 45,
    "leetcodeExact": true,
    "gfg": "Minimum number of jumps",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "k closest points origin",
    "name": "K Closest Points to Origin",
    "altTitles": [
      "Kth closest point to origin"
    ],
    "statement": "Given points, identify the k-th nearest (or k nearest) point(s) to the origin.",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Geometry",
      "Greedy",
      "Sorting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2025
    ],
    "leetcode": "973. K Closest Points to Origin",
    "leetcodeNumber": 973,
    "leetcodeExact": true,
    "gfg": "K closest points to origin",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-program-power-programmer-interview-experience-wave-23/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "knapsack extra constraints interview",
    "name": "Knapsack With Extra Constraints Interview",
    "altTitles": [
      "Knapsack with Additional Constraints (HWI live coding)"
    ],
    "statement": "Knapsack-based problem with additional constraints, given in a 45-minute live coding interview round.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Constraints",
      "Knapsack"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "0-1 Knapsack (variant)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Smruti)",
        "url": "https://medium.com/@smrutipratisruti/my-hackwithinfy-journey-what-my-first-technical-interview-taught-me-6f2b854477df"
      }
    ],
    "notes": "Same author took another Infosys online DSA round on Jan 27, 2026 (3 questions, statements not disclosed)."
  },
  {
    "slug": "knight remaining board probability",
    "name": "Knight Remaining on Board Probability",
    "altTitles": [
      "Probability of Knight"
    ],
    "statement": "Compute the probability that a knight stays on the chessboard after K random moves.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Grids",
      "Probability"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 688 Knight Probability in Chessboard",
    "leetcodeExact": true,
    "gfg": "GFG Probability of Knight",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "largest from array",
    "name": "Largest Number From Array",
    "altTitles": [
      "Largest Number formed from an Array"
    ],
    "statement": "Arrange array numbers to form the largest possible concatenated number.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Comparator",
      "Greedy",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 179 Largest Number",
    "leetcodeExact": true,
    "gfg": "Largest Number formed from an Array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Paytm"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "largest from digits",
    "name": "Largest Number From Digits",
    "altTitles": [
      "Form largest number from digits"
    ],
    "statement": "Arrange digits of a number to form the largest possible number.",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "Greedy",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Form the largest number from digits",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "last element after repeated removals",
    "name": "Last Element After Repeated Removals",
    "altTitles": [
      "Print the Left Element"
    ],
    "statement": "Repeatedly remove elements per the given rule and print the element left at the end.",
    "difficulty": "Easy",
    "topic": "Simulation",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Print the left element",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lazy caterer max pizza pieces",
    "name": "Lazy Caterer (Max Pizza Pieces)",
    "altTitles": [
      "The Lazy Caterer's Problem"
    ],
    "statement": "Find the maximum number of pieces a pancake/pizza can be cut into with N straight cuts.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Formula"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG The Lazy Caterer's Problem",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lazy caterer problem",
    "name": "Lazy Caterer Problem",
    "altTitles": [
      "The Lazy Caterer's Problem"
    ],
    "statement": "Maximum pieces of a pancake/pizza with n straight cuts.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Formula"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "The Lazy Caterer's Problem",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lexicographical array problem",
    "name": "Lexicographical Array Problem",
    "altTitles": [],
    "statement": "Given an array A of size N, arrange/answer queries about elements following lexicographical ordering (full statement behind portal login).",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Arrays",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksCodes",
        "url": "https://www.geekscodes.com/2025/02/infosys-hackwithinfy-2025-sample.html"
      }
    ],
    "notes": "Partial statement only; listed among HWI 2025 samples."
  },
  {
    "slug": "lexicographically smallest array after k swaps",
    "name": "Lexicographically Smallest Array After K Swaps",
    "altTitles": [
      "K-Swap Lexicographically Smallest Array"
    ],
    "statement": "With at most K adjacent (or allowed) swaps, produce the lexicographically smallest array.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Lexicographically smallest array after at-most K consecutive swaps",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lfu cache design",
    "name": "LFU Cache (Design)",
    "altTitles": [
      "LFU Cache"
    ],
    "statement": "Design and implement a Least Frequently Used cache.",
    "difficulty": "Hard",
    "topic": "Design",
    "subtopics": [
      "frequency lists",
      "hash map"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 460 LFU Cache",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/6436250/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "linear search",
    "name": "Linear Search",
    "altTitles": [],
    "statement": "Find an element in an array by scanning.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Searching"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Searching an element in an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "linear search array",
    "name": "Linear Search in Array",
    "altTitles": [
      "Linear Search"
    ],
    "statement": "Search for a target value (e.g., product ID) in a list by scanning sequentially.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Searching"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Searching an element in an array",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CCBP (NxtWave)",
        "url": "https://www.ccbp.in/blog/articles/infosys-coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "linked list cycle ii",
    "name": "Linked List Cycle II",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Linked List",
    "subtopics": [
      "Floyd cycle detection"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 142 Linked List Cycle II",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "longest arithmetic progression subsequence",
    "name": "Longest Arithmetic Progression Subsequence",
    "altTitles": [
      "Longest Arithmetic Subsequence"
    ],
    "statement": "Find the longest subsequence with a constant difference between consecutive elements.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "HashMap"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 1027 Longest Arithmetic Subsequence",
    "leetcodeExact": true,
    "gfg": "GFG Longest Arithmetic Progression",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest common subsequence k permutations",
    "name": "Longest Common Subsequence of K Permutations",
    "altTitles": [
      "Common Sequence Across K Permutations"
    ],
    "statement": "Given K permutations of 1..N, find the longest subsequence appearing in the same relative order in all K arrays. N<=1000, K<=10.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Graphs",
      "LCS",
      "Longest Path in DAG"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "1143. Longest Common Subsequence (generalization)",
    "leetcodeNumber": 1143,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/90569"
      }
    ],
    "notes": "Thread comments also report: subset product equal to 10^Z, balance binary array by prefix/suffix deletions, shortest subarray with >=K good pairs, reachable nodes within distance M."
  },
  {
    "slug": "longest fibonacci like subsequence",
    "name": "Longest Fibonacci-like Subsequence",
    "altTitles": [
      "Longest X-Series"
    ],
    "statement": "Given an array (e.g., 2,6,3,5,8,9), find the longest series where the sum of two consecutive numbers gives the next number (e.g., 2,3,5,8).",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "HashMap"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "873. Length of Longest Fibonacci Subsequence",
    "leetcodeNumber": 873,
    "leetcodeExact": true,
    "gfg": "Length of longest Fibonacci-like subsequence",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Quora",
        "url": "https://www.quora.com/What-are-the-questions-that-are-asked-in-the-technical-round-in-Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest harmonious subsequence",
    "name": "Longest Harmonious Subsequence",
    "altTitles": [
      "Harmonious Array"
    ],
    "statement": "Find the longest subsequence where max and min differ by exactly 1.",
    "difficulty": "Easy",
    "topic": "HashMap",
    "subtopics": [
      "Frequency Counting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Longest Harmonious Subsequence (LC 594)",
    "leetcodeNumber": 594,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest palindrome by concatenating strings",
    "name": "Longest Palindrome By Concatenating Strings",
    "altTitles": [
      "Longest concatenated palindrome from N strings"
    ],
    "statement": "Given N distinct strings, select and concatenate a subset (removing others) to form the longest possible palindromic string.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "Greedy",
      "HashMap",
      "Palindrome"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 2131 Longest Palindrome by Concatenating Two Letter Words (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-sp-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest strictly decreasing contiguous run",
    "name": "Longest Strictly Decreasing Contiguous Run",
    "altTitles": [
      "Longest strictly decreasing contiguous subsequence (max index difference)"
    ],
    "statement": "Find the longest strictly decreasing contiguous run in an array and report the largest index difference; O(n) two-pointer solution.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-interview-experience-2019-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "longest valid parentheses",
    "name": "Longest Valid Parentheses",
    "altTitles": [
      "Longest Valid Parentheses substring"
    ],
    "statement": "Find the length of the longest contiguous substring of balanced/valid parentheses.",
    "difficulty": "Hard",
    "topic": "Stack",
    "subtopics": [
      "DP",
      "Strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 32 Longest Valid Parentheses",
    "leetcodeExact": true,
    "gfg": "Length of the longest valid substring",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-bridge-interview-experience-for-power-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lowest common ancestor bst",
    "name": "Lowest Common Ancestor in BST",
    "altTitles": [
      "Path Between Two Nodes in BST (LCA)"
    ],
    "statement": "Find a path from one node to another in a BST; a typical LCA implementation.",
    "difficulty": "Medium",
    "topic": "BST",
    "subtopics": [
      "LCA",
      "Trees"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "235. Lowest Common Ancestor of a BST",
    "leetcodeNumber": 235,
    "leetcodeExact": true,
    "gfg": "Lowest Common Ancestor in a BST",
    "hackerrank": "Binary Search Tree : Lowest Common Ancestor",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-specialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "lucky leaf sum alice and bob tree",
    "name": "Lucky Leaf Sum (Alice and Bob on Tree)",
    "altTitles": [
      "Lucky Leaf Sum"
    ],
    "statement": "Given a tree with values and two start nodes A (Alice) and B (Bob), sum the values of leaves whose distance from Alice is strictly less than the distance from Bob.",
    "difficulty": "Medium",
    "topic": "Trees",
    "subtopics": [
      "BFS",
      "DFS"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/luckLeaf.java"
      }
    ],
    "notes": ""
  },
  {
    "slug": "magical vine pattern alternating p q segments",
    "name": "Magical Vine Pattern (Alternating P-Q Segments)",
    "altTitles": [
      "Magical Vine / Magical Pattern of Berries",
      "Magical Vine Pattern (Berry Bracelet)"
    ],
    "statement": "A vine has N glowing berries (a string/sequence of colors). Count/report which initial segments form a 'magical pattern': a sequence expressible as (2K+1) alternating parts P,Q,P,Q,...,P with (K+1) copies of P and K copies of Q, where P or Q may be empty.",
    "difficulty": "Hard",
    "topic": "Strings",
    "subtopics": [
      "DP",
      "Periodicity",
      "String Matching",
      "Z-function",
      "pattern matching",
      "string periodicity"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6954222/infosys-sp-dse-online-assessment-problem-rgpf/"
      }
    ],
    "notes": "Part of the widely shared 2025 SP/DSE OA trio (math/greedy/combinatorics/graph). | One of 3 OA problems; thread also confirms OA = 3 DSA problems on math/greedy/combinatorics/graph."
  },
  {
    "slug": "majority element n 2 occurrences",
    "name": "Majority Element (> n/2 occurrences)",
    "altTitles": [
      "Majority Element"
    ],
    "statement": "Find the element appearing more than n/2 times (Boyer-Moore voting).",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Boyer-Moore",
      "HashMap"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 169 Majority Element",
    "leetcodeExact": true,
    "gfg": "GFG Majority Element",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "matrix addition",
    "name": "Matrix Addition",
    "altTitles": [
      "Addition of Two Matrices"
    ],
    "statement": "Add two matrices element-wise.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Program for Addition of Two Matrices",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "max length subarray equal zeros and ones after k flips",
    "name": "Max Length Subarray with Equal Zeros and Ones after K Flips",
    "altTitles": [
      "Longest Subarray with Equal 0s and 1s Given K Flips"
    ],
    "statement": "Given a binary array and K allowed flips, find the maximum length subarray in which the number of zeros equals the number of ones.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "binary array",
      "prefix sums"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2026
    ],
    "leetcode": "LC 1004 Max Consecutive Ones III (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/7517874/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "max reachable cities tree blocked nodes",
    "name": "Max Reachable Cities In Tree With Blocked Nodes",
    "altTitles": [
      "Maximum cities reachable with devil-blocked cities"
    ],
    "statement": "N cities connected by N-1 bidirectional roads (a tree); M devils block certain cities. Find the maximum number of cities reachable from city 1.",
    "difficulty": "Easy",
    "topic": "DFS",
    "subtopics": [
      "BFS",
      "Graphs",
      "Trees"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-2020-interview-experience-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "max satisfied groups ball distribution",
    "name": "Max Satisfied Groups Ball Distribution",
    "altTitles": [
      "Maximum student groups satisfied with balls of different radii"
    ],
    "statement": "A student group is satisfied if each member gets balls of different radii and every student gets at least one ball; maximize the number of satisfied groups.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Counting",
      "HashMap"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-2020-interview-experience-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximal rectangle 1s",
    "name": "Maximal Rectangle of 1s",
    "altTitles": [
      "Max Rectangle in Binary Matrix"
    ],
    "statement": "Find the largest rectangle of 1s in a binary matrix.",
    "difficulty": "Hard",
    "topic": "Stack",
    "subtopics": [
      "DP",
      "Histogram"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 85 Maximal Rectangle",
    "leetcodeExact": true,
    "gfg": "GFG Max rectangle",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": "Builds on Largest Rectangle in Histogram, also in Internshala's PP 45."
  },
  {
    "slug": "maximize difference after removing n 3n elements",
    "name": "Maximize Difference After Removing N of 3N Elements",
    "altTitles": [
      "Maximize Difference After Removal"
    ],
    "statement": "Given a 0-indexed array of length 3n, remove exactly n elements; of the remaining 2n, first n form left part and last n form right part. Maximize sum(left) - sum(right).",
    "difficulty": "Medium",
    "topic": "Heap",
    "subtopics": [
      "Greedy",
      "Prefix Sums",
      "Priority Queue"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "2163. Minimum Difference in Sums After Removal of Elements (maximize variant)",
    "leetcodeNumber": 2163,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LinkedIn (Suryakant Sahu)",
        "url": "https://www.linkedin.com/posts/suryakant-sahu-60aa37222_infosys-dsa-problemsolving-activity-7370320359264444416-JZUb"
      }
    ],
    "notes": "Direct sign-flipped variant of LC 2163."
  },
  {
    "slug": "maximize product adjacent pair sums minimum swaps",
    "name": "Maximize Product of Adjacent-Pair Sums with Minimum Swaps",
    "altTitles": [
      "Maximum Product with Minimum Swaps"
    ],
    "statement": "Rearrange a 2N-element array so that (A[0]+A[1])*(A[2]+A[3])*...*(A[2N-2]+A[2N-1]) is maximized, using the minimum number of swaps.",
    "difficulty": "Hard",
    "topic": "Greedy",
    "subtopics": [
      "Cycle Decomposition",
      "Pairing",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/4806669/INFOSYS-ONCAMPUS-OA-Round-Questions-2024/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximize xor sum x 0 k",
    "name": "Maximize XOR-Sum for x in [0,K]",
    "altTitles": [
      "XOR-Sum Function"
    ],
    "statement": "Find the integer x in range [0,K] that maximizes Xor-sum(x) over the array.",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Greedy Bit Construction",
      "XOR"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2021
    ],
    "leetcode": "1829. Maximum XOR for Each Query (similar)",
    "leetcodeNumber": 1829,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum across two arrays",
    "name": "Maximum Across Two Arrays",
    "altTitles": [
      "Global maximum from two arrays"
    ],
    "statement": "Find the global maximum value across two arrays using linear search.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Searching"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-specialist-engineer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum distinct colors root path queries",
    "name": "Maximum Distinct Colors on Root Path Queries",
    "altTitles": [
      "Max Distinct Colors on Root-to-Node Path per Query"
    ],
    "statement": "For each query node, report the number of distinct colors on the path from the root to that node (tree DFS).",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Queries"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum distinct power 2 groups from array",
    "name": "Maximum Distinct Power-of-2 Groups from Array",
    "altTitles": [
      "Maximum Distinct Power-of-2 Groups"
    ],
    "statement": "Partition/group array elements to maximize the number of distinct groups whose sizes (or sums) are powers of two.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Bit Manipulation",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum equal frequency via gcd character counts",
    "name": "Maximum Equal Frequency via GCD of Character Counts",
    "altTitles": [
      "Max Equal Frequency via GCD of Char Counts"
    ],
    "statement": "Maximize equalized frequency across characters using the GCD of character counts.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Frequency Counting",
      "GCD",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum equal pieces from rearrangeable string",
    "name": "Maximum Equal Pieces from Rearrangeable String",
    "altTitles": [
      "String Pieces"
    ],
    "statement": "Given a string whose characters can be rearranged, cut it into the maximum number of equal pieces without rejoining.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Frequency Counting",
      "GCD",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum good subtree score",
    "name": "Maximum Good Subtree Score",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "bitmask",
      "digits",
      "tree DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 3575 Maximum Good Subtree Score",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "maximum index difference between trough and crest",
    "name": "Maximum Index Difference Between Trough And Crest",
    "altTitles": [
      "Max index difference between trough and crest"
    ],
    "statement": "Given an array, identify local maxima (crests) and local minima (troughs) and find the maximum difference between their indexes.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-2019-ses-interview/"
      }
    ],
    "notes": "Example: [3 6 2 8 9 5 10 1] -> 5."
  },
  {
    "slug": "maximum length pair chain",
    "name": "Maximum Length of Pair Chain",
    "altTitles": [],
    "statement": "Find the longest chain of pairs where each pair starts after the previous ends.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "DP",
      "Intervals"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Maximum Length of Pair Chain (LC 646)",
    "leetcodeNumber": 646,
    "leetcodeExact": true,
    "gfg": "Max Length Chain",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum non overlapping subarrays intervals",
    "name": "Maximum Non-Overlapping Subarrays/Intervals",
    "altTitles": [
      "Maximum Non-Overlapping Subarrays"
    ],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Intervals"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/maximumNonOverlaping.java"
      }
    ],
    "notes": "Title from filename maximumNonOverlaping.java; exact statement not published."
  },
  {
    "slug": "maximum every window size k",
    "name": "Maximum of Every Window of Size K",
    "altTitles": [
      "Sliding Window Maximum"
    ],
    "statement": "Find the maximum element in every window of size k; expected deque optimization.",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "subtopics": [
      "Deque",
      "Monotonic Queue"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "239. Sliding Window Maximum",
    "leetcodeNumber": 239,
    "leetcodeExact": true,
    "gfg": "Maximum of all subarrays of size K",
    "hackerrank": "Deque-STL",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-specialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum mat c d mat b matrix",
    "name": "Maximum of mat[c][d] - mat[a][b] in Matrix",
    "altTitles": [
      "Find Specific Pair in Matrix"
    ],
    "statement": "Find a pair of matrix elements where one appears after the other (both indices strictly greater) maximizing their difference.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "DP",
      "Matrix",
      "Prefix Maximum"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Find a specific pair in Matrix",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-interview/coding/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum sum products",
    "name": "Maximum Sum Of Products",
    "altTitles": [
      "Maximum Possible Sum of Products"
    ],
    "statement": "Pair elements of two arrays to maximize the sum of products.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Maximum possible sum of products",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum sum products two arrays",
    "name": "Maximum Sum of Products of Two Arrays",
    "altTitles": [
      "Maximum Possible Sum of Products"
    ],
    "statement": "Pair elements of two arrays to maximize the sum of products.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Maximum possible sum of products",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum sum triplet middles",
    "name": "Maximum Sum Of Triplet Middles",
    "altTitles": [
      "Maximum sum of triplet middle elements"
    ],
    "statement": "Given an array of length n (multiple of 3), form n/3 triplets (a<=b<=c) and maximize the sum of the middle elements b.",
    "difficulty": "Easy",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Sorting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "LC 1561 Maximum Number of Coins You Can Get (similar)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-2020-interview-experience-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum sum picking m items from n decreasing sequences",
    "name": "Maximum Sum Picking M Items from N Decreasing Sequences",
    "altTitles": [
      "Max Sum of M Items from N Decreasing Sequences"
    ],
    "statement": "Pick M items total from N sequences whose values decrease as you take more, maximizing the sum; solved via binary search on the threshold value.",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "subtopics": [
      "Greedy",
      "Heap"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum sum subarray size k",
    "name": "Maximum Sum Subarray of Size K",
    "altTitles": [],
    "statement": "Find the maximum sum of any contiguous subarray of size K (sliding window).",
    "difficulty": "Easy",
    "topic": "Sliding Window",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "DSE"
    ],
    "years": [],
    "leetcode": "643. Maximum Average Subarray I (similar)",
    "leetcodeNumber": 643,
    "leetcodeExact": true,
    "gfg": "Max Sum Subarray of size K",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum triplets equal numbers limit m",
    "name": "Maximum Triplets of Equal Numbers with Limit M",
    "altTitles": [
      "Maximum Same-Number Triplets"
    ],
    "statement": "From an array of size N with values bounded by M, find the maximum number of triplets that can be formed where all three numbers are the same.",
    "difficulty": "Medium",
    "topic": "HashMap",
    "subtopics": [
      "Counting",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Scribd (Previous HackWithInfy Questions)",
        "url": "https://www.scribd.com/document/727074379/Previous-HackWithInfy-Questions"
      }
    ],
    "notes": "Lower-confidence source (aggregated PDF)."
  },
  {
    "slug": "maximum triplets equal or consecutive numbers",
    "name": "Maximum Triplets of Equal or Consecutive Numbers",
    "altTitles": [
      "Triplet Formation"
    ],
    "statement": "Maximize count of disjoint triplets where each triplet is three identical numbers or three consecutive integers. N<=1e5, values<=1e4.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Counting",
      "Greedy"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "Similar to CF 1110D (Jongmah)",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/90569"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum value path layered dag penalty",
    "name": "Maximum Value Path in Layered DAG with Penalty",
    "altTitles": [
      "Max Value Path in Layered Graph with Layer Penalty"
    ],
    "statement": "Find the maximum value path through a layered graph where moving between layers incurs a penalty (DP on DAG).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "DAG",
      "Graphs"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "maximum xor sum symmetric subsequence",
    "name": "Maximum XOR Sum Of Symmetric Subsequence",
    "altTitles": [
      "Maximum XOR sum of good subsequence"
    ],
    "statement": "Find maximum XOR sum of a subsequence such that for every element A(i) chosen, A(n-i+1) is also present.",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "Greedy"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-pp-role-through-hackwithinfy-2020/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "mean",
    "name": "Mean",
    "altTitles": [
      "Mean of an Array"
    ],
    "statement": "Compute the mean of array elements.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Statistics"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Mean",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "mean array",
    "name": "Mean Of Array",
    "altTitles": [
      "Mean"
    ],
    "statement": "Compute the mean of array elements.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Mean",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "merge k sorted lists arrays",
    "name": "Merge K Sorted Lists/Arrays",
    "altTitles": [
      "Merge K Sorted Lists"
    ],
    "statement": "Merge K sorted lists or arrays into one sorted output.",
    "difficulty": "Hard",
    "topic": "Heap",
    "subtopics": [
      "Divide and Conquer",
      "Linked List"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 23 Merge k Sorted Lists",
    "leetcodeExact": true,
    "gfg": "GFG Merge K sorted arrays",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "merge overlapping intervals",
    "name": "Merge Overlapping Intervals",
    "altTitles": [
      "Merge Intervals"
    ],
    "statement": "Merge all overlapping intervals after sorting by start point.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "Greedy",
      "Intervals"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 56 Merge Intervals",
    "leetcodeExact": true,
    "gfg": "GFG Overlapping Intervals",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "merge sorted arrays without extra space",
    "name": "Merge Sorted Arrays Without Extra Space",
    "altTitles": [
      "Merge Two Sorted Arrays Without Extra Space"
    ],
    "statement": "Merge two sorted arrays in-place without extra space.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Sorting",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 88 Merge Sorted Array (related)",
    "leetcodeExact": false,
    "gfg": "Merge two sorted arrays with O(1) extra space",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "middle three numbers",
    "name": "Middle Of Three Numbers",
    "altTitles": [
      "Middle of Three"
    ],
    "statement": "Find the middle value among three numbers.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Comparison",
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Middle of Three",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "min jumps circular chairs",
    "name": "Min Jumps Circular Chairs",
    "altTitles": [
      "Circular Chair Jumping Puzzle"
    ],
    "statement": "Chairs are in a circle; from chair i you may jump A[i] units left or right. Find minimum jumps to reach chair Y from chair X.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Graphs",
      "Shortest Path"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "Similar to 1345. Jump Game IV",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "min stack getmin o 1",
    "name": "Min Stack (getMin in O(1))",
    "altTitles": [
      "Min Stack"
    ],
    "statement": "Design a stack supporting getMin() in O(1).",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Design"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "155. Min Stack",
    "leetcodeNumber": 155,
    "leetcodeExact": true,
    "gfg": "Get minimum element from stack",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize inversions after deleting subarray",
    "name": "Minimize Inversions After Deleting Subarray",
    "altTitles": [
      "Delete subarray of length at most k to minimize inversions"
    ],
    "statement": "Given a permutation of length n and k, delete one subarray of length <= k and concatenate the rest; minimize the inversion count modulo 1e9+7.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Arrays",
      "Fenwick Tree",
      "Inversions"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-oa-experience-for-specialist-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize longest path by moving one edge",
    "name": "Minimize Longest Path By Moving One Edge",
    "altTitles": [
      "Longest trip after relocating one road"
    ],
    "statement": "Given a connected graph of N cities and M roads, remove and re-add exactly one road (keeping connectivity) so the longest trip (path) is minimized.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "DFS",
      "Diameter",
      "Trees"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-sp-role/"
      }
    ],
    "notes": "Similar to minimizing tree diameter after edge relocation."
  },
  {
    "slug": "minimize max min height difference k",
    "name": "Minimize Max-Min Height Difference (+/- K)",
    "altTitles": [
      "Minimize the Heights II"
    ],
    "statement": "Add or subtract K from each tower height to minimize the difference between tallest and shortest.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Minimize the Heights II",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Adobe"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize tax by grouping employees",
    "name": "Minimize Tax By Grouping Employees",
    "altTitles": [
      "Project salaries tax grouping"
    ],
    "statement": "Divide N employees into groups where a group of size X can exclude floor(X/D) members from tax; partition optimally to minimize total reported tax (DP).",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Greedy",
      "Partitioning"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-sp-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimize wasted bag space at most k resizes",
    "name": "Minimize Wasted Bag Space with At Most K Resizes",
    "altTitles": [
      "Wasted Space"
    ],
    "statement": "Transfer items in order using a bag whose size can be changed at most K times; wasted space for an item is (bag size - item size). Items fit only if size <= current bag size. Minimize total wasted space.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "optimization",
      "partitioning"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/1536506/infosys-online-assessment-2021-wasted-space/"
      }
    ],
    "notes": "Constraints N,K <= 400. Classic interval-partition DP."
  },
  {
    "slug": "minimum adjacent value swaps sort permutation",
    "name": "Minimum Adjacent-Value Swaps to Sort Permutation",
    "altTitles": [
      "Magical Move Sorting"
    ],
    "statement": "Find minimum 'magical moves' to sort a permutation where a move swaps two elements whose values differ by exactly one. N<=1e5, answer mod 1e9+7.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Greedy",
      "Inversions",
      "Permutations"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/1726914/infosys-question-for-specialist-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum colors tree edge coloring",
    "name": "Minimum Colors for Tree Edge Coloring",
    "altTitles": [
      "Tree Edge Coloring"
    ],
    "statement": "Color the N-1 edges of a tree so that no two edges sharing a node have the same color; output the minimum number of colors (equals maximum degree).",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "Degree Counting",
      "Trees"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/edgeColoring.java"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum cost buy x books using free book offers",
    "name": "Minimum Cost to Buy X Books Using Free-Book Offers",
    "altTitles": [
      "Minimum Cost Book Purchase with Offers"
    ],
    "statement": "Buy exactly X books from cost array A while using offers (buy B[i] books, get C[i] cheapest free) to minimize total cost.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Greedy",
      "Offers Optimization",
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/4806669/INFOSYS-ONCAMPUS-OA-Round-Questions-2024/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum cost reduce array zero two operations",
    "name": "Minimum Cost to Reduce Array to Zero with Two Operations",
    "altTitles": [
      "Array Minimization"
    ],
    "statement": "Find minimum cost to reduce all array elements to zero using two allowed operations with different costs.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "SP"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Lets-Code",
        "url": "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum days using powers 2",
    "name": "Minimum Days Using Powers of 2",
    "altTitles": [],
    "statement": "Reach a target using increments that are powers of 2, minimizing the number of days; binary-search based.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Bit Manipulation",
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum deletion cost so pattern is not subsequence",
    "name": "Minimum Deletion Cost So Pattern Is Not a Subsequence",
    "altTitles": [
      "Minimum Cost to Remove Subsequence"
    ],
    "statement": "Given string S with per-character deletion costs and pattern C, delete characters with minimum total cost so C is no longer a subsequence of S.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Strings",
      "Subsequence Matching"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/100661"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum difference between any pair",
    "name": "Minimum Difference Between Any Pair",
    "altTitles": [
      "Minimum Difference Pair"
    ],
    "statement": "Find the minimum absolute difference between any two elements (sort then adjacent scan).",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [],
    "leetcode": "Minimum Absolute Difference (LC 1200)",
    "leetcodeNumber": 1200,
    "leetcodeExact": true,
    "gfg": "Minimum difference pair",
    "hackerrank": "Closest Numbers",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - prabal255/Infosys-Power-Programmer",
        "url": "https://github.com/prabal255/Infosys-Power-Programmer"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum even cost difference between pairs",
    "name": "Minimum Even-Cost Difference Between Pairs",
    "altTitles": [
      "Minimum Even-Cost Difference Between Array Pairs"
    ],
    "statement": "Minimize an even-parity cost difference across array pairs (math/parity reasoning).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Arrays",
      "Parity"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum flip swap operations make binary string alternating",
    "name": "Minimum Flip/Swap Operations to Make Binary String Alternating",
    "altTitles": [
      "Flip or Swap"
    ],
    "statement": "Given binary string S, use swaps of any two characters or flips of a single character to reach a string with no two consecutive equal characters; minimize the number of operations.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "counting",
      "strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 1864 Minimum Number of Swaps to Make the Binary String Alternating (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1977763/infosys-off-campus-sp-and-dse-oa-2022"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum gifts cubicle problem",
    "name": "Minimum Gifts Cubicle Problem",
    "altTitles": [
      "Employee cubicle gift distribution"
    ],
    "statement": "Employees leave consecutive cubicles one at a time; gifts must be given to adjacent employees on both sides until an end or empty cubicle. Minimize total gifts; solved by recursively removing the middle employee.",
    "difficulty": "Medium",
    "topic": "Recursion",
    "subtopics": [
      "Divide and Conquer",
      "Greedy",
      "Trees"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-set-0n-campus-for-specialist-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum inversions after deleting subarray length at most k",
    "name": "Minimum Inversions After Deleting Subarray of Length at Most K",
    "altTitles": [
      "Permutation Subarray Deletion"
    ],
    "statement": "Given a permutation of length n and k, delete one subarray of length at most k, concatenate the rest, and minimize the number of inversions in the result (mod 1e9+7).",
    "difficulty": "Hard",
    "topic": "Arrays",
    "subtopics": [
      "Fenwick Tree",
      "Inversions",
      "Sliding Window"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-oa-experience-for-specialist-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum items reach energy e",
    "name": "Minimum Items to Reach Energy E",
    "altTitles": [],
    "statement": "Pick the minimum number of items so accumulated energy reaches at least E (greedy).",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum jumps circular table",
    "name": "Minimum Jumps On Circular Table",
    "altTitles": [
      "Circular table minimum jumps"
    ],
    "statement": "N people sit around a circular table; person at chair i can jump A[i] chairs left or right. Find minimum jumps to get from chair X to chair Y, or -1.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Graphs",
      "Shortest Path"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 1345 Jump Game IV (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-6/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum magical moves sort swap i j when i j 1",
    "name": "Minimum Magical Moves to Sort (Swap A[i],A[j] when A[i]=A[j]+1)",
    "altTitles": [
      "Magical Move - Sort Permutation by Value-Adjacent Swaps"
    ],
    "statement": "Given a permutation, a Magical Move swaps two elements A[i], A[j] where A[i] = A[j]+1. Find the minimum number of moves to sort the array increasingly.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "DP",
      "greedy",
      "inversions"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1726914/infosys-question-for-specialist-programmer"
      }
    ],
    "notes": "Poster's DP solution TLE'd; discussion about optimization."
  },
  {
    "slug": "minimum minutes dry all walls magic machine",
    "name": "Minimum Minutes to Dry All Walls with Magic Machine",
    "altTitles": [
      "Wall Drying Machine"
    ],
    "statement": "N walls each need X[i] minutes to dry naturally; a single machine speeds drying by K per minute but cannot move mid-job. Find minimum total minutes to dry all walls. N<=1e5, K,X[i]<=1e9.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "Greedy",
      "Optimization"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/3196203/Infosys-Power-Programmer-or-Online-Assessment-Question/"
      }
    ],
    "notes": "Binary search on answer with feasibility check."
  },
  {
    "slug": "minimum operations empty array removing two distinct or one",
    "name": "Minimum Operations to Empty Array Removing Two Distinct or One",
    "altTitles": [
      "Array Emptying"
    ],
    "statement": "Each operation removes either two distinct elements or one element; find minimum operations to empty the array. Answer is max(ceil(N/2), max frequency). N<=1e5.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Frequency Counting",
      "Heap"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/105380"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum operations make gcd array multiple k",
    "name": "Minimum Operations To Make GCD Of Array A Multiple Of K",
    "altTitles": [],
    "statement": "Given an array and k, find minimum increment/decrement operations so the GCD of the array becomes a multiple of k.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "GCD",
      "Math"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Minimum operations to make GCD of array a multiple of k",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-digital-specialist-engineer-off-campus/"
      }
    ],
    "notes": "Author said the OA problem was equivalent to this GfG article."
  },
  {
    "slug": "minimum reverse operations",
    "name": "Minimum Reverse Operations",
    "altTitles": [],
    "statement": "",
    "difficulty": "Hard",
    "topic": "BFS",
    "subtopics": [
      "Ordered Set"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Minimum Reverse Operations (LC 2612)",
    "leetcodeNumber": 2612,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum score extract cards ascending order",
    "name": "Minimum Score to Extract Cards in Ascending Order",
    "altTitles": [
      "Card Extraction"
    ],
    "statement": "Given a permutation of cards 1..n, repeatedly move front card to back (cost=value), back card to front (cost=value), or discard the correct next card free; minimize total cost to extract 1..n in order (mod 1e9+7).",
    "difficulty": "Hard",
    "topic": "Greedy",
    "subtopics": [
      "Arrays",
      "Deque",
      "Simulation"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/4773746/Infosys-OA-Question-Specialist-Programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum sum matching dice values across turns",
    "name": "Minimum Sum Matching Dice Values Across Turns",
    "altTitles": [
      "Minimum Possible Sum of K Faces of N Dice in M Turns"
    ],
    "statement": "n dice are rolled for m turns and face values recorded, but dice order per turn is not guaranteed; choose values to minimize the total sum under consistent assignment.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "matching",
      "optimization",
      "sorting"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/964643/infosys-oa-find-minimum-possible-sum-of-k-faces-of-n-dice-in-m-turns"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum switches make binary string k block alternating",
    "name": "Minimum Switches to Make Binary String K-Block Alternating",
    "altTitles": [
      "K-Switching String"
    ],
    "statement": "For a binary string of length N and each divisor K of N, a K-switching string alternates blocks of K zeros and K ones; find the minimum character switches over all valid K.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "divisors",
      "enumeration",
      "prefix sums"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1866116/infosys-oa/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "minimum time dry all walls machine accelerates one wall",
    "name": "Minimum Time to Dry All Walls (Machine Accelerates One Wall)",
    "altTitles": [
      "Factory Wall Drying with Magic Machine"
    ],
    "statement": "N walls need drying times X[i]. All walls dry at 1 unit/min; a single machine placed at one wall dries it K extra units/min but cannot move while operating. Find minimum total time to dry all walls.",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "subtopics": [
      "greedy",
      "heap",
      "optimization"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/3196203/Infosys-Power-Programmer-or-Online-Assessment-Question"
      }
    ],
    "notes": "Constraints N<=1e5, K,X[i]<=1e9. Examples: [35],K=17->3; [5,2,10,7],K=3->5; [7,9,10,3,15],K=5->6."
  },
  {
    "slug": "minimum villains remove hero victory",
    "name": "Minimum Villains to Remove for Hero Victory",
    "altTitles": [
      "Heroes vs Villains"
    ],
    "statement": "Find the minimum number of villains to remove from the front so the hero wins the sequence of fights.",
    "difficulty": "Medium",
    "topic": "Simulation",
    "subtopics": [
      "Greedy",
      "Prefix Processing"
    ],
    "roles": [
      "SP"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "PrepInsta",
        "url": "https://prepinsta.com/infosys-sp-and-dse/coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "missing characters make pangram",
    "name": "Missing Characters to Make Pangram",
    "altTitles": [
      "Pangram Missing Characters"
    ],
    "statement": "Find the missing characters needed to make a string a pangram.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "HashSet"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Missing characters to make a string Pangram",
    "hackerrank": "Pangrams",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "SkillVertex",
        "url": "https://www.skillvertex.com/blog/infosys-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "missing pangram characters",
    "name": "Missing Pangram Characters",
    "altTitles": [
      "Find Missing Characters to Make a Pangram"
    ],
    "statement": "Identify which letters a-z are absent from a given string.",
    "difficulty": "Easy",
    "topic": "HashSet",
    "subtopics": [
      "Strings"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Missing characters to make a string Pangram",
    "hackerrank": "HackerRank Pangrams (variant)",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-coding-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "morse code word decoder",
    "name": "Morse Code Word Decoder",
    "altTitles": [
      "Morse code word count"
    ],
    "statement": "Given a Morse code input, determine how many words with the same number of letters it might represent.",
    "difficulty": "Medium",
    "topic": "Strings",
    "subtopics": [
      "HashMap",
      "Recursion"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "LC 804 Unique Morse Code Words (related)",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/hackwithinfy-2020-interview-experience-for-power-programmer-role/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "multi source bfs grid invasion time",
    "name": "Multi Source BFS Grid Invasion Time",
    "altTitles": [
      "Grid Invasion Propagation"
    ],
    "statement": "In an NxM grid, invading cells 'A' expand to adjacent cells each second; find minimum time for invaders to reach all enemy cells 'E'.",
    "difficulty": "Easy",
    "topic": "BFS",
    "subtopics": [
      "Grid",
      "Multi-source BFS"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "994. Rotting Oranges (analog)",
    "leetcodeNumber": 994,
    "leetcodeExact": true,
    "gfg": "Rotten Oranges",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "multiply without multiplication operator",
    "name": "Multiply Without Multiplication Operator",
    "altTitles": [
      "Multiply two numbers without using * operator"
    ],
    "statement": "Compute the product of two numbers without using the multiplication operator (addition/bit shifts/recursion).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Bit Manipulation",
      "Recursion"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Multiply two integers without using multiplication, division and bitwise operators",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-infytq-interview-experience-for-dse-2023/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "numbers divisible by both 2 and 5 range",
    "name": "Numbers Divisible by Both 2 and 5 in Range",
    "altTitles": [
      "Multiples of 2 and 5 in Range"
    ],
    "statement": "Print all numbers in a range that are multiples of both 2 and 5.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-dse-interview-experience-2021/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "partition array into two equal sum subsets",
    "name": "Partition Array into Two Equal-Sum Subsets",
    "altTitles": [
      "Partition Equal Subset Sum"
    ],
    "statement": "Determine whether the array can be partitioned into two subsets of equal sum.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Knapsack",
      "Subset Sum"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 416 Partition Equal Subset Sum",
    "leetcodeExact": true,
    "gfg": "GFG Partition Equal Subset Sum",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "partition array so each segment product has x divisors",
    "name": "Partition Array So Each Segment Product Has >=X Divisors",
    "altTitles": [
      "Array Partition with Divisor-Count Constraint",
      "Partition Array into Subsegments Divisible by At Least X Factors"
    ],
    "statement": "Given array A, count the ways to partition it into consecutive subsegments covering all elements such that the value (product) of each subsegment is divisible by at least X factors; answer modulo 1e9+7.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Divisors",
      "Modular Arithmetic",
      "Number Theory",
      "Partition DP",
      "divisor counting",
      "number theory",
      "prefix DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/6954222/infosys-sp-dse-online-assessment-problem-rgpf/"
      }
    ],
    "notes": "Example: A=[2,2], X=2 gives 2 valid partitions."
  },
  {
    "slug": "partition employees maximize mex sum",
    "name": "Partition Employees Maximize MEX Sum",
    "altTitles": [
      "Employee Teams Expert Number Maximization"
    ],
    "statement": "Partition N employees (consecutive floors) into teams to maximize the sum of each team's 'expert number' - the first absent skill value starting from 0 (MEX).",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Greedy",
      "MEX",
      "Partition DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "partition min k length sum max xor",
    "name": "Partition Min K Length Sum Of Max XOR",
    "altTitles": [
      "Partitioned Array Maximum Amazingness"
    ],
    "statement": "Partition array into subarrays each of length >= K to maximize the sum of 'beauties', where a subarray's beauty is the maximum XOR value achievable within it.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "Bit Manipulation",
      "Partition DP",
      "XOR Basis"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "party couples",
    "name": "Party Of Couples",
    "altTitles": [],
    "statement": "Find the single person at a party where everyone else is in couples (XOR).",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "XOR"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 136 Single Number",
    "leetcodeExact": true,
    "gfg": "Party of Couples",
    "hackerrank": "Lonely Integer",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "password generation",
    "name": "Password Generation",
    "altTitles": [],
    "statement": "Generate a password from given inputs following specified rules (implementation problem).",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions",
        "url": "https://github.com/MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "path between two nodes bst",
    "name": "Path Between Two Nodes In BST",
    "altTitles": [
      "Path between two nodes in a BST (via LCA)"
    ],
    "statement": "Find the path from one node to another in a BST, implemented using lowest common ancestor.",
    "difficulty": "Medium",
    "topic": "BST",
    "subtopics": [
      "LCA",
      "Trees"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 235 Lowest Common Ancestor of a BST (related)",
    "leetcodeExact": false,
    "gfg": "Lowest Common Ancestor in a BST",
    "hackerrank": "Binary Search Tree : Lowest Common Ancestor",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-speacialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "path sum variant tree",
    "name": "Path Sum Variant on Tree",
    "altTitles": [
      "Path Sum (modified)"
    ],
    "statement": "A modified version of LeetCode's Path Sum asked in the SP online assessment.",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Path Sum"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "112. Path Sum",
    "leetcodeNumber": 112,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium",
        "url": "https://medium.com/@tej_varshith/infosys-specialist-programmer-interview-experience-5e03d644cdc9"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pattern printing",
    "name": "Pattern Printing",
    "altTitles": [],
    "statement": "Print a given character/number pattern using loops in any IDE of choice.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Loops"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Programs for printing pyramid patterns",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "TCS",
      "Wipro"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-infytq-interview-experience-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "peaks and crates",
    "name": "Peaks and Crates",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions",
        "url": "https://github.com/MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions"
      }
    ],
    "notes": "Title from filename Peaks and crates(HackwithInfy).py; statement not published."
  },
  {
    "slug": "perfect",
    "name": "Perfect Number",
    "altTitles": [],
    "statement": "Check whether a number equals the sum of its proper divisors.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 507 Perfect Number",
    "leetcodeExact": true,
    "gfg": "Perfect Number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "permutation graph min k path length m",
    "name": "Permutation Graph Min K Path Length M",
    "altTitles": [
      "Permutation Graph Longest Path (min k)"
    ],
    "statement": "Edges exist between i,j when p[i] < p[j] and |i-j| <= k; find the minimum k such that the resulting directed graph contains a path of at least m nodes.",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "subtopics": [
      "DP",
      "Graphs",
      "LIS-like"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "plus one",
    "name": "Plus One",
    "altTitles": [],
    "statement": "Add one to a number represented as a digit array.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Plus One (LC 66)",
    "leetcodeNumber": 66,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "pow x n",
    "name": "Pow(x, n)",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "fast exponentiation",
      "recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 50 Pow(x, n)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "power another",
    "name": "Power Of Another Number",
    "altTitles": [
      "Check if a Number is Power of Another Number",
      "Check if a number is power of another number"
    ],
    "statement": "Check whether one number is an integer power of another.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Logarithms",
      "Number Theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Check if a number is power of another number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "primality check",
    "name": "Primality Check",
    "altTitles": [
      "Check Prime Number"
    ],
    "statement": "Write a program to check whether a number is prime.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "basics",
      "number theory"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "InterviewBit",
        "url": "https://www.interviewbit.com/infosys-interview-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "prime sums",
    "name": "Prime Sums",
    "altTitles": [],
    "statement": "Compute sums involving prime numbers (e.g. sum of primes up to N).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Primes"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "primes x y x 2 y 2 n minimizing x y",
    "name": "Primes X,Y with X^2+Y^2=N Minimizing X+Y",
    "altTitles": [
      "Sum of Squares of Two Primes"
    ],
    "statement": "Find primes X and Y with X^2+Y^2=N and minimum X+Y, or -1 if impossible. N<=1e9.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Number Theory",
      "Prime Numbers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/100661"
      }
    ],
    "notes": ""
  },
  {
    "slug": "1 n without loops",
    "name": "Print 1 To N Without Loops",
    "altTitles": [
      "Print 1 to N Without Using Loops"
    ],
    "statement": "Print numbers 1 to N using recursion instead of loops.",
    "difficulty": "Easy",
    "topic": "Recursion",
    "subtopics": [
      "Basics",
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Print 1 to n without using loops",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "alternate prime numbers",
    "name": "Print Alternate Prime Numbers",
    "altTitles": [
      "Print alternate primes up to N"
    ],
    "statement": "Given N, print every other prime number up to N, e.g. N=20 -> 2, 5, 11, 17.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation",
      "Sieve"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Print prime numbers with prime sum of digits in an array (related)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-ses-interview-via-hackwithinfy-2019/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "diamond pattern",
    "name": "Print Diamond Pattern",
    "altTitles": [
      "Diamond Pattern Printing"
    ],
    "statement": "Print a diamond star pattern for given N.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Loops",
      "Pattern Printing"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Diamond Pattern Printing",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "KnOffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "left element",
    "name": "Print The Left Element",
    "altTitles": [],
    "statement": "Repeatedly remove elements per rule and print the remaining element.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Print the left element",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "product array except self",
    "name": "Product of Array Except Self",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "prefix products"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 238 Product of Array Except Self",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "range growth updates and trim queries tree heights",
    "name": "Range Growth Updates and Trim Queries on Tree Heights",
    "altTitles": [
      "Farmer's Fertilizer - Tree Heights with Range Updates"
    ],
    "statement": "N trees have initial heights and growth rates. Over M days apply operations: fertilize a range (heights increase by growth rates) or query/trim all trees exceeding a given height. Output final sum of heights modulo 1e9+7.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "lazy propagation",
      "range updates",
      "segment tree"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/4602324/Fu*k!-Infosys/"
      }
    ],
    "notes": "Main topic is really advanced data structures (segment tree with lazy propagation)."
  },
  {
    "slug": "range towers",
    "name": "Range of Towers",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions",
        "url": "https://github.com/MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions"
      }
    ],
    "notes": "Title from filename Range_of_towers_problem(Infytq_advanced_level).py."
  },
  {
    "slug": "range update array arithmetic progression compute sum",
    "name": "Range Update Array with Arithmetic Progression, Compute Sum",
    "altTitles": [
      "Range Update with AP Series and Sum"
    ],
    "statement": "Apply range updates that add arithmetic-progression series to an array, then compute a sum (difference-array / simulation).",
    "difficulty": "Medium",
    "topic": "Simulation",
    "subtopics": [
      "Difference Array",
      "Prefix Sum"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - AbhishekGiri04/HackWithInfy",
        "url": "https://github.com/AbhishekGiri04/HackWithInfy"
      }
    ],
    "notes": ""
  },
  {
    "slug": "rat maze all paths",
    "name": "Rat in a Maze (All Paths)",
    "altTitles": [
      "Rat in a Maze"
    ],
    "statement": "Find path(s) for a rat from source to destination in a binary maze moving in allowed directions.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "DFS",
      "grid"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 62/79 related",
    "leetcodeExact": true,
    "gfg": "Rat in a Maze Problem - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys-technologies-limited/infosys-interview-experience-specialist-programmer-may-2022-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reconstruct original array from alternating transform and hash it",
    "name": "Reconstruct Original Array from Alternating Transform and Hash It",
    "altTitles": [
      "Alternating Array Reconstruction with Hash"
    ],
    "statement": "Given alternating array X produced by a described transformation, reconstruct the original array O and output hash O[1]*10^1 + O[2]*10^2 + ... + O[M]*10^M mod 1e9+7.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "math",
      "modular arithmetic",
      "reconstruction"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1980398/feedback-needed-infosys-oa-alternating-array"
      }
    ],
    "notes": "Poster TLE'd on 3/15 test cases; needs O(M)."
  },
  {
    "slug": "regular expression matching",
    "name": "Regular Expression Matching",
    "altTitles": [],
    "statement": "Implement regex matching supporting '*' (zero or more of previous char) and '.' (any single char) without built-in regex.",
    "difficulty": "Hard",
    "topic": "DP",
    "subtopics": [
      "Recursion",
      "Strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "10. Regular Expression Matching",
    "leetcodeNumber": 10,
    "leetcodeExact": true,
    "gfg": "Wildcard Pattern Matching (similar)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Google"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Akash Rajpurohit Blog",
        "url": "https://akashrajpurohit.com/blog/infosys-power-programmer-interview-experience/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "remove common characters and concatenate",
    "name": "Remove Common Characters And Concatenate",
    "altTitles": [],
    "statement": "Remove characters common to both strings and concatenate the remainders.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "HashSet"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Remove common characters and concatenate",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse",
    "name": "Reverse A Number",
    "altTitles": [],
    "statement": "Reverse the digits of a given number.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2023
    ],
    "leetcode": "LC 7 Reverse Integer",
    "leetcodeExact": true,
    "gfg": "Reverse digits of a number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-infytq-dse-interview-experience-2023/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse integer",
    "name": "Reverse Integer",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "overflow handling"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 7 Reverse Integer",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "reverse linked list k groups",
    "name": "Reverse Linked List In K Groups",
    "altTitles": [
      "Reverse a linked list in groups of size k"
    ],
    "statement": "Reverse the nodes of a linked list k at a time and return the modified list.",
    "difficulty": "Hard",
    "topic": "Linked List",
    "subtopics": [
      "Recursion"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "LC 25 Reverse Nodes in k-Group",
    "leetcodeExact": true,
    "gfg": "Reverse a Linked List in groups of given size",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-dse/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "reverse string preserving special characters",
    "name": "Reverse String Preserving Special Characters",
    "altTitles": [
      "Reverse String Without Changing Special Character Positions"
    ],
    "statement": "Reverse only the letters of a string, keeping every special character at its original position.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Reverse Only Letters (LC 917)",
    "leetcodeNumber": 917,
    "leetcodeExact": true,
    "gfg": "Reverse a string preserving space positions",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions",
        "url": "https://github.com/MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "rod cutting maximize value",
    "name": "Rod Cutting (Maximize Value)",
    "altTitles": [
      "Rod Cutting Problem"
    ],
    "statement": "Given a rod of length N and prices for each piece length, maximize total value obtainable by cutting the rod.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "unbounded knapsack"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Rod Cutting - GFG",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Naukri Code360 (Coding Ninjas)",
        "url": "https://www.naukri.com/code360/interview-experiences/infosys-technologies-limited/infosys-interview-experience-specialist-programmer-may-2022-exp-0-2-years"
      }
    ],
    "notes": ""
  },
  {
    "slug": "roman numeral conversion",
    "name": "Roman Numeral Conversion",
    "altTitles": [
      "Integer to Roman / Roman to Integer"
    ],
    "statement": "Convert between integers and Roman numerals (both directions reported).",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "HashMap",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Integer to Roman (LC 12) / Roman to Integer (LC 13)",
    "leetcodeNumber": 12,
    "leetcodeExact": true,
    "gfg": "Roman Number to Integer",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "roman integer",
    "name": "Roman to Integer",
    "altTitles": [],
    "statement": "",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "hash map"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 13 Roman to Integer",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "rotate image",
    "name": "Rotate Image",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "in-place",
      "matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 48 Rotate Image",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "rotting oranges multi source bfs",
    "name": "Rotting Oranges (Multi-source BFS)",
    "altTitles": [
      "Rotten Oranges"
    ],
    "statement": "Find minimum time for all oranges to rot given adjacency spreading per minute.",
    "difficulty": "Medium",
    "topic": "BFS",
    "subtopics": [
      "Grid",
      "Matrix",
      "Queue"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "994. Rotting Oranges",
    "leetcodeNumber": 994,
    "leetcodeExact": true,
    "gfg": "Rotten Oranges",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon",
      "Flipkart"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium",
        "url": "https://sumitraghuwanshi.medium.com/infosys-specialist-programmer-sp-interview-preparation-guide-2024-906809148f4e"
      }
    ],
    "notes": ""
  },
  {
    "slug": "rules based billing simulation",
    "name": "Rules-Based Billing Simulation",
    "altTitles": [
      "Billing/Scheduling Simulation"
    ],
    "statement": "Process a rules-based transaction/billing or scheduling system simulation.",
    "difficulty": "Medium",
    "topic": "Simulation",
    "subtopics": [
      "Implementation",
      "Parsing"
    ],
    "roles": [
      "DSE"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Educative",
        "url": "https://www.educative.io/blog/infosys-coding-interview-questions"
      }
    ],
    "notes": "Pattern/simulation-based logic reported as the second problem type in 2024-25 HWI rounds."
  },
  {
    "slug": "run length encoding string compression",
    "name": "Run Length Encoding String Compression",
    "altTitles": [
      "String compression (aaabb -> a3b2)"
    ],
    "statement": "Compress a string by replacing consecutive repeated characters with the character followed by its count, e.g. aaabb -> a3b2.",
    "difficulty": "Easy",
    "topic": "Strings",
    "subtopics": [
      "Implementation",
      "Two Pointers"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 443 String Compression",
    "leetcodeExact": true,
    "gfg": "Run Length Encoding",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-hackwithinfy-dse/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "search insert position",
    "name": "Search Insert Position",
    "altTitles": [],
    "statement": "Find the index where a target should be inserted in a sorted array.",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Search Insert Position (LC 35)",
    "leetcodeNumber": 35,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "segregate even and odd numbers",
    "name": "Segregate Even and Odd Numbers",
    "altTitles": [
      "Separate Even and Odd Numbers in Array"
    ],
    "statement": "Rearrange an array so even numbers come before odd numbers.",
    "difficulty": "Easy",
    "topic": "Arrays",
    "subtopics": [
      "Two Pointers"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "Sort Array By Parity (LC 905)",
    "leetcodeNumber": 905,
    "leetcodeExact": true,
    "gfg": "Segregate Even and Odd numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "segregate even and odd values minimum adjacent swaps",
    "name": "Segregate Even and Odd Values with Minimum Adjacent Swaps",
    "altTitles": [
      "Summer Array"
    ],
    "statement": "Rearrange array so even values are on one side and odd on the other using minimum adjacent swaps.",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Greedy",
      "Inversions",
      "Two Pointers"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "TalentBattle",
        "url": "https://talentbattle.in/company-specific-previous-year-questions/infosys-sp-dse-previous-year-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "series switch bulb toggle",
    "name": "Series Switch Bulb Toggle",
    "altTitles": [
      "Series switches and bulb after K presses"
    ],
    "statement": "N switches in series feed a bulb; a remote toggles only switches with electric connection (all previous ON). Determine if the bulb is ON after K presses; pattern relates to K = p*2^N - 1.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Bit Manipulation",
      "Pattern Finding"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-set-0n-campus-for-specialist-programmer/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "shortest path collecting all keys grid",
    "name": "Shortest Path Collecting All Keys (Grid)",
    "altTitles": [
      "Number of Shortest Unique Paths to Open Door"
    ],
    "statement": "Navigate a 2D grid from start 'X' to door 'O' collecting all keys 'K' along shortest paths; count the number of distinct shortest paths that open the door.",
    "difficulty": "Hard",
    "topic": "BFS",
    "subtopics": [
      "Bitmask",
      "Grid",
      "State-Space Search",
      "counting paths",
      "grid",
      "state-space search"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "864. Shortest Path to Get All Keys (similar)",
    "leetcodeNumber": 864,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-question/1390884/infosys-online-assessment-questions-2021/"
      }
    ],
    "notes": "Related to (but not identical to) LC 864."
  },
  {
    "slug": "shortest path disappearing edges",
    "name": "Shortest Path With Disappearing Edges",
    "altTitles": [],
    "statement": "Reach node N from node 1 in a graph where edges disappear at K given moments; find the minimal time.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "BFS",
      "Shortest Path"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-pp-role-through-hackwithinfy-2020/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "shrine gold spending maintain strength",
    "name": "Shrine Gold Spending to Maintain Strength",
    "altTitles": [
      "Shrine Gold Management"
    ],
    "statement": "Spend gold at shrines along a journey to keep strength above required thresholds; optimize spending (greedy/optimization).",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Priority Queue",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Harshitha S M)",
        "url": "https://medium.com/@harshitha.s.m.33/my-hackwithinfy-journey-part-1-the-qualifier-test-and-the-interview-26b5b12fdeaa"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sliding window median",
    "name": "Sliding Window Median",
    "altTitles": [],
    "statement": "Compute the median of every window of size k as it slides across an array.",
    "difficulty": "Hard",
    "topic": "Heap",
    "subtopics": [
      "Sliding Window",
      "Two Heaps"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "LC 480 Sliding Window Median",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "KnoffCampusJobs",
        "url": "https://knoffcampusjobs.com/infosys-crack-online-assessment-2025/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smallest binary string after removing 10 pairs",
    "name": "Smallest Binary String After Removing 10 Pairs",
    "altTitles": [
      "Binary String Reduction"
    ],
    "statement": "Given a binary string S, repeatedly pick i with S[i]=1 and S[i+1]=0 and delete one character; find the smallest (shortest, then lexicographically smallest) string obtainable.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Stack",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - souraOP/Infosys-Specialist-Programmer-Questions",
        "url": "https://github.com/souraOP/Infosys-Specialist-Programmer-Questions/blob/main/binaryString.java"
      }
    ],
    "notes": ""
  },
  {
    "slug": "smallest power 2 greater than or equal n",
    "name": "Smallest Power of 2 Greater Than or Equal to N",
    "altTitles": [
      "Smallest power of 2 greater than or equal to n (array + bit manipulation)"
    ],
    "statement": "OA problem combining arrays and bit manipulation built around finding the smallest power of 2 >= n.",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Smallest power of 2 greater than or equal to n",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sort 2gb file 1gb ram external sort",
    "name": "Sort 2GB File with 1GB RAM (External Sort)",
    "altTitles": [
      "External Sorting Question"
    ],
    "statement": "Given a PC with 1GB RAM and a 2GB file of random integers, describe/implement how to sort it.",
    "difficulty": "Hard",
    "topic": "Sorting",
    "subtopics": [
      "External Sort",
      "Merge Sort"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "External Sorting",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/hackwithinfy-power-programmer-interview-2019/"
      }
    ],
    "notes": "Algorithm-design style question."
  },
  {
    "slug": "sort character integer pairs",
    "name": "Sort Character Integer Pairs",
    "altTitles": [
      "Arrange character-integer pairs by character"
    ],
    "statement": "Given N inputs each of a character and an integer, arrange them according to the characters.",
    "difficulty": "Medium",
    "topic": "Sorting",
    "subtopics": [
      "HashMap",
      "Implementation"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-specialist-programmer-3/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sort characters string",
    "name": "Sort Characters Of String",
    "altTitles": [
      "Sort String of Characters"
    ],
    "statement": "Sort the characters of a string in alphabetical order.",
    "difficulty": "Easy",
    "topic": "Sorting",
    "subtopics": [
      "Counting Sort",
      "Strings"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Sort string of characters",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sp oa jan 2024 set",
    "name": "SP OA Jan 2024 Set",
    "altTitles": [
      "Infosys SP OA January 2024 Set (string + DP + graph)"
    ],
    "statement": "Off-campus SP OA (Jan 2024): 3 problems - one string, one DP, one graph (2 medium + 1 hard); candidate solved ~2.5.",
    "difficulty": "Hard",
    "topic": "Miscellaneous",
    "subtopics": [
      "DP",
      "Graphs",
      "Strings"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Sarthak Kumar)",
        "url": "https://medium.com/@sarthak.kumar503/infosys-interview-experience-specialist-programmer-2024-99cbcd2bdacb"
      }
    ],
    "notes": "Interview problem was 'a variant of a standard DP problem' solved in Python, all tests passed."
  },
  {
    "slug": "special city",
    "name": "Special City",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - satyamra1/HackWithInfy2025",
        "url": "https://github.com/satyamra1/HackWithInfy2025"
      }
    ],
    "notes": "Statement not published; title from filename."
  },
  {
    "slug": "spiral matrix",
    "name": "Spiral Matrix",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Simulation",
    "subtopics": [
      "matrix"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 54 Spiral Matrix",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "split array into 4 parts minimizing max min segment sum",
    "name": "Split Array into 4 Parts Minimizing Max-Min Segment Sum",
    "altTitles": [
      "Array Partition into 4 Segments"
    ],
    "statement": "Divide array into exactly 4 non-empty contiguous segments minimizing the difference between the maximum and minimum segment sums. N<=1e5.",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "subtopics": [
      "Prefix Sums",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2021
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "Similar to CF 1006C-style prefix splitting",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Codeforces",
        "url": "https://codeforces.com/blog/entry/90569"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sqrt x",
    "name": "Sqrt(x)",
    "altTitles": [],
    "statement": "",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "subtopics": [
      "math"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 69 Sqrt(x)",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "stack cylinders strictly smaller radius and height lis variant",
    "name": "Stack Cylinders with Strictly Smaller Radius and Height (LIS Variant)",
    "altTitles": [
      "Maximum Height Fence with Cylindrical Blocks"
    ],
    "statement": "Stack cylindrical blocks so each block has strictly smaller radius and height than the one below; maximize total stacked height.",
    "difficulty": "Medium",
    "topic": "DP",
    "subtopics": [
      "LIS",
      "pairs",
      "sorting"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2022
    ],
    "leetcode": "LC 354 Russian Doll Envelopes (same technique)",
    "leetcodeExact": true,
    "gfg": "Box Stacking Problem - GFG (related)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/post/1733249/infosys-power-programmer-role-onsite/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "stack o 1 getmin",
    "name": "Stack with O(1) getMin",
    "altTitles": [
      "Min Stack"
    ],
    "statement": "Design a stack supporting push, pop, and retrieving the minimum in O(1) using an auxiliary stack.",
    "difficulty": "Medium",
    "topic": "Stack",
    "subtopics": [
      "Design"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 155 Min Stack",
    "leetcodeExact": true,
    "gfg": "GFG Get minimum element from stack",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Internshala",
        "url": "https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "string permutations",
    "name": "String Permutations",
    "altTitles": [
      "Print all permutations of a string"
    ],
    "statement": "Write a program to print all permutations of a string, first with next_permutation then with custom recursion.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Recursion",
      "Strings"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2019
    ],
    "leetcode": "LC 46 Permutations (related)",
    "leetcodeExact": false,
    "gfg": "Print all permutations of a given string",
    "hackerrank": "",
    "codeforces": "",
    "companies": [
      "Amazon"
    ],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-off-campus-interview-experience-hackwithinfy/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "strong",
    "name": "Strong Number",
    "altTitles": [
      "Strong Number Check"
    ],
    "statement": "Check whether the sum of factorials of digits equals the number itself.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Digits"
    ],
    "roles": [
      "System Engineer"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Strong Numbers",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - packetprep/coding-questions",
        "url": "https://github.com/packetprep/coding-questions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "strongly connected components",
    "name": "Strongly Connected Components",
    "altTitles": [
      "Strongly Connected Components (Tarjan's algorithm)"
    ],
    "statement": "OA graph problem requiring finding strongly connected components using Tarjan's algorithm.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "DFS",
      "SCC",
      "Tarjan"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Strongly Connected Components (Tarjan's Algorithm)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-speacialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "strongly connected components tarjan s algorithm",
    "name": "Strongly Connected Components (Tarjan's Algorithm)",
    "altTitles": [
      "Strongly Connected Components"
    ],
    "statement": "Graph problem requiring computation of strongly connected components, solvable with Tarjan's algorithm.",
    "difficulty": "Hard",
    "topic": "Graphs",
    "subtopics": [
      "DFS",
      "SCC",
      "Tarjan"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2022
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Strongly Connected Components (Tarjan's Algorithm)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-hackwithinfy-interview-experience-for-speacialist-programmer-2022/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "subsets",
    "name": "Subsets",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "bitmask"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 78 Subsets",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "subsets power set",
    "name": "Subsets (Power Set)",
    "altTitles": [
      "Subsets"
    ],
    "statement": "Generate all subsets of a set.",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "subtopics": [
      "Bit Manipulation",
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Subsets (LC 78)",
    "leetcodeNumber": 78,
    "leetcodeExact": true,
    "gfg": "Power Set",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum beauty values over subtrees",
    "name": "Sum of Beauty Values over Subtrees",
    "altTitles": [
      "Tree Beauty (Perfect-Square Good Pairs)"
    ],
    "statement": "For each node of a tree, beauty is the count of good pairs in its subtree where the product a[i]*a[j] is a perfect square; output the sum of beauty over all nodes.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Number Theory",
      "Square-Free Core"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - srohan-0912/InfosysDSE-SP-Coding",
        "url": "https://github.com/srohan-0912/InfosysDSE-SP-Coding/blob/main/beautyTree.java"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum even digits",
    "name": "Sum Of Even Digits",
    "altTitles": [
      "Sum of even digits/numbers"
    ],
    "statement": "Display the sum of all even digits/numbers from a given number.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2023
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-infytq-interview-experience-for-dse-2023/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "sum palindrome",
    "name": "Sum Palindrome",
    "altTitles": [],
    "statement": "Repeatedly add a number to its reverse until a palindrome is obtained.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation",
      "Palindrome"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "Sum Palindrome",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "task scheduler frequency based",
    "name": "Task Scheduler (Frequency Based)",
    "altTitles": [
      "Task Scheduler"
    ],
    "statement": "Schedule tasks with a cooldown between identical tasks minimizing total time.",
    "difficulty": "Medium",
    "topic": "Greedy",
    "subtopics": [
      "Frequency Counting",
      "Heap"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Task Scheduler (LC 621)",
    "leetcodeNumber": 621,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Someshsw1109/Infosys-Sp-and-Dse-Prep",
        "url": "https://github.com/Someshsw1109/Infosys-Sp-and-Dse-Prep"
      }
    ],
    "notes": ""
  },
  {
    "slug": "tidy",
    "name": "Tidy Number",
    "altTitles": [],
    "statement": "Check whether digits of a number are in non-decreasing order.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Implementation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "LC 738 Monotone Increasing Digits (related)",
    "leetcodeExact": false,
    "gfg": "Tidy Number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "tidy non decreasing digits",
    "name": "Tidy Number (Non-Decreasing Digits)",
    "altTitles": [
      "Tidy Number"
    ],
    "statement": "Check whether the digits of a number are in non-decreasing order.",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Digits"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 738 Monotone Increasing Digits (related)",
    "leetcodeExact": false,
    "gfg": "GFG Tidy Number",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "topological sort",
    "name": "Topological Sort",
    "altTitles": [],
    "statement": "Order vertices of a DAG respecting edge dependencies.",
    "difficulty": "Medium",
    "topic": "Graphs",
    "subtopics": [
      "DFS",
      "Kahn's Algorithm"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Course Schedule II (LC 210)",
    "leetcodeNumber": 210,
    "leetcodeExact": true,
    "gfg": "Topological sort",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - Nadhi2/infosys",
        "url": "https://github.com/Nadhi2/infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "tree nodes array operations",
    "name": "Tree Nodes To Array Operations",
    "altTitles": [
      "Tree node array construction and operations"
    ],
    "statement": "Construct an array from given tree nodes and perform operations to find nodes satisfying given criteria (recursion).",
    "difficulty": "Easy",
    "topic": "Trees",
    "subtopics": [
      "Arrays",
      "Recursion"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/competitive-exam-experiences/hackwithinfy-exam-experience/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "tree partition into zero sum components",
    "name": "Tree Partition into Zero-Sum Components",
    "altTitles": [
      "Tree Cutting into Zero-Sum Pieces"
    ],
    "statement": "Cut a weighted tree into pieces such that each resulting piece sums to zero (maximize cuts / determine feasibility).",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "DFS",
      "Prefix Sums on Trees",
      "Tree DP"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Harshitha S M)",
        "url": "https://medium.com/@harshitha.s.m.33/my-hackwithinfy-journey-part-1-the-qualifier-test-and-the-interview-26b5b12fdeaa"
      }
    ],
    "notes": ""
  },
  {
    "slug": "tree partitioning interview 2025",
    "name": "Tree Partitioning Interview 2025",
    "altTitles": [
      "Tree Partitioning Problem (SP interview)"
    ],
    "statement": "Tree partitioning problem given as second interview question; not completed due to time.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "Partitioning",
      "Tree DP"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Medium (Dev Sharma)",
        "url": "https://medium.com/@giga_dummy/infosys-sp-role-interview-experience-2025-by-dev-sharma-210bcfa7dfef"
      }
    ],
    "notes": ""
  },
  {
    "slug": "triangle detection and area",
    "name": "Triangle Detection And Area",
    "altTitles": [],
    "statement": "Determine whether three points form a valid triangle and compute its area.",
    "difficulty": "Medium",
    "topic": "Math",
    "subtopics": [
      "Geometry"
    ],
    "roles": [
      "DSE"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "iScalePro",
        "url": "https://www.iscalepro.com/post/infosys-sp-and-dse-coding-questions/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "two rooted subtree intersection queries",
    "name": "Two Rooted Subtree Intersection Queries",
    "altTitles": [
      "Tree Beauty Queries with Dynamic Indices"
    ],
    "statement": "Given a tree considered rooted at A and at B, answer Q online queries about the intersection size ('beauty') of two subtrees, with query indices updated based on previous answers.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "Euler Tour",
      "LCA",
      "Online Queries"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "two sum ii sorted array",
    "name": "Two Sum II (Sorted Array)",
    "altTitles": [
      "Two Sum II - Input Array Is Sorted"
    ],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "Binary Search",
      "Two Pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "Two Sum II - Input Array Is Sorted (LC 167)",
    "leetcodeNumber": 167,
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - liquidslr/leetcode-company-wise-problems (Infosys)",
        "url": "https://github.com/liquidslr/leetcode-company-wise-problems/tree/main/Infosys"
      }
    ],
    "notes": ""
  },
  {
    "slug": "two sum ii input array is sorted",
    "name": "Two Sum II - Input Array Is Sorted",
    "altTitles": [],
    "statement": "",
    "difficulty": "Medium",
    "topic": "Arrays",
    "subtopics": [
      "binary search",
      "two pointers"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "LC 167 Two Sum II - Input Array Is Sorted",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "CodeJeet (mirror of LeetCode Infosys company tag)",
        "url": "https://codejeet.com/company/infosys"
      }
    ],
    "notes": "From LeetCode's crowdsourced Infosys company tag; specific role/year not stated."
  },
  {
    "slug": "union component covered ranges",
    "name": "Union Find Component Covered Ranges",
    "altTitles": [
      "Graph Connected Component Beauty (Covered Ranges)"
    ],
    "statement": "Process edge additions and queries; for each query count the minimum number of contiguous 'covered ranges' needed to represent all node labels in a connected component.",
    "difficulty": "Medium",
    "topic": "Union Find",
    "subtopics": [
      "Graphs",
      "Ordered Sets",
      "Ranges"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "Infosys official (HackWithInfy sample questions)",
        "url": "https://www.infosys.com/careers/hackwithinfy/2025/sample-questions_hwi.pdf"
      }
    ],
    "notes": ""
  },
  {
    "slug": "unnamed segment tree problem cf 1700 1800",
    "name": "Unnamed Segment Tree Problem (CF ~1700-1800)",
    "altTitles": [
      "Segment Tree OA Problem (SP 2024)"
    ],
    "statement": "OA problem requiring a segment tree; estimated Codeforces 1700-1800 difficulty (title not disclosed).",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "range queries",
      "segment tree"
    ],
    "roles": [
      "SP"
    ],
    "years": [
      2024
    ],
    "leetcode": "possibly LC 3165 Maximum Sum of Subsequence With Non-adjacent Elements",
    "leetcodeExact": true,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "LeetCode Discuss",
        "url": "https://leetcode.com/discuss/interview-experience/6436250/"
      }
    ],
    "notes": "Identity unknown; LC 3165 (segment-tree problem highly ranked in the Infosys tag) is a plausible match."
  },
  {
    "slug": "valid date check",
    "name": "Valid Date Check",
    "altTitles": [
      "Check if Date Is Valid"
    ],
    "statement": "Validate a calendar date including month lengths and leap years.",
    "difficulty": "Easy",
    "topic": "Implementation",
    "subtopics": [
      "Edge Cases",
      "Simulation",
      "Validation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2024
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "GFG Program to check if a date is valid or not",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/dsa/infosys-sde-sheet-interview-questions-and-answers/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "valid pairs tree shortest path",
    "name": "Valid Pairs On Tree Shortest Path",
    "altTitles": [
      "Tree path validation for pairs {x,y}"
    ],
    "statement": "A pair {x,y} is valid if, on the shortest path from x to y, whenever both u and v are present, v comes before u; count/validate such pairs on a tree.",
    "difficulty": "Hard",
    "topic": "Trees",
    "subtopics": [
      "Graphs",
      "LCA",
      "Paths"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/infosys-interview-experience-for-power-programmer-role-hackwithinfy-2020/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "x series series generation",
    "name": "X Series (Series Generation)",
    "altTitles": [
      "X Series"
    ],
    "statement": "Generate/evaluate a number series pattern (InfyTQ style series problem).",
    "difficulty": "Easy",
    "topic": "Math",
    "subtopics": [
      "Series",
      "Simulation"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions",
        "url": "https://github.com/MuralidharanGanapathy/InfyTQ-and-HackwithInfy-solutions"
      }
    ],
    "notes": ""
  },
  {
    "slug": "xor all pairs",
    "name": "XOR Of All Pairs",
    "altTitles": [
      "XOR of all pairwise combinations"
    ],
    "statement": "Find the XOR of all pairwise combinations formed from array A.",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "subtopics": [
      "Arrays",
      "Math"
    ],
    "roles": [
      "Power Programmer"
    ],
    "years": [
      2020
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "XOR of pairwise sum of every unordered pairs (related)",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/interview-experiences/infosys-interview-experience-for-pp-role-through-hackwithinfy-2020/"
      }
    ],
    "notes": ""
  },
  {
    "slug": "xor sum maximization",
    "name": "XOR Sum Maximization",
    "altTitles": [
      "Max XOR-Sum(x)"
    ],
    "statement": "Choose x to maximize an XOR-based sum function over the array (reported as Max XOR-Sum(x)).",
    "difficulty": "Hard",
    "topic": "Bit Manipulation",
    "subtopics": [
      "XOR"
    ],
    "roles": [
      "Unknown"
    ],
    "years": [
      2025
    ],
    "leetcode": "",
    "leetcodeExact": false,
    "gfg": "",
    "hackerrank": "",
    "codeforces": "",
    "companies": [],
    "frequency": "Rare",
    "frequencyScore": 1,
    "sourceCount": 1,
    "sources": [
      {
        "name": "GitHub - bhasidhshaik/Infosys-SP-DSE-resources",
        "url": "https://github.com/bhasidhshaik/Infosys-SP-DSE-resources"
      }
    ],
    "notes": ""
  }
];

export const INFOSYS_PLAN: InfosysPlanDay[] = [
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 1,
    "title": "Arrays & Prefix Sums",
    "tier": "DSE / L1",
    "focus": "Warm up on the most-reported array problems: traversal tricks, Kadane, rotations, in-place moves.",
    "slugs": [
      "rotate array by k steps",
      "best time buy and sell stock",
      "second largest element array",
      "merge two sorted arrays place",
      "next permutation",
      "remove duplicates from sorted array",
      "rotate matrix by 90 degrees",
      "3sum",
      "minimum changes make mountain array",
      "minimum adjacent swaps separate evens and odds"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 2,
    "title": "Two Pointers & Sliding Window",
    "tier": "DSE / L1",
    "focus": "Fixed & variable windows, at-most-K-distinct, longest-substring family. A very common OA pattern.",
    "slugs": [
      "longest substring without repeating characters",
      "sliding window maximum",
      "maximum sum subarray at most k distinct elements",
      "maximum consecutive vacation days cancel at most k obligations",
      "remove duplicates from array",
      "maximum consecutive vacation days",
      "subarray sum",
      "swap contents two arrays",
      "move zeroes end"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 3,
    "title": "Strings",
    "tier": "DSE / L1",
    "focus": "Palindromes, anagrams, first non-repeating, frequency, pattern printing - staple live-coding rounds.",
    "slugs": [
      "palindrome string check",
      "check if two strings are anagrams",
      "reverse string",
      "first non repeating character",
      "longest palindromic substring",
      "longest common prefix",
      "string rotation check",
      "string integer atoi",
      "reverse string without built ins",
      "vowels and consonants string"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 4,
    "title": "Hashing (HashMap / HashSet)",
    "tier": "DSE / L1",
    "focus": "Two-sum family, subarray-sum-equals-K, dedup, counting. Learn to trade memory for time.",
    "slugs": [
      "two sum",
      "frequency array elements",
      "isomorphic strings",
      "group anagrams",
      "repeated and non repeated elements",
      "subarray sum equals k",
      "sort characters by frequency",
      "elements appearing once vs multiple times",
      "longest consecutive sequence"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 5,
    "title": "Sorting & Binary Search",
    "tier": "DSE / L1",
    "focus": "Custom comparators, first/last occurrence, search in rotated array, basic binary search.",
    "slugs": [
      "merge intervals",
      "binary search",
      "merge sort implementation",
      "search rotated sorted array",
      "single element sorted array",
      "allocate minimum pages",
      "binary search sorted array",
      "merge sort implementation and dry run",
      "sort array"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 6,
    "title": "Math & Number Systems",
    "tier": "DSE / L1",
    "focus": "Base conversions, GCD/LCM, primes/sieve, Fibonacci, nCr mod - Infosys loves number-system problems.",
    "slugs": [
      "nth fibonacci",
      "prime check",
      "smallest base where n has all identical digits",
      "swap two numbers without temporary variable",
      "armstrong check",
      "decimal binary conversion",
      "octal binary conversion",
      "next higher palindrome",
      "largest subset 1 n 1 product 1 mod n",
      "sum primes up n"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 7,
    "title": "Recursion & Backtracking Basics",
    "tier": "L1 / L2",
    "focus": "Subsets, permutations, generate-parentheses, N-Queens. Build the recursion-tree intuition.",
    "slugs": [
      "factorial",
      "tower hanoi",
      "fibonacci series memoization",
      "combination sum",
      "generate balanced parentheses",
      "generate all subsets",
      "sum triangle from array",
      "build sum triangle whose last row is array"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 1 - Foundations & High-Frequency Patterns (Days 1-8)",
    "day": 8,
    "title": "REVIEW + Mock OA #1",
    "tier": "All",
    "focus": "Re-solve 5 problems you struggled with. Then a timed 75-min mock: 2 Easy/Medium picked at random from Days 1-7.",
    "slugs": [],
    "isMock": true
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 9,
    "title": "Linked Lists",
    "tier": "DSE / L1",
    "focus": "Reverse, cycle detection (Floyd), merge two sorted, add-two-numbers, middle node.",
    "slugs": [
      "detect cycle linked list",
      "reverse linked list",
      "merge two sorted linked lists",
      "add two numbers as linked lists",
      "linked list cycle detection floyd",
      "middle linked list",
      "search linked list",
      "middle linked list even length handling"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 10,
    "title": "Stacks & Queues",
    "tier": "L1",
    "focus": "Valid parentheses, min-stack, next-greater-element, queue via two stacks, monotonic stack.",
    "slugs": [
      "valid parentheses",
      "queue using two stacks",
      "next greater element",
      "biggest meatball queue simulation",
      "infix postfix",
      "min stack o 1 minimum",
      "stack using array",
      "balanced parentheses check"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 11,
    "title": "Greedy I - Classics",
    "tier": "L1 / L2",
    "focus": "Activity selection, job sequencing, min platforms, Efficient Janitor. Prove the greedy choice.",
    "slugs": [
      "minimum railway platforms",
      "minimum work transport wine between houses",
      "minimum cost make array zero subarray 1 cost x set zero cost y",
      "gym minimum exercises drain energy",
      "minimize decimal value binary string swap flip costs",
      "activity selection",
      "largest arrange array form biggest",
      "remove minimum villains from front so heroes win"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 12,
    "title": "Greedy II - Infosys-Flavored",
    "tier": "L2 / L3",
    "focus": "RPG monsters, shrine gold, wine transport - story-wrapped greedy problems seen in recent SP/DSE OAs.",
    "slugs": [
      "rpg game maximum monsters defeated",
      "minimize ugliness binary string",
      "arrange numbers form largest",
      "job sequencing deadlines",
      "largest concatenation",
      "array minimization game",
      "chef order scheduling profit penalties",
      "max dishes one type no two adjacent"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 13,
    "title": "Binary Search on the Answer",
    "tier": "L2 / L3",
    "focus": "Allocate minimum pages, min-days-to-X, feasibility + monotonic predicate. High-value OA pattern.",
    "slugs": [
      "minimum days make terrain strictly decreasing power 2 reductions",
      "binary search plus greedy oa 2025",
      "aggressive cows",
      "koko eating bananas",
      "maximize minimum game score",
      "median two sorted arrays",
      "hero vs villains binary search"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 14,
    "title": "Trees I - Traversal & Structure",
    "tier": "L1 / L2",
    "focus": "DFS/BFS traversals, height, level order, LCA, diameter - recursion on trees.",
    "slugs": [
      "binary tree traversals",
      "maximum depth binary tree",
      "lowest common ancestor binary tree",
      "binary tree inorder traversal",
      "binary tree level order traversal",
      "height binary tree recursive",
      "check balanced binary tree",
      "diameter binary tree"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 15,
    "title": "Trees II & BST",
    "tier": "L2",
    "focus": "BST insert/validate, kth smallest, tree DP, subtree queries.",
    "slugs": [
      "nodes at distance k tree",
      "binary tree maximum path sum",
      "nodes value one",
      "jan 2026 offline tree range queries",
      "subsets forming exactly x connected components x prime",
      "maximum distinct colors root path queries",
      "tree partition into zero sum components"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 16,
    "title": "Bit Manipulation",
    "tier": "L2 / L3",
    "focus": "XOR tricks, single-number, subset-XOR, Max-XOR-subset - Infosys signature OA topic.",
    "slugs": [
      "maximize xor choosing at most n 2 elements",
      "choose x 0 k maximizing sum x xor i",
      "missing",
      "bitwise and range l r",
      "choose b minimize inversions xor b",
      "next power two each element",
      "choose b xor all elements minimizing inversions",
      "single"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 17,
    "title": "Heaps / Priority Queue",
    "tier": "L2",
    "focus": "Kth largest, K closest points, merge K lists, running median.",
    "slugs": [
      "kth largest element array",
      "top k frequent elements",
      "building where alice and bob can meet",
      "maximum product after k increments",
      "k closest points origin",
      "maximize difference after removing n 3n elements"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 2 - Core Data Structures (Days 9-18)",
    "day": 18,
    "title": "REVIEW + Mock OA #2",
    "tier": "All",
    "focus": "Timed 90-min mock: 1 Easy + 1 Medium + 1 Medium-Hard from Days 9-17. Review every wrong submission.",
    "slugs": [],
    "isMock": true
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 19,
    "title": "Graphs I - BFS / DFS",
    "tier": "L2",
    "focus": "Adjacency modelling, connected components, rotting oranges, multi-source BFS, grid traversal.",
    "slugs": [
      "reduce n 1 min moves three ops",
      "detect cycle directed graph",
      "dijkstra shortest path",
      "islands",
      "bfs traversal graph",
      "dfs traversal graph",
      "bfs shortest path unweighted graph",
      "rotting oranges"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 20,
    "title": "Graphs II - Shortest Paths",
    "tier": "L2 / L3",
    "focus": "Dijkstra, Bellman-Ford, 0-1 BFS, shortest path collecting keys.",
    "slugs": [
      "minimum spanning tree connect cities at min cost",
      "shortest path negative edges bellman ford",
      "cycle detection directed graph",
      "dijkstra s algorithm",
      "max cities reachable from city 1 avoiding devils tree",
      "maximum funds connected component max sum"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 21,
    "title": "Graphs III - Union-Find & MST",
    "tier": "L2 / L3",
    "focus": "DSU with path compression, Kruskal MST, cycle detection, the prime-connected-components OA problem.",
    "slugs": [
      "implement union dsu",
      "lexicographically smallest equivalent string",
      "maximum segment sum after removals",
      "shortest path weighted graph dijkstra",
      "graph traversal per level state updates dungeon game style",
      "jan 2026 offline graph state dp"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 22,
    "title": "DP I - 1D",
    "tier": "L1 / L2",
    "focus": "Climbing stairs / hopping, house robber I & II, jump game, coin change.",
    "slugs": [
      "maximum subarray sum kadane",
      "longest common subsequence",
      "ideal arrays each element divides next",
      "coin change minimum coins",
      "subset sum problem",
      "longest increasing subsequence",
      "house robber",
      "partition equal subset sum"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 23,
    "title": "DP II - Grid / 2D",
    "tier": "L2",
    "focus": "Unique paths (+ obstacles), min path sum, matrix DP. Master the (i,j) state.",
    "slugs": [
      "arrays divisibility condition",
      "word break",
      "unique paths obstacles",
      "longest palindromic subsequence",
      "minimum cost path grid",
      "unique paths grid"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 24,
    "title": "DP III - Strings",
    "tier": "L2 / L3",
    "focus": "LCS, LIS, longest palindromic subsequence, edit distance, wildcard matching.",
    "slugs": [
      "0 1 knapsack",
      "longest non decreasing subsequence xor m",
      "gift box packing k consecutive boxes max distinct value",
      "edit distance",
      "lis bitwise and or condition",
      "longest common substring",
      "split array into k segments maximizing sum distinct counts"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 25,
    "title": "DP IV - Knapsack Family",
    "tier": "L2 / L3",
    "focus": "0/1 knapsack, subset-sum, partition, budget-vs-fun. The most-tested hard-DP theme.",
    "slugs": [
      "travelling salesman problem",
      "wildcard pattern matching",
      "bitmask dp graph oa 2025",
      "subsets xor equal k",
      "lis difference constraint d",
      "distinct subset sums",
      "knight probability chessboard"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 3 - Graphs & Dynamic Programming (Days 19-26)",
    "day": 26,
    "title": "REVIEW + Mock OA #3",
    "tier": "All",
    "focus": "Full 3-question, 3-hour mock in the real OA format (2 Medium + 1 Hard). This simulates HackWithInfy / SP OA.",
    "slugs": [],
    "isMock": true
  },
  {
    "phase": "Phase 4 - Advanced & Infosys-Specific (Days 27-30)",
    "day": 27,
    "title": "Advanced DP",
    "tier": "L3",
    "focus": "Bitmask DP, LIS-with-conditions, XOR-constrained subsequences, partition DP - what separates L3 from L1/L2.",
    "slugs": [
      "lis bitwise constraints between adjacent elements",
      "matrix chain multiplication",
      "maximum subarray sum at most k swaps",
      "minimum deletions make palindrome",
      "minimum insertions make palindrome",
      "partition k segments min occurrence spread cost",
      "permutations base y divisible by k"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 4 - Advanced & Infosys-Specific (Days 27-30)",
    "day": 28,
    "title": "Infosys Signature Problems",
    "tier": "L2 / L3",
    "focus": "Drill the exact recurring OA problems: Magical Vine, Max-XOR-subset, min-base-identical-digits, ideal arrays, gift-box packing, terrain, vacation days.",
    "slugs": [
      "magical vine pattern alternating p q segments",
      "maximize xor choosing at most n 2 elements",
      "smallest base where n has all identical digits",
      "ideal arrays each element divides next",
      "gift box packing k consecutive boxes max distinct value",
      "minimum days make terrain strictly decreasing power 2 reductions",
      "maximum consecutive vacation days cancel at most k obligations",
      "rpg game maximum monsters defeated",
      "minimum work transport wine between houses",
      "minimum subset lcm equal array lcm",
      "subsets forming exactly x connected components x prime",
      "minimum cost make array zero subarray 1 cost x set zero cost y"
    ],
    "isMock": false
  },
  {
    "phase": "Phase 4 - Advanced & Infosys-Specific (Days 27-30)",
    "day": 29,
    "title": "Full Mock OA + Interview Drill",
    "tier": "All",
    "focus": "Morning: final 3-question mock. Afternoon: explain each solution aloud with time/space complexity (this is the SP technical-interview format).",
    "slugs": [],
    "isMock": true
  },
  {
    "phase": "Phase 4 - Advanced & Infosys-Specific (Days 27-30)",
    "day": 30,
    "title": "Final Revision",
    "tier": "All",
    "focus": "Re-solve every problem you bookmarked or failed. Skim your notes / quick-reference sheet. Rest before the test.",
    "slugs": [],
    "isMock": false
  }
];
