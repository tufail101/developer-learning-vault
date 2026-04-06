# Rest Controllers

## What This Chapter Is About

This chapter teaches what REST controllers do in Spring Boot and how they return responses.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A controller is like the front desk at a building. It receives the request, decides where it should go, and sends a response back.

## Key Ideas

- Controllers handle incoming HTTP requests.
- `@RestController` is commonly used for JSON API responses.
- Route methods should stay focused and readable.

## Example

```java
class Example {
    public static void main(String[] args) {
        String controllerSnippet = "@RestController -> @GetMapping(\"/hello\")";
        System.out.println(controllerSnippet);
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- putting business logic directly inside a controller too early
- returning inconsistent data shapes
- forgetting that controllers are part of the request-response flow

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **04 Request Mapping And Params**.
That chapter builds directly on what you practiced here.
