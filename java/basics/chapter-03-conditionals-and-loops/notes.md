# Conditionals And Loops

## What This Chapter Is About

This chapter teaches making decisions with `if` statements and repeating work with loops.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A conditional is like checking the weather before leaving home. A loop is like going through each item on a shopping list one by one.

## Key Ideas

- `if`, `else if`, and `else` choose between different paths.
- `for` loops are useful when you know how many times to repeat something.
- `while` loops keep running while a condition stays true.

## Example

```java
class Example {
    public static void main(String[] args) {
        int temperature = 31;

        if (temperature > 30) {
            System.out.println("It is hot today");
        } else {
            System.out.println("It is not too hot");
        }

        for (int i = 0; i < 3; i++) {
            System.out.println(i);
        }
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- using `=` instead of `==` in a condition
- creating loop conditions that never end
- forgetting braces around a block when the code grows

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **04 Methods And Scope**.
That chapter builds directly on what you practiced here.
