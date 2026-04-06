// This example shows four REST-style routes for the same resource.
const express = require("express");
const app = express();

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.send("Get all tasks");
});

app.post("/tasks", (req, res) => {
  res.send("Create a new task");
});

app.put("/tasks/1", (req, res) => {
  res.send("Update task 1");
});

app.delete("/tasks/1", (req, res) => {
  res.send("Delete task 1");
});
