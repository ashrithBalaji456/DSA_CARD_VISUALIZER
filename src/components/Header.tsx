import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  CheckCircle2,
  Bookmark,
  Search,
  Menu,
  X,
  Layers,
  BarChart3,
  BookOpen,
  LayoutDashboard,
  Bell,
  Sparkles,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import type { DSAProblem } from '../types/problem';
import { DifficultyBadge } from './DifficultyBadge';

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  return dateStr;
};

interface Props {
  activeTab: 'dashboard' | 'problems' | 'categories' | 'bookmarks' | 'progress';
  onSelectTab: (tab: 'dashboard' | 'problems' | 'categories' | 'bookmarks' | 'progress') => void;
  solvedCount: number;
  totalCount: number;
  bookmarkedCount: number;
  onOpenSearch?: () => void;
  latestProblems?: DSAProblem[];
  onSelectProblem?: (problem: DSAProblem) => void;
  onSortByDate?: () => void;
}

export const Header: React.FC<Props> = ({
  activeTab,
  onSelectTab,
  solvedCount,
  totalCount,
  bookmarkedCount,
  onOpenSearch,
  latestProblems,
  onSelectProblem,
  onSortByDate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotifOpen(false);
      }
    };
    if (notifOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notifOpen]);

  interface NavItem {
    id: 'dashboard' | 'problems' | 'categories' | 'bookmarks' | 'progress';
    label: string;
    icon: React.ElementType;
    badge?: number;
  }

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'problems', label: 'Problems', icon: BookOpen },
    { id: 'categories', label: 'Categories', icon: Layers },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, badge: bookmarkedCount },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
  ];

  const handleNavClick = (id: typeof activeTab) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080B14]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('dashboard')}
          className="flex items-center gap-3 group text-left transition-all cursor-pointer active:scale-95"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-blue-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/35 transition-all">
            <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white font-mono">
                DSA <span className="text-indigo-400">Atlas</span>
              </span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Interactive Problem Library</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full p-1 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative cursor-pointer active:scale-95 select-none ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-indigo-800 text-white' : 'bg-indigo-500/20 text-indigo-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className={`p-2 rounded-xl border transition-all cursor-pointer active:scale-95 shadow-sm relative ${
                notifOpen
                  ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300'
                  : 'bg-white/[0.05] border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.09] hover:border-indigo-500/40'
              }`}
              title="Notifications: 3 Latest Added Problem Cards"
              aria-label="View latest problem notifications"
            >
              <Bell className="w-4 h-4 text-indigo-400" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-indigo-500 text-[10px] font-bold text-white shadow ring-2 ring-[#080B14]">
                3
              </span>
            </button>

            {/* Notification popup menu */}
            {notifOpen && (
              <div className="absolute right-0 mt-2.5 w-80 sm:w-96 rounded-2xl bg-[#0e1628]/95 border border-white/15 shadow-2xl backdrop-blur-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-amber-500/20 text-amber-400">
                      <Bell className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Latest Problem Releases
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono font-semibold">
                    3 New Cards
                  </span>
                </div>

                <div className="space-y-2">
                  {latestProblems?.slice(0, 3).map((problem) => (
                    <div
                      key={problem.id}
                      onClick={() => {
                        onSelectProblem?.(problem);
                        setNotifOpen(false);
                      }}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-[11px] font-mono font-bold text-indigo-400">
                            #{problem.number}
                          </span>
                          <span className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                            {problem.title}
                          </span>
                        </div>
                        <DifficultyBadge difficulty={problem.difficulty} size="sm" />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1 font-mono text-[10px] text-slate-400">
                          <Calendar className="w-3 h-3 text-indigo-400" />
                          <span>{formatDate(problem.addedDate)}</span>
                        </span>

                        {problem.visualizerUrl && (
                          <span className="flex items-center gap-1 text-[10px] text-indigo-300 group-hover:text-cyan-300 font-medium">
                            <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                            <span>Visualizer Ready</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onSelectTab('dashboard');
                      setNotifOpen(false);
                    }}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View in Dashboard
                  </button>
                  {onSortByDate && (
                    <button
                      onClick={() => {
                        onSortByDate();
                        setNotifOpen(false);
                      }}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Sort All by Date</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Search Button */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-slate-300 bg-white/[0.05] border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.09] hover:text-white transition-all group cursor-pointer active:scale-95 shadow-sm"
              title="Search problems (Press '/' or Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400 border border-white/10 font-mono">
                /
              </kbd>
            </button>
          )}

          {/* Solved Badge Pill */}
          <div
            onClick={() => handleNavClick('progress')}
            className="cursor-pointer active:scale-95 select-none hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all"
            title="Solved Problems"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {solvedCount}/{totalCount}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#080B14]/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600/20 border border-indigo-500/40 text-indigo-300'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
