# Practice — Making HTTP Requests With Requests

## Exercise 1
Install `requests` if needed, then write a script that fetches `https://jsonplaceholder.typicode.com/todos/1` and prints only the status code.

## Exercise 2
Change the same script so it also prints the raw response body with `response.text`.
Make sure you add labels like `Status:` and `Body:` so the output is easy to read.

## Exercise 3
Wrap the request in `try/except`, add `timeout=5`, and print `The request failed.` if something goes wrong.
Then break the URL on purpose once so you can see the error path actually run.

## Done Checklist
- [ ] My first script prints a real status code like `200`
- [ ] My second version prints the response body, not just the URL or object name
- [ ] My final version uses `timeout=5`
- [ ] I tested a broken URL once and saw my error message instead of only testing the happy path
