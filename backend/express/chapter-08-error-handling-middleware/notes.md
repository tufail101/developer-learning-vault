# Error Handling Middleware

## What This Chapter Is About

Express error middleware gives you one place to catch and format errors. That makes debugging and user feedback easier to manage.

## Real-World Analogy

Error middleware is like a customer support desk for broken requests. Instead of letting the problem explode in random places, you guide it to one clear place.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example sends errors to one central middleware function.
const express = require("express");
const app = express();

app.get("/danger", (req, res, next) => {
  next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
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

Next chapter: **Express Router**.
That chapter builds directly on what you practiced here.
