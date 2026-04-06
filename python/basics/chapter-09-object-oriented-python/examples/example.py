"""This example creates a simple class with one attribute and one method."""

class Task:
    def __init__(self, title, done=False):
        self.title = title
        self.done = done

    def mark_done(self):
        self.done = True

    def summary(self):
        return f"{self.title} - done: {self.done}"

first_task = Task("Practice Python")
first_task.mark_done()
print(first_task.summary())
