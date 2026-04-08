"""This example shows what lives in the helper file and what runs in the main file."""

helper_file_code = "def greet(name): return f'Hello, {name}'"
main_file_import = "from helpers import greet"
main_file_usage = "print(greet('Ria'))"

print("Inside helpers.py:")
print(helper_file_code)

print("\nInside app.py:")
print(main_file_import)
print(main_file_usage)
