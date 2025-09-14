let n = 5; // number of rows

for (let i = 1; i <= n; i++) {
  // Outer loop: controls the number of rows

  let line = "";

  // Inner loop 1: prints leading spaces before the stars
  for (let s = 1; s <= n - i; s++) {
    line += " ";
  }

  // Inner loop 2: prints stars followed by a space in each row
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  // Print the constructed line for the current row
  console.log(line);
}

console.log();

console.log("Printing Pyramid Pattern for the number of rows is equal to 15;");

console.log();

// For number of rows is equal to 15

let rows = 15; // different variable name

for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let s = 1; s <= rows - i; s++) {
    line += " ";
  }

  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  console.log(line);
}
