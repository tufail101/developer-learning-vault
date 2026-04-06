"""This example shows the shape of a small data-fetching script."""

import requests


def fetch_todo() -> None:
    """Fetch one todo item and print a small summary."""
    try:
        response = requests.get(
            "https://jsonplaceholder.typicode.com/todos/1",
            timeout=5,
        )
        todo = response.json()

        print(f"Todo {todo['id']}")
        print(f"Title: {todo['title']}")
        print(f"Completed: {todo['completed']}")
    except requests.RequestException as error:
        print("Could not fetch the todo.")
        print(error)


if __name__ == "__main__":
    fetch_todo()
