interface Product {
  id: number;
  name: string;
  price: number;
}

const usernames: string[] = ["kateryna", "bohdan", "sofia", "maksym"];
const ratings: number[] = [2, 3, 1, 4, 1];

const products: Product[] = [
  { id: 11, name: "Tablet", price: 14500 },
  { id: 22, name: "Headphones", price: 2100 },
  { id: 33, name: "Keyboard", price: 1600 },
];

console.log(usernames, ratings, products);
