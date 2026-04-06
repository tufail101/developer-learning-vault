# Object Oriented Basics

## What This Chapter Is About

This chapter teaches what classes and objects are in Java and why they help organize code.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A class is like a cookie cutter. An object is the cookie made from it.

## Key Ideas

- A class is a blueprint for objects.
- An object stores data and can use methods.
- Object-oriented structure helps group related data and behavior together.

## Example

```java
class Book {
    String title;
}

class Example {
    public static void main(String[] args) {
        Book book = new Book();
        book.title = "Clean Code";
        System.out.println(book.title);
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- using classes before understanding the problem they solve
- forgetting that each object has its own separate data
- mixing unrelated responsibilities into one class too early

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **07 Classes And Objects**.
That chapter builds directly on what you practiced here.
