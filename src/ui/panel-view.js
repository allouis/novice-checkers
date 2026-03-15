export function createPanelView(containerEl) {
  const panelEl = document.createElement('div');
  panelEl.className = 'panel';
  containerEl.appendChild(panelEl);

  return {
    renderLesson(state, callbacks) {
      const { lesson } = state;
      const diagram = lesson.diagrams?.[state.currentDiagramIndex];
      const totalSteps = callbacks.totalMoveSteps();
      const currentStep = state.moveStepIndex;
      const hasDiagrams = lesson.diagrams && lesson.diagrams.length > 0;

      panelEl.innerHTML = `
        <div class="panel__lesson">
          <div class="panel__header">
            <button class="btn btn--small" data-action="back-to-list">&larr; All Lessons</button>
            <div class="panel__lesson-nav">
              <button class="btn btn--small" data-action="prev-lesson">&larr; Prev</button>
              <button class="btn btn--small" data-action="next-lesson">Next &rarr;</button>
            </div>
          </div>
          <h2 class="panel__title">Lesson ${lesson.id}: ${lesson.title}</h2>
          <div class="panel__intro">${formatText(lesson.introText)}</div>
          ${hasDiagrams && diagram ? `
            <div class="panel__diagram-info">
              <h3>Diagram ${diagram.id}${diagram.label ? ': ' + diagram.label : ''}</h3>
              <p class="panel__objective">${diagram.objective || ''}</p>
            </div>
            ${diagram.continuation ? `
              <div class="panel__controls">
                <div class="panel__step-controls">
                  <button class="btn btn--step" data-action="step-back" ${currentStep < 0 ? 'disabled' : ''}>&#9664; Back</button>
                  <span class="panel__step-counter">${currentStep < 0 ? 'Start' : `Move ${currentStep + 1}/${totalSteps}`}</span>
                  <button class="btn btn--step" data-action="step-forward" ${currentStep >= totalSteps - 1 ? 'disabled' : ''}>Forward &#9654;</button>
                </div>
              </div>
            ` : ''}
            <div class="panel__diagram-nav">
              <button class="btn btn--small" data-action="prev-diagram" ${!callbacks.hasPrevDiagram() ? 'disabled' : ''}>&larr; Prev Diagram</button>
              <span class="panel__diagram-counter">Diagram ${state.currentDiagramIndex + 1}/${lesson.diagrams.length}</span>
              <button class="btn btn--small" data-action="next-diagram" ${!callbacks.hasNextDiagram() ? 'disabled' : ''}>Next Diagram &rarr;</button>
            </div>
            <div class="panel__commentary">
              ${callbacks.currentMoveText() ? `<p class="panel__move"><strong>${callbacks.currentMoveText()}</strong></p>` : ''}
              ${callbacks.currentCommentary() ? `<p class="panel__comment">${callbacks.currentCommentary()}</p>` : ''}
            </div>
            <button class="btn btn--small btn--explore" data-action="explore-position">Explore this position</button>
          ` : ''}
        </div>
      `;
    },

    renderExplorer(state, callbacks) {
      const pos = callbacks.currentPosition();
      panelEl.innerHTML = `
        <div class="panel__explorer">
          <h2 class="panel__title">Free Play</h2>
          <p class="panel__subtitle">Click a piece to select, then click a highlighted square to move. Both sides can be played.</p>
          <div class="panel__controls">
            <div class="panel__step-controls">
              <button class="btn" data-action="undo" ${!callbacks.canUndo() ? 'disabled' : ''}>&#9664; Undo</button>
              <button class="btn" data-action="redo" ${!callbacks.canRedo() ? 'disabled' : ''}>Redo &#9654;</button>
              <button class="btn" data-action="reset">Reset</button>
            </div>
          </div>
          <p class="panel__turn">Turn: <strong class="turn--${pos.turn}">${pos.turn}</strong></p>
        </div>
      `;
    },

    renderPuzzle(state) {
      const { puzzle, status, attempts, showHint } = state;
      panelEl.innerHTML = `
        <div class="panel__puzzle">
          <div class="panel__header">
            <button class="btn btn--small" data-action="back-to-list">&larr; All Puzzles</button>
          </div>
          <h2 class="panel__title">Puzzle ${puzzle.id}</h2>
          <p class="panel__objective">${puzzle.objective}</p>
          <p class="panel__category">${puzzle.category}</p>
          ${status === 'unsolved' ? '<p class="panel__prompt">Find the best move!</p>' : ''}
          ${status === 'incorrect' ? `<p class="panel__incorrect">Not quite. Try again! (Attempts: ${attempts})</p>` : ''}
          ${status === 'solved' ? `
            <p class="panel__solved">&#10003; Correct!</p>
            <div class="panel__solution">${puzzle.fullSolution}</div>
          ` : ''}
          ${status === 'revealed' ? `
            <div class="panel__solution"><strong>Solution:</strong> ${puzzle.fullSolution}</div>
          ` : ''}
          <div class="panel__controls">
            <div class="panel__step-controls">
              ${!showHint && (status === 'unsolved' || status === 'incorrect') ? `<button class="btn" data-action="hint">Hint</button>` : ''}
              ${showHint ? `<p class="panel__hint">${puzzle.hint}</p>` : ''}
              <button class="btn" data-action="reveal" ${status === 'solved' || status === 'revealed' ? 'disabled' : ''}>Show Solution</button>
              <button class="btn" data-action="reset-puzzle">Reset</button>
            </div>
          </div>
        </div>
      `;
    },

    renderLessonList(lessons, sections, progress) {
      const completedSet = new Set(progress?.completedLessons || []);
      const grouped = {};
      for (const s of sections) {
        grouped[s.id] = { title: s.title, lessons: [] };
      }
      for (const l of lessons) {
        if (grouped[l.section]) {
          grouped[l.section].lessons.push(l);
        }
      }

      panelEl.innerHTML = `
        <div class="panel__lesson-list">
          <h2 class="panel__title">Lessons</h2>
          ${Object.values(grouped).map(group => `
            <div class="lesson-group">
              <h3 class="lesson-group__title">${group.title}</h3>
              <ul class="lesson-list">
                ${group.lessons.map(l => `
                  <li class="lesson-list__item">
                    <button class="btn btn--lesson ${completedSet.has(l.id) ? 'btn--completed' : ''}" data-lesson-id="${l.id}">
                      <span class="lesson-num">L${l.id}</span>
                      ${l.title}
                      ${completedSet.has(l.id) ? '<span class="check">&#10003;</span>' : ''}
                    </button>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    },

    renderPuzzleList(puzzles, solvedIds = new Set()) {
      const categories = [...new Set(puzzles.map(p => p.category))];
      const grouped = {};
      for (const cat of categories) {
        grouped[cat] = puzzles.filter(p => p.category === cat);
      }

      panelEl.innerHTML = `
        <div class="panel__puzzle-list">
          <h2 class="panel__title">Puzzles</h2>
          <p class="panel__stats">${solvedIds.size}/${puzzles.length} solved</p>
          <div class="progress-bar">
            <div class="progress-bar__fill" style="width: ${(solvedIds.size / puzzles.length * 100).toFixed(0)}%"></div>
          </div>
          ${Object.entries(grouped).map(([cat, pzs]) => `
            <div class="puzzle-group">
              <h3 class="puzzle-group__title">${cat} <span class="puzzle-group__count">(${pzs.filter(p => solvedIds.has(p.id)).length}/${pzs.length})</span></h3>
              <ul class="puzzle-list">
                ${pzs.map(p => `
                  <li class="puzzle-list__item">
                    <button class="btn btn--puzzle ${solvedIds.has(p.id) ? 'btn--solved' : ''}" data-puzzle-id="${p.id}">
                      #${p.id} ${solvedIds.has(p.id) ? '&#10003;' : '&#9679;'}
                    </button>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    },

    renderRepertoireMenu() {
      panelEl.innerHTML = `
        <div class="panel__repertoire-menu">
          <h2 class="panel__title">Freestyle Repertoire</h2>
          <p class="panel__subtitle">Chapter 6 provides a practical freestyle repertoire. Choose whether to study lines playing as White or Black.</p>
          <div class="panel__repertoire-choices">
            <button class="btn btn--large" data-action="open-repertoire" data-side="white">
              <span class="btn__icon piece-icon piece-icon--white"></span>
              Playing White
              <span class="btn__desc">Responding to Black's opening moves (Lessons 28-42)</span>
            </button>
            <button class="btn btn--large" data-action="open-repertoire" data-side="black">
              <span class="btn__icon piece-icon piece-icon--black"></span>
              Playing Black
              <span class="btn__desc">Opening with 9-14 (Lessons 43-49)</span>
            </button>
          </div>
        </div>
      `;
    },

    renderRepertoire(state, callbacks) {
      const node = callbacks.getNode();
      const totalSteps = callbacks.totalMoveSteps();
      const currentStep = state.moveIndex;
      const branches = callbacks.availableBranches();
      const breadcrumb = callbacks.breadcrumbPath();
      const canBack = callbacks.canGoBack();

      panelEl.innerHTML = `
        <div class="panel__repertoire">
          <div class="panel__header">
            <button class="btn btn--small" data-action="back-to-list">&larr; Menu</button>
          </div>
          <h2 class="panel__title">${node?.label || node?.id || 'Repertoire'}</h2>
          ${node?.openingName ? `<p class="panel__opening-name">${node.openingName}</p>` : ''}

          <div class="panel__breadcrumb">
            ${breadcrumb.map((bc, i) => `
              <span class="breadcrumb__item ${i === breadcrumb.length - 1 ? 'breadcrumb__item--active' : ''}">${bc.label}</span>
              ${i < breadcrumb.length - 1 ? '<span class="breadcrumb__sep">&rsaquo;</span>' : ''}
            `).join('')}
          </div>

          <div class="panel__controls">
            <div class="panel__step-controls">
              <button class="btn btn--step" data-action="step-back" ${currentStep < 0 ? 'disabled' : ''}>&#9664; Back</button>
              <span class="panel__step-counter">${currentStep < 0 ? 'Start' : `Move ${currentStep + 1}/${totalSteps}`}</span>
              <button class="btn btn--step" data-action="step-forward" ${currentStep >= totalSteps - 1 ? 'disabled' : ''}>Forward &#9654;</button>
            </div>
          </div>

          ${callbacks.currentMoveText() ? `
            <div class="panel__commentary">
              <p class="panel__move"><strong>${callbacks.currentMoveText()}</strong></p>
            </div>
          ` : ''}

          ${branches.length > 0 ? `
            <div class="panel__branches">
              <h4>Variations available here:</h4>
              ${branches.map(b => `
                <button class="btn btn--branch" data-action="enter-variation" data-variation-id="${b.variationId}">
                  &#9654; ${b.label}
                </button>
              `).join('')}
            </div>
          ` : ''}

          ${canBack ? `
            <button class="btn btn--small" data-action="back-to-parent">&larr; Back to parent line</button>
          ` : ''}

          <button class="btn btn--small btn--explore" data-action="explore-position">Explore this position</button>
        </div>
      `;
    },

    getElement() {
      return panelEl;
    },
  };
}

function formatText(text) {
  if (!text) return '';
  return text.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
}
