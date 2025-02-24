import { FILES, PIECES, RANKS } from "./constants";

export const getValidMoves = (piece, position) => {
  const file = position[0];
  const rank = parseInt(position[1]);
  let moves = [];

  switch (piece) {
    case PIECES.Bishop:
      FILES.forEach((f, i) => {
        const diff = FILES.indexOf(file) - i;
        moves.push(`${f}${rank + diff}`, `${f}${rank - diff}`);
      });
      break;
    case PIECES.Rook:
      FILES.forEach((f) => moves.push(`${f}${rank}`));
      RANKS.forEach((r) => moves.push(`${file}${r}`));
      break;
    case PIECES.Queen:
      moves = getValidMoves(PIECES.Rook, position).concat(
        getValidMoves(PIECES.Bishop, position),
      );
      break;
    case PIECES.King:
      moves = [
        `${FILES[FILES.indexOf(file)]}${rank + 1}`,
        `${FILES[FILES.indexOf(file)]}${rank - 1}`,
        `${FILES[FILES.indexOf(file) - 1]}${rank + 1}`,
        `${FILES[FILES.indexOf(file) - 1]}${rank - 1}`,
        `${FILES[FILES.indexOf(file) + 1]}${rank + 1}`,
        `${FILES[FILES.indexOf(file) + 1]}${rank - 1}`,
        `${FILES[FILES.indexOf(file) - 1]}${rank}`,
        `${FILES[FILES.indexOf(file) + 1]}${rank}`,
      ];
      break;
    case PIECES.Night:
      moves = [
        `${FILES[FILES.indexOf(file) - 2]}${rank + 1}`,
        `${FILES[FILES.indexOf(file) - 2]}${rank - 1}`,
        `${FILES[FILES.indexOf(file) + 2]}${rank + 1}`,
        `${FILES[FILES.indexOf(file) + 2]}${rank - 1}`,
        `${FILES[FILES.indexOf(file) - 1]}${rank + 2}`,
        `${FILES[FILES.indexOf(file) - 1]}${rank - 2}`,
        `${FILES[FILES.indexOf(file) + 1]}${rank + 2}`,
        `${FILES[FILES.indexOf(file) + 1]}${rank - 2}`,
      ];
      break;
    default:
      break;
  }

  return moves.filter((m) => /^[a-h][1-8]$/.test(m));
};
