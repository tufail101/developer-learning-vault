# Mini Project — Simple API Fetcher

## What To Build
Build a Python script that fetches one item from a public API and prints a clean summary in the terminal.

## What It Should Do
- send a `GET` request to `https://jsonplaceholder.typicode.com/todos/1`
- print the status code first
- print the raw response body after that
- show a friendly error message if the request fails

## What You Must Use
- `requests.get()`
- `timeout=5`
- `try/except` with `requests.RequestException`

## Stretch Goal
Ask the user for a todo ID like `2` or `5`, build the URL from that input, and fetch a different item.
