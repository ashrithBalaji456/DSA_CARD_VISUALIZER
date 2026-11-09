import React from 'react';
import {
  RotateCcw,
  SlidersHorizontal,
  Layers,
  ArrowUpDown,
} from 'lucide-react';
import type { Difficulty, SortOption, StatusFilter } from '../types/problem';
import { CATEGORIES } from '../data/categories';
import { CustomDropdown } from './CustomDropdown';

interface Props {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedDifficulty: Difficulty | 'All';
  onDifficultyChange: (diff: Difficulty | 'All') => void;
  selectedStatus: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
  totalFilteredCount: number;
}

export const FilterPanel: React.FC<Props> = ({
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedStatus,
  onStatusChange,
  sortBy,
  onSortChange,
  onClearFilters,
  activeFilterCount,
  totalFilteredCount,
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories (20)' },
    ...CATEGORIES.map((cat) => ({
      value: cat.id,
      label: cat.name,
      colorDot: cat.color,
    })),
  ];

  const sortOptions = [
    { value: 'number-asc', label: 'Problem Number (Ascending)' },
    { value: 'number-desc', label: 'Problem Number (Descending)' },
    { value: 'difficulty-asc', label: 'Difficulty (Easy to Hard)' },
    { value: 'difficulty-desc', label: 'Difficulty (Hard to Easy)' },
    { value: 'title-asc', label: 'Title (A - Z)' },
    { value: 'title-desc', label: 'Title (Z - A)' },
  ];
  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-semibold text-white">Filter & Sort Problems</h3>
          <span className="text-xs font-mono text-slate-400 ml-1">
            ({totalFilteredCount} matching)
          </span>
          {activeFilterCount > 0 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">
              {activeFilterCount} active
            </span>
          )}
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-xs text-rose-300 hover:text-rose-200 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-lg hover:bg-rose-500/20 transition-all self-start lg:self-auto cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear All Filters</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Difficulty Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Difficulty
          </label>
          <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-xl border border-white/5">
            {(['All', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => onDifficultyChange(diff)}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer active:scale-95 select-none ${
                  selectedDifficulty === diff
                    ? diff === 'Easy'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : diff === 'Medium'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : diff === 'Hard'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                      : 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Status
          </label>
          <div className="flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
            {[
              { id: 'all', label: 'All' },
              { id: 'solved', label: 'Solved' },
              { id: 'unsolved', label: 'Unsolved' },
              { id: 'bookmarked', label: 'Saved' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => onStatusChange(st.id as StatusFilter)}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer active:scale-95 select-none ${
                  selectedStatus === st.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Dropdown with Curved Edges */}
        <CustomDropdown
          label="Category"
          options={categoryOptions}
          selectedValue={selectedCategory}
          onSelect={onCategoryChange}
          icon={<Layers className="w-3.5 h-3.5" />}
        />

        {/* Sort By Dropdown with Curved Edges */}
        <CustomDropdown
          label="Sort By"
          options={sortOptions}
          selectedValue={sortBy}
          onSelect={(val) => onSortChange(val as SortOption)}
          icon={<ArrowUpDown className="w-3.5 h-3.5" />}
        />
      </div>
    </div>
  );
};
