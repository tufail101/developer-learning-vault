const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.end("Welcome home");
  } else if (request.url === "/about") {
    response.end("About this app");
  } else if (request.url === "/api/users") {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify([{ id: 1, name: "Aman" }]));
  } else {
    response.end("Route not found");
  }
});

server.listen(3000);
