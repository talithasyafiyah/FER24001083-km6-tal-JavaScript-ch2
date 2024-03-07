const checkTypeNumber = (givenNumber) => {
  if (givenNumber) {
    if (typeof givenNumber === "number") {
      if (givenNumber % 2 === 0) {
        return "GENAP";
      }
      return "GANJIL";
    }
    return "Error: Invalid data type";
  }
  return "Bro where is the parameter?";
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
