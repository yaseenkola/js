// double the values of elements in an array
let numbers = [6, 10, 25, 100, 9];
let doubles = [];
let n;

let len = numbers.length;
for (let i = 0; i < numbers.length; i++) {
  n = numbers[i];
  doubles.push(n * 2);
}
console.log(doubles);
