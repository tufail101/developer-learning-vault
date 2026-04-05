# Chapter 17: Error Handling And Modules

## Error Handling

Errors happen. Good JavaScript handles them gracefully.

```js
try {
  const data = JSON.parse("{ bad json }");
  console.log(data);
} catch (error) {
  console.log("Something went wrong:", error.message);
}
```

## Modules

Modules let you split code into separate files.

```js
export function add(a, b) {
  return a + b;
}
```

```js
import { add } from "./math.js";
console.log(add(2, 3));
```

## Real-World Analogy

Error handling is like having a backup plan.
Modules are like organizing tools into labeled drawers.

## Why This Matters

Bigger frontend projects need structure.
Error handling keeps apps safer and modules keep code easier to maintain.

## Best Practices

- handle errors where users may be affected
- keep module files focused
- name exports clearly

## Common Mistakes

- ignoring possible errors
- putting unrelated code into one module
- forgetting file paths in imports
