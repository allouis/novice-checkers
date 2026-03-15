import { serialize, deserialize, createProgress } from '../application/progress.js';

const STORAGE_KEY = 'checkers-novice-progress';

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialize(progress)));
  } catch {
    // localStorage may be unavailable
  }
}

export function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? deserialize(JSON.parse(data)) : createProgress();
  } catch {
    return createProgress();
  }
}

export function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
