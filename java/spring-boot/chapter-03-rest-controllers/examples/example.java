// This example shows the shape of a Spring REST controller as a string.
class Example {
    public static void main(String[] args) {
        String[] lines = {
            "@RestController",
            "@RequestMapping(\"/api/tasks\")",
            "public class TaskController { ... }"
        };

        for (String line : lines) {
            System.out.println(line);
        }
    }
}
