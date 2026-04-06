# Parsing JSON Data

JSON is one of the most common formats you will see when an API sends data back. Python can turn that JSON into dictionaries and lists so your code can actually use it. Until that happens, it is still just text.

This chapter sits directly after HTTP requests for a reason. First you ask another server for data. Then you need to turn that response into something your Python code can read without string slicing and guesswork.

## Real-World Analogy

Think about getting a grocery receipt.
On paper, it is just printed text.
But once you read it properly, you can separate item names, prices, totals, and dates.

JSON is like that.
At first it is just text coming back from somewhere else.
Then Python helps you break it into useful pieces.

## JSON Text Vs Python Data

This trips people up early.

JSON text might look like a Python dictionary.
It is not the same thing.

```py
import json

json_text = '{"name": "Lina", "role": "student"}'

# This turns JSON text into a real Python dictionary.
data = json.loads(json_text)

print(data["name"])
```

If the data comes from an HTTP response, you will often use:

```py
response.json()
```

If the data starts as a plain string in your Python file, you will often use:

```py
json.loads(json_text)
```

That is the difference.
One works on a response object.
The other works on a string.

## What JSON Usually Becomes In Python

Most of the time:

- a JSON object becomes a Python dictionary
- a JSON array becomes a Python list
- strings, numbers, booleans, and `null` become Python versions of those values

That means you need to inspect the shape before grabbing values.
Do not assume every API gives you exactly the keys you wanted.

## A Small Real Example

```py
import json

json_text = '{"title": "Learn Python", "completed": false}'
data = json.loads(json_text)

print(data)
print(data["title"])
print(data["completed"])
```

Run it with:

```bash
python3 example.py
```

## What Usually Goes Wrong Here

### Using `response.text` Like It Is Already Parsed

It is still just text.
You cannot safely do dictionary-style access on it yet.

### Guessing The Data Shape

Some APIs return one object.
Some return a list of objects.
Some nest values deeper than you expect.

Print the data once.
Look at it.
Then write the access code.

### Missing Keys

If you try `data["title"]` and that key is not there, Python will raise an error.
That is not Python being rude.
That is Python telling you your assumption was wrong.

## The Mistakes People Make Here

- mixing up `json.loads(...)` and `response.json()`
- seeing curly braces and assuming the data is already a real Python dictionary
- trying to read `data["title"]` before checking whether `data` is a dictionary or a list
- forgetting that some APIs return lists, so `data["title"]` fails because `data` is actually a list
- copying a key name from memory and misspelling it by one character

## What To Try Right Now

Run the example.
Then change the JSON string.
Add one more field like `"priority": "high"`.
Print that field too.

After that, change the JSON into a list of objects and see what breaks.
That is a very good lesson.

## What Comes After This

The next chapter is **Scraping Basics With BeautifulSoup**.
That chapter is still about reading outside data, but the format changes.
Instead of JSON, you start working with HTML.
