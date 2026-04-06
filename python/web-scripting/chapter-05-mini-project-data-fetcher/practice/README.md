# Practice — Mini Project Data Fetcher

## Exercise 1
Write a function that fetches one todo item from `https://jsonplaceholder.typicode.com/todos/1`.
Print only the todo title.

## Exercise 2
Change the script so it prints three lines:
the todo id, the title, and whether it is completed.
Do not print the whole raw dictionary.

## Exercise 3
Wrap the request in `try/except`.
If the request fails, print `Could not fetch the todo.` instead of crashing.
Then break the URL once on purpose so you can test that path.

## Done Checklist
- [ ] My first version prints only the title, not the whole response
- [ ] My second version prints id, title, and completed in separate readable lines
- [ ] My third version handles a bad request without a traceback taking over the whole screen
- [ ] I tested one broken URL on purpose instead of only testing the happy path
