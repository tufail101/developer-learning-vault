# Instructions — Notes Database Setup

1. Create a Flask app file such as `app.py`.
2. Open or create a SQLite database file.
3. Create a `notes` table if it does not already exist.
4. Add one way to insert note data.
5. Add one route that reads notes back from the database.
6. Confirm the saved notes still exist after restarting the app.

## Suggested Build Order

1. Get the database file and table creation working first.
2. Insert one hard-coded note.
3. Read the notes back with a `SELECT` query.
4. Connect the read step to a Flask route.
5. Add the delete stretch goal only after create and read work cleanly.
