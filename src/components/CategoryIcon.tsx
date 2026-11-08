import React from 'react';
import {
  LayoutGrid,
  Type,
  Hash,
  ArrowLeftRight,
  Maximize2,
  Search,
  ArrowDownUp,
  Link2,
  Layers,
  ListOrdered,
  GitBranch,
  GitFork,
  Network,
  Boxes,
  Zap,
  RotateCcw,
  Crown,
  FolderTree,
  Binary,
  Calculator,
  Code2,
} from 'lucide-react';

interface Props {
  name: string;
  className?: string;
  color?: string;
}

export const CategoryIcon: React.FC<Props> = ({ name, className = 'w-5 h-5', color }) => {
  const iconMap: Record<string, React.ElementType> = {
    LayoutGrid,
    Type,
    Hash,
    ArrowLeftRight,
    Maximize2,
    Search,
    ArrowDownUp,
    Link2,
    Layers,
    ListOrdered,
    GitBranch,
    GitFork,
    Network,
    Boxes,
    Zap,
    RotateCcw,
    Crown,
    FolderTree,
    Binary,
    Calculator,
  };

  const IconComponent = iconMap[name] || Code2;

  return <IconComponent className={className} style={color ? { color } : undefined} />;
};

