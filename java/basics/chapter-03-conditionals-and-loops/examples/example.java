// This example combines a condition with a loop.
class Example {
    public static void main(String[] args) {
        int[] scores = {55, 72, 91, 48};

        for (int score : scores) {
            if (score >= 70) {
                System.out.println(score + " is a passing score");
            } else {
                System.out.println(score + " needs more work");
            }
        }
    }
}
