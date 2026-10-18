interface Product {
  readonly id: number;
  name: string;
  price: number;
  inStock: boolean;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "Mechanical keyboard",
  price: 2499,
  inStock: true,
  description: "Keyboard with brown switches",
};

console.log(product);
