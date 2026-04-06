// This example defines a simple schema and model.
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  level: String,
  published: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
