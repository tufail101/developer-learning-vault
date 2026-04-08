# Expected Features — Personal Notes API

- `GET /api/notes` returns a JSON array of notes
- `GET /api/notes/<note_id>` returns one note when the id exists
- missing note ids return a 404 response with a JSON error message
- `POST /api/notes` creates a new note from JSON data
- invalid note creation requests return a 400 response
- `DELETE /api/notes/<note_id>` removes a note and returns a confirmation message
- route names and HTTP methods are used consistently
- the code is small enough that you can test each route one by one
