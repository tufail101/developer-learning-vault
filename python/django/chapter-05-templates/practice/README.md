# Practice — Templates

## Exercise 1
Create a `home.html` template.
Make a view render it with `render(request, "home.html")`.
Put one heading in the template so you can tell it loaded.

## Exercise 2
Pass a `title` value from the view into the template.
Show it with `{{ title }}` inside an `<h1>` tag.

## Exercise 3
Pass a list called `topics` into the template.
Use a `{% for %}` loop to show each topic as a list item.

## Done Checklist
- [ ] my template loads from a view instead of returning HTML inside a Python string
- [ ] `{{ title }}` shows the value sent from the view
- [ ] the list loop prints every topic in the page
- [ ] I can explain that the view sends context and the template displays it
