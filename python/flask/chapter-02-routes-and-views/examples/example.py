"""This example shows two simple Flask routes."""

from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Home page"


@app.route("/contact")
def contact():
    return "Contact page"
