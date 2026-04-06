# Practice — Forms And Post Requests

## Exercise 1
Create one route that supports both `GET` and `POST`.
Use `GET` to show a simple message like `Form page`.

## Exercise 2
Read one form field like `name` from `request.form` and return it in the response after submission.

## Exercise 3
Add simple validation for an empty field.
If the name is missing or blank, return a message like `Name is required`.

## Done Checklist
- [ ] My route allows both `GET` and `POST`
- [ ] My form field can be read with `request.form.get(...)`
- [ ] My route gives a different result for an empty name vs a filled name
- [ ] I understand that the HTML input `name` attribute is what Flask reads
