const slides = ["Slide 1", "Slide 2", "Slide 3"];
let currentIndex = 0;

document.querySelector("#next-btn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % slides.length;
  document.querySelector("#slide-text").textContent = slides[currentIndex];
});
