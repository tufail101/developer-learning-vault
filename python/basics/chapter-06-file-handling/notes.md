# File Handling

So far, your data has lived only inside the script while it is running.

When the script ends, that data is gone.

File handling changes that.

It lets your program save text to a file and read it back later.
That is how your script starts keeping information between runs.

## Real-World Analogy

Think of a paper notebook.

You can:

- open it
- read what is already written
- add something new
- close it

Files work the same way.

The important detail is this: you need to open the notebook in the right mode for the job you want to do.

## Opening A File

Python uses `open()` to work with files.

The main modes you need right now are:

- `"r"` for read
- `"w"` for write
- `"a"` for append

Examples:

```py
open("notes.txt", "r")
open("notes.txt", "w")
open("notes.txt", "a")
```

Each mode does something different.

## Why `with` Matters

The easiest and safest way to work with files is a `with` block.

```py
with open("notes.txt", "r", encoding="utf-8") as file:
    contents = file.read()
```

When the block finishes, Python closes the file for you.

That means you do not have to remember to close it manually every time.
That is why beginners should strongly prefer `with`.

## Writing To A File

This writes text into a file:

```py
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Practice Python today\n")
```

Important warning:

`"w"` overwrites the file.

If the file already has content, `"w"` replaces it.
That is useful sometimes, but it surprises a lot of beginners.

## Reading From A File

This reads the whole file:

```py
with open("notes.txt", "r", encoding="utf-8") as file:
    print(file.read())
```

If the file contains multiple lines, `read()` gives you all of them as one string.

## Appending To A File

If you want to add new text without erasing the old content, use `"a"`:

```py
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write("Build one tiny example\n")
```

This adds the new line to the end of the file.

That is perfect for logs, notes, or growing task lists.

## A Small Example

```py
filename = "practice-notes.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write("Read one Python chapter\n")
    file.write("Build one tiny example\n")

with open(filename, "r", encoding="utf-8") as file:
    contents = file.read()

print(contents)
```

This does three simple things:

1. creates or overwrites a file
2. writes two lines
3. reads the file back and prints it

That is a solid beginner file-handling loop.

## When File Handling Becomes Useful

File handling is useful when you want your script to:

- save notes
- keep a todo list
- store simple logs
- read text from a file instead of typing it directly in the script

It is one of the first ways your programs start feeling more real.

## Mistakes That Show Up In This Chapter

### Using `"w"` When You Meant `"a"`

This is a classic mistake.

If you wanted to add one line but used `"w"`, the old file content gets erased.

### Forgetting The Newline Character

If you write multiple lines without `\n`, the text can get squashed together.

### Assuming The File Already Exists

If you try to read a file that is not there, Python will raise an error.
That becomes very relevant in the next chapter on error handling.

### Not Using `with`

You can open and close files manually, but beginners often forget the close step.
`with` keeps things cleaner and safer.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

It will create a small text file, read it back, and print the contents in the terminal.

## What To Do After Reading This

Make a small file called `todo.txt` from Python.

1. write three tasks into it
2. read the file back
3. append one more task

If you can do those three steps, you understand the core of file handling.

## What Comes Next

The next chapter is **Error Handling**.
That is the perfect follow-up, because file work often fails in normal ways, like missing files or bad input, and your program needs to handle that calmly.
