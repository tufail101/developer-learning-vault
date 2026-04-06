/*
  Chapter 14 example: DOM Selection Deep Dive
  Paste this into a browser console on a page with matching elements,
  or connect it to a small HTML file to see DOM selection and traversal in action.
*/

const title = document.getElementById("page-title");
const firstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");

console.log("Title:", title);
console.log("First card:", firstCard);
console.log("All cards (static NodeList):", allCards);

allCards.forEach((card, index) => {
  console.log(`Card ${index + 1}:`, card.textContent.trim());
});

if (firstCard) {
  console.log("Parent element:", firstCard.parentElement);
  console.log("Next sibling:", firstCard.nextElementSibling);
}

const liveItems = document.getElementsByClassName("item");
console.log("Live HTMLCollection length:", liveItems.length);

// If you add another element with class="item" in the page,
// the length above changes automatically because this collection is live.
