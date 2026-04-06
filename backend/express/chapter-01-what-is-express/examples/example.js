// This example shows the smallest useful Express server.
const express = require("express");

const app = express();
const PORT = 3000;

// Send a simple response when the home page is requested.
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
