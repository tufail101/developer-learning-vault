# Schemas And Models

## What This Chapter Is About

Schemas describe the structure of your documents. Models give your application methods for creating and querying those documents.

## Real-World Analogy

A schema is like the blank form for a record. A model is the tool your code uses to create and read records that follow that form.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example defines a simple schema and model.
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  level: String,
  published: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
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

Next chapter: **Creating And Reading Documents**.
That chapter builds directly on what you practiced here.
