# Conditionals And Loops

## What This Chapter Is About

This chapter teaches making decisions with `if` and repeating work with loops.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A conditional is like choosing an umbrella only if it is raining. A loop is like checking every item in a grocery list one by one.

## Key Ideas

- `if`, `elif`, and `else` help your program choose a path.
- `for` loops repeat work over a collection of values.
- `while` loops keep going while a condition stays true.

## Example

```py
temperature = 31

if temperature > 30:
    print("It is hot today")
else:
    print("It is not too hot")

for number in range(3):
    print(number)
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- forgetting the colon at the end of `if` or `for` lines
- mixing up `=` with `==` in comparisons
- creating `while` loops that never end

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **04 Functions**.
That chapter builds directly on what you practiced here.
