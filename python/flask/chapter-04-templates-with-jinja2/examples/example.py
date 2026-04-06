"""This example shows the Flask side of rendering a Jinja2 template."""

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html", page_title="Welcome", items=["HTML", "CSS", "Python"])


if __name__ == "__main__":
    # Run with: python3 example.py
    # Make sure you also have a templates/index.html file for this route to render.
    app.run(debug=True)
