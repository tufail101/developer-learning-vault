const http = require("http");

const server = http.createServer(function (request, response) {
  response.setHeader("Content-Type", "text/plain");
  response.end("Mini project server is working");
});

server.listen(3000, function () {
  console.log("Server running on http://localhost:3000");
});
