# Instructions — Notes Django API

1. Create a Django app for notes if you do not already have one.
2. Add a `Note` model with fields like `title` and `body`.
3. Run `python3 manage.py makemigrations` and `python3 manage.py migrate`.
4. Create a serializer for the `Note` model.
5. Build a list view for `GET /api/notes/`.
6. Build a detail view for `GET /api/notes/<id>/`.
7. Add a create view for `POST /api/notes/`.
8. Connect each view to the correct URL route.
9. Test every route before adding the stretch goal.

## Suggested Build Order

1. model
2. migrations
3. serializer
4. list route
5. detail route
6. create route

## What To Check Before You Stop

1. Does `GET /api/notes/` return a JSON list?
2. Does `GET /api/notes/<id>/` return one note or a clear 404 error?
3. Does `POST /api/notes/` create a note with valid data?
4. Does invalid input return a useful error message?
