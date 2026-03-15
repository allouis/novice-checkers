import { parseDiagram } from '../infrastructure/diagram-parser.js';
import { parseMoveSequence } from '../domain/notation.js';
import { resolveNotationMove, applyMove, movesForPiece } from '../domain/rules.js';
import { getDiagramById } from '../infrastructure/content.js';

export function createPuzzleState(puzzle) {
  const result = getDiagramById(puzzle.diagramId);
  if (!result) return null;

  const { diagram } = result;
  const turn = puzzle.objective.toLowerCase().startsWith('white') ? 'white' : 'black';
  const initialPosition = parseDiagram(diagram.lines, turn);

  return {
    puzzle,
    initialPosition,
    currentPosition: initialPosition,
    status: 'unsolved', // 'unsolved' | 'incorrect' | 'solved' | 'revealed'
    attempts: 0,
    showHint: false,
  };
}

export function attemptMove(state, square, selectedSquare) {
  if (state.status === 'solved' || state.status === 'revealed') return state;

  const pos = state.currentPosition;
  const moves = movesForPiece(pos, selectedSquare);
  const move = moves.find(m => m.path[m.path.length - 1] === square);
  if (!move) return state;

  const { correctFirstMove } = state.puzzle;
  if (move.path[0] === correctFirstMove.from &&
      move.path[move.path.length - 1] === correctFirstMove.to) {
    return {
      ...state,
      currentPosition: applyMove(pos, move),
      status: 'solved',
    };
  }

  return {
    ...state,
    status: 'incorrect',
    attempts: state.attempts + 1,
  };
}

export function requestHint(state) {
  return { ...state, showHint: true };
}

export function revealSolution(state) {
  return { ...state, status: 'revealed' };
}

export function resetPuzzle(state) {
  return {
    ...state,
    currentPosition: state.initialPosition,
    status: 'unsolved',
    attempts: 0,
    showHint: false,
  };
}
