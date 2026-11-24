import React, { useState, useEffect } from 'react';
import {
  Layers,
  CheckCircle2,
  CircleDashed,
  Bookmark,
  Search,
  Percent,
  ArrowRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from 'lucide-react';

interface Props {
  totalCount: number;
  solvedCount: number;
  unsolvedCount: number;
  bookmarkedCount: number;
  completionPercentage: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectFilter?: (status: 'all' | 'solved' | 'unsolved' | 'bookmarked') => void;
  onBrowseProblems?: () => void;
  onTryVisualizer?: (url?: string) => void;
}

export const Hero: React.FC<Props> = ({
  totalCount,
  solvedCount,
  unsolvedCount,
  bookmarkedCount,
  completionPercentage,
  searchQuery,
  onSearchChange,
  onSelectFilter,
  onBrowseProblems,
  onTryVisualizer,
}) => {
  // Interactive Tree search simulation inside laptop screen
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlayingTree, setIsPlayingTree] = useState(true);

  const searchSteps = [
    { activeNode: 8, path: [8], line: 2, label: 'Search 6: 6 < 8 (Go Left)' },
    { activeNode: 3, path: [8, 3], line: 5, label: 'Search 6: 6 > 3 (Go Right)' },
    { activeNode: 6, path: [8, 3, 6], line: 3, label: 'Match Found: node 6!' },
  ];

  useEffect(() => {
    if (!isPlayingTree) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % searchSteps.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [isPlayingTree, searchSteps.length]);

  const stepInfo = searchSteps[currentStep];

  return (
    <section className="relative pt-6 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background Neon Waves & Lighting */}
      <div className="absolute top-10 left-10 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-5 w-[500px] h-[380px] bg-gradient-to-bl from-purple-600/18 via-fuchsia-600/12 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[200px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* TOP HERO BANNER: 2-COLUMN LAYOUT (HEADLINE & BUTTONS on Left, 3D LAPTOP on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-12 sm:mb-16">
        
        {/* Left Column: Headline, Subtitle, and CTAs */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
          {/* Main Headline matching reference */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_30px_rgba(99,102,241,0.45)]">DSA</span> with
            <br />
            <span className="text-white">Interactive Cards &amp; Visualizations</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal max-w-xl mb-7">
            A curated, interactive DSA library to practice, visualize algorithms, and track your progress — all in one place.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5">
            {/* Primary Button: Browse Problems */}
            <button
              onClick={() => onBrowseProblems?.()}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/35 hover:shadow-indigo-500/50 transition-all cursor-pointer active:scale-95 select-none"
            >
              <span>Browse Problems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button: Try Visualizer */}
            <button
              onClick={() => onTryVisualizer?.('/visualizers/count_number_of_nice_subarrays_visualizer.html')}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-cyan-400/50 text-white text-sm font-medium backdrop-blur-xl shadow-md transition-all cursor-pointer active:scale-95 group select-none"
              title="Launch interactive algorithm visualizer"
            >
              <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all">
                <Play className="w-2.5 h-2.5 fill-cyan-400 ml-0.5" />
              </div>
              <span>Try Visualizer</span>
            </button>
          </div>
        </div>

        {/* Right Column: Sleek 3D Glowing Laptop with Interactive Tree Visualizer */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end relative">
          {/* Ambient Glow behind Laptop */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform -rotate-2 scale-95 pointer-events-none" />

          {/* Laptop Container with gentle perspective styling */}
          <div className="relative w-full max-w-[490px] group select-none">
            
            {/* Laptop Screen Bezel */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#161d31] via-[#0d1424] to-[#0a0f1d] p-3 sm:p-3.5 border border-indigo-400/30 shadow-[0_15px_45px_-10px_rgba(99,102,241,0.35)] backdrop-blur-2xl">
              
              {/* Webcam dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-2 ring-1 ring-white/10" />

              {/* Inside Screen Glass */}
              <div className="relative rounded-xl bg-[#070b15] border border-white/10 p-3 sm:p-4 overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[285px] shadow-inner">
                
                {/* Top Window Navigation Bar */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-slate-400 font-mono text-[11px] ml-2 font-medium">BST Search Visualizer</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                    Target = 6
                  </span>
                </div>

                {/* Screen Center: Left Code Snapshot & Right Interactive BST */}
                <div className="grid grid-cols-12 gap-2 items-center my-auto py-2">
                  
                  {/* Left sub-panel: Visual code lines */}
                  <div className="col-span-5 flex flex-col gap-1.5 font-mono text-[10px] sm:text-[11px] text-slate-400 pl-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
                      <div className={`h-2 rounded ${stepInfo.line === 1 ? 'w-16 bg-cyan-400' : 'w-12 bg-slate-700/80'}`} />
                    </div>
                    <div className={`px-1.5 py-0.5 rounded border transition-all ${
                      stepInfo.line === 2 ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200' : 'border-transparent'
                    }`}>
                      <div className="h-2 w-20 bg-indigo-400/70 rounded" />
                    </div>
                    <div className={`px-1.5 py-0.5 rounded border transition-all ${
                      stepInfo.line === 3 ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200' : 'border-transparent'
                    }`}>
                      <div className="h-2 w-14 bg-emerald-400/70 rounded" />
                    </div>
                    <div className={`px-1.5 py-0.5 rounded border transition-all ${
                      stepInfo.line === 5 ? 'bg-purple-500/20 border-purple-400/50 text-purple-200' : 'border-transparent'
                    }`}>
                      <div className="h-2 w-16 bg-purple-400/70 rounded" />
                    </div>
                    <div className="h-2 w-10 bg-slate-700/60 rounded" />
                  </div>

                  {/* Right sub-panel: The Glowing Binary Search Tree Graph matching image */}
                  <div className="col-span-7 flex justify-center relative">
                    <svg className="w-full h-36 max-w-[210px] overflow-visible" viewBox="0 0 210 140">
                      <defs>
                        {/* Glow Filter for Active Edges */}
                        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Edge: 8 -> 3 */}
                      <line
                        x1="105" y1="20" x2="55" y2="65"
                        stroke={stepInfo.path.includes(3) ? '#38bdf8' : '#334155'}
                        strokeWidth={stepInfo.path.includes(3) ? '2.5' : '1.5'}
                        filter={stepInfo.path.includes(3) ? 'url(#neonGlow)' : undefined}
                        className="transition-all duration-300"
                      />
                      {/* Edge: 8 -> 10 */}
                      <line
                        x1="105" y1="20" x2="155" y2="65"
                        stroke="#334155"
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />
                      {/* Edge: 3 -> 1 */}
                      <line
                        x1="55" y1="65" x2="25" y2="115"
                        stroke="#334155"
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />
                      {/* Edge: 3 -> 6 */}
                      <line
                        x1="55" y1="65" x2="85" y2="115"
                        stroke={stepInfo.path.includes(6) ? '#34d399' : '#334155'}
                        strokeWidth={stepInfo.path.includes(6) ? '2.5' : '1.5'}
                        filter={stepInfo.path.includes(6) ? 'url(#neonGlow)' : undefined}
                        className="transition-all duration-300"
                      />
                      {/* Edge: 10 -> 14 */}
                      <line
                        x1="155" y1="65" x2="185" y2="115"
                        stroke="#334155"
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />

                      {/* NODE 8 (Root) */}
                      <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setCurrentStep(0)}>
                        <circle
                          cx="105" cy="20" r="14"
                          className={`transition-all duration-300 ${
                            stepInfo.activeNode === 8
                              ? 'fill-indigo-600 stroke-cyan-300 shadow-lg'
                              : 'fill-indigo-900/80 stroke-indigo-400/50'
                          }`}
                          strokeWidth="2"
                        />
                        <text x="105" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                          8
                        </text>
                      </g>

                      {/* NODE 3 (Left Child) */}
                      <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setCurrentStep(1)}>
                        <circle
                          cx="55" cy="65" r="13"
                          className={`transition-all duration-300 ${
                            stepInfo.activeNode === 3
                              ? 'fill-purple-600 stroke-cyan-300 shadow-lg'
                              : 'fill-purple-900/80 stroke-purple-400/50'
                          }`}
                          strokeWidth="2"
                        />
                        <text x="55" y="69" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                          3
                        </text>
                      </g>

                      {/* NODE 10 (Right Child) */}
                      <g className="cursor-pointer transition-transform hover:scale-110">
                        <circle
                          cx="155" cy="65" r="13"
                          fill="rgba(30, 58, 138, 0.7)"
                          stroke="rgba(56, 189, 248, 0.4)"
                          strokeWidth="2"
                        />
                        <text x="155" y="69" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold" fontFamily="monospace">
                          10
                        </text>
                      </g>

                      {/* NODE 1 (Leaf under 3) */}
                      <g className="cursor-pointer transition-transform hover:scale-110">
                        <circle
                          cx="25" cy="115" r="11"
                          fill="rgba(88, 28, 135, 0.7)"
                          stroke="rgba(192, 132, 252, 0.4)"
                          strokeWidth="1.5"
                        />
                        <text x="25" y="119" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold" fontFamily="monospace">
                          1
                        </text>
                      </g>

                      {/* NODE 6 (Target Leaf under 3) */}
                      <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setCurrentStep(2)}>
                        <circle
                          cx="85" cy="115" r="12"
                          className={`transition-all duration-300 ${
                            stepInfo.activeNode === 6
                              ? 'fill-emerald-600 stroke-emerald-300 shadow-lg shadow-emerald-500/50'
                              : 'fill-blue-900/70 stroke-blue-400/40'
                          }`}
                          strokeWidth="2"
                        />
                        <text x="85" y="119" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                          6
                        </text>
                      </g>

                      {/* NODE 14 (Leaf under 10) */}
                      <g className="cursor-pointer transition-transform hover:scale-110">
                        <circle
                          cx="185" cy="115" r="11"
                          fill="rgba(14, 116, 144, 0.7)"
                          stroke="rgba(34, 211, 238, 0.4)"
                          strokeWidth="1.5"
                        />
                        <text x="185" y="119" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold" fontFamily="monospace">
                          14
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Bottom Media Controls Bar matching image */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono truncate max-w-[200px]">
                    {stepInfo.label}
                  </span>

                  {/* Playback step pills */}
                  <div className="flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-lg p-1">
                    <button
                      onClick={() => setCurrentStep((prev) => (prev - 1 + searchSteps.length) % searchSteps.length)}
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Previous Step"
                    >
                      <SkipBack className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setIsPlayingTree(!isPlayingTree)}
                      className="p-1 px-1.5 rounded bg-indigo-600/80 text-white hover:bg-indigo-500 transition-colors cursor-pointer"
                      title={isPlayingTree ? 'Pause' : 'Play'}
                    >
                      {isPlayingTree ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => (prev + 1) % searchSteps.length)}
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Next Step"
                    >
                      <SkipForward className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Laptop Base (Keyboard Deck) with perspective depth */}
            <div className="relative mx-auto -mt-1 h-3.5 w-[96%] bg-gradient-to-r from-[#12182b] via-[#212b45] to-[#12182b] rounded-b-xl border-t border-white/20 shadow-2xl">
              {/* Laptop Trackpad Lip */}
              <div className="w-14 h-1 bg-slate-500/60 mx-auto rounded-b-md" />
            </div>

            {/* Laptop Underglow Reflection matching the image */}
            <div className="absolute -bottom-4 left-6 w-32 h-6 bg-cyan-400/20 blur-xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-4 right-6 w-32 h-6 bg-purple-500/25 blur-xl rounded-full pointer-events-none" />
          </div>
        </div>

      </div>

      {/* GLOBAL SEARCH BAR */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300" />
          <div className="relative flex items-center bg-[#101727]/90 border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl px-4 py-3.5 transition-all focus-within:border-indigo-400/80">
            <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search problems by name, topic, #number, or date (e.g. Nov 24, Sliding Window)..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* STATS CARDS ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
        {/* Total Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('all')}
          className="cursor-pointer active:scale-95 select-none glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-indigo-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Total Problems</span>
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Layers className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{totalCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Curated in library</div>
        </div>

        {/* Solved Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('solved')}
          className="cursor-pointer active:scale-95 select-none glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Solved</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">{solvedCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Completed problems</div>
        </div>

        {/* Unsolved Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('unsolved')}
          className="cursor-pointer active:scale-95 select-none glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-amber-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Remaining</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <CircleDashed className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono">{unsolvedCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Needs solution</div>
        </div>

        {/* Bookmarked Problems */}
        <div
          onClick={() => onSelectFilter && onSelectFilter('bookmarked')}
          className="cursor-pointer active:scale-95 select-none glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Bookmarked</span>
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Bookmark className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-purple-400 font-mono">{bookmarkedCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">Saved for revision</div>
        </div>

        {/* Completion % */}
        <div className="col-span-2 sm:col-span-1 glass-card rounded-2xl p-4 flex flex-col justify-between group hover:border-sky-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Completion</span>
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <Percent className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-sky-400 font-mono">{completionPercentage}%</div>
          {/* Progress bar */}
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
