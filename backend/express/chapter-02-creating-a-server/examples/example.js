// This example shows a server with a custom port and startup log.
const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
