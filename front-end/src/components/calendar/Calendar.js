import React, { useReducer, useState } from "react";

import { MONTHS } from "../../util/months";
import Cells from "./Cells";
import Toolbar from "./toolbar/Toolbar";

import "./Calendar.css";

export default function Calendar() {
  const date = new Date();

  const [currentDate, setCurrentDate] = useState(date.getDate());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [selectedCell, setSelectedCell] = useState(0);

  const monthNames = Object.keys(MONTHS);
  const selectedMonthName = monthNames[currentMonth];
  const selectedMonthLength = MONTHS[selectedMonthName];

  const firstOfTheMonth = new Date(
    `${selectedMonthName} 1, ${currentYear} 00:00:00`
  ).getDay();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="calendar-container">
      <Toolbar
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        monthNames={monthNames}
      />
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
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
      </div>
    </div>
  );
}
