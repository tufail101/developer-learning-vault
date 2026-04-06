function calculateCartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

console.log(
  calculateCartTotal([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 1 },
  ])
);
