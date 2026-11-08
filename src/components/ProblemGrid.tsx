import React from 'react';
import { SearchX, Sparkles } from 'lucide-react';
import type { DSAProblem } from '../types/problem';
import { ProblemCard } from './ProblemCard';

interface Props {
  problems: DSAProblem[];
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
  onToggleSolved: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onExplore: (problem: DSAProblem) => void;
  onSelectCategory?: (category: string) => void;
  onResetFilters?: () => void;
}

export const ProblemGrid: React.FC<Props> = ({
  problems,
  solvedIds,
  bookmarkedIds,
  onToggleSolved,
  onToggleBookmark,
  onExplore,
  onSelectCategory,
  onResetFilters,
}) => {
  if (problems.length === 0) {
    return (
      <div className="glass-panel rounded-3xl p-12 text-center max-w-xl mx-auto my-12">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4 text-indigo-400">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">No problems match your criteria</h3>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          Try clearing your search query, selecting "All Categories", or resetting your difficulty
          and status filters.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          isSolved={solvedIds.has(problem.id)}
          isBookmarked={bookmarkedIds.has(problem.id)}
          onToggleSolved={onToggleSolved}
          onToggleBookmark={onToggleBookmark}
          onExplore={onExplore}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </div>
  );
};
