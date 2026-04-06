# Type Narrowing And Guards

## What This Chapter Is About

This chapter teaches how TypeScript narrows broad types into safer, more specific ones when you check values carefully.
The goal is to make TypeScript feel more useful in real projects instead of just more abstract.

## Real-World Analogy

Type narrowing is like checking whether a package is marked fragile before deciding how to carry it. The label changes what you do next.

## Key Ideas

- TypeScript narrows types after checks like `typeof`, `in`, and truthy checks.
- Custom type guard functions help you reuse safe checks in more than one place.
- Narrowing matters most when a value could be more than one shape.

## Example

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

## Why This Matters

TypeScript helps most when a project has data moving between files, components, or routes.
Good type choices make those connections easier to read and harder to break by accident.
You are not trying to type everything perfectly on day one. You are learning how to make common paths safer and clearer.

## Common Mistakes

- using `as` too quickly instead of narrowing properly first
- forgetting that optional properties may still be missing after a broad check
- writing custom guards that return `true` for the wrong shape

## Practice Tip

Read the type out loud in plain English before using it.
If you cannot explain what the type means, slow down and simplify it first.

## Next Step

Next chapter: **09 Typescript With Node**.
That chapter builds directly on the type work you practice here.
