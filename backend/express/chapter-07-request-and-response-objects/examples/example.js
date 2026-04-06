// This example reads request details and returns a custom response.
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  const name = req.query.name || "guest";
  res.status(200).json({
    message: `Hello, ${name}`,
    method: req.method,
  });
});
