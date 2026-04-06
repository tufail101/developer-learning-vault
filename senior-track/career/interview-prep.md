# Interview Prep

This guide gives you twenty common JavaScript interview questions with practical answers and short examples. The goal is not to memorize fancy wording. The goal is to explain clearly, think out loud, and connect the concept to real code.

## 1. What is the difference between `let`, `const`, and `var`?

`let` and `const` are block-scoped. `var` is function-scoped and is easier to misuse because of hoisting behavior. Use `const` by default and `let` when reassignment is needed.

```js
const site = "Vault";
let count = 0;
var legacy = "older syntax";
```

## 2. What is a closure?

A closure is when a function remembers variables from the scope where it was created, even after that outer scope has finished.

```js
function createCounter() {
  let count = 0;
  return () => ++count;
}
```

## 3. What is scope?

Scope decides where variables can be accessed. JavaScript has global scope, function scope, and block scope.

## 4. What is hoisting?

Hoisting is JavaScript processing declarations before execution reaches their line. `var` is hoisted in a confusing way, while `let` and `const` stay in the temporal dead zone until declared.

## 5. What is the difference between `==` and `===`?

`==` allows type coercion before comparison. `===` checks both value and type. Most professional code prefers `===`.

```js
console.log("5" == 5); // true
console.log("5" === 5); // false
```

## 6. What are truthy and falsy values?

Falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`. Most other values are truthy.

## 7. What is the DOM?

The DOM is the browser's object representation of the page. JavaScript uses it to read and update HTML elements.

```js
document.querySelector("h1").textContent = "Updated";
```

## 8. What is event bubbling?

Event bubbling means an event starts on the target element and then moves upward through parent elements unless stopped.

## 9. What is event delegation?

Event delegation means attaching one listener to a common parent and handling child interactions through the event target.

```js
list.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    console.log("Button clicked");
  }
});
```

## 10. What is the difference between `map`, `filter`, and `reduce`?

`map` transforms items, `filter` keeps matching items, and `reduce` combines items into one result.

## 11. What is the event loop?

The event loop checks when the call stack is clear and then moves ready asynchronous tasks into execution.

## 12. What is a promise?

A promise represents a future result that can be pending, fulfilled, or rejected.

## 13. What is `async/await`?

`async/await` is syntax built on promises that makes asynchronous code easier to read.

```js
async function loadData() {
  const response = await fetch("/api/data");
  return response.json();
}
```

## 14. What is the difference between `null` and `undefined`?

`undefined` usually means a value has not been assigned. `null` is an intentional empty value.

## 15. What is the difference between `localStorage`, `sessionStorage`, and cookies?

`localStorage` persists across sessions, `sessionStorage` lasts for one tab session, and cookies are small pieces of data often sent with requests to the server.

## 16. What is a higher-order function?

A higher-order function takes another function as an argument or returns one. Examples include `map`, `filter`, and custom utility functions.

## 17. What is destructuring?

Destructuring lets you pull values out of arrays or objects into variables.

```js
const { name } = { name: "Asha", role: "student" };
```

## 18. What is the difference between `slice` and `splice`?

`slice` returns a copy without mutating the original array. `splice` mutates the original array.

## 19. What is a module?

A module is a file with its own scope that can export code and import code from other files.

## 20. How would you explain `this` in JavaScript?

`this` depends on how a function is called. In object methods it often refers to the object, but arrow functions do not create their own `this`.

## Interview Advice

- explain in plain language before using jargon
- give a short example when helpful
- say what the concept matters for in real work
- if you do not know, be honest and reason from what you do know
- think out loud, especially in debugging questions
