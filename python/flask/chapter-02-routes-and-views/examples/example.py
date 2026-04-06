"""This example shows how different Flask routes return different responses."""

from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Home page"


@app.route("/contact")
def contact():
    return "Contact page"


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then visit / and /contact in the browser.
    app.run(debug=True)
