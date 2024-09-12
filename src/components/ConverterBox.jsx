import React, { useState } from "react";
import SelectInput from "./SelectInput";
import Forms from "./Forms";
import toast, { Toaster } from "react-hot-toast";

function ConverterBox() {
  // ================= States ====================
  const [usRate, setUsRate] = useState("dollar"); // Default to Dollar
  const [iranRate, setIranRate] = useState("rial"); // Default to Rial
  const [inputValue, setInputValue] = useState("");

  // ================= Handlers ====================

  const moneyConverter = (rate, inputValue) => {
    const IRR_TO_USD = 0.000000236617; // 1 IRR to USD
    const USD_TO_IRR = 42262.4; // 1 USD to IRR

    if (rate === "rial") {
      if (inputValue < 0) {
        toast.error("This value cannot be negative!");
        return "";
      }
      return (inputValue * IRR_TO_USD).toFixed(4); // Convert IRR to USD
    } else if (rate === "dollar") {
      if (inputValue < 0) {
        toast.error("This value cannot be negative!");
        return "";
      }
      return (inputValue * USD_TO_IRR).toFixed(0); // Convert USD to IRR
    }
  };

  // ================= End Handlers ==================

  return (
    <section className="section-converter__box">
      <Toaster />
      <div className="container">
        <div className="section-converter__inner">
          <p className="converter-inner__title">Exchange rate conversion</p>
          <div className="inner-select__box">
            <SelectInput
              usRate={usRate}
              iranRate={iranRate}
              onUsRate={(e) => setUsRate(e.target.value)}
              onIranRate={(e) => setIranRate(e.target.value)}
            />
          </div>
          <div className="inner-forms__box">
            <Forms
              moneyConverter={(value) =>
                moneyConverter(iranRate === "rial" ? "rial" : "dollar", value)
              }
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConverterBox;
