document.querySelector("#save").addEventListener("click", function () {
  localStorage.setItem("theme", "dark");
  console.log(localStorage.getItem("theme"));
});
