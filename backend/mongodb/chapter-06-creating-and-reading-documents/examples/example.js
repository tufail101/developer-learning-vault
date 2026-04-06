// This example creates one document and then reads all documents.
const newCourse = await Course.create({
  title: "Express Basics",
  level: "beginner",
  published: true,
});

const courses = await Course.find();
console.log(courses);
