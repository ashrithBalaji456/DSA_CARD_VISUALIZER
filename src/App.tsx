import { useState, useMemo, useEffect } from 'react';
import { PROBLEMS } from './data/problems';
import { CATEGORIES } from './data/categories';
import type { DSAProblem, Difficulty, SortOption, StatusFilter } from './types/problem';
import { filterAndSortProblems } from './utils/filters';
import { useProgress } from './hooks/useProgress';
import { useBookmarks } from './hooks/useBookmarks';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FilterPanel } from './components/FilterPanel';
import { ProblemGrid } from './components/ProblemGrid';
import { ProblemDetail } from './components/ProblemDetail';
import { ProgressDashboard } from './components/ProgressDashboard';
import {
  Sparkles,
  BookOpen,
  Bookmark,
  ArrowRight,
  Compass,
} from 'lucide-react';

export function App() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'problems' | 'categories' | 'bookmarks' | 'progress'
  >('dashboard');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('number-asc');

  // Selected problem for detailed view modal
  const [selectedProblem, setSelectedProblem] = useState<DSAProblem | null>(null);

  // Custom Hooks
  const {
    solvedIds,
    toggleSolved,
    totalCount,
    solvedCount,
    unsolvedCount,
    completionPercentage,
    easyStats,
    mediumStats,
    hardStats,
    getCategoryStats,
    resetProgress,
    setSolvedIds,
  } = useProgress(PROBLEMS);

  const {
    bookmarkedIds,
    toggleBookmark,
    bookmarkedCount,
    setBookmarkedIds,
  } = useBookmarks();

  // Handle global shortcut key (Press '/' to search, 'Escape' to close modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProblem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered problems computation
  const filteredProblems = useMemo(() => {
    // When on bookmarks tab, automatically filter by bookmarked
    const effectiveStatus = activeTab === 'bookmarks' ? 'bookmarked' : selectedStatus;

    return filterAndSortProblems(PROBLEMS, {
      searchQuery,
      category: selectedCategory,
      difficulty: selectedDifficulty,
      status: effectiveStatus,
      sortBy,
      solvedIds,
      bookmarkedIds,
    });
  }, [
    PROBLEMS,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedStatus,
    sortBy,
    solvedIds,
    bookmarkedIds,
    activeTab,
  ]);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedCategory !== 'all') count++;
    if (selectedDifficulty !== 'All') count++;
    if (selectedStatus !== 'all') count++;
    if (sortBy !== 'number-asc') count++;
    return count;
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedStatus, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('All');
    setSelectedStatus('all');
    setSortBy('number-asc');
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('problems');
  };

  const handleHeroFilterClick = (status: 'all' | 'solved' | 'unsolved' | 'bookmarked') => {
    if (status === 'bookmarked') {
      setActiveTab('bookmarks');
    } else {
      setSelectedStatus(status);
      setActiveTab('problems');
    }
  };

  // Find category display name for active filter banner
  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Ambient background lighting */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        solvedCount={solvedCount}
        totalCount={totalCount}
        bookmarkedCount={bookmarkedCount}
        onOpenSearch={() => {
          setActiveTab('problems');
          setTimeout(() => {
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }, 50);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* TAB: DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-10">
            {/* Hero Section */}
            <Hero
              totalCount={totalCount}
              solvedCount={solvedCount}
              unsolvedCount={unsolvedCount}
              bookmarkedCount={bookmarkedCount}
              completionPercentage={completionPercentage}
              searchQuery={searchQuery}
              onSearchChange={(q) => {
                setSearchQuery(q);
                if (q) setActiveTab('problems');
              }}
              onSelectFilter={handleHeroFilterClick}
            />

            {/* Category Quick Overview */}
            <CategoryGrid
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryClick}
              getCategoryStats={getCategoryStats}
            />

            {/* Featured Problems Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    <span>Featured DSA Problems</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Essential interview questions with step-by-step visual execution flows.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('problems')}
                  className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/30 transition-all self-start sm:self-auto"
                >
                  <span>View All {totalCount} Problems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <ProblemGrid
                problems={PROBLEMS.slice(0, 6)}
                solvedIds={solvedIds}
                bookmarkedIds={bookmarkedIds}
                onToggleSolved={toggleSolved}
                onToggleBookmark={toggleBookmark}
                onExplore={setSelectedProblem}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat.toLowerCase().replace(/ /g, '-'));
                  setActiveTab('problems');
                }}
              />
            </section>
          </div>
        )}

        {/* TAB: PROBLEMS (Complete Library with Full Filters) */}
        {activeTab === 'problems' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
            {/* Page Title & Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-indigo-400" />
                  <span>DSA Problem Library</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Explore curated LeetCode problems with interactive flow visualizers and learning notes.
                </p>
              </div>

              {activeCategoryObj && (
                <div
                  onClick={() => setSelectedCategory('all')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs self-start sm:self-auto cursor-pointer hover:bg-indigo-500/25 active:scale-95 transition-all select-none"
                  title="Click to remove category filter"
                >
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold">{activeCategoryObj.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory('all');
                    }}
                    className="ml-1 text-slate-400 hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Filter and Sorting Panel */}
            <FilterPanel
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearFilters={handleClearFilters}
              activeFilterCount={activeFilterCount}
              totalFilteredCount={filteredProblems.length}
            />

            {/* Problems Grid */}
            <ProblemGrid
              problems={filteredProblems}
              solvedIds={solvedIds}
              bookmarkedIds={bookmarkedIds}
              onToggleSolved={toggleSolved}
              onToggleBookmark={toggleBookmark}
              onExplore={setSelectedProblem}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat.toLowerCase().replace(/ /g, '-'));
              }}
              onResetFilters={handleClearFilters}
            />
          </div>
        )}

        {/* TAB: CATEGORIES */}
        {activeTab === 'categories' && (
          <div className="pt-4">
            <CategoryGrid
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryClick}
              getCategoryStats={getCategoryStats}
            />
          </div>
        )}

        {/* TAB: BOOKMARKS */}
        {activeTab === 'bookmarks' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <Bookmark className="w-6 h-6 text-purple-400 fill-purple-400/20" />
                  <span>Bookmarked Problems</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Problems you saved for revision and deep pattern review ({bookmarkedCount} saved).
                </p>
              </div>

              {bookmarkedCount > 0 && (
                <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold">
                  {bookmarkedCount} saved
                </span>
              )}
            </div>

            {bookmarkedCount === 0 ? (
              <div className="glass-panel rounded-3xl p-12 text-center max-w-md mx-auto my-12">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                  <Bookmark className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">No bookmarks saved yet</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Click the bookmark icon on any problem card to save it here for fast revision.
                </p>
                <button
                  onClick={() => setActiveTab('problems')}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
                >
                  Browse Problem Library
                </button>
              </div>
            ) : (
              <ProblemGrid
                problems={filteredProblems}
                solvedIds={solvedIds}
                bookmarkedIds={bookmarkedIds}
                onToggleSolved={toggleSolved}
                onToggleBookmark={toggleBookmark}
                onExplore={setSelectedProblem}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat.toLowerCase().replace(/ /g, '-'));
                  setActiveTab('problems');
                }}
              />
            )}
          </div>
        )}

        {/* TAB: PROGRESS DASHBOARD */}
        {activeTab === 'progress' && (
          <ProgressDashboard
            totalCount={totalCount}
            solvedCount={solvedCount}
            unsolvedCount={unsolvedCount}
            completionPercentage={completionPercentage}
            easyStats={easyStats}
            mediumStats={mediumStats}
            hardStats={hardStats}
            getCategoryStats={getCategoryStats}
            onResetProgress={resetProgress}
            onSelectCategory={handleCategoryClick}
            onRefreshData={() => {
              // Re-read storage
              setSolvedIds(new Set(JSON.parse(localStorage.getItem('dsa_atlas_solved_ids') || '[]')));
              setBookmarkedIds(new Set(JSON.parse(localStorage.getItem('dsa_atlas_bookmarked_ids') || '[]')));
            }}
          />
        )}
      </main>

      {/* Detailed Problem Modal */}
      {selectedProblem && (
        <ProblemDetail
          problem={selectedProblem}
          isSolved={solvedIds.has(selectedProblem.id)}
          isBookmarked={bookmarkedIds.has(selectedProblem.id)}
          onToggleSolved={toggleSolved}
          onToggleBookmark={toggleBookmark}
          onClose={() => setSelectedProblem(null)}
          onSelectRelatedProblem={(title, number) => {
            let found = PROBLEMS.find(
              (p) => p.title.toLowerCase() === title.toLowerCase()
            );
            if (!found && number) {
              found = PROBLEMS.find((p) => p.number === number);
            }
            if (!found) {
              found = PROBLEMS.find(
                (p) =>
                  p.title.toLowerCase().includes(title.toLowerCase()) ||
                  title.toLowerCase().includes(p.title.toLowerCase())
              );
            }
            if (found) {
              setSelectedProblem(found);
            }
          }}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#080B14]/90 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-300 font-bold">DSA Atlas</span>
            <span>— Interactive Problem Library & Visualizer</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>20 Categories</span>
            <span>•</span>
            <span>{totalCount} Verified Problems</span>
            <span>•</span>
            <span>Glassmorphism Dark UI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
