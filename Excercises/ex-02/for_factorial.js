function printFactorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log("Factorial of " + n + " is " + fact);
}

printFactorial(3);
