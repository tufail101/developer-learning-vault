// This example returns structured JSON instead of plain text.
const express = require("express");
const app = express();

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Asha",
    role: "Learner",
    progress: 42,
  });
});
