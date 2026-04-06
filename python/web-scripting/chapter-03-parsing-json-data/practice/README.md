# Practice — Parsing JSON Data

## Exercise 1
Use `json.loads()` to turn this JSON string into a Python dictionary:
`{"name": "Amina", "city": "Lahore"}`
Then print only the `name` value.

## Exercise 2
Create a JSON string that contains a list, like a user with a `skills` array.
Parse it and print only the second skill.

## Exercise 3
Use `requests.get(...)` on `https://jsonplaceholder.typicode.com/todos/1`, call `response.json()`, and print only the `title` field.
If the request fails, print a friendly error message instead of crashing.

## Done Checklist
- [ ] I used `json.loads()` on a string, not on a dictionary
- [ ] I printed one value from a nested JSON structure without printing the whole object only
- [ ] I used `response.json()` for API data instead of trying to parse `response.text` by hand
- [ ] I can explain the difference between JSON text and a Python dictionary
