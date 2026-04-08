"""This example writes a small text file, then reads the same file back."""

filename = "practice-notes.txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write("Read one Python chapter\n")
    file.write("Build one tiny example\n")

print("Wrote two lines to:", filename)

with open(filename, "r", encoding="utf-8") as file:
    contents = file.read()

print("\nRead this content back from the file:")
print(contents)
