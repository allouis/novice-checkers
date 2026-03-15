import { parseDiagram } from '../infrastructure/diagram-parser.js';
import { parseMoveSequence } from '../domain/notation.js';
import { resolveNotationMove, applyMove } from '../domain/rules.js';
import { WHITE } from '../domain/board.js';

export function createLessonState(lesson) {
  return {
    lesson,
    currentDiagramIndex: 0,
    moveStepIndex: -1, // -1 = at diagram's starting position
  };
}

export function currentDiagram(state) {
  return state.lesson.diagrams[state.currentDiagramIndex] ?? null;
}

export function currentPosition(state) {
  const diagram = currentDiagram(state);
  if (!diagram) return null;

  const turn = parseTurnFromObjective(diagram.objective);
  let pos = parseDiagram(diagram.lines, turn);

  if (state.moveStepIndex < 0) return pos;

  const moves = parseMoveSequence(diagram.continuation);
  for (let i = 0; i <= state.moveStepIndex && i < moves.length; i++) {
    const resolved = resolveNotationMove(pos, moves[i].from, moves[i].to);
    if (!resolved) break; // couldn't resolve — stop here
    pos = applyMove(pos, resolved);
  }

  return pos;
}

export function currentMoveAnnotation(state) {
  if (state.moveStepIndex < 0) return null;
  const diagram = currentDiagram(state);
  if (!diagram) return null;
  const moves = parseMoveSequence(diagram.continuation);
  if (state.moveStepIndex >= moves.length) return null;
  return moves[state.moveStepIndex].annotation;
}

export function currentCommentary(state) {
  const diagram = currentDiagram(state);
  if (!diagram || !diagram.commentary) return null;
  return diagram.commentary[state.moveStepIndex] ?? null;
}

export function currentMoveText(state) {
  if (state.moveStepIndex < 0) return null;
  const diagram = currentDiagram(state);
  if (!diagram) return null;
  const moves = parseMoveSequence(diagram.continuation);
  if (state.moveStepIndex >= moves.length) return null;
  const m = moves[state.moveStepIndex];
  return `${m.from}-${m.to}${m.annotation || ''}`;
}

export function totalMoveSteps(state) {
  const diagram = currentDiagram(state);
  if (!diagram || !diagram.continuation) return 0;
  return parseMoveSequence(diagram.continuation).length;
}

export function stepForward(state) {
  const total = totalMoveSteps(state);
  if (state.moveStepIndex >= total - 1) return state;
  return { ...state, moveStepIndex: state.moveStepIndex + 1 };
}

export function stepBack(state) {
  if (state.moveStepIndex < 0) return state;
  return { ...state, moveStepIndex: state.moveStepIndex - 1 };
}

export function goToDiagram(state, diagramIndex) {
  if (diagramIndex < 0 || diagramIndex >= state.lesson.diagrams.length) return state;
  return { ...state, currentDiagramIndex: diagramIndex, moveStepIndex: -1 };
}

export function nextDiagram(state) {
  return goToDiagram(state, state.currentDiagramIndex + 1);
}

export function prevDiagram(state) {
  return goToDiagram(state, state.currentDiagramIndex - 1);
}

export function diagramCount(state) {
  return state.lesson.diagrams.length;
}

export function hasNextDiagram(state) {
  return state.currentDiagramIndex < state.lesson.diagrams.length - 1;
}

export function hasPrevDiagram(state) {
  return state.currentDiagramIndex > 0;
}

function parseTurnFromObjective(objective) {
  if (!objective) return WHITE;
  const lower = objective.toLowerCase();
  if (lower.includes('white to play') || lower.includes('white to move')) return WHITE;
  if (lower.includes('black to play') || lower.includes('black to move')) return 'black';
  if (lower.startsWith('black')) return 'black';
  if (lower.startsWith('white')) return WHITE;
  if (lower.includes('either')) return 'black'; // "either side" — black goes first conventionally
  return WHITE;
}
