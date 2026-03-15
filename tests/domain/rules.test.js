import { describe, it, expect } from 'vitest';
import {
  BLACK, WHITE, piece, position, getPiece,
  startingPosition,
} from '../../src/domain/board.js';
import {
  legalMoves, movesForPiece, applyMove, outcome, resolveNotationMove,
} from '../../src/domain/rules.js';

function pos(placements, turn = BLACK) {
  const pieces = new Map();
  for (const [sq, pc] of placements) {
    pieces.set(sq, pc);
  }
  return position(pieces, turn);
}

const bm = piece(BLACK);
const wm = piece(WHITE);
const bk = piece(BLACK, true);
const wk = piece(WHITE, true);

describe('simple moves', () => {
  it('black man on square 9 can move to 13 and 14', () => {
    const p = pos([[9, bm]]);
    const moves = legalMoves(p);
    expect(moves).toHaveLength(2);
    const dests = moves.map(m => m.path[1]).sort((a, b) => a - b);
    expect(dests).toEqual([13, 14]);
  });

  it('white man on square 22 can move to 17 and 18', () => {
    const p = pos([[22, wm]], WHITE);
    const moves = legalMoves(p);
    expect(moves).toHaveLength(2);
    const dests = moves.map(m => m.path[1]).sort((a, b) => a - b);
    expect(dests).toEqual([17, 18]);
  });

  it('black king can move in all four directions', () => {
    const p = pos([[14, bk]]);
    const moves = legalMoves(p);
    // sq 14 (row 3, col 2): fl=17, fr=18, bl=9, br=10
    expect(moves).toHaveLength(4);
    const dests = moves.map(m => m.path[1]).sort((a, b) => a - b);
    expect(dests).toEqual([9, 10, 17, 18]);
  });

  it('man blocked by friendly piece cannot move there', () => {
    const p = pos([[9, bm], [14, bm]]);
    const moves = legalMoves(p);
    // sq 9 can go to 13 (but not 14 — occupied)
    // sq 14 can go to 17, 18
    expect(moves).toHaveLength(3);
  });

  it('starting position has 7 legal moves for black', () => {
    const moves = legalMoves(startingPosition());
    // Black men on 9,10,11,12 can move. 9→13,14; 10→14,15; 11→15,16; 12→16
    expect(moves).toHaveLength(7);
  });
});

describe('simple jumps', () => {
  it('black man jumps over white man', () => {
    // Black on 9, white on 14, square 18 empty
    const p = pos([[9, bm], [14, wm]]);
    const moves = legalMoves(p);
    expect(moves).toHaveLength(1);
    expect(moves[0].path).toEqual([9, 18]);
    expect(moves[0].captured).toEqual([14]);
  });

  it('cannot jump over friendly piece', () => {
    const p = pos([[9, bm], [14, bm]]);
    // 9 can go to 13 (simple move), 14 can go to 17,18
    // No jumps possible
    const moves = legalMoves(p);
    expect(moves.every(m => m.captured.length === 0)).toBe(true);
  });

  it('mandatory capture: simple move not available when jump exists', () => {
    // Black on 9 and 11. White on 14. 9 can jump 14→18. 11 has simple moves.
    const p = pos([[9, bm], [11, bm], [14, wm]]);
    const moves = legalMoves(p);
    // Only the jump is legal (mandatory capture)
    expect(moves).toHaveLength(1);
    expect(moves[0].captured).toEqual([14]);
  });

  it('cannot jump when landing square is occupied', () => {
    const p = pos([[9, bm], [14, wm], [18, bm]]);
    // Jump from 9 over 14 to 18, but 18 is occupied
    // No jump available; 9→13 simple move, 18→22,23 simple moves
    const moves = legalMoves(p);
    expect(moves.every(m => m.captured.length === 0)).toBe(true);
  });
});

describe('multi-jumps', () => {
  it('double jump', () => {
    // Black on 2, white on 6 and 13. Path: 2→9 (captures 6), 9→18 (captures 13)?
    // Wait let me think about this. sq 2 is row 0 col 3.
    // fl of 2: row 1, col 2 = sq 6. fr of 2: row 1, col 4 = sq 7.
    // Jump fl: mid=6, land = row 2, col 1 = sq 9. Then from 9, fl: mid=13, land=sq17? No.
    // sq 9 row 2 col 1. fl = row 3 col 0 = sq 13. Jump over 13 to row 4 col -1? Off board.
    // fr = row 3, col 2 = sq 14. No opponent on 14.
    // Hmm, let me pick better squares.
    // Black on 6, white on 10 and 15.
    // sq 6 row 1, col 2. fr = row 2, col 3 = sq 10. Jump over 10 to row 3 col 4 = sq 15.
    // But 15 has white! Can't land there.
    // Let me try: Black on 6, white on 10 and 14.
    // sq 6 → jump fr over 10 to sq 15 (row 3 col 4). Then from 15, fl = row 4 col 3 = sq 18.
    // Jump over 14? sq 14 is row 3 col 2. Not adjacent to 15 in any direction.
    // 15 fl = row 4 col 3 = 18, fr = row 4 col 5 = 19.
    // 15 bl = row 2 col 3 = 10 (already captured).
    // Not a clean double jump. Let me use a known pattern:
    // Black on 2, white on 7 and 11.
    // sq 2 row 0, col 3. fr = row 1, col 4 = sq 7.
    // Jump over 7 to row 2 col 5 = sq 11. But 11 has white!
    // OK let me just set up a clear double jump.
    // Black on 1, white on 6 and 14.
    // sq 1 row 0 col 1. fl = row 1 col 0 = sq 5. fr = row 1 col 2 = sq 6.
    // Jump fr over 6 to row 2 col 3 = sq 10. From 10, fr = row 3 col 4 = sq 15.
    // fl = row 3 col 2 = sq 14. Jump over 14 to row 4 col 1 = sq 17.
    const p = pos([[1, bm], [6, wm], [14, wm]]);
    const moves = legalMoves(p);
    expect(moves).toHaveLength(1);
    expect(moves[0].path).toEqual([1, 10, 17]);
    expect(moves[0].captured.sort((a, b) => a - b)).toEqual([6, 14]);
  });

  it('player can choose between multiple jump options', () => {
    // Black on 9, white on 14 and 13.
    // Jump over 14 to 18, OR jump over 13 to 17 (if valid).
    // sq 9 row 2 col 1. fl = row 3 col 0 = sq 13. fr = row 3 col 2 = sq 14.
    // Jump fl over 13: land = row 4 col -1 → off board. Not valid.
    // Jump fr over 14: land = row 4 col 3 = sq 18. Valid.
    // Only one jump. Let me use a king to get multiple options.
    const p = pos([[14, bk], [10, wm], [18, wm]]);
    // King on 14. Can jump backward over 10 to sq 7, or forward over 18 to sq 23.
    // 14 bl=9, br=10. Jump br over 10 to sq 7 (row 1 col 4). Sq 10 is at row 2 col 3.
    // jumpTarget(14, 'br'): mid=10, land = row 1, col 4 = sq 7. Valid.
    // 14 fl=17, fr=18. Jump fr over 18 to row 5 col 4 = sq 23.
    // jumpTarget(14, 'fr'): mid=18, land = row 5, col 4... row 5 odd, cols 0,2,4,6. col 4 → sq 5*4 + 4/2 + 1 = 23. Valid.
    const moves = legalMoves(p);
    expect(moves).toHaveLength(2);
  });
});

describe('king-row promotion', () => {
  it('man reaching king row is promoted', () => {
    // Black man on 26, can move to sq 30 or 31
    const p = pos([[26, bm]]);
    const moves = legalMoves(p);
    expect(moves).toHaveLength(2);
    // Apply a move to 30
    const move = moves.find(m => m.path[1] === 30);
    const next = applyMove(p, move);
    const promoted = getPiece(next, 30);
    expect(promoted.king).toBe(true);
    expect(promoted.color).toBe(BLACK);
  });

  it('white man promoted on row 0', () => {
    const p = pos([[5, wm]], WHITE);
    const moves = legalMoves(p);
    // sq 5 row 1, col 0. bl = row 0, col -1 = off board. br = row 0, col 1 = sq 1.
    expect(moves).toHaveLength(1);
    const next = applyMove(p, moves[0]);
    expect(getPiece(next, 1).king).toBe(true);
  });

  it('man stops jumping at king row (Rule 14)', () => {
    // Black man on 22, white on 26. Jump to 31 (king row) — must stop.
    // sq 22 row 5 col 2. fl = row 6 col 1 = sq 26? No...
    // Let me recalculate. sq 22: idx=21, row=5, col = (21%4)*2 + (5%2==0?1:0) = 1*2+0 = 2.
    // row 5 col 2. fl = row 6 col 1 = sq 25. fr = row 6 col 3 = sq 26.
    // Jump over 26: land = row 7 col 4. Row 7 odd, cols 0,2,4,6. 4/2=2. sq = 7*4+2+1 = 31.
    const p = pos([[22, bm], [26, wm]]);
    const moves = legalMoves(p);
    expect(moves).toHaveLength(1);
    expect(moves[0].path).toEqual([22, 31]);
    // Even if there was another piece to jump from 31, man stops at king row
    // Let's verify with an additional piece
    const p2 = pos([[22, bm], [26, wm], [27, wm]]);
    const moves2 = legalMoves(p2);
    // Should still be one move: 22→31 (stops at king row), no continuation
    expect(moves2).toHaveLength(1);
    expect(moves2[0].path).toEqual([22, 31]);
    expect(moves2[0].captured).toEqual([26]);
  });
});

describe('applyMove', () => {
  it('simple move: piece moves, turn switches', () => {
    const p = pos([[9, bm]]);
    const move = { path: [9, 14], captured: [] };
    const next = applyMove(p, move);
    expect(getPiece(next, 9)).toBeNull();
    expect(getPiece(next, 14).color).toBe(BLACK);
    expect(next.turn).toBe(WHITE);
  });

  it('jump: captured piece removed', () => {
    const p = pos([[9, bm], [14, wm]]);
    const move = { path: [9, 18], captured: [14] };
    const next = applyMove(p, move);
    expect(getPiece(next, 9)).toBeNull();
    expect(getPiece(next, 14)).toBeNull();
    expect(getPiece(next, 18).color).toBe(BLACK);
  });
});

describe('outcome', () => {
  it('returns null for starting position', () => {
    expect(outcome(startingPosition())).toBeNull();
  });

  it('white wins when black has no pieces', () => {
    const p = pos([[22, wm]], BLACK);
    // Black has no pieces, no moves
    expect(outcome(p)).toBe('white-wins');
  });

  it('black wins when white has no moves', () => {
    // White man on 4 (row 0, col 7). Backward moves for white: bl=row -1→off, br=row -1→off.
    // Wait, white man moves bl,br (toward row 0). On row 0, both are off board.
    // Actually sq 4 is already king row for white so it'd be a king. Let's use a blocked scenario:
    // White man on 29 blocked on all sides.
    // sq 29 (row 7 col 0): white moves toward row 0, so bl=row 6 col -1=off, br=row 6 col 1=sq 25.
    // We need sq 25 occupied AND the jump over 25 also blocked.
    const p = pos([[29, wm], [25, bm], [22, bm]], WHITE);
    // br→25 (occupied), jump over 25 to sq 22 (also occupied). bl→off board. No moves.
    expect(outcome(p)).toBe('black-wins');
  });
});

describe('resolveNotationMove', () => {
  it('finds a simple move', () => {
    const p = pos([[9, bm]]);
    const move = resolveNotationMove(p, 9, 14);
    expect(move).not.toBeNull();
    expect(move.path).toEqual([9, 14]);
  });

  it('finds a jump move', () => {
    const p = pos([[9, bm], [14, wm]]);
    const move = resolveNotationMove(p, 9, 18);
    expect(move).not.toBeNull();
    expect(move.captured).toEqual([14]);
  });

  it('returns null for illegal move', () => {
    const p = pos([[9, bm]]);
    expect(resolveNotationMove(p, 9, 18)).toBeNull(); // no piece to jump
  });
});

describe('book positions', () => {
  it('Diagram 5: 1K v 1K — Black king on 31, White king on 23, Black to play', () => {
    // From the book: "31-27 23-32. White wins."
    const p = pos([[31, bk], [23, wk]]);
    const moves = legalMoves(p);
    // Black king on 31 (row 7, col 4). Can move to: bl=row 6 col 3=27, br=row 6 col 5=28.
    // Also fl=row 8 → off, fr=row 8 → off. So only bl and br.
    expect(moves.length).toBeGreaterThanOrEqual(2);
    const m = resolveNotationMove(p, 31, 27);
    expect(m).not.toBeNull();
    // After 31-27, white plays 23-32
    const next = applyMove(p, m);
    expect(next.turn).toBe(WHITE);
    const wm2 = resolveNotationMove(next, 23, 32);
    expect(wm2).not.toBeNull();
    // After 23-32, white captured black's king (jumped 27)
    expect(wm2.captured).toEqual([27]);
  });
});
