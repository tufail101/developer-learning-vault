# Chapter 3: Operators And Conditions

## Operators

Operators help JavaScript compare, combine, or calculate values.

Common ones:

- `+`, `-`, `*`, `/`
- `>`, `<`, `>=`, `<=`
- `===`, `!==`
- `&&`, `||`

## Conditions

Conditions let JavaScript choose between different paths.

## Real-World Analogy

Conditions are like traffic rules.
If the light is red, stop.
If it is green, go.

## Example

```js
const score = 75;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Try again");
}
```

## Another Example

```js
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && !isAdmin) {
  console.log("User dashboard");
}
```

## Why This Matters

Almost every UI has conditions:

- show a message
- hide a button
- display an error
- check a form value

## Best Practices

- keep conditions readable
- break complex logic into smaller parts
- prefer clear boolean names

## Common Mistakes

- using `=` instead of `===`
- writing conditions that are hard to read
- nesting too many `if` blocks too early
