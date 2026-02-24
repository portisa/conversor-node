/**
 * Numeral Converter Suite
 * Author: Isabela
 * Description: Professional Decimal to Binary, Hexadecimal, and Roman converter.
 * Includes range validation to prevent memory overflow during Roman conversion.
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Converts a decimal number to its Roman numeral representation.
 * Standard Roman notation handles up to 3,999,999 with vinculum (represented here as strings).
 * @param {number} num - The decimal number to convert.
 * @returns {string} The Roman numeral string.
 */
function getRomanNumeral(num) {
  const mapping = [
    { value: 1000, symbol: "M" }, { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" }, { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" }, { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" }, { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" }, { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" }, { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let romanResult = "";
  let remainingValue = num;

  for (const item of mapping) {
    while (remainingValue >= item.value) {
      romanResult += item.symbol;
      remainingValue -= item.value;
    }
  }
  return romanResult;
}

// Main execution flow
readline.question('Enter a positive integer: ', (input) => {
  const decimalNumber = parseInt(input);

  // Validation to handle invalid inputs, negative numbers, and potential overflows
  if (isNaN(decimalNumber) || decimalNumber < 1) {
    console.error("Error: Please enter a valid positive integer.");
  } else if (decimalNumber > 3999999) {
    // Preventing Heap Memory Overflow: Roman conversion of extremely large numbers 
    // would consume excessive memory and processing time.
    console.error("Error: Number exceeds the safe range for Roman conversion (Max: 3,999,999).");
  } else {
    const binaryValue = decimalNumber.toString(2);
    const hexValue = decimalNumber.toString(16).toUpperCase();
    const romanValue = getRomanNumeral(decimalNumber);

    console.log(`\n--- Results for [${decimalNumber}] ---`);
    console.log(` > Binary: ${binaryValue}`);
    console.log(` > Hexadecimal: ${hexValue}`);
    console.log(` > Roman: ${romanValue}`);
  }

  readline.close();
});