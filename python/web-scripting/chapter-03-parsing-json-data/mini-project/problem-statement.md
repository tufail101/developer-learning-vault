# Mini Project — Todo JSON Reader

## What To Build
Build a Python script that fetches one todo item from JSONPlaceholder and prints a short summary from the JSON data.

## What It Should Do
- send a request to `https://jsonplaceholder.typicode.com/todos/1`
- turn the response into Python data with `response.json()`
- extract at least these fields: `id`, `title`, and `completed`
- print one readable summary sentence like:
  `Todo 1: delectus aut autem — completed: False`

## What You Must Use
- `requests.get()`
- `response.json()`
- dictionary key access

## Stretch Goal
Fetch `https://jsonplaceholder.typicode.com/todos?_limit=5` and print the titles of the first five todos.
