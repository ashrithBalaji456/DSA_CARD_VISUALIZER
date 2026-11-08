import React from 'react';
import { Clock, HardDrive } from 'lucide-react';

interface Props {
  timeComplexity: string;
  timeExplanation: string;
  spaceComplexity: string;
  spaceExplanation: string;
}

export const ComplexityCard: React.FC<Props> = ({
  timeComplexity,
  timeExplanation,
  spaceComplexity,
  spaceExplanation,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Time Complexity Card */}
      <div className="glass-card rounded-2xl p-5 border-l-4 border-l-indigo-500 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                Time Complexity
              </span>
              <h4 className="text-xl font-bold font-mono text-white">{timeComplexity}</h4>
            </div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 font-mono border border-indigo-500/20">
            Runtime
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed pl-10 border-t border-white/5 pt-2.5">
          {timeExplanation}
        </p>
      </div>

      {/* Space Complexity Card */}
      <div className="glass-card rounded-2xl p-5 border-l-4 border-l-violet-500 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
              <HardDrive className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                Space Complexity
              </span>
              <h4 className="text-xl font-bold font-mono text-white">{spaceComplexity}</h4>
            </div>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 font-mono border border-violet-500/20">
            Memory
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed pl-10 border-t border-white/5 pt-2.5">
          {spaceExplanation}
        </p>
      </div>
    </div>
  );
};
