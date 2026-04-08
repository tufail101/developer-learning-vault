"""This example shows the shape of a tiny CLI tracker with a menu and a sample task list."""

def show_menu():
    print("1. Add note")
    print("2. View notes")
    print("3. Exit")


def main():
    saved_notes = ["Review Python functions", "Practice one file example"]

    show_menu()
    print("\nSample saved notes:")

    for note in saved_notes:
        print("-", note)

    print("\nStart small, then add one feature at a time.")


if __name__ == "__main__":
    main()
