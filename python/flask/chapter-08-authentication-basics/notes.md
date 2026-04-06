# Authentication Basics

Authentication answers one question: should this request be treated as coming from a signed-in user?

That check happens on the server.
Not in the navbar.
Not by hiding a button.
Not by hoping the user never types a protected URL by hand.

If your app has a `/dashboard` page, the server has to decide whether that route should work.

## Real-World Analogy

Think about a hostel room with a key card.
The room door is visible to everyone in the hallway.
That does not mean everyone can open it.

The lock checks the card.
If the card matches, the door opens.
If it does not, nothing happens.

Authentication works the same way.
The route exists, but the server checks whether this user should get in.

## What Flask Usually Uses For A Simple Login Flow

In a beginner Flask app, the simplest way to remember a signed-in user is the `session`.

After a login succeeds, you put a small marker into the session:

```py
session["user_id"] = 1
```

That does not mean the whole user record lives in the session.
It just means Flask has enough information to remember, "this browser belongs to someone who signed in."

Later, on a protected route, you check for that marker:

```py
if "user_id" not in session:
    return redirect("/login")
```

That is the core idea for this chapter.

## A Small Working Example

```py
from flask import Flask, redirect, session

app = Flask(__name__)
app.secret_key = "change-me"


@app.route("/login")
def login():
    # This is a fake login for learning.
    # It simply stores a user marker in the session.
    session["user_id"] = 1
    return "You are now logged in."


@app.route("/dashboard")
def dashboard():
    # The server checks the session before showing the page.
    if "user_id" not in session:
        return redirect("/login")

    return "Welcome to your dashboard."
```

If you visit `/dashboard` first, Flask redirects you to `/login`.
Then `/login` stores `user_id` in the session.
After that, the dashboard route can allow access.

This is not a secure full login system yet.
It is the smallest version of the flow so you can see how protection works.

## What `secret_key` Is Doing

Flask sessions need `app.secret_key`.
Without it, Flask cannot safely sign the session data.

If you forget it, session-based code will break in confusing ways.
So if your login marker is not sticking between requests, this is one of the first things to check.

## Authentication Is Not The Same As Hiding UI

This is one of the most important ideas in the whole chapter.

Imagine you remove the "Dashboard" link from the page when the user is logged out.
That is fine for the interface.
It is not security.

Someone can still type `/dashboard` directly into the browser.
If your route does not check the session, they still get in.

So there are two separate jobs:

- the interface decides what to show
- the server decides what is allowed

The second one is the real protection.

## Keep This Chapter Simple

Authentication gets deep very quickly.
Passwords.
Hashing.
Registration.
Logout.
Remember me cookies.
Role-based access.

You do not need all of that at once.

For now, learn this clean flow:

1. a user signs in
2. the app stores something in the session
3. protected routes check the session
4. logged-out users get redirected or blocked

That flow shows up again and again in web apps.

## Mistakes That Show Up In This Chapter

### Forgetting `app.secret_key`

You write session code, but nothing seems to stick.
The route keeps acting like the user is logged out.
Very often, the missing piece is the secret key.

### Protecting Only One Route

You guard `/dashboard` but forget `/settings` or `/profile`.
Now part of the app is private and part is accidentally open.

When you add private pages, check every route that should be blocked.

### Putting Too Much In The Session

Do not store huge chunks of user data in the session just because it works in a small demo.
For this stage, a simple marker like `user_id` is enough.

### Storing Plain Text Passwords

Even for a learning app, it is worth saying clearly: plain text passwords are not okay.
This chapter is about the route check.
Real password storage needs hashing, which is a separate topic.

### Testing Only The Happy Path

Many learners log in once, see the dashboard load, and stop there.
But the real test is this:

- what happens before login?
- what happens after logout?
- what happens if you type the protected URL directly?

Those checks tell you whether the route is actually protected.

## How To Run The Example

Run the file like this:

```bash
python3 example.py
```

Then open:

- `http://127.0.0.1:5000/dashboard`
- `http://127.0.0.1:5000/login`
- `http://127.0.0.1:5000/logout`

Try them in different orders.
That makes the session flow much easier to understand.

## What To Build After Reading This

Make a tiny app with three routes:

- `/login`
- `/dashboard`
- `/logout`

`/login` should set `session["user_id"]`.
`/dashboard` should only work when that value exists.
`/logout` should remove it.

If those three routes behave differently at the right times, you understand the core of basic auth.

## What Comes Next

The next chapter is **Mini Project Flask API**.
That chapter pulls the Flask module together into one small app so you can stop thinking in isolated pieces and see how the parts connect.
