"""This example shows both the success path and the error path during number conversion."""

values = ["10", "five", "20"]

for value in values:
    print(f"Trying to convert: {value}")

    try:
        converted = int(value)
        print("Success. Doubled value:", converted * 2)
    except ValueError:
        print(f"Could not convert '{value}' into a number")

    print("---")
