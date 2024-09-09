import React from "react";
import SelectInput from "./SelectInput";
import Forms from "./Forms";

function ConverterBox() {
  return (
    <section className="section-converter__box">
      <div className="container">
        <div className="section-converter__inner">
          <p className="converter-inner__title">Exchange rate conversion</p>
          <div className="inner-select__box">
            <SelectInput />
            <span className="arrow-right-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </span>
            <SelectInput />
          </div>
          <div className="inner-forms__box">
            <Forms />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConverterBox;
