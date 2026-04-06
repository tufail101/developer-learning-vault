# Chapter 16: Call Stack, Event Loop, And Promises

## Big Picture

JavaScript feels simple when code runs from top to bottom.

It feels harder when timers,
network requests,
click handlers,
and promises all start interacting.

To understand modern JavaScript,
you need a mental model for asynchronous behavior.

In this chapter, we will cover:

- the call stack
- Web APIs
- callback queue
- microtask queue
- why promises run before `setTimeout`
- promise states
- `Promise.all`
- `Promise.allSettled`
- `Promise.race`
- `async` and `await`
- async error handling
- common async bugs

## The Call Stack

The call stack keeps track of which function is currently running.

JavaScript executes one thing at a time on the main thread.

When a function is called,
it is pushed onto the stack.

When it finishes,
it is popped off.

## Real-World Analogy

Think of the call stack like a stack of plates.

You add a plate to the top.
You remove the top plate first.

That is last in,
first out.

Function calls work the same way.

## Step-By-Step Call Stack Example

```js
function third() {
  console.log("third");
}

function second() {
  third();
  console.log("second");
}

function first() {
  second();
  console.log("first");
}

first();
```

What happens:

1. `first()` is pushed to the stack
2. `second()` is pushed
3. `third()` is pushed
4. `third()` finishes and is removed
5. `second()` continues and is removed
6. `first()` continues and is removed

This model is essential for debugging execution order.

## Why The Stack Matters

If the stack gets too deep,
you can hit a stack overflow.

That often happens with uncontrolled recursion.

```js
function loopForever() {
  loopForever();
}

loopForever();
```

That code keeps pushing function calls
until the stack limit is reached.

## What Makes Async Feel Different

Asynchronous code lets JavaScript start work now
and finish it later.

Examples:

- `setTimeout`
- fetch requests
- DOM events
- promises

If JavaScript only had the call stack,
the page would freeze while waiting.

Instead,
the browser helps.

## Web APIs

Web APIs are features provided by the browser environment,
not by the JavaScript language itself.

Examples include:

- timers
- `fetch`
- DOM events
- geolocation

When you use `setTimeout`,
the timer does not sit on the call stack waiting.

The browser handles that timer in the background.

## Callback Queue

When a Web API finishes work,
its callback is placed in a queue.

Once the call stack is empty,
the event loop can move queued work onto the stack.

This is how delayed work happens without blocking everything else.

## Event Loop

The event loop constantly checks:

1. Is the call stack empty?
2. Is there queued work ready to run?

If yes,
it moves work onto the call stack.

That simple idea explains a huge amount of async behavior.

## Step-By-Step Timer Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 0);

console.log("End");
```

Many beginners expect:

```js
Start
Timer finished
End
```

But actual output is:

```js
Start
End
Timer finished
```

Why?

- `console.log("Start")` runs immediately
- `setTimeout` registers a timer with the browser
- `console.log("End")` runs immediately
- only after the stack is clear can the timer callback run

## Microtask Queue

Promises use a special queue called the microtask queue.

Microtasks have higher priority than the regular callback queue.

This is why resolved promise handlers run before `setTimeout` callbacks.

## Why Promises Run Before `setTimeout`

Look at this example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Output:

```js
A
D
C
B
```

Why?

- `A` runs immediately
- timer callback waits in the task queue
- promise `.then()` goes to the microtask queue
- `D` runs immediately
- stack becomes empty
- microtasks run first, so `C` logs
- then the timer callback runs, so `B` logs

This ordering is important for debugging async UI updates.

## Promise Basics

A promise represents a value that may be available now,
later,
or never.

Promises have three states:

- pending
- fulfilled
- rejected

## Promise States

### Pending

The async work has started,
but is not finished yet.

### Fulfilled

The work succeeded,
and the promise has a result.

### Rejected

The work failed,
and the promise has an error.

## Example 1: Simple Promise

```js
const lessonPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Lesson loaded");
  } else {
    reject("Lesson failed to load");
  }
});

lessonPromise
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
```

## Example 2: Promise Chaining

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Request failed:", error);
  });
```

Each `.then()` returns a new promise,
which is why chaining works.

## Example 3: More Complex Async Flow

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(500)
  .then(() => {
    console.log("Half a second passed");
    return wait(500);
  })
  .then(() => {
    console.log("Another half second passed");
  });
```

This is much cleaner than nesting timer callbacks.

## `Promise.all`

`Promise.all` waits for all promises to succeed.

If any one promise rejects,
the whole result rejects immediately.

```js
Promise.all([
  Promise.resolve("HTML done"),
  Promise.resolve("CSS done"),
  Promise.resolve("JS done"),
]).then((results) => {
  console.log(results);
});
```

Use it when all results are required.

## `Promise.allSettled`

`Promise.allSettled` waits for every promise to finish,
whether it succeeds or fails.

```js
Promise.allSettled([
  Promise.resolve("Saved"),
  Promise.reject("Upload failed"),
]).then((results) => {
  console.log(results);
});
```

Use it when you want the full outcome of every task.

## `Promise.race`

`Promise.race` settles as soon as the first promise settles.

```js
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Fast"), 300)),
  new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000)),
]).then((winner) => {
  console.log(winner);
});
```

This is useful for timeouts or choosing the first available result.

## `async` And `await`

`async` and `await` are syntax built on top of promises.

They do not replace promises.
They make promise-based code easier to read.

```js
async function loadTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
```

This looks closer to top-to-bottom synchronous code.

## Error Handling With `try` And `catch`

When using `await`,
wrap risky code in `try` and `catch`.

```js
async function loadTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
```

This is one of the most common async patterns in modern JavaScript.

## Common Async Bugs

### Forgetting `await`

```js
async function getData() {
  const response = fetch("/api/data");
  console.log(response);
}
```

Here,
`response` is a promise,
not the finished result.

### Assuming Async Results Exist Immediately

```js
let user;

fetch("/api/user")
  .then((response) => response.json())
  .then((data) => {
    user = data;
  });

console.log(user);
```

That `console.log` runs too early.

### Missing Error Handling

If a promise rejects and nobody handles it,
you create debugging pain and possible broken UI states.

## Best Practices

- learn the call stack before learning advanced async patterns
- use promises to avoid deeply nested callbacks
- use `async` and `await` when it improves readability
- always handle errors for important async flows
- be careful about execution order assumptions

## Debugging Order Of Execution

When async order feels confusing,
write tiny logs.

```js
console.log("Before request");

fetch("/api/lesson")
  .then((response) => {
    console.log("Response received");
    return response.json();
  })
  .then((data) => {
    console.log("Data parsed", data);
  });

console.log("After request started");
```

Small logs reveal timing faster than guessing.

## How A Senior Dev Thinks About This

A senior developer asks:

1. Which work is synchronous?
2. Which work is handled by the browser or runtime?
3. What queue will this callback enter?
4. What happens if the async step fails?
5. Does the UI show loading,
   success,
   and error states clearly?

They do not just write async code.
They design async flows.

## Quick Recap

- the call stack tracks current execution
- Web APIs handle work like timers and network requests
- the event loop moves ready work onto the stack
- promises use the microtask queue
- microtasks run before timer callbacks
- promises can be pending,
  fulfilled,
  or rejected
- `async` and `await` make promise code easier to read
- async code must handle errors intentionally

## Practice Ideas

- predict log order for timers and promises
- build a `wait(ms)` helper with a promise
- fetch API data with `.then()` and then with `await`
- compare `Promise.all` and `Promise.allSettled`
