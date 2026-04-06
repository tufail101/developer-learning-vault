# Templates

## What This Chapter Is About

This chapter teaches rendering HTML pages in Django with template variables and loops.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A template is like a reusable flyer design where the headline and details can change each time you print it.

## Key Ideas

- Templates let you keep HTML in dedicated files.
- Views pass data into templates as context.
- Template tags help you loop and show values safely.

## Example

```py
return render(request, "home.html", {"title": "Welcome"})
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- building HTML in Python strings
- forgetting to send needed context data
- trying to write complex business logic inside templates

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **06 Django Rest Framework Intro**.
That chapter builds directly on what you practiced here.
