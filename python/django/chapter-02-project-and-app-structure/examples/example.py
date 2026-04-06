"""This example models Django project structure as plain Python data."""

project_structure = {
    "config": ["settings.py", "urls.py"],
    "blog_app": ["models.py", "views.py", "admin.py"],
}

for name, files in project_structure.items():
    print(name, "->", ", ".join(files))
