const http = require("http");

const server = http.createServer(function (request, response) {
  response.end("Hello from Node.js server");
});

server.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
