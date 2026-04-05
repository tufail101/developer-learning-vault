# Chapter 4: Loops And Functions

## Loops

Loops repeat actions.

```js
for (let i = 1; i <= 3; i += 1) {
  console.log(i);
}
```

## Functions

Functions group reusable logic into one place.

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

## Real-World Analogy

A loop is like checking every student name on a list.
A function is like a recipe you can reuse whenever needed.

## Combining Them

```js
for (let i = 1; i <= 3; i += 1) {
  console.log(greet(`Student ${i}`));
}
```

## Why This Matters

Frontend code often repeats patterns:

- creating list items
- validating several fields
- updating multiple UI parts

Functions and loops keep that work manageable.

## Best Practices

- give functions clear names
- keep functions focused on one job
- avoid very large loop blocks when a helper function would be clearer

## Common Mistakes

- forgetting to return a value
- writing functions that do too many things
- creating infinite loops by mistake
