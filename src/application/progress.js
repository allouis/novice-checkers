// Pure data — no I/O. Tracks user progress across lessons and puzzles.

export function createProgress() {
  return {
    completedLessons: [],
    solvedPuzzles: [],
    currentLessonId: null,
    currentPuzzleId: null,
  };
}

export function markLessonComplete(progress, lessonId) {
  if (progress.completedLessons.includes(lessonId)) return progress;
  return {
    ...progress,
    completedLessons: [...progress.completedLessons, lessonId],
  };
}

export function markPuzzleSolved(progress, puzzleId) {
  if (progress.solvedPuzzles.includes(puzzleId)) return progress;
  return {
    ...progress,
    solvedPuzzles: [...progress.solvedPuzzles, puzzleId],
  };
}

export function isLessonComplete(progress, lessonId) {
  return progress.completedLessons.includes(lessonId);
}

export function isPuzzleSolved(progress, puzzleId) {
  return progress.solvedPuzzles.includes(puzzleId);
}

export function solvedPuzzleSet(progress) {
  return new Set(progress.solvedPuzzles);
}

export function completionStats(progress, totalLessons, totalPuzzles) {
  return {
    lessonsCompleted: progress.completedLessons.length,
    lessonsTotal: totalLessons,
    puzzlesSolved: progress.solvedPuzzles.length,
    puzzlesTotal: totalPuzzles,
  };
}

export function serialize(progress) {
  return JSON.parse(JSON.stringify(progress));
}

export function deserialize(data) {
  return {
    completedLessons: data.completedLessons || [],
    solvedPuzzles: data.solvedPuzzles || [],
    currentLessonId: data.currentLessonId || null,
    currentPuzzleId: data.currentPuzzleId || null,
  };
}
