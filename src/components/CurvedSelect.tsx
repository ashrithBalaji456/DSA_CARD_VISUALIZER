import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export interface CurvedSelectOption {
  value: string;
  label: string;
}

interface CurvedSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: CurvedSelectOption[];
  align?: 'left' | 'right';
  className?: string;
}

/**
 * Custom rounded-edge dropdown replacing native OS <select> popups.
 */
export const CurvedSelect: React.FC<CurvedSelectProps> = ({
  value,
  onChange,
  options,
  align = 'left',
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value) ?? options[0];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full px-3 py-2 rounded-xl bg-[#0d1324] border text-xs text-slate-200 flex items-center justify-between gap-2 cursor-pointer transition-colors ${
          open
            ? 'border-sky-500/60 text-white'
            : 'border-white/10 hover:border-white/25'
        }`}
      >
        <span className="truncate">{selected?.label ?? value}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-150 ${
            open ? 'rotate-180 text-sky-400' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className={`absolute top-full mt-1.5 ${
            align === 'right' ? 'right-0' : 'left-0'
          } min-w-full w-max max-w-[260px] max-h-64 overflow-y-auto rounded-2xl bg-[#0b1121]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/70 p-1.5 z-50 space-y-0.5`}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between gap-2.5 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500/20 text-sky-300 font-medium'
                    : 'text-slate-300 hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
