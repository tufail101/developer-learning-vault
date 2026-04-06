"""This example shows the Python side of rendering a Jinja template."""

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html", page_title="Welcome", items=["HTML", "CSS", "Python"])
