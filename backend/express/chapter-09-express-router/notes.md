# Express Router

## What This Chapter Is About

Routers help you split routes into smaller files. This keeps larger apps easier to read and extend.

## Real-World Analogy

Express Router is like moving related service windows into separate rooms so the main building lobby does not become messy.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// routes/products.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Notebook" }]);
});

module.exports = router;
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

Next chapter: **Mini Project — REST API**.
That chapter builds directly on what you practiced here.
