// This example creates a simple object from a class.
class Task {
    String title;
    boolean done;
}

class Example {
    public static void main(String[] args) {
        Task task = new Task();
        task.title = "Practice Java";
        task.done = false;

        System.out.println(task.title);
        System.out.println(task.done);
    }
}
