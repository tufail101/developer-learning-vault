# Chapter 2: Variables And Data Types

## Variables

Variables store values so you can use them later.

```js
const name = "Asha";
let age = 20;
```

Use `const` when the value should not be reassigned.
Use `let` when the value may change.

## Data Types

A data type tells JavaScript what kind of value it is working with.

Common beginner types:

- string
- number
- boolean
- null
- undefined
- object

## Real-World Analogy

Variables are labeled storage boxes.
The data type tells you whether the box contains text, a number, or something else.

## Example

```js
const course = "JavaScript";
const lessons = 18;
const isFun = true;
```

## Checking Types

```js
console.log(typeof course); // string
console.log(typeof lessons); // number
```

## Why This Matters

When you build UI, JavaScript often needs to know what kind of data it is handling before it can display or change it correctly.

## Best Practices

- use clear variable names
- prefer `const` by default
- keep related values grouped logically

## Common Mistakes

- using vague names like `data` or `x`
- reassigning values without a reason
- confusing strings and numbers
