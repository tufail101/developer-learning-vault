/*
  Chapter 12 example: Closures And Callbacks Deep Dive
  This file demonstrates a counter closure, a private variable pattern,
  and a callback flow that later runs with setTimeout.
*/

console.log("=== Counter Closure ===");

function createCounter(label) {
  let count = 0;

  return function () {
    count += 1;
    console.log(`${label}:`, count);
  };
}

const increaseTasks = createCounter("Tasks completed");
increaseTasks();
increaseTasks();

console.log("\n=== Private Variable Example ===");

function createSecretNote() {
  let note = "Remember to practice closures";

  return {
    read() {
      return note;
    },
    update(newNote) {
      note = newNote;
    },
  };
}

const secretNote = createSecretNote();
console.log(secretNote.read());
secretNote.update("Callbacks are everywhere in frontend code");
console.log(secretNote.read());

console.log("\n=== Callback Example ===");

function fetchLesson(callback) {
  console.log("Pretending to fetch lesson data...");

  setTimeout(() => {
    const lesson = { title: "Closures", difficulty: "medium" };
    callback(lesson);
  }, 500);
}

fetchLesson((lesson) => {
  console.log("Lesson received:", lesson.title, "-", lesson.difficulty);
});
