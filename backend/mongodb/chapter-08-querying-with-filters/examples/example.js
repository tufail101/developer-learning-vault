// This example filters for published beginner courses.
const beginnerCourses = await Course.find({
  level: "beginner",
  published: true,
});
