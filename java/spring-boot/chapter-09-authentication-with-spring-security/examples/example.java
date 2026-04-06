// This example prints a simple protected-vs-public route idea.
class Example {
    public static void main(String[] args) {
        String[] routes = {
            "/api/public -> open to everyone",
            "/api/profile -> signed-in users only",
            "/api/admin -> restricted access"
        };

        for (String route : routes) {
            System.out.println(route);
        }
    }
}
