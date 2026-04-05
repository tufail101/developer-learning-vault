console.log("Start");

setTimeout(function () {
  console.log("Timer finished");
}, 1000);

Promise.resolve("Promise resolved").then(function (message) {
  console.log(message);
});

console.log("End");
