# Chapter 3: Node Modules

## What A Module Is

A module is a file that contains code you want to organize and reuse.

Node.js lets you split code into smaller files instead of keeping everything in one long file.

## Real-World Analogy

Modules are like storing tools in different drawers:

- one drawer for math tools
- one drawer for file tools
- one drawer for server tools

## Example

`math.js`

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

`app.js`

```js
const add = require("./math");
console.log(add(2, 3));
```

## Why This Matters

Real backend apps grow quickly.
Modules help keep code:

- readable
- reusable
- easier to debug

## Best Practices

- give modules clear names
- keep one file focused on one main job
- export only what is needed

## Common Mistakes

- putting unrelated logic into one file
- using the wrong file path with `require`
- exporting too much at once
