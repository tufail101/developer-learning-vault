interface Product {
  id: number;
  name: string;
  price: number;
  featured?: boolean;
}

type SortOrder = "asc" | "desc";

const notebook: Product = {
  id: 1,
  name: "Notebook",
  price: 12,
};

const currentSort: SortOrder = "asc";

console.log(notebook, currentSort);
