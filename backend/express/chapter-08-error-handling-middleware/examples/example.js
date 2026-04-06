// This example sends errors to one central middleware function.
const express = require("express");
const app = express();

app.get("/danger", (req, res, next) => {
  next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
