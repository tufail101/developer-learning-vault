# Views And Urls

When someone opens a page in a Django app, Django has to answer two questions:

1. which piece of code should handle this URL?
2. what response should that code send back?

The URL pattern answers the first question.
The view answers the second one.

That is the core flow of this chapter.

## Real-World Analogy

Think of a hotel front desk.

The room number tells staff where the request should go.
That is the URL.

The staff member who handles the request decides what happens next.
That is the view.

Wrong room number, wrong place.
No staff member, no response.

## What A URL Pattern Does

A URL pattern tells Django:

"If this path comes in, send it to this view."

For example:

```py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home),
    path("about/", views.about),
]
```

This means:

- `/` goes to `views.home`
- `/about/` goes to `views.about`

You are building a map from paths to Python functions.

## What A View Does

A view is the function that handles the request and returns the response.

It can return:

- plain text
- HTML
- JSON
- a redirect
- an error response

At this stage, the easiest thing to return is plain text.

```py
from django.http import HttpResponse


def home(request):
    return HttpResponse("Hello from Django")
```

The request comes in.
The view runs.
The response goes back out.

That loop matters more than the syntax details right now.

## Putting The Two Together

This is the basic relationship:

- `urls.py` decides which view to call
- `views.py` contains the code that responds

If you create a view but never connect it in `urls.py`, the browser cannot reach it.
If the URL pattern points to the wrong view, the wrong response comes back.

That is why both files matter.

## A Small Request Flow

If someone visits `/about/`, Django does this:

1. looks through the URL patterns
2. finds the pattern that matches `about/`
3. calls the matching view
4. sends the view's response back to the browser

That is the path you should picture in your head every time you add a new page.

## Keep Views Small At First

In the beginning, your views should do one simple job each.

Examples:

- home page view
- about page view
- contact page view

Do not turn one view into a giant pile of unrelated logic.
Small views are easier to test and easier to understand.

## Good Route Names Help A Lot

This is easier to read:

```py
path("about/", views.about)
```

than something vague like:

```py
path("page2/", views.some_function)
```

Clear route names save you confusion later.

## Mistakes That Show Up In This Chapter

### Creating The View But Forgetting The URL Pattern

You write the function in `views.py`.
It looks fine.
But the page still does not open.

Very often, the missing piece is that the view was never added to `urlpatterns`.

### Misspelling The View Name

If `urls.py` points to `views.hmoe` instead of `views.home`, Django cannot call it.
Tiny spelling mistakes matter here.

### Mixing Too Much Logic Into One View

When you are learning, it is tempting to build one mega-view that handles everything.
That makes the request flow harder to follow.

Keep each view focused.

### Forgetting The Trailing Slash Pattern

Django projects often use routes like `about/` instead of `about`.
You do not need to panic about this, but you should notice the project style and stay consistent.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This chapter's example is a plain Python helper script, so it works even if Django is not installed yet.
It prints a tiny URL-to-view map to make the relationship easier to remember.

## What To Do After Reading This

Write down two URL patterns and two matching view names.

For example:

- `/` -> `home`
- `/about/` -> `about`

If you can explain which file owns the route and which file owns the response, you are ready for templates.

## What Comes Next

The next chapter is **Templates**.
That is where views stop returning only plain text and start sending real HTML pages.
