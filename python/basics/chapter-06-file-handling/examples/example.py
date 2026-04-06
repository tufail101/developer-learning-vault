"""This example writes a small text file and reads it back."""

filename = "practice-notes.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write("Read one Python chapter\n")
    file.write("Build one tiny example\n")

with open(filename, "r", encoding="utf-8") as file:
    contents = file.read()

print(contents)
