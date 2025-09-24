// 1. Create an array with 3 fruits
let fruits = ["Blueberry", "Logan", "Mangosteen"];
console.log(fruits);

// 2. Replace the second fruit
fruits[1] = "Plum";
console.log(fruits);

// 3. Add two new fruits to the end
fruits.push("Citron", "Peach");
console.log(fruits);

// 4. Remove the last fruit and store it
let lastFruit = fruits.pop();
console.log("Last fruit removed:", lastFruit);

// 5. Print total number of fruits
let size = fruits.length;
console.log("Total fruits:", size);

// 6. Loop through and print the list
console.log("**** Fruit Basket ****");
for (let index = 0; index < fruits.length; index++) {
  console.log(`Fruit #${index + 1} -> ${fruits[index]}`);
}
