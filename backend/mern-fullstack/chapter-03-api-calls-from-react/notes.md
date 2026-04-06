# API Calls From React

## What This Chapter Is About

React components often fetch data inside effects and update state when the data arrives.

## Real-World Analogy

An API call from React is like sending an order slip from the counter to the kitchen and then updating the counter display when the food is ready.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// React example with state and effect.
useEffect(() => {
  fetch("/api/tasks")
    .then((response) => response.json())
    .then((data) => setTasks(data));
}, []);
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

Next chapter: **CORS And Environment Variables**.
That chapter builds directly on what you practiced here.
