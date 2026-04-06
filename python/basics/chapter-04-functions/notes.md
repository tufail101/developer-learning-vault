# Functions

## What This Chapter Is About

This chapter teaches reusing logic with functions, parameters, and return values.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A function is like a blender button. You press the same button whenever you want the same kind of work done.

## Key Ideas

- Functions let you reuse code without copying it.
- Parameters bring values into a function.
- `return` sends a value back out of a function.

## Example

```py
def greet(name):
    return f"Hello, {name}!"

message = greet("Sam")
print(message)
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- writing a function but never calling it
- forgetting to `return` a value when you need one later
- giving a function too many unrelated jobs

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **05 Lists Dictionaries Tuples**.
That chapter builds directly on what you practiced here.
