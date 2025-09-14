for (let i = 5; i >= 1; i--) {
  // Outer loop: controls the number of rows, starts from 5 and decreases to 1

  let number = "";

  for (let j = 1; j <= i; j++) {
    // Inner loop: prints numbers from 1 up to the current row number i
    number += j + " "; // append the number followed by a space
  }

  console.log(number); // prints the constructed line for the current row
}

console.log();

console.log(
  "Printing Reverse Number Pattern for the number of rows is equal to 15;"
);

console.log();

// For number of rows is equal to 15

for (let i = 15; i >= 1; i--) {
  // Outer loop: controls the number of rows, starts from 5 and decreases to 1

  let number = "";

  for (let j = 1; j <= i; j++) {
    // Inner loop: prints numbers from 1 up to the current row number i
    number += j + " "; // append the number followed by a space
  }

  console.log(number); // prints the constructed line for the current row
}
