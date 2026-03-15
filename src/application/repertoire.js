import { startingPosition } from '../domain/board.js';
import { parseMoveSequence } from '../domain/notation.js';
import { resolveNotationMove, applyMove } from '../domain/rules.js';

// RepertoireState manages navigation through the Chapter 6 variation tree.
// tree: { trunk: TreeNode, variations: { [id]: TreeNode } }
// TreeNode: { id, lessonId, moves, diagramId, branchPoints, label?, openingName?, parentId? }
// branchPoints: [{ atMoveIndex, variationId, label }]

export function createRepertoireState(tree, side) {
  return {
    tree,
    side, // 'white' | 'black'
    currentNodeId: 'trunk',
    moveIndex: -1,
    breadcrumb: [], // stack of { nodeId, moveIndex }
  };
}

export function getNode(state) {
  if (state.currentNodeId === 'trunk') return state.tree.trunk;
  return state.tree.variations[state.currentNodeId] ?? null;
}

export function getNodeMoves(state) {
  const node = getNode(state);
  if (!node || !node.moves) return [];
  return parseMoveSequence(node.moves);
}

export function totalMoveSteps(state) {
  return getNodeMoves(state).length;
}

export function stepForward(state) {
  const total = totalMoveSteps(state);
  if (state.moveIndex >= total - 1) return state;
  return { ...state, moveIndex: state.moveIndex + 1 };
}

export function stepBack(state) {
  if (state.moveIndex < 0) return state;
  return { ...state, moveIndex: state.moveIndex - 1 };
}

export function enterVariation(state, variationId) {
  return {
    ...state,
    breadcrumb: [...state.breadcrumb, { nodeId: state.currentNodeId, moveIndex: state.moveIndex }],
    currentNodeId: variationId,
    moveIndex: -1,
  };
}

export function backToParent(state) {
  if (state.breadcrumb.length === 0) return state;
  const parent = state.breadcrumb[state.breadcrumb.length - 1];
  return {
    ...state,
    breadcrumb: state.breadcrumb.slice(0, -1),
    currentNodeId: parent.nodeId,
    moveIndex: parent.moveIndex,
  };
}

export function availableBranches(state) {
  const node = getNode(state);
  if (!node || !node.branchPoints) return [];
  return node.branchPoints.filter(bp => bp.atMoveIndex === state.moveIndex);
}

export function breadcrumbPath(state) {
  const path = [];
  for (const bc of state.breadcrumb) {
    const node = bc.nodeId === 'trunk' ? state.tree.trunk : state.tree.variations[bc.nodeId];
    if (node) path.push({ id: bc.nodeId, label: node.label || node.id });
  }
  const current = getNode(state);
  if (current) path.push({ id: state.currentNodeId, label: current.label || state.currentNodeId });
  return path;
}

// Compute the current position by replaying moves through the breadcrumb chain.
// This starts from the opening position and replays:
// 1. For each breadcrumb entry: the node's moves up to the branch point
// 2. Then the current node's moves up to moveIndex
export function currentPosition(state) {
  let pos = startingPosition();

  // Replay breadcrumb
  for (const bc of state.breadcrumb) {
    const node = bc.nodeId === 'trunk' ? state.tree.trunk : state.tree.variations[bc.nodeId];
    if (!node || !node.moves) continue;
    const moves = parseMoveSequence(node.moves);
    // Find the branch point that led to the next entry
    const nextInBreadcrumb = state.breadcrumb[state.breadcrumb.indexOf(bc) + 1];
    const branchMoveIndex = nextInBreadcrumb
      ? bc.moveIndex
      : bc.moveIndex;

    for (let i = 0; i <= branchMoveIndex && i < moves.length; i++) {
      const resolved = resolveNotationMove(pos, moves[i].from, moves[i].to);
      if (!resolved) break;
      pos = applyMove(pos, resolved);
    }
  }

  // Replay current node moves
  const currentMoves = getNodeMoves(state);
  for (let i = 0; i <= state.moveIndex && i < currentMoves.length; i++) {
    const resolved = resolveNotationMove(pos, currentMoves[i].from, currentMoves[i].to);
    if (!resolved) break;
    pos = applyMove(pos, resolved);
  }

  return pos;
}

export function currentMoveText(state) {
  if (state.moveIndex < 0) return null;
  const moves = getNodeMoves(state);
  if (state.moveIndex >= moves.length) return null;
  const m = moves[state.moveIndex];
  return `${m.from}-${m.to}${m.annotation || ''}`;
}

export function canGoBack(state) {
  return state.breadcrumb.length > 0;
}
