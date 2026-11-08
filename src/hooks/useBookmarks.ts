import { useState, useEffect, useCallback } from 'react';
import {
  getStoredBookmarkedIds,
  saveStoredBookmarkedIds,
} from '../utils/storage';

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    return new Set(getStoredBookmarkedIds());
  });

  useEffect(() => {
    saveStoredBookmarkedIds(Array.from(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = useCallback((problemId: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
      } else {
        next.add(problemId);
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (problemId: string) => bookmarkedIds.has(problemId),
    [bookmarkedIds]
  );

  return {
    bookmarkedIds,
    toggleBookmark,
    isBookmarked,
    bookmarkedCount: bookmarkedIds.size,
    setBookmarkedIds,
  };
}

