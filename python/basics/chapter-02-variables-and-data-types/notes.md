# Variables And Data Types

If you only use `print()` with fixed text, your programs stay very limited.

Variables let you store values in names so you can reuse them.
That is the first big step from "a few printed lines" to "a program that can work with information."

## Real-World Analogy

Think of a kitchen shelf with labeled jars.

One jar says `sugar`.
One jar says `salt`.
One jar says `tea`.

The label helps you grab the right thing later.

A variable works the same way.
The variable name is the label.
The value is what is inside.

## What A Variable Is

A variable gives a value a name.

```py
name = "Aisha"
age = 24
```

Now Python remembers:

- `name` points to `"Aisha"`
- `age` points to `24`

That means you do not have to type the values over and over again.
You can reuse the names instead.

## What A Data Type Is

A data type tells Python what kind of value it is dealing with.

Here are the most common ones at this stage:

- `str` for text
- `int` for whole numbers
- `float` for decimal numbers
- `bool` for `True` or `False`

Examples:

```py
city = "Lahore"        # str
age = 24               # int
height = 1.68          # float
is_learning = True     # bool
```

These are not just labels for theory.
The type affects what Python can do with the value.

## Why Types Matter

Text and numbers do not behave the same way.

For example:

```py
print("5" + "5")
print(5 + 5)
```

The first line joins text.
The second line adds numbers.

That is why data type matters.

## A Small Example

```py
name = "Aisha"
age = 24
height_meters = 1.68
is_learning = True

print(name)
print(age)
print(height_meters)
print(is_learning)
```

This script stores four different values, then prints them.

That is already more flexible than hard-coding everything directly into `print()`.

## Seeing The Type With `type()`

Python gives you a helper called `type()` so you can inspect a value.

```py
name = "Aisha"
print(type(name))
```

That prints:

```py
<class 'str'>
```

You do not need to memorize the exact output yet.
The useful part is learning that Python keeps track of what kind of value each variable holds.

## Variable Names Should Help You Read The Code

This is not great:

```py
x = "Aisha"
```

This is better:

```py
student_name = "Aisha"
```

Good variable names save you confusion later.

They do not need to be fancy.
They just need to be clear.

## Variables Can Change

A variable is not stuck forever.
You can assign a new value to it later.

```py
score = 10
print(score)

score = 15
print(score)
```

The label stays the same.
The value inside changes.

That is why the word "variable" exists.

## Mistakes That Show Up In This Chapter

### Using Vague Names

Names like `thing`, `data`, or `value` are not helpful when you are learning.
Use names that tell you what the value means.

### Mixing Text And Numbers Without Thinking

This causes confusion quickly:

```py
age = "24"
```

That looks like a number, but it is actually text.

If you want a number, do this:

```py
age = 24
```

### Overwriting A Useful Value Too Early

If you reuse the same variable name for something completely different, the script gets harder to follow.

### Thinking `True` And `"True"` Are The Same

They are not.

- `True` is a boolean
- `"True"` is text

That difference matters later in conditions.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see the values and their types printed in the terminal.

## What To Do After Reading This

Make a tiny script with these four variables:

- your name
- your age
- your favorite number
- whether you are studying today

Then print each one.
If you want, print `type()` next to each one too.

If that feels clear, you are ready for conditionals and loops.

## What Comes Next

The next chapter is **Conditionals And Loops**.
That is where your program stops doing the exact same thing every time and starts making choices or repeating work.
