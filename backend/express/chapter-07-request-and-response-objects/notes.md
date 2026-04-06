# Request And Response Objects

## What This Chapter Is About

The `req` object gives you details about the incoming request. The `res` object lets you decide what to send back.

## Real-World Analogy

The request object is the envelope that arrives at the server. The response object is what you send back after reading it.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example reads request details and returns a custom response.
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  const name = req.query.name || "guest";
  res.status(200).json({
    message: `Hello, ${name}`,
    method: req.method,
  });
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

Next chapter: **Error Handling Middleware**.
That chapter builds directly on what you practiced here.
