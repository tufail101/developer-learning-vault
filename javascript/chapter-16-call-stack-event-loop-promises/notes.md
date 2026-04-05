# Chapter 16: Call Stack, Event Loop, And Promises

## Call Stack

The call stack tracks which function is currently running.

JavaScript runs one main task at a time on the stack.

## Event Loop

The event loop helps JavaScript handle delayed work without freezing the page.

This is why things like timers and network requests can finish later.

## Promise

A promise represents a result that may arrive later.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```

## Real-World Analogy

The call stack is like a person doing one job at a time.
The event loop is like an assistant who reminds that person when waiting tasks are ready.

## Why This Matters

Understanding async behavior helps you debug frontend code that involves timers, APIs, and UI updates.

## Best Practices

- keep async flows readable
- use promises carefully
- prefer `async` and `await` when it improves clarity

## Common Mistakes

- thinking JavaScript runs many lines at exactly the same time
- expecting async data to exist immediately
- forgetting to handle promise errors
