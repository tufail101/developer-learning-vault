# Rest Api With Flask

## What This Chapter Is About

This chapter teaches returning JSON from Flask routes to build API endpoints.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A REST API is like a menu of request options that another app can call when it needs data or wants to change something.

## Key Ideas

- Flask can return dictionaries and JSON responses for API routes.
- API routes often use methods like GET, POST, PUT, and DELETE.
- Consistent route names make the API easier to use.

## Example

```py
@app.route("/api/tasks")
def tasks():
    return [{"id": 1, "title": "Read docs"}]
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- mixing page routes and API routes without clear naming
- returning inconsistent data shapes
- skipping status codes for created or missing resources

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **08 Authentication Basics**.
That chapter builds directly on what you practiced here.
