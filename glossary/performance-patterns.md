# Performance Patterns

## Debounce (`debounce`)

Definition:
Debounce is a technique that delays running a function until rapid repeated events stop for a specified amount of time.

Analogy:
It is like waiting until someone finishes speaking before answering instead of interrupting every word.

Code example:

```js
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
```

Why this matters:
Debounce is useful for search boxes, resize handlers, and autosave behavior where running code on every tiny change would be wasteful. It improves performance and often makes the UI feel calmer.

Learn more:
[chapter-18-storage-performance-basics](../javascript/chapter-18-storage-performance-basics/)

## Throttle (`throttle`)

Definition:
Throttle is a technique that limits how often a function can run during a repeated stream of events.

Analogy:
It is like allowing one person through a gate every few seconds instead of letting everyone rush through at once.

Code example:

```js
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
```

Why this matters:
Throttle is helpful for scroll, resize, and mousemove behavior where you still want regular updates, just not on every single event. It prevents expensive code from running too often and dragging down the interface.

Learn more:
[chapter-18-storage-performance-basics](../javascript/chapter-18-storage-performance-basics/)
