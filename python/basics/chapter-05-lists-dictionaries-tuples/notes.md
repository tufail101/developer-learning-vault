# Lists Dictionaries Tuples

## What This Chapter Is About

This chapter teaches storing groups of values and choosing the right structure for the job.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A list is like a shopping list, a dictionary is like a labeled drawer system, and a tuple is like a sealed shipping label that should not change.

## Key Ideas

- Lists store ordered values you may want to change.
- Dictionaries store key-value pairs.
- Tuples store ordered values that usually stay fixed.

## Example

```py
fruits = ["apple", "banana", "orange"]
user = {"name": "Nina", "city": "Lahore"}
location = (24.9, 67.0)

print(fruits[0])
print(user["name"])
print(location)
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- trying to access a dictionary with the wrong key
- forgetting that list indexes start at 0
- using a tuple when you really need something editable

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **06 File Handling**.
That chapter builds directly on what you practiced here.
