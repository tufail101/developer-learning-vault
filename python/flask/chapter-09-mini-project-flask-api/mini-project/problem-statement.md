# Mini Project — Personal Notes API

## What To Build
Build a small Flask API for personal notes.
It should let a client list notes, read one note, create a note, and delete a note.

## What It Should Do
- `GET /api/notes` should return all notes as JSON
- `GET /api/notes/<note_id>` should return one note or a 404 error if it does not exist
- `POST /api/notes` should accept JSON and create a new note
- `DELETE /api/notes/<note_id>` should remove a note or return a 404 error
- invalid note creation requests should return a 400 error with a useful message

## What You Must Use
- Flask routes with the correct HTTP methods
- `request.get_json()` for incoming JSON
- `jsonify()` for responses
- at least one clear 400 response and one clear 404 response

## Stretch Goal
Require a login session before `POST` and `DELETE` requests are allowed.
