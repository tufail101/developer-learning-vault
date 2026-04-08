"""This example shows how DRF adds a serializer and JSON response layer."""

api_flow = {
    "model_job": "store the data",
    "serializer_job": "shape and validate the API data",
    "view_job": "return the response",
    "response_format": "JSON",
}

print("Django REST Framework flow:\n")

for step, meaning in api_flow.items():
    print(f"- {step}: {meaning}")

print("\nExample response:")
print('[{"title": "First post"}]')
