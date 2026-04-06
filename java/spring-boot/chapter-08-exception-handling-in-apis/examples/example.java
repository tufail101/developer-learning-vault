// This example prints common API error cases.
class Example {
    public static void main(String[] args) {
        String[] errors = {
            "400 Bad Request for invalid input",
            "404 Not Found for missing data",
            "500 Internal Server Error for unexpected failures"
        };

        for (String error : errors) {
            System.out.println(error);
        }
    }
}
