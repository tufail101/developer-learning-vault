# Connecting To A Database Sqlite

Until now, your Flask app could show pages and accept input, but it forgot everything as soon as the request ended. SQLite is the first step toward fixing that. It lets your app save data in a real database file instead of keeping everything in memory for one moment only.

That is the important shift here:
data can survive after the app stops running.

## Real-World Analogy

Think about the difference between writing a note on your hand and writing it in a notebook.
The note on your hand disappears quickly.
The notebook keeps it for later.

SQLite is the notebook.
Your Flask app can open it, write to it, and read from it again later.

## What SQLite Is

SQLite is a small database stored in a file.
You do not need a separate database server running in the background.
That is why it is a common first database for learning and for small apps.

In Python, you can work with it using the built-in `sqlite3` module.

## The Smallest Database Setup

```py
import sqlite3

connection = sqlite3.connect("flask_app.db")
cursor = connection.cursor()

cursor.execute(
    "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, title TEXT)"
)

connection.commit()
connection.close()
```

Here is what each part is doing:

- `sqlite3.connect(...)` opens or creates the database file
- `cursor()` gives you something that can run SQL commands
- `CREATE TABLE ...` creates the table if it does not already exist
- `commit()` saves the change
- `close()` closes the database connection

If you forget `commit()`, the change may not actually be saved.
That mistake gets people a lot.

## Why This Comes Right After Forms

In the last chapter, the browser could send data to Flask.
The obvious next question is:

"Where does that data go if I want to keep it?"

The answer starts here.
It goes into a database.

## Reading And Writing Are Separate Jobs

Most database work starts with two very simple actions:

- write one row
- read rows back

That is enough for a first notes app.
You do not need advanced database ideas yet.
You need the basics to feel normal first.

## One Important Safety Rule

Do not build SQL queries by stitching user input directly into strings.

Bad:

```py
cursor.execute(f"INSERT INTO notes (title) VALUES ('{title}')")
```

Better:

```py
cursor.execute("INSERT INTO notes (title) VALUES (?)", (title,))
```

That second version is safer and cleaner.

## The Mistakes People Make Here

- forgetting `connection.commit()` and wondering why the table or row did not save
- opening a connection and never closing it
- mixing up “create the database file” with “create the table inside the database”
- building SQL strings by hand with user input instead of using query parameters
- expecting the Flask route to show saved data before they actually inserted any rows

## How To Run It

Run the example like this:

```bash
python3 example.py
```

After it runs, you should see a new database file like `flask_app.db` appear.
That file is the saved database.

## What To Try Right Now

Change the table name from `notes` to `tasks`.
Run the file again.
Then look at the new database file behavior and compare it with the first version.

After that, add one `INSERT` statement and one `SELECT` statement in your own practice file.
That is where SQLite starts feeling useful instead of abstract.

## What Comes After This

The next chapter is **Rest Api With Flask**.
That is where Flask starts returning database-backed data in a more API-style way instead of only handling pages and forms.
