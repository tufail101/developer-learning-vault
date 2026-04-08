# Models And Database

A Django model is a Python class that describes what one kind of data should look like.

If you are building a blog, one model might describe a post.
If you are building a shop, one model might describe a product.
If you are building a notes app, one model might describe a note.

You are basically telling Django, "every record of this type should have these fields."

## Real-World Analogy

Think about a paper form at a clinic.

Every patient form asks for the same kinds of information:

- name
- age
- phone number
- address

Each person fills in different values, but the shape of the form stays the same.

A Django model works like that form.
It defines the shape.
The database stores the filled-in records.

## What A Model Actually Does

A model describes:

- the name of the data type
- which fields it has
- what kind of data each field stores

For example, a blog post model might have:

- `title`
- `body`
- `created_at`
- `is_published`

That is enough for Django to understand how a blog post should be stored.

## A Real Django Model Example

```py
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=False)
```

Here is what each field is saying:

- `CharField` stores short text
- `TextField` stores longer text
- `DateTimeField(auto_now_add=True)` stores the creation time automatically
- `BooleanField` stores `True` or `False`

The model is not the database table itself.
It is the Python description Django uses to build and work with that table.

## What Migrations Are

After you add or change a model, Django does not silently change the database for you.
You need migrations.

The usual flow is:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

`makemigrations` creates the change plan.
`migrate` applies that plan to the database.

If you skip this step, your code and your database drift apart.
That is one of the most common problems in early Django projects.

## Picking Good Field Types Matters

Field types are not just syntax.
They affect how data is stored, validated, and displayed.

For example:

- use `CharField` for short text like titles
- use `TextField` for longer content
- use `IntegerField` for whole numbers
- use `BooleanField` for yes/no values
- use `DateTimeField` for timestamps

If you pick the wrong type, the model becomes harder to use later.

## Naming Fields Clearly Helps More Than You Think

Bad field names cause confusion fast.

This is vague:

```py
text = models.TextField()
```

This is clearer:

```py
body = models.TextField()
```

The second name tells you what the field is for.
That matters when you come back to the model later.

## A Simple Way To Think About It

When you write a model, ask:

"What information does one record need?"

If the answer is clear, the model usually gets better.

For a note, maybe it is:

- title
- body
- created_at

That is enough.
Do not add seven extra fields just because you might need them someday.

## Mistakes That Show Up In This Chapter

### Changing The Model But Forgetting Migrations

You add a field in `models.py`.
Then you try to use it right away.
But the database still has the old table shape.

That is why `makemigrations` and `migrate` matter.

### Using One Generic Field Name For Everything

Names like `data`, `value`, or `text` make models harder to read.
Be specific when you can.

### Picking A Short Text Field For Long Content

If a field is going to hold paragraphs, use `TextField`.
Do not squeeze everything into `CharField` just because it is the first one you learned.

### Adding Too Many Fields Too Early

Beginners often design a huge model before the app even works.
Start with the fields the feature actually needs right now.

### Forgetting That `auto_now_add` Only Runs Once

`created_at = models.DateTimeField(auto_now_add=True)` sets the time when the record is first created.
It does not update every time you edit the record.

That detail trips people up later.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This chapter's example is a plain Python helper script, so it works even if Django is not installed yet.
It prints a sample model shape and the migration commands you would run next.

## What To Do After Reading This

Write a model idea for one simple thing:

- note
- task
- blog post
- product

Pick three or four fields.
Then write the two migration commands underneath it.

If you can explain why each field exists, you are ready for the next chapter.

## What Comes Next

The next chapter is **Views And Urls**.
That is where your Django app stops being only data structure and starts responding to browser requests.
