import { describe, it, expect } from 'vitest';
import {
  createRepertoireState, stepForward, stepBack,
  enterVariation, backToParent, availableBranches,
  currentPosition, getNode, totalMoveSteps, canGoBack,
  breadcrumbPath, currentMoveText,
} from '../../src/application/repertoire.js';
import { startingPosition, getPiece, BLACK } from '../../src/domain/board.js';

const testTree = {
  trunk: {
    id: 'trunk',
    label: 'Trunk',
    lessonId: 28,
    moves: '11-15 23-19; 8-11 22-17',
    branchPoints: [
      { atMoveIndex: 1, variationId: 'v1', label: 'V1' },
    ],
  },
  variations: {
    v1: {
      id: 'v1',
      label: 'Variation 1',
      parentId: 'trunk',
      moves: '9-14 27-23',
      branchPoints: [],
    },
  },
};

describe('repertoire navigation', () => {
  it('starts at trunk position', () => {
    const state = createRepertoireState(testTree, 'white');
    expect(state.currentNodeId).toBe('trunk');
    expect(state.moveIndex).toBe(-1);
    expect(canGoBack(state)).toBe(false);
  });

  it('steps forward through trunk moves', () => {
    let state = createRepertoireState(testTree, 'white');
    expect(totalMoveSteps(state)).toBe(4); // 11-15, 23-19, 8-11, 22-17

    state = stepForward(state);
    expect(state.moveIndex).toBe(0);
    expect(currentMoveText(state)).toBe('11-15');

    state = stepForward(state);
    expect(state.moveIndex).toBe(1);
    expect(currentMoveText(state)).toBe('23-19');
  });

  it('steps back', () => {
    let state = createRepertoireState(testTree, 'white');
    state = stepForward(state);
    state = stepForward(state);
    state = stepBack(state);
    expect(state.moveIndex).toBe(0);
  });

  it('enters a variation', () => {
    let state = createRepertoireState(testTree, 'white');
    state = stepForward(state); // move 0
    state = stepForward(state); // move 1 — branch point for V1

    const branches = availableBranches(state);
    expect(branches).toHaveLength(1);
    expect(branches[0].variationId).toBe('v1');

    state = enterVariation(state, 'v1');
    expect(state.currentNodeId).toBe('v1');
    expect(state.moveIndex).toBe(-1);
    expect(canGoBack(state)).toBe(true);
  });

  it('returns to parent from variation', () => {
    let state = createRepertoireState(testTree, 'white');
    state = stepForward(state);
    state = stepForward(state);
    state = enterVariation(state, 'v1');
    state = backToParent(state);
    expect(state.currentNodeId).toBe('trunk');
    expect(state.moveIndex).toBe(1);
  });

  it('computes position correctly at trunk start', () => {
    const state = createRepertoireState(testTree, 'white');
    const pos = currentPosition(state);
    // Should be starting position
    expect(pos.pieces.size).toBe(24);
    expect(pos.turn).toBe(BLACK);
  });

  it('computes position after moves', () => {
    let state = createRepertoireState(testTree, 'white');
    state = stepForward(state); // 11-15
    const pos = currentPosition(state);
    // Piece moved from 11 to 15
    expect(getPiece(pos, 11)).toBeNull();
    expect(getPiece(pos, 15)).not.toBeNull();
    expect(getPiece(pos, 15).color).toBe(BLACK);
  });

  it('breadcrumb path tracks navigation', () => {
    let state = createRepertoireState(testTree, 'white');
    state = stepForward(state);
    state = stepForward(state);
    state = enterVariation(state, 'v1');

    const path = breadcrumbPath(state);
    expect(path).toHaveLength(2);
    expect(path[0].label).toBe('Trunk');
    expect(path[1].label).toBe('Variation 1');
  });
});
