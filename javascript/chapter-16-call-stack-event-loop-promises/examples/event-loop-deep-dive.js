/*
  Chapter 16 example: Event Loop And Promises Deep Dive
  Run this file in the browser console or Node.js to see how
  synchronous code, microtasks, and timers are ordered.
*/

console.log("1. Script start");

setTimeout(() => {
  console.log("4. Timer callback from setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise microtask");
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
  });

console.log("2. Script end");

async function loadLesson() {
  try {
    const value = await Promise.resolve("5. Async/await result");
    console.log(value);
  } catch (error) {
    console.error("Async error:", error);
  }
}

loadLesson();
