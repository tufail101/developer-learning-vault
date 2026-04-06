// This example shows the shape of JPA concepts as plain text.
class Example {
    public static void main(String[] args) {
        String[] parts = {
            "@Entity class Product",
            "interface ProductRepository extends JpaRepository",
            "database row becomes a Java object"
        };

        for (String part : parts) {
            System.out.println(part);
        }
    }
}
