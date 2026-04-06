# Object Oriented Python

## What This Chapter Is About

This chapter teaches creating classes and objects to group data with behavior.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A class is like a cookie cutter. The object is the cookie made from it.

## Key Ideas

- A class is a blueprint.
- An object is one actual thing created from that blueprint.
- Methods are functions attached to objects.

## Example

```py
class Book:
    def __init__(self, title):
        self.title = title

    def describe(self):
        return f"Book: {self.title}"

book = Book("Atomic Habits")
print(book.describe())
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- using classes before you actually need them
- forgetting `self` inside instance methods
- putting too many unrelated jobs into one class

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **10 Mini Project Cli Tool**.
That chapter builds directly on what you practiced here.
