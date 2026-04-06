# Mini Project — Greeting API

## What To Build
Create a greeting API that responds differently based on values inside the request object.

## What It Should Do
- Read one query value from the request
- Return a JSON greeting based on that value
- Send a clear status code with the response

## What You Must Use
- `req.method`
- `req.path` or `req.query`
- `res.status()` with `res.json()`

## Stretch Goal
Return a `400` status when the required query is missing.
