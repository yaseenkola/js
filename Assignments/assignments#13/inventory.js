// Product list
let products = [
  { name: "Laptop", price: 900, stock: 20 },
  { name: "Mouse", price: 25, stock: 100 },
  { name: "Monitor", price: 150, stock: 50 },
];

// Add more products
products.push(
  { name: "Keyboard", price: 101, stock: 51 },
  { name: "Headphones", price: 151, stock: 31 }
);

console.log("All Products:", products);

// Create a table-friendly object with product indexes as keys
let productTable = {};

products.forEach((product, index) => {
  productTable[index + 1] = product;
});

console.table(productTable);

// Filter affordable products (price < 100)
const affordableProducts = products.filter((product) => product.price < 100);

console.log("Affordable Products (< 100):", affordableProducts);

// Calculate total and average price
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

const averagePrice = totalPrice / products.length;

console.log("Total Price of All Products:", totalPrice);
console.log("Average Product Price:", averagePrice.toFixed(2));

// Extract product names
const productNames = products.map((product) => product.name);

console.log("Product Names:", productNames);

// Calculate total stock count (fixed the logic — should use 'stock', not 'price')
const totalStockCount = products.reduce(
  (sum, product) => sum + product.stock,
  0
);

console.log("Total Stock Count:", totalStockCount);
