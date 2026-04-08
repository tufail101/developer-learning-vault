"""This example shows the difference between project files and app files."""

project_structure = {
    "project_files": ["settings.py", "urls.py", "wsgi.py"],
    "blog_app_files": ["models.py", "views.py", "admin.py"],
    "accounts_app_files": ["models.py", "views.py", "forms.py"],
}

print("A Django project holds site-wide setup.")
print("A Django app holds one focused feature.\n")

for name, files in project_structure.items():
    print(f"{name}:")
    for file_name in files:
        print(f"  - {file_name}")
