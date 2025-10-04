const numbers = [12, 5, 8, 130, 44, 3, 25, 60, 7, 90];

let evenNumbers = numbers.filter((n) => {
  if (n % 2 === 0) {
    return n;
  }
});

console.log(evenNumbers);
