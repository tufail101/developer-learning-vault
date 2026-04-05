/* Project: Blog UI | Skills: live search filtering and category-based UI state */

// Cache the category buttons, search input, and all post cards.
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const searchInput = document.querySelector("#search-input");
const postCards = Array.from(document.querySelectorAll(".post-card"));

let activeCategory = "all";

// Show or hide posts based on both the selected category and the search query.
function updateVisiblePosts() {
  const searchValue = searchInput.value.trim().toLowerCase();

  postCards.forEach(function (card) {
    const category = card.dataset.category;
    const title = card.dataset.title;

    const matchesCategory = activeCategory === "all" || category === activeCategory;
    const matchesSearch = title.includes(searchValue);

    card.classList.toggle("is-hidden", !(matchesCategory && matchesSearch));
  });
}

// Update the active category button when the learner chooses a new filter.
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    activeCategory = button.dataset.filter;

    filterButtons.forEach(function (item) {
      item.classList.toggle("active", item === button);
    });

    updateVisiblePosts();
  });
});

// Filter post titles live as the user types into the search box.
searchInput.addEventListener("input", updateVisiblePosts);
