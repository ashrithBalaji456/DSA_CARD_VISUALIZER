import React from 'react';
import type { CategoryInfo } from '../types/problem';
import { CategoryIcon } from './CategoryIcon';

interface Props {
  category: CategoryInfo;
  totalProblems: number;
  solvedProblems: number;
  isSelected: boolean;
  onSelect: (categoryId: string) => void;
}

export const CategoryCard: React.FC<Props> = ({
  category,
  totalProblems,
  solvedProblems,
  isSelected,
  onSelect,
}) => {
  const percentage =
    totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  return (
    <div
      onClick={() => onSelect(category.id)}
      className={`cursor-pointer active:scale-95 select-none rounded-2xl p-4 transition-all duration-300 relative group flex flex-col justify-between ${
        isSelected
          ? 'bg-indigo-600/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/20'
          : 'glass-card hover:-translate-y-1'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
            style={{
              backgroundColor: `${category.color}15`,
              border: `1px solid ${category.color}35`,
            }}
          >
            <CategoryIcon name={category.iconName} color={category.color} className="w-5 h-5" />
          </div>

          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
            {totalProblems} {totalProblems === 1 ? 'problem' : 'problems'}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
          <span>Progress</span>
          <span className={percentage === 100 && totalProblems > 0 ? 'text-emerald-400' : 'text-slate-300'}>
            {solvedProblems}/{totalProblems} ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              backgroundColor: percentage === 100 && totalProblems > 0 ? '#10b981' : category.color,
            }}
          />
        </div>
      </div>
    </div>
  );
};
