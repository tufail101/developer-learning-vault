# Chapter 04: Functions And Generics

TypeScript shines when function inputs and outputs are explicit.

## Typed Functions

```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

## Generic Functions

Generics let one function work with many data types while still preserving type safety.

```ts
function wrapValue<T>(value: T): T[] {
  return [value];
}
```

## Why Generics Matter

- reusable helpers stay typed
- data transformations remain safer
- you avoid throwing away type information

## Senior Dev Thinking

Generics should clarify a relationship between types. If the generic does not communicate anything useful, it may just add noise.
