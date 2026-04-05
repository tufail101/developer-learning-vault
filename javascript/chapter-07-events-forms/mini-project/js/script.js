document.querySelector("#signup-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const value = document.querySelector("#name").value.trim();
  document.querySelector("#feedback").textContent = value
    ? "Looks good!"
    : "Name is required.";
});
