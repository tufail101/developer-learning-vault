# Mini Project Data Fetcher

This chapter is where the module turns into one small usable tool. You already learned how to make a request, how to turn JSON into Python data, and how to read outside content. Now you are putting those pieces together into one script that fetches data and prints only the part a person would actually want to read.

That is a real step forward.
A lot of beginner scripts stop at “print the whole response.”
This one should feel a little more intentional than that.

## Real-World Analogy

Imagine someone hands you a full delivery invoice.
You do not usually read every line out loud.
You pull out the few details that matter right now:

- what was delivered
- how much it cost
- whether it arrived

That is what this project does with API data.
It fetches more than you need, then turns it into a cleaner summary.

## What This Project Is Really Practicing

There are four moving parts here:

1. send the request
2. make sure the request worked
3. turn the response into Python data
4. print only the useful parts

That is a very common shape in real scripts.
You will use this pattern again and again.

## A Small Starting Shape

```py
import requests


def fetch_todo() -> None:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/todos/1",
        timeout=5,
    )
    data = response.json()
    print(data["title"])
```

That is not the finished version.
It is just the skeleton.

A better version adds:

- a readable printed summary
- a failure path
- clearer separation between fetching and displaying

## What Good Output Looks Like

This is better:

```text
Todo 1
Title: delectus aut autem
Completed: False
```

This is worse:

```text
{'userId': 1, 'id': 1, 'title': 'delectus aut autem', 'completed': False}
```

The raw dictionary is useful while debugging.
It is not great as the final user-facing output.

## The Mistakes People Make Here

- printing the whole response forever instead of choosing the fields that matter
- mixing fetching, parsing, formatting, and file writing into one messy block
- forgetting that the request can fail and writing only the happy path
- building a stretch-goal menu before the one-endpoint version works
- not checking whether the API returned a list or one object before writing the output code

## A Good Way To Build It

Start with one endpoint.
One request.
One clean summary.

Do not add menus, saving, or multiple endpoints until that first version works.
This kind of project gets confusing fast when you add too much too early.

## Run It Like A Real Script

If your file is named `data_fetcher.py`, run it with:

```bash
python3 data_fetcher.py
```

If the request fails in your environment, that is still useful.
It means your error handling got tested for real.

## What To Do After This

This is the last chapter in the module.
A good next step is to rebuild the tool from memory in a new file without copying.
If you can do that, the core ideas from this module are starting to stick.
