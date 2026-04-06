/*
  Chapter 11 example: Type Conversion And Scope Deep Dive
  This file demonstrates explicit conversion, truthy/falsy checks,
  scope boundaries, and a hoisting bug using clear, runnable examples.
*/

console.log("=== Explicit Conversion ===");

const formAge = "24";
const parsedAge = Number(formAge);

console.log("Original value:", formAge, "type:", typeof formAge);
console.log("Converted value:", parsedAge, "type:", typeof parsedAge);

console.log("\n=== Truthy And Falsy ===");

const sampleValues = ["hello", "", 0, 42, null, undefined, [], {}];

sampleValues.forEach((value) => {
  console.log(value, "=>", Boolean(value));
});

console.log("\n=== Scope Example ===");

const appName = "Web Dev Learning System";

function printLesson() {
  const lessonName = "Type Conversion";
  console.log("Global scope variable:", appName);
  console.log("Function scope variable:", lessonName);
}

printLesson();

console.log("\n=== Block Scope Example ===");

if (true) {
  let blockScoped = "I only exist inside this block";
  console.log(blockScoped);
}

console.log("\n=== Hoisting Bug Example ===");

function calculateDiscountedPrice(price) {
  // Because `var` is hoisted, discountRate exists as `undefined`
  // at the start of the function, even though the declaration appears later.
  if (!discountRate) {
    var discountRate = 0.2;
  }

  return price - price * discountRate;
}

console.log("Discounted price:", calculateDiscountedPrice(100));

console.log("\n=== Safer Modern Version ===");

function calculateDiscountedPriceSafely(price) {
  const discountRate = 0.2;
  return price - price * discountRate;
}

console.log("Discounted price:", calculateDiscountedPriceSafely(100));
