interface Product {
  name: string;
  price: number;
  inStock: boolean;
  description?: string;
  readonly id: number;
}

const product: Product = {
  name: "Wireless mouse",
  price: 899,
  inStock: false,
  description: "Ergonomic mouse with adjustable DPI",
  id: 2,
};

console.log(product);
