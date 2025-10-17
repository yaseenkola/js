// Assignment 15: Exploring forEach() and the Spread Operator in JavaScript
// Objective: To understand and apply the forEach() method and the spread operator

// Part A: Understanding forEach()

// Task 1: Using forEach() with Simple Arrays
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// Print each fruit in uppercase
console.log("Fruits in Uppercase:");
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

// Print a message for each fruit
console.log("\nFruits I like:");
fruits.forEach((fruit) => console.log(`I like ${fruit}`));

// Array of numbers
let numbers = [10, 20, 30, 40, 50];

// Print square of each number
console.log("\nSquares of Numbers:");
numbers.forEach((num) => console.log(`Square of ${num} = ${num * num}`));

// Task 2: Using forEach() with an Array of Objects
let students = [
  { name: "Aisha", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Meena", marks: 78 },
];

let totalMarks = 0;

// Print each student's marks and calculate total
console.log("\nStudent Marks:");
students.forEach((student) => {
  console.log(`${student.name} scored ${student.marks} marks`);
  totalMarks += student.marks;
});

// Calculate and print average marks
let averageMarks = totalMarks / students.length;
console.log(`Average Marks = ${averageMarks}`);

// Part B: Exploring the Spread Operator (...)

// Task 3: Using Spread Operator with Arrays
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express", "MongoDB"];

// Combine arrays using spread operator
let fullStack = [...frontend, ...backend, "React"];

console.log("\nFrontend Technologies:", frontend);
console.log("Backend Technologies:", backend);
console.log("Full Stack Array:", fullStack);

// Task 4: Using Spread Operator with Objects
let student = { name: "Aisha", age: 21 };

// Copy object and add new properties
let studentDetails = {
  ...student,
  course: "Full Stack Development",
  city: "Mangalore",
};

console.log("\nOriginal Student Object:", student);
console.log("Student Details Object:", studentDetails);

// Bonus Task: Copying and Modifying Arrays
let colors = ["Red", "Green", "Blue"];
let newColors = [...colors]; // Copy array
newColors.push("Yellow"); // Modify copy

console.log("\nOriginal Colors:", colors);
console.log("Copied Colors:", newColors);
