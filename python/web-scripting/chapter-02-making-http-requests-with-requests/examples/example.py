"""This example shows the shape of a basic HTTP request with requests."""

import requests

# This script needs the requests package installed to run.
response = requests.get("https://jsonplaceholder.typicode.com/todos/1", timeout=5)
print(response.status_code)
print(response.text)
