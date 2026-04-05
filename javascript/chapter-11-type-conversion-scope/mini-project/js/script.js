function checkAge(ageText) {
  const ageNumber = Number(ageText);
  return ageNumber >= 18 ? "Adult" : "Minor";
}

console.log(checkAge("21"));
