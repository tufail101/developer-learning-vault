function runTask(callback) {
  callback("Task complete");
}

document.querySelector("#run").addEventListener("click", function () {
  runTask(function (message) {
    console.log(message);
  });
});
