import { applyMove } from './rules.js';

// GameState: tracks position history for undo/redo.
// initialPosition: the starting Position
// moves: Move[] applied so far
// currentIndex: -1 means at initial position, 0+ means after that many moves
export function createGame(initialPosition) {
  return Object.freeze({
    initialPosition,
    moves: [],
    currentIndex: -1,
  });
}

export function currentPosition(game) {
  let pos = game.initialPosition;
  for (let i = 0; i <= game.currentIndex; i++) {
    pos = applyMove(pos, game.moves[i]);
  }
  return pos;
}

export function makeMove(game, move) {
  // Truncate any redo history beyond current index
  const moves = [...game.moves.slice(0, game.currentIndex + 1), move];
  return Object.freeze({
    initialPosition: game.initialPosition,
    moves,
    currentIndex: moves.length - 1,
  });
}

export function undo(game) {
  if (game.currentIndex < 0) return game;
  return Object.freeze({
    ...game,
    currentIndex: game.currentIndex - 1,
  });
}

export function redo(game) {
  if (game.currentIndex >= game.moves.length - 1) return game;
  return Object.freeze({
    ...game,
    currentIndex: game.currentIndex + 1,
  });
}

export function reset(game) {
  return Object.freeze({
    ...game,
    currentIndex: -1,
  });
}

export function canUndo(game) {
  return game.currentIndex >= 0;
}

export function canRedo(game) {
  return game.currentIndex < game.moves.length - 1;
}

export function moveCount(game) {
  return game.currentIndex + 1;
}
