import React, { useRef, useState } from "react";

import "./Cells.css";

export default function Cells({
  selectedMonthLength,
  currentDate,
  firstOfTheMonth,
}) {
  const [selectedCell, setSelectedCell] = useState(0);

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
    const cell = cellRef.current[e.target.id || e.target.parentElement.id];
    if (Number(cell.id) === selectedCell) return;

    if (selectedCell !== 0) {
      const previousCell = cellRef.current[selectedCell];
      previousCell.style.border = "1px solid #3e3e3e5e";
    }
    setSelectedCell((c) => (c = Number(cell.id)));
    cell.style.border = "1px solid lime";
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
