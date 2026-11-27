import React, { useMemo, useState } from 'react';
import {
  Briefcase,
  Search,
  Calendar,
  Flame,
  Layers,
  CheckCircle2,
  Sparkles,
  Filter,
  RotateCcw,
} from 'lucide-react';
import type { DSAProblem, Difficulty, InfosysRole } from '../types/problem';
import { ProblemGrid } from './ProblemGrid';

interface Props {
  problems: DSAProblem[];
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
  onToggleSolved: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onExplore: (problem: DSAProblem) => void;
  onSelectRelatedProblem?: (title: string, number?: number) => void;
}

export const InfosysDashboard: React.FC<Props> = ({
  problems,
  solvedIds,
  bookmarkedIds,
  onToggleSolved,
  onToggleBookmark,
  onExplore,
  onSelectRelatedProblem,
}) => {
  const [subTab, setSubTab] = useState<'bank' | 'plan'>('bank');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [selectedRole, setSelectedRole] = useState<InfosysRole | 'All'>('All');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('All');
  const [onlyMultiSolution, setOnlyMultiSolution] = useState(false);
  const [onlyUnsolved, setOnlyUnsolved] = useState(false);

  // Compute topic counts for interactive topic bars
  const topicStats = useMemo(() => {
    const counts = new Map<string, number>();
    problems.forEach((p) => {
      p.categories.forEach((cat) => {
        counts.set(cat, (counts.get(cat) || 0) + 1);
      });
    });
    return Array.from(counts.entries())
      .map(([topic, count]) => ({ topic, count }))
      .sort((a, b) => b.count - a.count);
  }, [problems]);

  const maxTopicCount = topicStats.length > 0 ? topicStats[0].count : 1;

  // Stats
  const totalInfosys = problems.length;
  const solvedInfosys = problems.filter((p) => solvedIds.has(p.id)).length;
  const multiSolutionCount = problems.filter((p) => p.solutions && p.solutions.length > 1).length;
  const highFreqCount = problems.filter(
    (p) => p.infosys?.frequency === 'Very High' || p.infosys?.frequency === 'High'
  ).length;

  // Filtered problems
  const filteredProblems = useMemo(() => {
    return problems
      .filter((p) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchNum = String(p.number).includes(q);
          const matchTopic = p.categories.some((c) => c.toLowerCase().includes(q));
          const matchSol = p.solutions?.some((s) => s.label.toLowerCase().includes(q));
          if (!matchTitle && !matchNum && !matchTopic && !matchSol) return false;
        }
        if (selectedTopic !== 'all' && !p.categories.includes(selectedTopic)) return false;
        if (selectedDifficulty !== 'All' && p.difficulty !== selectedDifficulty) return false;
        if (selectedRole !== 'All' && !p.infosys?.roles?.includes(selectedRole)) return false;
        if (selectedFrequency !== 'All' && p.infosys?.frequency !== selectedFrequency) return false;
        if (onlyMultiSolution && (!p.solutions || p.solutions.length < 2)) return false;
        if (onlyUnsolved && solvedIds.has(p.id)) return false;
        return true;
      })
      .sort((a, b) => (b.infosys?.frequencyCount || 0) - (a.infosys?.frequencyCount || 0));
  }, [
    problems,
    searchQuery,
    selectedTopic,
    selectedDifficulty,
    selectedRole,
    selectedFrequency,
    onlyMultiSolution,
    onlyUnsolved,
    solvedIds,
  ]);

  // Grouped by 30-Day Plan
  const planByDay = useMemo(() => {
    const map = new Map<number, DSAProblem[]>();
    problems.forEach((p) => {
      const day = p.infosys?.dayPlan || 1;
      if (!map.has(day)) map.set(day, []);
      map.get(day)!.push(p);
    });
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [problems]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('all');
    setSelectedDifficulty('All');
    setSelectedRole('All');
    setSelectedFrequency('All');
    setOnlyMultiSolution(false);
    setOnlyUnsolved(false);
  };

  return (
    <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 space-y-6">
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-sky-500/20 bg-gradient-to-r from-[#0d182b]/90 via-[#0a101f]/90 to-[#0d1428]/90 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-2.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Infosys Preparation Hub (SP • DSE • Power Programmer • SE)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Infosys Coding Question Bank &amp; 30-Day Plan
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Curated Infosys OA &amp; interview problems (2018–2026) with interactive visualizers. Problems with multiple approaches group all solution variants in one card.
            </p>
          </div>

          {/* Sub-tabs: Question Bank vs 30-Day Plan */}
          <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-2xl p-1.5 self-start lg:self-auto">
            <button
              onClick={() => setSubTab('bank')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                subTab === 'bank'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Question Bank ({totalInfosys})</span>
            </button>
            <button
              onClick={() => setSubTab('plan')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                subTab === 'plan'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>30-Day Plan</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-6">
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1">Infosys Cards</div>
            <div className="text-2xl font-bold text-white font-mono">{totalInfosys}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Curated with visualizers</div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1 flex items-center justify-between">
              <span>Solved</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">
              {solvedInfosys} / {totalInfosys}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {totalInfosys > 0 ? Math.round((solvedInfosys / totalInfosys) * 100) : 0}% completed
            </div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1 flex items-center justify-between">
              <span>Multi-Solution Cards</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-cyan-400 font-mono">{multiSolutionCount}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Multiple approaches in 1 card</div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1 flex items-center justify-between">
              <span>High-Frequency</span>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-amber-400 font-mono">{highFreqCount}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">2018–2026 OA &amp; interviews</div>
          </div>
        </div>
      </div>

      {subTab === 'bank' ? (
        <>
          {/* Topic Breakdown Bars (Click a bar to filter) */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                Questions by Topic — Click a bar to filter
              </span>
              {selectedTopic !== 'all' && (
                <button
                  onClick={() => setSelectedTopic('all')}
                  className="text-xs text-sky-300 hover:text-sky-200 font-mono cursor-pointer"
                >
                  Clear Topic ({selectedTopic})
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
              {topicStats.map(({ topic, count }) => {
                const isSelected = selectedTopic === topic;
                const widthPct = Math.max(12, Math.round((count / maxTopicCount) * 100));
                return (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(isSelected ? 'all' : topic)}
                    className={`flex items-center justify-between gap-3 px-3 py-2 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500/20 border-sky-400/50 text-white'
                        : 'bg-white/[0.02] border-white/[0.07] text-slate-300 hover:bg-white/[0.06]'
                    }`}
                  >
                    <span className="text-xs font-medium truncate w-28 shrink-0">{topic}</span>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                        style={{ width: `${widthPct}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-400 w-6 text-right">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Search */}
              <div className="relative lg:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Infosys problems, topics, or solution types..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-sky-400/60"
                />
              </div>

              {/* Difficulty */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'All')}
                className="bg-[#0e1526] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-400/60"
              >
                <option value="All">Difficulty: All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              {/* Role */}
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as InfosysRole | 'All')}
                className="bg-[#0e1526] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-400/60"
              >
                <option value="All">Role: All</option>
                <option value="SP">SP (Specialist Programmer)</option>
                <option value="DSE">DSE (Digital Specialist)</option>
                <option value="Power Programmer">Power Programmer</option>
                <option value="System Engineer">System Engineer</option>
              </select>

              {/* Frequency */}
              <select
                value={selectedFrequency}
                onChange={(e) => setSelectedFrequency(e.target.value)}
                className="bg-[#0e1526] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-400/60"
              >
                <option value="All">Frequency: All</option>
                <option value="Very High">Very High</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                <label className="inline-flex items-center gap-1.5 text-slate-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyMultiSolution}
                    onChange={(e) => setOnlyMultiSolution(e.target.checked)}
                    className="accent-cyan-400 rounded"
                  />
                  <span>Multi-Solution Only</span>
                </label>
                <label className="inline-flex items-center gap-1.5 text-slate-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyUnsolved}
                    onChange={(e) => setOnlyUnsolved(e.target.checked)}
                    className="accent-sky-400 rounded"
                  />
                  <span>Unsolved Only</span>
                </label>
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset filters</span>
                </button>
              </div>
              <div className="text-slate-400 font-mono flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-sky-400" />
                <span>
                  Showing {filteredProblems.length} of {totalInfosys} Infosys problems
                </span>
              </div>
            </div>
          </div>

          {/* Infosys Problem Cards Grid */}
          <ProblemGrid
            problems={filteredProblems}
            solvedIds={solvedIds}
            bookmarkedIds={bookmarkedIds}
            onToggleSolved={onToggleSolved}
            onToggleBookmark={onToggleBookmark}
            onExplore={onExplore}
            onSelectCategory={(cat) => setSelectedTopic(cat)}
            onResetFilters={handleResetFilters}
            onSelectRelatedProblem={onSelectRelatedProblem}
          />
        </>
      ) : (
        /* 30-DAY PLAN VIEW */
        <div className="space-y-6">
          {planByDay.map(([day, dayProblems]) => {
            const daySolved = dayProblems.filter((p) => solvedIds.has(p.id)).length;
            return (
              <div key={day} className="glass-panel rounded-2xl p-5 border border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 font-mono text-xs font-bold">
                      Day {day}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {dayProblems.map((p) => p.categories[0]).filter((v, i, a) => a.indexOf(v) === i).join(' • ')}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">
                    {daySolved} / {dayProblems.length} solved
                  </span>
                </div>
                <ProblemGrid
                  problems={dayProblems}
                  solvedIds={solvedIds}
                  bookmarkedIds={bookmarkedIds}
                  onToggleSolved={onToggleSolved}
                  onToggleBookmark={onToggleBookmark}
                  onExplore={onExplore}
                  onSelectCategory={(cat) => {
                    setSelectedTopic(cat);
                    setSubTab('bank');
                  }}
                  onSelectRelatedProblem={onSelectRelatedProblem}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
