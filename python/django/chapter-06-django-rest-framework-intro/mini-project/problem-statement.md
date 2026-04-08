# Mini Project — First Tasks API Endpoint

## What To Build
Build a small DRF endpoint for tasks.
This is your first Django API route that returns JSON instead of HTML.

## What It Should Do
- return a JSON list of tasks from one route like `/api/tasks/`
- use one serializer to describe the task shape
- use one API view to return the response
- keep the data small and hard-coded for the first version

## What You Must Use
- one DRF serializer
- one DRF API view or `APIView`
- one JSON response with at least two task objects

## Stretch Goal
Add a POST route that accepts new task data and validates it with the serializer.
