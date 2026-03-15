import {
  BLACK, WHITE, piece, position, crowned, oppositeColor,
  getPiece, isEmpty, setPiece, removePiece, switchTurn,
  adjacentSquares, moveDirections, jumpTarget, isKingRow,
} from './board.js';

// Move = { path: number[], captured: number[] }
// path[0] = starting square, path[last] = ending square
// For simple moves: path = [from, to], captured = []
// For single jump: path = [from, to], captured = [jumped]
// For multi-jump: path = [from, sq1, sq2, ..., to], captured = [j1, j2, ...]

export function legalMoves(pos) {
  const jumps = allJumps(pos);
  if (jumps.length > 0) return jumps; // mandatory capture
  return allSimpleMoves(pos);
}

export function movesForPiece(pos, square) {
  const pc = getPiece(pos, square);
  if (!pc || pc.color !== pos.turn) return [];
  const jumps = jumpsForPiece(pos, square);
  // If ANY piece of the current player can jump, only jumps are legal
  const allJ = allJumps(pos);
  if (allJ.length > 0) return jumps;
  return simpleMoves(pos, square);
}

function allSimpleMoves(pos) {
  const moves = [];
  for (const [sq, pc] of pos.pieces) {
    if (pc.color !== pos.turn) continue;
    moves.push(...simpleMoves(pos, sq));
  }
  return moves;
}

function simpleMoves(pos, square) {
  const pc = getPiece(pos, square);
  if (!pc) return [];
  const dirs = moveDirections(pc);
  const moves = [];
  for (const dir of dirs) {
    const adj = adjacentSquares(square);
    const dest = adj[dir];
    if (dest !== null && isEmpty(pos, dest)) {
      moves.push({ path: [square, dest], captured: [] });
    }
  }
  return moves;
}

function allJumps(pos) {
  const jumps = [];
  for (const [sq, pc] of pos.pieces) {
    if (pc.color !== pos.turn) continue;
    jumps.push(...jumpsForPiece(pos, sq));
  }
  return jumps;
}

function jumpsForPiece(pos, square) {
  const pc = getPiece(pos, square);
  if (!pc) return [];
  return findJumpChains(pos, square, pc, new Set(), [square]);
}

function findJumpChains(pos, square, originalPiece, alreadyCaptured, pathSoFar) {
  const dirs = moveDirections(originalPiece);
  const results = [];

  for (const dir of dirs) {
    const target = jumpTarget(square, dir);
    if (!target) continue;
    const { mid, land } = target;

    // Mid must have an opponent piece not already captured
    const midPiece = getPiece(pos, mid);
    if (!midPiece || midPiece.color === originalPiece.color) continue;
    if (alreadyCaptured.has(mid)) continue;

    // Landing must be empty (or the starting square of this chain for looping —
    // but Rule 15 says same piece jumped once, so no loops)
    if (!isEmpty(pos, land)) continue;

    // Valid jump. Check if man reaches king row — stops there (Rule 14).
    const newCaptured = new Set(alreadyCaptured);
    newCaptured.add(mid);
    const newPath = [...pathSoFar, land];

    if (!originalPiece.king && isKingRow(land, originalPiece.color)) {
      // Man promotes — turn ends, no further jumps
      results.push({ path: newPath, captured: [...newCaptured] });
    } else {
      // Try continuing the chain
      const continuations = findJumpChains(pos, land, originalPiece, newCaptured, newPath);
      if (continuations.length === 0) {
        // No further jumps — this is a terminal jump
        results.push({ path: newPath, captured: [...newCaptured] });
      } else {
        results.push(...continuations);
      }
    }
  }

  return results;
}

export function applyMove(pos, move) {
  const { path, captured } = move;
  const from = path[0];
  const to = path[path.length - 1];
  let pc = getPiece(pos, from);

  let pieces = new Map(pos.pieces);
  pieces.delete(from);
  for (const cap of captured) {
    pieces.delete(cap);
  }

  // Promote if man reaches king row
  if (!pc.king && isKingRow(to, pc.color)) {
    pc = crowned(pc);
  }

  pieces.set(to, pc);
  return position(pieces, oppositeColor(pos.turn));
}

export function outcome(pos) {
  const moves = legalMoves(pos);
  if (moves.length === 0) {
    // Current player has no moves — they lose
    return pos.turn === BLACK ? 'white-wins' : 'black-wins';
  }
  return null;
}

// Resolve a notation move (from, to) to the matching legal Move object.
// Needed because the book's "2-18" could be a multi-jump with a specific path.
export function resolveNotationMove(pos, from, to) {
  const moves = legalMoves(pos);
  const matches = moves.filter(m => m.path[0] === from && m.path[m.path.length - 1] === to);
  if (matches.length === 1) return matches[0];
  if (matches.length === 0) return null;
  // Multiple paths with same from-to (rare) — return first
  return matches[0];
}
