# Relationships And References

## What This Chapter Is About

MongoDB documents can store references to related documents. This helps connect users, posts, comments, and other linked data.

## Real-World Analogy

A reference is like writing another file number on a card so you know which related file to open next.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example shows one document referencing another by ObjectId.
const lessonSchema = new mongoose.Schema({
  title: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
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

Next chapter: **Mini Project — Database Layer**.
That chapter builds directly on what you practiced here.
