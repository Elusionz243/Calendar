import React from "react";

import "./Toolbar.css";

export default function Toolbar({
  currentYear,
  setCurrentYear,
  currentMonth,
  setCurrentMonth,
  monthNames,
}) {
  const years = Array(currentYear - 1970 + 61)
    .fill(1970)
    .map((value, index) => value + index);

  const returnToCurrentDate = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    setCurrentMonth((previous) => (previous = month));
    setCurrentYear((previous) => (previous = year));
    return;
  };

  const handleMonthChange = (e) => {
    const value = e.currentTarget.value;
    if (value === "next") {
      if (currentMonth === 11) {
        setCurrentYear((previous) => previous + 1);
        setCurrentMonth(0);
        return;
      }
      setCurrentMonth((previous) => previous + 1);
      return;
    }
    if (currentMonth === 0) {
      setCurrentYear((previous) => previous - 1);
      setCurrentMonth(11);
      return;
    }
    setCurrentMonth((previous) => previous - 1);
  };

  return (
    <div className="toolbar-container">
      <div className="toolbar">
        <div className="months-dropdown-container">
          <button
            onClick={handleMonthChange}
            className="calendar-nav-btn"
            value="previous"
          >
            <i className="bi bi-arrow-left" />
          </button>
          <select
            name="months"
            id="month-dropdown"
            onChange={(e) =>
              setCurrentMonth((previous) => (previous = e.target.value))
            }
            className="toolbar-dropdown"
            value={currentMonth}
          >
            {monthNames.map((name, index) => (
              <option key={index} id={`${name}-dropdown-option`} value={index}>
                {name}
              </option>
            ))}
          </select>
          <button
            onClick={handleMonthChange}
            className="calendar-nav-btn"
            value="next"
          >
            <i className="bi bi-arrow-right" />
          </button>
        </div>
        <div className="years-container">
          <button
            className="calendar-nav-btn"
            onClick={(e) => setCurrentYear((previous) => previous - 1)}
          >
            <i className="bi bi-arrow-left" />
          </button>
          <select
            id="year-dropdown"
            name="years"
            className="toolbar-dropdown"
            onChange={(e) =>
              setCurrentYear((previous) => (previous = e.target.value))
            }
            value={currentYear}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button
            className="calendar-nav-btn"
            onClick={(e) => setCurrentYear((previous) => previous + 1)}
          >
            <i className="bi bi-arrow-right" />
          </button>
        </div>
        <button
          onClick={returnToCurrentDate}
          className="calendar-nav-btn today-btn"
        >
          Today
        </button>
      </div>
    </div>
  );
}
