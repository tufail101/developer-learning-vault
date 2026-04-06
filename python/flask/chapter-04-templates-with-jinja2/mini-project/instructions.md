# Instructions — Simple Template Site

1. Create a Flask app file such as `app.py`.
2. Create a `templates/` folder.
3. Add an `index.html` file inside `templates/`.
4. Create a route that calls `render_template("index.html", ...)`.
5. Pass one title value and one list from Flask into the template.
6. Render both the title and the list in HTML.

## Suggested Build Order

1. Get the route working with a plain template first.
2. Add one template variable like `page_title`.
3. Add the list and loop through it.
4. Refresh the browser after each change so you can see the rendered HTML update.
5. Try the base-template stretch goal only after the first page is working.
