"""This example outlines a tiny Flask API project."""

routes = [
    "GET /api/notes",
    "GET /api/notes/<id>",
    "POST /api/notes",
]

for route in routes:
    print(route)
