"""This example shows the Python side of rendering a Django template."""

from django.shortcuts import render


def home(request):
    context = {
        "title": "Learning Django",
        "topics": ["models", "views", "templates"],
    }
    return render(request, "home.html", context)
