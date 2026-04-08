# Introduction To Python

Python is a programming language that lets you write instructions in a way that is usually easier to read than many other languages.

That is one reason so many beginners start here.

You can use Python for:

- small scripts
- automation
- web backends
- data work
- command-line tools

You do not need to learn all of that now.
Right now, the goal is much smaller:

- write a `.py` file
- run it with Python
- see your code do something

## Real-World Analogy

Think of Python like giving instructions to a very literal assistant.

If you say:

1. print this line
2. print that line

Python does exactly that, in that order.

Not what you meant.
Not what you forgot to type.
Only what you actually wrote.

That is why small details matter.

## What A Python File Is

Python code usually lives in files that end with `.py`.

For example:

- `hello.py`
- `notes.py`
- `weather_script.py`

When you run one of these files, Python reads it from top to bottom.

That means line order matters.

## Your First Script

This is a perfectly valid Python program:

```py
print("Hello from Python")
print("I am learning one line at a time")
```

It does not look fancy.
That is okay.

The important part is that you wrote instructions and Python followed them.

## How To Run A Python File

Open your terminal in the folder where the file lives.
Then run:

```bash
python3 example.py
```

If your file is called `hello.py`, run:

```bash
python3 hello.py
```

That command tells Python to read the file and execute it.

## What "Runs Top To Bottom" Means

Look at this:

```py
print("First line")
print("Second line")
print("Third line")
```

Python prints those lines in that exact order.

If you move the third line to the top, it prints first.

That sounds obvious, but it matters a lot later when your programs get longer.

## Python Is Not Running In The Browser

This confuses a lot of beginners who already saw JavaScript.

Python does not normally run inside the browser page the way JavaScript does.
You usually run Python in the terminal, on your computer, or on a server.

So if you write a Python file and nothing changes in the browser, that is normal.
You need to run the file with `python3`.

## The First Win To Look For

Your first win is not building something huge.
It is this:

- you create a `.py` file
- you run it
- you see output in the terminal

That moment matters because it proves the loop is working:

write code -> run file -> see result

## Mistakes That Show Up In This Chapter

### Writing The File But Never Running It

This happens all the time.
You type the code, save the file, and assume you are done.

Nothing really happens until you run:

```bash
python3 filename.py
```

### Forgetting The `.py` File Extension

If the file is not saved as a Python file, the setup gets confusing very quickly.
Name the file clearly, like `hello.py`.

### Expecting Browser Output

At this stage, Python output usually appears in the terminal, not on a webpage.

### Changing Code But Not Running The File Again

You edit the script and expect the old terminal output to magically update.
It will not.
Run the file again every time you want to see the new result.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see a few printed lines in the terminal.

## What To Do After Reading This

Create a file called `hello.py`.
Put in two or three `print()` lines.
Run it with:

```bash
python3 hello.py
```

If you can do that without guessing, you are ready for variables.

## What Comes Next

The next chapter is **Variables And Data Types**.
That is where you stop printing fixed text only and start storing values in names you can reuse.
