import type { DSAProblem, Difficulty, SortOption, StatusFilter } from '../types/problem';

interface FilterCriteria {
  searchQuery: string;
  category: string;
  difficulty: Difficulty | 'All';
  status: StatusFilter;
  sortBy: SortOption;
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
}

export function filterAndSortProblems(
  problems: DSAProblem[],
  criteria: FilterCriteria
): DSAProblem[] {
  const {
    searchQuery,
    category,
    difficulty,
    status,
    sortBy,
    solvedIds,
    bookmarkedIds,
  } = criteria;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = problems.filter((problem) => {
    // Search query check (title, number, description, category, pattern)
    if (normalizedQuery) {
      const matchNumber = problem.number.toString().includes(normalizedQuery);
      const matchTitle = problem.title.toLowerCase().includes(normalizedQuery);
      const matchDesc = problem.description.toLowerCase().includes(normalizedQuery);
      const matchCategories = problem.categories.some((c) =>
        c.toLowerCase().includes(normalizedQuery)
      );
      const matchPattern = problem.importantPattern
        ? problem.importantPattern.toLowerCase().includes(normalizedQuery)
        : false;

      if (!matchNumber && !matchTitle && !matchDesc && !matchCategories && !matchPattern) {
        return false;
      }
    }

    // Category filter check
    if (category && category !== 'all') {
      const categoryLower = category.toLowerCase().replace(/-/g, ' ');
      const matchCategory = problem.categories.some(
        (c) =>
          c.toLowerCase() === categoryLower ||
          c.toLowerCase().replace(/-/g, ' ') === categoryLower ||
          (categoryLower === 'heaps' && c.toLowerCase().includes('heap')) ||
          (categoryLower === 'two pointers' && c.toLowerCase().includes('two pointer')) ||
          (categoryLower === 'sliding window' && c.toLowerCase().includes('sliding window'))
      );
      if (!matchCategory) return false;
    }

    // Difficulty filter check
    if (difficulty !== 'All') {
      if (problem.difficulty !== difficulty) return false;
    }

    // Status filter check
    const isSolved = solvedIds.has(problem.id);
    const isBookmarked = bookmarkedIds.has(problem.id);

    if (status === 'solved' && !isSolved) return false;
    if (status === 'unsolved' && isSolved) return false;
    if (status === 'bookmarked' && !isBookmarked) return false;

    return true;
  });

  // Sorting
  return filtered.sort((a, b) => {
    switch (sortBy) {
      case 'number-asc':
        return a.number - b.number;
      case 'number-desc':
        return b.number - a.number;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'difficulty-asc': {
        const order: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
        return order[a.difficulty] - order[b.difficulty] || a.number - b.number;
      }
      case 'difficulty-desc': {
        const order: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
        return order[b.difficulty] - order[a.difficulty] || a.number - b.number;
      }
      default:
        return a.number - b.number;
    }
  });
}
