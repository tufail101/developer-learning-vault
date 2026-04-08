"""This example shows a tiny Flask notes API with list, read, create, and delete routes."""

from flask import Flask, jsonify, request

app = Flask(__name__)

notes = [
    {"id": 1, "title": "Buy milk", "body": "And do not forget bread."},
    {"id": 2, "title": "Study Flask", "body": "Review routes and JSON responses."},
]


@app.route("/api/notes", methods=["GET"])
def get_notes():
    return jsonify(notes)


@app.route("/api/notes/<int:note_id>", methods=["GET"])
def get_note(note_id):
    for note in notes:
        if note["id"] == note_id:
            return jsonify(note)

    return jsonify({"error": "Note not found"}), 404


@app.route("/api/notes", methods=["POST"])
def create_note():
    data = request.get_json() or {}
    title = data.get("title", "").strip()
    body = data.get("body", "").strip()

    if not title:
        return jsonify({"error": "Title is required"}), 400

    new_note = {
        "id": len(notes) + 1,
        "title": title,
        "body": body,
    }
    notes.append(new_note)

    return jsonify(new_note), 201


@app.route("/api/notes/<int:note_id>", methods=["DELETE"])
def delete_note(note_id):
    for index, note in enumerate(notes):
        if note["id"] == note_id:
            deleted_note = notes.pop(index)
            return jsonify(
                {
                    "message": "Note deleted",
                    "deleted_note": deleted_note,
                }
            )

    return jsonify({"error": "Note not found"}), 404


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then test GET, POST, and DELETE requests on /api/notes.
    app.run(debug=True)
