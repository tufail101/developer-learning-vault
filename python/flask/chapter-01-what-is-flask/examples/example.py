"""This example shows the smallest working Flask app and how to start it."""

from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello from Flask"


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then open http://127.0.0.1:5000 in your browser.
    app.run(debug=True)
