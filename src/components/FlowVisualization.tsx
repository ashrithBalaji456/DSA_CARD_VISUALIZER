import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Terminal,
  Layers,
} from 'lucide-react';
import type { FlowStep } from '../types/problem';

interface Props {
  steps?: FlowStep[];
  problemTitle: string;
}

export const FlowVisualization: React.FC<Props> = ({ steps, problemTitle }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!steps || steps.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-6 text-center text-slate-400">
        <p>No step-by-step flow provided for this problem.</p>
      </div>
    );
  }

  // Auto-play timer
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="space-y-6">
      {/* Visual Controller Toolbar */}
      <div className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Step-by-Step Flow Simulation
            </span>
            <span className="text-sm font-bold text-white font-mono">
              Step {activeStepIndex + 1} of {steps.length}: {currentStep.title}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveStepIndex((prev) => Math.max(0, prev - 1));
            }}
            disabled={activeStepIndex === 0}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="Previous Step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all"
            title={isPlaying ? 'Pause' : 'Auto Play'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Auto Play</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1));
            }}
            disabled={activeStepIndex === steps.length - 1}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="Next Step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveStepIndex(0);
            }}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all ml-1"
            title="Restart Flow"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Step Navigator Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {steps.map((st, idx) => {
          const isActive = idx === activeStepIndex;
          const isDone = idx < activeStepIndex;
          return (
            <button
              key={st.step}
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex(idx);
              }}
              className={`p-3 rounded-xl text-left transition-all duration-200 border relative ${
                isActive
                  ? 'bg-indigo-600/25 border-indigo-500 shadow-md shadow-indigo-500/20 text-white'
                  : isDone
                  ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/15'
                  : 'bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.05] hover:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                  Step {st.step}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                )}
                {isDone && (
                  <span className="text-[10px] text-emerald-400 font-bold">✓</span>
                )}
              </div>
              <p className="text-xs font-semibold truncate">{st.title}</p>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card with State Snapshot */}
      <div className="glass-card rounded-2xl p-6 border-2 border-indigo-500/30 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                Step {currentStep.step} / {steps.length}
              </span>
              <h3 className="text-lg font-bold text-white">{currentStep.title}</h3>
            </div>

            {currentStep.highlight && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25 font-medium">
                {currentStep.highlight}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
            {currentStep.description}
          </p>

          {/* State Snapshot / Visual preview if available */}
          {currentStep.stateSnapshot && (
            <div className="bg-black/45 rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-2 pb-2 border-b border-white/5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Memory & Variable State Snapshot</span>
              </div>
              <pre className="font-mono text-xs text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {currentStep.stateSnapshot}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Connected Flow Diagram / Summary Roadmap */}
      <div className="glass-subtle rounded-2xl p-5 border border-white/5">
        <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Execution Pipeline Map for {problemTitle}</span>
        </h4>

        <div className="space-y-3">
          {steps.map((st, i) => (
            <div
              key={st.step}
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex(i);
              }}
              className={`flex items-start gap-3.5 p-3 rounded-xl cursor-pointer transition-all ${
                i === activeStepIndex
                  ? 'bg-indigo-600/20 border border-indigo-500/40 text-white'
                  : 'hover:bg-white/[0.03] text-slate-400 hover:text-slate-200'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center font-mono text-xs font-bold transition-all ${
                  i === activeStepIndex
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : i < activeStepIndex
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/5 text-slate-400 border border-white/10'
                }`}
              >
                {st.step}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-200 mb-0.5">{st.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1">{st.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
