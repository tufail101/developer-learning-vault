# Making HTTP Requests With Requests

An HTTP request is your Python script asking another server for something. That "something" might be a web page, JSON data, a file, or an API response. The `requests` library gives you a much nicer way to do that than working with low-level networking code yourself.

If chapter 1 explained where Python fits on the web, this chapter is the first time Python actually reaches out and talks to another machine.

## Real-World Analogy

Think about calling a restaurant to ask if they are still open.
You ask a question.
They answer back.

Your request is the phone call.
The response is what the person tells you.
The status code is a quick signal about how that conversation went.

## First Setup

If you have not installed `requests` yet, do that first:

```bash
pip install requests
```

If you are using a virtual environment, activate it before installing packages.
Then run Python files like this:

```bash
python3 example.py
```

## The Smallest Useful Request

```py
import requests

# Ask the server for one resource.
response = requests.get("https://jsonplaceholder.typicode.com/todos/1", timeout=5)

# 200 usually means the request worked.
print(response.status_code)

# The raw text body comes back as a string.
print(response.text)
```

The two things to notice here are:

1. `requests.get(...)` sends the request
2. the result is a response object, not the final data shape you want yet

That second part matters.
Beginners often expect the response to already be a Python dictionary.
It is not.
Not yet.

## What Comes Back From A Request

A response object can give you several useful things:

- `response.status_code`
- `response.text`
- `response.headers`
- later, `response.json()` if the response is JSON

You do not need everything every time.
But you do need to know the response is more than just one string.

## Why `timeout=5` Is There

Without a timeout, your script can sit there waiting much longer than you expect.
That feels especially confusing when you are new because it looks like Python is doing nothing.

```py
response = requests.get("https://example.com", timeout=5)
```

That says:
"Wait up to 5 seconds. If nothing useful comes back, stop waiting."

## A Safer Starting Pattern

```py
import requests

try:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/todos/1",
        timeout=5,
    )

    print("Status:", response.status_code)
    print("Body:", response.text)
except requests.RequestException as error:
    print("The request failed.")
    print(error)
```

This is not fancy.
That is the point.
It gives you one clean place for the happy path and one clean place for the failure path.

## The Mistakes People Make Here

- forgetting to install `requests` and then wondering why `import requests` fails
- leaving out `timeout` and thinking the script froze
- treating `response.text` like it is already parsed JSON
- assuming `200` is the only status code you will ever see
- printing the whole response body without first checking whether the request actually worked

## What To Try Right Now

Run the example with:

```bash
python3 example.py
```

Then change the URL to a bad one on purpose.
Watch what changes.
That one small test teaches more than reading the code three times.

## What Comes After This

The next chapter is **Parsing JSON Data**.
That is the missing piece after this one.
First you make the request.
Then you turn the response body into data your Python code can actually use.
