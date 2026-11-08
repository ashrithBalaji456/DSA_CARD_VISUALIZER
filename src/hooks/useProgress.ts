import { useState, useEffect, useCallback } from 'react';
import {
  getStoredSolvedIds,
  saveStoredSolvedIds,
  clearAllUserData,
} from '../utils/storage';
import { fireConfetti } from '../utils/confetti';
import type { DSAProblem, Difficulty } from '../types/problem';

export function useProgress(problems: DSAProblem[]) {
  const [solvedIds, setSolvedIds] = useState<Set<string>>(() => {
    return new Set(getStoredSolvedIds());
  });

  // Sync to storage
  useEffect(() => {
    saveStoredSolvedIds(Array.from(solvedIds));
  }, [solvedIds]);

  const toggleSolved = useCallback((problemId: string) => {
    setSolvedIds((prev) => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
      } else {
        next.add(problemId);
        fireConfetti();
      }
      return next;
    });
  }, []);

  const isSolved = useCallback(
    (problemId: string) => solvedIds.has(problemId),
    [solvedIds]
  );

  const totalCount = problems.length;
  const solvedCount = problems.filter((p) => solvedIds.has(p.id)).length;
  const unsolvedCount = totalCount - solvedCount;
  const completionPercentage =
    totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Breakdown by difficulty
  const getDifficultyStats = (diff: Difficulty) => {
    const list = problems.filter((p) => p.difficulty === diff);
    const total = list.length;
    const solved = list.filter((p) => solvedIds.has(p.id)).length;
    const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;
    return { total, solved, percentage };
  };

  const easyStats = getDifficultyStats('Easy');
  const mediumStats = getDifficultyStats('Medium');
  const hardStats = getDifficultyStats('Hard');

  // Breakdown by category
  const getCategoryStats = (categoryName: string) => {
    const normalizedName = categoryName.toLowerCase().replace(/-/g, ' ');
    const list = problems.filter((p) =>
      p.categories.some(
        (c) =>
          c.toLowerCase() === normalizedName ||
          c.toLowerCase().replace(/-/g, ' ') === normalizedName ||
          (normalizedName === 'heaps' && c.toLowerCase().includes('heap')) ||
          (normalizedName === 'two pointers' && c.toLowerCase().includes('two pointer')) ||
          (normalizedName === 'sliding window' && c.toLowerCase().includes('sliding window'))
      )
    );
    const total = list.length;
    const solved = list.filter((p) => solvedIds.has(p.id)).length;
    const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;
    return { total, solved, percentage };
  };

  const resetProgress = useCallback(() => {
    clearAllUserData();
    setSolvedIds(new Set());
  }, []);

  return {
    solvedIds,
    toggleSolved,
    isSolved,
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
  };
}
