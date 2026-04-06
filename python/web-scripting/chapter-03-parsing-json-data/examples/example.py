"""This example turns JSON text into Python data you can actually use."""

import json

json_text = '{"title": "Learn Python", "completed": false}'
data = json.loads(json_text)

print("Full Python value:")
print(data)

print("\nRead one field:")
print(data["title"])

print("\nRun this file with: python3 example.py")
