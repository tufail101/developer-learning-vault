# Creating And Reading Documents

## What This Chapter Is About

After you have a model, you can create documents and read them back with Mongoose methods.

## Real-World Analogy

Creating a document is like filling out a new card in a library system. Reading documents is like searching the drawer to see what is already there.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// This example creates one document and then reads all documents.
const newCourse = await Course.create({
  title: "Express Basics",
  level: "beginner",
  published: true,
});

const courses = await Course.find();
console.log(courses);
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

Next chapter: **Updating And Deleting Documents**.
That chapter builds directly on what you practiced here.
