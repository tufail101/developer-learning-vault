# Mini Project — Greeting API Route

## What To Build
Build a Flask route that reads input from the request and returns a JSON response.

## What It Should Do
- read a `name` value from the query string
- return JSON with a greeting message
- use a default name when `name` is missing
- work in the browser at a URL like `/greet?name=Ali`

## What You Must Use
- `request.args`
- JSON response data
- one default value for missing input

## Stretch Goal
Accept a POST request with JSON instead of only a query string.
