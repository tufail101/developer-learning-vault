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

## Senior Dev Thinking

Compiler options are team agreements. A senior developer uses them to reduce ambiguity and create a more reliable development environment.
