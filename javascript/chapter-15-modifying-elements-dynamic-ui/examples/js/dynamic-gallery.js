const images = ["Image 1", "Image 2", "Image 3"];
const gallery = document.querySelector("#gallery");

images.forEach(function (imageLabel) {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.textContent = imageLabel;
  gallery.appendChild(card);
});
