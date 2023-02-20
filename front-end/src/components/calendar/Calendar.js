import React, { useState } from "react";

import { MONTHS } from "../../util/months";
import Cells from "./Cells";

import "./Calendar.css";

export default function Calendar() {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(date.getDate());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());

  const selectedMonthName = Object.keys(MONTHS)[currentMonth];
  const selectedMonthLength = MONTHS[selectedMonthName];

  const firstOfTheMonth = new Date(
    `${selectedMonthName} 1, ${currentYear} 00:00:00`
  ).getDay();

  console.log(firstOfTheMonth);

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleMonthChange = (e) => {
    e.target.value === "next"
      ? setCurrentMonth((previous) => previous + 1)
      : setCurrentMonth((previous) => previous - 1);
  };

  return (
    <div className="calendar-container">
      <h1 className="month-title">{selectedMonthName}</h1>
      <div className="days-of-the-week-container">
        {daysOfTheWeek.map((dayOfTheWeek, index) => (
          <div key={index} className="day-of-the-week">
            {dayOfTheWeek}
          </div>
        ))}
      </div>
      <div className="cell-container">
        <Cells
          selectedMonthLength={selectedMonthLength}
          currentDate={currentDate}
          firstOfTheMonth={firstOfTheMonth}
        />
      </div>
      <button onClick={handleMonthChange} value="previous">
        {"<"}
      </button>
      <button onClick={handleMonthChange} value="next">
        {">"}
      </button>
    </div>
  );
}
