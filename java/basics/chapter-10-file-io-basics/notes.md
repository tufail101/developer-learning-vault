# File Io Basics

## What This Chapter Is About

This chapter teaches reading and writing files in Java with basic file APIs.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

Working with files is like opening a notebook, writing a few lines, closing it, and then opening it again later to read what you saved.

## Key Ideas

- Java can write text files and read them back later.
- File work often uses `Path`, `Files`, and checked exceptions.
- Saving data to a file makes your program useful beyond one run.

## Example

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

class Example {
    public static void main(String[] args) throws IOException {
        Path filePath = Path.of("notes.txt");
        Files.writeString(filePath, "Practice Java today
");
        System.out.println(Files.readString(filePath));
    }
}
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- forgetting that file paths matter
- overwriting a file when you meant to add to it
- ignoring `IOException` completely

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, APIs, and backend features that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **11 Mini Project Cli Application**.
That chapter builds directly on what you practiced here.
