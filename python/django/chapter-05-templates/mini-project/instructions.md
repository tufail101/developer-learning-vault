# Instructions — Study Topics Homepage

1. Create a template file such as `home.html`.
2. Add a heading, a short paragraph, and an empty list structure in the template.
3. Write a view that uses `render()` to return that template.
4. Send `title`, `message`, and `topics` in a context dictionary.
5. In the template, show `title` and `message` with template variables.
6. Use a `{% for %}` loop to display each topic in the list.
7. Open the page in the browser and confirm the content comes from the template.

## Suggested Build Order

1. Make the template load first.
2. Pass one value like `title`.
3. Pass the message second.
4. Pass the list last and render it with a loop.

## What To Check Before You Stop

1. Is the HTML in the template file instead of inside the view?
2. Do the variable names in the template match the keys in the context?
3. Does every topic appear on the page?
