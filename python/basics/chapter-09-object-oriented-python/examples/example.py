"""This example shows one object before and after calling a method that changes its state."""

class Task:
    def __init__(self, title, done=False):
        self.title = title
        self.done = done

    def mark_done(self):
        self.done = True

    def summary(self):
        return f"{self.title} - done: {self.done}"

first_task = Task("Practice Python")

print("Before mark_done():", first_task.summary())
first_task.mark_done()
print("After mark_done():", first_task.summary())
