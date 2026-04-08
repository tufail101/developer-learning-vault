# Object Oriented Python

Sometimes a piece of data and the actions related to that data belong together.

That is where classes can help.

A class gives you a way to bundle:

- data about a thing
- actions that belong to that thing

That is the basic idea behind object-oriented Python.

## Real-World Analogy

Think of a cookie cutter and the cookies it makes.

The cookie cutter is the class.
It describes the shape.

Each real cookie is an object.
It is one actual thing created from that shape.

That analogy is not perfect, but it helps with the first mental model:

- class = blueprint
- object = real instance

## What A Class Is

A class is a blueprint for creating objects.

For example, a `Book` class might describe:

- title
- author
- whether the book is borrowed

Each individual book object would have its own values for those things.

## What An Object Is

An object is one actual item created from a class.

If `Book` is the class, then:

```py
book = Book("Atomic Habits")
```

`book` is an object.

You can create many objects from the same class, and each one can hold different values.

## `__init__` Sets Up The Object

The `__init__` method runs when you create a new object.

It is where you usually set up the starting data.

```py
class Book:
    def __init__(self, title):
        self.title = title
```

If you create:

```py
book = Book("Atomic Habits")
```

then `self.title` becomes `"Atomic Habits"` for that object.

## What `self` Means

`self` points to the current object.

That means:

```py
self.title
```

means:

"the title stored on this specific object."

Beginners often find `self` weird at first.
That is normal.

The simple way to think about it is:

- class = shared blueprint
- `self` = this one actual object

## Methods Are Functions On The Object

When a function belongs to a class, it is usually called a method.

```py
class Book:
    def __init__(self, title):
        self.title = title

    def describe(self):
        return f"Book: {self.title}"
```

Now each `Book` object can describe itself:

```py
book = Book("Atomic Habits")
print(book.describe())
```

That works because the method is grouped with the data it uses.

## A Small Example

```py
class Task:
    def __init__(self, title, done=False):
        self.title = title
        self.done = done

    def mark_done(self):
        self.done = True

    def summary(self):
        return f"{self.title} - done: {self.done}"


first_task = Task("Practice Python")
first_task.mark_done()
print(first_task.summary())
```

This example is good because the class keeps related things together:

- the task title
- whether the task is done
- the actions for updating and describing that task

## When A Class Helps

You do not need classes for every tiny script.

Classes start to help when:

- one thing has several related pieces of data
- that thing also has actions that belong with it
- you want to create many similar objects

Examples:

- books
- tasks
- products
- users

## When You Probably Do Not Need A Class Yet

If a script is very small and only needs a couple of simple variables, a class may be unnecessary.

That is okay.

You are not required to use classes everywhere.
They are a tool, not a rule.

## Mistakes That Show Up In This Chapter

### Forgetting `self`

Methods that work with object data need `self`.
If you forget it, Python will complain.

### Using Classes Too Early Just Because They Sound Advanced

Sometimes a simple function or dictionary is enough.
Do not force a class into every problem.

### Putting Too Many Unrelated Jobs Into One Class

A `Book` class should not also handle weather, login, and shopping cart logic.
Keep classes focused.

### Confusing The Class With The Object

`Book` and `book_one` are not the same thing.

- `Book` is the blueprint
- `book_one` is one actual object created from it

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see one task summary printed in the terminal.

## What To Do After Reading This

Make one small class of your own.

Good beginner options:

- `Book`
- `Car`
- `Task`

Give it:

- one or two attributes
- one method that returns a useful sentence

If that works, the main class/object idea has clicked.

## What Comes Next

The next chapter is **Mini Project CLI Tool**.
That capstone gives you one last Python basics project where several earlier ideas can work together in one small command-line script.
