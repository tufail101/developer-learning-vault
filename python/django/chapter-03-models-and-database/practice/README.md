# Practice — Models And Database

## Exercise 1
Write a Django model for a `Note`.
Give it these fields:

- `title`
- `body`
- `created_at`

Choose field types that fit each one.

## Exercise 2
Add one more useful field to the same model.
Examples:

- `is_archived`
- `is_pinned`
- `updated_at`

Write one line explaining why you chose it.

## Exercise 3
Under your model, write the two commands you would run after changing `models.py`.
Then write one sentence explaining what each command does.

## Done Checklist
- [ ] my model uses field types that match the data
- [ ] I can explain why `title` and `body` should not use the same field type by default
- [ ] I know `makemigrations` creates the change plan
- [ ] I know `migrate` applies the change to the database
