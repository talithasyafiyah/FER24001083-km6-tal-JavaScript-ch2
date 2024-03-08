const checkTypeNumber = (givenNumber) => {
  if (!givenNumber) return "Error: Bro where is the parameter?";
  if (typeof givenNumber !== "number") return "Error: Invalid data type";

  if (givenNumber % 2 === 0) {
    return "GENAP";
  }
  return "GANJIL";
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("a"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());