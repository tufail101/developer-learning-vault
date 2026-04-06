// This example shows a few common TypeScript utility types.

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductCard = Pick<Product, "id" | "name" | "price">;
type ProductUpdate = Partial<Product>;
type LockedProduct = Readonly<Product>;

const card: ProductCard = {
  id: 1,
  name: "Keyboard",
  price: 49.99,
};

const update: ProductUpdate = {
  price: 39.99,
};

const locked: LockedProduct = {
  id: 2,
  name: "Mouse",
  price: 19.99,
  description: "Wireless mouse",
};

console.log(card, update, locked);
