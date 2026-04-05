const images = ["Mountain", "Beach", "City"];
const gallery = document.querySelector("#gallery");

images.forEach(function (label) {
  const card = document.createElement("div");
  card.className = "image-card";
  card.textContent = label;
  gallery.appendChild(card);
});
