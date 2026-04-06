# Utility Types

## What This Chapter Is About

This chapter teaches how built-in TypeScript utility types help you reshape existing types without rewriting everything by hand.
The goal is to make TypeScript feel more useful in real projects instead of just more abstract.

## Real-World Analogy

Utility types are like using pre-made labels instead of rewriting the same label set every time a box changes shape.

## Key Ideas

- `Partial`, `Required`, and `Readonly` help you adjust object rules quickly.
- `Pick` and `Omit` let you create smaller or cleaner views of an existing type.
- Utility types help reduce repeated type code when data shapes change across a project.

## Example

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, "id" | "name">;

type UserDraft = Partial<User>;
```

## Why This Matters

TypeScript helps most when a project has data moving between files, components, or routes.
Good type choices make those connections easier to read and harder to break by accident.
You are not trying to type everything perfectly on day one. You are learning how to make common paths safer and clearer.

## Common Mistakes

- rewriting a new type from scratch when `Pick` or `Omit` would be simpler
- using `Partial` without thinking about which fields may now be missing
- treating utility types like magic instead of reading the final shape they produce

## Practice Tip

Read the type out loud in plain English before using it.
If you cannot explain what the type means, slow down and simplify it first.

## Next Step

Next chapter: **08 Type Narrowing And Guards**.
That chapter builds directly on the type work you practice here.
