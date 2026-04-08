# Lists Dictionaries Tuples

Once you move beyond one value at a time, you need a way to store groups of related data.

That is where lists, dictionaries, and tuples come in.

They are all containers.
But they are not for the same job.

The useful beginner question is:

"Do I need an ordered list, a labeled record, or a fixed group of values?"

## Real-World Analogy

Think of three different ways to organize things at home.

A list is like a shopping list.
Order matters, and you can add or remove items.

A dictionary is like labeled drawers.
You look up what you need by name, not by position.

A tuple is like a sealed shipping label with fixed parts, such as width and height.
It is meant to stay as it is.

## What A List Is

A list stores values in order.

```py
fruits = ["apple", "banana", "orange"]
```

You can access items by their position:

```py
print(fruits[0])
```

That prints:

```py
apple
```

Lists are useful when:

- order matters
- you may add or remove items
- you want to loop through many values

You can change a list:

```py
fruits.append("mango")
```

## What A Dictionary Is

A dictionary stores key-value pairs.

```py
user = {"name": "Nina", "city": "Lahore"}
```

Instead of using a number position, you use a key:

```py
print(user["name"])
```

That prints:

```py
Nina
```

Dictionaries are useful when:

- each value needs a label
- you want to describe one object or record
- looking up by name makes more sense than looking up by position

For example, a learner profile fits a dictionary better than a list:

```py
learner = {
    "name": "Aisha",
    "city": "Lahore",
    "is_studying": True
}
```

## What A Tuple Is

A tuple stores values in order, like a list, but it is usually treated as fixed.

```py
window_size = (1280, 720)
```

Tuples are useful when:

- the values belong together
- the group should not keep changing
- the meaning comes from the position

Examples:

- width and height
- latitude and longitude
- RGB color values

## A Small Example

```py
products = ["keyboard", "mouse", "monitor"]
settings = {"theme": "dark", "font_size": 16}
window_size = (1280, 720)

products.append("webcam")
settings["font_size"] = 18

print(products)
print(settings)
print(window_size)
```

This example shows the difference clearly:

- the list changes
- the dictionary changes
- the tuple stays fixed

## How To Decide Which One To Use

Here is a simple guide:

- use a **list** for a group of items
- use a **dictionary** for labeled information about one thing
- use a **tuple** for a fixed set of related values

Examples:

- shopping items -> list
- user profile -> dictionary
- screen size -> tuple

## Indexes And Keys Are Not The Same

This is a very common beginner confusion.

Lists use indexes:

```py
fruits[0]
```

Dictionaries use keys:

```py
user["name"]
```

If you mix those up, Python will complain.

## Lists Start At 0

This catches almost everyone at first.

```py
foods = ["rice", "tea", "bread"]
```

- `foods[0]` is `"rice"`
- `foods[1]` is `"tea"`
- `foods[2]` is `"bread"`

Python counting starts at 0 for indexes.

## Mistakes That Show Up In This Chapter

### Forgetting That List Indexes Start At 0

If you ask for the "first" item with index `1`, you actually get the second item.

### Using The Wrong Dictionary Key

If the dictionary has `"name"` but you ask for `"username"`, Python cannot find it.

### Using A List Where Labels Would Help

If you store `["Aisha", "Lahore", True]`, it works, but it is not very clear.
That kind of data is usually easier to read as a dictionary.

### Using A Tuple When You Actually Need To Edit The Data

If the values need to change often, a list may be the better fit.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

You should see the list, dictionary, and tuple printed in the terminal.

## What To Do After Reading This

Make three small variables of your own:

- a list of study topics
- a dictionary for one learner
- a tuple for screen size or location

If you can explain why each one uses a different structure, you understand the chapter.

## What Comes Next

The next chapter is **File Handling**.
That is where your program starts reading from and writing to files instead of only working with data inside the script.
