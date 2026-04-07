import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="birthday-background">
      {/* Confetti */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={`confetti-${i}`}
          className={`confetti confetti-${i % 6}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Balloons */}
      <div className="balloon balloon-blue" style={{ left: "3%", top: "10%" }} />
      <div className="balloon balloon-pink" style={{ left: "10%", top: "30%" }} />
      <div className="balloon balloon-blue" style={{ right: "3%", top: "10%" }} />
      <div className="balloon balloon-pink" style={{ right: "10%", top: "30%" }} />
      <div className="balloon balloon-blue" style={{ left: "6%", top: "65%" }} />
      <div className="balloon balloon-pink" style={{ right: "6%", top: "70%" }} />

      {/* Dark overlay for text readability */}
      <div className="bg-overlay" />
    </div>
  );
};

export default Background;
