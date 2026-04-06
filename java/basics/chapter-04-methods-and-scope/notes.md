# Methods And Scope

## What This Chapter Is About

This chapter teaches reusing logic with methods and understanding where variables are visible.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A method is like a kitchen tool you reuse whenever you need the same job done. Scope is the area where that tool is sitting on the counter and easy to reach.

## Key Ideas

- Methods help you reuse code instead of copying it.
- Parameters bring values into a method.
- Scope decides where a variable can be used.

## Example

```java
class Example {
    static String greet(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        System.out.println(greet("Sam"));
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- writing a method but never calling it
- forgetting that local variables only exist inside their method
- making one method do too many unrelated jobs

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **05 Arrays And Arraylists**.
That chapter builds directly on what you practiced here.
