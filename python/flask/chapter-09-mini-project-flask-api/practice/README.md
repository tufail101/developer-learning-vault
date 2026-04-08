# Practice — Mini Project Flask API

## Exercise 1
Create `GET /api/notes` and return a hard-coded list of two note objects as JSON.
Open the route in the browser and make sure you see a JSON array.

## Exercise 2
Create `GET /api/notes/<note_id>`.
If the note exists, return it as JSON.
If it does not exist, return `{"error": "Note not found"}` with a 404 status code.

## Exercise 3
Create `POST /api/notes`.
Read JSON from the request body.
If `title` is missing, return a 400 error.
If it exists, add the new note and return it with status code 201.

## Done Checklist
- [ ] `GET /api/notes` returns a JSON array, not plain text
- [ ] `GET /api/notes/999` returns a 404 response
- [ ] `POST /api/notes` rejects requests without a title
- [ ] successful note creation returns status code 201
