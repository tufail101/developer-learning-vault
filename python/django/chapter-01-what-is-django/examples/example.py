"""This example reminds you what Django gives you before you write any project code."""

django_features = [
    "routing",
    "templates",
    "database models",
    "admin panel",
]

print("Django gives you a lot of structure from the start:")

for feature in django_features:
    print(f"- {feature}")

print("\nCommon setup commands:")
print("python3 -m venv .venv")
print("source .venv/bin/activate")
print("pip install django")
print("django-admin startproject mysite")
print("cd mysite")
print("python3 manage.py runserver")
