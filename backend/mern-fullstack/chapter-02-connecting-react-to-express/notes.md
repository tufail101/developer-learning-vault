# Connecting React To Express

## What This Chapter Is About

A React app can call an Express API by sending HTTP requests to backend routes and using the returned JSON.

## Real-World Analogy

Connecting React to Express is like setting up a front desk phone line to the office in back. The frontend asks for data. The backend answers.

## Key Ideas

- understand what this chapter adds to the backend flow
- practice one focused concept before combining it with the next chapter
- keep the example small enough that you can test it without guessing

## Example

```js
// React example
fetch("http://localhost:5000/api/hello")
  .then((response) => response.json())
  .then((data) => console.log(data));
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

Next chapter: **API Calls From React**.
That chapter builds directly on what you practiced here.
