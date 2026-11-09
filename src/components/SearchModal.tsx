import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  ExternalLink,
  ArrowRight,
  CornerDownLeft,
  Sparkles,
  Layers,
} from 'lucide-react';
import type { DSAProblem } from '../types/problem';
import { DifficultyBadge } from './DifficultyBadge';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  problems: DSAProblem[];
  onSelectProblem: (problem: DSAProblem) => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  problems,
  onSelectProblem,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on open & reset state
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Filter problems based on query
  const filteredProblems = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Show first 8 featured problems when query is empty
      return problems.slice(0, 8);
    }
    return problems.filter((p) => {
      const matchNum = p.number.toString().includes(q) || `#${p.number}`.includes(q);
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCat = p.categories.some((c) => c.toLowerCase().includes(q));
      const matchPattern = p.importantPattern?.toLowerCase().includes(q) || false;
      return matchNum || matchTitle || matchDesc || matchCat || matchPattern;
    });
  }, [problems, query]);

  // Reset selected index when filtered results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredProblems]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredProblems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredProblems.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredProblems[selectedIndex]) {
          onSelectProblem(filteredProblems[selectedIndex]);
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredProblems, selectedIndex, onSelectProblem, onClose]);

  // Auto-scroll selected element into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-150 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0c1220] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] shadow-indigo-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#080B14]">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems by name, #number, topic, or pattern (e.g. #1, Reverse Pairs, Two Pointers)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 outline-none font-medium"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-400 font-mono border border-white/10">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="p-2 overflow-y-auto max-h-[60vh] space-y-1 divide-y divide-white/[0.03]"
        >
          {filteredProblems.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-medium">No matching problems found for "{query}"</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for "Two Sum", "Arrays", "Greedy", or a problem number like "#493"
              </p>
            </div>
          ) : (
            filteredProblems.map((p, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProblem(p);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`group px-3.5 py-3 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-indigo-600/25 border border-indigo-500/40 text-white shadow-md shadow-indigo-600/10'
                      : 'hover:bg-white/[0.04] border border-transparent text-slate-300'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold text-indigo-400">
                        #{p.number}
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors truncate">
                        {p.title}
                      </span>
                      <DifficultyBadge difficulty={p.difficulty} size="sm" />
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Layers className="w-3 h-3 text-slate-500" />
                        {p.categories.slice(0, 2).join(', ')}
                      </span>
                      {p.importantPattern && (
                        <>
                          <span>•</span>
                          <span className="text-purple-300/80 truncate">
                            {p.importantPattern}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions Deck */}
                  <div className="flex items-center gap-2 shrink-0">
                    {p.visualizerUrl && (
                      <a
                        href={p.visualizerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 text-xs font-medium transition-all"
                        title="Open Interactive Visualizer in new tab"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Visualizer</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProblem(p);
                        onClose();
                      }}
                      className="p-1.5 rounded-lg text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors"
                      title="View Details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-[#080B14] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                ↑
              </kbd>{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                ↓
              </kbd>{' '}
              navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                <CornerDownLeft className="w-2.5 h-2.5 inline" /> Enter
              </kbd>{' '}
              open
            </span>
          </div>
          <span>{filteredProblems.length} results</span>
        </div>
      </div>
    </div>
  );
};
