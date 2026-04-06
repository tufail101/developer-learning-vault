# Practice — Rest Api With Flask

## Exercise 1
Create one API route that returns a list of tasks as JSON at `/api/tasks`.

## Exercise 2
Add a route like `/api/tasks/1` that returns one task by id.
If the task is not found, return a simple not-found message.

## Exercise 3
Add a `POST` route that accepts JSON and returns the created item.
For now, it is fine if the data only lives in memory while the app is running.

## Done Checklist
- [ ] My `/api/tasks` route returns JSON, not plain text HTML
- [ ] My single-task route behaves differently for found vs missing ids
- [ ] My `POST` route reads JSON input and returns the created task
- [ ] I can explain the difference between a page route and an API route
