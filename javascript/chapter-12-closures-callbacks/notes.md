# Chapter 12: Closures And Callbacks

## Callbacks

A callback is a function passed into another function.

```js
function greetUser(callback) {
  callback("Aman");
}

greetUser(function (name) {
  console.log(`Hello, ${name}`);
});
```

## Closures

A closure happens when a function remembers variables from the place where it was created.

```js
function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}
```

## Real-World Analogy

A callback is like giving someone a phone number to call later.
A closure is like carrying a backpack that keeps important information with you.

## Why This Matters

Callbacks show up in events, timers, and async work.
Closures appear in many real apps and libraries, including React patterns.

## Best Practices

- keep callbacks readable
- use closures when state needs to stay private
- avoid deeply nested callback code when possible

## Common Mistakes

- calling a function immediately instead of passing it
- getting confused about which variables a closure remembers
