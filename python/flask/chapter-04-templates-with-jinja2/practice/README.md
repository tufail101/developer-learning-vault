# Practice — Templates With Jinja2

## Exercise 1
Create a `templates/index.html` file and render it from a Flask route with `render_template()`.

## Exercise 2
Pass a single variable like `page_title` into the template and display it with `{{ page_title }}`.

## Exercise 3
Pass a list into the template and render it with a Jinja loop so each item appears in its own `<li>`.

## Done Checklist
- [ ] My route uses `render_template()` instead of returning a hard-coded HTML string
- [ ] My template displays the value I passed in from Flask
- [ ] My list loop renders all items, not just one
- [ ] I understand that `{{ }}` prints values and `{% %}` is used for template logic like loops
