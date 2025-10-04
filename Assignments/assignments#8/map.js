const numbers = [4, 7, 12, 15, 9];

let modifiedNumbers = numbers.map((n) => {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n + 1;
  }
});

console.log(modifiedNumbers);
