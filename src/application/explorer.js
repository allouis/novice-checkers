import { createGame, currentPosition as gamePosition, makeMove as gameMakeMove, undo as gameUndo, redo as gameRedo, reset as gameReset, canUndo as gameCanUndo, canRedo as gameCanRedo } from '../domain/game.js';
import { legalMoves, movesForPiece, resolveNotationMove } from '../domain/rules.js';
import { formatMove } from '../domain/notation.js';

export function createExplorerState(initialPosition) {
  return {
    game: createGame(initialPosition),
    selectedSquare: null,
  };
}

export function currentPosition(state) {
  return gamePosition(state.game);
}

export function selectSquare(state, square) {
  const pos = currentPosition(state);
  const pc = pos.pieces.get(square);

  // If clicking on a legal destination for the selected piece, make the move
  if (state.selectedSquare !== null) {
    const moves = movesForPiece(pos, state.selectedSquare);
    const move = moves.find(m => m.path[m.path.length - 1] === square);
    if (move) {
      return {
        game: gameMakeMove(state.game, move),
        selectedSquare: null,
      };
    }
  }

  // If clicking on own piece, select it
  if (pc && pc.color === pos.turn) {
    return { ...state, selectedSquare: square };
  }

  // Clicking empty or opponent piece — deselect
  return { ...state, selectedSquare: null };
}

export function getLegalDestinations(state) {
  if (state.selectedSquare === null) return [];
  const pos = currentPosition(state);
  const moves = movesForPiece(pos, state.selectedSquare);
  return moves.map(m => m.path[m.path.length - 1]);
}

export function undo(state) {
  return { ...state, game: gameUndo(state.game), selectedSquare: null };
}

export function redo(state) {
  return { ...state, game: gameRedo(state.game), selectedSquare: null };
}

export function reset(state) {
  return { ...state, game: gameReset(state.game), selectedSquare: null };
}

export function canUndo(state) {
  return gameCanUndo(state.game);
}

export function canRedo(state) {
  return gameCanRedo(state.game);
}
