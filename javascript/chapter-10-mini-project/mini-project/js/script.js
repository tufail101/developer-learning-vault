const input = document.querySelector("#task-input");
const button = document.querySelector("#add-btn");
const list = document.querySelector("#task-list");

button.addEventListener("click", function () {
  const value = input.value.trim();
  if (!value) return;

  const item = document.createElement("li");
  item.textContent = value;
  list.appendChild(item);
  input.value = "";
});
