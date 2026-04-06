# Chapter 01: Why TypeScript

TypeScript adds a type system on top of JavaScript.

## Why Developers Use It

- catches certain bugs before runtime
- improves editor autocomplete and refactoring
- makes function contracts clearer
- helps large teams share code safely

## Type Safety

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Passing a string by mistake becomes easier to catch before shipping.

## Catching Bugs Early

TypeScript is especially helpful when:

- functions accept many shapes
- data comes from APIs
- teams grow
- code lives for a long time

## Tooling Benefits

Editors can offer better suggestions because the code is more explicit.

## Senior Dev Thinking

TypeScript is not about pleasing the compiler. It is about making code easier for humans to reason about while reducing avoidable bugs.
