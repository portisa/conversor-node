const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

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

readline.question('Enter a positive integer: ', (input) => {
  const trimmedInput = input.trim();

  if (trimmedInput.length > 5) {
    console.error("Error: Número inválido. Demasiadas cifras.");
    readline.close();
    return;
  }

  const decimalNumber = parseInt(trimmedInput);

  if (isNaN(decimalNumber) || decimalNumber < 1) {
    console.error("Error: Please enter a valid positive integer.");
  } else {
    console.log(`\n--- Results for [${decimalNumber}] ---`);
    console.log(` > Binary: ${decimalNumber.toString(2)}`);
    console.log(` > Hexadecimal: ${decimalNumber.toString(16).toUpperCase()}`);
    console.log(` > Roman: ${getRomanNumeral(decimalNumber)}`);
  }

  readline.close();
});