// Soal dari web -> menjumlahkan hasil dari kuadrat item dalam array

const sumSquare = (numArray) => {
  // Validation
  if (numArray === undefined) return "Error: Bro where is the parameter?";
  if (!Array.isArray(numArray)) return "Error: Invalid data type";
  if (numArray.length === 0) return "Error: Empty array";
  if (numArray.some((e) => typeof e === "object"))
    return "Error: Object detected";
  if (!numArray.every((e) => typeof e === "number"))
    return "Error: Array contains non-numeric data";
  // End of validation

  // Main operation
  return (result = numArray.reduce((previous, current) => {
    return previous + Math.pow(current, 2);
  }));
};

console.log(sumSquare([0, 1, 2, 3, 4]));
console.log(sumSquare(["a", "b"]));
console.log(sumSquare([{}]));
console.log(sumSquare([]));
console.log(sumSquare());
console.log(sumSquare({}));
console.log(sumSquare(0));
