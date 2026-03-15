// Lesson and diagram content from "Checkers for the Novice" by Richard Pask.
// Diagrams are stored as raw ASCII; parsed at runtime by diagram-parser.
// Move sequences are stored as strings; parsed at runtime by notation.js.

export const sections = [
  { id: 'notation', title: 'Notation', chapters: [1] },
  { id: 'rules', title: 'Rules', chapters: [2] },
  { id: 'endgames', title: 'Simple Endgames', chapters: [3] },
  { id: 'tactics', title: 'Basic Tactics', chapters: [4] },
  { id: 'strategy', title: 'Basic Strategy', chapters: [5] },
  { id: 'repertoire', title: 'Freestyle Repertoire', chapters: [6] },
  { id: 'skills', title: 'Elimination & Visualization', chapters: [7] },
];

export const lessons = [
  {
    "id": 1,
    "title": "Notation",
    "section": "notation",
    "chapter": 1,
    "introText": "The checker board is numbered from 1 to 32, with the black men occupying squares 1 to 12 at the start and the white men squares 21 to 32. The white pieces are shown moving up the board.\n\nA move is recorded by means of two numbers separated by a hyphen, representing the squares on which a piece starts and finishes. A semicolon is given after each white move.\n\nAnnotation symbols: ! Good move. !! Brilliant move. ? Bad move. ?? Blunder. !? Interesting move. ?! Dubious move.\n\nTo check that all is clear, play through the following classic game — Tinsley vs Chinook, 1992 World Championship.",
    "diagrams": [
      {
        "id": 1,
        "label": "The Starting Position",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3EA4U",
          "TA5EA6EA7EA8EU",
          "TEA9EA!0EA!1EA!2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "TB@1EB@2EB@3EB@4EU",
          "TEB@5EB@6EB@7EB@8U",
          "TB@9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "10-14 22-18; 12-16 24-20; 16-19 23-16; 14-23 26-19; 8-12 25-22; 6-10 29-25; 11-15 30-26; 15-24 28-19; 4-8 22-18; 8-11 18-15; 11-18 26-22; 10-15 19-10; 12-19 22-15; 7-14 27-23; 19-26 31-22; 9-13",
        "commentary": {
          "0": "Tinsley was hoping for a quieter 3-move ballot, but wound up playing the weak side of one of the toughest."
        }
      },
      {
        "id": 2,
        "label": "Tinsley vs Chinook (continued)",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TA!3EA!4EB!5E !6EU",
          "TE !7E !8E !9EB@0U",
          "TB@1EB@2E @3E @4EU",
          "TEB@5E @6E @7E @8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "20-16; 2-6 15-11; 6-10 32-27; 10-15 27-24; 14-18 16-12; 18-23 11-8; 23-27 8-4; 27-32 4-8; 1-6 8-11; 6-10 11-18; 10-14 18-9; 5-14 22-18; 14-23 25-22; 23-26 24-20; 32-27 22-18; 27-23 18-14; 23-18 14-9; 26-31 9-5; 31-27",
        "commentary": {
          "0": "Continue from Diagram 2.",
          "16": "1-6! — a key waiting move by Tinsley.",
          "18": "6-10! — another precise move."
        }
      },
      {
        "id": 3,
        "label": "The Final Position",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "TB5E 6E 7E 8EU",
          "TE 9E !0E !1EB!2U",
          "TA!3E !4E !5E !6EU",
          "TE !7EC!8E !9EB@0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Chinook, White, resigns!",
        "continuation": "",
        "commentary": {
          "-1": "Chinook resigns. Black wins."
        }
      }
    ]
  },
  {
    "id": 2,
    "title": "Rules",
    "section": "rules",
    "chapter": 2,
    "introText": "Knowing the rules thoroughly is essential in any sport or mind sport. The checker board is square, divided into 64 squares alternately light and dark. The game is played on the black squares, numbered 1 to 32. Each player starts with 12 men.\n\nThere are four types of move: the ordinary move of a man, the ordinary move of a king, the jumping move of a man and the jumping move of a king. All jumping moves are compulsory. When a man reaches the farthest row forward (the king-row) it becomes a king, and the player's move terminates.\n\nThe game is won by the player who makes the last move — either all opponent's pieces have been jumped or remaining pieces are blocked. The game is drawn if both players agree, by the 40-move rule, or by repetition of position.",
    "diagrams": []
  },
  {
    "id": 3,
    "title": "1 King v 1 King",
    "section": "endgames",
    "chapter": 3,
    "introText": "The two diagonals running from square 1 to square 28 and square 5 to square 32 are known as the double-corner diagonals. They connect Black's double-corner (squares 1, 5, 6 and 9) with White's double-corner (squares 24, 27, 28 and 32).\n\nThe long diagonal running from square 4 to square 29 is known as the single-corner diagonal.\n\nThe double-corner diagonals provide sanctuary in king vs king endgames — a king on these diagonals can maintain a see-saw draw. When striving for a draw with the weaker side, head for the double-corner diagonals. When attacking, use the opposition to drive the opponent to the side of the board.",
    "diagrams": [
      {
        "id": 4,
        "label": "The Double-Corner and Single-Corner Diagonals",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Empty board showing diagonals",
        "continuation": "",
        "commentary": {}
      },
      {
        "id": 5,
        "label": "Pinned on the side",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2ED@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0EC#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play, White Wins",
        "continuation": "31-27 23-32",
        "commentary": {
          "0": "Or 31-26 23-30. Either way, Black is two moves from oblivion."
        }
      },
      {
        "id": 6,
        "label": "Driving to the side",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3ED4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "TC@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "4-8; 29-25; 8-11!; 25-22 11-15!; 22-26 15-18; 26-31 18-23",
        "commentary": {
          "2": "8-11! Essential — other moves allow a draw.",
          "4": "11-15! Also essential. White uses the opposition to drive Black to the side.",
          "6": "Black is forced to give ground because White possesses the opposition."
        }
      },
      {
        "id": 7,
        "label": "Double-corner sanctuary",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2ED@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play and Draw",
        "continuation": "32-28 23-27; 28-32 27-24; 32-28 24-27",
        "commentary": {
          "-1": "A see-saw draw. The double-corner diagonals provide sanctuary."
        }
      },
      {
        "id": 8,
        "label": "Reaching the sanctuary",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TD5E 6E 7E 8EU",
          "TE 9E !0E !1EC!2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play, Black Draws",
        "continuation": "5-9; 12-16! 9-14; 16-19 14-18; 19-24! 18-23; 24-28! 23-27; 28-32 27-23",
        "commentary": {
          "1": "12-16! Black must head for the double-corner diagonals.",
          "5": "19-24! Continuing toward the sanctuary.",
          "7": "24-28! One more step to safety."
        }
      },
      {
        "id": 9,
        "label": "Equal kings — dead draw",
        "lines": [
          "QRRRRRRRRS",
          "TED1E 2ED3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9EC#0E #1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Either Side to Play and Offer a Draw",
        "continuation": "",
        "commentary": {
          "-1": "Any open all-king endgame where the forces are equal is a dead draw."
        }
      }
    ]
  },
  {
    "id": 4,
    "title": "2 Kings v 1 King",
    "section": "endgames",
    "chapter": 3,
    "introText": "In an open all-king situation where there is a material imbalance, the side with the king majority has a forced win. In the case of 2 kings v 1, the strategy is: the lone king strives to access one of the double-corners; the two kings pursue it there, force it out and pin it on the side of the board.\n\nIn specific atypical positions, the inherent restrictiveness of the single-corner zone allows 1 king to draw against 2.",
    "diagrams": [
      {
        "id": 10,
        "label": "2 Kings v 1 King — standard win",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TD5ED6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4EC!5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "5-9; 15-19 6-10; 19-24 10-15; 24-28 15-19; 28-32 9-14; 32-28 14-18; 28-32 18-23; 32-28 23-27; 28-32 19-23!; 32-28 27-32!; 28-24 32-28; 24-20 23-18!; 20-16 18-15; 16-20 15-11!",
        "commentary": {
          "0": "The general strategy: pursue the lone king to the double-corner, force it out, pin it on the side.",
          "4": "There is no need to memorize specific moves, just the general strategy.",
          "16": "19-23! — Entering the double-corner and forcing Black out.",
          "26": "15-11! — White wins."
        }
      },
      {
        "id": 11,
        "label": "1 King draws against 2 in the single-corner",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "TC@9EC#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "18-22!; 30-25 22-26; 25-30 26-22",
        "commentary": {
          "0": "18-22! The inherent restrictiveness of the single-corner zone allows 1 king to draw against 2.",
          "4": "Drawn by a see-saw operation."
        }
      }
    ]
  },
  {
    "id": 5,
    "title": "3 Kings v 2 Kings (Double-Corner Focus)",
    "section": "endgames",
    "chapter": 3,
    "introText": "Because two kings are needed to oust and corral a single king when it occupies one of the double-corners, many beginners are under the impression that 3 Kings v 2 Kings is a draw. Actually, by constantly threatening and eventually forcing a simple exchange (a one for one), the situation can be easily reduced to 2 Kings v 1 King.\n\nWhen defending an endgame, it is generally good policy, where possible, to keep your kings together. Separated, the tactical possibilities are very limited; together there are many.",
    "diagrams": [
      {
        "id": 12,
        "label": "Forcing an exchange from the double-corner",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TEC9ED!0E !1E !2U",
          "T !3E !4ED!5E !6EU",
          "TE !7E !8ED!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-18; 9-5 10-6; 27-32 19-23; 5-1 6-9; 32-28 23-27; 1-5 27-23; 5-14 18-9",
        "commentary": {
          "0": "White threatens a simple exchange to reduce to 2K v 1K.",
          "6": "19-23 threatens the 6-9 exchange.",
          "10": "This line-up is what you need to commit to memory."
        }
      },
      {
        "id": 13,
        "label": "Defending kings together — stoutest defence",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8ED!9ED@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7EC@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "19-23!; 28-32 20-16!; 27-31 16-11!; 32-28 11-15!; 28-32 23-26; 31-22 18-25",
        "commentary": {
          "0": "19-23! Widely criticized in many beginner's books, but is actually simplest and best.",
          "2": "20-16! Maintaining the pressure.",
          "4": "16-11! Continuing the attack.",
          "8": "23-26 forces the exchange. White wins."
        }
      },
      {
        "id": 14,
        "label": "2 for 1 endgame technique",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5ED!6EU",
          "TE !7E !8E !9ED@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7ED@8U",
          "T @9E #0E #1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "16-19!; 27-31 20-24!; 32-27 28-32!; 27-20 19-24; 20-27 32-23",
        "commentary": {
          "0": "16-19! Offering Black a 2 for 1.",
          "2": "20-24! Continuing the attack.",
          "4": "28-32! Critical — 24-20?? permits a draw."
        }
      },
      {
        "id": 15,
        "label": "The pitch",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8ED!9EC@0U",
          "T @1E @2ED@3E @4EU",
          "TE @5E @6ED@7EC@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "23-26!; 28-32 27-24!; 20-27 26-31!",
        "commentary": {
          "0": "23-26! Getting ready.",
          "2": "27-24! Throwing a piece like this is called a pitch.",
          "4": "26-31! Trapping the black king."
        }
      }
    ]
  },
  {
    "id": 6,
    "title": "3 Kings v 2 Kings (Single-Corner Focus)",
    "section": "endgames",
    "chapter": 3,
    "introText": "In the single-corner zone, the defending kings may coordinate, but a neat pitch can clinch matters for the attacking side. Two quick finishes worth knowing are when the defending kings are separated and vulnerable to an exchange.\n\nThere are also positions in which 2 kings can draw against 3, representing an extension of the single-corner sanctuary principle from Lesson 4.",
    "diagrams": [
      {
        "id": 16,
        "label": "Coordinated defence in the single-corner",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TD!3ED!4ED!5E !6EU",
          "TE !7E !8E !9E @0U",
          "TC@1EC@2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-10; 21-25 14-17; 22-26 17-21; 25-22 10-14; 26-23 14-17; 23-26 21-25!; 22-29 17-22; 26-17 13-22",
        "commentary": {
          "0": "A neat pitch clinches matters for White.",
          "10": "21-25! Sets up the decisive exchange."
        }
      },
      {
        "id": 17,
        "label": "Quick finish — exchange",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TD5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8E !9E @0U",
          "T @1ED@2E @3E @4EU",
          "TEC@5E @6E @7E @8U",
          "TC@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-14!; 25-9 5-14; 29-25 14-18",
        "commentary": {
          "0": "18-14! Having obtained a winning position, the goal is to win as efficiently as possible."
        }
      },
      {
        "id": 18,
        "label": "Quick finish — getting into position",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4ED!5E !6EU",
          "TE !7ED!8E !9E @0U",
          "T @1ED@2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "TC@9EC#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-11!; 30-25 18-15; 25-18 15-22",
        "commentary": {
          "0": "15-11! Getting into position for the exchange."
        }
      },
      {
        "id": 19,
        "label": "2 Kings draw against 3 — example 1",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8E !9E @0U",
          "TC@1E @2ED@3E @4EU",
          "TE @5E @6E @7E @8U",
          "TC@9EC#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "18-22; 30-25 23-18; 25-30 18-23",
        "commentary": {
          "-1": "An extension of the single-corner sanctuary. 2 kings can draw against 3 here."
        }
      },
      {
        "id": 20,
        "label": "2 Kings draw against 3 — example 2",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8E !9E @0U",
          "T @1E @2ED@3E @4EU",
          "TE @5E @6E @7E @8U",
          "TC@9EC#0EC#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "18-22; 30-25 23-18; 25-30 18-23; 30-25 23-18; 31-27 22-26; 25-21 26-22; 27-32 18-23; 32-28 23-27",
        "commentary": {
          "-1": "Black tries something different, but the see-saw holds."
        }
      }
    ]
  },
  {
    "id": 7,
    "title": "4 Kings v 3 Kings",
    "section": "endgames",
    "chapter": 3,
    "introText": "The two major configurations in 4 Kings v 3 Kings are where two of the defending kings are in one double-corner while one is in the other, and where the three defending kings are combined. The attacker forces the defending kings to the edge of the board where they have least mobility, then forces an exchange.\n\nThere are certain unusual positions in which 3 kings can draw against 4. When you have the 3 kings you seek these refuges; when you have the 4 kings you try to avoid them.",
    "diagrams": [
      {
        "id": 21,
        "label": "Split defence — two in one corner",
        "lines": [
          "QRRRRRRRRS",
          "TEC1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TED9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8ED!9ED@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7EC@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-15; 1-5 9-6; 28-32 15-10; 32-28 6-1; 28-32 10-14; 32-28 20-16; 27-24 19-15; 24-27 16-11; 27-23 15-10; 28-24 11-7; 23-27 14-9; 5-14 10-17",
        "commentary": {
          "0": "18-15 threatens to exchange with 9-6.",
          "8": "10-14 locks the king up completely.",
          "10": "All of White's moves are now directed at forcing a simple exchange."
        }
      },
      {
        "id": 22,
        "label": "Combined defence",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8ED!9ED@0U",
          "TD@1ED@2E @3E @4EU",
          "TE @5E @6EC@7EC@8U",
          "T @9EC#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "21-17; 27-31 20-24; 28-32 24-28; 31-27 19-16; 27-31 16-20; 31-27 22-26!; 30-23 28-24!; 27-31 24-27 31-24 20-18",
        "commentary": {
          "0": "21-17 — Leaving the king on square 22 where it has a key role to play.",
          "12": "22-26! A classic pitch.",
          "14": "28-24! Sealing the win."
        }
      },
      {
        "id": 23,
        "label": "3 Kings draw against 4 — example 1",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8ED!9EC@0U",
          "T @1ED@2E @3E @4EU",
          "TE @5E @6E @7EC@8U",
          "T @9E #0EC#1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "18-23; 20-24 19-15; 31-27 22-18; 24-20 15-19",
        "commentary": {
          "-1": "An unusual refuge where 3 kings draw against 4."
        }
      },
      {
        "id": 24,
        "label": "3 Kings draw against 4 — example 2",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4ED!5E !6EU",
          "TE !7E !8E !9EC@0U",
          "TC@1ED@2ED@3E @4EU",
          "TE @5E @6E @7EC@8U",
          "T @9E #0E #1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "15-19; 20-24 19-15; 24-27 23-19; 27-31 19-23; 28-24 23-19; 24-27 15-11!; 32-28 11-15; 27-24 19-23; 24-20 15-19; 28-32 23-18; 31-27 18-15; 32-28 15-18; 27-32 18-23",
        "commentary": {
          "10": "15-11! You should work out why 15-18?? is a disaster."
        }
      }
    ]
  },
  {
    "id": 8,
    "title": "2 For 1",
    "section": "tactics",
    "chapter": 4,
    "introText": "The eight tactical devices in this chapter represent the basic tricks of the trade. When an expert faces a novice he typically employs one or more of these to get a piece or two ahead, and then executes a series of judicious exchanges to quickly reduce matters to one of the endgames dealt with in Chapter 3.\n\nYou give up one man and get two back. The word 'sacrifice' is inappropriate here as the return is immediate.",
    "diagrams": [
      {
        "id": 25,
        "label": "2 For 1 — basic pattern",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TEA9EA!0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TEB!7EB!8E !9E @0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "17-14!; 10-17 21-5",
        "commentary": {
          "0": "17-14! Give up one man and get two back."
        }
      },
      {
        "id": 26,
        "label": "2 For 1 — flank shot",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3EA!4EA!5EA!6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2EB@3EB@4EU",
          "TE @5E @6E @7EB@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "24-19!; 15-24 28-12",
        "commentary": {
          "0": "24-19! Sets up the double jump."
        }
      },
      {
        "id": 27,
        "label": "2 For 1 — side attack",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TEA!7EA!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TEB@5E @6E @7E @8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "25-22!; 18-25 (Or 17-26) 30-14",
        "commentary": {
          "0": "25-22! Sacrificing on the side to gain on the other."
        }
      },
      {
        "id": 28,
        "label": "2 For 1 — cross shot",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EA!8E !9EA@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "27-24!; 20-27 32-14",
        "commentary": {
          "0": "27-24! A cross-board sacrifice."
        }
      },
      {
        "id": 29,
        "label": "2 For 1 — back shot",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EA!8E !9E @0U",
          "T @1E @2EA@3E @4EU",
          "TE @5EA@6EB@7E @8U",
          "T @9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "32-28!; 23-32 30-14",
        "commentary": {
          "0": "32-28! Sacrifice from the back row."
        }
      },
      {
        "id": 30,
        "label": "2 For 1 — pressure",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TA!3E !4EA!5E !6EU",
          "TE !7EA!8E !9E @0U",
          "T @1EB@2EA@3E @4EU",
          "TEB@5E @6EB@7E @8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "25-21!; 18-25 27-11",
        "commentary": {
          "0": "25-21! Pressure from the side."
        }
      },
      {
        "id": 31,
        "label": "2 For 1 — king shot",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5EA6E 7E 8EU",
          "TE 9E !0ED!1E !2U",
          "T !3E !4EB!5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2EC@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-10!; 6-15 11-27",
        "commentary": {
          "0": "15-10! Sacrificing a king for two men."
        }
      },
      {
        "id": 32,
        "label": "2 For 1 — king exchange",
        "lines": [
          "QRRRRRRRRS",
          "TEA1ED2E 3E 4U",
          "T 5E 6ED7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EC!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "2-6!; 1-10 7-23",
        "commentary": {
          "0": "2-6! A king-based sacrifice."
        }
      }
    ]
  },
  {
    "id": 9,
    "title": "2 For 2",
    "section": "tactics",
    "chapter": 4,
    "introText": "These examples show that, when the conditions are right, you can win on position by giving up two pieces to gain two. Sometimes the two pieces are given up together, sometimes separately.\n\nThe key is to recognize the pattern: after the exchange sequence, you emerge with a positional advantage that translates into a material gain.",
    "diagrams": [
      {
        "id": 33,
        "label": "2 For 2 — basic pattern",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9E !0E !1EA!2U",
          "T !3E !4E !5E !6EU",
          "TEA!7E !8E !9EB@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "20-16!; 12-19 27-23; 19-26 31-13",
        "commentary": {
          "0": "20-16! Initiates a two-for-two exchange that wins on position."
        }
      },
      {
        "id": 34,
        "label": "2 For 2 — creating a hole",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3EA!4E !5E !6EU",
          "TE !7EA!8E !9EA@0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6E @7EB@8U",
          "TB@9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "21-17!; 14-21 28-24; 20-27 32-14",
        "commentary": {
          "0": "21-17! Creates a hole for the follow-up jump."
        }
      },
      {
        "id": 35,
        "label": "2 For 2 — cross-board",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9EA!0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TEA!7EB!8E !9E @0U",
          "T @1E @2EB@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-15!; 10-26 31-13",
        "commentary": {
          "0": "18-15! Sets up a devastating cross-board exchange."
        }
      },
      {
        "id": 36,
        "label": "2 For 2 — triple jump",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6EA7E 8EU",
          "TE 9E !0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TEA!7EB!8EA!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EB@6E @7EB@8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "26-22!; 17-26 30-16; 11-20 18-15",
        "commentary": {
          "0": "26-22! Initiates a sequence ending in a triple jump."
        }
      },
      {
        "id": 37,
        "label": "2 For 2 — foresight",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3EA4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0EB!1E !2U",
          "T !3ED!4E !5E !6EU",
          "TE !7EB!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0EC#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "11-8!; 4-11 18-15 (It would be superfluous assigning a exclamation mark here: the first move of the combination is the one requiring the foresight); 11-18 14-32",
        "commentary": {
          "0": "11-8! The first move of the combination is the one requiring the foresight."
        }
      },
      {
        "id": 38,
        "label": "2 For 2 — mirror",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EB!0E !1E !2U",
          "T !3ED!4E !5E !6EU",
          "TE !7E !8EB!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0EC#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "10-7!; 2-11 19-15; 11-18 14-32",
        "commentary": {
          "0": "10-7! A mirror-image of the previous pattern."
        }
      },
      {
        "id": 39,
        "label": "2 For 2 — king run",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EB!0E !1E !2U",
          "T !3EB!4ED!5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EC@6E @7E @8U",
          "T @9EC#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "10-6!; 2-18 15-31",
        "commentary": {
          "0": "10-6! Sets up a king run to the back row."
        }
      },
      {
        "id": 40,
        "label": "2 For 2 — imaginative",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "T 5E 6E 7EB8EU",
          "TE 9EA!0E !1ED!2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8E !9EB@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0EC#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-15! (Highly imaginative); 1019 12-16; 3-12 16-32",
        "commentary": {
          "0": "18-15! Highly imaginative — the key is the follow-up king promotion."
        }
      }
    ]
  },
  {
    "id": 10,
    "title": "3 For 2",
    "section": "tactics",
    "chapter": 4,
    "introText": "Two pieces are given up and three gained in return. Under the old rules a player might conveniently overlook the final jump, with the hope of being huffed, because he did not like the consequences. Nowadays there is no possible cause for confusion.\n\nThese combinations are often longer and more subtle than the 2-for-1 patterns. The key first move typically requires deeper foresight.",
    "diagrams": [
      {
        "id": 41,
        "label": "3 For 2 — basic pattern",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8EA!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-15!; 11-18 27-23; 18-27 (Or 19-26) 31-6",
        "commentary": {
          "0": "18-15! Sacrifice two to gain three."
        }
      },
      {
        "id": 42,
        "label": "3 For 2 — centre exchange",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8EA!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EB@6E @7E @8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-14!; 10-17 26-22; 17-26 30-7",
        "commentary": {
          "0": "18-14! Initiates a centre-clearing exchange."
        }
      },
      {
        "id": 43,
        "label": "3 For 2 — side variation",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TEA!7E !8EB!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EB@6E @7E @8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "19-15!; 10-19 (Or 11-18) 26-22; 17-26 30-7",
        "commentary": {
          "0": "19-15! A side variation of the same theme."
        }
      },
      {
        "id": 44,
        "label": "3 For 2 — creating a hole",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TEA9E !0E !1E !2U",
          "T !3EA!4E !5E !6EU",
          "TE !7EA!8E !9EA@0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "21-17! (Creating a hole); 14-21 27-24; 20-27 32-5",
        "commentary": {
          "0": "21-17! Creating a hole for the multi-jump."
        }
      },
      {
        "id": 45,
        "label": "3 For 2 — desired pattern",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5EA6E 7EA8EU",
          "TE 9E !0E !1E !2U",
          "TA!3E !4EB!5E !6EU",
          "TE !7E !8E !9EA@0U",
          "T @1EB@2E @3E @4EU",
          "TEB@5E @6E @7E @8U",
          "TB@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-10! (Creating the desired pattern); 6-15 22-17; 13-22 25-4",
        "commentary": {
          "0": "15-10! Creating the desired pattern for the triple jump."
        }
      },
      {
        "id": 46,
        "label": "3 For 2 — extension",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TEA9E !0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8E !9E @0U",
          "T @1E @2EA@3E @4EU",
          "TE @5EA@6EB@7E @8U",
          "T @9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-15!; 11-18 32-28; 23-32 30-5",
        "commentary": {
          "0": "18-15! An extension of the 2-for-1 idea from Diagram 29."
        }
      },
      {
        "id": 47,
        "label": "3 For 2 — double sacrifice",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5EA6EA7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4EB!5E !6EU",
          "TE !7EA!8E !9E @0U",
          "T @1EA@2E @3E @4EU",
          "TEB@5E @6EB@7E @8U",
          "TB@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-10!; 6-15 (Or 7-14) 27-23; 18-27 25-2",
        "commentary": {
          "0": "15-10! A double sacrifice leading to a king promotion."
        }
      },
      {
        "id": 48,
        "label": "3 For 2 — squeeze",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EA!8EB!9E @0U",
          "T @1E @2E @3EB@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "19-16!; 11-27 32-7",
        "commentary": {
          "0": "19-16! A squeeze that forces a devastating multi-jump."
        }
      },
      {
        "id": 49,
        "label": "3 For 2 — king combination",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "T 5E 6EB7E 8EU",
          "TEA9ED!0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TEB!7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EC@6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "17-14!; 9-18 10-6; 3-10 6-31",
        "commentary": {
          "0": "17-14! A combination involving kings and men."
        }
      },
      {
        "id": 50,
        "label": "3 For 2 — blind shot",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0ED!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EA!8EC!9EA@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7EB@8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "11-15! (A ‘blind’ shot like this is often overlooked); 19-10 28-24; 20-27 32-7",
        "commentary": {
          "0": "11-15! A blind shot like this is often overlooked."
        }
      }
    ]
  },
  {
    "id": 11,
    "title": "Rebound",
    "section": "tactics",
    "chapter": 4,
    "introText": "This is a double-action device in which one of the opponent's pieces is used as a backstop. The jumping piece bounces off an opponent's man, changes direction, and continues jumping.\n\nThe rebound is one of the most satisfying tactics to execute and one of the hardest to see coming. The key is recognizing when an opponent's piece can serve as the pivot point.",
    "diagrams": [
      {
        "id": 51,
        "label": "Rebound — basic pattern",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EB!0E !1E !2U",
          "T !3EB!4E !5E !6EU",
          "TEA!7E !8E !9E @0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "10-6!; 1-10 14-7; 3-10 21-7",
        "commentary": {
          "0": "10-6! The classic rebound: jump, bounce off the backstop, and jump again."
        }
      },
      {
        "id": 52,
        "label": "Rebound — extended",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0E !1EA!2U",
          "T !3EA!4E !5E !6EU",
          "TE !7E !8EB!9E @0U",
          "T @1E @2EB@3E @4EU",
          "TE @5EB@6EA@7E @8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "19-15!; 10-19 23-16; 12-19 32-16",
        "commentary": {
          "0": "19-15! An extended rebound sequence."
        }
      },
      {
        "id": 53,
        "label": "Rebound — multi-stage",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TEA9E !0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8E !9EA@0U",
          "T @1E @2E @3EB@4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "27-23!; 20-27 18-15; 11-18 23-14; 9-18 32-14",
        "commentary": {
          "0": "27-23! A multi-stage rebound with multiple direction changes."
        }
      },
      {
        "id": 54,
        "label": "Rebound — complex",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1EA!2U",
          "T !3E !4EA!5E !6EU",
          "TEA!7E !8EA!9EA@0U",
          "T @1E @2E @3EB@4EU",
          "TE @5EB@6EB@7EB@8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "27-23!; 20-27 23-16; 12-19 32-16",
        "commentary": {
          "0": "27-23! A more complex application of the rebound principle."
        }
      },
      {
        "id": 55,
        "label": "Rebound — long sequence",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3EA4U",
          "TA5EA6E 7EA8EU",
          "TE 9E !0E !1E !2U",
          "TA!3E !4EB!5E !6EU",
          "TEB!7E !8E !9E @0U",
          "T @1EB@2E @3E @4EU",
          "TEB@5E @6E @7E @8U",
          "TB@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "22-18!; 13-22 15-10; 6-15 18-11; 8-15 25-11; 5-9 29-25; 9-14 25-22",
        "commentary": {
          "0": "22-18! A long rebound sequence resulting in a decisive advantage."
        }
      },
      {
        "id": 56,
        "label": "Rebound — opposition finish",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9E !0EB!1EA!2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8EB!9EA@0U",
          "T @1E @2EB@3E @4EU",
          "TE @5EA@6E @7EB@8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "11-7!; 3-10 19-15; 10-19 23-16; 12-19 30-16; 5-9 16-11 (White has the opposition and here it proves crucial); 9-14 11-7; 14-18 7-2; 18-23 2-7; 23-27 7-11; 2731 11-15; 31-27 15-18; 27-32 (Or 27-31) 18-23",
        "commentary": {
          "0": "11-7! After the rebound, the opposition proves crucial in the endgame."
        }
      },
      {
        "id": 57,
        "label": "Rebound — extension of 3 for 2",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EB!0E !1E !2U",
          "T !3EB!4E !5E !6EU",
          "TEA!7EA!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EB@6E @7E @8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "10-6!; 1-10 14-7; 3-10 26-22; 17-26 (Or 18-25) 30-7",
        "commentary": {
          "0": "10-6! An extension of the idea given in Diagram 43."
        }
      },
      {
        "id": 58,
        "label": "Rebound — hard to find",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TEA9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9EA@0U",
          "T @1E @2EB@3E @4EU",
          "TEC@5EB@6E @7EB@8U",
          "T @9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "28-24! (Imagine how hard this would be to find if you had never been exposed to the idea); 20-27 26-22; 25-18 23-14; 9-18 32-14",
        "commentary": {
          "0": "28-24! Imagine how hard this would be to find without exposure to the idea."
        }
      }
    ]
  },
  {
    "id": 12,
    "title": "In-and-Out or Back Shot",
    "section": "tactics",
    "chapter": 4,
    "introText": "A player's move terminates when one of his men jumps or moves into the king-row. This grants the opponent an extra tempo. The in-and-out (or back shot) exploits this rule: a man jumps into the king-row, becomes a king, and on the next turn the new king jumps back out.\n\nThis tactical device is one of the most elegant in checkers and demonstrates why the king-row promotion rule creates such rich possibilities.",
    "diagrams": [
      {
        "id": 59,
        "label": "In-and-Out — basic pattern",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6EB7EA8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5EA!6EU",
          "TE !7E !8E !9E @0U",
          "TA@1E @2E @3E @4EU",
          "TEB@5E @6E @7E @8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "30-26!; 21-30 (Black must wait before jumping again) 7-3; 30-23 3-26",
        "commentary": {
          "0": "30-26! The man jumps in, crowns, then the king jumps back out."
        }
      },
      {
        "id": 60,
        "label": "In-and-Out — cross-board",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3EA4U",
          "T 5EA6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TA!3E !4EA!5E !6EU",
          "TE !7E !8E !9E @0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "21-17!; 13-22 31-26; 22-31 32-28; 31-24 28-1",
        "commentary": {
          "0": "21-17! A cross-board in-and-out combination."
        }
      },
      {
        "id": 61,
        "label": "In-and-Out — with king",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6EA7EB8EU",
          "TE 9E !0E !1E !2U",
          "TA!3E !4EC!5E !6EU",
          "TE !7E !8E !9EA@0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "21-17!; 13-22 31-26; 22-31 8-3; 31-24 3-28",
        "commentary": {
          "0": "21-17! Using a king to set up the in-and-out."
        }
      },
      {
        "id": 62,
        "label": "In-and-Out — similarity to Diagram 59",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EB!0EB!1E !2U",
          "T !3E !4EC!5EA!6EU",
          "TE !7E !8E !9E @0U",
          "TA@1E @2E @3E @4EU",
          "TEB@5E @6E @7E @8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "10-7!; 15-8 30-26; 21-30 7-3; 3023 3-26",
        "commentary": {
          "0": "10-7! The similarity with Diagram 59 is readily apparent."
        }
      },
      {
        "id": 63,
        "label": "In-and-Out — flank",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "T 5E 6E 7EA8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8EB!9E @0U",
          "TA@1E @2E @3EA@4EU",
          "TE @5EB@6E @7E @8U",
          "TB@9E #0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "29-25!; 21-30 32-28; 30-16 28-3",
        "commentary": {
          "0": "29-25! A flanking in-and-out combination."
        }
      },
      {
        "id": 64,
        "label": "In-and-Out — multi-jump",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3EA4U",
          "T 5EA6E 7EA8EU",
          "TE 9E !0E !1E !2U",
          "TA!3E !4E !5EA!6EU",
          "TE !7E !8E !9E @0U",
          "TB@1E @2E @3EB@4EU",
          "TE @5E @6EB@7EB@8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "21-17!; 13-22 30-26; 22-31 24-20; 31-24 20-11!; 8-15 28-1",
        "commentary": {
          "0": "21-17! A multi-jump in-and-out with a spectacular finish."
        }
      },
      {
        "id": 65,
        "label": "In-and-Out — setup sacrifice",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "T 5E 6E 7EA8EU",
          "TE 9EA!0E !1E !2U",
          "T !3E !4E !5EA!6EU",
          "TEB!7EB!8E !9E @0U",
          "T @1EA@2E @3E @4EU",
          "TE @5E @6EB@7EB@8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "30-26!; 22-31 18-14; 31-24 14-7!; 3-10 28-3",
        "commentary": {
          "0": "30-26! A sacrifice sets up the in-and-out."
        }
      },
      {
        "id": 66,
        "label": "In-and-Out — dream shot",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2E 3E 4U",
          "TA5EA6EA7EA8EU",
          "TEA9E !0E !1E !2U",
          "TB!3EB!4EB!5EA!6EU",
          "TEB!7EB!8EA!9EA@0U",
          "T @1E @2E @3EB@4EU",
          "TE @5EB@6EB@7EB@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "15-10!! (A definite case of mind over matter. Dream the impossible dream!); 6-31 13-6; 1-10 24-6; 31-24 28-3",
        "commentary": {
          "0": "15-10!! A definite case of mind over matter. Dream the impossible dream!"
        }
      }
    ]
  },
  {
    "id": 13,
    "title": "Breeches",
    "section": "tactics",
    "chapter": 4,
    "introText": "Here a king is placed between two of the opponent's pieces. Because they cannot both move out of the way at once, one of them is gained on the next move.\n\nThe breeches is a fundamental endgame tactic. Recognizing when you can achieve a breeches position — and when your opponent is threatening one — is essential for sound endgame play.",
    "diagrams": [
      {
        "id": 67,
        "label": "Breeches — saving draw",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TA!3ED!4EC!5E !6EU",
          "TE !7E !8E !9E @0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "21-17! (The only way out. In- stead, 14-9? eventually loses by First Position, a classic endgame discussed in Chapter 5); 13-22 14-18. Drawn",
        "commentary": {
          "0": "21-17! The only way out. 14-9? eventually loses by First Position."
        }
      },
      {
        "id": 68,
        "label": "Breeches — slow motion",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7EA8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5ED!6EU",
          "TE !7E !8E !9EB@0U",
          "T @1E @2E @3EC@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "16-12 (Nudging Black into position); 8-11 12-16!; 11-15 16-19",
        "commentary": {
          "0": "16-12 nudges Black into position for the breeches."
        }
      },
      {
        "id": 69,
        "label": "Breeches — long setup",
        "lines": [
          "QRRRRRRRRS",
          "TE 1ED2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8EA!9E @0U",
          "T @1E @2E @3EA@4EU",
          "TE @5EB@6E @7E @8U",
          "TB@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "2-7!; 10-15 (10-14 loses to 26-22!) 7-11!; 15-18 11-16!; 18-23 16-20; 23-30 20-27; 30-26 (No choice) 27-23",
        "commentary": {
          "0": "2-7! Begins a long sequence leading to a decisive breeches."
        }
      },
      {
        "id": 70,
        "label": "Breeches — exchange setup",
        "lines": [
          "QRRRRRRRRS",
          "TE 1ED2EA3E 4U",
          "T 5E 6E 7EC8EU",
          "TE 9ED!0E !1EB!2U",
          "TA!3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "2-7!; 13-17 (Against 8-4 the 10-6 exchange wins quickly) 10-14!; 3-10 12-3",
        "commentary": {
          "0": "2-7! Sets up an exchange that leads to breeches."
        }
      },
      {
        "id": 71,
        "label": "Breeches — hidden resources",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6ED7E 8EU",
          "TE 9EC!0E !1E !2U",
          "T !3ED!4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2ED@3EC@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "23-19! (With 2 kings against 3, Black thought he’d found a way out with the breeches, but checkers is full of hidden resources); 24-15 14-18 (7-11 also wins); 15-22 (10-3 also loses) 7-14",
        "commentary": {
          "0": "23-19! Checkers is full of hidden resources — Black thought he had a way out."
        }
      },
      {
        "id": 72,
        "label": "Breeches — surprise",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6ED7E 8EU",
          "TE 9EC!0E !1E !2U",
          "T !3ED!4E !5E !6EU",
          "TE !7E !8ED!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "19-23! (Again Black wrongly thought he had secured a draw); 27-9 (10-3 or 10-17 is just a slow death) 7-5",
        "commentary": {
          "0": "19-23! Again Black wrongly thought he had secured a draw."
        }
      },
      {
        "id": 73,
        "label": "Breeches — not to be",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5EA6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TEB!7E !8E !9EA@0U",
          "T @1E @2E @3E @4EU",
          "TE @5ED@6EC@7EB@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "17-14; 20-24 (Against 27-31 or 27-32 White wins quickly with 26-23) 28-19; 27-23 (Apparently escaping with a draw) 14-10! (Not to be); 6-24 26-28",
        "commentary": {
          "0": "17-14 begins the sequence. 14-10! is the key — not to be escaped."
        }
      },
      {
        "id": 74,
        "label": "Double breeches",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0EA!1EA!2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8EB!9EB@0U",
          "T @1E @2E @3E @4EU",
          "TEA@5EC@6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "19-16!; 12-19 18-23. Drawn",
        "commentary": {
          "0": "19-16! An example of the rarely seen double breeches."
        }
      }
    ]
  },
  {
    "id": 14,
    "title": "Fork",
    "section": "tactics",
    "chapter": 4,
    "introText": "A press is when a king attacks a man from behind. A squeeze is when a man is attacked from the front, using another man or the edge of the board. When a king presses two men simultaneously, gaining one of them on the next move, it is called a fork.\n\nThe fork is a powerful endgame weapon. By understanding the press-squeeze-fork sequence, you can systematically dismantle an opponent's position.",
    "diagrams": [
      {
        "id": 75,
        "label": "Fork — press sequence",
        "lines": [
          "QRRRRRRRRS",
          "TED1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "TB@1E @2EA@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "1-6! (Press); 10-15 (10-14 loses similarly) 6-10 (Press); 15-19 (15-18 loses similarly) 10-15 (Press); 19-24 15-19 (Fork)",
        "commentary": {
          "0": "1-6! Press, press, press, fork — a textbook sequence."
        }
      },
      {
        "id": 76,
        "label": "Fork — squeeze and press",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2ED3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9EA!0E !1E !2U",
          "T !3E !4E !5EA!6EU",
          "TE !7E !8E !9E @0U",
          "TB@1E @2E @3EB@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "24-20! (Squeeze); 16-19 3-7 (Press); 10-14 (10-15 loses to both 7-10 and 7-11) 7-10 (Press); 14-18 10-15 (Fork)",
        "commentary": {
          "0": "24-20! Squeeze first, then press to the fork."
        }
      },
      {
        "id": 77,
        "label": "Fork — complex sequence",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5EA6EA7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3ED!4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3EB@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "24-19!; 6-10 (Against 7-11 the 19-15 exchange wins immediately) 14-9!; 7-11 9-6; 11-15 (10-14 leads to the loss of the man on square 11 after 6-2 and 2-7) 19-16; 10-14 6-10 (Fork)",
        "commentary": {
          "0": "24-19! A complex sequence of presses leading to the fork."
        }
      },
      {
        "id": 78,
        "label": "Fork — Ryan vs Gonotsky",
        "lines": [
          "QRRRRRRRRS",
          "TED1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0ED!1E !2U",
          "TA!3E !4E !5E !6EU",
          "TE !7EA!8EA!9EA@0U",
          "TB@1E @2E @3E @4EU",
          "TE @5E @6E @7EB@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "11-16! (Press); 19-23 16-19 (Press); 23-26 19-15 (Press); 18-22 15-18 (Press); 22-25 18-22 (Fork)",
        "commentary": {
          "0": "11-16! Willie Ryan defeated Samuel Gonotsky with this fork sequence."
        }
      },
      {
        "id": 79,
        "label": "Fork — Gonotsky vs Hanson",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2ED3E 4U",
          "T 5E 6E 7E 8EU",
          "TEB9EA!0E !1E !2U",
          "TB!3E !4E !5E !6EU",
          "TE !7EA!8E !9E @0U",
          "TB@1EA@2E @3E @4EU",
          "TE @5EA@6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "3-7! (Press); 10-15 7-10 (Press); 15-19 10-14 (Press); 19-23 14-17!; 23-27 17-14 (Press); 18-23 14-18 (Press); 22-25 18-22 (Fork)",
        "commentary": {
          "0": "3-7! Gonotsky scored with this against Jesse Hanson."
        }
      },
      {
        "id": 80,
        "label": "Double fork — saving draw",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "T 5E 6EB7E 8EU",
          "TEA9EB!0E !1EB!2U",
          "T !3E !4EB!5E !6EU",
          "TEA!7EC!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "7-2!; 18-11 10-7; 3-10 2-6 (Double fork!). Drawn",
        "commentary": {
          "0": "7-2! Sets up a double fork to save the draw."
        }
      },
      {
        "id": 81,
        "label": "Double fork — winning",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9ED!0EA!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8EA!9E @0U",
          "TB@1E @2E @3E @4EU",
          "TEC@5E @6EC@7EB@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "18-15!; 11-18 10-15 (Double fork)",
        "commentary": {
          "0": "18-15! Sets up a double fork for the win."
        }
      },
      {
        "id": 82,
        "label": "Double fork — defensive",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5ED6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3EA!4EA!5E !6EU",
          "TE !7E !8E !9E @0U",
          "TB@1E @2E @3EA@4EU",
          "TE @5E @6E @7E @8U",
          "T @9EB#0EC#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "30-26! (6-10? loses quickly. Can you see how?); 31-22 6-10 (Double fork). Drawn",
        "commentary": {
          "0": "30-26! A defensive double fork. 6-10? loses quickly."
        }
      }
    ]
  },
  {
    "id": 15,
    "title": "Double-Corner Coup",
    "section": "tactics",
    "chapter": 4,
    "introText": "This device is based upon various configurations of pieces in the double-corner zone. The double-corner coup exploits the geometry of the double-corner squares to execute combinations that would be impossible elsewhere on the board.\n\nThese positions would previously have been considered hopeless. Such is the magic appeal of checkers.",
    "diagrams": [
      {
        "id": 83,
        "label": "Double-Corner Coup — basic",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2ED3E 4U",
          "T 5EA6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TB!3EB!4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "TC@9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "3-7! (Threatening to play 7-2); 6-10 13-9; 10-17 9-6; 1-10 7-21",
        "commentary": {
          "0": "3-7! Threatening to play 7-2 — a classic double-corner coup."
        }
      },
      {
        "id": 84,
        "label": "Double-Corner Coup — king sacrifice",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2EA3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9E !0EB!1E !2U",
          "TD!3EB!4E !5E !6EU",
          "TE !7EC!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "11-7!; 3-17 (Or 18-9 13-6; 3-10 6-15 to a loss) 13-15",
        "commentary": {
          "0": "11-7! A king sacrifice in the double-corner zone."
        }
      },
      {
        "id": 85,
        "label": "Double-Corner Coup — exchange",
        "lines": [
          "QRRRRRRRRS",
          "TE 1ED2E 3E 4U",
          "TA5E 6ED7E 8EU",
          "TE 9E !0E !1E !2U",
          "TB!3E !4EC!5E !6EU",
          "TEC!7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "13-9!; 5-14 7-10; 15-6 2-18",
        "commentary": {
          "0": "13-9! Exchange in the double-corner leading to a promotion."
        }
      },
      {
        "id": 86,
        "label": "Double-Corner Coup — precise king",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5EB6E 7E 8EU",
          "TEB9E !0E !1E !2U",
          "T !3EB!4EC!5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5EC@6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "14-10!; 5-14 6-2! (6-1? would only draw); 15-6 2-18",
        "commentary": {
          "0": "14-10! Note that 6-1? would only draw; 6-2! is precise."
        }
      },
      {
        "id": 87,
        "label": "Double-Corner Coup — complex",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "TA5EB6E 7E 8EU",
          "TEB9E !0E !1E !2U",
          "T !3EB!4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1EC@2EB@3EC@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "23-19!; 24-15 14-10; 5-14 6-1; 15-6 1-26",
        "commentary": {
          "0": "23-19! A complex double-corner coup with multiple jumps."
        }
      },
      {
        "id": 88,
        "label": "Double-Corner Coup — mirror",
        "lines": [
          "QRRRRRRRRS",
          "TED1EA2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TEB9E !0E !1E !2U",
          "T !3EB!4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1EC@2EB@3EC@4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "14-10!; 5-14 23-19; 24-6 1-26",
        "commentary": {
          "0": "14-10! A mirror of the previous example — note the similarity."
        }
      }
    ]
  },
  {
    "id": 16,
    "title": "Centre and Side Moves",
    "section": "strategy",
    "chapter": 5,
    "introText": "Because a man in the centre has greater mobility than one at the side, being able to move in two directions rather than one, you should generally move and jump towards the centre. The centre itself (squares 14, 15, 18 and 19) plays a key role and should always be fiercely contested.\n\nOne approach to centre control is to simply move into one or more of these squares. Alternatively, centre control may be accomplished through strategic exchanges. A man on square 13 or 20 often has a vital cramping or supporting part to play.",
    "diagrams": [
      {
        "id": 89,
        "label": "Double-Corner Cramp",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2E 3E 4U",
          "TA5EA6E 7E 8EU",
          "TEA9E !0E !1E !2U",
          "TB!3E !4E !5E !6EU",
          "TE !7EB!8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Double-Corner Cramp",
        "continuation": "",
        "commentary": {
          "-1": "The man on square 13, in conjunction with that on 18, imposes a severe cramp on Black's double-corner."
        }
      },
      {
        "id": 90,
        "label": "Single-Corner Cramp",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7EA8EU",
          "TE 9E !0EA!1EA!2U",
          "T !3E !4E !5E !6EU",
          "TE !7EB!8E !9EB@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Single-Corner Cramp",
        "continuation": "",
        "commentary": {
          "-1": "A white man on square 20 in conjunction with one on 18 imposes a severe cramp on Black's single-corner."
        }
      }
    ]
  },
  {
    "id": 17,
    "title": "Single-Corner and Double-Corner",
    "section": "strategy",
    "chapter": 5,
    "introText": "The relative vulnerability of the single-corner and the double-corner can easily be demonstrated by removing the four men which comprise each one. With just one entry square to the king-row, the single-corner zone is not very vulnerable to attack. Its men tend to be developed early.\n\nBy contrast, the double-corner is much easier to enter — you should retain as much strength as possible in this area. This explains the relative merit and frequency of various exchanges.",
    "diagrams": [
      {
        "id": 91,
        "label": "Removing White's Single-Corner Men",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2EB@3EB@4EU",
          "TE @5EB@6EB@7EB@8U",
          "T @9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Removing White's Single-Corner Men",
        "continuation": "",
        "commentary": {
          "-1": "With just one entry square to the king-row, the single-corner zone is not very vulnerable."
        }
      },
      {
        "id": 92,
        "label": "Removing White's Double-Corner Men",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "TB@1EB@2EB@3E @4EU",
          "TEB@5EB@6E @7E @8U",
          "TB@9EB#0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Removing White's Double-Corner Men",
        "continuation": "",
        "commentary": {
          "-1": "The double-corner is much more vulnerable — easy to enter the king-row."
        }
      }
    ]
  },
  {
    "id": 18,
    "title": "King-Row",
    "section": "strategy",
    "chapter": 5,
    "introText": "Retaining all four king-row men is futile for two reasons. First, you will be left with just 8 men in the outfield to fight against 10, and will be overwhelmed. Secondly, expert checkers rests upon the construction of sound formations, with different formations requiring different configurations of king-row pieces.\n\nBe completely flexible when it comes to moving your king-row men. Normally, the man on square 29 is moved early on, and that on square 31 retained to avoid structural weakness. The two most important formations are the long dyke and the triangle.",
    "diagrams": [
      {
        "id": 93,
        "label": "Fully Developed Long Dyke Formation",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3EB!4E !5E !6EU",
          "TE !7EB!8E !9E @0U",
          "T @1E @2EB@3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Fully Developed Long Dyke Formation",
        "continuation": "",
        "commentary": {
          "-1": "This aggressive formation has as its premise an attack upon the opponent's double-corner, typically initiated by the occupation of square 14."
        }
      },
      {
        "id": 94,
        "label": "Triangle Formation",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2EB@3E @4EU",
          "TE @5EB@6EB@7E @8U",
          "T @9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Triangle Formation",
        "continuation": "",
        "commentary": {
          "-1": "This defensive formation requires no setting up and may be employed by both players simultaneously. Keep it in place as long as possible."
        }
      }
    ]
  },
  {
    "id": 19,
    "title": "Development",
    "section": "strategy",
    "chapter": 5,
    "introText": "At the start of the game each player has four men on the first rank, four on the second rank and four on the third rank. At any stage it is possible to arithmetically assess the relative state of development of the opposing forces.\n\nIn the opening and early midgame it is an advantage to be less well developed than your opponent. This affords a greater reserve of waiting moves and prevents formations from collapsing in upon themselves. Do not become obsessed with development, but keep it in mind as it explains many otherwise puzzling moves.",
    "diagrams": []
  },
  {
    "id": 20,
    "title": "Avoiding Loose Ends",
    "section": "strategy",
    "chapter": 5,
    "introText": "Three major things to keep in mind in the late midgame: the avoidance of backward men, the need to break through the opponent's king-row, and knowledge of certain classic late midgame positions.\n\nIn the endgame, it is an advantage to be able to crown all of your own men while preventing your opponent from doing the same. When seeking to visualize a clearance, be spot-on with your timing — one move out is not good enough.",
    "diagrams": [
      {
        "id": 95,
        "label": "Breaking through the king-row",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EB!0E !1E !2U",
          "T !3E !4EB!5E !6EU",
          "TE !7E !8EB!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "10-6!; 1-10 15-6",
        "commentary": {
          "0": "10-6! Any other white move would lose. Timing is critical for a clearance like this."
        }
      },
      {
        "id": 96,
        "label": "Fifth Position",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0EA!1EA!2U",
          "TA!3EA!4E !5E !6EU",
          "TE !7E !8EB!9EB@0U",
          "TB@1EB@2E @3E @4EU",
          "TE @5E @6EB@7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Draw",
        "continuation": "20-16!; 11-20 27-23; 20-24 22-18; 24-27 18-9; 10-14 9-6; 27-31 6-2; 31-27 2-6; 27-18 6-9; 13-17 19-15!; 18-11 9-18; 17-22 18-25; 11-15 25-22!",
        "commentary": {
          "0": "20-16! A key pitch as Black was threatening to play 11-15.",
          "16": "19-15! Precise timing.",
          "22": "25-22! Drawn. Note that 21-17? would lose to 15-18!"
        }
      }
    ]
  },
  {
    "id": 21,
    "title": "The Opposition",
    "section": "strategy",
    "chapter": 5,
    "introText": "In any position where the forces are equal, a player is said to possess the opposition if, in the context of pairing up each of his pieces with those of his opponent (treating the board as empty each time), he has the last move.\n\nThe opposition may be disregarded in the opening and midgame, and is only worthy of consideration in endgame situations. Its two major applications are: when forces are equal, enabling a win; and when one side is a piece down, enabling a draw by holding an opponent's man immobile on the edge.\n\nThe opposition may be changed through an exchange of pieces or when a man enters the dog hole (squares 5 and 28).",
    "diagrams": []
  },
  {
    "id": 22,
    "title": "Playing Against Backward Men",
    "section": "strategy",
    "chapter": 5,
    "introText": "In a situation where one side can crown all of his pieces and the other side is unable to, things are very different from an equal all-king endgame. The plan consists of three steps: attacking the opponent's kings and rendering them immobile, forcing backward men to move into more vulnerable positions, and repeating until the pieces interfere with each other.\n\nWhen defending with a backward man, position your kings on the opposite side of the board from the backward man, so it can slink to the king-row without interference.",
    "diagrams": [
      {
        "id": 97,
        "label": "Two backward men — White wins",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2E 3EA4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TD!3ED!4ED!5ED!6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0EC#1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Either Side to Play, White Wins",
        "continuation": "",
        "commentary": {
          "-1": "White has crowned all pieces while Black has two undeveloped men. White forces a win with or without the opposition."
        }
      },
      {
        "id": 98,
        "label": "Backward man on opposite side draws",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4ED!5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2ED@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play, Black Draws",
        "continuation": "",
        "commentary": {
          "-1": "White has the opposition, but Black's backward man is on the opposite side and can slink to the king-row."
        }
      },
      {
        "id": 99,
        "label": "Defensive positioning",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3EA4U",
          "T 5E 6E 7E 8EU",
          "TE 9ED!0ED!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8ED!9E @0U",
          "TC@1EC@2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Either Side to Play, Black Draws",
        "continuation": "",
        "commentary": {
          "-1": "Black has wisely positioned his two kings on the opposite side from his backward man on square 4."
        }
      }
    ]
  },
  {
    "id": 23,
    "title": "First Position",
    "section": "strategy",
    "chapter": 5,
    "introText": "First Position is easily the most important endgame situation in checkers. The key features are: the attacker possesses the opposition; at least one of the opponent's pieces is a single-man; the attacker has or can develop two kings while keeping the single-man confined; and the opponent's king can be prevented from reaching the other double-corner.\n\nThe attacker follows the generic strategy of attacking kings and forcing the man to advance, while the defender delays the advance for as long as possible.",
    "diagrams": [
      {
        "id": 100,
        "label": "First Position",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3EA4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0ED!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8ED!9E @0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1EC#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "11-15; 32-28 15-18; 28-32 18-23; 32-28 23-27; 28-32 19-23; 32-28 27-32; 28-24 32-28; 24-20 23-19!; 20-24 19-15; 24-27 15-18; 4-8 18-15; 27-23 28-32; 8-12 32-28; 23-27 15-18; 12-16 28-32; 27-24 18-15; 24-28 15-11!; 16-19 32-27; 28-32 27-31; 19-23 11-15; 32-28 15-19!",
        "commentary": {
          "14": "23-19! 23-18? allows the black king to reach safety and a draw results.",
          "32": "15-11! 15-18? allows Black to get through with 16-19! 32-27; 19-23!",
          "40": "15-19! White wins at last."
        }
      }
    ]
  },
  {
    "id": 24,
    "title": "Second Position",
    "section": "strategy",
    "chapter": 5,
    "introText": "Second Position is another classic endgame situation which must be known. The attacker possesses the opposition, one of the opponent's men is held on each side of the board, and the third piece is or can become a king with severely limited scope.\n\nThe winning procedure is lengthy but mechanical. The attacker must carefully shuttle kings to hold men while releasing his own men to crown.",
    "diagrams": [
      {
        "id": 101,
        "label": "Second Position",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9EA@0U",
          "TA@1E @2E @3E @4EU",
          "TEC@5E @6EB@7E @8U",
          "T @9EB#0E #1ED#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "32-28; 25-22 28-24; 22-18 24-19; 18-22 19-15; 22-17 15-18; 17-13 18-22; 13-9 30-26; 9-6 26-23; 6-10 23-18; 10-6 18-14; 6-1 14-9; 1-5 9-6; 5-1 6-2; 1-5 2-6; 5-1 6-10; 1-5 10-15; 5-9 15-19; 9-14 27-23; 14-10 23-18; 10-6 18-14; 6-1 14-9; 1-5 9-6; 5-1 6-2; 1-5 2-6; 5-1 6-10; 1-5 10-14; 5-1 14-18; 1-6 18-23; 6-10 23-27; 10-14 19-23; 14-9 23-18; 9-6 18-14; 6-1 14-9; 1-5 22-17!; 5-14 17-10; 21-25 10-15; 25-30 15-19; 30-26 27-32; 26-22 19-24!; 20-27 32-23; 22-17 23-18; 17-13 18-14",
        "commentary": {
          "12": "Now that the white king is holding the black man on 21, his own man on 30 can be released.",
          "34": "Now that the white king is holding the black man on 20, his own man on 27 can be released.",
          "68": "22-17! This exchange alters the opposition, but White can regain it.",
          "78": "19-24! Regains the opposition and cuts Black off just in time."
        }
      }
    ]
  },
  {
    "id": 25,
    "title": "One v Two Holds",
    "section": "strategy",
    "chapter": 5,
    "introText": "There are 11 ways in which one king can hold two opposing pieces on the left or right-hand side of the board. On its own, this hold will allow the piece-down side to score a draw (7 cases) or even a win (4 cases).\n\nWhere the forces are equal and such a hold can be obtained as part of a larger setup, it is almost always something to be sought and may be the telling factor in obtaining a win.",
    "diagrams": [
      {
        "id": 102,
        "label": "One v Two Hold — White wins",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "TA5E 6E 7E 8EU",
          "TE 9E !0E !1E !2U",
          "TA!3ED!4E !5E !6EU",
          "TE !7E !8ED!9E @0U",
          "T @1E @2ED@3E @4EU",
          "TE @5E @6E @7EC@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Either Side to Play, White Wins",
        "continuation": "",
        "commentary": {
          "-1": "The white king on 14 holds the two black men on 5 and 13, while the two white kings carry out the rout of the lone black king."
        }
      }
    ]
  },
  {
    "id": 26,
    "title": "Piece-Down Situations",
    "section": "strategy",
    "chapter": 5,
    "introText": "To obtain a draw when a piece down, the defending side seeks to hold one of the opponent's men immobile on a vertical edge of the board — the pivot man. Payne's Single-Corner Draw is the most famous of these situations.\n\nThird Position is closely related but with a different outcome — the attacker can force a win with super-fine play, though the defender's possession of the opposition allows a tremendous fight.",
    "diagrams": [
      {
        "id": 103,
        "label": "Payne's Single-Corner Draw",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6EC7E 8EU",
          "TE 9E !0EC!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7ED!8ED!9EB@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play and Draw",
        "continuation": "7-10 19-16; 10-7 18-23; 11-8 16-12; 8-11 23-19; 7-3 12-16; 3-7 19-24; 11-15 24-28; 15-11 16-19; 7-3 28-32; 3-7",
        "commentary": {
          "4": "11-8 — Asking for 23-19?; 8-12 and a black win.",
          "8": "7-3 — 7-10? loses in a similar fashion to Diagram 16.",
          "-1": "Black possesses the opposition. If the attacking side tries too hard to win this draw, he often ends up losing."
        }
      },
      {
        "id": 104,
        "label": "Third Position",
        "lines": [
          "QRRRRRRRRS",
          "TE 1E 2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9E !0EC!1ED!2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8EC!9ED@0U",
          "T @1E @2E @3E @4EU",
          "TE @5E @6E @7EB@8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "",
        "commentary": {
          "-1": "Black has the opposition but White can force a win with super-fine play. Lacking the opposition, Black loses with barely a whimper."
        }
      }
    ]
  },
  {
    "id": 27,
    "title": "Bridge Endgames",
    "section": "strategy",
    "chapter": 5,
    "introText": "A bridge is formed when a player posts a man on square 10 (the keystone) to enter the king-row via 9-6 or 11-7. Some authorities think the side forming a bridge is necessarily weak, but this advice is faulty — bridges can sometimes be strong for the forming side.\n\nIn short, bridges are very tricky: both from the standpoint of holding them and forming them. A firm understanding of the key ones is vital, but in general their avoidance is advisable.",
    "diagrams": [
      {
        "id": 105,
        "label": "Bridge — strong for forming side",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "T 5E 6E 7E 8EU",
          "TED9EB!0ED!1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1E @2EC@3E @4EU",
          "TE @5E @6E @7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play and Win",
        "continuation": "",
        "commentary": {
          "-1": "White has crowned two men under a bridge and got his kings back out. White has the opposition and Black has two backward men."
        }
      },
      {
        "id": 106,
        "label": "Bridge — weak for forming side",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "TB5ED6ED7E 8EU",
          "TE 9EB!0E !1E !2U",
          "T !3E !4E !5E !6EU",
          "TE !7E !8E !9E @0U",
          "T @1EC@2E @3E @4EU",
          "TE @5E @6EC@7E @8U",
          "T @9E #0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play and Win",
        "continuation": "",
        "commentary": {
          "-1": "Black has the opposition and has crowned two kings, while White is tied down to protecting the keystone."
        }
      }
    ]
  },
  {
    "id": 28,
    "title": "Old 14th (Trunk)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The trunk of the repertoire with White responds to Black's strongest opening move, 11-15, with the flanking 23-19. The main line continues 8-11 22-17; 4-8 17-13; 15-18 24-20; 9-14 28-24; 11-15 26-23; 8-11 31-26; 6-9 13-6; 2-9 26-22; 1-6 reaching an even position.\n\nThe Old 14th is one of the most deeply analyzed openings in checkers. The key strategic ideas include White's plan to invite Black to overcrowd the centre, and the famous Big Shot trap that punishes 9-13? with 20-16! and 22-17!",
    "diagrams": [
      {
        "id": 107,
        "label": "Old 14th",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "TA5E 6EA7E 8EU",
          "TEA9EA!0EA!1EA!2U",
          "T !3EA!4EA!5E !6EU",
          "TE !7EA!8EB!9EB@0U",
          "TB@1EB@2EB@3EB@4EU",
          "TEB@5E @6EB@7E @8U",
          "TB@9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 29,
    "title": "Glasgow (V1 off Trunk)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Glasgow arises when Black plays 11-16 instead of 4-8 at the trunk's branch point. Black temporarily gives up a man to rapidly develop his single-corner while attacking White's double-corner.\n\nAfter the Glasgow sequence, Black's double-corner is intact while White's is shattered. In compensation, White has a slight cramp on Black's single-corner. Tom Wiswell advocated this opening for players of all levels.",
    "diagrams": [
      {
        "id": 108,
        "label": "Glasgow",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2E 3E 4U",
          "TA5EA6E 7EA8EU",
          "TEA9EA!0E !1EA!2U",
          "T !3E !4E !5E !6EU",
          "TEB!7E !8EA!9EB@0U",
          "TB@1EB@2E @3E @4EU",
          "TEB@5EB@6E @7E @8U",
          "T @9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 30,
    "title": "Mixed (V2 off V1)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Mixed arises from 9-13 instead of 11-16 in the Glasgow line. It is noted for its fearsome complications. White exchanges onto square 14, and after a series of exchanges the position simplifies.\n\nThe key exchange with 27-23; 18-27 32-23 is quite unusual (radical in Lesson 17 terms) but justified because it anticipates Black's own exchange plans.",
    "diagrams": [
      {
        "id": 109,
        "label": "Mixed",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "TA5E 6EA7EA8EU",
          "TE 9E !0E !1EA!2U",
          "TA!3EB!4E !5E !6EU",
          "TE !7EB!8E !9EB@0U",
          "T @1E @2E @3E @4EU",
          "TE @5EB@6E @7EB@8U",
          "TB@9EB#0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 31,
    "title": "Souter (V3 off V2)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Souter arises from 9-14 in the Mixed line. Black moves naturally towards the centre while keeping options open. The formation is loved and loathed in equal measure.\n\nWhite must be prepared for multiple branch points. The key trap to avoid is 8-11? 32-27! which leads to a crushing bottled-up position for Black.",
    "diagrams": [
      {
        "id": 110,
        "label": "Souter",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2EA3E 4U",
          "TA5E 6EA7EA8EU",
          "TEB9E !0E !1EA!2U",
          "T !3EA!4EA!5E !6EU",
          "TE !7E !8E !9EB@0U",
          "T @1EB@2EB@3EB@4EU",
          "TEB@5E @6E @7E @8U",
          "T @9EB#0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 32,
    "title": "Alma (V4 off V3)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Alma arises from 3-8 in the Souter line. It is a favourite among several master players but rightly shunned by the rank and file because of the difficulties it presents.\n\nThe remarkable sacrifice with 24-20! looks like a blunder at first sight but is justified because of Black's strangulated single-corner. Knowledge is power in this variation.",
    "diagrams": [
      {
        "id": 111,
        "label": "Alma",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3EA4U",
          "TA5E 6E 7EA8EU",
          "TEA9EA!0EA!1EA!2U",
          "TB!3E !4E !5EA!6EU",
          "TE !7EB!8E !9EB@0U",
          "T @1E @2EB@3EA@4EU",
          "TE @5EB@6E @7E @8U",
          "TB@9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 33,
    "title": "Centre (V5 off V4)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Centre opening arises from 15-18 in the Alma line. Permitting a great deal of variety for both sides and being very evenly balanced, it is something of a mystery why it is not adopted more often.\n\nWhite initiates a natural 2-for-2 exchange with 19-15 and both sides develop along clear strategic lines. The position offers winning chances for both players.",
    "diagrams": [
      {
        "id": 112,
        "label": "Centre",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "TA5EA6EA7E 8EU",
          "TE 9E !0E !1E !2U",
          "TA!3EB!4EA!5E !6EU",
          "TE !7EA!8E !9EA@0U",
          "TB@1E @2EB@3EB@4EU",
          "TEB@5EB@6EB@7EB@8U",
          "TB@9E #0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 34,
    "title": "Defiance (V6 off Trunk)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Defiance arises when Black plays 9-14 instead of 8-11 at the trunk's second branch point. White responds with the restrictive 27-23, denying Black other opening developments.\n\nOne of the strong points of this defence is that many of the moves pick themselves. After the standard exchanges, both sides are left with very even positions.",
    "diagrams": [
      {
        "id": 113,
        "label": "Defiance",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "T 5E 6EA7EA8EU",
          "TE 9E !0E !1EA!2U",
          "T !3EA!4EA!5E !6EU",
          "TE !7E !8E !9EB@0U",
          "TB@1EB@2EB@3E @4EU",
          "TE @5EB@6E @7E @8U",
          "T @9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 35,
    "title": "7-11 Defiance (V7 off V6)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The 7-11 Defiance arises when Black plays 7-11 instead of 8-11 in the Defiance line. The dynamic 7-11 move should be compared with its white counterpart 26-22.\n\nWhite's approach with 27-23 harnesses the limitations of Black's 7-11 move rather than accentuating its strengths. After the standard exchange sequences, the position is even.",
    "diagrams": [
      {
        "id": 114,
        "label": "7-11 Defiance",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "T 5EA6E 7EA8EU",
          "TE 9EA!0E !1EA!2U",
          "T !3EA!4E !5E !6EU",
          "TEB!7E !8EB!9EB@0U",
          "TB@1E @2EB@3E @4EU",
          "TE @5EB@6E @7E @8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 36,
    "title": "Will O' The Wisp (V8 off V7)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Will O' The Wisp arises from 9-13 in the 7-11 Defiance line. It is a completely even opening with elusive qualities suggested by its name.\n\nAfter the exchange sequences, both sides develop naturally. Of the 8 possible black moves at the critical juncture, 7 of them are sound — a testament to the game's remarkable balance.",
    "diagrams": [
      {
        "id": 115,
        "label": "Will O’ The Wisp",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2EA3E 4U",
          "T 5E 6EA7E 8EU",
          "TE 9EA!0EA!1EA!2U",
          "TA!3EA!4EA!5E !6EU",
          "TE !7E !8EB!9E @0U",
          "TB@1EB@2EB@3EB@4EU",
          "TE @5EB@6E @7EB@8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 37,
    "title": "Reply to 9-14 (V9)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When Black opens with 9-14, White responds with the logical 22-18, getting to the centre first. The continuation 5-9 24-19 leads to a forcing sequence.\n\nThe key insight is that Black must play 5-9 — permitting the exchange with other moves grants White a definite advantage. After the main line, both sides navigate through tricky shoals to reach equality.",
    "diagrams": [
      {
        "id": 116,
        "label": "Reply to 9-14",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2EA3E 4U",
          "TA5EA6E 7E 8EU",
          "TEA9EA!0EA!1EA!2U",
          "T !3EA!4E !5E !6EU",
          "TE !7EB!8EB!9E @0U",
          "TB@1EB@2EB@3EB@4EU",
          "TE @5EB@6E @7EB@8U",
          "T @9EB#0E #1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 38,
    "title": "Reply to 11-16 (V10)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When Black opens with 11-16, moving from the single-corner toward the side, White can take the initiative with 24-19. The early movement of the apex man with 26-22 is particularly effective.\n\nThis landing permits many winning chances for White, making it a favourite that you will seek again and again once thoroughly familiar with it.",
    "diagrams": [
      {
        "id": 117,
        "label": "Reply to 11-16",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "T 5EA6EA7E 8EU",
          "TE 9EA!0EA!1EA!2U",
          "T !3EA!4E !5E !6EU",
          "TEB!7EB!8EB!9EA@0U",
          "TB@1E @2EB@3E @4EU",
          "TE @5EB@6EB@7E @8U",
          "TB@9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 39,
    "title": "Reply to 10-15 (V11)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When Black opens with 10-15, White responds with 21-17 directed towards the hole on square 10. The continuation 11-16 17-13; 16-20 23-18 leads to positions with a slight White edge.\n\nThe key challenge for Black is finding the right balance between development and maintaining structural integrity. White has many winning chances from the resulting positions.",
    "diagrams": [
      {
        "id": 118,
        "label": "Reply to 10-15",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "T 5EA6E 7EA8EU",
          "TE 9EA!0E !1EA!2U",
          "TB!3EA!4E !5EA!6EU",
          "TE !7E !8EB!9EA@0U",
          "TB@1EB@2EB@3E @4EU",
          "TEB@5EB@6EB@7E @8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 40,
    "title": "Reply to 10-14 (V12)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When Black opens with 10-14, a flanking move, White has several strong replies. The best is 24-19, although 22-18 and 22-17 are also favoured.\n\nAfter the main line exchanges, White obtains a clear advantage. Two key points emerge: Black must time his breakthrough through White's king-row precisely, and White must maintain pressure on Black's double-corner.",
    "diagrams": [
      {
        "id": 119,
        "label": "Reply to 10-14",
        "lines": [
          "QRRRRRRRRS",
          "TEA1E 2E 3EA4U",
          "T 5E 6E 7EA8EU",
          "TE 9EA!0EA!1EA!2U",
          "T !3E !4E !5E !6EU",
          "TEB!7E !8E !9E @0U",
          "TB@1E @2E @3EB@4EU",
          "TEB@5E @6E @7E @8U",
          "T @9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 41,
    "title": "Reply to 12-16 (V13)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When Black opens with 12-16, White immediately cramps Black's single-corner with 24-20. This is the key reason why 12-16 ranks 6th in strength among Black's opening moves.\n\nThe cramping theme continues throughout the variation. Black must break the cramp quickly or face a suffocating position.",
    "diagrams": [
      {
        "id": 120,
        "label": "Reply to 12-16",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3EA4U",
          "TA5EA6EA7EA8EU",
          "TE 9E !0E !1EA!2U",
          "TA!3EB!4E !5E !6EU",
          "TE !7E !8E !9EB@0U",
          "T @1EB@2E @3E @4EU",
          "TEB@5EB@6EB@7E @8U",
          "T @9E #0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 42,
    "title": "Reply to 9-13 (V14)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When Black opens with 9-13, exiting from the double-corner to the side, White takes the centre with 22-18. This is easily Black's weakest opener, though it finds favour with 99% of the general public who regard it as safe.\n\nWhite maintains a definite advantage throughout the variation, with multiple winning chances if Black is incautious.",
    "diagrams": [
      {
        "id": 121,
        "label": "Reply to 9-13",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2E 3E 4U",
          "T 5E 6E 7E 8EU",
          "TE 9EA!0EA!1EA!2U",
          "TA!3EA!4E !5EA!6EU",
          "TE !7E !8EB!9E @0U",
          "TB@1EB@2EB@3E @4EU",
          "TE @5EB@6E @7E @8U",
          "T @9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "Black to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 43,
    "title": "9-14 22-18 Trunk (With Black)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "Playing Black, the recommended opening is 9-14, which is 50-50 in theoretical strength against White's best reply. It is more restrictive than 11-15 and thus easier for a newcomer to gain a working knowledge of.\n\nThe main trunk responds to 22-18 with 5-9 25-22, leading to a series of exchanges and waiting moves that result in a mixed formation with many tactical possibilities.",
    "diagrams": [
      {
        "id": 122,
        "label": "9-14 22-18 Trunk (With Black)",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3EA4U",
          "TA5EA6EA7EA8EU",
          "TE 9E !0E !1E !2U",
          "TA!3EB!4EB!5E !6EU",
          "TE !7EA!8EA!9E @0U",
          "TB@1E @2E @3E @4EU",
          "TEB@5EB@6EB@7EB@8U",
          "T @9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 44,
    "title": "9-14 22-18; 5-9 24-19 (V1 off Trunk)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When White responds with 24-19 instead of 25-22, the variation leads to restrictive play. White's 26-22 and 27-24 combination limits Black's options.\n\nFrom a practical standpoint, finding the draw from the resulting position is White's problem, and the correct continuation is so beautiful that it demands to be shown.",
    "diagrams": [
      {
        "id": 123,
        "label": "9-14 22-18; 5-9 24-19 (V1 off Trunk)",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2EA3E 4U",
          "T 5EA6E 7E 8EU",
          "TE 9EA!0E !1EA!2U",
          "TA!3EA!4EA!5E !6EU",
          "TE !7E !8EB!9EB@0U",
          "TB@1EB@2EB@3E @4EU",
          "TE @5E @6E @7E @8U",
          "TB@9EB#0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 45,
    "title": "9-14 22-18; 5-9 24-20 (V2 off V1)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When White plays 24-20, it permits more room for manoeuvre. The continuation 11-16 20-11; 8-22 25-18 keeps the position intact and restricts options.\n\nBoth sides develop along forcing lines, with Black maintaining a compact and solid position throughout.",
    "diagrams": [
      {
        "id": 124,
        "label": "9-14 22-18; 5-9 24-20 (V2 off V1)",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "T 5EA6EA7E 8EU",
          "TE 9EA!0EA!1EA!2U",
          "TA!3EA!4EA!5E !6EU",
          "TE !7E !8E !9EB@0U",
          "TB@1EB@2EB@3EB@4EU",
          "TE @5EB@6E @7EB@8U",
          "T @9EB#0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 46,
    "title": "9-14 22-17 Pioneer (V3 off Trunk)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "When White responds to 9-14 with 22-17 instead of 22-18, Black plays 11-15 naturally towards the centre. The Pioneer formation is passive and preserves the triangles of both sides.\n\nThe Whilter and Double-Corner Dyke are alternative formations available to Black, each with distinct strategic characteristics.",
    "diagrams": [
      {
        "id": 125,
        "label": "Pioneer",
        "lines": [
          "QRRRRRRRRS",
          "TEA1EA2EA3E 4U",
          "T 5EA6EA7E 8EU",
          "TE 9E !0E !1EA!2U",
          "TB!3E !4E !5EA!6EU",
          "TEA!7EB!8EB!9EA@0U",
          "T @1E @2EB@3E @4EU",
          "TE @5EB@6EB@7E @8U",
          "T @9EB#0EB#1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 47,
    "title": "9-14 24-20 Ayrshire Lassie (V4 off V3)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Ayrshire Lassie formation arises from the 3-8 move filling in the hole on square 7. In freestyle play this arose as 11-15 24-20; 8-11 28-24; 3-8 23-19; 9-14 22-17; 5-9.\n\nThe variation leads to positions where Black has a slight edge, with White needing to exercise caution to maintain equality.",
    "diagrams": [
      {
        "id": 126,
        "label": "3-8 Ayrshire Lassie",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "TA5EA6EA7EA8EU",
          "TEA9EA!0E !1EA!2U",
          "TB!3EA!4EA!5E !6EU",
          "TE !7EA!8EB!9E @0U",
          "TB@1EB@2EB@3EB@4EU",
          "TEB@5E @6EB@7E @8U",
          "TB@9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 48,
    "title": "9-14 23-19 Whilter (V5 off V4)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Whilter formation is formed by the dynamic 7-11 move at the earliest possible point. This should be compared with its white counterpart 26-22.\n\nWith 7-11 played instead of 8-11, Black can jump back towards the centre should White play inferior moves, providing a key tactical advantage.",
    "diagrams": [
      {
        "id": 127,
        "label": "Whilter",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2E 3E 4U",
          "TA5EA6EA7EA8EU",
          "TEA9EA!0EA!1EA!2U",
          "TB!3EA!4EA!5E !6EU",
          "TEB!7E !8EB!9EA@0U",
          "TB@1EB@2EB@3EB@4EU",
          "TE @5EB@6EB@7EB@8U",
          "T @9EB#0E #1EB#2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 49,
    "title": "9-14 24-19 Second Double-Corner (V6 off V5)",
    "section": "repertoire",
    "chapter": 6,
    "introText": "The Second Double-Corner arises when White duplicates Black's initial move with 24-19, typically leading to very evenly balanced games.\n\nBlack's slight advantage comes from getting to the centre first. The unexpected waiting move 4-8 has proved effective on many occasions.",
    "diagrams": [
      {
        "id": 128,
        "label": "9-14 Second Double-Corner",
        "lines": [
          "QRRRRRRRRS",
          "TE 1EA2EA3E 4U",
          "T 5EA6E 7EA8EU",
          "TE 9EA!0EA!1EA!2U",
          "T !3EA!4E !5E !6EU",
          "TE !7E !8EB!9E @0U",
          "TB@1E @2EB@3E @4EU",
          "TEB@5EB@6EB@7E @8U",
          "T @9EB#0EB#1E #2EU",
          "VWWWWWWWWX"
        ],
        "objective": "White to Play",
        "continuation": "",
        "commentary": {}
      }
    ]
  },
  {
    "id": 50,
    "title": "Elimination & Visualization",
    "section": "skills",
    "chapter": 7,
    "introText": "Elimination is a key skill used by experts in the opening and early midgame. First, eliminate moves which lead to the immediate loss of material without compensation. Secondly, eliminate those which are strategically awful. Thirdly, from the remaining moves, identify those in keeping with the needs of the position. Finally, use visualization combined with static evaluations to choose the actual move.\n\nVisualization is a technical skill which needs to be supported by understanding. In quiescent positions, tactical opportunities are limited; whereas in mixed formations, there are many contact points and tactical possibilities abound. The two skills work hand in hand.",
    "diagrams": []
  }
];

// Puzzles extracted from the book's tactical diagrams.
// Each puzzle tests whether the user can find the key first move.
export const puzzles = [
  {
    "id": 1,
    "diagramId": 5,
    "lessonId": 3,
    "category": "endgame",
    "objective": "Black to Play, White Wins",
    "correctFirstMove": {
      "from": 31,
      "to": 27
    },
    "fullSolution": "31-27 (Or 31-26 23-30) 23-32",
    "hint": "Black is pinned. Either direction leads to capture."
  },
  {
    "id": 2,
    "diagramId": 6,
    "lessonId": 3,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 4,
      "to": 8
    },
    "fullSolution": "4-8; 29-25; 8-11!; 25-22 11-15!; 22-26 (Black is forced to give ground because White possesses what is known as the opposition. Note that 22-17 fares no better) 15-18; 26-31 (Or 26-30 18-22) 18-23",
    "hint": "Use the opposition to drive Black to the side."
  },
  {
    "id": 3,
    "diagramId": 8,
    "lessonId": 3,
    "category": "endgame",
    "objective": "White to Play, Black Draws",
    "correctFirstMove": {
      "from": 5,
      "to": 9
    },
    "fullSolution": "5-9; 12-16! 9-14; 16-19 (16-20 is also okay, but both 16-11? and 16-12? lose) 14-18; 19-24! 1823; 24-28! 23-27; 28-32 27-23 (Or 27-24 or 27-31) and we have reached Diagram 7",
    "hint": "Head for the double-corner diagonals."
  },
  {
    "id": 4,
    "diagramId": 10,
    "lessonId": 4,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 5,
      "to": 9
    },
    "fullSolution": "5-9; 15-19 (15-18 comes to the same thing, while 15-11 just hastens the end) 6-10; 19-24 (The same comments apply to 19-23 and 19-16) 10-15 (There is no need to memorize specific moves, just the general strategy); 24-28 (Once again, 24-27 is essentially the same; 24-20 loses quickly) 15-19; 28-32 9-14; 32-28 14-18; 28-32 18-23; 32-28 2327; 28-32 19-23!; 32-28 27-32! (Entering the double-corner and forcing Black out); 28-24 32-28; 24-20 23-18!; 20-16 18-15; 16-20 15-11! White wins",
    "hint": "Pursue the lone king to the double-corner, then force it out."
  },
  {
    "id": 5,
    "diagramId": 11,
    "lessonId": 4,
    "category": "endgame",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 18,
      "to": 22
    },
    "fullSolution": "18-22!; 30-25 22-26 (Or 22-17); 25-30 (Note that 25-22 26-17; 29-25 has no real merit as White can escape to the double-corner) 26-22 etc … Drawn by a see-saw operation",
    "hint": "Use the single-corner to set up a see-saw."
  },
  {
    "id": 6,
    "diagramId": 12,
    "lessonId": 5,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 18
    },
    "fullSolution": "15-18; 9-5 (The situation being symmetrical, the reader will observe that 27-32 is in effect the same. Of course 9-13 loses quickly by 10-14) 10-6; 27-32 (5-1 would allow a simple exchange with 18-15) 19-23 (This threatens the 6-9 exchange); 5-1 (Or else!) 6-9; 32-28 (Against 1-5 White replies with 9-14 with the threat of two simple exchanges on his next move) 23-27 (This line-up, rather than the individual moves, is what you need to commit to memory); 1-5 (Or 28-32) 27-23; 5-14 18-9",
    "hint": "Threaten to exchange down to 2K v 1K."
  },
  {
    "id": 7,
    "diagramId": 13,
    "lessonId": 5,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 19,
      "to": 23
    },
    "fullSolution": "19-23! (Widely criticized in many beginner’s books, 18-15 being the usual approach, but is actually simplest and best); 28-32 (27-32 is suicidal, while 27-31 allows White to exchange with 23-27) 20-16!; 27-31 (Against 2724 White replies with 18-15! After this, he effects an exchange with 16-11 against 24-27, does the same with 23-18 against 2420 and confiscates the black king on square 24 with 16-20 should Black play 32-28) 16-11!; 32-28 (If 31-27 White exchanges with 18-15) 11-15!; 28-32 23-26; 31-22 18-25",
    "hint": "What move puts maximum pressure on the defending kings?"
  },
  {
    "id": 8,
    "diagramId": 14,
    "lessonId": 5,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 16,
      "to": 19
    },
    "fullSolution": "16-19! (Offering Black what is known as a 2 for 1); 27-31 (27-24 20-27; 32-16 28-24 and White wins with the opposition) 20-24!; 32-27 (Against 31-26 White exchanges with 19-23) 28-32! (24-20?? permits a draw with 27-24); 27-20 19-24; 20-27 32-23",
    "hint": "Offer a 2-for-1 to break through."
  },
  {
    "id": 9,
    "diagramId": 15,
    "lessonId": 5,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 23,
      "to": 26
    },
    "fullSolution": "23-26!; (Getting ready) 28-32 2724! (Throwing a piece like this is called a pitch); 20-27 26-31! (Trapping the black king)",
    "hint": "Prepare a pitch to trap the defending king."
  },
  {
    "id": 10,
    "diagramId": 16,
    "lessonId": 6,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 10
    },
    "fullSolution": "15-10; 21-25 14-17; 22-26 17-21; 25-22 10-14; 26-23 14-17; 23-26 (22-18 allows White to win with both 17-14 and 17-22) 21-25!; 22-29 17-22; 26-17 13-22",
    "hint": "Look for a pitch to clinch the win."
  },
  {
    "id": 11,
    "diagramId": 17,
    "lessonId": 6,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 14
    },
    "fullSolution": "18-14! (Of course. Remember, having obtained a winning position the goal is to win as eﬀiciently as possible); 25-9 5-14; 29-25 14-18",
    "hint": "Exchange as efficiently as possible."
  },
  {
    "id": 12,
    "diagramId": 18,
    "lessonId": 6,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 11
    },
    "fullSolution": "15-11! (Getting into position); 30-25 18-15; 25-18 15-22",
    "hint": "Get into position for the decisive exchange."
  },
  {
    "id": 13,
    "diagramId": 19,
    "lessonId": 6,
    "category": "endgame",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 18,
      "to": 22
    },
    "fullSolution": "18-22; 30-25 23-18; 25-30 (21-17 22-13; 25-22 18-25; 29-22 achieves nothing) 18-23 … Drawn",
    "hint": "Use the single-corner sanctuary for a see-saw draw."
  },
  {
    "id": 14,
    "diagramId": 20,
    "lessonId": 6,
    "category": "endgame",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 18,
      "to": 22
    },
    "fullSolution": "18-22; 30-25 23-18; 25-30 18-23; 30-25 23-18; 31-27 (Trying something different) 22-26; 25-21 26-22; 27-32 18-23; 32-28 23-27",
    "hint": "Maintain the see-saw despite Black trying something different."
  },
  {
    "id": 15,
    "diagramId": 21,
    "lessonId": 7,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 15
    },
    "fullSolution": "18-15 (Threatening to exchange with 9-6); 1-5 (Moving out of the way) 9-6; 28-32 15-10; 32-28 (5-1 would permit the exchange with 10-15) 6-1; 28-32 (Against 5-9 White retorts with 19-23!; 27-18 10-14 – an imaginative way of cutting down the pieces) 10-14 (Locking the king up completely); 32-28 20-16 (All of White’s moves are now directed at forcing a simple exchange, and there is nothing Black can do to prevent it); 27-24 19-15; 24-27 16-11; 27-23 15-10; 28-24 11-7; 23-27 14-9; 5-14 10-17 and the situation has been reduced to 3 kings against 2",
    "hint": "Threaten an exchange to reduce to 3K v 2K."
  },
  {
    "id": 16,
    "diagramId": 22,
    "lessonId": 7,
    "category": "endgame",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17 (Leaving the king on square 22 where it has a key role to play); 27-31 (28-32 19-24; 27-31 24-28 loses more quickly) 20-24; 28-32 24-28; 31-27 19-16; 27-31 16-20; 31-27 22-26! (A classic pitch); 30-23 28-24!; 27-31 24-27 31-24 20-18",
    "hint": "Force the defending kings to the edge, then pitch."
  },
  {
    "id": 17,
    "diagramId": 23,
    "lessonId": 7,
    "category": "endgame",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 18,
      "to": 23
    },
    "fullSolution": "18-23; 20-24 19-15; 31-27 22-18; 24-20 15-19 … Drawn",
    "hint": "Find the drawing formation for 3 kings against 4."
  },
  {
    "id": 18,
    "diagramId": 24,
    "lessonId": 7,
    "category": "endgame",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 15,
      "to": 19
    },
    "fullSolution": "15-19; 20-24 19-15; 24-27 23-19; 27-31 19-23; 28-24 23-19; 24-27 15-11! (You should work out why 15-18?? is a disaster); 32-28 11-15; 27-24 19-23; 24-20 1519; 28-32 23-18; 31-27 18-15; 32-28 15-18; 27-32 18-23",
    "hint": "Maintain the see-saw to hold the draw with 3 kings."
  },
  {
    "id": 19,
    "diagramId": 25,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 17,
      "to": 14
    },
    "fullSolution": "17-14!; 10-17 21-5",
    "hint": "Look for a sacrifice that opens a double jump."
  },
  {
    "id": 20,
    "diagramId": 26,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 24,
      "to": 19
    },
    "fullSolution": "24-19!; 15-24 28-12",
    "hint": "Which piece can you sacrifice to set up a double jump?"
  },
  {
    "id": 21,
    "diagramId": 27,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 25,
      "to": 22
    },
    "fullSolution": "25-22!; 18-25 (Or 17-26) 30-14",
    "hint": "Sacrifice on one side to gain on the other."
  },
  {
    "id": 22,
    "diagramId": 28,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 27,
      "to": 24
    },
    "fullSolution": "27-24!; 20-27 32-14",
    "hint": "Look for a cross-board sacrifice."
  },
  {
    "id": 23,
    "diagramId": 29,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 32,
      "to": 28
    },
    "fullSolution": "32-28!; 23-32 30-14",
    "hint": "Can you sacrifice from the back row?"
  },
  {
    "id": 24,
    "diagramId": 30,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 25,
      "to": 21
    },
    "fullSolution": "25-21!; 18-25 27-11",
    "hint": "Apply pressure from the side."
  },
  {
    "id": 25,
    "diagramId": 31,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 10
    },
    "fullSolution": "15-10!; 6-15 11-27",
    "hint": "Can a king sacrifice win two men?"
  },
  {
    "id": 26,
    "diagramId": 32,
    "lessonId": 8,
    "category": "2-for-1",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 2,
      "to": 6
    },
    "fullSolution": "2-6!; 1-10 7-23",
    "hint": "Look for a king-based sacrifice."
  },
  {
    "id": 27,
    "diagramId": 33,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 20,
      "to": 16
    },
    "fullSolution": "20-16!; 12-19 27-23; 19-26 31-13",
    "hint": "Give up two to gain position."
  },
  {
    "id": 28,
    "diagramId": 34,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17!; 14-21 28-24; 20-27 32-14",
    "hint": "Create a hole for the follow-up."
  },
  {
    "id": 29,
    "diagramId": 35,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 15
    },
    "fullSolution": "18-15!; 10-26 31-13",
    "hint": "Set up a cross-board exchange."
  },
  {
    "id": 30,
    "diagramId": 36,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 26,
      "to": 22
    },
    "fullSolution": "26-22!; 17-26 30-16; 11-20 18-15",
    "hint": "Look for a triple-jump finish."
  },
  {
    "id": 31,
    "diagramId": 37,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 11,
      "to": 8
    },
    "fullSolution": "11-8!; 4-11 18-15 (It would be superfluous assigning a exclamation mark here: the first move of the combination is the one requiring the foresight); 11-18 14-32",
    "hint": "The first move requires foresight."
  },
  {
    "id": 32,
    "diagramId": 38,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 10,
      "to": 7
    },
    "fullSolution": "10-7!; 2-11 19-15; 11-18 14-32",
    "hint": "Mirror the previous pattern."
  },
  {
    "id": 33,
    "diagramId": 39,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 10,
      "to": 6
    },
    "fullSolution": "10-6!; 2-18 15-31",
    "hint": "Set up a king run."
  },
  {
    "id": 34,
    "diagramId": 40,
    "lessonId": 9,
    "category": "2-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 15
    },
    "fullSolution": "18-15! (Highly imaginative); 1019 12-16; 3-12 16-32",
    "hint": "Think imaginatively about king promotion."
  },
  {
    "id": 35,
    "diagramId": 41,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 15
    },
    "fullSolution": "18-15!; 11-18 27-23; 18-27 (Or 19-26) 31-6",
    "hint": "Sacrifice two to gain three."
  },
  {
    "id": 36,
    "diagramId": 42,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 14
    },
    "fullSolution": "18-14!; 10-17 26-22; 17-26 30-7",
    "hint": "Clear the centre with exchanges."
  },
  {
    "id": 37,
    "diagramId": 43,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 19,
      "to": 15
    },
    "fullSolution": "19-15!; 10-19 (Or 11-18) 26-22; 17-26 30-7",
    "hint": "Look for a side variation of the 3-for-2."
  },
  {
    "id": 38,
    "diagramId": 44,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17! (Creating a hole); 14-21 27-24; 20-27 32-5",
    "hint": "Create a hole for the multi-jump."
  },
  {
    "id": 39,
    "diagramId": 45,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 10
    },
    "fullSolution": "15-10! (Creating the desired pattern); 6-15 22-17; 13-22 25-4",
    "hint": "Create the desired pattern for a triple jump."
  },
  {
    "id": 40,
    "diagramId": 46,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 15
    },
    "fullSolution": "18-15!; 11-18 32-28; 23-32 30-5",
    "hint": "Extend the 2-for-1 idea."
  },
  {
    "id": 41,
    "diagramId": 47,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 10
    },
    "fullSolution": "15-10!; 6-15 (Or 7-14) 27-23; 18-27 25-2",
    "hint": "A double sacrifice leads to king promotion."
  },
  {
    "id": 42,
    "diagramId": 48,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 19,
      "to": 16
    },
    "fullSolution": "19-16!; 11-27 32-7",
    "hint": "Squeeze to force a devastating multi-jump."
  },
  {
    "id": 43,
    "diagramId": 49,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 17,
      "to": 14
    },
    "fullSolution": "17-14!; 9-18 10-6; 3-10 6-31",
    "hint": "Combine kings and men in the combination."
  },
  {
    "id": 44,
    "diagramId": 50,
    "lessonId": 10,
    "category": "3-for-2",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 11,
      "to": 15
    },
    "fullSolution": "11-15! (A ‘blind’ shot like this is often overlooked); 19-10 28-24; 20-27 32-7",
    "hint": "Look for a blind shot."
  },
  {
    "id": 45,
    "diagramId": 51,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 10,
      "to": 6
    },
    "fullSolution": "10-6!; 1-10 14-7; 3-10 21-7",
    "hint": "Use the opponent's piece as a backstop."
  },
  {
    "id": 46,
    "diagramId": 52,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 19,
      "to": 15
    },
    "fullSolution": "19-15!; 10-19 23-16; 12-19 32-16",
    "hint": "Set up an extended rebound."
  },
  {
    "id": 47,
    "diagramId": 53,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 27,
      "to": 23
    },
    "fullSolution": "27-23!; 20-27 18-15; 11-18 23-14; 9-18 32-14",
    "hint": "Look for multiple direction changes."
  },
  {
    "id": 48,
    "diagramId": 54,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 27,
      "to": 23
    },
    "fullSolution": "27-23!; 20-27 23-16; 12-19 32-16",
    "hint": "Find the complex rebound application."
  },
  {
    "id": 49,
    "diagramId": 55,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 22,
      "to": 18
    },
    "fullSolution": "22-18!; 13-22 15-10; 6-15 18-11; 8-15 25-11; 5-9 29-25; 9-14 25-22",
    "hint": "A long sequence gives a decisive advantage."
  },
  {
    "id": 50,
    "diagramId": 56,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 11,
      "to": 7
    },
    "fullSolution": "11-7!; 3-10 19-15; 10-19 23-16; 12-19 30-16; 5-9 16-11 (White has the opposition and here it proves crucial); 9-14 11-7; 14-18 7-2; 18-23 2-7; 23-27 7-11; 2731 11-15; 31-27 15-18; 27-32 (Or 27-31) 18-23",
    "hint": "After the rebound, the opposition decides the endgame."
  },
  {
    "id": 51,
    "diagramId": 57,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 10,
      "to": 6
    },
    "fullSolution": "10-6!; 1-10 14-7; 3-10 26-22; 17-26 (Or 18-25) 30-7",
    "hint": "Extend the 3-for-2 idea."
  },
  {
    "id": 52,
    "diagramId": 58,
    "lessonId": 11,
    "category": "rebound",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 28,
      "to": 24
    },
    "fullSolution": "28-24! (Imagine how hard this would be to find if you had never been exposed to the idea); 20-27 26-22; 25-18 23-14; 9-18 32-14",
    "hint": "Imagine the idea you've never seen before."
  },
  {
    "id": 53,
    "diagramId": 59,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 30,
      "to": 26
    },
    "fullSolution": "30-26!; 21-30 (Black must wait before jumping again) 7-3; 30-23 3-26",
    "hint": "Jump in, crown, jump back out."
  },
  {
    "id": 54,
    "diagramId": 60,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17!; 13-22 31-26; 22-31 32-28; 31-24 28-1",
    "hint": "Set up a cross-board in-and-out."
  },
  {
    "id": 55,
    "diagramId": 61,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17!; 13-22 31-26; 22-31 8-3; 31-24 3-28",
    "hint": "Use a king to enable the in-and-out."
  },
  {
    "id": 56,
    "diagramId": 62,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 10,
      "to": 7
    },
    "fullSolution": "10-7!; 15-8 30-26; 21-30 7-3; 3023 3-26",
    "hint": "Similar to Diagram 59."
  },
  {
    "id": 57,
    "diagramId": 63,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 29,
      "to": 25
    },
    "fullSolution": "29-25!; 21-30 32-28; 30-16 28-3",
    "hint": "Look for a flanking combination."
  },
  {
    "id": 58,
    "diagramId": 64,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17!; 13-22 30-26; 22-31 24-20; 31-24 20-11!; 8-15 28-1",
    "hint": "A multi-jump in-and-out awaits."
  },
  {
    "id": 59,
    "diagramId": 65,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 30,
      "to": 26
    },
    "fullSolution": "30-26!; 22-31 18-14; 31-24 14-7!; 3-10 28-3",
    "hint": "Sacrifice to set up the in-and-out."
  },
  {
    "id": 60,
    "diagramId": 66,
    "lessonId": 12,
    "category": "in-and-out",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 15,
      "to": 10
    },
    "fullSolution": "15-10!! (A definite case of mind over matter. Dream the impossible dream!); 6-31 13-6; 1-10 24-6; 31-24 28-3",
    "hint": "Dream the impossible dream!"
  },
  {
    "id": 61,
    "diagramId": 67,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 21,
      "to": 17
    },
    "fullSolution": "21-17! (The only way out. In- stead, 14-9? eventually loses by First Position, a classic endgame discussed in Chapter 5); 13-22 14-18",
    "hint": "Find the only move that saves the draw."
  },
  {
    "id": 62,
    "diagramId": 68,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 16,
      "to": 12
    },
    "fullSolution": "16-12 (Nudging Black into position); 8-11 12-16!; 11-15 16-19",
    "hint": "Nudge the opponent into the breeches position."
  },
  {
    "id": 63,
    "diagramId": 69,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 2,
      "to": 7
    },
    "fullSolution": "2-7!; 10-15 (10-14 loses to 26-22!) 7-11!; 15-18 11-16!; 18-23 16-20; 23-30 20-27; 30-26 (No choice) 27-23",
    "hint": "Begin a long sequence to a decisive breeches."
  },
  {
    "id": 64,
    "diagramId": 70,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 2,
      "to": 7
    },
    "fullSolution": "2-7!; 13-17 (Against 8-4 the 10-6 exchange wins quickly) 10-14!; 3-10 12-3",
    "hint": "Set up an exchange leading to breeches."
  },
  {
    "id": 65,
    "diagramId": 71,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 23,
      "to": 19
    },
    "fullSolution": "23-19! (With 2 kings against 3, Black thought he’d found a way out with the breeches, but checkers is full of hidden resources); 24-15 14-18 (7-11 also wins); 15-22 (10-3 also loses) 7-14",
    "hint": "Checkers is full of hidden resources."
  },
  {
    "id": 66,
    "diagramId": 72,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 19,
      "to": 23
    },
    "fullSolution": "19-23! (Again Black wrongly thought he had secured a draw); 27-9 (10-3 or 10-17 is just a slow death) 7-5",
    "hint": "The opponent wrongly thinks he has a draw."
  },
  {
    "id": 67,
    "diagramId": 73,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 17,
      "to": 14
    },
    "fullSolution": "17-14; 20-24 (Against 27-31 or 27-32 White wins quickly with 26-23) 28-19; 27-23 (Apparently escaping with a draw) 14-10! (Not to be); 6-24 26-28",
    "hint": "Begin a seemingly quiet sequence with a surprising finish."
  },
  {
    "id": 68,
    "diagramId": 74,
    "lessonId": 13,
    "category": "breeches",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 19,
      "to": 16
    },
    "fullSolution": "19-16!; 12-19 18-23",
    "hint": "Look for the rarely seen double breeches."
  },
  {
    "id": 69,
    "diagramId": 75,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 1,
      "to": 6
    },
    "fullSolution": "1-6! (Press); 10-15 (10-14 loses similarly) 6-10 (Press); 15-19 (15-18 loses similarly) 10-15 (Press); 19-24 15-19 (Fork)",
    "hint": "Press, press, press, fork."
  },
  {
    "id": 70,
    "diagramId": 76,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 24,
      "to": 20
    },
    "fullSolution": "24-20! (Squeeze); 16-19 3-7 (Press); 10-14 (10-15 loses to both 7-10 and 7-11) 7-10 (Press); 14-18 10-15 (Fork)",
    "hint": "Squeeze first, then press to the fork."
  },
  {
    "id": 71,
    "diagramId": 77,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 24,
      "to": 19
    },
    "fullSolution": "24-19!; 6-10 (Against 7-11 the 19-15 exchange wins immediately) 14-9!; 7-11 9-6; 11-15 (10-14 leads to the loss of the man on square 11 after 6-2 and 2-7) 19-16; 10-14 6-10 (Fork)",
    "hint": "A complex sequence of presses leads to the fork."
  },
  {
    "id": 72,
    "diagramId": 78,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 11,
      "to": 16
    },
    "fullSolution": "11-16! (Press); 19-23 16-19 (Press); 23-26 19-15 (Press); 18-22 15-18 (Press); 22-25 18-22 (Fork)",
    "hint": "A famous press-to-fork combination."
  },
  {
    "id": 73,
    "diagramId": 79,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 3,
      "to": 7
    },
    "fullSolution": "3-7! (Press); 10-15 7-10 (Press); 15-19 10-14 (Press); 19-23 14-17!; 23-27 17-14 (Press); 18-23 14-18 (Press); 22-25 18-22 (Fork)",
    "hint": "Another famous press-to-fork sequence."
  },
  {
    "id": 74,
    "diagramId": 80,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 7,
      "to": 2
    },
    "fullSolution": "7-2!; 18-11 10-7; 3-10 2-6 (Double fork!)",
    "hint": "Find the double fork to save the draw."
  },
  {
    "id": 75,
    "diagramId": 81,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 18,
      "to": 15
    },
    "fullSolution": "18-15!; 11-18 10-15 (Double fork)",
    "hint": "Sacrifice to set up a double fork."
  },
  {
    "id": 76,
    "diagramId": 82,
    "lessonId": 14,
    "category": "fork",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 30,
      "to": 26
    },
    "fullSolution": "30-26! (6-10? loses quickly. Can you see how?); 31-22 6-10 (Double fork)",
    "hint": "A defensive double fork saves the day."
  },
  {
    "id": 77,
    "diagramId": 83,
    "lessonId": 15,
    "category": "double-corner-coup",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 3,
      "to": 7
    },
    "fullSolution": "3-7! (Threatening to play 7-2); 6-10 13-9; 10-17 9-6; 1-10 7-21",
    "hint": "Threaten from the double-corner zone."
  },
  {
    "id": 78,
    "diagramId": 84,
    "lessonId": 15,
    "category": "double-corner-coup",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 11,
      "to": 7
    },
    "fullSolution": "11-7!; 3-17 (Or 18-9 13-6; 3-10 6-15 to a loss) 13-15",
    "hint": "A king sacrifice in the double-corner."
  },
  {
    "id": 79,
    "diagramId": 85,
    "lessonId": 15,
    "category": "double-corner-coup",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 13,
      "to": 9
    },
    "fullSolution": "13-9!; 5-14 7-10; 15-6 2-18",
    "hint": "Exchange in the double-corner leads to promotion."
  },
  {
    "id": 80,
    "diagramId": 86,
    "lessonId": 15,
    "category": "double-corner-coup",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 14,
      "to": 10
    },
    "fullSolution": "14-10!; 5-14 6-2! (6-1? would only draw); 15-6 2-18",
    "hint": "Precision matters — 6-1? only draws."
  },
  {
    "id": 81,
    "diagramId": 87,
    "lessonId": 15,
    "category": "double-corner-coup",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 23,
      "to": 19
    },
    "fullSolution": "23-19!; 24-15 14-10; 5-14 6-1; 15-6 1-26",
    "hint": "A complex multi-jump from the double-corner."
  },
  {
    "id": 82,
    "diagramId": 88,
    "lessonId": 15,
    "category": "double-corner-coup",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 14,
      "to": 10
    },
    "fullSolution": "14-10!; 5-14 23-19; 24-6 1-26",
    "hint": "Note the similarity with the previous example."
  },
  {
    "id": 83,
    "diagramId": 95,
    "lessonId": 20,
    "category": "clearance",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 10,
      "to": 6
    },
    "fullSolution": "10-6!; 1-10 15-6",
    "hint": "Break through the king-row with precise timing."
  },
  {
    "id": 84,
    "diagramId": 96,
    "lessonId": 20,
    "category": "fifth-position",
    "objective": "White to Play and Draw",
    "correctFirstMove": {
      "from": 20,
      "to": 16
    },
    "fullSolution": "20-16! (A key pitch as Black was threatening to play 11-15); 11-20 27-23; 20-24 22-18; 24-27 18-9; 10-14 (Against 27-31 White escapes with 23-18; 10-14 18-15; 31- 27 15-11; 27-23 19-15; 23-19 15-10 as the black man on square 13 provides unwilling support!) 9-6; 27-31 6-2; 31-27 2-6; 27-18 6-9; 13-17 19-15!; 18-11 9-18; 17-22 18-25; 11-15 25-22! Drawn",
    "hint": "A key pitch prevents Black from advancing."
  },
  {
    "id": 85,
    "diagramId": 100,
    "lessonId": 23,
    "category": "first-position",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 11,
      "to": 15
    },
    "fullSolution": "11-15; 32-28 15-18; 28-32 1823; 32-28 23-27; 28-32 19-23; 32-28 27-32 (The king is attacked relentlessly); 28-24 32-28; 24-20 23-19! (23-18? allows the black king to reach the haven of the ‘triple-corner’ created by the man on 4, and a draw results); 20-24 19-15; 24-27 15-18; 4-8 (Must advance now) 18-15; 27-23 28-32; 8-12 (And again) 32-28; 23-27 15-18; 12-16 (And again) 28-32; 27-24 18-15; 24-28 15-11! (1518?, which has been played by more than one master player, allows Black to get through with 16-19! 32-27; 19-23!); 16-19 32-27; 28-32 27-31; 19-23 11-15; 32-28 15-19! White wins",
    "hint": "Attack the king relentlessly while confining the man."
  },
  {
    "id": 86,
    "diagramId": 101,
    "lessonId": 24,
    "category": "second-position",
    "objective": "White to Play and Win",
    "correctFirstMove": {
      "from": 32,
      "to": 28
    },
    "fullSolution": "32-28; 25-22 28-24; 22-18 2419; 18-22 (Against 18-14 27-23! is the best way to force the win) 19-15; 22-17 15-18; 17-13 18-22 (Now that the white king is holding the black man on 21, his own man on 30 can be released to become a king); 13-9 30-26; 9-6 26-23; 6-10 23-18; 10-6 18-14; 6-1 14-9; 1-5 9-6; 5-1 6-2; 1-5 2-6; 5-1 6-10; 1-5 10-15; 5-9 15-19 (Now that the white king is holding the black man on 20, his own man on 27 can be released to become a king); 9-14 27-23; 14-10 23-18; 10-6 18-14; 6-1 14-9; 1-5 9-6; 5-1 6-2; 1-5 2-6; 5-1 6-10 (This king has to be brought back to square 27 to effect the win. If instead White prematurely carries out the two exchanges given in this solution, the black king escapes to the double-corner and safety); 1-5 10-14; 5-1 14-18; 1-6 18-23; 6-10 23-27 (Now the exchanges can take place); 10-14 19-23; 149 23-18; 9-6 18-14; 6-1 14-9; 1-5 22-17! (This exchange alters the opposition. However, it is hardly a cause for celebration for Black, as the confining nature of the situation means that White can regain it with another exchange); 5-14 17-10; 21-25 10-15; 25-30 15-19; 30-26 (Black is striving to reach the opposite double-corner) 27-32; 26-22 (Still trying) 19-24! (Regains the opposition and is just in time to cut Black off); 20-27 32-23; 22-17 23-18; 17-13 18-14",
    "hint": "Hold men while shuttling kings to release your own men."
  },
  {
    "id": 87,
    "diagramId": 103,
    "lessonId": 26,
    "category": "piece-down-draw",
    "objective": "Black to Play and Draw",
    "correctFirstMove": {
      "from": 7,
      "to": 10
    },
    "fullSolution": "7-10 19-16; 10-7 18-23; 11-8 (Asking for 23-19?; 8-12 and a black win) 16-12; 8-11 23-19; 7-3 (7-10? loses in a similar fashion to Diagram 16) 12-16; 3-7 1924; 11-15 24-28; 15-11 16-19; 7-3 28-32; 3-7 (3-8? loses to 20-16!; 11-20 19-24; 20-27 32-23)",
    "hint": "Use the opposition to maintain the draw — avoid losing patterns."
  }
];

export const repertoire = {
  "withWhite": {
    "trunk": {
      "id": "trunk",
      "lessonId": 28,
      "label": "Old 14th (Trunk)",
      "moves": "11-15 23-19; 8-11 22-17; 4-8 17-13; 15-18 24-20; 9-14 28-24; 11-15 26-23; 8-11 31-26; 6-9 13-6; 2-9 26-22; 1-6",
      "branchPoints": [
        {
          "moveIndex": 4,
          "variationId": "v1",
          "label": "At 4-8: Glasgow"
        },
        {
          "moveIndex": 2,
          "variationId": "v6",
          "label": "At 8-11: Defiance"
        }
      ]
    },
    "variations": {
      "v1": {
        "id": "v1",
        "lessonId": 29,
        "label": "Glasgow",
        "parentId": "trunk",
        "branchMoveIndex": 4,
        "moves": "11-16 24-20; 16-23; 27-11; 7-16 20-11; 3-7 28-24; 7-16 24-20; 16-19 25-22; 4-8 29-25; 10-15",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v2",
            "label": "Mixed"
          }
        ]
      },
      "v2": {
        "id": "v2",
        "lessonId": 30,
        "label": "Mixed",
        "parentId": "v1",
        "branchMoveIndex": 0,
        "moves": "9-13 17-14; 10-17 21-14; 15-18 24-20; 4-8 27-23; 18-27 32-23; 11-15 19-10; 6-15 23-18; 15-22 25-18",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v3",
            "label": "Souter"
          }
        ]
      },
      "v3": {
        "id": "v3",
        "lessonId": 31,
        "label": "Souter",
        "parentId": "v2",
        "branchMoveIndex": 0,
        "moves": "9-14 25-22; 6-9 17-13; 2-6 29-25; 4-8 24-20; 15-24 28-19; 11-15 27-24; 14-17; 21-14; 9-18 26-23; 18-27 32-23; 10-14 19-10; 6-15 13-9; 14-17",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v4",
            "label": "Alma"
          }
        ]
      },
      "v4": {
        "id": "v4",
        "lessonId": 32,
        "label": "Alma",
        "parentId": "v3",
        "branchMoveIndex": 0,
        "moves": "3-8 25-22; 11-16 27-23; 7-11 24-20!; 15-24 28-19; 10-14 17-10; 6-24 22-18; 1-6 21-17; 6-10 17-13; 24-27",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v5",
            "label": "Centre"
          }
        ]
      },
      "v5": {
        "id": "v5",
        "lessonId": 33,
        "label": "Centre",
        "parentId": "v4",
        "branchMoveIndex": 0,
        "moves": "15-18 19-15; 10-19 24-8; 4-11 17-14; 11-15 28-24; 12-16 26-23; 16-20 30-26; 9-13 32-28",
        "branchPoints": []
      },
      "v6": {
        "id": "v6",
        "lessonId": 34,
        "label": "Defiance",
        "parentId": "trunk",
        "branchMoveIndex": 2,
        "moves": "9-14 27-23; 8-11 22-18; 15-22 25-9; 5-14 29-25; 11-15 25-22; 4-8 24-20; 15-24 28-19; 10-15 19-10; 6-15",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v7",
            "label": "7-11 Defiance"
          }
        ]
      },
      "v7": {
        "id": "v7",
        "lessonId": 35,
        "label": "7-11 Defiance",
        "parentId": "v6",
        "branchMoveIndex": 0,
        "moves": "7-11 27-23; 9-14 22-18; 15-22 25-9; 5-14 29-25; 11-15 25-22; 8-11 22-18; 15-22 26-17; 11-15 24-20; 15-24 28-19; 4-8 30-26",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v8",
            "label": "Will O' The Wisp"
          }
        ]
      },
      "v8": {
        "id": "v8",
        "lessonId": 36,
        "label": "Will O' The Wisp",
        "parentId": "v7",
        "branchMoveIndex": 0,
        "moves": "9-13 22-18; 15-22 25-18; 10-14 18-9; 5-14 27-23; 8-11 26-22; 6-10 22-18; 1-5 18-9; 5-14 29-25; 11-15 25-22; 4-8 30-26; 8-11",
        "branchPoints": []
      },
      "v9": {
        "id": "v9",
        "lessonId": 37,
        "label": "Reply to 9-14",
        "parentId": "trunk",
        "branchMoveIndex": 0,
        "moves": "9-14 22-18; 5-9 24-19; 11-15 18-11 8-24 28-19; 4-8 25-22; 8-11 22-18; 11-16 29-25; 7-11 25-22; 1-5 27-24; 16-20 32-28; 20-27 31-24",
        "branchPoints": []
      },
      "v10": {
        "id": "v10",
        "lessonId": 38,
        "label": "Reply to 11-16",
        "parentId": "trunk",
        "branchMoveIndex": 0,
        "moves": "11-16 24-19; 8-11 22-18; 4-8 26-22; 16-20 22-17; 9-14 18-9; 5-14 25-22; 11-15 30-26; 15-24 28-19; 8-11 22-18",
        "branchPoints": []
      },
      "v11": {
        "id": "v11",
        "lessonId": 39,
        "label": "Reply to 10-15",
        "parentId": "trunk",
        "branchMoveIndex": 0,
        "moves": "10-15 21-17; 11-16 17-13; 16-20 23-18; 8-11 26-23; 7-10 25-21; 9-14 18-9; 5-14 29-25; 4-8 30-26; 11-16 24-19; 15-24 28-19",
        "branchPoints": []
      },
      "v12": {
        "id": "v12",
        "lessonId": 40,
        "label": "Reply to 10-14",
        "parentId": "trunk",
        "branchMoveIndex": 0,
        "moves": "10-14 24-19; 6-10 22-17; 9-13 28-24; 13-22 25-9; 5-14 26-22; 11-15 29-25; 7-11 23-18; 14-23 27-18; 11-16 18-11; 8-15 31-27; 16-23 27-11; 3-8 11-7; 2-11 22-17",
        "branchPoints": []
      },
      "v13": {
        "id": "v13",
        "lessonId": 41,
        "label": "Reply to 12-16",
        "parentId": "trunk",
        "branchMoveIndex": 0,
        "moves": "12-16 24-20; 8-12 28-24; 3-8 23-18; 9-13 18-14; 10-17 21-14; 6-10 25-21; 10-17 21-14; 16-19 24-15; 11-25 29-22; 1-6 30-25",
        "branchPoints": []
      },
      "v14": {
        "id": "v14",
        "lessonId": 42,
        "label": "Reply to 9-13",
        "parentId": "trunk",
        "branchMoveIndex": 0,
        "moves": "9-13 22-18; 12-16 24-20; 8-12 27-24; 3-8 24-19; 11-15 18-11; 8-24 28-19; 10-14 20-11; 7-16 25-22; 4-8 22-18; 6-10 18-9; 5-14 29-25; 8-11 25-22",
        "branchPoints": []
      }
    }
  },
  "withBlack": {
    "trunk": {
      "id": "trunk",
      "lessonId": 43,
      "label": "9-14 22-18 (Trunk)",
      "moves": "9-14 22-18; 5-9 25-22; 11-16 18-15; 10-19 24-15; 7-10 27-24; 10-19 24-15; 16-19 23-16; 12-19 22-17; 14-18 17-14; 9-13 29-25; 3-7 31-27; 1-5",
      "branchPoints": [
        {
          "moveIndex": 2,
          "variationId": "v1",
          "label": "24-19 variation"
        },
        {
          "moveIndex": 1,
          "variationId": "v3",
          "label": "22-17 Pioneer"
        }
      ]
    },
    "variations": {
      "v1": {
        "id": "v1",
        "lessonId": 44,
        "label": "9-14 22-18; 5-9 24-19",
        "parentId": "trunk",
        "branchMoveIndex": 2,
        "moves": "11-15 18-11; 8-24 28-19; 4-8 26-22; 8-11 27-24; 1-5 22-18; 9-13 18-9; 5-14 25-22; 11-15 32-28; 7-11 24-20; 15-24 28-19; 11-15",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v2",
            "label": "24-20 variation"
          }
        ]
      },
      "v2": {
        "id": "v2",
        "lessonId": 45,
        "label": "9-14 22-18; 5-9 24-20",
        "parentId": "v1",
        "branchMoveIndex": 0,
        "moves": "11-16 20-11; 8-22 25-18; 4-8 28-24; 8-11 29-25; 10-15 25-22; 7-10 24-20; 3-7 27-24; 1-5 32-28; 9-13 18-9; 5-14",
        "branchPoints": []
      },
      "v3": {
        "id": "v3",
        "lessonId": 46,
        "label": "Pioneer",
        "parentId": "trunk",
        "branchMoveIndex": 1,
        "moves": "11-15 25-22; 8-11 17-13; 11-16 24-19; 15-24 28-19; 4-8 22-18; 8-11 18-9; 5-14 29-25; 16-20 25-22; 11-16 22-18; 14-17 21-14; 10-17",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v4",
            "label": "Ayrshire Lassie"
          }
        ]
      },
      "v4": {
        "id": "v4",
        "lessonId": 47,
        "label": "Ayrshire Lassie",
        "parentId": "v3",
        "branchMoveIndex": 0,
        "moves": "5-9 28-24; 11-15 23-19; 7-11 22-17; 3-7 26-23; 1-5 17-13; 15-18 31-26; 11-16 20-11; 8-15 26-22; 4-8",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v5",
            "label": "Whilter"
          }
        ]
      },
      "v5": {
        "id": "v5",
        "lessonId": 48,
        "label": "Whilter",
        "parentId": "v4",
        "branchMoveIndex": 0,
        "moves": "11-15 22-17; 7-11 25-22; 11-16 26-23; 5-9 17-13; 3-7 29-25; 1-5 22-17; 8-11 31-26; 4-8 25-22; 16-20",
        "branchPoints": [
          {
            "moveIndex": 0,
            "variationId": "v6",
            "label": "Second Double-Corner"
          }
        ]
      },
      "v6": {
        "id": "v6",
        "lessonId": 49,
        "label": "Second Double-Corner",
        "parentId": "v5",
        "branchMoveIndex": 0,
        "moves": "11-15 22-18; 15-24 18-9; 5-14 28-19; 8-11 25-22; 11-15 32-28; 15-24 28-19; 7-11 22-18; 1-5 18-9; 5-14 29-25; 4-8",
        "branchPoints": []
      }
    }
  }
};

// Helper to find a lesson by ID
export function getLessonById(id) {
  return lessons.find(l => l.id === id) ?? null;
}

// Helper to find a diagram across all lessons
export function getDiagramById(diagramId) {
  for (const lesson of lessons) {
    const d = lesson.diagrams.find(d => d.id === diagramId);
    if (d) return { diagram: d, lesson };
  }
  return null;
}
