const getAngkaTerbesarKedua = (numArray) => {
  if (numArray === undefined) return "Error: Bro where is the parameter?";
  if (!Array.isArray(numArray)) return "Error: Invalid data type";
  if (numArray.length === 0) return "Error: Empty array";
  if (!numArray.every((e) => typeof e === "number"))
    return "Error: Array contains non-numeric data";

  const sortedArray = numArray.sort((a, b) => b - a);
  return (secondLargest = [...new Set(sortedArray)][1]);
};

const dataAngka = [9, "X"];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua("a"));
console.log(getAngkaTerbesarKedua([]));
