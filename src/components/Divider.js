import React from "react";
import "./Divider.css";

const Divider = ({ width = "120px", height = "2px", color = "white", margin = "15px auto" }) => {
  return (
    <div
      className="custom-divider"
      style={{
        width,
        height,
        margin,
      }}
    />
  );
};

export default Divider;
