// This example outlines the layers of a small Spring Boot API project.
class Example {
    public static void main(String[] args) {
        String[] layers = {
            "controller",
            "service",
            "repository",
            "entity"
        };

        for (String layer : layers) {
            System.out.println(layer);
        }
    }
}
