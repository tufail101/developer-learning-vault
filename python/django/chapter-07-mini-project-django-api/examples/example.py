"""This example outlines the build order for a tiny Django notes API."""

build_plan = {
    "resource": "notes",
    "routes": [
        "GET /api/notes/",
        "GET /api/notes/<id>/",
        "POST /api/notes/",
    ],
    "build_order": [
        "create Note model",
        "run migrations",
        "create NoteSerializer",
        "build list view",
        "build detail view",
        "build POST view",
    ],
}

print(f"Resource: {build_plan['resource']}\n")
print("Routes:")
for route in build_plan["routes"]:
    print(f"- {route}")

print("\nBuild order:")
for step in build_plan["build_order"]:
    print(f"- {step}")
