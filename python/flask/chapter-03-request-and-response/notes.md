# Request And Response

Every Flask route sits in the middle of a small conversation. The browser sends a request. Your Flask code reads that request. Then your code sends a response back.

That is the whole loop.
If this part is clear, the rest of backend work gets much easier to understand.

## Real-World Analogy

Think of ordering tea at a cafe.
You ask for something.
The person at the counter listens.
Then they hand something back.

The request is what came in.
The response is what goes back out.
Your Flask route is the part in the middle deciding what to do.

## Reading Data From The Request

Flask gives you a `request` object for incoming data.
One easy place to start is query strings.

If someone visits:

```text
/greet?name=Ali
```

then the query string contains:

```text
name=Ali
```

and your Flask code can read that value.

```py
from flask import request

@app.route("/greet")
def greet():
    name = request.args.get("name", "friend")
    return f"Hello, {name}!"
```

If the URL includes `?name=Ali`, the page says `Hello, Ali!`
If the `name` value is missing, it falls back to `friend`.

That default is important.
Real requests are often missing something you expected.

## Returning Different Kinds Of Responses

So far you have mostly returned plain text.
That is still a response.

But Flask can also return JSON easily:

```py
from flask import Flask, request

app = Flask(__name__)


@app.route("/greet")
def greet():
    name = request.args.get("name", "friend")
    return {"message": f"Hello, {name}!"}
```

That is useful when your Flask app is acting like an API instead of a page-based site.

## One Very Useful Test URL

Run your app and try both of these:

```text
http://127.0.0.1:5000/greet
http://127.0.0.1:5000/greet?name=Amina
```

The first should use the default value.
The second should use the value from the URL.

That small test teaches a lot.

## The Mistakes People Make Here

- trying to read `request.args["name"]` directly, then getting an error when `name` is missing
- forgetting the `?name=value` part of the test URL and thinking the route is broken
- returning plain text when they meant to return JSON, or the other way around
- not realizing the query string lives in the URL, not in the route path itself
- testing only one case and never checking what happens when the value is missing

## How To Run It

Run the example like this:

```bash
python3 example.py
```

Then open:

```text
http://127.0.0.1:5000/greet
```

and after that:

```text
http://127.0.0.1:5000/greet?name=Sam
```

Compare the two responses.

## What To Try Right Now

Change the key from `name` to `user`.
Then test:

```text
/greet?user=Sam
```

This is a good small check that helps you see exactly what part of the URL Flask is reading.

## What Comes After This

The next chapter is **Templates With Jinja2**.
That is where Flask stops returning only raw text or JSON and starts building actual HTML pages from templates.
