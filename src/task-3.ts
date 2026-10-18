interface Product {
  id: number;
  name: string;
  price: number;
}

const usernames: string[] = ["alex", "maria", "ivan", "olena"];
const ratings: number[] = [4, 5, 3, 5, 2];

const products: Product[] = [
  { id: 1, name: "Laptop", price: 32000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Monitor", price: 9500 },
];

console.log(usernames, ratings, products);
