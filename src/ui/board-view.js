import { squareToRowCol } from '../domain/board.js';

export function createBoardView(containerEl) {
  const boardEl = document.createElement('div');
  boardEl.className = 'board';
  containerEl.appendChild(boardEl);

  // Build 8x8 grid of cells
  const cells = new Map(); // square number -> cell element (only dark squares)
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement('div');
      const isDark = (row + col) % 2 === 1;
      cell.className = `square ${isDark ? 'square--dark' : 'square--light'}`;
      cell.dataset.row = row;
      cell.dataset.col = col;
      boardEl.appendChild(cell);

      if (isDark) {
        // Calculate square number
        const colIndex = Math.floor(col / 2);
        const sq = row * 4 + colIndex + 1;
        cell.dataset.square = sq;
        cells.set(sq, cell);

        // Add square number label
        const label = document.createElement('span');
        label.className = 'square-number';
        label.textContent = sq;
        cell.appendChild(label);
      }
    }
  }

  let clickCallback = null;

  boardEl.addEventListener('click', (e) => {
    if (!clickCallback) return;
    const cell = e.target.closest('[data-square]');
    if (cell) {
      clickCallback(parseInt(cell.dataset.square, 10));
    }
  });

  return {
    render(position, selectedSquare = null, legalDestinations = []) {
      // Clear all pieces and highlights
      for (const [sq, cell] of cells) {
        // Remove existing piece
        const existing = cell.querySelector('.piece');
        if (existing) existing.remove();

        // Remove highlights
        cell.classList.remove('square--selected', 'square--legal-dest');

        // Add piece if present
        const pc = position.pieces.get(sq);
        if (pc) {
          const pieceEl = document.createElement('div');
          pieceEl.className = `piece piece--${pc.color}${pc.king ? ' piece--king' : ''}`;
          cell.appendChild(pieceEl);
        }

        // Highlights
        if (sq === selectedSquare) {
          cell.classList.add('square--selected');
        }
        if (legalDestinations.includes(sq)) {
          cell.classList.add('square--legal-dest');
        }
      }
    },

    onSquareClick(callback) {
      clickCallback = callback;
    },
  };
}
