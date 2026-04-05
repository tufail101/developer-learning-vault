const form = document.querySelector("#contact-form");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value.trim() === "") {
    message.textContent = "Please enter your email.";
  } else {
    message.textContent = "Form submitted successfully.";
  }
});
