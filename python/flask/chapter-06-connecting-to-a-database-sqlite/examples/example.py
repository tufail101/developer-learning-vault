"""This example creates a small SQLite database file and a notes table."""

import sqlite3

connection = sqlite3.connect("flask_app.db")
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, title TEXT)")
connection.commit()
connection.close()

print("Created or opened flask_app.db")
print("Ensured the notes table exists")
print("Run this file with: python3 example.py")
