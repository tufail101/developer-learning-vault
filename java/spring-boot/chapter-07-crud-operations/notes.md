# Crud Operations

## What This Chapter Is About

This chapter teaches the basic create, read, update, and delete flow in a Spring Boot API.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

CRUD is like the basic set of actions for a notebook: add a page, read a page, update a page, or remove a page.

## Key Ideas

- Most APIs need create, read, update, and delete actions.
- Each route should have a clear job.
- Consistent naming makes the API easier to understand and test.

## Example

```java
class Example {
    public static void main(String[] args) {
        String[] routes = {
            "GET /api/tasks",
            "POST /api/tasks",
            "PUT /api/tasks/1",
            "DELETE /api/tasks/1"
        };

        for (String route : routes) {
            System.out.println(route);
        }
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- using unclear route names
- returning different shapes for similar endpoints
- skipping not-found handling

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **08 Exception Handling In Apis**.
That chapter builds directly on what you practiced here.
