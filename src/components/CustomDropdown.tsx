import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  colorDot?: string;
  badge?: string;
}

interface CustomDropdownProps {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  icon?: React.ReactNode;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === selectedValue) || options[0];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
        {label}
      </label>

      {/* Trigger Button with curved rounded-xl edges */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer select-none ${
          isOpen
            ? 'bg-[#101727] border-indigo-500/70 shadow-lg shadow-indigo-500/10 text-white'
            : 'bg-black/35 hover:bg-white/[0.06] border-white/10 hover:border-white/20 text-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 truncate">
          {selectedOption?.colorDot && (
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: selectedOption.colorDot }}
            />
          )}
          {selectedOption?.icon && (
            <span className="shrink-0 text-indigo-400">{selectedOption.icon}</span>
          )}
          <span className="truncate">{selectedOption ? selectedOption.label : 'Select...'}</span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
          {icon}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-indigo-400' : ''
            }`}
          />
        </div>
      </button>

      {/* Curved Glassmorphism Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-[#0e1526]/95 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-2xl p-1.5 max-h-64 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150">
          {options.map((option) => {
            const isSelected = option.value === selectedValue;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs transition-all duration-150 cursor-pointer select-none text-left ${
                  isSelected
                    ? 'bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {option.colorDot && (
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: option.colorDot }}
                    />
                  )}
                  {option.icon && (
                    <span className="shrink-0 text-indigo-400">{option.icon}</span>
                  )}
                  <span className="truncate">{option.label}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {option.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {option.badge}
                    </span>
                  )}
                  {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
