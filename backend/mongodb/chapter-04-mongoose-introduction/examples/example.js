// This example shows a basic Mongoose connection setup.
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/learning_app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));
