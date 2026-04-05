const prices = [10, 20, 30];
const doubled = prices.map((price) => price * 2);
const filtered = doubled.filter((price) => price > 20);
const total = filtered.reduce((sum, price) => sum + price, 0);

console.log(doubled, filtered, total);
