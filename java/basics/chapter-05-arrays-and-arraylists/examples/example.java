// This example compares arrays and ArrayList.
import java.util.ArrayList;

class Example {
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "orange"};
        ArrayList<String> tasks = new ArrayList<>();
        tasks.add("Read one chapter");
        tasks.add("Practice one example");
        tasks.add("Build a mini project");

        System.out.println(fruits[1]);
        System.out.println(tasks.size());
        System.out.println(tasks.get(0));
    }
}
