# Instructions — Simple API Fetcher

1. Create a file named `simple_api_fetcher.py`.
2. Import `requests`.
3. Send one `GET` request to the JSONPlaceholder todo URL.
4. Print the status code on one line and the response body on the next lines.
5. Add `timeout=5`.
6. Wrap the request in `try/except` so the script fails cleanly instead of crashing with a long traceback.

## Suggested Build Order

1. Get the request working first.
2. Print only the status code.
3. Add the response body output.
4. Add `timeout=5`.
5. Add error handling.
6. Try the stretch goal only after the first version works cleanly.
