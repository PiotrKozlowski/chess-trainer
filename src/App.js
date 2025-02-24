import React, { useCallback, useEffect, useState } from "react";
import ChessBoard from "./ChessBoard";
import { getValidMoves } from "./utils";
import { FILES, PIECES, RANKS } from "./constants";

const App = () => {
  const [piece, setPiece] = useState(PIECES.Bishop);
  const [position, setPosition] = useState("");
  const [userMoves, setUserMoves] = useState("");
  const [validMoves, setValidMoves] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const randomSquare = useCallback(() => {
    const file = FILES[Math.floor(Math.random() * FILES.length)];
    const rank = RANKS[Math.floor(Math.random() * RANKS.length)];
    return `${file}${rank}`;
  }, []);

  const handleRandomize = useCallback(() => {
    const newPosition = randomSquare();
    setPosition(newPosition);
    setValidMoves(getValidMoves(piece, newPosition));
    setShowResult(false);
    setUserMoves("");
  }, [piece, randomSquare]);

  const handleCheck = useCallback(() => {
    setShowResult(true);
  }, []);

  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleCheck();
      }
    },
    [handleCheck],
  );

  return (
    <div>
      <h1>Szachowa Gra Ruchów</h1>
      <label>
        Wybierz figurę:
        <select value={piece} onChange={(e) => setPiece(e.target.value)}>
          {Object.entries(PIECES).map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleRandomize}>Losuj</button>

      {position && (
        <div>
          <p>Wylosowana pozycja: {position}</p>
          <input
            autoFocus
            type="text"
            placeholder="Podaj pola (np. a1, b2, c3)"
            value={userMoves}
            onChange={(e) => setUserMoves(e.target.value)}
            onKeyPress={handleEnter}
          />
          <button onClick={handleCheck}>Sprawdź</button>
          {showResult && (
            <ChessBoard
              piece={piece}
              position={position}
              validMoves={validMoves}
              userMoves={userMoves.replace(/\s+/g, "").split(",")}
              showResult={showResult}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
