// Save this code in app.js inside a real Express project.
// Then add "start": "node app.js" in package.json and run: npm start
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// This route handles GET requests to the home page.
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// Start the server and log the local URL so it is easy to open in the browser.
app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:${PORT}`);
});
