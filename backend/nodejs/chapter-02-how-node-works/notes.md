# Chapter 2: How Node.js Works

## The Big Idea

Node.js is built to handle many tasks efficiently, especially input and output work like:

- reading files
- waiting for requests
- talking to databases
- sending responses

## Event-Driven Model

Node.js often works by listening and reacting.

For example:

- a request arrives
- a file finishes reading
- a timer completes

Node reacts when the event happens.

## Real-World Analogy

Imagine a restaurant worker taking many orders without cooking every dish personally at the counter.
They keep things moving by responding when different tasks are ready.

## Why This Matters

Backend systems often spend more time waiting for things than calculating things.
Node.js is useful because it handles waiting tasks efficiently.

## Example

```js
setTimeout(function () {
  console.log("Finished later");
}, 1000);

console.log("Finished now");
```

## What To Understand As A Beginner

- Node.js is good at I/O work
- it uses an event-driven model
- not every line finishes in the order you first imagine when async work is involved

## Best Practices

- learn async behavior slowly
- test simple examples first
- read terminal output carefully

## Common Mistakes

- assuming every task blocks everything else
- expecting delayed work to finish immediately
- worrying about internals too early without examples
