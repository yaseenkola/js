// JavaScript equivalent of above Java program
// Need to add Math.Floor() to get integer part and ignore the decimal part

let n = 676;
let nCopy = n;

let reverse = 0;
let remainder = 0;

while (n > 0) {
  remainder = n % 10; // Get last digit
  reverse = reverse * 10 + remainder; // Append digit to reverse
  n = Math.floor(n / 10); // Remove last digit
}

console.log("Reverse = " + reverse);

if (nCopy === reverse) {
  console.log("It is a Palindrome");
} else {
  console.log("It is not a Palindrome");
}
