"""This example reads a query string value and returns a JSON response."""

from flask import Flask, request

app = Flask(__name__)


@app.route("/greet")
def greet():
    name = request.args.get("name", "friend")
    return {"message": f"Hello, {name}!"}


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then visit /greet and /greet?name=Sam in the browser.
    app.run(debug=True)
