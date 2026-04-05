# Chapter 5: Path Module

## What `path` Does

The `path` module helps build and understand file paths safely.

## Real-World Analogy

If files are houses, the `path` module helps you write the address correctly.

## Example

```js
const path = require("path");

const filePath = path.join(__dirname, "data", "user.json");
console.log(filePath);
```

## Why This Matters

Hardcoding paths carelessly can break your app.
The `path` module helps keep file locations more reliable.

## Best Practices

- prefer `path.join()` over manually typing slashes everywhere
- use `__dirname` when learning local file paths
- keep folder structure predictable

## Common Mistakes

- typing paths manually in a fragile way
- forgetting which folder the script is running from
- mixing relative and absolute paths carelessly
