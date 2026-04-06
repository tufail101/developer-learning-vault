# Practice — Request And Response

## Exercise 1
Create a route that reads `name` from the query string and returns a greeting like `Hello, Ali!`.
Test it with a URL like `/greet?name=Ali`.

## Exercise 2
Change the route so it returns JSON instead of plain text.
For example, return `{"message": "Hello, Ali!"}`.

## Exercise 3
Handle the case where the query string is missing and return a default name like `friend`.
Test both `/greet` and `/greet?name=Ali`.

## Done Checklist
- [ ] My route reads the value from the query string, not from hard-coded text
- [ ] My JSON response has a clear key like `message`
- [ ] My route still works when `name` is missing
- [ ] I tested both the missing-value case and the provided-value case in the browser
