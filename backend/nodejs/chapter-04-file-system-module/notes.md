# Chapter 4: File System Module

## What `fs` Does

The `fs` module lets Node.js read and write files.

This is one of the clearest examples of backend work because the browser usually cannot do this directly on your machine.

## Real-World Analogy

If your backend app were an office worker, the file system module would be the filing cabinet.

## Example

```js
const fs = require("fs");

const content = fs.readFileSync("message.txt", "utf-8");
console.log(content);
```

## Why This Matters

Backends often need to:

- read templates
- load data
- store logs
- work with configuration files

## Best Practices

- start with small safe examples
- read file paths carefully
- use clear file names

## Common Mistakes

- using the wrong path
- forgetting text encoding like `"utf-8"`
- assuming a file always exists
