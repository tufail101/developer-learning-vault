// This example shows inheritance and an interface.
interface Printable {
    void printLabel();
}

class Product {
    String name;

    Product(String name) {
        this.name = name;
    }
}

class Book extends Product implements Printable {
    Book(String name) {
        super(name);
    }

    public void printLabel() {
        System.out.println("Book: " + name);
    }
}

class Example {
    public static void main(String[] args) {
        Book book = new Book("Java Notes");
        book.printLabel();
    }
}
