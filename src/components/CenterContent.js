import React from "react";
import "./CenterContent.css";
import ScrollIcon from "./ScollIcon";

const CenterContent = () => {
  return (
    <div className="center-content">
        <div className="title-wedding">
            <h1 className="subtitle">
              <span>{"ԾՆՆԴՅԱՆ"}</span> <br />
              <span>{"ՀՐԱՎԵՐ"}</span>
        </h1>
        </div>
        <div className="div-naming">
            <h2 className="title">{"\u0540\u0535\u0546\u0550\u053b"}</h2>
            <p className="age-label">1</p>
        </div>
        <div className="scroling-div">
            <ScrollIcon />
        </div>
    </div>
  );
};

export default CenterContent;
