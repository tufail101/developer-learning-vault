# Routing With Get Post Put Delete

## What This Chapter Is About

Express routes map a method and path to a handler. `GET`, `POST`, `PUT`, and `DELETE` are the core verbs you will use in APIs.

## Real-World Analogy

Routes are like different service windows at the same building. One window gives information. Another creates records. Another updates them. Another removes them.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example shows four REST-style routes for the same resource.
const express = require("express");
const app = express();

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.send("Get all tasks");
});

app.post("/tasks", (req, res) => {
  res.send("Create a new task");
});

app.put("/tasks/1", (req, res) => {
  res.send("Update task 1");
});

app.delete("/tasks/1", (req, res) => {
  res.send("Delete task 1");
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

Next chapter: **Route Parameters And Query Strings**.
That chapter builds directly on what you practiced here.
