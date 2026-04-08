import React from "react";

const LandingPage = ({ onStart }) => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <section style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Chess trainer</h1>
        <p style={{ fontSize: "20px", lineHeight: 1.5, marginBottom: "16px" }}>
          Train your board vision by predicting every square reachable by a single chess piece. Generate random scenarios, visualize the board in your head, and test your accuracy.
        </p>
        <div
          style={{
            background: "#f5f5f5",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "left",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>How it works</h2>
          <ol style={{ lineHeight: 1.8, paddingLeft: "20px" }}>
            <li>Choose a chess piece you want to train.</li>
            <li>Generate a random square for that piece.</li>
            <li>Visualize the board and list every square the piece can reach.</li>
            <li>Submit your answer to reveal the correct moves and your mistakes.</li>
          </ol>
          <p style={{ marginTop: "12px" }}>
            Repeat the drill to sharpen your calculation speed and precision!
          </p>
        </div>
      </section>
      <button
        type="button"
        onClick={onStart}
        style={{
          fontSize: "20px",
          padding: "12px 28px",
          borderRadius: "999px",
          border: "none",
          background: "#2b6cb0",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        }}
      >
        Lets start!
      </button>
    </main>
  );
};

export default LandingPage;