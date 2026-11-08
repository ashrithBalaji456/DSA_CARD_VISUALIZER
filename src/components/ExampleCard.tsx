import React from 'react';
import { ShieldCheck, Lightbulb } from 'lucide-react';
import type { ProblemExample } from '../types/problem';

interface Props {
  example: ProblemExample;
}

export const ExampleCard: React.FC<Props> = ({ example }) => {
  const isOfficial = example.type === 'official';

  return (
    <div className="glass-card rounded-2xl p-5 relative overflow-hidden transition-all border border-white/10 hover:border-white/20">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <span>Example {example.exampleNumber}</span>
        </h4>

        {isOfficial ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
            <ShieldCheck className="w-3 h-3" />
            <span>Official LeetCode</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 border border-amber-500/25 text-amber-300">
            <Lightbulb className="w-3 h-3" />
            <span>Illustrative Edge Case</span>
          </span>
        )}
      </div>

      <div className="space-y-3 font-mono text-xs">
        {/* Input */}
        <div className="bg-black/35 rounded-xl p-3 border border-white/5">
          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
            Input:
          </span>
          <code className="text-indigo-300 break-words">{example.input}</code>
        </div>

        {/* Output */}
        <div className="bg-black/35 rounded-xl p-3 border border-white/5">
          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
            Output:
          </span>
          <code className="text-emerald-300 break-words">{example.output}</code>
        </div>

        {/* Explanation */}
        <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5 font-sans">
          <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1 font-mono">
            Explanation:
          </span>
          <p className="text-slate-300 text-xs leading-relaxed">{example.explanation}</p>
        </div>
      </div>
    </div>
  );
};
