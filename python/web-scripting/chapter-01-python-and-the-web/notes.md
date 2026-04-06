# Python And The Web

Python does not run in the browser the way JavaScript does. On web projects, Python usually runs on the server. It can handle requests, talk to a database, process data, send JSON, or render pages before the browser ever sees them.

If you want code that runs inside the browser tab, you still need JavaScript. If you want code that runs on the server and prepares data for the browser, Python is a strong option.

## Real-World Analogy

Think of a restaurant.
The dining area is the browser.
The kitchen is the server.

Customers only see what reaches the table.
They do not see the chopping, cooking, or plating.
Python usually lives in the kitchen.
JavaScript usually lives in the dining area.

## Where Python Fits

Here are a few web jobs Python is often used for:

- running a backend app with Flask or Django
- reading data from an API
- cleaning up data before saving it
- talking to a database
- generating files, reports, or emails

That is why this chapter matters.
If you think Python belongs in the browser tab, the rest of the web path gets confusing fast.

## How To Run Python Files

Save your file with a `.py` extension.
Then run it from the terminal like this:

```bash
python3 example.py
```

You will also hear about virtual environments very early in Python work.
You do not need to master them today.
Just know this:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

A virtual environment gives one project its own Python package space.
That keeps project dependencies from spilling into each other.

## Example

```py
# Python runs on the server side in web work.
# This script prints a few jobs Python often handles.

python_jobs = [
    "receive a request from a browser",
    "fetch or save data",
    "send JSON back to the frontend",
]

for job in python_jobs:
    print(f"Python can {job}.")
```

## What Usually Confuses People Here

### "If I know Python, can I skip JavaScript?"

No.
Not for normal frontend work.
The browser understands JavaScript directly.
That is why buttons, forms, and page interaction still depend on JavaScript.

### "So is Python only for backend work?"

Mostly in web development, yes.
It can also help with scripts, scraping, automation, testing, and data processing around a web project.

## Mistakes People Actually Make

- putting a `.py` file next to `index.html` and expecting the browser to run it
- saying "frontend" when they really mean "the whole web app"
- learning Flask or Django commands before understanding that the code is running on the server
- not knowing how to run a basic Python file from the terminal

## What To Do Next

Run the example with `python3 example.py`.
Then change one job in the list to your own words.
If you can explain the difference between browser code and server code without looking at the notes, you are ready for the next chapter.

## What Comes After This

The next chapter is **Making HTTP Requests With Requests**.
That is where Python starts talking to something over the web instead of just printing text locally.
