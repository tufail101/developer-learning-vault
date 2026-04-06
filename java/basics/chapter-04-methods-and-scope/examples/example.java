// This example shows simple reusable methods.
class Example {
    static int squareNumber(int number) {
        return number * number;
    }

    static void printWelcome(String name) {
        System.out.println("Welcome, " + name);
    }

    public static void main(String[] args) {
        printWelcome("Rina");
        System.out.println(squareNumber(6));
    }
}
