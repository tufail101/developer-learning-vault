const button = document.querySelector("#change-btn");
const title = document.querySelector("#title");

button.addEventListener("click", function () {
  title.textContent = "Updated by JavaScript";
});
