# Modules And Packages

## What This Chapter Is About

This chapter teaches splitting Python code into separate files and importing what you need.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

Modules are like drawers in a toolbox. You do not keep every tool in one giant pile on the floor.

## Key Ideas

- A module is usually one Python file you can import.
- A package is a folder of related Python modules.
- Imports help you organize code and reuse it across files.

## Example

```py
# helpers.py

def greet(name):
    return f"Hello, {name}"

# app.py
from helpers import greet
print(greet("Ria"))
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- using file names that clash with built-in modules like `random.py`
- forgetting where an imported function came from
- keeping everything in one huge file even after the project grows

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **09 Object Oriented Python**.
That chapter builds directly on what you practiced here.
