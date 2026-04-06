# Project And App Structure

## What This Chapter Is About

This chapter teaches understanding the difference between a Django project and a Django app.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A Django project is like a whole shopping mall. Each app inside it is one store with its own job.

## Key Ideas

- The project holds global settings and configuration.
- Apps hold focused features like blog posts, accounts, or products.
- This separation helps large projects stay organized.

## Example

```py
items = {
    "project": "global settings",
    "app": "feature-specific code",
}
print(items)
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- putting every feature into one app without thinking
- editing settings files without understanding what changed
- forgetting to register the app in `INSTALLED_APPS`

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **03 Models And Database**.
That chapter builds directly on what you practiced here.
