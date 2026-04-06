"""This example shows the shape of a protected route in Flask."""

from flask import Flask, session, redirect

app = Flask(__name__)
app.secret_key = "change-me"


@app.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        return redirect("/login")
    return "Welcome to your dashboard"
