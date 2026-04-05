try {
  JSON.parse("{ broken json }");
} catch (error) {
  console.log("Handled error:", error.message);
}
