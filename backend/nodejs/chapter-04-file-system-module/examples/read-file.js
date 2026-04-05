const fs = require("fs");

const content = fs.readFileSync(__dirname + "/message.txt", "utf-8");
console.log(content);
