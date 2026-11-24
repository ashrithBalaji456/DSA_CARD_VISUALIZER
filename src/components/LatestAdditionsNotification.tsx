import React from 'react';
import {
  Bell,
  Sparkles,
  ArrowRight,
  ArrowUpDown,
} from 'lucide-react';
import type { DSAProblem } from '../types/problem';
import { ProblemCard } from './ProblemCard';

interface Props {
  latestProblems: DSAProblem[];
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
  onToggleSolved: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onExplore: (problem: DSAProblem) => void;
  onSelectCategory?: (category: string) => void;
  onSortByDate?: () => void;
  onViewAll?: () => void;
  onSelectRelatedProblem?: (title: string, number?: number) => void;
}

export const LatestAdditionsNotification: React.FC<Props> = ({
  latestProblems,
  solvedIds,
  bookmarkedIds,
  onToggleSolved,
  onToggleBookmark,
  onExplore,
  onSelectCategory,
  onSortByDate,
  onViewAll,
  onSelectRelatedProblem,
}) => {
  if (!latestProblems || latestProblems.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Outer notification glass card wrapper */}
      <div className="relative rounded-3xl border border-indigo-500/20 bg-gradient-to-b from-[#0e1628]/90 via-[#0a0f1d]/90 to-[#080B14]/90 p-5 sm:p-7 backdrop-blur-xl shadow-2xl overflow-hidden group">
        {/* Ambient background glow accents */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-5 border-b border-white/[0.08]">
          <div>
            {/* Pulsing notification tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <Bell className="w-3.5 h-3.5 text-indigo-400" />
              <span>Latest Additions Notification</span>
              <span className="px-1.5 py-0.2 rounded-full bg-indigo-500/30 text-[10px] font-mono text-indigo-200">
                3 New Cards
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Freshly Added Problem Visualizers</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Explore the 3 newest algorithm additions with interactive step-by-step animations, time & space complexities, and LeetCode solutions. Automatically updates with each new release.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            {onSortByDate && (
              <button
                onClick={onSortByDate}
                className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95 shadow-sm"
                title="Sort all problems by date added (newest first)"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-indigo-400" />
                <span>Sort Library by Date</span>
              </button>
            )}

            {onViewAll && (
              <button
                onClick={onViewAll}
                className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all cursor-pointer active:scale-95"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3 Latest Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestProblems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              isSolved={solvedIds.has(problem.id)}
              isBookmarked={bookmarkedIds.has(problem.id)}
              onToggleSolved={onToggleSolved}
              onToggleBookmark={onToggleBookmark}
              onExplore={onExplore}
              onSelectCategory={onSelectCategory}
              onSelectRelatedProblem={onSelectRelatedProblem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
