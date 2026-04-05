const http = require("http");

const server = http.createServer(function (request, response) {
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Hello from an HTML response</h1>");
});

server.listen(3000, function () {
  console.log("HTML server running at http://localhost:3000");
});
