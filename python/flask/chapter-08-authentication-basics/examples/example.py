"""This example shows how Flask uses the session to protect a route."""

from flask import Flask, redirect, session, url_for

app = Flask(__name__)
app.secret_key = "change-me"


@app.route("/")
def home():
    return (
        "Home page. Visit /dashboard to test the protected route, "
        "/login to fake a login, and /logout to clear the session."
    )


@app.route("/login")
def login():
    # This is a fake login for learning.
    # We store a user marker in the session so Flask remembers this browser.
    session["user_id"] = 1
    return "You are now logged in. Go to /dashboard."


@app.route("/dashboard")
def dashboard():
    # The route checks the session every time the page is requested.
    if "user_id" not in session:
        return redirect(url_for("login"))

    return "Welcome to your dashboard."


@app.route("/logout")
def logout():
    # Removing the session marker logs the user out.
    session.pop("user_id", None)
    return "You are now logged out."


if __name__ == "__main__":
    # Run with: python3 example.py
    # Then test /dashboard before login, after login, and after logout.
    app.run(debug=True)
