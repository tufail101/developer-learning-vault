const form = document.querySelector("#signup-form");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  message.textContent = username
    ? `Welcome, ${username}!`
    : "Please enter a username.";
});
