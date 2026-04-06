"""This example converts JSON text into Python data."""

import json

json_text = '{"title": "Learn Python", "completed": false}'
data = json.loads(json_text)

print(data)
print(data["title"])
