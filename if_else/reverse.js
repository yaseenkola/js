let n = 123;
console.log("Original Number = " + n);
console.log();
let reverse = 0;
let remainder = 0;

let i = 1;
while (n > 0) {
  remainder = n % 10; // Get last digit
  reverse = reverse * 10 + remainder; // Append digit to reverse
  n = Math.floor(n / 10); // Remove last digit
  i++;
}

console.log("***************************");
console.log("Reverse = " + reverse);
