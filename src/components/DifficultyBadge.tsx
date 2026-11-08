import React from 'react';
import type { Difficulty } from '../types/problem';

interface Props {
  difficulty: Difficulty;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
}

export const DifficultyBadge: React.FC<Props> = ({
  difficulty,
  size = 'md',
  showDot = true,
}) => {
  const getStyles = () => {
    switch (difficulty) {
      case 'Easy':
        return {
          bg: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
          dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]',
        };
      case 'Medium':
        return {
          bg: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
          dot: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]',
        };
      case 'Hard':
        return {
          bg: 'bg-rose-500/10 border-rose-500/25 text-rose-400',
          dot: 'bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.7)]',
        };
      default:
        return {
          bg: 'bg-slate-500/10 border-slate-500/25 text-slate-400',
          dot: 'bg-slate-400',
        };
    }
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs font-medium px-2.5 py-1 gap-1.5',
    lg: 'text-sm font-semibold px-3 py-1.5 gap-2',
  }[size];

  const dotSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2',
  }[size];

  const styles = getStyles();

  return (
    <span
      className={`inline-flex items-center rounded-full border backdrop-blur-sm transition-all duration-200 ${styles.bg} ${sizeClasses}`}
    >
      {showDot && (
        <span className={`rounded-full shrink-0 animate-pulse ${dotSize} ${styles.dot}`} />
      )}
      <span>{difficulty}</span>
    </span>
  );
};
