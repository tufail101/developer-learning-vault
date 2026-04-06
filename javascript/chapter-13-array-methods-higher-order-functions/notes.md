# Chapter 13: Array Methods And Higher-Order Functions

## Big Picture

Modern JavaScript uses array methods constantly.

If you build UIs,
process API data,
search lists,
filter tables,
or calculate totals,
you will use methods like `map`,
`filter`,
and `reduce` all the time.

These methods are called higher-order functions
because they take another function as an argument
or return a function.

In this chapter, we will cover:

- `map`
- `filter`
- `reduce`
- `find`
- `findIndex`
- `some`
- `every`
- `flat`
- `flatMap`
- chaining methods
- when not to use higher-order functions
- performance considerations

## What A Higher-Order Function Is

A higher-order function is a function that works with other functions.

Many array methods take a callback.

That callback tells JavaScript what operation to perform on each item.

## Real-World Analogy

Imagine a restaurant kitchen.

The ingredient list is the array.

Different kitchen stations perform different jobs:

- one station slices ingredients
- one removes unwanted items
- one combines everything into a final dish

Array methods work like those stations.

Each method has a specific responsibility.

## Why These Methods Matter

They help you write code that is:

- more readable
- easier to test
- less dependent on manual loops
- closer to the problem you are solving

That last point matters.

`filter` communicates "keep matching items."
`map` communicates "transform each item."
`reduce` communicates "combine items into one result."

The method name explains the intent.

## `map`

`map` creates a new array
by transforming every item.

```js
const prices = [10, 20, 30];

const withTax = prices.map((price) => price * 1.18);

console.log(withTax);
```

Use `map` when the number of items stays the same,
but their shape or value changes.

### Real Example

```js
const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
];

const names = users.map((user) => user.name);
console.log(names);
```

## `filter`

`filter` creates a new array
containing only items that pass a condition.

```js
const scores = [45, 72, 88, 30];

const passingScores = scores.filter((score) => score >= 50);

console.log(passingScores);
```

### Real Example

```js
const products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true },
];

const availableProducts = products.filter((product) => product.inStock);
console.log(availableProducts);
```

## `reduce`

`reduce` takes an array
and combines it into a single value.

That final value could be:

- a number
- a string
- an object
- another array

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(total);
```

### Real Example

```js
const cart = [
  { name: "Book", price: 15, quantity: 2 },
  { name: "Pen", price: 3, quantity: 4 },
];

const cartTotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(cartTotal);
```

`reduce` is powerful,
but beginners often overuse it.

If `map` or `filter` communicates your intent more clearly,
use those instead.

## `find`

`find` returns the first matching item.

```js
const team = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
];

const foundUser = team.find((member) => member.id === 2);
console.log(foundUser);
```

If nothing matches,
`find` returns `undefined`.

## `findIndex`

`findIndex` returns the position of the first matching item.

```js
const tasks = ["Plan", "Code", "Test"];

const testIndex = tasks.findIndex((task) => task === "Test");
console.log(testIndex);
```

If nothing matches,
it returns `-1`.

That makes it useful when you need the position,
not the item itself.

## `some`

`some` checks whether at least one item matches a condition.

```js
const orders = [120, 80, 45];

const hasBigOrder = orders.some((order) => order > 100);
console.log(hasBigOrder);
```

This returns `true`
as soon as one match is found.

## `every`

`every` checks whether all items match a condition.

```js
const fields = ["name", "email", "password"];

const allFilled = fields.every((field) => field.length > 0);
console.log(allFilled);
```

This is useful for validation.

## `flat`

`flat` removes one or more levels of nested arrays.

```js
const nested = [[1, 2], [3, 4], [5]];

console.log(nested.flat());
```

You can pass a depth if needed.

```js
const deeplyNested = [1, [2, [3, [4]]]];
console.log(deeplyNested.flat(2));
```

## `flatMap`

`flatMap` maps each item
and then flattens the result by one level.

```js
const sentences = ["hello world", "learn javascript"];

const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words);
```

This is useful when each item expands into multiple items.

## Example 1: Simple Transformation

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

This is the cleanest kind of array method usage:
small,
clear,
predictable.

## Example 2: Medium Complexity Search Flow

```js
const lessons = [
  { title: "HTML Basics", category: "html", duration: 20 },
  { title: "CSS Grid", category: "css", duration: 35 },
  { title: "Async JavaScript", category: "javascript", duration: 40 },
];

const longLessons = lessons
  .filter((lesson) => lesson.duration >= 30)
  .map((lesson) => lesson.title);

console.log(longLessons);
```

This chain reads almost like English:

1. keep long lessons
2. extract their titles

## Example 3: More Complex Data Summary

```js
const sales = [
  { region: "north", amount: 120 },
  { region: "south", amount: 90 },
  { region: "north", amount: 60 },
];

const summary = sales.reduce((result, sale) => {
  if (!result[sale.region]) {
    result[sale.region] = 0;
  }

  result[sale.region] += sale.amount;
  return result;
}, {});

console.log(summary);
```

This is a good `reduce` use case
because the result is a new grouped object.

## Chaining Multiple Methods

Method chaining is common and useful.

```js
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 20, inStock: true },
  { name: "Monitor", price: 250, inStock: false },
];

const affordableNames = products
  .filter((product) => product.inStock)
  .filter((product) => product.price < 500)
  .map((product) => product.name);

console.log(affordableNames);
```

This is readable because each step is clear.

If your chain becomes too long,
store intermediate results in variables
or split the logic into named functions.

## When NOT To Use Higher-Order Functions

Do not force array methods into every situation.

Sometimes a `for` loop is clearer.

Examples where a loop may be better:

- you need to break early in a complex way
- you need several side effects at once
- performance is very sensitive in a hot path
- the array method version becomes hard to read

Readable code beats trendy code.

## Performance Considerations

Array methods are usually fast enough for everyday frontend work.

Still,
you should understand a few tradeoffs.

### Extra arrays

`map` and `filter` create new arrays.

That is usually fine,
but in huge datasets it can add memory cost.

### Multiple passes

This chain:

```js
items.filter(...).map(...).reduce(...)
```

means multiple passes through data.

That is often acceptable,
but not always ideal for large data processing.

### Premature optimization warning

Do not rewrite clean code into ugly code
just because you imagine a performance issue.

Measure first.

## Common Mistakes

- using `map` when you really want `filter`
- forgetting to return a value from `map`
- using `reduce` for everything because it feels powerful
- mutating original data when you meant to create new data
- writing chains so long they become hard to debug

## Best Practices

- pick the method that matches your intent
- keep callback functions small
- use descriptive variable names
- extract repeated logic into helper functions
- prefer clarity over clever one-liners

## Debugging Tips

If a chain is not working,
split it apart.

```js
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);

const names = activeUsers.map((user) => user.name);
console.log(names);
```

Breaking a chain into steps
makes debugging much easier.

## How A Senior Dev Thinks About This

A senior developer thinks in data transformations.

They ask:

1. Am I transforming,
   filtering,
   searching,
   or aggregating?
2. Which method communicates that intent most clearly?
3. Is this chain still readable to another developer?
4. Do I need immutability here?
5. Is this data size large enough that performance matters?

They do not use array methods just because they can.
They use them because the resulting code tells the truth clearly.

## Quick Recap

- `map` transforms each item
- `filter` keeps matching items
- `reduce` combines items into one result
- `find` returns the first matching item
- `findIndex` returns the matching position
- `some` checks if at least one item matches
- `every` checks if all items match
- `flat` removes array nesting
- `flatMap` maps and flattens one level

## Practice Ideas

- filter a list of lessons by difficulty
- map user objects into dropdown label text
- reduce cart items into a total
- use `some` to detect unfinished tasks
- use `every` to validate a form field list
