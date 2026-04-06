# Templates With Jinja2

Templates let Flask return real HTML pages without stuffing giant HTML strings inside your Python code. Your route decides what data to send. Jinja2 takes that data and drops it into an HTML file.

That split matters.
Python handles the logic.
The template handles the page structure.

## Real-World Analogy

Think about a printed invitation card.
The layout stays the same every time.
Only a few details change:

- the name
- the date
- the place

That is what a template does.
The HTML shape stays mostly the same.
The data changes from request to request.

## Why Templates Help

Without templates, you end up writing long HTML strings in Python.
That gets ugly fast.

This is hard to read:

```py
return "<h1>Welcome</h1><p>Hello from Flask</p>"
```

This is much cleaner:

```py
return render_template("index.html", page_title="Welcome")
```

The route stays focused on data.
The HTML stays in an HTML file.

## The Basic Pattern

```py
from flask import render_template

@app.route("/")
def home():
    return render_template("index.html", name="Mina")
```

The important part is this:

- `index.html` is your template file
- `name="Mina"` sends data into that template

Inside the template, Jinja2 can use that value.

For example:

```html
<h1>Hello, {{ name }}</h1>
```

That `{{ name }}` part means:
"Put the value of `name` here."

## Templates Can Also Loop

This is one reason templates are useful so quickly.

If your route sends a list:

```py
return render_template(
    "index.html",
    items=["HTML", "CSS", "Python"],
)
```

then your template can loop through it:

```html
<ul>
  {% for item in items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
```

Now one route can build a page with repeated content without hard-coding every list item by hand.

## The Mistakes People Make Here

- writing a huge HTML string in the route even after templates are available
- forgetting to create the `templates/` folder or put the HTML file in the right place
- passing `page_title` from Flask but trying to use `title` in the template
- putting too much logic into the template instead of keeping it mostly for display
- changing the Python variable name and forgetting to update the template placeholder

## How To Run It

Run the example like this:

```bash
python3 example.py
```

Then open the Flask address in your browser.
If the template file and route are connected correctly, you should see the rendered page instead of plain text.

## What To Try Right Now

Pass a different `page_title` value from the route.
Refresh the browser and make sure the page changes.

Then add one more item to the list and confirm the rendered HTML shows the extra list item too.

That is the moment templates usually start making sense.

## What Comes After This

The next chapter is **Forms And Post Requests**.
That is where your pages stop being only output and start accepting input from the user too.
