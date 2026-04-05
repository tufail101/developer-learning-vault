const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-btn");
const taskList = document.querySelector("#tasks");

addButton.addEventListener("click", function () {
  const value = taskInput.value.trim();
  if (!value) return;

  const item = document.createElement("li");
  item.textContent = value;
  taskList.appendChild(item);
  taskInput.value = "";
});
