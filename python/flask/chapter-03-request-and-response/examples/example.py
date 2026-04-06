"""This example reads query string data from a Flask request."""

from flask import Flask, request

app = Flask(__name__)


@app.route("/greet")
def greet():
    name = request.args.get("name", "friend")
    return {"message": f"Hello, {name}!"}
