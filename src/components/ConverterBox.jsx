import React, { useState, useEffect } from "react";
import SelectInput from "./SelectInput";
import Forms from "./Forms";
import toast, { Toaster } from "react-hot-toast";

function ConverterBox() {
  // ================= States ====================
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("IRR");
  const [inputValue, setInputValue] = useState("");
  const [calculatedValue, setCalculatedValue] = useState("");

  // ================= Handlers ====================
  const moneyConverter = (value) => {
    const IRR_TO_USD = 0.0000237189; // 1 IRR to USD
    const USD_TO_IRR = 42160.4; // 1 USD to IRR

    if (value < 0) {
      toast.error("This value cannot be negative!");
      return;
    }
    let result = 0;
    if (fromCurrency === "USD" && toCurrency === "IRR") {
      result = (value * USD_TO_IRR).toFixed(4);
    } else if (fromCurrency === "IRR" && toCurrency === "USD") {
      result = (value * IRR_TO_USD).toFixed(4);
    } else {
      result = value; // Same currency conversion
    }
    return result; // Return the calculated result
  };

  // Update calculated value whenever inputValue, fromCurrency, or toCurrency changes
  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const result = moneyConverter(numericValue);
        setCalculatedValue(result);
      } else {
        setCalculatedValue(""); // Reset if invalid input
      }
    } else {
      setCalculatedValue(""); // Reset if input is empty
    }
  }, [inputValue, fromCurrency, toCurrency]);

  // ================= End Handlers ==================

  return (
    <section className="section-converter__box">
      <Toaster />
      <div className="container">
        <div className="section-converter__inner">
          <p className="converter-inner__title">Exchange rate conversion</p>
          <div className="inner-select__box">
            <SelectInput
              fromCurrency={fromCurrency}
              setFromCurrency={setFromCurrency}
              toCurrency={toCurrency}
              setToCurrency={setToCurrency}
              setInputValue={setInputValue}
            />
          </div>
          <div className="inner-forms__box">
            <Forms
              calculatedValue={calculatedValue}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConverterBox;