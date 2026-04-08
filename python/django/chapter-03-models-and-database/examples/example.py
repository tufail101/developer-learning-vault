"""This example shows the shape of a Django model without needing Django installed."""

sample_model = {
    "model_name": "Post",
    "fields": [
        "title = models.CharField(max_length=100)",
        "body = models.TextField()",
        "created_at = models.DateTimeField(auto_now_add=True)",
        "is_published = models.BooleanField(default=False)",
    ],
    "next_commands": [
        "python3 manage.py makemigrations",
        "python3 manage.py migrate",
    ],
}

print(f"Model: {sample_model['model_name']}")
print("Fields:")
for field in sample_model["fields"]:
    print(f"  - {field}")

print("\nAfter changing a model, run:")
for command in sample_model["next_commands"]:
    print(f"  - {command}")
