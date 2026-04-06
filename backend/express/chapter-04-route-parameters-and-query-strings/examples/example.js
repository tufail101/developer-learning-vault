// This example reads both a route parameter and a query string.
const express = require("express");
const app = express();

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const view = req.query.view || "summary";

  res.json({ productId, view });
});
