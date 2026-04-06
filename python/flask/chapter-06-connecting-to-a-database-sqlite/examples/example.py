"""This example shows basic SQLite setup from Python."""

import sqlite3

connection = sqlite3.connect("flask_app.db")
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, title TEXT)")
connection.commit()
connection.close()
