import React, { useState } from "react";

function SelectInput({ iranRate, usRate, onIranRate, onUsRate }) {
  const [isIranSelected, setIsIranSelected] = useState(true); // Track which select is active

  const handleSwap = () => {
    setIsIranSelected(!isIranSelected); // Toggle the selection
  };

  return (
    <div className="select-box">
      <div>
        <div className="select-box-title">FROM</div>
        <select
          value={isIranSelected ? iranRate : usRate}
          onChange={isIranSelected ? onIranRate : onUsRate}
        >
          <option value="rial">IRR - Iranian Rial</option>
          <option value="dollar">USD - US Dollar</option>
        </select>
      </div>

      <svg
        onClick={handleSwap} // Call the swap function
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="arrow-right-left size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>

      <div>
        <div className="select-box-title">TO</div>
        <select
          value={isIranSelected ? usRate : iranRate}
          onChange={isIranSelected ? onUsRate : onIranRate}
        >
          <option value="rial">IRR - Iranian Rial</option>
          <option value="dollar">USD - US Dollar</option>
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
