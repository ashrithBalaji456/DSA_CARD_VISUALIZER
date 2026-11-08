# DSA Atlas – Interactive DSA Problem Library & Visualizer

A polished, developer-oriented personal DSA problem library and visualizer built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Features

- **20 Curated Categories:** Arrays, Strings, Hashing, Two Pointers, Sliding Window, Binary Search, Sorting, Linked Lists, Stacks, Queues, Trees, Binary Search Trees, Graphs, Dynamic Programming, Greedy, Backtracking, Heaps / Priority Queues, Tries, Bit Manipulation, and Math.
- **Glassmorphism Dark UI:** Styled with a `#080B14` dark palette, translucent cards, subtle ambient glows, backdrop blur, and animated accents.
- **Color-Coded Difficulty Badges:**
  - 🟢 **Easy:** Emerald badge with animated pulse dot
  - 🟡 **Medium:** Amber badge with animated pulse dot
  - 🔴 **Hard:** Red/Rose badge with animated pulse dot
- **Interactive Problem Cards:**
  - LeetCode problem number and title
  - Category tags
  - Solved/Unsolved toggle with celebratory particle confetti
  - Bookmark toggle for revision
  - Direct LeetCode external navigation (`target="_blank"` with `rel="noopener noreferrer"`)
  - "Explore Problem" detailed inspection view
- **Detailed Problem View (Modal):**
  - **Problem Statement:** Formatted description, input/output requirements, constraints.
  - **Problem-Solving Flow Simulator:** Step-by-step visual execution flow with auto-play, step navigation, memory/variable state snapshots, and connecting pipeline roadmap.
  - **3–4 Examples per Problem:** Clear separation between official LeetCode examples and illustrative edge cases.
  - **Complexity Analysis:** Runtime ($O(n)$) and Memory ($O(1)$) breakdowns with explanations.
  - **Learning Notes:** Key observations, algorithmic patterns, optimal approaches, common pitfalls, and related problems.
- **Multi-Faceted Search & Filtering:**
  - Search by problem title, number (#1, #217), topic, or pattern
  - Filter by Difficulty: All, Easy, Medium, Hard
  - Filter by Status: All, Solved, Unsolved, Bookmarked
  - Filter by any of the 20 categories
  - Sort by Problem Number, Difficulty, or Title
- **Mastery Dashboard:**
  - Real-time circular completion gauge and difficulty breakdown
  - Category-by-category progress meters
  - Progress export and import (JSON backup)
  - Reset progress option
- **Zero API Keys & Zero Backend:** Completely client-side using `LocalStorage` for state persistence.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 📋 How to Add New Problem Cards

All problem data is stored in [`src/data/problems.ts`](src/data/problems.ts). To add a new problem, simply add a new object to the `PROBLEMS` array:

```typescript
{
  id: 'unique-slug',
  number: 123,
  title: 'Problem Title',
  slug: 'problem-title',
  difficulty: 'Easy', // 'Easy' | 'Medium' | 'Hard'
  categories: ['Arrays', 'Two Pointers'], // Choose from the 20 categories
  description: 'Detailed description...',
  inputFormat: 'nums = [int], target = int',
  outputFormat: '[int]',
  constraints: [
    '1 <= nums.length <= 10^5',
  ],
  examples: [
    {
      exampleNumber: 1,
      input: 'nums = [1, 2, 3]',
      output: '[3, 2, 1]',
      explanation: 'Detailed walkthrough...',
      type: 'official', // 'official' | 'illustrative'
    },
  ],
  approach: 'High-level algorithmic strategy...',
  flowSteps: [
    {
      step: 1,
      title: 'Initialize pointers',
      description: 'Place left at 0 and right at n - 1',
      stateSnapshot: 'left = 0, right = 5',
      highlight: 'Pointer setup',
    },
  ],
  timeComplexity: 'O(n)',
  timeComplexityExplanation: 'Single linear pass.',
  spaceComplexity: 'O(1)',
  spaceComplexityExplanation: 'Constant extra variables.',
  keyObservations: [
    'Key insight 1...',
  ],
  importantPattern: 'Two Pointers (Opposite ends)',
  commonMistakes: [
    'Off-by-one errors...',
  ],
  optimalApproach: 'Two Pointers',
  relatedProblems: [
    { number: 1, title: 'Two Sum', difficulty: 'Easy' },
  ],
  leetcodeUrl: 'https://leetcode.com/problems/problem-title/',
}
```

---

## 📂 Project Architecture

```
DSA_CARD_VISUALIZER/
├── src/
│   ├── components/
│   │   ├── CategoryCard.tsx       # Individual category progress card
│   │   ├── CategoryGrid.tsx       # 20-category responsive grid
│   │   ├── CategoryIcon.tsx       # Dynamic Lucide icon resolver
│   │   ├── ComplexityCard.tsx     # Time & Space complexity metrics
│   │   ├── DifficultyBadge.tsx    # Easy / Medium / Hard glowing badge
│   │   ├── ExampleCard.tsx        # Official vs illustrative example card
│   │   ├── FilterPanel.tsx        # Combined category, status & sort filter
│   │   ├── FlowVisualization.tsx  # Step-by-step visual execution simulator
│   │   ├── Header.tsx             # Sticky navbar with counters & search
│   │   ├── Hero.tsx               # Headline, quick search & overview stats
│   │   ├── ProblemCard.tsx        # Glassmorphism problem card
│   │   ├── ProblemDetail.tsx      # Comprehensive problem modal
│   │   ├── ProblemGrid.tsx        # Responsive problem card grid & empty states
│   │   └── ProgressDashboard.tsx  # Overall & difficulty progress dashboard
│   ├── data/
│   │   ├── categories.ts          # 20 categories definition & colors
│   │   └── problems.ts            # Problem library items & sample problems
│   ├── hooks/
│   │   ├── useBookmarks.ts        # Bookmark management & local storage
│   │   └── useProgress.ts         # Solved tracking, stats & local storage
│   ├── types/
│   │   └── problem.ts             # TypeScript interfaces for problems & categories
│   ├── utils/
│   │   ├── confetti.ts            # Celebration confetti trigger
│   │   ├── filters.ts             # Search, category, difficulty & sort logic
│   │   └── storage.ts             # LocalStorage persistence & import/export
│   ├── App.tsx                    # Main app container & routing
│   ├── main.tsx                   # React root entry
│   └── index.css                  # Tailwind styles & glassmorphism utilities
├── index.html                     # HTML5 shell & fonts
├── package.json                   # Dependencies & scripts
└── vite.config.ts                 # Vite bundler config with Tailwind v4
```
