const quotes = ["Keep going.", "Build step by step.", "Practice beats guessing."];

const showQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector("#quote-text").textContent = `${randomQuote}`;
};

document.querySelector("#quote-btn").addEventListener("click", showQuote);
