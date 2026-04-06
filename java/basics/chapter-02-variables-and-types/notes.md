# Variables And Types

## What This Chapter Is About

This chapter teaches storing data in variables and working with Java types like `int`, `double`, `boolean`, and `String`.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

Variables are labeled containers, but in Java each container also tells you exactly what is allowed inside it.

## Key Ideas

- Java variables have explicit types.
- Common beginner types include `int`, `double`, `boolean`, and `String`.
- Clear variable names make code easier to read and maintain.

## Example

```java
class Example {
    public static void main(String[] args) {
        String name = "Mina";
        int age = 21;
        boolean isLearning = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(isLearning);
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- trying to put the wrong type into a variable
- using vague names like `data` or `value`
- forgetting that Java is case-sensitive

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **03 Conditionals And Loops**.
That chapter builds directly on what you practiced here.
