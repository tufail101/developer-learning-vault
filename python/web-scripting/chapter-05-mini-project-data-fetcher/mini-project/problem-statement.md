# Mini Project — Public API Data Fetcher

## What To Build
Build a command-line Python script that fetches data from a public API and prints a short, readable summary in the terminal.

## What It Should Do
- fetch one todo item from `https://jsonplaceholder.typicode.com/todos/1`
- convert the response into Python data
- print the todo id, title, and completed status in a clean format
- print a friendly error message if the request fails

## What You Must Use
- `requests`
- `response.json()`
- `try/except` with a request failure path
- readable terminal output, not just a raw object dump

## Stretch Goal
Add a command-line menu that lets the user choose between two different endpoints.
