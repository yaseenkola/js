// mathUtils.js
// This module defines basic arithmetic functions and exports them using named exports.

// Function to add two numbers
export function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
export function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers (handles division by zero)
export function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}
