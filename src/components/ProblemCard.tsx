import React from 'react';
import {
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Circle,
  ArrowRight,
  Clock,
  HardDrive,
  Sparkles,
  Info,
} from 'lucide-react';
import type { DSAProblem } from '../types/problem';
import { DifficultyBadge } from './DifficultyBadge';

interface Props {
  problem: DSAProblem;
  isSolved: boolean;
  isBookmarked: boolean;
  onToggleSolved: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onExplore: (problem: DSAProblem) => void;
  onSelectCategory?: (category: string) => void;
}

export const ProblemCard: React.FC<Props> = ({
  problem,
  isSolved,
  isBookmarked,
  onToggleSolved,
  onToggleBookmark,
  onExplore,
  onSelectCategory,
}) => {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30">
      {/* Ambient gradient hover effect inside card */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Top bar: Problem number, difficulty, and bookmark / solved action buttons */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-slate-300">
              #{problem.number}
            </span>
            <DifficultyBadge difficulty={problem.difficulty} size="sm" />
          </div>

          <div className="flex items-center gap-1.5">
            {/* Bookmark button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(problem.id);
              }}
              className={`p-1.5 rounded-lg border transition-all ${
                isBookmarked
                  ? 'bg-purple-500/20 border-purple-500/40 text-purple-400'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark problem'}
              aria-label="Bookmark problem"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-purple-400' : ''}`} />
            </button>

            {/* Solved toggle button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSolved(problem.id);
              }}
              className={`p-1.5 rounded-lg border transition-all ${
                isSolved
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-emerald-400 hover:bg-white/10'
              }`}
              title={isSolved ? 'Mark as unsolved' : 'Mark as solved'}
              aria-label="Toggle solved"
            >
              {isSolved ? (
                <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-400/20" />
              ) : (
                <Circle className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onExplore(problem)}
          className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors cursor-pointer line-clamp-1 mb-2"
        >
          {problem.title}
        </h3>

        {/* Categories tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {problem.categories.map((cat) => (
            <button
              key={cat}
              onClick={(e) => {
                e.stopPropagation();
                onSelectCategory?.(cat);
              }}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-indigo-400/40 hover:text-indigo-300 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Short description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {problem.description.replace(/\n\n/g, ' ')}
        </p>
      </div>

      {/* Card Footer: Complexities, LeetCode link, and Explore button */}
      <div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono py-2.5 border-t border-white/5 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{problem.timeComplexity}</span>
          </div>
          <div className="flex items-center gap-1">
            <HardDrive className="w-3 h-3 text-slate-400" />
            <span>{problem.spaceComplexity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          {/* External LeetCode link */}
          <a
            href={problem.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/10 transition-all"
            title="Open on LeetCode in new browser tab"
          >
            <span className="text-amber-400 font-bold font-mono text-[11px]">LC</span>
            <span className="hidden sm:inline">LeetCode</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          {/* Open Problem action button */}
          {problem.visualizerUrl ? (
            <a
              href={problem.visualizerUrl}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-md shadow-indigo-600/25 hover:shadow-cyan-500/35 transition-all group/btn"
              title="Open full interactive visualizer page"
            >
              <Sparkles className="w-3 h-3 text-cyan-200" />
              <span>Open Problem</span>
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          ) : (
            <button
              onClick={() => onExplore(problem)}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-indigo-600/90 hover:bg-indigo-600 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all group/btn"
            >
              <span>Open Problem</span>
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Quick Details button when visualizer is available */}
          {problem.visualizerUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onExplore(problem);
              }}
              className="p-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              title="Quick problem overview & notes"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
