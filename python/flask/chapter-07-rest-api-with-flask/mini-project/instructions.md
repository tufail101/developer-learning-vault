# Instructions — Tasks API

1. Create a Flask app file such as `app.py`.
2. Add a route for `GET /api/tasks`.
3. Add a route for `GET /api/tasks/<id>`.
4. Add a route for `POST /api/tasks`.
5. Return JSON from all routes.
6. Handle the case where a requested task id does not exist.

## Suggested Build Order

1. Get the list route working first.
2. Add the single-task route.
3. Add the not-found response.
4. Add the `POST` route for creating a task.
5. Try update and delete only after the first three routes are behaving clearly.
