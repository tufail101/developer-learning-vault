# Updating And Deleting Documents

## What This Chapter Is About

Mongoose provides methods for changing documents and removing them when needed.

## Real-World Analogy

Updating is like editing an existing card. Deleting is like removing the card from the drawer when it is no longer needed.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example updates one document and deletes another.
await Course.findByIdAndUpdate(courseId, { published: false });
await Course.findByIdAndDelete(oldCourseId);
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

Next chapter: **Querying With Filters**.
That chapter builds directly on what you practiced here.
