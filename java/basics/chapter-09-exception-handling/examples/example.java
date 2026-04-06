// This example catches a number conversion error.
class Example {
    public static void main(String[] args) {
        String[] values = {"10", "five", "20"};

        for (String value : values) {
            try {
                int number = Integer.parseInt(value);
                System.out.println(number * 2);
            } catch (NumberFormatException error) {
                System.out.println("Could not convert: " + value);
            }
        }
    }
}
