const boardSize = 8;

export const FILES = "abcdefgh".split("");

export const RANKS = [...Array(boardSize)].map((_, i) => i + 1);

export const PIECES = {
  King: "K",
  Queen: "Q",
  Bishop: "B",
  Knight: "N",
  Rook: "R",
};

export const PIECE_TO_ICON = {
  [PIECES.King]: "♚",
  [PIECES.Queen]: "♛",
  [PIECES.Bishop]: "♝",
  [PIECES.Knight]: "♞",
  [PIECES.Rook]: "♜",
};
