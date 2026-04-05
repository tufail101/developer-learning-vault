const helloButton = document.querySelector("#hello-btn");
const helloMessage = document.querySelector("#hello-message");

helloButton.addEventListener("click", function () {
  helloMessage.textContent = "Thanks for visiting this portfolio starter.";
});
