import {files, pieces, ranks} from "./constants";

export const getValidMoves = (piece, position) => {
    const file = position[0];
    const rank = parseInt(position[1]);
    let moves = [];

    switch (piece) {
        case pieces.Bishop:
            files.forEach((f, i) => {
                const diff = files.indexOf(file) - i;
                moves.push(`${f}${rank + diff}`, `${f}${rank - diff}`);
            });
            break;
        case pieces.Rook:
            files.forEach((f) => moves.push(`${f}${rank}`));
            ranks.forEach((r) => moves.push(`${file}${r}`));
            break;
        case pieces.Queen:
            moves = getValidMoves(pieces.Rook, position).concat(getValidMoves(pieces.Bishop, position));
            break;
        case pieces.King:
            moves = [`${file}${rank + 1}`, `${file}${rank - 1}`];
            break;
        case pieces.Night:
            moves = [
                `${files[files.indexOf(file) - 2]}${rank + 1}`,
                `${files[files.indexOf(file) - 2]}${rank - 1}`,
                `${files[files.indexOf(file) + 2]}${rank + 1}`,
                `${files[files.indexOf(file) + 2]}${rank - 1}`,
            ];
            break;
        default:
            break;
    }

    return moves.filter((m) => /^[a-h][1-8]$/.test(m));
};