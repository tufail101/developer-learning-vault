# Expected Features — Notes Django API

- the project has a `Note` model with clearly named fields
- migrations were created and applied for the model
- the project has a serializer for note data
- `GET /api/notes/` returns a JSON list
- `GET /api/notes/<id>/` returns one note or a 404 error
- `POST /api/notes/` creates a note or returns a validation error
- the route names are consistent and easy to read
- the model, serializer, views, and routes all use the same field names
