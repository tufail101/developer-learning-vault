# Exception Handling

## What This Chapter Is About

This chapter teaches handling errors with `try`, `catch`, and `finally` in Java.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

Exception handling is like carrying a spare tire. You hope the trip goes smoothly, but you prepare for the moment something breaks.

## Key Ideas

- `try` holds code that may fail.
- `catch` lets you handle a known problem without crashing everything.
- `finally` is useful for cleanup work that should always happen.

## Example

```java
class Example {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException error) {
            System.out.println("You cannot divide by zero.");
        }
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- catching broad exceptions before understanding the real error
- ignoring the error path during testing
- printing a vague message that does not help you debug later

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **10 File Io Basics**.
That chapter builds directly on what you practiced here.
