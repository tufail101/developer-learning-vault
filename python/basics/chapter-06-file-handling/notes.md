# File Handling

## What This Chapter Is About

This chapter teaches reading from files and writing to files with Python.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

Working with files is like opening a notebook, reading a page, adding a new page, and then closing the notebook so you do not lose it.

## Key Ideas

- Use `open()` with a mode like `r`, `w`, or `a`.
- A `with` block closes the file for you.
- Reading and writing files lets your script keep data between runs.

## Example

```py
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Practice Python today
")

with open("notes.txt", "r", encoding="utf-8") as file:
    print(file.read())
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- forgetting the file mode and accidentally overwriting a file
- not using `with`, then leaving files open longer than needed
- assuming a file exists before checking

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **07 Error Handling**.
That chapter builds directly on what you practiced here.
