import React from "react";
import { FILES, PIECE_TO_ICON, RANKS } from "./constants";
import {
  StyledBoardWrapper,
  StyledCell,
  StyledLabel,
  StyledTopLabel,
} from "./styled";

const ChessBoard = ({ piece, position, validMoves, userMoves, showResult }) => {
  return (
    <StyledBoardWrapper>
      {/* Pusta komórka w lewym górnym rogu */}
      <div></div>

      {/* Litery a-h nad szachownicą */}
      {FILES.map((f) => (
        <StyledTopLabel key={`top-${f}`}>{f}</StyledTopLabel>
      ))}

      {/* Pusta komórka w prawym górnym rogu */}
      <div></div>

      {RANKS.reverse().map((r) => (
        <>
          <StyledLabel key={`left-${r}`}>{r}</StyledLabel>
          {FILES.map((f) => {
            const coord = `${f}${r}`;
            const isDark = (FILES.indexOf(f) + RANKS.indexOf(r)) % 2 === 1;
            const isPiece = coord === position;
            const isValid = showResult && validMoves.includes(coord);
            const isUserCorrect =
              showResult &&
              userMoves.includes(coord) &&
              validMoves.includes(coord);
            const isUserWrong =
              showResult &&
              userMoves.includes(coord) &&
              !validMoves.includes(coord);

            return (
              <StyledCell key={coord} isDark={isDark} highlight={isValid}>
                {isPiece
                  ? PIECE_TO_ICON[piece]
                  : isUserCorrect
                    ? "🗸️"
                    : isUserWrong
                      ? "🗙"
                      : ""}
              </StyledCell>
            );
          })}
          {/* Numeracja po prawej stronie */}
          <StyledLabel key={`right-${r}`}>{r}</StyledLabel>
        </>
      ))}

      {/* Pusta komórka w lewym dolnym rogu */}
      <div></div>

      {/* Litery a-h pod szachownicą */}
      {FILES.map((f) => (
        <StyledTopLabel key={`bottom-${f}`}>{f}</StyledTopLabel>
      ))}

      {/* Pusta komórka w prawym dolnym rogu */}
    </StyledBoardWrapper>
  );
};

export default ChessBoard;
