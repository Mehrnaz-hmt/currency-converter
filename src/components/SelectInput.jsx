import React from "react";

function SelectInput({
  fromCurrency,
  toCurrency,
  setFromCurrency,
  setToCurrency,
  setInputValue
}) {
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setInputValue("")

    
  };

  return (
    <div className="select-box">
      <div>
        <div className="select-box-title">FROM</div>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          aria-label="From Currency"
        >
          <option value="IRR">IRR - Iranian Rial</option>
          <option value="USD">USD - US Dollar</option>
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
        style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
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
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          aria-label="To Currency"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="IRR">IRR - Iranian Rial</option>
        </select>
      </div>
    </div>
  );
}

export default SelectInput;