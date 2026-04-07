import React from "react";
import "./WeddingCalendar.css";

const WeddingCalendar = () => {
  const daysOfWeek = ["ԵԿ", "ԵՌ", "ՉՈՌ", "ՀՆԳ", "ՈՒՌ", "ՇԲԱԲ", "ԿԻՌ"];
  const days = [
    "", "", "", "", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17",
    "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31"
  ];

  const monthNames = [
    "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
    "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
  ];
  const currentMonth = monthNames[4];

  return (
    <div className="calendar-container">
      <div className="calendar-title">
        <span className="month">{currentMonth}</span>
        <span className="year">2026</span>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day === "2" ? "calendar-highlight" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCalendar;
