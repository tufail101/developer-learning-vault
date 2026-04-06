"""This example outlines the flow of a small data-fetching script."""

def show_steps():
    steps = [
        "send request",
        "check status",
        "parse json",
        "print useful fields",
    ]

    for step in steps:
        print(step)


if __name__ == "__main__":
    show_steps()
