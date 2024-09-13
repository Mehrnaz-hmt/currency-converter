import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Forms({
  inputValue,
  setInputValue,
  calculatedValue,
}) {
  const handleInputValue = (e) => {
    const value = e.target.value;

    if (value === "" || (!isNaN(value) && !isNaN(parseFloat(value)))) {
      setInputValue(value);
    } else {
      toast.error("Please Enter A Valid Number!");
      setInputValue("");
    }
  };

  return (
    <>
      <Toaster />
      <form className="exchange-form">
        <input
          value={inputValue}
          onChange={handleInputValue}
          name="name"
          type="number"
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
            type="number"
            readOnly
            placeholder="Automatically will calculate"
          />
        </div>
      </form>
    </>
  );
}

export default Forms;