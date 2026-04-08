# Mini Project Django API

This chapter is where the Django and DRF pieces finally work together as one small project.

You already saw the parts one by one:

- models describe the data
- URLs route the request
- views handle the request
- serializers shape the API output

Now the goal is to stop thinking about them separately and build one tiny notes API that uses all of them.

## Real-World Analogy

Learning the earlier chapters was like setting up a small shop piece by piece.

One day you installed the shelves.
Another day you labeled the items.
Another day you learned the payment counter.

This chapter is opening the shop for the first time.

Not a giant supermarket.
Just one clean little store that actually works.

## What You Are Building

Build a small notes API.

A good first version can have these routes:

```text
GET  /api/notes/
GET  /api/notes/<id>/
POST /api/notes/
```

That is enough.
You do not need comments, tags, categories, search, auth, and pagination all in version one.

## The Smallest Useful Data Shape

Pick one note shape and stick to it.

For example:

```json
{
  "id": 1,
  "title": "Buy milk",
  "body": "Do not forget bread"
}
```

That shape should match your model and your serializer.

If your model says one thing and your JSON says another, the API becomes confusing very quickly.

## A Good Build Order

Build the project in layers.

1. create the `Note` model
2. run `makemigrations` and `migrate`
3. create the serializer
4. create the list route
5. create the single-note route
6. create the POST route

That order keeps the project easy to test.

## A Small Example Shape

This is not the full app.
It is just the shape of the main pieces:

```py
class Note(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "body"]
```

And a list view might return:

```py
class NoteListView(APIView):
    def get(self, request):
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
```

That is the heart of the project.

## What To Test First

Do not wait until the whole project is finished to test it.

Test in this order:

1. does the route open?
2. does it return JSON?
3. does the JSON shape match the serializer?
4. does the database actually save the record?

Those small checks catch most beginner mistakes early.

## Keep Version One Small

This is the biggest trap in capstone chapters.

People say, "while I am here, I should also add authentication, categories, search, likes, comments, and file uploads."

That sounds ambitious.
It usually kills momentum.

Finish one small clean API first.
Then grow it.

## Mistakes That Show Up In This Chapter

### Building Too Many Routes Before The First One Works

If `GET /api/notes/` is not working yet, do not jump ahead to five more routes.
Make one route solid first.

### Letting The Model And Serializer Drift Apart

If the model has `body_text` but the serializer returns `body`, you create confusion fast.
Keep the names aligned unless you have a very clear reason not to.

### Forgetting Migrations After Model Changes

This still matters here.
If the model changes, the database has to be updated too.

### Returning Inconsistent JSON Shapes

Your list route and detail route should still feel like part of the same API.
Keep the field names and structure predictable.

### Trying To Solve Every Edge Case On Day One

You do need some error handling.
But you do not need a giant system.
One clean 404 response and one clean validation error is a strong start.

## How To Run The Example

Run the example file like this:

```bash
python3 example.py
```

This chapter's example is a plain Python helper script, so it works even if Django and DRF are not installed yet.
It prints the project build order and route plan.

## What To Do After Reading This

Write your API on paper first:

- the model fields
- the serializer fields
- the route list
- one sample JSON response

If those four things are clear before you code, the project gets much easier.

## What Comes After This

This is the last Django chapter in this track.
After you finish it, rebuild the notes API from memory.
That is the best way to find out which parts you really understand.
