# Routes And Views

A route connects a URL to a Python function. When someone visits `/about`, Flask looks for the function tied to `/about` and runs it. That function is called a view.

This is the first time your Flask app starts feeling like a website instead of one page with one response. Once you understand routes, you can make different URLs do different jobs.

## Real-World Analogy

Think of a building with labeled doors.
One door says `Reception`.
Another says `Billing`.
Another says `Support`.

People go to different doors because they want different things.
Routes work the same way.
Each URL points to a different place in your app.

## What A Route Looks Like

```py
@app.route("/about")
def about():
    return "About page"
```

This means:

- if the browser visits `/about`
- Flask runs the `about()` function
- whatever that function returns gets sent back as the response

That is the whole pattern.

## A Small App With More Than One Route

```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Home page"


@app.route("/contact")
def contact():
    return "Contact page"
```

Now the app has two URLs that do two different things.
That may sound small.
It is not.
This is the basic idea behind almost every web app.

## What A View Function Actually Does

A view function is just a Python function Flask calls for one route.
Right now it returns plain text.
Later it might return HTML, JSON, or something more dynamic.

For this chapter, keep the idea simple:
one route, one function, one response.

## Good Route Names Vs Messy Route Names

Good route names help immediately:

- `/`
- `/about`
- `/contact`
- `/projects`

Messy names create confusion:

- `/page1`
- `/stuff`
- `/thing-about-me`

This matters more than it seems.
Clear URLs make your app easier to understand and easier to extend later.

## The Mistakes People Make Here

- creating two routes that return the same text, then not noticing whether the right function ran
- forgetting the leading `/` in a route path
- giving two different functions the same name
- changing the route path but refreshing the old URL and thinking Flask is broken
- treating routes like file names instead of URLs

## How To Run It

Run the example like this:

```bash
python3 example.py
```

Then open the Flask address in your browser and visit both routes:

- `http://127.0.0.1:5000/`
- `http://127.0.0.1:5000/contact`

If both pages show different text, the routing is working.

## What To Try Right Now

Add a third route like `/about`.
Give it its own message.
Then visit all three pages in the browser.

That small step usually makes the route idea click.

## What Comes After This

The next chapter is **Request And Response**.
That is where routes stop returning only fixed text and start reading information from the incoming request.
