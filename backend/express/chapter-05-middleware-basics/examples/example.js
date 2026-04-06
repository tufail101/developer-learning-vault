// This example logs the method and path before the route runs.
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Middleware ran first");
});
