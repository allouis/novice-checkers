import { describe, it, expect } from 'vitest';
import {
  BLACK, WHITE, piece, position, crowned,
  squareToRowCol, rowColToSquare, adjacentSquares,
  jumpTarget, isKingRow, startingPosition,
  getPiece, isEmpty, setPiece, removePiece, switchTurn,
  moveDirections, oppositeColor,
} from '../../src/domain/board.js';

describe('piece', () => {
  it('creates a man', () => {
    const p = piece(BLACK);
    expect(p.color).toBe(BLACK);
    expect(p.king).toBe(false);
  });

  it('creates a king', () => {
    const p = piece(WHITE, true);
    expect(p.color).toBe(WHITE);
    expect(p.king).toBe(true);
  });

  it('is frozen', () => {
    const p = piece(BLACK);
    expect(() => { p.color = WHITE; }).toThrow();
  });
});

describe('crowned', () => {
  it('promotes a man to king', () => {
    const man = piece(BLACK);
    const king = crowned(man);
    expect(king.king).toBe(true);
    expect(king.color).toBe(BLACK);
  });

  it('returns same object for already-king', () => {
    const king = piece(WHITE, true);
    expect(crowned(king)).toBe(king);
  });
});

describe('squareToRowCol', () => {
  it('maps square 1 to row 0, col 1', () => {
    expect(squareToRowCol(1)).toEqual({ row: 0, col: 1 });
  });

  it('maps square 4 to row 0, col 7', () => {
    expect(squareToRowCol(4)).toEqual({ row: 0, col: 7 });
  });

  it('maps square 5 to row 1, col 0', () => {
    expect(squareToRowCol(5)).toEqual({ row: 1, col: 0 });
  });

  it('maps square 8 to row 1, col 6', () => {
    expect(squareToRowCol(8)).toEqual({ row: 1, col: 6 });
  });

  it('maps square 29 to row 7, col 0', () => {
    expect(squareToRowCol(29)).toEqual({ row: 7, col: 0 });
  });

  it('maps square 32 to row 7, col 6', () => {
    expect(squareToRowCol(32)).toEqual({ row: 7, col: 6 });
  });

  // Verify all 32 squares have valid positions
  it('all 32 squares map to valid row/col within 0-7', () => {
    for (let sq = 1; sq <= 32; sq++) {
      const { row, col } = squareToRowCol(sq);
      expect(row).toBeGreaterThanOrEqual(0);
      expect(row).toBeLessThanOrEqual(7);
      expect(col).toBeGreaterThanOrEqual(0);
      expect(col).toBeLessThanOrEqual(7);
    }
  });

  // No two squares map to the same row/col
  it('all 32 squares map to unique row/col pairs', () => {
    const seen = new Set();
    for (let sq = 1; sq <= 32; sq++) {
      const { row, col } = squareToRowCol(sq);
      const key = `${row},${col}`;
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    }
  });
});

describe('rowColToSquare', () => {
  it('round-trips with squareToRowCol for all 32 squares', () => {
    for (let sq = 1; sq <= 32; sq++) {
      const { row, col } = squareToRowCol(sq);
      expect(rowColToSquare(row, col)).toBe(sq);
    }
  });

  it('returns null for light squares', () => {
    // Row 0 even: playable cols 1,3,5,7. Col 0 should be null.
    expect(rowColToSquare(0, 0)).toBeNull();
    expect(rowColToSquare(0, 2)).toBeNull();
    // Row 1 odd: playable cols 0,2,4,6. Col 1 should be null.
    expect(rowColToSquare(1, 1)).toBeNull();
    expect(rowColToSquare(1, 3)).toBeNull();
  });

  it('returns null for out-of-bounds', () => {
    expect(rowColToSquare(-1, 0)).toBeNull();
    expect(rowColToSquare(0, 8)).toBeNull();
    expect(rowColToSquare(8, 0)).toBeNull();
  });
});

describe('adjacentSquares', () => {
  // Square 14 is in the middle of the board (row 3, col 2)
  it('square 14 has four neighbors', () => {
    const adj = adjacentSquares(14);
    expect(adj.fl).toBe(17); // row 4, col 1
    expect(adj.fr).toBe(18); // row 4, col 3
    expect(adj.bl).toBe(9);  // row 2, col 1
    expect(adj.br).toBe(10); // row 2, col 3
  });

  // Square 1 is top-left corner (row 0, col 1)
  it('square 1 has limited neighbors (top edge)', () => {
    const adj = adjacentSquares(1);
    expect(adj.fl).toBe(5);  // row 1, col 0
    expect(adj.fr).toBe(6);  // row 1, col 2
    expect(adj.bl).toBeNull(); // off board
    expect(adj.br).toBeNull(); // off board
  });

  // Square 4 is top-right corner (row 0, col 7)
  it('square 4 has limited neighbors (top-right)', () => {
    const adj = adjacentSquares(4);
    expect(adj.fl).toBe(8);   // row 1, col 6
    expect(adj.fr).toBeNull(); // off board (col 8)
    expect(adj.bl).toBeNull(); // off board
    expect(adj.br).toBeNull(); // off board
  });

  // Square 29 is bottom-left corner (row 7, col 0)
  it('square 29 has limited neighbors (bottom-left)', () => {
    const adj = adjacentSquares(29);
    expect(adj.fl).toBeNull(); // off board
    expect(adj.fr).toBeNull(); // off board
    expect(adj.bl).toBeNull(); // off board (col -1)
    expect(adj.br).toBe(25);  // row 6, col 1
  });

  // Square 5 is left edge (row 1, col 0)
  it('square 5 on left edge', () => {
    const adj = adjacentSquares(5);
    // Row 1, col 0: fl = row 2, col -1 → off board
    expect(adj.fl).toBeNull();
    expect(adj.fr).toBe(9);    // row 2, col 1
    expect(adj.bl).toBeNull(); // row 0, col -1 → off board
    expect(adj.br).toBe(1);   // row 0, col 1
  });
});

describe('jumpTarget', () => {
  it('returns mid and land for a valid jump direction', () => {
    // From square 14 (row 3, col 2), jump fl: mid=17 (row 4, col 1), land=21 (row 5, col 0)
    const result = jumpTarget(14, 'fl');
    expect(result).toEqual({ mid: 17, land: 21 });
  });

  it('returns null when mid is off board', () => {
    // From square 1, backward directions are off board
    expect(jumpTarget(1, 'bl')).toBeNull();
  });

  it('returns null when land is off board', () => {
    // From square 5 (row 1, col 0), fl goes to row 2 col -1 which is null
    expect(jumpTarget(5, 'fl')).toBeNull();
  });
});

describe('isKingRow', () => {
  it('black promotes on squares 29-32', () => {
    expect(isKingRow(28, BLACK)).toBe(false);
    expect(isKingRow(29, BLACK)).toBe(true);
    expect(isKingRow(32, BLACK)).toBe(true);
  });

  it('white promotes on squares 1-4', () => {
    expect(isKingRow(1, WHITE)).toBe(true);
    expect(isKingRow(4, WHITE)).toBe(true);
    expect(isKingRow(5, WHITE)).toBe(false);
  });
});

describe('startingPosition', () => {
  it('has 12 black men on squares 1-12', () => {
    const pos = startingPosition();
    for (let sq = 1; sq <= 12; sq++) {
      const p = getPiece(pos, sq);
      expect(p).not.toBeNull();
      expect(p.color).toBe(BLACK);
      expect(p.king).toBe(false);
    }
  });

  it('has 12 white men on squares 21-32', () => {
    const pos = startingPosition();
    for (let sq = 21; sq <= 32; sq++) {
      const p = getPiece(pos, sq);
      expect(p).not.toBeNull();
      expect(p.color).toBe(WHITE);
      expect(p.king).toBe(false);
    }
  });

  it('has empty squares 13-20', () => {
    const pos = startingPosition();
    for (let sq = 13; sq <= 20; sq++) {
      expect(isEmpty(pos, sq)).toBe(true);
    }
  });

  it('is black to move', () => {
    expect(startingPosition().turn).toBe(BLACK);
  });
});

describe('position mutation helpers', () => {
  it('setPiece returns new position', () => {
    const pos = position(new Map(), BLACK);
    const next = setPiece(pos, 14, piece(WHITE));
    expect(getPiece(next, 14).color).toBe(WHITE);
    expect(isEmpty(pos, 14)).toBe(true); // original unchanged
  });

  it('removePiece returns new position', () => {
    const pos = setPiece(position(new Map(), BLACK), 10, piece(BLACK));
    const next = removePiece(pos, 10);
    expect(isEmpty(next, 10)).toBe(true);
    expect(isEmpty(pos, 10)).toBe(false);
  });

  it('switchTurn flips the turn', () => {
    const pos = position(new Map(), BLACK);
    expect(switchTurn(pos).turn).toBe(WHITE);
    expect(switchTurn(switchTurn(pos)).turn).toBe(BLACK);
  });
});

describe('moveDirections', () => {
  it('black man moves forward (fl, fr)', () => {
    expect(moveDirections(piece(BLACK))).toEqual(['fl', 'fr']);
  });

  it('white man moves forward (bl, br)', () => {
    expect(moveDirections(piece(WHITE))).toEqual(['bl', 'br']);
  });

  it('king moves all four directions', () => {
    expect(moveDirections(piece(BLACK, true))).toEqual(['fl', 'fr', 'bl', 'br']);
    expect(moveDirections(piece(WHITE, true))).toEqual(['fl', 'fr', 'bl', 'br']);
  });
});
