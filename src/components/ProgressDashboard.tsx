import React, { useState } from 'react';
import {
  CheckCircle2,
  CircleDashed,
  Download,
  Upload,
  RotateCcw,
  Sparkles,
  Trophy,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { exportUserData, importUserData } from '../utils/storage';

interface Props {
  totalCount: number;
  solvedCount: number;
  unsolvedCount: number;
  completionPercentage: number;
  easyStats: { total: number; solved: number; percentage: number };
  mediumStats: { total: number; solved: number; percentage: number };
  hardStats: { total: number; solved: number; percentage: number };
  getCategoryStats: (catName: string) => { total: number; solved: number; percentage: number };
  onResetProgress: () => void;
  onSelectCategory: (catId: string) => void;
  onRefreshData: () => void;
}

export const ProgressDashboard: React.FC<Props> = ({
  totalCount,
  solvedCount,
  unsolvedCount,
  completionPercentage,
  easyStats,
  mediumStats,
  hardStats,
  getCategoryStats,
  onResetProgress,
  onSelectCategory,
  onRefreshData,
}) => {
  const [importNotice, setImportNotice] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleExport = () => {
    const json = exportUserData();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dsa-atlas-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importUserData(content);
      if (success) {
        onRefreshData();
        setImportNotice('Progress imported successfully!');
        setTimeout(() => setImportNotice(null), 3500);
      } else {
        setImportNotice('Failed to import file. Invalid JSON format.');
        setTimeout(() => setImportNotice(null), 3500);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Dashboard Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Progress & Mastery Dashboard
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            Real-time tracking of your DSA problems, pattern coverage, and difficulty metrics.
          </p>
        </div>

        {/* Data persistence actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            title="Export your progress as JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Progress</span>
          </button>

          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
            <Upload className="w-3.5 h-3.5" />
            <span>Import</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 hover:bg-rose-500/20 transition-all"
            title="Reset progress"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {importNotice && (
        <div className="p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
          {importNotice}
        </div>
      )}

      {/* Confirmation dialog for reset */}
      {showResetConfirm && (
        <div className="glass-card rounded-2xl p-4 border border-rose-500/40 bg-rose-950/20 flex items-center justify-between gap-4">
          <span className="text-xs text-rose-200">
            Are you sure you want to reset all solved status and bookmarks? This cannot be undone.
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                onResetProgress();
                setShowResetConfirm(false);
              }}
              className="px-3 py-1 rounded-lg bg-rose-600 text-white text-xs font-bold hover:bg-rose-500"
            >
              Yes, Reset
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-3 py-1 rounded-lg bg-white/10 text-slate-300 text-xs hover:bg-white/20"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Hero Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Completion Ring / Percentage Card */}
        <div className="glass-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Overall Completion
            </span>
            <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/20">
              {solvedCount} / {totalCount} Done
            </span>
          </div>

          <div className="flex items-center gap-6 my-2">
            {/* Visual Ring Gauge */}
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#progress-gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * completionPercentage) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <span className="text-2xl font-black text-white font-mono leading-none">
                  {completionPercentage}%
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Mastered</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">{solvedCount} Solved</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <CircleDashed className="w-4 h-4" />
                <span className="font-semibold">{unsolvedCount} To Solve</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-white/5">
                Current library capacity: {totalCount}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 mt-2">
            {completionPercentage === 100
              ? '🎉 Amazing! You have solved every problem in the library!'
              : `${unsolvedCount} problems remaining to achieve 100% completion.`}
          </div>
        </div>

        {/* Difficulty Breakdown Card */}
        <div className="md:col-span-2 glass-card rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Difficulty Mastery
            </span>
            <span className="text-xs text-slate-400">Breakdown by tier</span>
          </div>

          <div className="space-y-4">
            {/* Easy Progress */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Easy</span>
                </span>
                <span className="font-mono text-slate-300">
                  {easyStats.solved}/{easyStats.total} ({easyStats.percentage}%)
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${easyStats.percentage}%` }}
                />
              </div>
            </div>

            {/* Medium Progress */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Medium</span>
                </span>
                <span className="font-mono text-slate-300">
                  {mediumStats.solved}/{mediumStats.total} ({mediumStats.percentage}%)
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${mediumStats.percentage}%` }}
                />
              </div>
            </div>

            {/* Hard Progress */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-rose-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>Hard</span>
                </span>
                <span className="font-mono text-slate-300">
                  {hardStats.solved}/{hardStats.total} ({hardStats.percentage}%)
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-rose-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${hardStats.percentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Focus on mastering Medium patterns for real-world interview success.</span>
          </div>
        </div>
      </div>

      {/* Category Mastery Grid */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-lg font-bold text-white">Category Completion Breakdown</h3>
              <p className="text-xs text-slate-400">Track coverage across all 20 DSA categories</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const stats = getCategoryStats(cat.name);
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="glass-card rounded-2xl p-4 cursor-pointer hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {stats.solved}/{stats.total}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${stats.percentage}%`,
                      backgroundColor: stats.percentage === 100 && stats.total > 0 ? '#10b981' : cat.color,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>{stats.percentage}% solved</span>
                  <span className="flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform text-indigo-400">
                    View <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
