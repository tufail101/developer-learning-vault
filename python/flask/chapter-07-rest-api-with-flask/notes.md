# Rest Api With Flask

A Flask API route returns data another program can use directly. Instead of sending back a page to be read by a person, it sends back structured JSON that a frontend, mobile app, or another service can work with.

That is the main shift here.
Flask is no longer only serving pages.
Now it is also acting like a data source.

## Real-World Analogy

Think about ordering from a printed menu versus requesting a list from the kitchen system.
The printed menu is for people to read.
The kitchen system is for another system to consume and act on.

A normal Flask page is more like the menu.
A JSON API is more like the machine-readable list.

## What An API Route Looks Like

```py
@app.route("/api/tasks")
def tasks():
    return [{"id": 1, "title": "Read docs"}]
```

That route does not return HTML.
It returns structured data.

In Flask, returning a dictionary or using `jsonify(...)` is a common way to send JSON back.

## A Small JSON API Example

```py
from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/tasks")
def get_tasks():
    tasks = [
        {"id": 1, "title": "Read Flask docs"},
        {"id": 2, "title": "Build one route"},
    ]
    return jsonify(tasks)
```

If you open `/api/tasks` in the browser, you will not see a styled page.
You will see raw JSON.
That is expected.

## Why The `/api/...` Pattern Helps

This naming pattern is simple, but useful:

- `/about` might be a normal page
- `/api/tasks` is clearly an API route

That separation helps people understand what kind of response to expect.

It also helps you keep page routes and data routes from getting mixed together later.

## Common API Actions

Even in a small app, API routes often grow into patterns like these:

- `GET /api/tasks` for a list
- `GET /api/tasks/1` for one item
- `POST /api/tasks` to create a new item

You do not need every method at once.
But it helps to see the direction early.

## The Mistakes People Make Here

- mixing page routes like `/about` with API routes and returning totally different shapes without clear naming
- returning a list in one route and a totally different object shape in another similar route for no reason
- forgetting that an API response should still be clear even if no browser page is involved
- skipping not-found cases and acting like every requested item always exists
- testing only in the browser and never checking what the JSON actually looks like

## How To Run It

Run the example like this:

```bash
python3 example.py
```

Then open:

```text
http://127.0.0.1:5000/api/tasks
```

You should see JSON, not a styled page.

## What To Try Right Now

Add one more task to the list.
Refresh the API route and make sure the new item appears.

Then create a second route like `/api/tasks/1` that returns just one task.
That small step makes the “list route vs single-item route” idea much clearer.

## What Comes After This

The next chapter is **Authentication Basics**.
That is where you start deciding which routes should stay public and which ones should only work for logged-in users.
