# Mini Project CLI Tool

This chapter is where the Python basics track turns into one small real tool.

You already learned the pieces:

- variables
- functions
- loops
- file handling
- error handling

Now the goal is to use a few of those pieces together in one command-line program that actually feels useful.

## What You Are Building

Build a command-line study tracker.

The user should be able to:

- see a menu
- add a study task
- view saved tasks
- exit the program

That is enough for a first CLI tool.

If you want to push it a little further, save the tasks to a file so they are still there next time the script runs.

## Real-World Analogy

Think of this like your first small front desk tool.

A person walks up.
They choose an option.
The tool responds.

Nothing fancy.
Just a clean little system that can take input, do one job, and give a useful result back.

## Why This Project Matters

This is not about making the most advanced tracker in the world.

It is about seeing how beginner Python ideas fit together:

- menu choice with `input()`
- repeated interaction with a loop
- task storage with a list
- helper functions to keep the code readable
- file saving if you want persistence

That combination is a real milestone.

## A Good First Structure

A simple version might have functions like:

```py
def show_menu():
    print("1. Add task")
    print("2. View tasks")
    print("3. Exit")


def add_task(tasks):
    task = input("Enter a task: ")
    tasks.append(task)


def view_tasks(tasks):
    for task in tasks:
        print("-", task)
```

Then a `while` loop in `main()` can keep showing the menu until the user chooses to exit.

That is a strong beginner structure.

## Keep The First Version Small

This is the capstone, but it should still stay manageable.

A good first version does not need:

- login
- colors
- editing tasks
- sorting tasks
- due dates
- reminders

Start with:

- add task
- view tasks
- exit

Then make sure those three things work well.

## A Good Build Order

Build in this order:

1. print the menu
2. store tasks in a list
3. add one task
4. view all tasks
5. add the loop so the menu repeats
6. add file saving only after the in-memory version works

That order keeps the tool simple enough to debug.

## One Small Example Shape

```py
def show_menu():
    print("1. Add note")
    print("2. View notes")
    print("3. Exit")


def main():
    show_menu()
    print("Start small, then add one feature at a time.")
```

This is not the whole project.
It just shows the shape:

- helper functions
- clear menu text
- one main flow

## Mistakes That Show Up In This Chapter

### Trying To Build Too Many Features At Once

This is the biggest capstone mistake.

One clean small tool teaches you more than one half-finished ambitious tool.

### Keeping Everything In One Giant Block

If all the logic lives in one long `while` loop, the code gets hard to read fast.
Use small functions.

### Not Testing Each Menu Option Separately

Test one path at a time:

- add task
- view tasks
- exit

That makes problems easier to spot.

### Saving To A File Before The Main Logic Works

File saving is useful, but it should come after the basic menu flow works.
Otherwise you end up debugging too many things at once.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

It will print a tiny menu and one reminder line in the terminal.

## What To Do After Reading This

Before coding, write down:

- the menu options
- the list of functions you think you need
- what the task data should look like

If that outline is clear, the project gets much easier to build.

## What Comes After This

This is the last chapter in the Python basics module.
After you finish it, try building the study tracker again from memory.
That is the best way to see which Python basics are now truly yours.
