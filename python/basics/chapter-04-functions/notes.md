# Functions

When you copy the same logic into multiple places, your code gets longer and harder to fix.

Functions solve that.

A function lets you give a name to a block of code, then run that block whenever you need it.

That means less repetition and clearer code.

## Real-World Analogy

Think of a blender with labeled buttons.

You do not explain the full blending process every time.
You press the button for the job you want.

A function works the same way.
You define the steps once, give them a name, and call that name later.

## What A Function Is

A function is a reusable block of code.

Here is a very small one:

```py
def greet():
    print("Hello!")
```

This creates the function.
But nothing happens yet.

To run it, you have to call it:

```py
greet()
```

That distinction matters:

- defining a function creates it
- calling a function runs it

## Parameters Bring Values In

Sometimes you want the function to work with changing values.
That is what parameters are for.

```py
def greet(name):
    print(f"Hello, {name}!")

greet("Sam")
greet("Aisha")
```

Now the same function can greet different people.

`name` is the parameter.
`"Sam"` and `"Aisha"` are the values passed in.

## `return` Sends A Value Back

Some functions just print something.
Others calculate a value and send it back.

That is what `return` does.

```py
def square_number(number):
    return number * number

result = square_number(4)
print(result)
```

Here, the function does not print anything by itself.
It returns a value, and the caller decides what to do with it.

That is very useful.

## A Small Example

```py
def calculate_total(price, tax_rate):
    tax_amount = price * tax_rate
    return price + tax_amount


def format_receipt(item_name, total):
    return f"{item_name}: ${total:.2f}"


receipt_total = calculate_total(12.50, 0.08)
print(format_receipt("Notebook", receipt_total))
```

This is a good example because each function has one clear job:

- one calculates the total
- one formats the text

That is easier to read than one giant block doing everything at once.

## A Good Sign You Need A Function

If you notice yourself doing the same step again and again, that is often a sign to make a function.

For example, if you keep writing very similar price calculations in multiple places, you can move that logic into one function and reuse it.

## Keep Functions Focused

Small functions are easier to understand.

A function that does one job is usually better than a function that:

- calculates a bill
- prints a receipt
- asks for user input
- writes to a file

all in one place.

Start small.

## Mistakes That Show Up In This Chapter

### Writing A Function But Never Calling It

This happens a lot.
You define the function and expect output immediately.

But Python only runs the function when you call it.

### Forgetting `return`

If you want to get a value back from the function later, you need `return`.

Without it, the function may run but not give you the result you expected.

### Mixing `print()` And `return` Without Knowing Why

`print()` shows something in the terminal.
`return` sends a value back to the caller.

They are not the same job.

### Giving One Function Too Many Jobs

If a function becomes very long and tries to do everything, it gets harder to reuse and harder to debug.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see one formatted receipt line in the terminal.

## What To Do After Reading This

Write one function that prints a greeting.
Then write one function that returns a calculated value, like the square of a number.

If both of those feel clear, you understand the two most important kinds of beginner functions:

- functions that do something
- functions that return something

## What Comes Next

The next chapter is **Lists Dictionaries Tuples**.
That is where you start storing groups of related values instead of only one value at a time.
