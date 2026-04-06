# Mini Project — REST API

## What This Chapter Is About

This chapter brings the Express basics together into one simple REST API with multiple routes and structured JSON responses.

## Real-World Analogy

A small REST API is like a neat control room. Each route does one job, the responses are consistent, and the structure is easy to follow.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example shows the shape of a small REST API.
const express = require("express");
const app = express();

app.use(express.json());

let books = [{ id: 1, title: "Clean Code Basics" }];

app.get("/books", (req, res) => res.json(books));
app.get("/books/:id", (req, res) => res.json(books.find(book => book.id === Number(req.params.id))));
app.post("/books", (req, res) => res.status(201).json(req.body));
app.delete("/books/:id", (req, res) => res.json({ message: "Deleted" }));
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

After this chapter, you have the pieces needed for a small full-stack app.
Go back through the earlier chapters if one part of the flow still feels shaky.
