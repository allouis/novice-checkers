# Product Requirements Document: Checkers Novice Trainer

## Overview

An interactive single-page web app that teaches checkers endgames, tactics, and strategy based on Richard Pask's *Checkers for the Novice*. The app replaces a physical board: users explore positions, play through annotated lines, and solve puzzles — all with numbered squares matching standard checkers notation.

## Problem

The book is an excellent instructional resource, but following it requires a physical numbered board. The learner must manually set up dozens of diagram positions, remember move sequences, and mentally track alternatives. This friction discourages study. An interactive board with the positions pre-loaded, valid move enforcement, and guided commentary removes that barrier entirely.

## Target User

A checkers novice who wants to improve beyond casual play. They may not own a board. They want to learn at their own pace, understand *why* moves work, and build pattern recognition through hands-on exploration.

## Core Design Principles

- **Single-page app, not a long scroll.** The board is always visible. Content is navigated via sections/lessons/puzzles — never by scrolling past a wall of text.
- **Board + commentary side-by-side.** Left: interactive board with numbered squares. Right: lesson text, move annotations, and controls.
- **Notation-first.** Squares are always numbered 1-32 on the board. Moves are displayed in standard notation (e.g., "15-18", "22-17;"). The user learns notation by using it.
- **Explore freely.** Within any position, the user can make any *legal* move — not just the book's line. This encourages experimentation.

## Features

### 1. Interactive Checkerboard

- 8x8 board rendered with the 32 playable dark squares numbered 1-32.
- Pieces: black men, white men, black kings, white kings — visually distinct.
- Click-to-select, click-to-move interaction (or drag-and-drop).
- Only legal moves are permitted. Available moves are highlighted on piece selection.
- Mandatory jumps are enforced (Rule 16 from the book). Multi-jumps auto-chain, stopping when a man reaches the king row (Rule 14).
- Men reaching the king row are automatically crowned.
- Board orientation: White moves up, Black moves down (matching the book's convention).
- Current position can be reset to the diagram starting point at any time.

### 2. Lesson Mode

Structured walkthrough of the book's content, organized into sections:

| Section | Lessons | Content |
|---|---|---|
| **Notation** | 1 | Board numbering, how to read moves, play through Tinsley vs Chinook 1992 |
| **Rules** | 2 | Interactive rule demonstrations (ordinary moves, jumps, kings, mandatory capture) |
| **Simple Endgames** | 3-7 | 1K v 1K, 2K v 1K, 3K v 2K (double-corner), 3K v 2K (single-corner), 4K v 3K |
| **Basic Tactics** | 8-15 | 2-for-1, 2-for-2, 3-for-2, Rebound, In-and-Out, Breeches, Fork, Double-Corner Coup |
| **Basic Strategy** | 16-27 | Centre/side, single/double corner, king-row, development, opposition, First Position, Second Position, bridge endgames |
| **Freestyle Repertoire** | 28-49 | Opening lines with White and Black (the trunk + variations tree) |
| **Elimination & Visualization** | 50 | Thinking techniques, mental scoring |

Each lesson contains:
- **Introductory text** — the book's explanation of the concept, adapted for screen reading (concise paragraphs, not the full book text).
- **One or more diagram positions** — pre-loaded on the board when the user navigates to them.
- **Guided move sequences** — the user can step through the book's continuation move-by-move (forward/back), with commentary displayed alongside each move.
- **Alternative lines** — where the book discusses alternatives (e.g., "15-18 also works but..."), these are accessible as branching paths the user can explore.
- **"Try it yourself" prompts** — before revealing the book's answer, the user is invited to find the winning/drawing move.

Navigation: Previous/Next buttons to move between lessons. A sidebar or dropdown to jump to any lesson directly.

### 3. Puzzle Mode

Tactical and endgame puzzles extracted from the book's diagrams. The user is shown a position and asked to find the winning (or drawing) move.

- **~90 puzzles** sourced from the book's diagrams (Diagrams 5-106+).
- Each puzzle has:
  - A setup position loaded on the board.
  - An objective stated clearly: "White to Play and Win", "Black to Play and Draw", etc.
  - The user makes moves on the board.
  - Correct moves are confirmed with a checkmark; incorrect moves trigger a "Try again" prompt (not the answer immediately).
  - After solving (or requesting a hint), the full solution with commentary is revealed.
- Puzzles grouped by topic (endgame, 2-for-1, rebound, etc.) and by difficulty.
- Progress tracking: which puzzles have been solved, with a completion percentage per category.

### 4. Free Play / Exploration Mode

- Start from any book position (selectable from a list of all diagrams).
- Or set up a custom position by placing/removing pieces.
- Make any legal moves for either side — full two-player hot-seat on one screen.
- Undo/redo stack to explore variations.
- Move history displayed in standard notation.

### 5. Key Concepts Reference

A quick-reference panel (accessible from any mode) covering:
- **The Opposition** — what it is, how to calculate it via pairing-off.
- **Double-Corner vs Single-Corner** — vulnerability, key squares.
- **First Position** — defining features and winning procedure.
- **Second Position** — defining features and winning procedure.
- **The 11 One-v-Two Holds** — listed with diagrams.
- **Formations** — Long Dyke, Triangle, key squares.
- **Tactical Devices** — one-line definitions of each (2-for-1, rebound, fork, etc.).

### 6. Progress & State

- Current lesson/puzzle progress persisted in browser localStorage.
- User can resume where they left off.
- No accounts or server-side storage required.

## Non-Features (Out of Scope)

- AI opponent / engine. This is a learning tool, not a game against a computer.
- Online multiplayer.
- Full opening book database beyond what's in the book.
- Mobile-native app (responsive web is sufficient).
- Audio/video content.

## Technical Approach

### Architecture: Clean / DDD with Swappable Rendering

The codebase is split into three layers with strict dependency direction: **Domain → Application → Infrastructure/UI**. The domain and application layers are pure JavaScript with zero framework dependencies, making the rendering layer trivially replaceable.

```
src/
  domain/           # Pure JS, no dependencies, no I/O
    board.js        # Position representation, square numbering, piece types
    rules.js        # Legal move generation, jump detection, king promotion
    notation.js     # Parse/format "15-18", "22-17;" notation strings
    game.js         # Game state machine (apply move, undo, check win/draw)

  application/      # Pure JS, depends only on domain
    lesson.js       # Lesson sequencing, step-through, branching logic
    puzzle.js       # Puzzle state (attempt, hint, reveal), correctness check
    explorer.js     # Free play: undo/redo stack, move history
    repertoire.js   # Variation tree navigation (trunk, branch, backtrack)
    progress.js     # Track completed lessons/puzzles (pure data, no storage calls)

  infrastructure/   # Side effects, I/O, persistence
    storage.js      # localStorage adapter for progress persistence
    content.js      # Static lesson/diagram/puzzle data (parsed from book)
    diagram-parser.js  # ASCII diagram → Position converter

  ui/               # Rendering layer — the only part that touches the DOM
    board-view.js   # Renders the 8x8 board, pieces, square numbers, highlights
    panel-view.js   # Renders lesson text, commentary, move history
    controls.js     # Navigation buttons, mode switcher, puzzle controls
    app.js          # Wires everything together, event handling
    styles.css

  index.html        # Entry point
```

**Key constraints:**
- `domain/` and `application/` import nothing from `ui/` or `infrastructure/`. They are pure functions and classes, fully testable without a DOM.
- `ui/` depends on `application/` and `domain/` but never the reverse. The UI calls into application services and reads domain objects.
- `infrastructure/` implements interfaces defined by `application/` (e.g., `progress.js` defines what needs storing, `storage.js` implements *how*).
- Communication from application → UI is via callbacks or an event emitter, not direct DOM manipulation. This makes it straightforward to swap the rendering layer to Canvas, a different framework, or even a terminal UI.

**No backend required.** All content is bundled client-side.
**Deployable as static files** (GitHub Pages, Netlify, or local file:// access).
**No framework in the initial build.** Vanilla JS for the UI layer. If a framework is adopted later, only `ui/` changes.

### Data Model

```
Position {
  pieces: Map<square(1-32), Piece>   // Piece = { color: black|white, king: boolean }
  turn: black | white
}

Lesson {
  id: number
  title: string
  section: string
  introText: string
  diagrams: Diagram[]
}

Diagram {
  id: number                          // matches book's diagram numbering
  position: Position
  objective: string                   // "White to Play and Win"
  continuation: AnnotatedMove[]       // the book's main line
  alternatives: Alternative[]         // branching lines with commentary
}

AnnotatedMove {
  from: number
  to: number
  annotation?: string                 // "!", "!!", "?", etc.
  commentary?: string                 // the book's explanation for this move
}

Puzzle {
  diagramId: number
  correctFirstMove: Move              // the key move to find
  fullSolution: AnnotatedMove[]
  hints: string[]
}
```

### Board Rendering

- CSS Grid or Canvas for the 8x8 board.
- Square numbers rendered as small labels in the corner of each dark square.
- Pieces rendered as circles with distinct fills (dark/light) and king indicators (crown symbol or double-stacked).
- Selected piece highlighted; legal destination squares marked with dots or rings.

### Move Validation Engine

A rules engine implementing:
- Legal move generation for men (forward diagonal) and kings (forward + backward diagonal).
- Jump detection: mandatory capture, multi-jump chaining, king-row termination for men.
- A piece can only be jumped once per sequence.
- King promotion on reaching the back rank (move terminates).

This is a self-contained module (~200-300 lines) with no external dependencies needed.

## Content Pipeline

The book's 100+ diagrams and their associated move sequences, commentary, and annotations need to be transcribed into structured data. This is the largest content effort. Approach:

1. Parse the diagram text representations from the PDF extraction (the ASCII art diagrams using the checker font) into `Position` objects.
2. Parse the move sequences (e.g., "15-18; 22-17") into `AnnotatedMove[]` arrays.
3. Manually review and attach commentary excerpts to each move.
4. Tag each diagram as a puzzle candidate if it has a clear "find the move" quality.

## UI Layout

```
+------------------------------------------------------------------+
| Checkers for the Novice                    [Lessons] [Puzzles] [Free Play] |
+---------------------------+--------------------------------------+
|                           |                                      |
|                           |  Lesson 5: 3 Kings v 2 Kings         |
|     [Interactive Board]   |  (Double-Corner Focus)               |
|     with numbered         |                                      |
|     squares 1-32          |  Because two kings are needed to     |
|                           |  oust a single king from the double- |
|                           |  corner, many beginners think this   |
|                           |  is a draw...                        |
|                           |                                      |
|                           |  [Diagram 12]  [Diagram 13]          |
|                           |                                      |
+---------------------------+  19-23!  "Widely criticized in many   |
| [<< Prev] [Reset] [Next >>]  beginner's books, but is actually   |
| [<] Step Back | Step Fwd [>]  simplest and best"                 |
| [Try It Yourself]         |                                      |
+---------------------------+  [< Prev Lesson] [Next Lesson >]     |
| Move History:             |                                      |
| 1. 19-23! 28-32           +--------------------------------------+
| 2. 20-16! 27-31           |
| 3. ...                    |
+---------------------------+
```

## Success Criteria

- All 50 lessons from the book are navigable with their associated diagrams.
- All diagram positions load correctly on the board with proper piece placement.
- Move validation is 100% correct per the book's rules (mandatory jumps, king-row stop, etc.).
- Users can step through every annotated continuation from the book.
- Puzzle mode covers at least the endgame and tactics chapters (~60+ puzzles).
- The app works offline once loaded (no server calls).
- Responsive enough to use on a tablet in landscape orientation.

## Resolved Decisions

1. **Freestyle Repertoire (Ch. 6) presentation** — Tree navigator with collapsible branches. The trunk is the spine; variations branch off at labeled points (V1, V2, etc.) matching the book's structure. The user can click a branch point to follow that variation, and navigate back up. This matches how the book is actually structured and is more useful than linearizing.

2. **Diagram ASCII parsing** — The PDF uses a custom checker diagram font. Characters map to pieces: `A` = black man, `B` = white man, `C` = black king, `D` = white king, on an 8-row grid. A parser is feasible and should be built to avoid manual transcription of 100+ positions.

3. **Depth of commentary** — Full text from the book. The detailed annotations are the book's core value. Start with everything included; we can add collapse/expand later if needed, but don't pre-emptively cut content.

4. **Puzzle strictness** — Only the book's specific recommended move is accepted as correct. No engine-based evaluation. If the book says "15-10!" is the move, that's the only accepted answer. This keeps things simple and teaches the book's specific ideas.

## Open Questions

- None currently blocking. Implementation can begin.
