# Mini Project — Notes Django API

## What To Build
Build a small Django API for notes.
This should be a real mini-project with a model, a serializer, API views, and routes.

## What It Should Do
- store notes in the database with a Django model
- return all notes from `GET /api/notes/`
- return one note from `GET /api/notes/<id>/`
- create a new note from `POST /api/notes/`
- return clear JSON error messages when a note does not exist or when input is invalid

## What You Must Use
- one Django model
- one DRF serializer
- API views
- URL routes
- migrations for the note model

## Stretch Goal
Add `DELETE /api/notes/<id>/` so a note can be removed through the API.
