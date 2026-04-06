# What Is Flask

Flask is a Python framework for building web servers. It gives you a simple way to say, "when someone visits this URL, run this Python function and send this response back."

That is the whole shift here.
Until now, your Python code mostly printed to the terminal.
With Flask, your Python code can answer a browser request.

## Real-World Analogy

Think of a small food stall.
People walk up to the counter and ask for something.
The person inside decides what to hand back.

The browser is the customer.
The URL is the thing they ask for.
Your Flask code is the person behind the counter deciding what response to send.

## Why People Use Flask

Flask is popular because it starts small.
You do not need a huge project structure on day one.
You can make one file, one route, and one response and see it working quickly.

That makes it a good first backend framework.

## Install Flask

If Flask is not installed yet:

```bash
pip install flask
```

If you are using a virtual environment, activate it first.

## Your First Flask App

```py
from flask import Flask

# Create the Flask app.
app = Flask(__name__)


# When someone visits "/", return this text.
@app.route("/")
def home():
    return "Hello from Flask"


# Start the local development server.
if __name__ == "__main__":
    app.run(debug=True)
```

Every line matters here:

- `app = Flask(__name__)` creates the app
- `@app.route("/")` connects a URL to a Python function
- `return "Hello from Flask"` sends text back to the browser
- `app.run(debug=True)` starts the local server

## How To Run It

Run the file like this:

```bash
python3 example.py
```

Then open the local address Flask prints in the terminal.
It is usually:

```text
http://127.0.0.1:5000
```

If you visit that address in your browser, your Python code responds.
That is the main idea.

## One Honest Warning

Flask is simpler than some larger frameworks.
That does not mean backend work is easy.

You still need to understand routes, requests, responses, and later things like forms, databases, and authentication.
Flask just gives you a clean place to start.

## The Mistakes People Make Here

- expecting Flask to change the page in the browser the way frontend JavaScript does
- running the file before installing Flask, then hitting `ModuleNotFoundError`
- forgetting to visit the local server address in the browser after starting the app
- editing the function but not saving the file before refreshing the browser
- seeing `@app.route("/")` and not realizing it means "this function handles the homepage URL"

## What To Try Right Now

Run the example with `python3 example.py`.
Then change the returned text from `"Hello from Flask"` to your own message.
Refresh the browser and make sure the new message appears.

After that, add a second route in your own file.
That is when Flask starts to click.

## What Comes After This

The next chapter is **Routes And Views**.
That is where you stop thinking of Flask as "one app file" and start thinking in terms of multiple URLs doing different jobs.
