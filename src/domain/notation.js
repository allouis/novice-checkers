// Parse a single move token like "15-18", "17-14!", "9-13?!"
// Returns { from, to, annotation }
export function parseMove(str) {
  const trimmed = str.trim();
  const match = trimmed.match(/^(\d+)-(\d+)([!?]{0,2})$/);
  if (!match) return null;
  return {
    from: parseInt(match[1], 10),
    to: parseInt(match[2], 10),
    annotation: match[3] || null,
  };
}

// Parse a move sequence from the book's notation.
// The book uses formats like:
//   "15-18; 22-17; 9-14 28-24"
//   "10-14 22-18; 12-16 (comment) 24-20"
// Semicolons appear after White's moves by convention, but we don't
// rely on that. We just extract all "N-N" tokens in order.
export function parseMoveSequence(str) {
  const moves = [];
  const regex = /(\d+-\d+[!?]{0,2})/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    const parsed = parseMove(match[1]);
    if (parsed) moves.push(parsed);
  }
  return moves;
}

export function formatMove(move) {
  const base = `${move.from}-${move.to}`;
  return move.annotation ? base + move.annotation : base;
}

export function formatMoveSequence(moves) {
  return moves.map(formatMove).join(' ');
}
