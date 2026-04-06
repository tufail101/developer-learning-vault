# Creating A Server

## What This Chapter Is About

An Express server listens for requests and sends responses. You choose the port, the routes, and what each route returns.

## Real-World Analogy

A server is like a shop that waits for people to walk in. When someone arrives, the server decides what to hand back.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example shows a server with a custom port and startup log.
const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
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

Next chapter: **Routing With Get Post Put Delete**.
That chapter builds directly on what you practiced here.
