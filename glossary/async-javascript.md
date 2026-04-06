# Async JavaScript

## Callback (`callback`)

Definition:
A callback is a function passed into another function so it can be run later.

Analogy:
It is like telling a friend, "When you arrive, call me."

Code example:

```js
setTimeout(function () {
  console.log("One second passed");
}, 1000);
```

Why this matters:
Callbacks are everywhere in JavaScript, especially in event listeners, timers, and older async APIs. Understanding callbacks helps you understand how JavaScript organizes work that happens later.

Learn more:
[chapter-12-closures-callbacks](../javascript/chapter-12-closures-callbacks/)

## Event Loop (`event-loop`)

Definition:
The event loop is the system that checks when the call stack is empty and then moves ready async tasks into execution.

Analogy:
It is like a manager checking whether your desk is clear before handing you the next task.

Code example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 0);

console.log("End");
```

Why this matters:
The event loop explains why JavaScript can handle timers, clicks, and network requests without freezing the page. It also helps you predict execution order when debugging async behavior.

Learn more:
[chapter-16-call-stack-event-loop-promises](../javascript/chapter-16-call-stack-event-loop-promises/)

## Promise (`promise`)

Definition:
A promise is an object that represents a value that may be available now, later, or never if an error happens.

Analogy:
It is like a restaurant ticket that tells you your order is still cooking, ready, or failed.

Code example:

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Why this matters:
Promises make async code easier to organize than deep callback nesting. They are the foundation for modern data fetching, chained async work, and `async` and `await`.

Learn more:
[chapter-16-call-stack-event-loop-promises](../javascript/chapter-16-call-stack-event-loop-promises/)

## Async-Await (`async-await`)

Definition:
`async` and `await` are syntax built on top of promises that let asynchronous code read more like top-to-bottom synchronous code.

Analogy:
It is like pausing on one step of a recipe until the oven timer finishes, then continuing from the next line.

Code example:

```js
async function loadTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

Why this matters:
`async` and `await` make complex async flows easier to read and maintain. They are used constantly in modern frontend and backend JavaScript, especially around API calls and async business logic.

Learn more:
[chapter-16-call-stack-event-loop-promises](../javascript/chapter-16-call-stack-event-loop-promises/)
