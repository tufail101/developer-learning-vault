# What Is Flask

## What This Chapter Is About

This chapter teaches what Flask is and why people use it to build web apps and APIs in Python.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

Flask is like an empty kitchen you can set up your own way. It gives you the basics without forcing a full house layout on day one.

## Key Ideas

- Flask is a lightweight Python web framework.
- It is often used for APIs, small web apps, and learning server basics.
- You choose more of the structure yourself than you do in larger frameworks.

## Example

```py
from flask import Flask

app = Flask(__name__)
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- expecting Flask to work like a frontend library
- trying to learn every extension before learning routes
- forgetting that Flask code runs on the server

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **02 Routes And Views**.
That chapter builds directly on what you practiced here.
