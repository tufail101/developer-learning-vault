"""This example catches user input errors while converting text to a number."""

values = ["10", "five", "20"]

for value in values:
    try:
        converted = int(value)
        print(converted * 2)
    except ValueError:
        print(f"Could not convert '{value}' into a number")
