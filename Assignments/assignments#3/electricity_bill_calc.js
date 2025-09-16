// Hardcoded values
let name = "Yaseen Kola";
let cons_no = 191;
let unit = 450;
let bill = 0;

// Calculate bill based on slab rates
if (unit <= 100) {
  bill = unit * 1.5;
} else if (unit <= 200) {
  bill = 100 * 1.5 + (unit - 100) * 2.5;
} else if (unit <= 400) {
  bill = 100 * 1.5 + 100 * 2.5 + (unit - 200) * 3.5;
} else {
  bill = 100 * 1.5 + 100 * 2.5 + 200 * 3.5 + (unit - 400) * 4.0;
}

// Print the result
console.log("Consumer Name: " + name);
console.log("Consumer No: " + cons_no);
console.log("Units Consumed: " + unit);
console.log("Bill Amount: " + bill + " Rs");
