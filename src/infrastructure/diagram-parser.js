import { BLACK, WHITE, piece, position } from '../domain/board.js';

// Parse a complete diagram block from the book's ASCII art.
// Takes an array of 10 strings (top border, 8 board rows, bottom border).
// Returns a Position (default turn is BLACK; caller sets turn from context).
export function parseDiagram(lines, turn = BLACK) {
  const pieces = new Map();

  // Process rows 1-8 (lines[1] through lines[8])
  for (let i = 1; i <= 8; i++) {
    const row = lines[i];
    // Strip T prefix and U/EU suffix
    const inner = stripBorders(row);
    parseDiagramRow(inner, pieces);
  }

  return position(pieces, turn);
}

function stripBorders(row) {
  // Rows start with T and end with U or EU
  const start = row.indexOf('T');
  const end = row.lastIndexOf('U');
  if (start === -1 || end === -1) return row;
  return row.slice(start + 1, end);
}

function parseDiagramRow(inner, pieces) {
  let pos = 0;
  while (pos < inner.length) {
    const ch = inner[pos];
    if (ch === ' ') {
      pos++;
      continue;
    }
    if (ch === 'E' || ch === 'A' || ch === 'B' || ch === 'C' || ch === 'D') {
      const pieceChar = ch;
      pos++;
      const result = parseSquareNumber(inner, pos);
      if (result) {
        pos += result.charsConsumed;
        if (pieceChar !== 'E') {
          pieces.set(result.number, pieceFromChar(pieceChar));
        }
      }
    } else {
      pos++;
    }
  }
}

export function parseSquareNumber(str, pos) {
  if (pos >= str.length) return null;
  const ch = str[pos];

  if (ch === '!') {
    // !0=10, !1=11, ..., !9=19
    if (pos + 1 < str.length) {
      const digit = parseInt(str[pos + 1], 10);
      if (!isNaN(digit)) return { number: 10 + digit, charsConsumed: 2 };
    }
    return null;
  }
  if (ch === '@') {
    // @0=20, @1=21, ..., @9=29
    if (pos + 1 < str.length) {
      const digit = parseInt(str[pos + 1], 10);
      if (!isNaN(digit)) return { number: 20 + digit, charsConsumed: 2 };
    }
    return null;
  }
  if (ch === '#') {
    // #0=30, #1=31, #2=32
    if (pos + 1 < str.length) {
      const digit = parseInt(str[pos + 1], 10);
      if (!isNaN(digit)) return { number: 30 + digit, charsConsumed: 2 };
    }
    return null;
  }

  const digit = parseInt(ch, 10);
  if (!isNaN(digit) && digit >= 1 && digit <= 9) {
    return { number: digit, charsConsumed: 1 };
  }

  return null;
}

function pieceFromChar(ch) {
  switch (ch) {
    case 'A': return piece(BLACK, false);
    case 'B': return piece(WHITE, false);
    case 'C': return piece(BLACK, true);
    case 'D': return piece(WHITE, true);
    default: return null;
  }
}

// Extract all diagram blocks from the book text.
// Returns an array of { diagramNumber, lines: string[10], objective: string }
export function extractDiagrams(text) {
  const lines = text.split('\n');
  const diagrams = [];

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^Diagram (\d+)/);
    if (!match) continue;
    const diagramNumber = parseInt(match[1], 10);

    // Find the next line starting with Q (top border)
    let start = -1;
    for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
      if (lines[j].startsWith('Q')) {
        start = j;
        break;
      }
    }
    if (start === -1) continue;

    // Collect 10 lines
    if (start + 10 > lines.length) continue;
    const diagramLines = lines.slice(start, start + 10);

    // Look for objective line after the diagram (within next 3 lines)
    let objective = '';
    for (let j = start + 10; j < Math.min(start + 13, lines.length); j++) {
      const objMatch = lines[j].match(/^(Black|White|Either).*(Play|Draw|Win|resigns)/i);
      if (objMatch) {
        objective = lines[j].trim();
        break;
      }
    }

    diagrams.push({ diagramNumber, lines: diagramLines, objective });
  }

  return diagrams;
}
