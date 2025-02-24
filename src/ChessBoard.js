import React from "react";
import styled from "styled-components";
import {files, ranks} from "./constants";

// Style dla planszy
const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
  gap: 2px;
  margin: 20px;
`;

const Cell = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.highlight ? "#90EE90" : props.isDark ? "#769656" : "#EEEED2")};
  font-size: 20px;
  font-weight: bold;
`;

const ChessBoard = ({ piece, position, validMoves, userMoves, showResult }) => {
    return (
        <BoardWrapper>
            {ranks.reverse().map((r) =>
                files.map((f) => {
                    const coord = `${f}${r}`;
                    const isDark = (files.indexOf(f) + ranks.indexOf(r)) % 2 === 1;
                    const isPiece = coord === position;
                    const isValid = showResult && validMoves.includes(coord);
                    const isUserCorrect = showResult && userMoves.includes(coord);

                    return (
                        <Cell key={coord} isDark={isDark} highlight={isValid}>
                            {isPiece ? piece : isUserCorrect ? "✔️" : ""}
                        </Cell>
                    );
                })
            )}
        </BoardWrapper>
    );
};

export default ChessBoard;