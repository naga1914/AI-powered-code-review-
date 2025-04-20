import React from "react";
import { useNavigate } from "react-router-dom";
import "../App"; // Your custom CSS file

const HomePage = () => {
  const navigate = useNavigate();

  const title = "AI-Powered  Code  Reviews  Made  Easy";
  const subtitleWords = ["Unlock", "Your", "Potential", "with", "AI"];

  return (
    <div className="hero-wrapper">

      {/* Overlay Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          {title.split("").map((char, idx) => (
            <span key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
              {char}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          {subtitleWords.map((word, idx) => (
            <span key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
              {word}{" "}
            </span>
          ))}
        </p>

        <button className="start-btn" onClick={() => navigate("/main")}>
          Start Code Review
        </button>
      </div>
    </div>
  );
};

export default HomePage;
