// This example lists a few mongosh commands as strings so the file stays valid JavaScript.
// Copy the command strings into mongosh one by one when you want to practice them.

const shellCommands = [
  "use learning_app",
  'db.courses.insertOne({ title: \"Node Basics\", level: \"beginner\" })',
  "db.courses.find()",
];

shellCommands.forEach((command) => {
  console.log(command);
});
