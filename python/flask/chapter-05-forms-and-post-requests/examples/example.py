"""This example shows the Flask side of handling a simple POST form submission."""

from flask import Flask, request

app = Flask(__name__)


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        name = request.form.get("name", "")
        return f"Thanks for signing up, {name}!"
    return "Render a signup form here"


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then test the route with a form-based GET/POST flow.
    app.run(debug=True)
