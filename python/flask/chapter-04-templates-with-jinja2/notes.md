# Templates With Jinja2

## What This Chapter Is About

This chapter teaches rendering HTML from Flask with template variables and loops.
The goal is to help you understand the shape of the idea before you worry about bigger projects.

## Real-World Analogy

A template is like a fill-in form. The shape stays the same, but the details can change each time.

## Key Ideas

- Jinja2 templates let you mix HTML with dynamic values.
- You pass data from Flask into `render_template()`.
- Templates help keep HTML out of your Python strings.

## Example

```py
from flask import render_template

return render_template("index.html", name="Mina")
```

## How To Think About It In Practice

When you are building real things, this idea matters because small pieces need to connect clearly.
If the basic step is confusing, later chapters feel much heavier than they need to.
A good habit is to run the example, change one line, and watch what changes.

## Common Mistakes

- building long HTML strings directly inside Python
- forgetting to pass needed data into the template
- mixing too much business logic into the template file

## Try This Right Away

- Run the example file once before editing it.
- Change one value or one line of logic.
- Predict the output before you run it again.

## Why This Matters

You are not learning this just to memorize syntax.
You are learning it so you can build tools, pages, APIs, and scripts that solve real problems.
This chapter gives you one more block to build with.

## Next Step

Next chapter: **05 Forms And Post Requests**.
That chapter builds directly on what you practiced here.
