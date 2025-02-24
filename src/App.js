import React, { useState } from "react";
import ChessBoard from "./ChessBoard";
import {getValidMoves} from "./utils";
import {files, pieces, ranks} from "./constants";

const App = () => {
  const [piece, setPiece] = useState(pieces.Bishop);
  const [position, setPosition] = useState("");
  const [userMoves, setUserMoves] = useState("");
  const [validMoves, setValidMoves] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const randomSquare = () => {
    const file = files[Math.floor(Math.random() * files.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return `${file}${rank}`;
  };

  const handleRandomize = () => {
    const newPosition = randomSquare();
    setPosition(newPosition);
    setValidMoves(getValidMoves(piece, newPosition));
    setShowResult(false);
    setUserMoves("");
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  return (
      <div>
        <h1>Szachowa Gra Ruchów</h1>
        <label>
          Wybierz figurę:
          <select value={piece} onChange={(e) => setPiece(e.target.value)}>
            {Object.entries(pieces).map(([label, value]) => (
                <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <button onClick={handleRandomize}>Losuj</button>

        {position && (
            <div>
              <p>Wylosowana pozycja: {position}</p>
              <input
                  type="text"
                  placeholder="Podaj pola (np. a1, b2, c3)"
                  value={userMoves}
                  onChange={(e) => setUserMoves(e.target.value)}
              />
              <button onClick={handleCheck}>Sprawdź</button>
              <ChessBoard piece={piece} position={position} validMoves={validMoves} userMoves={userMoves.split(", ")} showResult={showResult} />
            </div>
        )}
      </div>
  );
};

export default App;