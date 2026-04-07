import React from "react";
import "./EventDetails.css";

const EventDetails = ({
  subtitle,
  time,
  title,
  location,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="event-details">
      <h3 className="event-subtitle">{subtitle}</h3>
      <h1 className="event-time">{time}</h1>
      <h2 className="event-title">{title}</h2>
      <button className="event-button" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default EventDetails;
