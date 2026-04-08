# Project And App Structure

One of the first confusing things in Django is that you create a project, and then inside that project you create apps.

That sounds backwards until you see what each one means.

A Django project is the whole website setup.
A Django app is one focused feature inside that website.

If that idea clicks, the folder structure gets much less scary.

## Real-World Analogy

Think of a shopping mall.

The mall is the whole project.
It has the building rules, security, opening hours, and shared space.

Each shop inside is an app.
One shop sells books.
One shop sells clothes.
One shop handles food.

You do not build a new mall for every shop.
You add shops inside the same mall.

That is how Django wants you to think.

## What A Django Project Usually Holds

The project folder usually holds the global setup for the whole site.
That includes things like:

- `settings.py` for project-wide settings
- `urls.py` for top-level routes
- `wsgi.py` and `asgi.py` for server setup

This is the part that says, "here is how the whole website is configured."

## What A Django App Usually Holds

An app holds one feature or one business area.

For example:

- `blog` app
- `accounts` app
- `products` app
- `orders` app

Inside an app, you often see files like:

- `models.py`
- `views.py`
- `admin.py`
- `apps.py`
- `tests.py`

Those files belong to that one feature.
They are not for the whole site.

## A Typical First Project Shape

After you run `django-admin startproject mysite`, you usually get something like this:

```text
mysite/
  manage.py
  mysite/
    settings.py
    urls.py
    asgi.py
    wsgi.py
```

Then if you create an app with:

```bash
python3 manage.py startapp blog
```

you get something like:

```text
mysite/
  manage.py
  mysite/
    settings.py
    urls.py
  blog/
    admin.py
    apps.py
    models.py
    tests.py
    views.py
```

That second folder is the app.
It lives inside the project, but it is responsible for one part of the site.

## What `manage.py` Is

`manage.py` is the command file you use to talk to Django.

You use it for things like:

- running the server
- creating apps
- making migrations
- opening the Django shell

If you are not sure where to run a Django command, the answer is often: in the folder where `manage.py` lives.

## One Important Step People Forget

Creating an app folder is not enough.
You usually also need to register the app in `INSTALLED_APPS` inside `settings.py`.

If you forget that step, Django may not fully recognize your app the way you expect.
That mistake catches a lot of beginners.

## A Small Mental Shortcut

When you look at a Django file, ask:

"Is this for the whole site, or just one feature?"

If it is for the whole site, it probably belongs to the project.
If it is for one feature, it probably belongs to an app.

That single question clears up a lot of folder confusion.

## A Small Example

This example is plain Python, not real Django code.
It is just a memory aid for how the structure is split:

```py
project_structure = {
    "project_files": ["settings.py", "urls.py"],
    "blog_app_files": ["models.py", "views.py", "admin.py"],
}

for group, files in project_structure.items():
    print(group, "->", ", ".join(files))
```

## Mistakes That Happen In This Chapter

### Treating The Project And App As The Same Thing

This is the first big confusion point.
The project is the full website setup.
The app is one feature inside it.

### Throwing Every Feature Into One App

Beginners sometimes put blog posts, user accounts, contact forms, and products all into one app because it feels easier.
That works for five minutes, then everything starts to blur together.

You do not need ten tiny apps immediately.
But you also do not want one junk drawer app holding the whole site.

### Forgetting To Add The App To `INSTALLED_APPS`

You create the app.
The files are there.
But Django still acts like part of it is missing.

Very often, the missing step is registering the app in settings.

### Editing Files Before Knowing Their Job

Django gives you several files right away.
If you start changing them randomly, it gets messy fast.

Slow down and learn what each main file is for before editing everything.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This is a plain Python example, so it works even if Django is not installed yet.

## What To Do After Reading This

Draw a tiny map of one Django project with two apps.

For example:

- project: `mysite`
- app 1: `blog`
- app 2: `accounts`

Then write one line explaining what belongs in the project and what belongs in each app.

If you can do that without guessing, this chapter did its job.

## What Comes Next

The next chapter is **Models And Database**.
That is where the app structure starts doing real work, because one app can define the database tables for one part of the site.
