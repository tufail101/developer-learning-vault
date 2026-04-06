// This example prints a simple backend flow that includes a service layer.
class Example {
    public static void main(String[] args) {
        String[] flow = {
            "request enters controller",
            "controller calls service",
            "service returns processed result"
        };

        for (String step : flow) {
            System.out.println(step);
        }
    }
}
