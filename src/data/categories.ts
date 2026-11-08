import type { CategoryInfo } from '../types/problem';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    description: 'Contiguous memory sequences, in-place modifications, sub-arrays and prefix sums.',
    iconName: 'LayoutGrid',
    color: '#38bdf8', // sky
  },
  {
    id: 'strings',
    name: 'Strings',
    description: 'Character manipulation, palindromes, anagrams, parsing and pattern matching.',
    iconName: 'Type',
    color: '#a855f7', // purple
  },
  {
    id: 'hashing',
    name: 'Hashing',
    description: 'Constant time lookups using HashMaps, HashSets, frequency maps and rolling hash.',
    iconName: 'Hash',
    color: '#ec4899', // pink
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Opposite-end and fast-slow pointers to optimize search spaces and in-place sorting.',
    iconName: 'ArrowLeftRight',
    color: '#06b6d4', // cyan
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Sub-array and substring optimization with expanding and shrinking boundaries.',
    iconName: 'Maximize2',
    color: '#10b981', // emerald
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Logarithmic search over sorted arrays, monotonic answer spaces and rotated arrays.',
    iconName: 'Search',
    color: '#6366f1', // indigo
  },
  {
    id: 'sorting',
    name: 'Sorting',
    description: 'Comparison and non-comparison sorting algorithms, custom comparator logic.',
    iconName: 'ArrowDownUp',
    color: '#f59e0b', // amber
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    description: 'Singly, doubly and circular linked lists, reversals, cycle detection and merges.',
    iconName: 'Link2',
    color: '#14b8a6', // teal
  },
  {
    id: 'stacks',
    name: 'Stacks',
    description: 'LIFO structures, monotonic stacks, parenthesis matching and expression evaluation.',
    iconName: 'Layers',
    color: '#f97316', // orange
  },
  {
    id: 'queues',
    name: 'Queues',
    description: 'FIFO queues, deques, monotonic deques and circular buffers for BFS flows.',
    iconName: 'ListOrdered',
    color: '#84cc16', // lime
  },
  {
    id: 'trees',
    name: 'Trees',
    description: 'Binary trees, traversals (pre/in/post/level), LCA, path sums, tree serialization.',
    iconName: 'GitBranch',
    color: '#22c55e', // green
  },
  {
    id: 'binary-search-trees',
    name: 'Binary Search Trees',
    description: 'Ordered tree structures, validating BST properties, range queries and balancing.',
    iconName: 'GitFork',
    color: '#10b981', // emerald
  },
  {
    id: 'graphs',
    name: 'Graphs',
    description: 'Adjacency lists, BFS, DFS, Dijkstra, topological sort, Disjoint Set Union (DSU).',
    iconName: 'Network',
    color: '#3b82f6', // blue
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Overlapping subproblems, memoization, bottom-up tabulation and state optimization.',
    iconName: 'Boxes',
    color: '#8b5cf6', // violet
  },
  {
    id: 'greedy',
    name: 'Greedy',
    description: 'Locally optimal choices, interval scheduling, Huffman coding and jump games.',
    iconName: 'Zap',
    color: '#eab308', // yellow
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    description: 'Exhaustive combinatorial search, N-Queens, permutations, subsets and pruning.',
    iconName: 'RotateCcw',
    color: '#f43f5e', // rose
  },
  {
    id: 'heaps',
    name: 'Heaps / Priority Queues',
    description: 'Min/max heaps, top-K elements, median in a data stream, task schedulers.',
    iconName: 'Crown',
    color: '#d946ef', // fuchsia
  },
  {
    id: 'tries',
    name: 'Tries',
    description: 'Prefix trees for efficient string search, auto-completion, and XOR-based bit tries.',
    iconName: 'FolderTree',
    color: '#0284c7', // light blue
  },
  {
    id: 'bit-manipulation',
    name: 'Bit Manipulation',
    description: 'Binary bitwise operations, XOR tricks, masks, bit counting and parity.',
    iconName: 'Binary',
    color: '#065f46', // dark emerald
  },
  {
    id: 'math',
    name: 'Math',
    description: 'Number theory, GCD/LCM, prime sieves, modular arithmetic and combinatorics.',
    iconName: 'Calculator',
    color: '#be123c', // dark rose
  },
];
