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
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

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
    setTime(0);
    setIsRunning(true);
  }, [piece, randomSquare]);

  const handleCheck = useCallback(() => {
    setShowResult(true);
    setIsRunning(false);
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
    <div style={{fontSize: '20px'}}>
      <h1>Chess trainer</h1>
      <label>
        Selec piece:
        <select style={{marginLeft: '10px', padding: '5px 10px', cursor: 'pointer', fontSize: '16px'}} value={piece} onChange={(e) => setPiece(e.target.value)}>
          {Object.entries(PIECES).map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <button style={{marginLeft: '10px', padding: '5px 10px', cursor: 'pointer', fontSize: '16px'}} onClick={handleRandomize}>
        Generate
      </button>
      <span style={{marginLeft: '10px'}}>⏳ Time: {time} sec</span>

      {position && (
        <div>
          <p>Your position: <span style={{ fontWeight: 'bold'}}>{position}</span></p>
          <input
            autoFocus
            type="text"
            placeholder="Write coordinates (eg. a1, b2, c3)"
            value={userMoves}
            onChange={(e) => setUserMoves(e.target.value)}
            onKeyDown={handleEnter}
            style={{padding: '5px 10px', width: '250px', fontSize: '16px'}}
          />
          <button style={{marginLeft: '10px', padding: '5px 10px', cursor: 'pointer', fontSize: '16px'}} onClick={handleCheck}>
            Check
          </button>
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
