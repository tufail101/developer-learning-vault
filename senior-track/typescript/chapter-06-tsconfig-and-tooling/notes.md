# Chapter 06: tsconfig And Tooling

The `tsconfig.json` file controls how the TypeScript compiler behaves.

## Why It Matters

- it defines project rules
- it controls build behavior
- it helps teams stay consistent

## Common Options

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "jsx": "react-jsx"
  }
}
```

## Strict Mode

`strict` enables a collection of safer compiler checks. Most professional projects should keep it on.

## Tooling

TypeScript works especially well with:

- ESLint
- Prettier
- modern bundlers
- editor autocomplete

## When This Matters In Practice

Compiler options are team agreements. Someone working in a team codebase uses them to reduce ambiguity and create a more reliable development environment.


## Next Step

Next chapter: **Utility Types**.
That chapter helps you reshape types without rewriting the same structures over and over.
