# Mini Project Cli Application

## What This Chapter Is About

This chapter teaches combining Java basics into one small command-line project.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

This chapter is like packing a small tool bag. You are bringing several simple skills together so they can do one useful job.

## Key Ideas

- A small command-line app takes input, runs logic, and prints output.
- Helper methods make the project easier to read.
- A narrow first version is easier to finish than a huge one.

## Example

```java
class Example {
    static void showMenu() {
        System.out.println("1. Add task");
        System.out.println("2. View tasks");
    }

    public static void main(String[] args) {
        showMenu();
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- trying to build too many features at once
- keeping all logic inside `main`
- not testing each menu option separately

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

This is the last chapter in this module. After this, review your work and try the mini-project from scratch without peeking too early.
