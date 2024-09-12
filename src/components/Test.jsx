// import React, { useState } from "react";

// const NumberInput = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Check if the input value is a valid number
//     if (isNaN(inputValue) || inputValue.trim() === "") {
//       alert("Please enter a valid number!");
//     } else {
//       alert(`You entered: ${inputValue}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter a number:
//         <input type="text" value={inputValue} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default NumberInput;

// Exchange rates
const IRR_TO_USD = 0.000000236617; // 1 IRR to USD
const USD_TO_IRR = 42262.4; // 1 USD to IRR


function convertRialToDollar(rial) {
  if (rial < 0) {
    throw new Error("Amount in Rial cannot be negative.");
  }
  return rial * IRR_TO_USD;
}

function convertDollarToRial(dollar) {
  if (dollar < 0) {
    throw new Error("Amount in Dollar cannot be negative.");
  }
  return dollar * USD_TO_IRR;
}

// Example usage:
const rialAmount = 1000000; // 1,000,000 IRR
const dollarAmount = 100; // 100 USD

console.log(
  `${rialAmount} IRR is equivalent to ${convertRialToDollar(rialAmount).toFixed(
    2
  )} USD`
);
console.log(
  `${dollarAmount} USD is equivalent to ${convertDollarToRial(
    dollarAmount
  ).toFixed(2)} IRR`
);
