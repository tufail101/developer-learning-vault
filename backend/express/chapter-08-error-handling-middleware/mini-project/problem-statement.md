# Mini Project — Safe Validation API

## What To Build
Create a small Express app that handles invalid requests with one central error handler.

## What It Should Do
- Trigger one intentional error from a route
- Catch it with error middleware
- Return a readable JSON error response instead of crashing the app

## What You Must Use
- `next(error)`
- error-handling middleware with four parameters
- a clear JSON error response

## Stretch Goal
Return different status codes for different kinds of errors.
