"""This example shows a very small JSON API in Flask."""

from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/tasks")
def get_tasks():
    tasks = [
        {"id": 1, "title": "Read Flask docs"},
        {"id": 2, "title": "Build one route"},
    ]
    return jsonify(tasks)
