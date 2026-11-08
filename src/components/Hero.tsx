import React from 'react';
import {
  Layers,
  CheckCircle2,
  CircleDashed,
  Bookmark,
  Sparkles,
  Search,
  Percent,
} from 'lucide-react';

interface Props {
  totalCount: number;
  solvedCount: number;
  unsolvedCount: number;
  bookmarkedCount: number;
  completionPercentage: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectFilter?: (status: 'all' | 'solved' | 'unsolved' | 'bookmarked') => void;
}

export const Hero: React.FC<Props> = ({
  totalCount,
  solvedCount,
  unsolvedCount,
  bookmarkedCount,
  completionPercentage,
  searchQuery,
  onSearchChange,
  onSelectFilter,
}) => {
  return (
    <section className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-[350px] h-[250px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-8">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 text-xs font-medium text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Curated LeetCode Patterns & Interactive Visual Flows</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Master DSA,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400">
            One Problem at a Time.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-2xl mx-auto">
          Your personal library of coding problems, organized by topic, difficulty, and
          problem-solving patterns. Explore step-by-step visual execution flows.
        </p>
      </div>

      {/* Global Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300" />
          <div className="relative flex items-center bg-[#101727]/90 border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl px-4 py-3.5 transition-all focus-within:border-indigo-400/80">
            <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search problems, topics, or problem numbers (e.g., Two Sum, #1, Sliding Window)..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
        {/* Total Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('all')}
          className="cursor-pointer glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-indigo-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Total Problems</span>
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Layers className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{totalCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Curated in library</div>
        </div>

        {/* Solved Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('solved')}
          className="cursor-pointer glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Solved</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">{solvedCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Completed problems</div>
        </div>

        {/* Unsolved Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('unsolved')}
          className="cursor-pointer glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-amber-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Remaining</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <CircleDashed className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono">{unsolvedCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Needs solution</div>
        </div>

        {/* Bookmarked Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('bookmarked')}
          className="cursor-pointer glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Bookmarked</span>
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Bookmark className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-purple-400 font-mono">{bookmarkedCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Saved for revision</div>
        </div>

        {/* Completion % */}
        <div className="col-span-2 sm:col-span-1 glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-sky-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Completion</span>
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <Percent className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-sky-400 font-mono">{completionPercentage}%</div>
          {/* Progress bar */}
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

