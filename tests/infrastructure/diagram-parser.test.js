import { describe, it, expect } from 'vitest';
import { BLACK, WHITE, getPiece } from '../../src/domain/board.js';
import { parseDiagram, parseSquareNumber, extractDiagrams } from '../../src/infrastructure/diagram-parser.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('parseSquareNumber', () => {
  it('parses single digits', () => {
    expect(parseSquareNumber('1', 0)).toEqual({ number: 1, charsConsumed: 1 });
    expect(parseSquareNumber('9', 0)).toEqual({ number: 9, charsConsumed: 1 });
  });

  it('parses !N as 10+N', () => {
    expect(parseSquareNumber('!0', 0)).toEqual({ number: 10, charsConsumed: 2 });
    expect(parseSquareNumber('!5', 0)).toEqual({ number: 15, charsConsumed: 2 });
    expect(parseSquareNumber('!9', 0)).toEqual({ number: 19, charsConsumed: 2 });
  });

  it('parses @N as 20+N', () => {
    expect(parseSquareNumber('@0', 0)).toEqual({ number: 20, charsConsumed: 2 });
    expect(parseSquareNumber('@4', 0)).toEqual({ number: 24, charsConsumed: 2 });
  });

  it('parses #N as 30+N', () => {
    expect(parseSquareNumber('#0', 0)).toEqual({ number: 30, charsConsumed: 2 });
    expect(parseSquareNumber('#2', 0)).toEqual({ number: 32, charsConsumed: 2 });
  });
});

describe('parseDiagram', () => {
  it('parses Diagram 1 (starting position)', () => {
    const lines = [
      'QRRRRRRRRS',
      'TEA1EA2EA3EA4U',
      'TA5EA6EA7EA8EU',
      'TEA9EA!0EA!1EA!2U',
      'T !3E !4E !5E !6EU',
      'TE !7E !8E !9E @0U',
      'TB@1EB@2EB@3EB@4EU',
      'TEB@5EB@6EB@7EB@8U',
      'TB@9EB#0EB#1EB#2EU',
      'VWWWWWWWWX',
    ];
    const pos = parseDiagram(lines);

    // Black men on 1-12
    for (let sq = 1; sq <= 12; sq++) {
      const pc = getPiece(pos, sq);
      expect(pc, `square ${sq} should have black man`).not.toBeNull();
      expect(pc.color).toBe(BLACK);
      expect(pc.king).toBe(false);
    }

    // Squares 13-20 empty
    for (let sq = 13; sq <= 20; sq++) {
      expect(getPiece(pos, sq), `square ${sq} should be empty`).toBeNull();
    }

    // White men on 21-32
    for (let sq = 21; sq <= 32; sq++) {
      const pc = getPiece(pos, sq);
      expect(pc, `square ${sq} should have white man`).not.toBeNull();
      expect(pc.color).toBe(WHITE);
      expect(pc.king).toBe(false);
    }
  });

  it('parses Diagram 4 (empty board)', () => {
    const lines = [
      'QRRRRRRRRS',
      'TE 1E 2E 3E 4U',
      'T 5E 6E 7E 8EU',
      'TE 9E !0E !1E !2U',
      'T !3E !4E !5E !6EU',
      'TE !7E !8E !9E @0U',
      'T @1E @2E @3E @4EU',
      'TE @5E @6E @7E @8U',
      'T @9E #0E #1E #2EU',
      'VWWWWWWWWX',
    ];
    const pos = parseDiagram(lines);
    expect(pos.pieces.size).toBe(0);
  });

  it('parses Diagram 5 (two kings)', () => {
    const lines = [
      'QRRRRRRRRS',
      'TE 1E 2E 3E 4U',
      'T 5E 6E 7E 8EU',
      'TE 9E !0E !1E !2U',
      'T !3E !4E !5E !6EU',
      'TE !7E !8E !9E @0U',
      'T @1E @2ED@3E @4EU',
      'TE @5E @6E @7E @8U',
      'T @9E #0EC#1E #2EU',
      'VWWWWWWWWX',
    ];
    const pos = parseDiagram(lines);
    expect(pos.pieces.size).toBe(2);

    const wk = getPiece(pos, 23);
    expect(wk).not.toBeNull();
    expect(wk.color).toBe(WHITE);
    expect(wk.king).toBe(true);

    const bk = getPiece(pos, 31);
    expect(bk).not.toBeNull();
    expect(bk.color).toBe(BLACK);
    expect(bk.king).toBe(true);
  });

  it('parses a mixed position (Diagram 10: 2K v 1K)', () => {
    const lines = [
      'QRRRRRRRRS',
      'TE 1E 2E 3E 4U',
      'TD5ED6E 7E 8EU',
      'TE 9E !0E !1E !2U',
      'T !3E !4EC!5E !6EU',
      'TE !7E !8E !9E @0U',
      'T @1E @2E @3E @4EU',
      'TE @5E @6E @7E @8U',
      'T @9E #0E #1E #2EU',
      'VWWWWWWWWX',
    ];
    const pos = parseDiagram(lines, WHITE);

    expect(pos.pieces.size).toBe(3);
    expect(pos.turn).toBe(WHITE);

    // White kings on 5 and 6
    expect(getPiece(pos, 5).color).toBe(WHITE);
    expect(getPiece(pos, 5).king).toBe(true);
    expect(getPiece(pos, 6).color).toBe(WHITE);
    expect(getPiece(pos, 6).king).toBe(true);

    // Black king on 15
    expect(getPiece(pos, 15).color).toBe(BLACK);
    expect(getPiece(pos, 15).king).toBe(true);
  });
});

describe('extractDiagrams from book.txt', () => {
  let bookText;
  try {
    bookText = readFileSync(resolve('book.txt'), 'utf-8');
  } catch {
    bookText = null;
  }

  it('finds diagrams in the book text', () => {
    if (!bookText) return; // skip if book.txt not available
    const diagrams = extractDiagrams(bookText);
    expect(diagrams.length).toBeGreaterThan(100);
    // Diagram 1 should be the starting position
    const d1 = diagrams.find(d => d.diagramNumber === 1);
    expect(d1).toBeDefined();
    expect(d1.lines).toHaveLength(10);
    expect(d1.lines[0]).toMatch(/^Q/);
  });

  it('parses all extracted diagrams without error', () => {
    if (!bookText) return;
    const diagrams = extractDiagrams(bookText);
    for (const d of diagrams) {
      const pos = parseDiagram(d.lines);
      // Every diagram should produce a valid position
      expect(pos.pieces).toBeDefined();
      // Starting position has 24 pieces, others vary
      if (d.diagramNumber === 1) {
        expect(pos.pieces.size).toBe(24);
      }
    }
  });

  it('extracts objectives for diagrams', () => {
    if (!bookText) return;
    const diagrams = extractDiagrams(bookText);
    const d5 = diagrams.find(d => d.diagramNumber === 5);
    expect(d5).toBeDefined();
    expect(d5.objective).toMatch(/Black to Play/i);
  });
});
