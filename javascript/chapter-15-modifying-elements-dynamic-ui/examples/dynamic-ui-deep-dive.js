/*
  Chapter 15 example: Dynamic UI Deep Dive
  This file demonstrates safe text updates, dynamic element creation,
  class toggling, dataset usage, and batching with DocumentFragment.
*/

const statusMessage = document.querySelector(".status-message");
const productGrid = document.querySelector(".product-grid");

if (statusMessage) {
  statusMessage.textContent = "Loading products...";
}

const products = [
  { id: 1, name: "Notebook", price: 5 },
  { id: 2, name: "Marker", price: 2 },
  { id: 3, name: "Sticky Notes", price: 3 },
];

if (productGrid) {
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("product-card");
    card.dataset.productId = String(product.id);

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    card.append(title, price);
    fragment.appendChild(card);
  });

  productGrid.appendChild(fragment);
}

const toggleButton = document.querySelector(".toggle-button");

if (toggleButton && statusMessage) {
  toggleButton.addEventListener("click", () => {
    statusMessage.classList.toggle("is-highlighted");
  });
}
