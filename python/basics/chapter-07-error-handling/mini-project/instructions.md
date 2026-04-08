# Instructions — Safe Number Checker

1. Create a file such as `safe_numbers.py`.
2. Ask the user for the first number with `input()`.
3. Ask for the second number the same way.
4. Put the number conversion and addition inside a `try` block.
5. Catch `ValueError` if either input is not a valid number.
6. Print the sum when the conversion works.
7. Print a clear friendly message when it fails.

## Suggested Build Order

1. Get the input lines working first.
2. Add the number conversion second.
3. Wrap the risky code in `try` and `except`.
4. Add the retry stretch goal last.

## What To Check Before You Stop

1. Does the script work with valid numbers?
2. Does it show a clear message for invalid input?
3. Did you catch the specific error instead of using a broad bare `except`?
