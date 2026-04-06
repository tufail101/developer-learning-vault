/*
  Chapter 13 example: Array Methods And Higher-Order Functions Deep Dive
  This file demonstrates map, filter, reduce, find, some, every,
  and a readable method chain on realistic data.
*/

const lessons = [
  { id: 1, title: "HTML Basics", duration: 20, completed: true },
  { id: 2, title: "CSS Grid", duration: 35, completed: false },
  { id: 3, title: "Async JavaScript", duration: 40, completed: true },
];

console.log("=== map ===");
const titles = lessons.map((lesson) => lesson.title);
console.log(titles);

console.log("\n=== filter ===");
const longLessons = lessons.filter((lesson) => lesson.duration >= 30);
console.log(longLessons);

console.log("\n=== reduce ===");
const totalDuration = lessons.reduce((total, lesson) => total + lesson.duration, 0);
console.log(totalDuration);

console.log("\n=== find ===");
const asyncLesson = lessons.find((lesson) => lesson.title.includes("Async"));
console.log(asyncLesson);

console.log("\n=== some / every ===");
console.log("Any incomplete lessons?", lessons.some((lesson) => !lesson.completed));
console.log("All lessons completed?", lessons.every((lesson) => lesson.completed));

console.log("\n=== Chaining ===");
const completedLongLessonTitles = lessons
  .filter((lesson) => lesson.completed)
  .filter((lesson) => lesson.duration >= 30)
  .map((lesson) => lesson.title.toUpperCase());

console.log(completedLongLessonTitles);
