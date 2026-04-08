# Instructions — First Tasks API Endpoint

1. Create a serializer for a task with fields like `title` and `done`.
2. Create an API view that returns a small hard-coded list of task dictionaries.
3. Connect that view to a route such as `/api/tasks/`.
4. Make sure the response comes back as JSON.
5. Check that every task object matches the serializer field names.

## Suggested Build Order

1. Write the task data shape first.
2. Write the serializer second.
3. Write the API view third.
4. Add the URL route last.

## What To Check Before You Stop

1. Does the route return JSON instead of HTML?
2. Does the serializer match the task data shape?
3. Can you explain the difference between the serializer and the API view?
