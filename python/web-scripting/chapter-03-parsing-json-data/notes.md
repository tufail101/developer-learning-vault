# Parsing JSON Data

## What This Chapter Is About

This chapter teaches reading JSON responses and turning them into Python dictionaries and lists.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

JSON is like a shipping label format both sides agree to use. Python reads that label and turns it into a shape you can work with.

## Key Ideas

- JSON often becomes dictionaries and lists in Python.
- `response.json()` is a common way to read JSON from an API.
- You still need to inspect the data shape before using it.

## Example

```py
import json

text = '{"name": "Lina", "role": "student"}'
data = json.loads(text)
print(data["name"])
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- assuming the API returns the exact keys you expect
- mixing up JSON text with Python dictionaries
- forgetting that missing keys can cause errors

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **04 Scraping Basics With Beautifulsoup**.
That chapter builds directly on what you practiced here.
