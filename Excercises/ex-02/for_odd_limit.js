function printOdds(limit) {
  for (num = 1; num <= limit; num++) {
    if (num % 2 != 0) {
      console.log(num);
    }
  }
}

printOdds(30);
