// This example writes a small text file and reads it back.
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

class Example {
    public static void main(String[] args) throws IOException {
        Path filePath = Path.of("java-notes.txt");
        Files.writeString(filePath, "Read one Java chapter\nBuild one example\n");

        String contents = Files.readString(filePath);
        System.out.println(contents);
    }
}
