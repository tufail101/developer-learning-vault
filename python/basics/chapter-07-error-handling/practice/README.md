# Practice — Error Handling

## Exercise 1
Write a small script that tries to turn a string into an integer.
Use `try` and `except` so bad input prints a friendly message instead of crashing.

## Exercise 2
Write a script that tries to open a file that does not exist.
Catch `FileNotFoundError` and print a clear message like `"That file was not found."`

## Exercise 3
Add a `finally` block to one of your scripts so it always prints `"Finished"` at the end, whether an error happened or not.

## Done Checklist
- [ ] I caught `ValueError` for bad number conversion
- [ ] I caught `FileNotFoundError` for a missing file
- [ ] I tested at least one failure case on purpose
- [ ] I understand that `finally` runs either way
