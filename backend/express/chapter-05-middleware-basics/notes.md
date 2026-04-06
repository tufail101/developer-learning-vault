# Middleware Basics

## What This Chapter Is About

Middleware runs during the request-response cycle. It can log requests, parse data, check permissions, or handle errors.

## Real-World Analogy

Middleware is like a checkpoint between the door and the service desk. It can inspect the request, add information, or stop bad requests before they go further.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example logs the method and path before the route runs.
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Middleware ran first");
});
```

## Why This Matters

When you build backend features for real users, small patterns like routes, models, filters, and middleware stack up quickly.
Learning them one at a time makes later full-stack work much less confusing.

## Common Mistakes

- copying code without testing each step
- mixing too many new ideas into one file
- forgetting to read the request and response flow slowly
- assuming the server or database is working before checking the actual output

## Practice Tip

Run the example, change one small piece, and test again.
That gives you much better feedback than reading the code once and moving on.

## Next Step

Next chapter: **Serving JSON Responses**.
That chapter builds directly on what you practiced here.
