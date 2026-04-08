# Mini Project Flask API

This chapter is where the Flask pieces stop living in separate boxes.
Routes, request data, JSON responses, storage, and simple protection all need to work together now.

If the earlier chapters felt like learning kitchen tools one by one, this is the first time you cook a full meal.
Not a huge meal.
Just something small that actually feeds someone.

## What You Are Building

Build a small notes API.
It should let you:

- list notes
- create a note
- read one note by id
- delete a note

You can build the first version with an in-memory list.
If you want a stronger version, connect it to SQLite after the routes work.

## A Good Route Plan

Before writing code, decide the shape of the API.

```text
GET    /api/notes
GET    /api/notes/<note_id>
POST   /api/notes
DELETE /api/notes/<note_id>
```

That route list already answers a lot of questions.
It tells you what data can come in.
It tells you what data should come out.
It also keeps you from guessing halfway through the project.

## A Small Example Shape

```py
from flask import Flask, jsonify, request

app = Flask(__name__)

notes = [
    {"id": 1, "title": "Buy milk"},
    {"id": 2, "title": "Read Flask docs"},
]


@app.route("/api/notes", methods=["GET"])
def get_notes():
    return jsonify(notes)


@app.route("/api/notes", methods=["POST"])
def create_note():
    data = request.get_json()

    new_note = {
        "id": len(notes) + 1,
        "title": data["title"],
    }
    notes.append(new_note)

    return jsonify(new_note), 201
```

This is not the full project.
It is just enough to show the two most important jobs:

- returning JSON
- accepting JSON

From there, you can add single-note lookup and delete.

## Build It In Layers

Do not try to finish the whole API in one burst.
That is where confusion starts.

Build it in this order:

1. make `GET /api/notes` return a hard-coded list
2. make `POST /api/notes` accept JSON and append a new note
3. make `GET /api/notes/<note_id>` return one note or a 404
4. make `DELETE /api/notes/<note_id>` remove a note or return a 404
5. only after that, add extras like sessions or SQLite

That order keeps the project small enough to debug.

## Decide Your Note Shape Early

Pick a simple note format and stick to it.

```py
{
    "id": 1,
    "title": "Buy milk",
    "body": "Remember to get bread too"
}
```

If you change the data shape every ten minutes, your routes get messy fast.
Half the bugs in small APIs come from this kind of inconsistency.

## What To Return On Errors

Good beginner APIs still need clear error responses.

If a note does not exist, do not return a success message with empty data.
Return a proper 404 response.

```py
return jsonify({"error": "Note not found"}), 404
```

If the client sends bad JSON or forgets the title, do not pretend everything is fine.
Return a 400 response.

```py
return jsonify({"error": "Title is required"}), 400
```

That honesty makes your API much easier to test.

## Mistakes That Usually Happen Here

### Writing Routes Before Deciding The Data

If you do not know what one note looks like, your `POST`, `GET`, and `DELETE` routes will all drift in different directions.
Choose the note fields first.

### Forgetting `methods=["POST"]`

Many learners write the route body correctly but forget to tell Flask that this route accepts POST requests.
Then the request hits the server and Flask says the method is not allowed.

### Using `request.form` For JSON Requests

If you are sending JSON to an API route, use `request.get_json()`.
`request.form` is for form submissions, which is a different flow.

### Not Testing Missing Data

It is easy to test only the happy path.
But try these on purpose:

- sending an empty JSON body
- requesting a note id that does not exist
- deleting the same note twice

Those cases show whether your API is actually usable.

### Mixing Page Routes And API Routes Randomly

Keep your API routes grouped under something like `/api/notes`.
That small naming habit keeps the app easier to read.

## How To Run The Example

Run the example like this:

```bash
python3 example.py
```

Then test these routes with your browser, Postman, or `curl`:

- `GET http://127.0.0.1:5000/api/notes`
- `GET http://127.0.0.1:5000/api/notes/1`
- `POST http://127.0.0.1:5000/api/notes`

If you use `curl` for the POST request, it can look like this:

```bash
curl -X POST http://127.0.0.1:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Flask","body":"Build one route at a time"}'
```

## If You Want To Push It One Step Further

After the route flow works, pick one upgrade:

- save notes in SQLite instead of memory
- require a login session before creating or deleting notes
- add an `updated_at` field

Do only one extra thing.
That keeps the project in learning territory instead of turning it into a mess.

## What Comes After This

This is the last Flask chapter in this track.
After you finish it, step back and rebuild the notes API from memory.
That is where the real learning shows up.
