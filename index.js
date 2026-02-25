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

  // Revisar si es número entero válido
  if (!/^\d+$/.test(trimmedInput)) {
    console.error("Error: Debes ingresar un número entero positivo válido.");
    readline.close();
    return;
  }

  const decimalNumber = parseInt(trimmedInput);

  // Validaciones específicas
  if (decimalNumber < 1) {
    console.error("Error: Número inválido. Debe ser positivo.");
  } else if (decimalNumber > 3999999) {
    console.error("Error: Número demasiado grande para conversión romana (Max: 3,999,999).");
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