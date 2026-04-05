let count = 0;
const countText = document.querySelector("#count");
const button = document.querySelector("#increase");

button.addEventListener("click", function () {
  count += 1;
  countText.textContent = count;
});
