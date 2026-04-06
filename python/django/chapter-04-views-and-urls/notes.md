# Views And Urls

## What This Chapter Is About

This chapter teaches mapping request paths to Django view functions.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

URLs are street addresses. Views are the people inside each building who answer the door.

## Key Ideas

- URL patterns decide which view handles a request.
- Views return the response.
- Keeping URLs and views organized makes the project easier to grow.

## Example

```py
from django.urls import path
from . import views

urlpatterns = [path("", views.home)]
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- creating a view but never adding the URL pattern
- using unclear route names
- mixing too much unrelated logic into one view

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **05 Templates**.
That chapter builds directly on what you practiced here.
