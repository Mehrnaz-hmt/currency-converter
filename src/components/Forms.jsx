import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Forms({ moneyConverter, inputValue, setInputValue }) {
  const [calculatedValue, setCalculatedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform conversion when the form is submitted
    const convertedValue = moneyConverter(inputValue);
    setCalculatedValue(convertedValue);
  };

  const handleInputValue = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && !isNaN(parseFloat(value)))) {
      setInputValue(value);
      // Automatically convert when the input value changes
      const convertedValue = moneyConverter(value);
      setCalculatedValue(convertedValue);
    } else {
      toast.error("Please Enter A Valid Number!");
      setInputValue("");
      setCalculatedValue("");
    }
  };

  return (
    <>
      <form className="exchange-form" onSubmit={handleSubmit}>
        <Toaster />
        <input
          value={inputValue}
          onChange={handleInputValue}
          name="name"
          type="text"
          placeholder="Please enter the value"
        />
        <span className="equal-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </span>

        <div>
          <input
            value={calculatedValue}
            type="text"
            readOnly
            placeholder="Automatically will calculate"
          />
        </div>

        <div>
          <button type="submit" className="btn btn--primary">
            Convert
          </button>
        </div>
      </form>
    </>
  );
}

export default Forms;
