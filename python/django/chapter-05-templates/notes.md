# Templates

Once your Django views start returning real pages, plain text is not enough anymore.

You need HTML.
But you do not want to build big HTML pages inside Python strings.
That gets messy fast.

Templates solve that problem.

They let you keep HTML in its own file, while the view sends in the changing data.

## Real-World Analogy

Think of a wedding invitation design.

The layout stays mostly the same:

- title
- colors
- sections
- spacing

But the names, date, and location change each time.

That is what a template does.
It gives you a fixed layout with slots for changing values.

## Why Templates Are Better Than HTML Strings

You could do this in a view:

```py
return HttpResponse("<h1>Welcome</h1><p>This is the home page.</p>")
```

That works for one tiny response.
But once the page grows, it becomes hard to read and hard to maintain.

Templates let you move the HTML into a proper file like `home.html`.
Then your view becomes much cleaner.

## What The View Does

The view prepares the data and chooses the template.

```py
from django.shortcuts import render


def home(request):
    context = {
        "title": "Learning Django",
        "topics": ["models", "views", "templates"],
    }
    return render(request, "home.html", context)
```

This view does three simple things:

- receives the request
- prepares the context data
- tells Django which template to render

## What The Template Does

The template receives that context and places the values into HTML.

A template might look like this:

```html
<h1>{{ title }}</h1>

<ul>
  {% for topic in topics %}
    <li>{{ topic }}</li>
  {% endfor %}
</ul>
```

`{{ title }}` prints a value.
`{% for topic in topics %}` loops through a list.

So the view owns the data.
The template owns the page layout.

That split makes your code easier to read.

## The Word `context`

In Django, `context` just means the data you send from the view to the template.

If your context is:

```py
{"title": "Welcome"}
```

then the template can use:

```html
{{ title }}
```

If you forget to send a value in the context, the template cannot show it.

## Keep Logic Light Inside Templates

Templates can do some simple things:

- print values
- loop through lists
- check simple conditions

But they are not the place for heavy business logic.

Do the thinking in Python.
Do the layout in HTML.

That habit saves you trouble later.

## A Simple Folder Mental Model

At this stage, you can think of it like this:

- `views.py` decides what data to send
- `templates/` holds the HTML files
- the browser sees the final rendered page

That is the basic template flow.

## Mistakes That Show Up In This Chapter

### Building Too Much HTML In The View

If your view starts looking like one huge string full of tags, that is a sign you should move the page into a template file.

### Forgetting To Pass Context Data

You write `{{ title }}` in the template, but nothing shows up.
Often the problem is that the view never sent `title` in the context dictionary.

### Trying To Put Complex Python In The Template

Templates are not the place for big calculations or messy decision trees.
Keep them focused on display.

### Mismatching Variable Names

If the view sends `page_title` but the template uses `{{ title }}`, the output will not match what you expect.
The names have to line up.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This example is a plain Python helper script, so it works even if Django is not installed yet.
It prints the view-side data and the template-side placeholders together.

## What To Do After Reading This

Write one simple view and one simple template:

- the view should send a page title
- the template should print that title

Then add a list to the context and render it with a loop.

If that works, you understand the core of templates.

## What Comes Next

The next chapter is **Django Rest Framework Intro**.
That chapter moves in a different direction by sending JSON for APIs instead of HTML for pages.
