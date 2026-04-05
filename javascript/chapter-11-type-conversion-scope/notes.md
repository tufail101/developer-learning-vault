# Chapter 11: Type Conversion And Scope

## Type Conversion

JavaScript sometimes changes one type into another.

```js
console.log(Number("42"));
console.log(String(99));
console.log(Boolean(1));
```

Some conversions are explicit, which means you do them on purpose.
Some happen automatically, which can create confusion.

## Scope

Scope controls where variables can be used.

```js
const appName = "Study App";

function showApp() {
  const message = "Welcome";
  console.log(appName);
  console.log(message);
}
```

`appName` is available outside and inside the function.
`message` is only available inside the function.

## Real-World Analogy

Type conversion is like translating a word into another format.
Scope is like deciding which room a key works in.

## Why This Matters

These ideas prevent confusing bugs in real frontend code.

## Common Mistakes

- comparing numbers and strings carelessly
- using variables outside the scope where they exist
- relying on automatic conversion too much

## Best Practices

- convert values clearly when needed
- keep variables in the smallest useful scope
- use `const` and `let` thoughtfully
