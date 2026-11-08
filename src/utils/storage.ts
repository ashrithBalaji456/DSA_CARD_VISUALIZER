const SOLVED_STORAGE_KEY = 'dsa_atlas_solved_ids';
const BOOKMARKS_STORAGE_KEY = 'dsa_atlas_bookmarked_ids';

export function getStoredSolvedIds(): string[] {
  try {
    const data = localStorage.getItem(SOLVED_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load solved IDs from storage:', e);
    return [];
  }
}

export function saveStoredSolvedIds(ids: string[]): void {
  try {
    localStorage.setItem(SOLVED_STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Failed to save solved IDs to storage:', e);
  }
}

export function getStoredBookmarkedIds(): string[] {
  try {
    const data = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load bookmarks from storage:', e);
    return [];
  }
}

export function saveStoredBookmarkedIds(ids: string[]): void {
  try {
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Failed to save bookmarks to storage:', e);
  }
}

export function clearAllUserData(): void {
  try {
    localStorage.removeItem(SOLVED_STORAGE_KEY);
    localStorage.removeItem(BOOKMARKS_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear user data:', e);
  }
}

export function exportUserData(): string {
  const data = {
    solved: getStoredSolvedIds(),
    bookmarks: getStoredBookmarkedIds(),
    exportedAt: new Date().toISOString(),
  };
  return JSON.stringify(data, null, 2);
}

export function importUserData(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (Array.isArray(parsed.solved)) {
      saveStoredSolvedIds(parsed.solved);
    }
    if (Array.isArray(parsed.bookmarks)) {
      saveStoredBookmarkedIds(parsed.bookmarks);
    }
    return true;
  } catch (e) {
    console.error('Failed to import user data:', e);
    return false;
  }
}

