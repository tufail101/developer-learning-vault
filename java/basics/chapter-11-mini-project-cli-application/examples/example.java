// This example sketches the structure of a small command-line app.
class Example {
    static void showMenu() {
        System.out.println("1. Add note");
        System.out.println("2. View notes");
        System.out.println("3. Exit");
    }

    public static void main(String[] args) {
        showMenu();
        System.out.println("Start small, then add one feature at a time.");
    }
}
