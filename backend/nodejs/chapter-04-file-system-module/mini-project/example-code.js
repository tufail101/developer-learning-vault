const fs = require("fs");

const content = fs.readFileSync("./note.txt", "utf-8");
console.log("File contents:");
console.log(content);
