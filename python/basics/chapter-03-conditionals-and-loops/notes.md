# Conditionals And Loops

So far, your Python files run from top to bottom and do the same thing every time.

This chapter changes that.

Conditionals let your program make choices.
Loops let your program repeat work without you writing the same line again and again.

That is a big step forward.

## Real-World Analogy

A conditional is like deciding whether to carry an umbrella.

If it is raining, take it.
If it is not raining, leave it.

A loop is like checking every item on a grocery list one by one.
Instead of saying "look at milk, look at bread, look at tea" in separate sentences, you go through the whole list with one process.

## What A Conditional Does

A conditional lets Python choose between different paths.

The most common shape looks like this:

```py
temperature = 31

if temperature > 30:
    print("It is hot today")
else:
    print("It is not too hot")
```

If the condition is true, Python runs the first block.
If it is false, Python runs the `else` block.

You can also add `elif` when there are more than two choices.

```py
score = 82

if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
else:
    print("Keep practicing")
```

## What A Loop Does

A loop repeats work.

One very common loop is a `for` loop:

```py
for number in range(3):
    print(number)
```

This prints:

- `0`
- `1`
- `2`

Python repeats the same action for each step in the range.

That saves you from writing:

```py
print(0)
print(1)
print(2)
```

## Looping Through A List

Loops become more useful when you work with real data.

```py
fruits = ["apple", "banana", "mango"]

for fruit in fruits:
    print(fruit)
```

Python takes one item from the list at a time and stores it in `fruit`.
Then it runs the print line again for the next item.

## Combining A Loop And A Conditional

This is where things start to feel like real programming.

```py
scores = [55, 72, 91, 48]

for score in scores:
    if score >= 70:
        print(score, "is a passing score")
    else:
        print(score, "needs more work")
```

Now the program is doing two things:

- repeating work for each score
- making a decision for each score

That combination shows up everywhere.

## What A `while` Loop Does

A `while` loop keeps running as long as a condition stays true.

```py
count = 1

while count <= 3:
    print(count)
    count = count + 1
```

This prints:

- `1`
- `2`
- `3`

Then it stops because `count <= 3` becomes false.

`while` loops are useful, but beginners have to be careful with them.
If the condition never becomes false, the loop never stops.

## Indentation Matters Here

Python uses indentation to know which lines belong inside the `if`, `for`, or `while` block.

That means this matters:

```py
if age >= 18:
    print("Adult")
```

The indented line belongs to the condition block.
If the indentation is wrong, Python will complain or behave differently from what you expected.

## Mistakes That Show Up In This Chapter

### Forgetting The Colon

Lines like these need a colon at the end:

- `if age >= 18:`
- `for item in items:`
- `while count < 5:`

If you forget it, Python throws an error right away.

### Mixing Up `=` And `==`

`=` assigns a value.
`==` compares two values.

That is a very common beginner mistake.

### Creating A `while` Loop That Never Ends

If your `while` condition never becomes false, the script keeps running.
That is called an infinite loop.

### Forgetting To Indent The Block

The code inside the `if` or loop must be indented.
Without that indentation, Python does not know what belongs to the block.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see Python loop through the scores and print a different message depending on each value.

## What To Do After Reading This

Write one script that does both of these:

- loops through a list of numbers
- prints a different message for each number depending on its value

If you can do that, you understand the heart of this chapter.

## What Comes Next

The next chapter is **Functions**.
That is where you stop copying the same logic into multiple places and start packaging repeated steps into reusable blocks.
