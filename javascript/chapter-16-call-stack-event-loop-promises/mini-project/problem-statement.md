# Mini Project — Async Task Runner

## What To Build
Create a small webpage that fetches data from a public API and shows it on screen.

## What It Should Do
- On page load, fetch a list of 5 posts from `https://jsonplaceholder.typicode.com/posts?_limit=5`
- While the fetch is in progress, show a `Loading...` message
- When the fetch succeeds, replace the loading message with a list showing each post title
- If the fetch fails, show a clear error message to the user

## What You Must Use
- `fetch()` with `async/await`
- `try/catch` for error handling
- DOM manipulation to update the page

## Stretch Goal
Add a `Reload` button that fetches the list again when clicked.
