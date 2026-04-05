new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Loaded after 1 second");
  }, 1000);
}).then(function (message) {
  document.querySelector("#status").textContent = message;
});
