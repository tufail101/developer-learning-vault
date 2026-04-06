// This example prints sample route patterns with path and query values.
class Example {
    public static void main(String[] args) {
        String[] routes = {
            "GET /api/books/5",
            "GET /api/books?category=java",
            "GET /api/users/12/orders?page=2"
        };

        for (String route : routes) {
            System.out.println(route);
        }
    }
}
