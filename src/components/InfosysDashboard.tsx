import React, { useEffect, useMemo, useState } from 'react';
import {
  Briefcase,
  Search,
  Calendar,
  Flame,
  Layers,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ExternalLink,
  Clock,
  Star,
  Check,
  Play,
  BookOpen,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { DSAProblem, Difficulty } from '../types/problem';
import { INFOSYS_PLAN, INFOSYS_TOTAL_CITATIONS } from '../data/infosysBank';
import { resolveInfosysItems, type InfosysResolvedItem } from '../data/infosysProblems';
import { DifficultyBadge } from './DifficultyBadge';
import { CurvedSelect } from './CurvedSelect';

interface Props {
  problems: DSAProblem[];
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
  onToggleSolved: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onExplore: (problem: DSAProblem) => void;
}

type SortKey = 'frequency-desc' | 'sources-desc' | 'difficulty' | 'name-asc' | 'playcard-first';

const DIFF_ORDER: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3 };

function getLeetCodeUrl(
  q: { leetcode: string; leetcodeExact: boolean; leetcodeNumber?: number },
  linkedProblem?: DSAProblem
): string | null {
  if (!q.leetcode) return null;
  if (q.leetcodeExact && linkedProblem?.leetcodeUrl) {
    return linkedProblem.leetcodeUrl;
  }
  const clean = q.leetcode
    .replace(/^\d+\.\s*/, '')
    .replace(/\s*\((related|variant|LC\s*\d+)\)\s*$/i, '')
    .trim();
  if (!clean) return null;
  if (q.leetcodeNumber || /^\d+\.\s*/.test(q.leetcode)) {
    const slug = clean
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    if (slug) return `https://leetcode.com/problems/${slug}/`;
  }
  return `https://leetcode.com/problemset/?search=${encodeURIComponent(clean)}`;
}

export const InfosysDashboard: React.FC<Props> = ({
  problems,
  solvedIds,
  bookmarkedIds,
  onToggleSolved,
  onToggleBookmark,
  onExplore,
}) => {
  const [subTab, setSubTab] = useState<'bank' | 'plan'>('bank');
  const [showTopics, setShowTopics] = useState(true);
  const [selectedItem, setSelectedItem] = useState<InfosysResolvedItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(50);

  useEffect(() => {
    if (!selectedItem) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedItem]);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('All');
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCompany, setSelectedCompany] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortKey>('frequency-desc');

  // Toggle pills
  const [onlyHasPlayCard, setOnlyHasPlayCard] = useState(false);
  const [onlyHasLeetCode, setOnlyHasLeetCode] = useState(false);
  const [onlyUnsolved, setOnlyUnsolved] = useState(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [onlyMultiSource, setOnlyMultiSource] = useState(false);
  const [onlyDated, setOnlyDated] = useState(false);

  // Resolve all 649 Infosys questions against our DSAProblem library
  const resolvedItems = useMemo(() => resolveInfosysItems(problems), [problems]);

  const itemBySlug = useMemo(() => {
    const m = new Map<string, InfosysResolvedItem>();
    for (const item of resolvedItems) {
      m.set(item.question.slug, item);
    }
    return m;
  }, [resolvedItems]);

  // Topic breakdown
  const topicStats = useMemo(() => {
    const counts = new Map<string, number>();
    resolvedItems.forEach(({ question }) => {
      counts.set(question.topic, (counts.get(question.topic) || 0) + 1);
    });
    return Array.from(counts.entries())
      .map(([topic, count]) => ({ topic, count }))
      .sort((a, b) => b.count - a.count);
  }, [resolvedItems]);

  const maxTopicCount = topicStats.length > 0 ? topicStats[0].count : 1;

  // Dynamic dropdown options
  const { allRoles, allYears, allCompanies } = useMemo(() => {
    const roles = new Set<string>();
    const years = new Set<number>();
    const companies = new Set<string>();
    resolvedItems.forEach(({ question }) => {
      question.roles.forEach((r) => roles.add(r));
      question.years.forEach((y) => years.add(y));
      question.companies.forEach((c) => companies.add(c));
    });
    return {
      allRoles: Array.from(roles).sort(),
      allYears: Array.from(years).sort((a, b) => b - a),
      allCompanies: Array.from(companies).sort(),
    };
  }, [resolvedItems]);

  // Top-level stats
  const totalQuestions = resolvedItems.length;
  const solvedCount = useMemo(
    () => resolvedItems.filter((item) => solvedIds.has(item.storageId)).length,
    [resolvedItems, solvedIds]
  );
  const livePlayCardCount = useMemo(
    () => resolvedItems.filter((item) => Boolean(item.linkedProblem)).length,
    [resolvedItems]
  );
  const highFreqCount = useMemo(
    () =>
      resolvedItems.filter(
        ({ question }) => question.frequency === 'Very High' || question.frequency === 'High'
      ).length,
    [resolvedItems]
  );

  // Plan stats (unique items in 30-day plan)
  const planStats = useMemo(() => {
    let total = 0;
    let solved = 0;
    for (const day of INFOSYS_PLAN) {
      for (const slug of day.slugs) {
        total++;
        const item = itemBySlug.get(slug);
        if (item && solvedIds.has(item.storageId)) {
          solved++;
        }
      }
    }
    return { total, solved };
  }, [itemBySlug, solvedIds]);

  // Grouped phases for 30-Day Plan
  const planPhases = useMemo(() => {
    const groups: { phase: string; days: typeof INFOSYS_PLAN }[] = [];
    for (const day of INFOSYS_PLAN) {
      const last = groups[groups.length - 1];
      if (!last || last.phase !== day.phase) {
        groups.push({ phase: day.phase, days: [day] });
      } else {
        last.days.push(day);
      }
    }
    return groups;
  }, []);

  // Filtered & sorted questions
  const filteredItems = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();
    return resolvedItems
      .filter((item) => {
        const { question: q, linkedProblem, storageId } = item;
        if (qLower) {
          const hit =
            q.name.toLowerCase().includes(qLower) ||
            q.statement.toLowerCase().includes(qLower) ||
            q.topic.toLowerCase().includes(qLower) ||
            q.leetcode.toLowerCase().includes(qLower) ||
            q.gfg.toLowerCase().includes(qLower) ||
            q.altTitles.some((a) => a.toLowerCase().includes(qLower)) ||
            q.subtopics.some((s) => s.toLowerCase().includes(qLower));
          if (!hit) return false;
        }
        if (selectedTopic !== 'all' && q.topic !== selectedTopic) return false;
        if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;
        if (selectedFrequency !== 'All' && q.frequency !== selectedFrequency) return false;
        if (selectedRole !== 'All' && !q.roles.includes(selectedRole)) return false;
        if (selectedYear !== 'All' && !q.years.includes(Number(selectedYear))) return false;
        if (selectedCompany !== 'All' && !q.companies.includes(selectedCompany)) return false;
        if (onlyHasPlayCard && !linkedProblem) return false;
        if (onlyHasLeetCode && !q.leetcode) return false;
        if (onlyUnsolved && solvedIds.has(storageId)) return false;
        if (onlyBookmarked && !bookmarkedIds.has(storageId)) return false;
        if (onlyMultiSource && q.sourceCount < 2) return false;
        if (onlyDated && q.years.length === 0) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'frequency-desc') {
          return (
            b.question.frequencyScore - a.question.frequencyScore ||
            b.question.sourceCount - a.question.sourceCount
          );
        }
        if (sortBy === 'sources-desc') {
          return (
            b.question.sourceCount - a.question.sourceCount ||
            b.question.frequencyScore - a.question.frequencyScore
          );
        }
        if (sortBy === 'difficulty') {
          return (
            (DIFF_ORDER[a.question.difficulty] || 9) - (DIFF_ORDER[b.question.difficulty] || 9) ||
            b.question.frequencyScore - a.question.frequencyScore
          );
        }
        if (sortBy === 'playcard-first') {
          const ap = a.linkedProblem ? 1 : 0;
          const bp = b.linkedProblem ? 1 : 0;
          if (bp !== ap) return bp - ap;
          return b.question.frequencyScore - a.question.frequencyScore;
        }
        return a.question.name.localeCompare(b.question.name);
      });
  }, [
    resolvedItems,
    searchQuery,
    selectedTopic,
    selectedDifficulty,
    selectedFrequency,
    selectedRole,
    selectedYear,
    selectedCompany,
    onlyHasPlayCard,
    onlyHasLeetCode,
    onlyUnsolved,
    onlyBookmarked,
    onlyMultiSource,
    onlyDated,
    sortBy,
    solvedIds,
    bookmarkedIds,
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('all');
    setSelectedDifficulty('All');
    setSelectedFrequency('All');
    setSelectedRole('All');
    setSelectedYear('All');
    setSelectedCompany('All');
    setOnlyHasPlayCard(false);
    setOnlyHasLeetCode(false);
    setOnlyUnsolved(false);
    setOnlyBookmarked(false);
    setOnlyMultiSource(false);
    setOnlyDated(false);
    setSortBy('frequency-desc');
  };

  const progressPct = totalQuestions > 0 ? Math.round((solvedCount / totalQuestions) * 100) : 0;
  const planPct = planStats.total > 0 ? Math.round((planStats.solved / planStats.total) * 100) : 0;

  return (
    <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 space-y-6">
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-sky-500/20 bg-gradient-to-r from-[#0d182b]/90 via-[#0a101f]/90 to-[#0d1428]/90 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-2.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Infosys Coding Question Bank &amp; 30-Day Plan (2018–2026)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Infosys OA &amp; Interview Preparation Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Full {totalQuestions}-question Infosys database (SP, DSE, Power Programmer, System Engineer) with {INFOSYS_TOTAL_CITATIONS.toLocaleString()} source citations and a 30-day study plan. Questions with Play Cards launch interactive visualizers; remaining cards show <span className="text-amber-300 font-medium">Coming Soon...</span>
            </p>
          </div>

          {/* Sub-tabs: Question Bank vs 30-Day Plan */}
          <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-2xl p-1.5 self-start lg:self-auto shrink-0">
            <button
              onClick={() => setSubTab('bank')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                subTab === 'bank'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Question Bank ({totalQuestions})</span>
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
              <span>
                30-Day Plan ({planStats.solved}/{planStats.total})
              </span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-6">
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1">Unique Questions</div>
            <div className="text-2xl font-bold text-white font-mono">{totalQuestions}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {INFOSYS_TOTAL_CITATIONS.toLocaleString()} source citations
            </div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1 flex items-center justify-between">
              <span>Solved Progress</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">
              {solvedCount} / {totalQuestions}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">{progressPct}% completed</div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-xs text-slate-400 font-medium mb-1 flex items-center justify-between">
              <span>Live Play Cards</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-cyan-400 font-mono">{livePlayCardCount}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {totalQuestions - livePlayCardCount} Coming Soon...
            </div>
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

        {/* Overall Progress Bar */}
        <div className="relative z-10 mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-xs font-mono text-slate-300 shrink-0">
            Solved {solvedCount} / {totalQuestions} ({progressPct}%)
          </span>
        </div>
      </div>

      {subTab === 'bank' ? (
        <>
          {/* Questions by Topic */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setShowTopics((v) => !v)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 font-mono cursor-pointer hover:text-white"
              >
                <span>Questions by Topic ({topicStats.length}) — Click a bar to filter</span>
                {showTopics ? (
                  <ChevronUp className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>
              {selectedTopic !== 'all' && (
                <button
                  onClick={() => setSelectedTopic('all')}
                  className="text-xs text-sky-300 hover:text-sky-200 font-mono cursor-pointer"
                >
                  Clear Topic ({selectedTopic})
                </button>
              )}
            </div>
            {showTopics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {topicStats.map(({ topic, count }) => {
                  const isSelected = selectedTopic === topic;
                  const widthPct = Math.max(8, Math.round((count / maxTopicCount) * 100));
                  return (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(isSelected ? 'all' : topic)}
                      className={`flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl border text-left transition-all cursor-pointer ${
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
                      <span className="text-xs font-mono text-slate-400 w-6 text-right">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Filter & Sort Panel */}
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2.5">
              {/* Search */}
              <div className="relative sm:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, statement, subtopic, LeetCode/GFG..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50"
                />
              </div>

              <CurvedSelect
                value={selectedTopic}
                onChange={setSelectedTopic}
                options={[
                  { value: 'all', label: 'Topic: All' },
                  ...topicStats.map((t) => ({
                    value: t.topic,
                    label: `${t.topic} (${t.count})`,
                  })),
                ]}
              />

              <CurvedSelect
                value={selectedDifficulty}
                onChange={(v) => setSelectedDifficulty(v as Difficulty | 'All')}
                options={[
                  { value: 'All', label: 'Difficulty: All' },
                  { value: 'Easy', label: 'Easy' },
                  { value: 'Medium', label: 'Medium' },
                  { value: 'Hard', label: 'Hard' },
                ]}
              />

              <CurvedSelect
                value={selectedFrequency}
                onChange={setSelectedFrequency}
                options={[
                  { value: 'All', label: 'Frequency: All' },
                  { value: 'Very High', label: 'Very High' },
                  { value: 'High', label: 'High' },
                  { value: 'Medium', label: 'Medium' },
                  { value: 'Low', label: 'Low' },
                ]}
              />

              <CurvedSelect
                value={selectedRole}
                onChange={setSelectedRole}
                options={[
                  { value: 'All', label: 'Role: All' },
                  ...allRoles.map((r) => ({ value: r, label: r })),
                ]}
              />

              <CurvedSelect
                value={selectedYear}
                onChange={setSelectedYear}
                options={[
                  { value: 'All', label: 'Year: All' },
                  ...allYears.map((y) => ({ value: String(y), label: String(y) })),
                ]}
              />

              <CurvedSelect
                value={selectedCompany}
                onChange={setSelectedCompany}
                options={[
                  { value: 'All', label: 'Company: All' },
                  ...allCompanies.map((c) => ({ value: c, label: c })),
                ]}
              />
            </div>

            {/* Toggle Pills & Sort */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setOnlyHasPlayCard((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    onlyHasPlayCard
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Has Play Card ({livePlayCardCount})
                </button>
                <button
                  onClick={() => setOnlyHasLeetCode((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    onlyHasLeetCode
                      ? 'bg-sky-500/20 border-sky-400/50 text-sky-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Has LeetCode
                </button>
                <button
                  onClick={() => setOnlyUnsolved((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    onlyUnsolved
                      ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Unsolved only
                </button>
                <button
                  onClick={() => setOnlyBookmarked((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    onlyBookmarked
                      ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  ★ Bookmarked only
                </button>
                <button
                  onClick={() => setOnlyMultiSource((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    onlyMultiSource
                      ? 'bg-indigo-500/20 border-indigo-400/50 text-indigo-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Multi-source (2+)
                </button>
                <button
                  onClick={() => setOnlyDated((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    onlyDated
                      ? 'bg-purple-500/20 border-purple-400/50 text-purple-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Dated only
                </button>
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear all</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <CurvedSelect
                  align="right"
                  value={sortBy}
                  onChange={(v) => setSortBy(v as SortKey)}
                  options={[
                    { value: 'frequency-desc', label: 'Sort: Frequency (high → low)' },
                    { value: 'sources-desc', label: 'Sort: Sources (high → low)' },
                    { value: 'playcard-first', label: 'Sort: Play Cards First' },
                    { value: 'difficulty', label: 'Sort: Difficulty' },
                    { value: 'name-asc', label: 'Sort: Name (A → Z)' },
                  ]}
                />
                <span className="text-xs font-mono text-slate-400">
                  {filteredItems.length} of {totalQuestions}
                </span>
              </div>
            </div>
          </div>

          {/* Question Bank Table */}
          <div className="rounded-2xl border border-white/10 bg-[#0b1020]/90 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[980px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-3 w-16">✓ ★</th>
                    <th className="py-3 px-3">Question</th>
                    <th className="py-3 px-3 w-28">Play Card</th>
                    <th className="py-3 px-3 w-24">Difficulty</th>
                    <th className="py-3 px-3 w-32">Topic</th>
                    <th className="py-3 px-3 w-32">Frequency</th>
                    <th className="py-3 px-3 w-36">Roles</th>
                    <th className="py-3 px-3 w-28">Years</th>
                    <th className="py-3 px-3 w-44">LeetCode</th>
                    <th className="py-3 px-3 w-14 text-right">Src</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-xs">
                  {filteredItems.slice(0, visibleCount).map((item) => {
                    const { question: q, linkedProblem, storageId } = item;
                    const isSolved = solvedIds.has(storageId);
                    const isBookmarked = bookmarkedIds.has(storageId);
                    const solCount = linkedProblem?.solutions?.length || 0;

                    return (
                      <tr
                        key={q.slug}
                        onClick={() => setSelectedItem(item)}
                        className={`hover:bg-white/[0.04] transition-colors cursor-pointer ${
                          isSolved ? 'opacity-70' : ''
                        }`}
                      >
                        {/* Mark */}
                        <td
                          className="py-2.5 px-3 whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => onToggleSolved(storageId)}
                              title={isSolved ? 'Mark unsolved' : 'Mark solved'}
                              className={`w-5 h-5 rounded flex items-center justify-center border transition-colors cursor-pointer ${
                                isSolved
                                  ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300'
                                  : 'bg-white/[0.03] border-white/15 text-slate-500 hover:text-white'
                              }`}
                            >
                              <Check className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => onToggleBookmark(storageId)}
                              title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                              className={`w-5 h-5 rounded flex items-center justify-center transition-colors cursor-pointer ${
                                isBookmarked
                                  ? 'text-amber-400'
                                  : 'text-slate-500 hover:text-amber-300'
                              }`}
                            >
                              <Star
                                className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`}
                              />
                            </button>
                          </div>
                        </td>

                        {/* Question Name */}
                        <td className="py-2.5 px-3">
                          <div
                            className={`font-semibold ${
                              isSolved ? 'line-through text-slate-400' : 'text-slate-100'
                            }`}
                          >
                            {q.name}
                          </div>
                          {q.altTitles.length > 0 && (
                            <div className="text-[11px] text-slate-500 truncate max-w-md mt-0.5">
                              {q.altTitles.slice(0, 2).join(' · ')}
                            </div>
                          )}
                        </td>

                        {/* Play Card / Coming Soon */}
                        <td
                          className="py-2.5 px-3 whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {linkedProblem ? (
                            <button
                              onClick={() => onExplore(linkedProblem)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 text-[11px] font-semibold transition-all cursor-pointer"
                            >
                              <Play className="w-3 h-3 fill-cyan-300" />
                              <span>{solCount > 1 ? `${solCount} Cards` : 'Play Card'}</span>
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-400 text-[11px] font-mono">
                              <Clock className="w-3 h-3 text-amber-400/70" />
                              <span>Coming Soon</span>
                            </span>
                          )}
                        </td>

                        {/* Difficulty */}
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          <DifficultyBadge difficulty={q.difficulty} size="sm" />
                        </td>

                        {/* Topic */}
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-slate-300 text-[11px]">
                            {q.topic}
                          </span>
                        </td>

                        {/* Frequency */}
                        <td className="py-2.5 px-3 whitespace-nowrap font-mono text-[11px]">
                          <span
                            className={
                              q.frequency === 'Very High'
                                ? 'text-amber-300 font-semibold'
                                : q.frequency === 'High'
                                  ? 'text-sky-300'
                                  : 'text-slate-400'
                            }
                          >
                            {q.frequency} ({q.frequencyScore})
                          </span>
                        </td>

                        {/* Roles */}
                        <td className="py-2.5 px-3 text-[11px] text-slate-300">
                          {q.roles.length > 0 ? q.roles.join(', ') : '—'}
                        </td>

                        {/* Years */}
                        <td className="py-2.5 px-3 text-[11px] font-mono text-slate-400">
                          {q.years.length > 0 ? q.years.join(', ') : '—'}
                        </td>

                        {/* LeetCode */}
                        <td
                          className="py-2.5 px-3 text-[11px] max-w-[180px]"
                          onClick={(e) => {
                            if (q.leetcode) e.stopPropagation();
                          }}
                        >
                          {(() => {
                            const lcUrl = getLeetCodeUrl(q, linkedProblem);
                            return lcUrl ? (
                              <a
                                href={lcUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-amber-300/90 hover:text-amber-200 hover:underline max-w-full"
                                title={`Open ${q.leetcode} on LeetCode`}
                              >
                                <span className="truncate">{q.leetcode}</span>
                                <ExternalLink className="w-3 h-3 shrink-0 opacity-80" />
                              </a>
                            ) : (
                              <span className="text-slate-500">—</span>
                            );
                          })()}
                        </td>

                        {/* Sources */}
                        <td className="py-2.5 px-3 text-right font-mono text-slate-400">
                          {q.sourceCount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {visibleCount < filteredItems.length && (
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400">
                  Showing {Math.min(visibleCount, filteredItems.length)} of {filteredItems.length} questions
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVisibleCount((c) => c + 50)}
                    className="px-4 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-200 text-xs font-semibold transition-all cursor-pointer"
                  >
                    Load 50 More
                  </button>
                  <button
                    onClick={() => setVisibleCount(filteredItems.length)}
                    className="px-4 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
                  >
                    Show All ({filteredItems.length})
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        /* 30-DAY STUDY PLAN TAB */
        <div className="space-y-8">
          <div className="glass-panel rounded-2xl p-4 border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">30-Day Infosys Study Plan</span> —{' '}
              {planStats.solved} / {planStats.total} items solved ({planPct}%)
            </div>
            <div className="w-full sm:w-64 h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all"
                style={{ width: `${planPct}%` }}
              />
            </div>
          </div>

          {planPhases.map((group) => (
            <div key={group.phase} className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-300 font-mono border-b border-white/10 pb-2">
                {group.phase}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {group.days.map((day) => {
                  const dayItems = day.slugs
                    .map((slug) => itemBySlug.get(slug))
                    .filter((x): x is InfosysResolvedItem => Boolean(x));
                  const dayDone = dayItems.filter((it) => solvedIds.has(it.storageId)).length;

                  return (
                    <div
                      key={day.day}
                      className={`glass-panel rounded-2xl p-5 border space-y-3 ${
                        day.isMock ? 'border-amber-500/30 bg-amber-950/10' : 'border-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-lg bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-mono font-bold">
                              Day {day.day}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 text-[11px] font-mono">
                              {day.tier}
                            </span>
                            {day.isMock && (
                              <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[11px] font-semibold">
                                Mock Test
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-bold text-white mt-1.5">{day.title}</h3>
                          <p className="text-xs text-slate-400 mt-0.5">{day.focus}</p>
                        </div>
                        <span className="text-xs font-mono text-emerald-400 shrink-0">
                          {dayDone}/{dayItems.length}
                        </span>
                      </div>

                      <div className="divide-y divide-white/[0.06] border-t border-white/10 pt-1">
                        {dayItems.map((item) => {
                          const { question: q, linkedProblem, storageId } = item;
                          const isSolved = solvedIds.has(storageId);
                          return (
                            <div
                              key={q.slug}
                              onClick={() => setSelectedItem(item)}
                              className="py-2 flex items-center justify-between gap-2 hover:bg-white/[0.03] px-1.5 rounded-lg cursor-pointer"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleSolved(storageId);
                                  }}
                                  className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 cursor-pointer ${
                                    isSolved
                                      ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300'
                                      : 'bg-white/[0.03] border-white/15 text-transparent hover:border-white/40'
                                  }`}
                                >
                                  <Check className="w-3 h-3" />
                                </button>
                                <span
                                  className={`text-xs truncate ${
                                    isSolved ? 'line-through text-slate-500' : 'text-slate-200'
                                  }`}
                                >
                                  {q.name}
                                </span>
                              </div>

                              <div
                                className="flex items-center gap-2 shrink-0"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <DifficultyBadge difficulty={q.difficulty} size="sm" />
                                {linkedProblem ? (
                                  <button
                                    onClick={() => onExplore(linkedProblem)}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-[10px] font-semibold cursor-pointer hover:bg-cyan-500/25"
                                  >
                                    <Play className="w-2.5 h-2.5 fill-cyan-300" />
                                    <span>Play</span>
                                  </button>
                                ) : (
                                  <span className="text-[10px] font-mono text-slate-500">
                                    Coming Soon
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* INFOSYS QUESTION REFERENCE & PLAY CARD MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[88vh] rounded-3xl border border-white/15 bg-[#0b1020] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-[#101727]/90 flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <DifficultyBadge difficulty={selectedItem.question.difficulty} size="sm" />
                  <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-xs text-slate-300">
                    {selectedItem.question.topic}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono">
                    {selectedItem.question.frequency} ({selectedItem.question.frequencyScore})
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{selectedItem.question.name}</h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {(() => {
                  const lcUrl = getLeetCodeUrl(selectedItem.question, selectedItem.linkedProblem);
                  return lcUrl ? (
                    <a
                      href={lcUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-amber-500/15 border border-amber-500/35 text-amber-300 hover:bg-amber-500/25 transition-all whitespace-nowrap"
                      title={`Open ${selectedItem.question.leetcode} on LeetCode`}
                    >
                      <span className="font-mono font-bold">LeetCode</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null;
                })()}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white cursor-pointer shrink-0"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 flex-1 min-h-0 overflow-y-auto overscroll-contain space-y-5 text-xs sm:text-sm">
              {/* Play Card / Coming Soon Banner */}
              {selectedItem.linkedProblem ? (
                <div className="rounded-2xl p-4 border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Interactive Play Card Available</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Linked to DSA Atlas #{selectedItem.linkedProblem.number}{' '}
                      {selectedItem.linkedProblem.title}
                      {selectedItem.linkedProblem.solutions &&
                        selectedItem.linkedProblem.solutions.length > 1 &&
                        ` (${selectedItem.linkedProblem.solutions.length} solution variants)`}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const prob = selectedItem.linkedProblem!;
                      setSelectedItem(null);
                      onExplore(prob);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Open Play Card &amp; Visualizer</span>
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl p-4 border border-amber-500/25 bg-amber-950/20 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-amber-300">
                      Interactive Play Card: Coming Soon...
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Drop an HTML visualizer for this problem anytime and it will be linked right here.
                    </div>
                  </div>
                </div>
              )}

              {/* Statement */}
              {selectedItem.question.statement && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Statement (as reported)
                  </h3>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedItem.question.statement}
                  </p>
                </div>
              )}

              {/* Alt Titles */}
              {selectedItem.question.altTitles.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Also Reported As
                  </h3>
                  <p className="text-xs text-slate-300">
                    {selectedItem.question.altTitles.join(' · ')}
                  </p>
                </div>
              )}

              {/* Subtopics */}
              {selectedItem.question.subtopics.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subtopics
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.question.subtopics.map((sub) => (
                      <span
                        key={sub}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-xs text-slate-300"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-xs">
                <div>
                  <span className="text-slate-400">Roles: </span>
                  <span className="text-slate-200">
                    {selectedItem.question.roles.join(', ') || '—'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Years: </span>
                  <span className="text-slate-200 font-mono">
                    {selectedItem.question.years.join(', ') || '—'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Also asked at: </span>
                  <span className="text-slate-200">
                    {selectedItem.question.companies.join(', ') || '—'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Equivalents: </span>
                  <span className="text-slate-200">
                    {(() => {
                      const lcUrl = getLeetCodeUrl(selectedItem.question, selectedItem.linkedProblem);
                      const parts: React.ReactNode[] = [];
                      if (selectedItem.question.leetcode) {
                        parts.push(
                          lcUrl ? (
                            <a
                              key="lc"
                              href={lcUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 underline decoration-amber-400/40"
                            >
                              <span>LC: {selectedItem.question.leetcode}</span>
                              <ExternalLink className="w-3 h-3 inline" />
                            </a>
                          ) : (
                            <span key="lc">LC: {selectedItem.question.leetcode}</span>
                          )
                        );
                      }
                      if (selectedItem.question.gfg) {
                        parts.push(<span key="gfg">GFG: {selectedItem.question.gfg}</span>);
                      }
                      if (selectedItem.question.hackerrank) {
                        parts.push(<span key="hr">HR: {selectedItem.question.hackerrank}</span>);
                      }
                      if (selectedItem.question.codeforces) {
                        parts.push(<span key="cf">CF: {selectedItem.question.codeforces}</span>);
                      }
                      if (parts.length === 0) return '—';
                      return parts.map((node, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && ' · '}
                          {node}
                        </React.Fragment>
                      ));
                    })()}
                  </span>
                </div>
              </div>

              {/* Notes */}
              {selectedItem.question.notes && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Interview Notes
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedItem.question.notes}
                  </p>
                </div>
              )}

              {/* Sources / References */}
              {selectedItem.question.sources.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Source Citations ({selectedItem.question.sourceCount})</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedItem.question.sources.map((src, i) => (
                      <a
                        key={`${src.url}-${i}`}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs text-sky-300 transition-colors"
                      >
                        <span className="truncate">{src.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
