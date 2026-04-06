# Django Rest Framework Intro

## What This Chapter Is About

This chapter teaches why people use Django REST Framework to build APIs on top of Django.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

If Django gives you a solid building, Django REST Framework gives you ready-made counters, labels, and service flow for API work.

## Key Ideas

- Django REST Framework adds tools for serializers, API views, and browsable APIs.
- It makes API building faster in larger Django projects.
- You still need to understand Django models and views first.

## Example

```py
api_layers = ["model", "serializer", "view", "url"]
print(api_layers)
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- jumping into DRF before understanding plain Django routing
- forgetting that serializers and models solve different problems
- assuming API tooling removes the need for clear data design

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **07 Mini Project Django Api**.
That chapter builds directly on what you practiced here.
