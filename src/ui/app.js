import { createBoardView } from './board-view.js';
import { createPanelView } from './panel-view.js';
import { lessons, puzzles, sections, repertoire } from '../infrastructure/content.js';
import * as Lesson from '../application/lesson.js';
import * as Explorer from '../application/explorer.js';
import * as Puzzle from '../application/puzzle.js';
import * as Repertoire from '../application/repertoire.js';
import * as Progress from '../application/progress.js';
import { saveProgress, loadProgress } from '../infrastructure/storage.js';
import { startingPosition } from '../domain/board.js';
import { movesForPiece } from '../domain/rules.js';

// --- State ---
let mode = 'lesson-list';
let lessonState = null;
let explorerState = null;
let puzzleState = null;
let repertoireState = null;
let progress = loadProgress();

const boardView = createBoardView(document.getElementById('board-container'));
const panelView = createPanelView(document.getElementById('panel-container'));

// --- Navigation ---
function showLessonList() {
  mode = 'lesson-list';
  updateNav();
  render();
}

function openLesson(lessonId) {
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  lessonState = Lesson.createLessonState(lesson);
  progress = { ...progress, currentLessonId: lessonId };
  saveProgress(progress);
  mode = 'lesson';
  updateNav();
  render();
}

function showPuzzleList() {
  mode = 'puzzle-list';
  updateNav();
  render();
}

function openPuzzle(puzzleId) {
  const puzzle = puzzles.find(p => p.id === puzzleId);
  if (!puzzle) return;
  puzzleState = Puzzle.createPuzzleState(puzzle);
  mode = 'puzzle';
  updateNav();
  render();
}

function openExplorer(pos) {
  explorerState = Explorer.createExplorerState(pos || startingPosition());
  mode = 'explorer';
  updateNav();
  render();
}

function showRepertoireMenu() {
  mode = 'repertoire-menu';
  updateNav();
  render();
}

function openRepertoire(side) {
  const tree = side === 'white' ? repertoire.withWhite : repertoire.withBlack;
  repertoireState = Repertoire.createRepertoireState(tree, side);
  mode = 'repertoire';
  updateNav();
  render();
}

function updateNav() {
  document.querySelectorAll('.nav__btn').forEach(b => b.classList.remove('nav__btn--active'));
  const activeMap = {
    'lesson-list': 'nav-lessons',
    'lesson': 'nav-lessons',
    'puzzle-list': 'nav-puzzles',
    'puzzle': 'nav-puzzles',
    'explorer': 'nav-explorer',
    'repertoire-menu': 'nav-repertoire',
    'repertoire': 'nav-repertoire',
  };
  const id = activeMap[mode];
  if (id) document.getElementById(id)?.classList.add('nav__btn--active');
}

// --- Rendering ---
function render() {
  switch (mode) {
    case 'lesson-list': renderLessonList(); break;
    case 'lesson': renderLesson(); break;
    case 'puzzle-list': renderPuzzleList(); break;
    case 'puzzle': renderPuzzle(); break;
    case 'explorer': renderExplorer(); break;
    case 'repertoire-menu': renderRepertoireMenu(); break;
    case 'repertoire': renderRepertoire(); break;
  }
}

function renderLessonList() {
  boardView.render(startingPosition());
  panelView.renderLessonList(lessons, sections, progress);
}

function renderPuzzleList() {
  boardView.render(startingPosition());
  panelView.renderPuzzleList(puzzles, Progress.solvedPuzzleSet(progress));
}

function renderLesson() {
  const pos = Lesson.currentPosition(lessonState);
  if (pos) boardView.render(pos);
  panelView.renderLesson(lessonState, {
    totalMoveSteps: () => Lesson.totalMoveSteps(lessonState),
    currentMoveText: () => Lesson.currentMoveText(lessonState),
    currentCommentary: () => Lesson.currentCommentary(lessonState),
    hasNextDiagram: () => Lesson.hasNextDiagram(lessonState),
    hasPrevDiagram: () => Lesson.hasPrevDiagram(lessonState),
  });
}

function renderPuzzle() {
  if (!puzzleState) return;
  const active = puzzleState.status === 'unsolved' || puzzleState.status === 'incorrect';
  boardView.render(
    puzzleState.currentPosition,
    active ? puzzleState._selectedSquare : null,
    active ? (puzzleState._legalDests || []) : [],
  );
  panelView.renderPuzzle(puzzleState);
}

function renderExplorer() {
  if (!explorerState) return;
  const pos = Explorer.currentPosition(explorerState);
  boardView.render(pos, explorerState.selectedSquare, Explorer.getLegalDestinations(explorerState));
  panelView.renderExplorer(explorerState, {
    canUndo: () => Explorer.canUndo(explorerState),
    canRedo: () => Explorer.canRedo(explorerState),
    currentPosition: () => Explorer.currentPosition(explorerState),
  });
}

function renderRepertoireMenu() {
  boardView.render(startingPosition());
  panelView.renderRepertoireMenu();
}

function renderRepertoire() {
  if (!repertoireState) return;
  const pos = Repertoire.currentPosition(repertoireState);
  boardView.render(pos);
  panelView.renderRepertoire(repertoireState, {
    totalMoveSteps: () => Repertoire.totalMoveSteps(repertoireState),
    currentMoveText: () => Repertoire.currentMoveText(repertoireState),
    availableBranches: () => Repertoire.availableBranches(repertoireState),
    breadcrumbPath: () => Repertoire.breadcrumbPath(repertoireState),
    canGoBack: () => Repertoire.canGoBack(repertoireState),
    getNode: () => Repertoire.getNode(repertoireState),
  });
}

// --- Event handling ---
boardView.onSquareClick((square) => {
  switch (mode) {
    case 'explorer':
      explorerState = Explorer.selectSquare(explorerState, square);
      renderExplorer();
      break;
    case 'puzzle':
      handlePuzzleClick(square);
      break;
  }
});

function handlePuzzleClick(square) {
  if (!puzzleState || puzzleState.status === 'solved' || puzzleState.status === 'revealed') return;

  const pos = puzzleState.currentPosition;
  const pc = pos.pieces.get(square);

  if (puzzleState._selectedSquare != null) {
    const newState = Puzzle.attemptMove(puzzleState, square, puzzleState._selectedSquare);
    if (newState !== puzzleState) {
      puzzleState = { ...newState, _selectedSquare: null, _legalDests: [] };
      if (puzzleState.status === 'solved') {
        progress = Progress.markPuzzleSolved(progress, puzzleState.puzzle.id);
        saveProgress(progress);
      }
      renderPuzzle();
      return;
    }
  }

  if (pc && pc.color === pos.turn) {
    const moves = movesForPiece(pos, square);
    puzzleState = {
      ...puzzleState,
      _selectedSquare: square,
      _legalDests: moves.map(m => m.path[m.path.length - 1]),
    };
    renderPuzzle();
    return;
  }

  puzzleState = { ...puzzleState, _selectedSquare: null, _legalDests: [] };
  renderPuzzle();
}

// Panel button events (delegated)
document.getElementById('panel-container').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (btn) { handleAction(btn.dataset.action, btn.dataset); return; }

  const lessonBtn = e.target.closest('[data-lesson-id]');
  if (lessonBtn) { openLesson(parseInt(lessonBtn.dataset.lessonId, 10)); return; }

  const puzzleBtn = e.target.closest('[data-puzzle-id]');
  if (puzzleBtn) { openPuzzle(parseInt(puzzleBtn.dataset.puzzleId, 10)); return; }
});

function handleAction(action, dataset) {
  switch (action) {
    case 'step-forward':
      if (mode === 'lesson' && lessonState) { lessonState = Lesson.stepForward(lessonState); renderLesson(); }
      if (mode === 'repertoire' && repertoireState) { repertoireState = Repertoire.stepForward(repertoireState); renderRepertoire(); }
      break;
    case 'step-back':
      if (mode === 'lesson' && lessonState) { lessonState = Lesson.stepBack(lessonState); renderLesson(); }
      if (mode === 'repertoire' && repertoireState) { repertoireState = Repertoire.stepBack(repertoireState); renderRepertoire(); }
      break;
    case 'next-diagram':
      if (lessonState) { lessonState = Lesson.nextDiagram(lessonState); renderLesson(); }
      break;
    case 'prev-diagram':
      if (lessonState) { lessonState = Lesson.prevDiagram(lessonState); renderLesson(); }
      break;
    case 'next-lesson':
      if (lessonState) {
        const idx = lessons.findIndex(l => l.id === lessonState.lesson.id);
        if (idx >= 0 && idx < lessons.length - 1) openLesson(lessons[idx + 1].id);
      }
      break;
    case 'prev-lesson':
      if (lessonState) {
        const idx = lessons.findIndex(l => l.id === lessonState.lesson.id);
        if (idx > 0) openLesson(lessons[idx - 1].id);
      }
      break;
    case 'explore-position':
      if (mode === 'lesson' && lessonState) {
        openExplorer(Lesson.currentPosition(lessonState));
      }
      if (mode === 'repertoire' && repertoireState) {
        openExplorer(Repertoire.currentPosition(repertoireState));
      }
      break;
    case 'undo':
      if (explorerState) { explorerState = Explorer.undo(explorerState); renderExplorer(); }
      break;
    case 'redo':
      if (explorerState) { explorerState = Explorer.redo(explorerState); renderExplorer(); }
      break;
    case 'reset':
      if (explorerState) { explorerState = Explorer.reset(explorerState); renderExplorer(); }
      break;
    case 'hint':
      if (puzzleState) { puzzleState = Puzzle.requestHint(puzzleState); renderPuzzle(); }
      break;
    case 'reveal':
      if (puzzleState) { puzzleState = Puzzle.revealSolution(puzzleState); renderPuzzle(); }
      break;
    case 'reset-puzzle':
      if (puzzleState) { puzzleState = Puzzle.resetPuzzle(puzzleState); renderPuzzle(); }
      break;
    case 'open-repertoire':
      openRepertoire(dataset.side);
      break;
    case 'enter-variation':
      if (repertoireState) {
        repertoireState = Repertoire.enterVariation(repertoireState, dataset.variationId);
        renderRepertoire();
      }
      break;
    case 'back-to-parent':
      if (repertoireState) {
        repertoireState = Repertoire.backToParent(repertoireState);
        renderRepertoire();
      }
      break;
    case 'back-to-list':
      showLessonList();
      break;
  }
}

// Nav bar
document.getElementById('nav-lessons').addEventListener('click', showLessonList);
document.getElementById('nav-puzzles').addEventListener('click', showPuzzleList);
document.getElementById('nav-explorer').addEventListener('click', () => openExplorer());
document.getElementById('nav-repertoire').addEventListener('click', showRepertoireMenu);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (mode === 'lesson' || mode === 'repertoire') {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleAction('step-forward', {});
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleAction('step-back', {});
    }
  }
  if (mode === 'explorer') {
    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      explorerState = Explorer.undo(explorerState);
      renderExplorer();
    }
    if (e.key === 'y' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      explorerState = Explorer.redo(explorerState);
      renderExplorer();
    }
  }
});

// Initial render
showLessonList();
