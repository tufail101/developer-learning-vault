"""This example shows a tiny Django view and URL pattern."""

from django.http import HttpResponse
from django.urls import path


def home(request):
    return HttpResponse("Hello from Django")


urlpatterns = [
    path("", home),
]
