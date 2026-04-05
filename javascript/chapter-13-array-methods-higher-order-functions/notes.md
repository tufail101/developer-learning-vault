# Chapter 13: Array Methods And Higher-Order Functions

## Higher-Order Functions

A higher-order function either accepts another function or returns one.

## Useful Array Methods

- `forEach`
- `map`
- `filter`
- `reduce`

## Example: `map`

```js
const prices = [10, 20, 30];
const doubled = prices.map(function (price) {
  return price * 2;
});
```

## Example: `filter`

```js
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
```

## Example: `reduce`

```js
const total = [10, 20, 30].reduce(function (sum, value) {
  return sum + value;
}, 0);
```

## Real-World Analogy

These methods are like different ways of handling a basket of items:

- `map` changes each item
- `filter` keeps only some items
- `reduce` combines everything into one result

## Why This Matters

Real frontend apps often transform data before showing it in the UI.

## Best Practices

- choose the method that matches the job
- keep callback logic short
- use clear names for callback parameters

## Common Mistakes

- using `map` when you really want `filter`
- forgetting that `map` returns a new array
- finding `reduce` confusing because the accumulator is unclear
