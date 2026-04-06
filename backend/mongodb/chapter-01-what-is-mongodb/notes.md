# What Is MongoDB

## What This Chapter Is About

MongoDB is a document database. It stores data in flexible JSON-like documents called BSON documents.

## Real-World Analogy

MongoDB is like storing information in labeled JSON-like folders instead of rigid spreadsheet rows.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example shows the shape of a MongoDB-style document.
const userDocument = {
  name: "Asha",
  email: "asha@example.com",
  skills: ["html", "css", "javascript"],
};

console.log(userDocument);
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

Next chapter: **Documents And Collections**.
That chapter builds directly on what you practiced here.
