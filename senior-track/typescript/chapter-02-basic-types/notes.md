# Chapter 02: Basic Types

TypeScript starts with familiar primitives and then adds stricter rules around them.

## Common Types

```ts
let siteName: string = "Dev Vault";
let lessonCount: number = 18;
let isPublished: boolean = true;
```

## Arrays And Tuples

```ts
const tags: string[] = ["react", "typescript"];
const rgb: [number, number, number] = [255, 120, 60];
```

## Enums

Enums can represent a small set of named values, though many teams now prefer unions for simplicity.

## `any` Vs `unknown`

- `any` turns off type safety
- `unknown` forces you to narrow the value before using it

## Senior Dev Thinking

Choose the narrowest accurate type you can. Loose types spread confusion through a codebase.
