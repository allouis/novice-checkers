import { describe, it, expect } from 'vitest';
import { BLACK, WHITE, piece, position, getPiece } from '../../src/domain/board.js';
import { legalMoves } from '../../src/domain/rules.js';
import {
  createGame, currentPosition, makeMove, undo, redo, reset,
  canUndo, canRedo, moveCount,
} from '../../src/domain/game.js';

const bm = piece(BLACK);
const wm = piece(WHITE);

function pos(placements, turn = BLACK) {
  const pieces = new Map();
  for (const [sq, pc] of placements) {
    pieces.set(sq, pc);
  }
  return position(pieces, turn);
}

describe('createGame', () => {
  it('starts at initial position', () => {
    const p = pos([[9, bm]]);
    const game = createGame(p);
    expect(currentPosition(game)).toEqual(p);
    expect(canUndo(game)).toBe(false);
    expect(canRedo(game)).toBe(false);
    expect(moveCount(game)).toBe(0);
  });
});

describe('makeMove + undo + redo', () => {
  it('applies a move and can undo', () => {
    const p = pos([[9, bm], [22, wm]]);
    let game = createGame(p);

    const moves = legalMoves(p);
    const move = moves.find(m => m.path[1] === 14);
    game = makeMove(game, move);

    expect(moveCount(game)).toBe(1);
    expect(canUndo(game)).toBe(true);
    expect(getPiece(currentPosition(game), 14).color).toBe(BLACK);
    expect(getPiece(currentPosition(game), 9)).toBeNull();

    // Undo
    game = undo(game);
    expect(moveCount(game)).toBe(0);
    expect(currentPosition(game)).toEqual(p);
    expect(canRedo(game)).toBe(true);

    // Redo
    game = redo(game);
    expect(moveCount(game)).toBe(1);
    expect(getPiece(currentPosition(game), 14).color).toBe(BLACK);
  });

  it('truncates redo history on new move', () => {
    const p = pos([[9, bm]]);
    let game = createGame(p);

    const moves = legalMoves(p);
    game = makeMove(game, moves[0]);
    game = undo(game);
    expect(canRedo(game)).toBe(true);

    // Make a different move — redo history should be gone
    game = makeMove(game, moves[1] || moves[0]);
    expect(canRedo(game)).toBe(false);
  });

  it('reset goes back to initial position', () => {
    const p = pos([[9, bm]]);
    let game = createGame(p);
    const moves = legalMoves(p);
    game = makeMove(game, moves[0]);
    game = reset(game);
    expect(currentPosition(game)).toEqual(p);
    expect(moveCount(game)).toBe(0);
    // Can still redo after reset
    expect(canRedo(game)).toBe(true);
  });
});
