/* Project: Ecommerce UI | Skills: cart state, totals, remove actions, slide-in sidebar toggle */

// Store cart items in memory so the UI can be updated from one source of truth.
const cart = [];

const cartToggle = document.querySelector("#cart-toggle");
const closeCartButton = document.querySelector("#close-cart");
const cartSidebar = document.querySelector("#cart-sidebar");
const overlay = document.querySelector("#overlay");
const cartItemsContainer = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const addButtons = Array.from(document.querySelectorAll(".add-to-cart"));

function openCart() {
  cartSidebar.classList.add("open");
  overlay.classList.add("visible");
}

function closeCart() {
  cartSidebar.classList.remove("open");
  overlay.classList.remove("visible");
}

function updateCartUI() {
  cartCount.textContent = cart.length;
  const total = cart.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
  cartTotal.textContent = `$${total}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-state">Your cart is empty.</p>';
    return;
  }

  cartItemsContainer.innerHTML = "";

  cart.forEach(function (item, index) {
    const row = document.createElement("article");
    row.className = "cart-item";

    const textWrap = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = item.name;
    const price = document.createElement("p");
    price.textContent = `$${item.price}`;

    textWrap.appendChild(title);
    textWrap.appendChild(price);

    const removeButton = document.createElement("button");
    removeButton.className = "remove-item";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      cart.splice(index, 1);
      updateCartUI();
    });

    row.appendChild(textWrap);
    row.appendChild(removeButton);
    cartItemsContainer.appendChild(row);
  });
}

// Add selected products to the cart from product card button clicks.
addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".product-card");
    cart.push({
      id: card.dataset.id,
      name: card.dataset.name,
      price: Number(card.dataset.price),
    });
    updateCartUI();
    openCart();
  });
});

cartToggle.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
