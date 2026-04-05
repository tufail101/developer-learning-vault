# Chapter 6: HTTP Server

## What An HTTP Server Does

An HTTP server listens for requests and sends responses.

That is one of the most important jobs of a backend.

## Real-World Analogy

Imagine a reception desk:

- someone asks for something
- the desk worker checks the request
- the desk worker responds

That is the basic server idea.

## Example

```js
const http = require("http");

const server = http.createServer(function (request, response) {
  response.end("Hello from the server");
});

server.listen(3000);
```

## Why This Matters

This is the beginning of backend communication.
Browsers, apps, and tools send requests to servers and receive responses back.

## Best Practices

- start with small local servers
- choose a clear port like `3000`
- send understandable responses

## Common Mistakes

- forgetting to call `response.end()`
- trying to open the page before the server is running
- not checking the correct port
