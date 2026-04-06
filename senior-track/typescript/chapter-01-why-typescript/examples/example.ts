function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

console.log(formatPrice(19.99));
