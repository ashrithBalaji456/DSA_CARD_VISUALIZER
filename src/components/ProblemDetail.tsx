import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Circle,
  FileText,
  Activity,
  Code2,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Link as LinkIcon,
} from 'lucide-react';
import type { DSAProblem } from '../types/problem';
import { DifficultyBadge } from './DifficultyBadge';
import { ExampleCard } from './ExampleCard';
import { FlowVisualization } from './FlowVisualization';
import { ComplexityCard } from './ComplexityCard';

interface Props {
  problem: DSAProblem;
  isSolved: boolean;
  isBookmarked: boolean;
  onToggleSolved: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onClose: () => void;
  onSelectRelatedProblem?: (problemTitle: string) => void;
}

export const ProblemDetail: React.FC<Props> = ({
  problem,
  isSolved,
  isBookmarked,
  onToggleSolved,
  onToggleBookmark,
  onClose,
  onSelectRelatedProblem,
}) => {
  const [activeTab, setActiveTab] = useState<'statement' | 'flow' | 'examples' | 'notes'>(
    'flow'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div
        className="w-full max-w-5xl bg-[#080B14] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 bg-[#101727]/80 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                Problem #{problem.number}
              </span>
              <DifficultyBadge difficulty={problem.difficulty} size="md" />
              {problem.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {problem.title}
            </h2>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            {/* Dedicated Interactive Visualizer Link */}
            {problem.visualizerUrl && (
              <a
                href={problem.visualizerUrl}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white shadow-md shadow-cyan-500/20 transition-all"
                title="Navigate to full interactive visualizer page"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Open Problem Visualizer</span>
                <ExternalLink className="w-3 h-3 text-cyan-200" />
              </a>
            )}

            {/* LeetCode official link */}
            <a
              href={problem.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition-all shadow-sm"
              title="Open problem on LeetCode in a new Chrome tab"
            >
              <span className="font-mono font-bold">LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Solved toggle */}
            <button
              onClick={() => onToggleSolved(problem.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${isSolved
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-emerald-300 hover:bg-white/10'
                }`}
            >
              {isSolved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 fill-emerald-400/20" />
                  <span>Solved</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4" />
                  <span>Mark Solved</span>
                </>
              )}
            </button>

            {/* Bookmark toggle */}
            <button
              onClick={() => onToggleBookmark(problem.id)}
              className={`p-2 rounded-xl border transition-all ${isBookmarked
                  ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-purple-300 hover:bg-white/10'
                }`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark problem'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-purple-400' : ''}`} />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all ml-1"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/10 bg-[#080B14] overflow-x-auto shrink-0">
          {[
            { id: 'flow', label: 'Problem-Solving Flow', icon: Activity },
            { id: 'statement', label: 'Problem Statement', icon: FileText },
            { id: 'examples', label: `Examples (${problem.examples.length})`, icon: Code2 },
            { id: 'notes', label: 'Learning Notes & Complexity', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${isActive
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* TAB 1: VISUAL PROBLEM-SOLVING FLOW */}
          {activeTab === 'flow' && (
            <div className="space-y-6">
              {/* Standalone Interactive Visualizer Callout */}
              {problem.visualizerUrl && (
                <div className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-indigo-950/30">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Interactive Visualizer Page Available</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                          Full Screen
                        </span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Includes real-time memory registers, code line tracking, speed controls & sound effects.
                      </p>
                    </div>
                  </div>

                  <a
                    href={problem.visualizerUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all shrink-0"
                  >
                    <span>Open Problem Visualizer</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Approach summary banner */}
              {problem.approach && (
                <div className="glass-panel rounded-2xl p-4 border-l-4 border-l-indigo-500">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Algorithmic Approach</span>
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-mono">
                    {problem.approach}
                  </p>
                </div>
              )}

              {/* Step-by-step Interactive Flow component */}
              <FlowVisualization steps={problem.flowSteps} problemTitle={problem.title} />

              {/* Complexities Quick Preview */}
              <div className="pt-4 border-t border-white/10">
                <ComplexityCard
                  timeComplexity={problem.timeComplexity}
                  timeExplanation={problem.timeComplexityExplanation}
                  spaceComplexity={problem.spaceComplexity}
                  spaceExplanation={problem.spaceComplexityExplanation}
                />
              </div>
            </div>
          )}

          {/* TAB 2: PROBLEM STATEMENT */}
          {activeTab === 'statement' && (
            <div className="space-y-6 max-w-4xl">
              {/* Description */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Problem Description</span>
                </h3>
                <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-line font-sans space-y-3">
                  {problem.description}
                </div>
              </div>

              {/* Input / Output Formats */}
              {(problem.inputFormat || problem.outputFormat) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {problem.inputFormat && (
                    <div className="glass-card rounded-2xl p-4">
                      <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">
                        Input Format:
                      </span>
                      <code className="text-xs font-mono text-indigo-300">
                        {problem.inputFormat}
                      </code>
                    </div>
                  )}
                  {problem.outputFormat && (
                    <div className="glass-card rounded-2xl p-4">
                      <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">
                        Output Format:
                      </span>
                      <code className="text-xs font-mono text-emerald-300">
                        {problem.outputFormat}
                      </code>
                    </div>
                  )}
                </div>
              )}

              {/* Constraints */}
              {problem.constraints && problem.constraints.length > 0 && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Constraints</span>
                  </h3>
                  <ul className="space-y-2">
                    {problem.constraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                        <span className="text-indigo-400 select-none">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: EXAMPLES */}
          {activeTab === 'examples' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 mb-2">
                Showing all 3–4 curated examples for #{problem.number} {problem.title}. Official
                LeetCode examples and illustrative edge cases are clearly marked.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problem.examples.map((ex) => (
                  <ExampleCard key={ex.exampleNumber} example={ex} />
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LEARNING NOTES & COMPLEXITY */}
          {activeTab === 'notes' && (
            <div className="space-y-6">
              {/* Complexity Analysis */}
              <ComplexityCard
                timeComplexity={problem.timeComplexity}
                timeExplanation={problem.timeComplexityExplanation}
                spaceComplexity={problem.spaceComplexity}
                spaceExplanation={problem.spaceComplexityExplanation}
              />

              {/* Key Observations */}
              {problem.keyObservations && problem.keyObservations.length > 0 && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Key Observations</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {problem.keyObservations.map((obs, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <span className="w-5 h-5 rounded-md bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Important Pattern & Optimal Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problem.importantPattern && (
                  <div className="glass-card rounded-2xl p-5 border-l-4 border-l-purple-500">
                    <span className="text-[11px] font-bold uppercase text-purple-400 block mb-1">
                      Algorithmic Pattern
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {problem.importantPattern}
                    </p>
                  </div>
                )}
                {problem.optimalApproach && (
                  <div className="glass-card rounded-2xl p-5 border-l-4 border-l-emerald-500">
                    <span className="text-[11px] font-bold uppercase text-emerald-400 block mb-1">
                      Optimal Approach
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {problem.optimalApproach}
                    </p>
                  </div>
                )}
              </div>

              {/* Common Mistakes */}
              {problem.commonMistakes && problem.commonMistakes.length > 0 && (
                <div className="glass-card rounded-2xl p-6 border-l-4 border-l-rose-500/70">
                  <h3 className="text-sm font-semibold text-rose-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>Common Pitfalls & Mistakes</span>
                  </h3>
                  <ul className="space-y-2">
                    {problem.commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-rose-400 font-bold select-none">✕</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Problems */}
              {problem.relatedProblems && problem.relatedProblems.length > 0 && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <LinkIcon className="w-4 h-4 text-indigo-400" />
                    <span>Related Problems</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {problem.relatedProblems.map((rp, i) => (
                      <div
                        key={i}
                        onClick={() => onSelectRelatedProblem?.(rp.title)}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          {rp.number && (
                            <span className="text-[10px] font-mono text-slate-400 block">
                              #{rp.number}
                            </span>
                          )}
                          <span className="text-xs font-semibold text-white hover:text-indigo-300 transition-colors">
                            {rp.title}
                          </span>
                        </div>
                        <DifficultyBadge difficulty={rp.difficulty} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
