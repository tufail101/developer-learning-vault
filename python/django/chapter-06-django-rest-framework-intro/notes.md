# Django Rest Framework Intro

Regular Django is great at returning HTML pages.
Django REST Framework, usually called DRF, helps Django return API responses more cleanly.

That usually means JSON.

So the shift in this chapter is simple:

- templates send pages to people
- DRF sends structured data to apps, websites, or mobile clients

## Real-World Analogy

Imagine a restaurant with two outputs.

One output is plated food for people sitting at tables.
That is like a normal Django template response.

The other output is labeled ingredient boxes going to another kitchen.
That is like an API response.

Same business.
Different format.

DRF helps with the second one.

## What DRF Adds

DRF gives Django some tools that make API work easier:

- serializers
- API views
- request and response helpers
- a browsable API in development

You can build APIs in plain Django too.
But DRF gives you a more organized path once the API starts growing.

## What A Serializer Is

A serializer helps turn Python or model data into JSON-friendly output.
It can also validate incoming data from a request.

That is one of the biggest ideas in DRF.

A model describes how data is stored.
A serializer describes how data is shaped for the API.

Those are related jobs.
They are not the same job.

## A Small DRF Example

```py
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response


class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)


class PostListView(APIView):
    def get(self, request):
        data = [{"title": "First post"}]
        return Response(data)
```

This example shows two important parts:

- the serializer says what one post looks like
- the API view returns a JSON-style response

At this stage, you do not need every DRF feature.
You just need the shape of the flow.

## How DRF Fits Into The Request Flow

The request flow is still familiar:

1. a URL receives a request
2. a view handles it
3. a response goes back

The difference is the response format.

Instead of rendering `home.html`, you might return:

```json
[
  {"title": "First post"}
]
```

That response is meant for another program to read.

## Why Serializers Matter

Without serializers, API code gets messy quickly.

You start manually shaping dictionaries everywhere.
You repeat field rules in too many places.
You lose one clean spot for validation.

Serializers help by giving that job a home.

They answer questions like:

- which fields should be exposed?
- what shape should the response have?
- is the incoming data valid?

## Keep This Chapter Small

Do not try to learn every DRF class at once.
You do not need viewsets, routers, permissions, pagination, and authentication all in chapter one.

For now, focus on:

- one serializer
- one API view
- one JSON response

That is enough to understand what DRF is for.

## Mistakes That Show Up In This Chapter

### Jumping Into DRF Before Understanding Regular Django Views

If the basic request-to-response flow is still fuzzy, DRF feels harder than it really is.
It still sits on top of the same core Django ideas.

### Thinking A Serializer Is The Same As A Model

A model describes database structure.
A serializer describes API data shape and validation.

They often work together.
They are not interchangeable.

### Trying To Learn The Whole DRF Ecosystem At Once

DRF is powerful, which means it is easy to overload yourself.
Start with a serializer and one simple API view.

### Forgetting That APIs Need Clear Data Shapes

If your JSON response shape changes randomly, the frontend or client code becomes harder to trust.
Pick a clear shape and stick to it.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This chapter's example is a plain Python helper script, so it works even if DRF is not installed yet.
It prints the flow from serializer to API response in a simple way.

## What To Do After Reading This

Write down one tiny API idea, like:

- posts
- tasks
- notes

Then answer these three questions:

1. what fields should one item have?
2. what should the JSON response look like?
3. which view should return that response?

If you can answer those, you understand the point of DRF.

## What Comes Next

The next chapter is **Mini Project Django API**.
That is where this DRF intro turns into one small working API instead of one isolated example.
