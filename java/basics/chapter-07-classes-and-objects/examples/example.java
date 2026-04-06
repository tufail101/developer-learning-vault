// This example uses a constructor and an instance method.
class Course {
    String title;
    int lessons;

    Course(String title, int lessons) {
        this.title = title;
        this.lessons = lessons;
    }

    void printSummary() {
        System.out.println(title + " has " + lessons + " lessons.");
    }
}

class Example {
    public static void main(String[] args) {
        Course course = new Course("Java Basics", 10);
        course.printSummary();
    }
}
