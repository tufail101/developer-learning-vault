"""This example shows how view data lines up with template placeholders."""

context = {
    "title": "Learning Django",
    "topics": ["models", "views", "templates"],
}

template_preview = """
<h1>{{ title }}</h1>
<ul>
  {% for topic in topics %}
    <li>{{ topic }}</li>
  {% endfor %}
</ul>
"""

print("Context data sent from the view:")
for key, value in context.items():
    print(f"- {key}: {value}")

print("\nTemplate preview:")
print(template_preview.strip())
