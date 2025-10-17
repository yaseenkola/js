// main.js
// This is the main file that imports functions from mathUtils.js and the Rectangle class from geometryUtils.js.

// Importing named exports from mathUtils.js
import { add, subtract, multiply, divide } from "./mathUtils.mjs";

// Importing default export (Rectangle class) from geometryUtils.js
import Rectangle from "./geometryUtils.mjs";

// --- Using mathUtils functions ---
console.log("Basic Calculator Results:");
console.log(`Addition: ${add(6, 4)}`);
console.log(`Subtraction: ${subtract(10, 6)}`);
console.log(`Multiplication: ${multiply(4, 6)}`);
console.log(`Division: ${divide(8, 4)}`);
console.log(`Division by Zero: ${divide(10, 0)}`); // testing error handling

// --- Using geometryUtils class ---
console.log("\nGeometry Utils - Rectangle Area:");
const myRectangle = new Rectangle(5, 3);
console.log(`Length: ${myRectangle.length}, Breadth: ${myRectangle.breadth}`);
console.log(`Area of Rectangle: ${myRectangle.getArea()}`);
