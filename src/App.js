import React, { useCallback, useEffect, useState } from "react";
import ChessBoard from "./ChessBoard";
import { getValidMoves } from "./utils";
import { FILES, PIECES, PIECE_TO_ICON, RANKS } from "./constants";
import {
  AutoGenerateWrapper,
  PieceButton,
  PieceOptions,
  PieceSelectorWrapper,
} from "./styled";
import LandingPage from "./LandingPage";

const pieceEntries = Object.entries(PIECES);

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [piece, setPiece] = useState(PIECES.Bishop);
  const [position, setPosition] = useState("");
  const [userMoves, setUserMoves] = useState("");
  const [validMoves, setValidMoves] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [autoGenerate, setAutoGenerate] = useState(false);

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

  const generateForPiece = useCallback(
    (selectedPiece) => {
      const newPosition = randomSquare();
      setPosition(newPosition);
      setValidMoves(getValidMoves(selectedPiece, newPosition));
      setShowResult(false);
      setUserMoves("");
      setTime(0);
      setIsRunning(true);
    },
    [randomSquare],
  );

  const handleRandomize = useCallback(() => {
    generateForPiece(piece);
  }, [generateForPiece, piece]);

  const handlePieceSelect = useCallback(
    (nextPiece) => {
      setPiece(nextPiece);
      if (autoGenerate) {
        generateForPiece(nextPiece);
      } else {
        setPosition("");
        setValidMoves([]);
        setUserMoves("");
        setShowResult(false);
        setIsRunning(false);
        setTime(0);
      }
    },
    [auto-generate, generateForPiece],
  );

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

  if (!hasStarted) {
    return <LandingPage onStart={() => setHasStarted(true)} />;
  }

  return (
    <div style={{ fontSize: "20px" }}>
      <h1>Chess trainer</h1>
      <PieceSelectorWrapper>
        <span>Select piece:</span>
        <PieceOptions>
          {pieceEntries.map(([label, value]) => (
            <PieceButton
              type="button"
              key={value}
              onClick={() => handlePieceSelect(value)}
              $isSelected={piece === value}
              aria-pressed={piece === value}
              aria-label={label}
            >
              <span className="piece-icon">{PIECE_TO_ICON[value]}</span>
              <span className="piece-label">{label}</span>
            </PieceButton>
          ))}
        </PieceOptions>
        <AutoGenerateWrapper>
          <input
            type="checkbox"
            checked={autoGenerate}
            onChange={(e) => setAutoGenerate(e.target.checked)}
          />
          automatically generate on selection
        </AutoGenerateWrapper>
      </PieceSelectorWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        <button
          style={{
            padding: "5px 10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={handleRandomize}
        >
          Generate
        </button>
        <span>⏳ Time: {time} sec</span>
      </div>

      {position && (
        <div>
          <p>
            Your position: <span style={{ fontWeight: "bold" }}>{position}</span>
          </p>
          <input
            autoFocus
            type="text"
            placeholder="Write coordinates (eg. a1, b2, c3)"
            value={userMoves}
            onChange={(e) => setUserMoves(e.target.value)}
            onKeyDown={handleEnter}
            style={{ padding: "5px 10px", width: "250px", fontSize: "16px" }}
          />
          <button
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={handleCheck}
          >
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