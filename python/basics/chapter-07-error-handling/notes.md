# Error Handling

Errors are not a sign that you are bad at programming.
They are a normal part of programming.

The useful question is not "How do I avoid every error forever?"

The useful question is:

"When something predictable goes wrong, what should my program do?"

That is where error handling comes in.

## Real-World Analogy

Think of carrying a spare tire in a car.

You do not expect a flat tire every day.
But if it happens, you want a plan instead of panic.

`try` and `except` are that plan for code.

## What `try` And `except` Do

`try` wraps code that might fail.
`except` says what to do if that failure happens.

Example:

```py
try:
    number = int("abc")
except ValueError:
    print("That text cannot be turned into a number")
```

Here is what happens:

1. Python tries to turn `"abc"` into a number
2. that fails with a `ValueError`
3. the `except` block runs instead of the whole script crashing badly

That is the heart of error handling.

## Why This Matters In Real Scripts

Many normal things can fail:

- a user types bad input
- a file does not exist
- text cannot be converted to a number

Those are not weird edge cases.
They happen all the time.

Error handling helps your script respond more calmly.

## Catch Specific Errors When You Can

This is better:

```py
except ValueError:
```

than this:

```py
except:
```

The first version says exactly what kind of problem you expect.
The second version catches everything, which can hide useful information.

Beginners often reach for a broad `except` too early.
Try not to do that unless you have a clear reason.

## A Small Example

```py
values = ["10", "five", "20"]

for value in values:
    try:
        converted = int(value)
        print(converted * 2)
    except ValueError:
        print(f"Could not convert '{value}' into a number")
```

This example keeps going even when one value is bad.

That is important.
One bad item does not ruin the whole loop.

## What `finally` Does

`finally` runs whether an error happens or not.

```py
try:
    print("Trying something risky")
except ValueError:
    print("That failed")
finally:
    print("Finished")
```

This is useful for cleanup work or final messages.

You will not need `finally` in every script.
But it is good to know what it is for.

## Error Handling Does Not Mean Hiding Problems

This is a very important idea.

Good error handling does not mean pretending everything is fine.
It means handling expected problems in a clear way.

If a user types bad input, show a useful message.
If a file is missing, explain that clearly.

Do not just swallow the error and move on blindly.

## Common Error Types You Will See Early

Some beginner-friendly ones are:

- `ValueError` when a value has the wrong form
- `FileNotFoundError` when a file is missing
- `ZeroDivisionError` when you divide by zero

You do not need to memorize a huge list.
Just start recognizing the common ones.

## Mistakes That Show Up In This Chapter

### Catching Every Error Too Broadly

If you write a bare `except:` too early, you can hide the real problem.
Start with the specific error you actually expect.

### Never Testing The Error Path

Many learners only test the happy path.
But error handling matters most when something goes wrong.

If your code handles bad input, test it with bad input on purpose.

### Printing A Message But Not Fixing The Flow

Sometimes people catch an error, print something, and then the rest of the program still depends on the missing value.
The message alone is not enough.
You also need a safe next step.

### Thinking Errors Mean You Failed

Errors are feedback.
They are annoying sometimes, but they are also information.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see Python double the valid numbers and print a friendly message for the invalid one.

## What To Do After Reading This

Write one tiny script that asks for a number with `input()`.
Try converting it with `int()`.

Then test both paths:

- type a real number
- type bad text

If both paths make sense, you are ready for the next chapter.

## What Comes Next

The next chapter is **Modules And Packages**.
That is where you stop keeping everything in one file and start organizing code into reusable files and imports.
