class Product {
  // Properties
  name;
  price;
  quantity;

  // Properties Initialization
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Methods
  calculateTotalValue() {
    return this.price * this.quantity;
  }

  applyDiscount(discountPercentage) {
    let discount = (this.price * discountPercentage) / 100;
    return (this.price = this.price - discount);
  }

  restock(newQuantity) {
    return (this.quantity = this.quantity + newQuantity);
  }
}

const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);

console.log(product1.calculateTotalValue()); // Output: 4500
product2.applyDiscount(10);
console.log(product2.price); // Output: 630
product3.restock(10);
console.log(product3.quantity); // Output: 25
