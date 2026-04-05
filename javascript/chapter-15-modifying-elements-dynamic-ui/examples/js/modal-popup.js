const modal = document.querySelector("#modal");

document.querySelector("#open-btn").addEventListener("click", function () {
  modal.classList.add("open");
});

document.querySelector("#close-btn").addEventListener("click", function () {
  modal.classList.remove("open");
});
