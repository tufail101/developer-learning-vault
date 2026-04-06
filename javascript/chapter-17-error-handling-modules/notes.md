# Chapter 17: Error Handling And Modules

## Big Picture

Every real application hits errors.

Files fail to load.
Users enter invalid data.
Network requests break.
Assumptions turn out to be wrong.

Good developers are not people who never hit errors.
They are people who handle errors clearly and structure code well.

Modules help with that second part.

They let us split code into smaller files
with clear responsibilities.

In this chapter, we will cover:

- `try`
- `catch`
- `finally`
- error types like `TypeError`,
  `ReferenceError`,
  and `SyntaxError`
- custom error classes
- throwing errors intentionally
- ES modules
- named exports vs default exports
- re-exporting
- CommonJS vs ES modules
- dynamic `import()`

## What Error Handling Really Means

Error handling means deciding what your program should do
when something goes wrong.

That includes:

- detecting the problem
- stopping unsafe work
- showing useful feedback
- recovering if possible
- logging enough detail to debug later

## Real-World Analogy

Error handling is like building a road system with guardrails,
warning signs,
and emergency exits.

You hope drivers never need them,
but responsible engineers plan for failure.

Modules are like dividing a large office into departments.

Instead of everyone doing everything in one room,
each department has a clear role.

That makes the whole system easier to manage.

## `try` And `catch`

Use `try` for code that may fail.

Use `catch` to handle the error.

```js
try {
  const result = JSON.parse('{"name":"Asha"}');
  console.log(result.name);
} catch (error) {
  console.error("Failed to parse JSON:", error.message);
}
```

If the code inside `try` throws an error,
JavaScript jumps to `catch`.

## `finally`

`finally` runs whether an error happened or not.

```js
try {
  console.log("Trying to save data...");
} catch (error) {
  console.error("Save failed:", error.message);
} finally {
  console.log("Cleanup runs either way.");
}
```

This is useful for cleanup work,
like hiding a loading spinner
or closing a connection.

## Common Error Types

### `TypeError`

A `TypeError` happens when a value is used in the wrong way.

```js
const user = null;
console.log(user.name);
```

You cannot read `.name` from `null`.

### `ReferenceError`

A `ReferenceError` happens when JavaScript cannot find a variable.

```js
console.log(currentLesson);
```

If `currentLesson` was never declared,
this throws.

### `SyntaxError`

A `SyntaxError` happens when the code itself is invalid.

```js
// Missing closing bracket causes a syntax error
const numbers = [1, 2, 3;
```

This usually prevents the file from running at all.

## Example 1: Simple Defensive Code

```js
function parseUserData(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON provided.");
    return null;
  }
}

console.log(parseUserData('{"name":"Asha"}'));
console.log(parseUserData("not valid json"));
```

This is a practical pattern:
handle the error,
return a safe fallback,
and keep the app from crashing.

## Throwing Errors Intentionally

Sometimes you should create an error on purpose.

That sounds strange,
but it is often the right choice.

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}
```

Throwing an error is useful when continuing would be unsafe or misleading.

## Example 2: Validation With Explicit Errors

```js
function createUser(name) {
  if (!name || name.trim() === "") {
    throw new Error("Name is required.");
  }

  return { name };
}

try {
  const user = createUser("");
  console.log(user);
} catch (error) {
  console.error(error.message);
}
```

This is better than silently creating broken data.

## Custom Error Classes

You can create your own error types
to describe specific problems more clearly.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

Now you can throw errors with meaning.

```js
function registerUser(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email format is invalid.");
  }

  return { email };
}
```

## Example 3: More Complex Error Handling

```js
class NetworkError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
  }
}

async function fetchLesson() {
  const fakeStatus = 500;

  if (fakeStatus >= 400) {
    throw new NetworkError("Server responded with an error.", fakeStatus);
  }

  return { title: "Async JavaScript" };
}

async function loadLesson() {
  try {
    const lesson = await fetchLesson();
    console.log(lesson);
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error(`Network issue (${error.status}):`, error.message);
    } else {
      console.error("Unknown error:", error.message);
    }
  }
}

loadLesson();
```

Custom errors make debugging and recovery logic cleaner.

## Best Practices For Error Handling

- fail early when required input is missing
- throw errors when the program should not continue
- show user-friendly messages in the UI
- log technical details for debugging
- avoid swallowing errors silently

## Common Mistakes

- catching errors and doing nothing
- returning misleading fallback data without explanation
- throwing generic errors for every situation
- using `try` and `catch` to hide poor logic instead of fixing it

## What A Module Is

A module is a file with its own scope
that can export code for other files to use.

Modules help organize code into smaller pieces.

That makes code easier to:

- read
- test
- reuse
- maintain

## ES Modules: Named Exports

Named exports let a file export multiple specific values.

```js
export const appName = "Study App";

export function formatPrice(price) {
  return `$${price}`;
}
```

Import them with matching names:

```js
import { appName, formatPrice } from "./utils.js";
```

## Default Exports

A default export gives the file one main exported value.

```js
export default function greet(name) {
  return `Hello, ${name}`;
}
```

Import it without curly braces:

```js
import greet from "./greet.js";
```

## Named Vs Default Exports

There is no universal winner.

Named exports are often easier to refactor
because the imported name must stay consistent.

Default exports can be convenient
when a file has one obvious main purpose.

Many teams prefer named exports for clarity.

## Re-Exporting

You can gather exports from several files into one file.

```js
export { formatPrice } from "./format.js";
export { calculateTax } from "./tax.js";
```

This creates a cleaner import surface for larger projects.

## CommonJS Vs ES Modules

CommonJS is the older module system used heavily in Node.js.

CommonJS syntax:

```js
const utils = require("./utils");
module.exports = utils;
```

ES module syntax:

```js
import { formatPrice } from "./utils.js";
export { formatPrice };
```

Main difference:

- CommonJS uses `require` and `module.exports`
- ES modules use `import` and `export`

Modern frontend work usually uses ES modules.

## Dynamic `import()`

`import()` loads a module on demand.

```js
button.addEventListener("click", async () => {
  const module = await import("./analytics.js");
  module.trackClick();
});
```

This is useful for:

- loading code only when needed
- improving startup performance
- splitting large bundles

## Why Modules Matter In Real Projects

Imagine putting all app code into one giant file.

It becomes hard to:

- find things
- avoid naming collisions
- reuse functions
- test pieces independently

Modules solve those structural problems.

## Error Handling And Modules Together

These topics work together more than they first appear to.

Why?

- modules create cleaner responsibilities
- cleaner responsibilities make error boundaries clearer
- helper modules can centralize validation and logging
- small files are easier to debug when errors happen

Good structure makes error handling easier.

## Senior Dev Best Practices

- throw intentional errors when assumptions fail
- catch errors at boundaries where recovery is possible
- create custom errors for meaningful categories
- keep module responsibilities narrow
- prefer predictable import and export patterns across the project

## How This Matters In Practice

When you are working in a team codebase, ask:

1. What failures should be expected here?
2. Which failures should reach the UI?
3. Which errors need custom types?
4. Is this file doing too many jobs?
5. Will this module structure still make sense when the codebase grows?

They design for maintainability,
not just for the code to "work once."

## Quick Recap

- `try` and `catch` handle thrown errors
- `finally` runs cleanup code either way
- `TypeError`,
  `ReferenceError`,
  and `SyntaxError` are common built-in error types
- you can throw errors intentionally
- custom error classes make intent clearer
- modules split code into reusable file-based units
- ES modules use `import` and `export`
- dynamic `import()` loads code only when needed

## Practice Ideas

- wrap JSON parsing in `try` and `catch`
- create a custom `ValidationError`
- split one utility file into two ES modules
- build an index file that re-exports helper functions
