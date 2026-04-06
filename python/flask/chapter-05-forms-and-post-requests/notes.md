# Forms And Post Requests

Forms are how a browser sends user input back to your Flask app. The page shows the form first. The user fills it out. Then the browser sends that data in a request, and Flask reads the submitted fields.

This is a big step.
Until now, your Flask routes mostly sent information out.
Now the browser is sending information back in.

## Real-World Analogy

Think about filling out a paper form at a reception desk.
You write your name.
You write your message.
Then you hand the form over.

The receptionist reads the fields and decides what to do next.
That is almost exactly what happens here.

## GET Shows The Form, POST Handles The Submission

This pattern comes up all the time:

- `GET` shows the form page
- `POST` handles the submitted form data

That is why one route often supports both methods.

```py
from flask import Flask, request

app = Flask(__name__)


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        name = request.form.get("name", "")
        return f"Thanks for signing up, {name}!"

    return "Render a signup form here"
```

There are two important pieces here:

- `methods=["GET", "POST"]` lets the route accept form submissions
- `request.form.get("name", "")` reads the submitted value safely

If you forget the `POST` method in the route, the form submission will not work.
That mistake gets people all the time.

## Where Form Data Lives

Flask gives you form fields through:

```py
request.form
```

So if your HTML form has an input like:

```html
<input name="name">
```

then Flask can read it with:

```py
request.form.get("name")
```

The `name` attribute in the HTML is what connects the form field to the Flask code.

## Why Validation Starts Mattering Here

This is the first chapter where user input is coming in directly.
That means you should stop assuming the data is always present and always valid.

For example:

```py
name = request.form.get("name", "").strip()

if not name:
    return "Name is required"
```

That is basic validation.
It is not fancy.
It is still important.

## The Mistakes People Make Here

- forgetting to add `methods=["GET", "POST"]` and then wondering why the form submit fails
- reading `request.form["name"]` directly and crashing when the field is missing
- forgetting that the HTML input needs a `name` attribute for Flask to read it
- returning the same response for both `GET` and `POST` and then not understanding whether the form was shown or submitted
- checking only the happy path and never testing an empty field

## How To Run It

Run the example like this:

```bash
python3 example.py
```

Then open the Flask address in your browser.
If you build a real form page for the route, test both:

- loading the form
- submitting the form

Those are two different moments.
Do not treat them like the same thing.

## What To Try Right Now

Add a field called `name`.
Submit a value.
Then submit an empty value.

If both cases do the same thing, your route still needs work.

## What Comes After This

The next chapter is **Connecting To A Database Sqlite**.
That is where form input stops being temporary and starts getting stored somewhere useful.
