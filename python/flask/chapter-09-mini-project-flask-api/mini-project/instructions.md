# Instructions — Personal Notes API

1. Create a Flask app file such as `app.py`.
2. Add a small starting list of note dictionaries so you have data to test with.
3. Build `GET /api/notes` first and confirm it returns a JSON array.
4. Build `GET /api/notes/<note_id>` next and return a 404 error when the note is missing.
5. Add `POST /api/notes` and read the request body with `request.get_json()`.
6. Validate the incoming data. If `title` is missing or empty, return a 400 response.
7. Add `DELETE /api/notes/<note_id>` and remove the matching note if it exists.
8. Test each route before moving on to the next one.

## Suggested Build Order

1. Start with read-only routes.
2. Add note creation.
3. Add note deletion.
4. Add error handling for missing ids and bad request bodies.
5. Add the stretch goal only after the API works cleanly.

## Manual Test Plan

1. Open `GET /api/notes` and confirm you see all notes.
2. Open `GET /api/notes/1` and confirm one note comes back.
3. Open `GET /api/notes/999` and confirm you get a 404 error.
4. Send a POST request with a valid `title` and confirm the new note is returned.
5. Send a POST request without a `title` and confirm you get a 400 error.
6. Send a DELETE request for an existing note and confirm it disappears from the list.
