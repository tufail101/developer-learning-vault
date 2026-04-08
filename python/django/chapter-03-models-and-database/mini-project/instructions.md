# Instructions — Blog Post Data Model

1. Open the `models.py` file for your blog app.
2. Create a `Post` model class.
3. Add a `title` field with a short-text field type.
4. Add a `body` field with a long-text field type.
5. Add a `created_at` field that stores the creation time automatically.
6. Add one extra field such as `is_published` or `slug`.
7. Under your model code, write the two migration commands you would run next.

## Suggested Build Order

1. Start with the class name and the title field.
2. Add the body field second.
3. Add the timestamp field third.
4. Add the extra workflow field last.
5. Finish by writing the migration commands in order.

## What To Check Before You Stop

1. Can you explain what every field is for?
2. Did you choose field types that match the data?
3. Did you include both `makemigrations` and `migrate`?
