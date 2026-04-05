# Chapter 7: Routing Basics

## What Routing Means

Routing means sending different responses for different URLs.

For example:

- `/` could show home
- `/about` could show about page
- `/api/users` could return JSON

## Real-World Analogy

If a receptionist sends visitors to different rooms depending on what they ask for, that is like routing.

## Example

```js
const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.end("Home page");
  } else if (request.url === "/about") {
    response.end("About page");
  } else {
    response.end("Not found");
  }
});
```

## Why This Matters

Most backend apps need more than one response path.
Routing is the start of building real applications and APIs.

## Best Practices

- keep early routing logic simple
- return clear responses
- handle unknown routes

## Common Mistakes

- forgetting to handle a fallback route
- mixing route logic and unrelated code too early
- not checking `request.url` carefully
