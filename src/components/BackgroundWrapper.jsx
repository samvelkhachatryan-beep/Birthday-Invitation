import React from "react";
import Background from "./Background";
import "./BackgroundWrapper.css";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="background-wrapper">
      <Background />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
