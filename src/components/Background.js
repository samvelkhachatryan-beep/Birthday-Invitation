import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Background.css";

const imagePaths = [
  "/images/placeholder1.jpg",
  "/images/placeholder2.jpg",
  "/images/placeholder3.jpg",
];

const Background = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNextImageLoaded, setIsNextImageLoaded] = useState(false);

  useLayoutEffect(() => {
    Promise.all(
      imagePaths.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    ).then(() => {
      setIsNextImageLoaded(true);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIsNextImageLoaded(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isNextImageLoaded) {
      const timeout = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % imagePaths.length);
        setIsTransitioning(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isNextImageLoaded]);

  return (
    <div className="image-container">
      <img
        src={imagePaths[currentIndex]}
        alt="Current"
        className={`background-img ${isTransitioning ? "fade-out" : "visible"}`}
      />
      {isTransitioning && (
        <img
          src={imagePaths[nextIndex]}
          alt="Next"
          className="background-img fade-in"
          onLoad={() => setIsNextImageLoaded(true)}
        />
      )}
      <div className="background-overlay">
        <div className="dark-overlay" />
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Background;
