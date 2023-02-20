import React, { useRef, useState } from "react";

import "./Cells.css";

export default function Cells({
  selectedMonthLength,
  currentDate,
  firstOfTheMonth,
  selectedCell,
  setSelectedCell,
}) {
  let dayCounter = 1;

  const cellRef = useRef([]);

  const cells = Array(35)
    .fill(0)
    .map((cell, index) => {
      if (index >= firstOfTheMonth && dayCounter <= selectedMonthLength) {
        cell = dayCounter++;
      }
      return cell;
    });

  const handleClickedCell = (e) => {
    if (e.target.id === "extra-cell") return;
    const cell = cellRef.current[e.currentTarget.id];
    if (Number(cell.id) === selectedCell) return;

    if (selectedCell !== 0) {
      const previousCell = cellRef.current[selectedCell];
      previousCell.classList.remove("selected-cell");
    }

    setSelectedCell((c) => (c = Number(cell.id)));
    cell.classList.add("selected-cell");
  };

  return (
    <>
      {cells.map((value, index) => (
        <div
          key={index}
          id={`${value === 0 ? "extra-cell" : value}`}
          ref={(el) => (cellRef.current[value] = el)}
          className={value === currentDate ? "cell current-day" : "cell"}
          onClick={handleClickedCell}
        >
          {value === 0 ? null : value}
        </div>
      ))}
    </>
  );
}
