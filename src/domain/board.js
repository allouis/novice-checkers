export const BLACK = 'black';
export const WHITE = 'white';

export function oppositeColor(color) {
  return color === BLACK ? WHITE : BLACK;
}

export function piece(color, king = false) {
  return Object.freeze({ color, king });
}

export function crowned(pc) {
  return pc.king ? pc : piece(pc.color, true);
}

// Position: immutable snapshot of a board state.
// pieces: Map<squareNumber, Piece>  (keys are 1-32)
// turn: BLACK | WHITE
export function position(pieces, turn) {
  return Object.freeze({
    pieces: new Map(pieces),
    turn,
  });
}

export function getPiece(pos, square) {
  return pos.pieces.get(square) ?? null;
}

export function isEmpty(pos, square) {
  return !pos.pieces.has(square);
}

export function setPiece(pos, square, pc) {
  const next = new Map(pos.pieces);
  next.set(square, pc);
  return position(next, pos.turn);
}

export function removePiece(pos, square) {
  const next = new Map(pos.pieces);
  next.delete(square);
  return position(next, pos.turn);
}

export function switchTurn(pos) {
  return position(pos.pieces, oppositeColor(pos.turn));
}

// --- Square geometry ---
// Standard American checkers: 8x8 board, 32 playable dark squares.
// Row 0 is the top (Black's back rank), row 7 is the bottom (White's back rank).
// Even rows (0,2,4,6): playable squares at cols 1,3,5,7
// Odd rows  (1,3,5,7): playable squares at cols 0,2,4,6

export function squareToRowCol(sq) {
  const idx = sq - 1;
  const row = Math.floor(idx / 4);
  const col = (idx % 4) * 2 + (row % 2 === 0 ? 1 : 0);
  return { row, col };
}

export function rowColToSquare(row, col) {
  if (row < 0 || row > 7 || col < 0 || col > 7) return null;
  // Check that it's a playable (dark) square
  if (row % 2 === 0) {
    // Even row: playable cols are 1,3,5,7
    if (col % 2 === 0) return null;
  } else {
    // Odd row: playable cols are 0,2,4,6
    if (col % 2 === 1) return null;
  }
  const colIndex = Math.floor(col / 2);
  return row * 4 + colIndex + 1;
}

// Directions from a square. "Forward" depends on piece color:
// Black moves toward row 7 (increasing row), White toward row 0 (decreasing row).
// Returns an object with four diagonal neighbors {fl, fr, bl, br} where
// f=forward, b=backward, l=left (decreasing col), r=right (increasing col).
// Each value is a square number or null if off-board.
export function adjacentSquares(square) {
  const { row, col } = squareToRowCol(square);
  return {
    fl: rowColToSquare(row + 1, col - 1), // forward-left (toward higher row, lower col)
    fr: rowColToSquare(row + 1, col + 1), // forward-right
    bl: rowColToSquare(row - 1, col - 1), // backward-left
    br: rowColToSquare(row - 1, col + 1), // backward-right
  };
}

// Get movement directions for a piece.
// For Black: forward = increasing row (fl, fr). Backward = bl, br.
// For White: forward = decreasing row (bl, br). Backward = fl, fr.
// Men move forward only. Kings move in all four directions.
export function moveDirections(pc) {
  if (pc.king) return ['fl', 'fr', 'bl', 'br'];
  return pc.color === BLACK ? ['fl', 'fr'] : ['bl', 'br'];
}

// Jump directions: same as move directions for finding what to jump over,
// but we also need the landing square (two steps in the same direction).
export function jumpTarget(square, direction) {
  const adj = adjacentSquares(square);
  const mid = adj[direction];
  if (mid === null) return null;
  const midAdj = adjacentSquares(mid);
  const land = midAdj[direction];
  return land !== null ? { mid, land } : null;
}

export function isKingRow(square, color) {
  // Black promotes at row 7 (squares 29-32)
  // White promotes at row 0 (squares 1-4)
  if (color === BLACK) return square >= 29 && square <= 32;
  if (color === WHITE) return square >= 1 && square <= 4;
  return false;
}

export function startingPosition() {
  const pieces = new Map();
  for (let sq = 1; sq <= 12; sq++) pieces.set(sq, piece(BLACK));
  for (let sq = 21; sq <= 32; sq++) pieces.set(sq, piece(WHITE));
  return position(pieces, BLACK);
}
