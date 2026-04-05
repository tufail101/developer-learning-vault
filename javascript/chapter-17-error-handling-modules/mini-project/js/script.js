try {
  const data = JSON.parse("{ broken json }");
  console.log(data);
} catch (error) {
  console.log("Fallback: could not read data.");
}
