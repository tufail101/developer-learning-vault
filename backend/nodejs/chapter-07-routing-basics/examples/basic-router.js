const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.end("Home page");
  } else if (request.url === "/about") {
    response.end("About page");
  } else if (request.url === "/api") {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ message: "API route" }));
  } else {
    response.end("Not found");
  }
});

server.listen(3000, function () {
  console.log("Router server running at http://localhost:3000");
});
