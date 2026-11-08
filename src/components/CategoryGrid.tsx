import React from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryCard } from './CategoryCard';

interface Props {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  getCategoryStats: (categoryId: string) => { total: number; solved: number; percentage: number };
}

export const CategoryGrid: React.FC<Props> = ({
  selectedCategory,
  onSelectCategory,
  getCategoryStats,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Explore by Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            20 core data structures and algorithm paradigms. Click a category to view its problems.
          </p>
        </div>

        {selectedCategory !== 'all' && (
          <button
            onClick={() => onSelectCategory('all')}
            className="self-start sm:self-auto text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/25 transition-all"
          >
            Show All Categories
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5">
        {CATEGORIES.map((cat) => {
          const stats = getCategoryStats(cat.name);
          return (
            <CategoryCard
              key={cat.id}
              category={cat}
              totalProblems={stats.total}
              solvedProblems={stats.solved}
              isSelected={selectedCategory === cat.id}
              onSelect={(id) => onSelectCategory(id === selectedCategory ? 'all' : id)}
            />
          );
        })}
      </div>
    </section>
  );
};

