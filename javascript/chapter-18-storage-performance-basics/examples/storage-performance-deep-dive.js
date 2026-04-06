/*
  Chapter 18 example: Storage And Performance Deep Dive
  This file demonstrates saving structured data with localStorage,
  plus reusable debounce and throttle helpers.
*/

console.log("=== localStorage with JSON ===");

const preferences = {
  theme: "dark",
  fontSize: "large",
};

localStorage.setItem("preferences", JSON.stringify(preferences));

const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
console.log(savedPreferences);

console.log("\n=== debounce ===");

function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const logSearch = debounce((value) => {
  console.log("Searching for:", value);
}, 300);

logSearch("jav");
logSearch("javas");
logSearch("javascript");

console.log("\n=== throttle ===");

function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) {
      return;
    }

    callback.apply(this, args);
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

const logScroll = throttle(() => {
  console.log("Scroll event handled at", new Date().toLocaleTimeString());
}, 500);

logScroll();
logScroll();
setTimeout(logScroll, 600);
