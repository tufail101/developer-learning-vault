# Modules And Packages

When all your code lives in one file, things stay manageable only for a little while.

As soon as the script grows, one file starts to feel crowded.

Modules and packages help you organize that code.

They let you split related logic into separate files and folders, then import what you need.

## Real-World Analogy

Think of a toolbox.

You do not throw screwdrivers, pliers, tape, and nails into one messy pile on the floor.
You put related tools in the right place so you can find them later.

Modules and packages do that for code.

## What A Module Is

A module is usually one Python file.

For example, this file could be a module:

```py
# helpers.py

def greet(name):
    return f"Hello, {name}"
```

Then another file can import from it:

```py
from helpers import greet

print(greet("Ria"))
```

That means you write the function once and reuse it somewhere else.

## Why Modules Matter

Modules help when:

- one file is getting too long
- you want to reuse helper functions
- you want related code to stay together

For example:

- math helpers in one file
- text formatting helpers in another
- main program flow in `app.py`

That structure is easier to read than one giant file doing everything.

## What A Package Is

A package is a folder of related Python modules.

You can think of it as a bigger organizing step.

Instead of only one helper file, you might have a folder like:

```text
utils/
  text_helpers.py
  math_helpers.py
```

That folder groups related modules together.

At this stage, the main idea is simple:

- module = one file
- package = one folder of related modules

## Imports Bring Code In

Imports let one file use code from another file.

For example:

```py
from helpers import greet
```

That line means:

"Go to `helpers.py`, find `greet`, and make it available here."

Without imports, you would keep copying the same functions into multiple files.

## A Small Example

Imagine this:

```py
# helpers.py
def greet(name):
    return f"Hello, {name}"


# app.py
from helpers import greet

print(greet("Ria"))
```

This is small, but it shows the full idea:

- one file defines reusable code
- another file imports and uses it

That pattern shows up everywhere in real projects.

## When To Split Code Into A Module

You do not need to create a new module for every tiny line of code.
But these are good signs:

- the file is getting crowded
- one group of functions clearly belongs together
- you want to reuse code in multiple places

Start simple.
Do not over-organize too early.
But do not keep everything in one giant file forever either.

## Mistakes That Show Up In This Chapter

### Naming A File After A Built-In Module

If you name your file `random.py`, `math.py`, or something similar, Python can get confused between your file and the real built-in module.

That causes weird import problems.

### Forgetting Where The Imported Function Came From

If your project starts using lots of imported helpers, naming matters more.
Clear file names and clear function names help a lot.

### Keeping Everything In One File For Too Long

Many beginners avoid splitting code because it feels scary.
But once the file grows, keeping everything together often becomes harder, not easier.

### Splitting Too Early Into Too Many Files

This is the opposite mistake.
You do not need twelve files for a tiny script.

Aim for useful organization, not maximum organization.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This chapter's example is a plain Python helper script, so it works without needing extra files.
It prints one import example and one usage example.

## What To Do After Reading This

Create two files:

- `helpers.py`
- `app.py`

Put one reusable function in `helpers.py`.
Import it into `app.py`.
Run `app.py`.

If that works, the core idea of modules is already in your hands.

## What Comes Next

The next chapter is **Object Oriented Python**.
That is where you start grouping data and behavior together using classes and objects instead of only standalone functions.
