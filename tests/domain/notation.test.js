import { describe, it, expect } from 'vitest';
import {
  parseMove, parseMoveSequence, formatMove, formatMoveSequence,
} from '../../src/domain/notation.js';

describe('parseMove', () => {
  it('parses simple move', () => {
    expect(parseMove('15-18')).toEqual({ from: 15, to: 18, annotation: null });
  });

  it('parses move with ! annotation', () => {
    expect(parseMove('17-14!')).toEqual({ from: 17, to: 14, annotation: '!' });
  });

  it('parses move with !! annotation', () => {
    expect(parseMove('15-10!!')).toEqual({ from: 15, to: 10, annotation: '!!' });
  });

  it('parses move with ? annotation', () => {
    expect(parseMove('22-17?')).toEqual({ from: 22, to: 17, annotation: '?' });
  });

  it('parses move with ?! annotation', () => {
    expect(parseMove('10-15?!')).toEqual({ from: 10, to: 15, annotation: '?!' });
  });

  it('handles whitespace', () => {
    expect(parseMove('  15-18  ')).toEqual({ from: 15, to: 18, annotation: null });
  });

  it('returns null for invalid input', () => {
    expect(parseMove('abc')).toBeNull();
    expect(parseMove('')).toBeNull();
  });
});

describe('parseMoveSequence', () => {
  it('parses semicolon-separated moves', () => {
    const moves = parseMoveSequence('15-18; 22-17; 9-14');
    expect(moves).toHaveLength(3);
    expect(moves[0]).toEqual({ from: 15, to: 18, annotation: null });
    expect(moves[1]).toEqual({ from: 22, to: 17, annotation: null });
    expect(moves[2]).toEqual({ from: 9, to: 14, annotation: null });
  });

  it('parses space-separated moves', () => {
    const moves = parseMoveSequence('20-16 2-6 15-11');
    expect(moves).toHaveLength(3);
  });

  it('parses mixed separators with commentary', () => {
    const moves = parseMoveSequence('10-14 22-18; 12-16 (At this stage) 24-20; 16-19!');
    expect(moves).toHaveLength(5);
    expect(moves[4].annotation).toBe('!');
  });

  it('extracts moves from complex book text', () => {
    const text = '31-27 (Or 31-26 23-30) 23-32';
    const moves = parseMoveSequence(text);
    // Should get: 31-27, 31-26, 23-30, 23-32
    expect(moves).toHaveLength(4);
    expect(moves[0]).toEqual({ from: 31, to: 27, annotation: null });
    expect(moves[3]).toEqual({ from: 23, to: 32, annotation: null });
  });

  it('handles annotated moves in sequence', () => {
    const moves = parseMoveSequence('8-11!; 25-22 11-15!');
    expect(moves).toHaveLength(3);
    expect(moves[0].annotation).toBe('!');
    expect(moves[2].annotation).toBe('!');
  });
});

describe('formatMove', () => {
  it('formats plain move', () => {
    expect(formatMove({ from: 15, to: 18, annotation: null })).toBe('15-18');
  });

  it('formats annotated move', () => {
    expect(formatMove({ from: 17, to: 14, annotation: '!' })).toBe('17-14!');
  });
});

describe('formatMoveSequence', () => {
  it('formats multiple moves', () => {
    const moves = [
      { from: 15, to: 18, annotation: null },
      { from: 22, to: 17, annotation: '!' },
    ];
    expect(formatMoveSequence(moves)).toBe('15-18 22-17!');
  });
});
