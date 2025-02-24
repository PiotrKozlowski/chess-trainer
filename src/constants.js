const boardSize = 8;

export const files = "abcdefgh".split("");

export const ranks = [...Array(boardSize)].map((_, i) => i + 1);

export const pieces = {
    "King": "K",
    "Queen": "Q",
    "Bishop": "B",
    "Night": "N",
    "Rook": "R",
};