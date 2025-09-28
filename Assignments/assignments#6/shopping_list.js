let shoppingList = ["Apple", "Banana", "Carrot", "Tomato", "Basmati Rice"];

console.log(`Total number of items are ${shoppingList.length}.`);

let hasMilk = shoppingList.includes("Milk");
console.log(`Is Milk present? ${hasMilk}`);

if (!hasMilk) {
  shoppingList.unshift("Milk");
  console.log(`"Milk" was not in the list, so it has been added.`);
}

console.log("Updated shopping list:", shoppingList);
