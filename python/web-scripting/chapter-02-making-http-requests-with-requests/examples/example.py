"""This example sends a basic HTTP GET request and prints the status and body."""

import requests

# This script needs the requests package installed to run.
# Run it with: python3 example.py
try:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/todos/1",
        timeout=5,
    )

    print("Status code:", response.status_code)
    print("Response body:")
    print(response.text)
except requests.RequestException as error:
    print("The request failed.")
    print(error)
