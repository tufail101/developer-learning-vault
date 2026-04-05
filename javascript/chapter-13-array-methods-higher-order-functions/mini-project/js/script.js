const items = [10, 30, 50];
const saleItems = items.map((item) => item * 0.9);
const chosenItems = saleItems.filter((item) => item > 20);
const total = chosenItems.reduce((sum, item) => sum + item, 0);

console.log(total);
