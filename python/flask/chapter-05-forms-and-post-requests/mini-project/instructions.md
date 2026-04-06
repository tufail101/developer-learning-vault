# Instructions — Feedback Form Handler

1. Create a Flask app file such as `app.py`.
2. Add one route that supports both `GET` and `POST`.
3. On `GET`, show a small HTML form with `name` and `message` inputs.
4. On `POST`, read both fields from `request.form`.
5. If both values are present, return a thank-you message.
6. If either value is missing, return an error message instead.

## Suggested Build Order

1. Get the `GET` route working first.
2. Add the HTML form.
3. Add the `POST` branch.
4. Read the submitted values from `request.form`.
5. Add the validation message for blank fields.
