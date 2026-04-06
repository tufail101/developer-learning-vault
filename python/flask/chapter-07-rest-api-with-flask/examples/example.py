"""This example shows a small Flask route that returns JSON instead of HTML."""

from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/tasks")
def get_tasks():
    tasks = [
        {"id": 1, "title": "Read Flask docs"},
        {"id": 2, "title": "Build one route"},
    ]
    return jsonify(tasks)


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then open /api/tasks in the browser.
    app.run(debug=True)
