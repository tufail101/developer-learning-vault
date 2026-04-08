# What Is Django

Django is a Python web framework that gives you a lot of the app structure up front.

That means you do not start from an empty file and decide everything yourself.
You get a project layout, routing tools, database tools, templates, and an admin area already planned out.

Some people love that immediately.
Some people find it heavy at first.
Both reactions are normal.

## Real-World Analogy

Imagine renting two kitchens.

One kitchen is mostly empty.
You bring your own shelves, labels, boxes, and drawers.
That is closer to Flask.

The other kitchen already has drawers, labeled jars, storage space, and a rule for where everything goes.
That is closer to Django.

It feels more strict.
But once you start cooking a lot, the built-in structure can save time.

## What Django Gives You Early

Django comes with several useful pieces built in:

- URL routing
- templates for HTML pages
- models for database tables
- an admin panel
- forms and validation helpers
- project settings in one known place

That does not mean Django is always better.
It means Django is helpful when you want a strong starting structure.

## When Django Usually Makes Sense

Django is a good fit when:

- you want one framework to handle a lot of the web app for you
- you expect the project to grow beyond a few simple routes
- you want built-in database and admin tools
- you do not want to assemble every piece by hand

If you want something tiny and very flexible, Flask can feel lighter.
If you want more batteries included from the beginning, Django starts to make more sense.

## The First Commands You Should Know

If Django is installed, a new project usually starts like this:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install django
django-admin startproject mysite
cd mysite
python3 manage.py runserver
```

The virtual environment keeps your project dependencies in one place.
You do not need to master virtual environments today.
Just remember the basic idea: it keeps one project's packages from spilling into another project.

## What `runserver` Actually Does

`python3 manage.py runserver` starts Django's development server on your machine.

That means:

- the app runs locally
- you can open it in the browser
- you can change code and test again quickly

This is for learning and development.
It is not the server setup you would use later on a deployed app.

## Why People Get Intimidated By Django

Django gives you more files and folders right away than Flask does.
That can feel like too much.

The trick is not to understand every file on day one.
You only need a few ideas at first:

- a Django project is the whole site
- a Django app is one smaller piece inside that site
- `manage.py` is the command file you use a lot
- settings live in one main place

That is enough for chapter one.

## A Tiny Mental Model

Think of a Django project like a shopping mall.

The mall is the whole project.
Each shop inside is an app.
One shop might handle blog posts.
Another might handle accounts.
Another might handle products.

You do not build a new mall for every shop.
You add apps inside the same project.

That idea becomes much clearer in the next chapter.

## A Small Example

This is not real Django code yet.
It is just a tiny Python script that helps you remember what Django brings to the table:

```py
django_tools = [
    "routing",
    "templates",
    "database models",
    "admin panel",
]

for tool in django_tools:
    print(f"Django includes: {tool}")
```

The point of this chapter is not syntax.
It is orientation.
You are learning what kind of framework Django is before you start touching its project files.

## Mistakes That Show Up Right Away

### Trying To Memorize Everything

Django is too big to memorize in one sitting.
If you try, your brain turns it into a wall of folder names.

Focus on the big picture first:

- project
- app
- routes
- models
- templates

### Treating Django Like A One-File Script

Django is not built around one tiny file.
It expects a project structure.
Fighting that structure usually makes learning slower, not faster.

### Panicking At The Number Of Files

Seeing several generated files can make it feel like you missed something.
You did not.
Most beginners only need to understand a few of them at the start.

### Skipping `venv`

If you install packages globally for every Python project, things get messy over time.
Using a virtual environment from the beginning makes life easier.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This example is just a plain Python reminder script, so it works even if Django is not installed yet.

## What To Do After Reading This

Do two small things:

1. say out loud what Django gives you that plain Python does not
2. write down the commands to create a project and start the server

If those two things feel clear, you are ready for the folder structure.

## What Comes Next

The next chapter is **Project And App Structure**.
That is where Django stops being a big name and starts becoming a set of files you can actually navigate.
