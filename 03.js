const getAngkaTerbesarKedua = (numArray) => {
  // Validation
  if (numArray === undefined) return "Error: Bro where is the parameter?";
  if (!Array.isArray(numArray)) return "Error: Invalid data type";
  if (numArray.length === 0) return "Error: Empty array";
  if (numArray.some((e) => typeof e === "object"))
    return "Error: Object detected";
  if (!numArray.every((e) => typeof e === "number"))
    return "Error: Array contains non-numeric data";
  //End of validation

  const sortedArray = numArray.sort((a, b) => b - a);
  return (secondLargest = [...new Set(sortedArray)][1]);
};

const dataAngka = [9, 9, 2, 4, 5, 8, 8, 6, 7];
const dataAngka2 = [9, "X"];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(dataAngka2));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua("a"));
console.log(getAngkaTerbesarKedua([]));
console.log(getAngkaTerbesarKedua([{}]));