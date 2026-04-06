// This example shows the shape of a small database layer file.
const mongoose = require("mongoose");
const Course = require("./models/course");

async function seedCourses() {
  await Course.create({ title: "Mongo Basics", level: "beginner" });
  const courses = await Course.find();
  console.log(courses);
}
