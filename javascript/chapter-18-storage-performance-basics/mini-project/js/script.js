const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.style.background = "#111827";
}

document.querySelector("#theme-btn").addEventListener("click", function () {
  localStorage.setItem("theme", "dark");
  body.style.background = "#111827";
});
