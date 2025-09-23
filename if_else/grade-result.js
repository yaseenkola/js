let result = "";
grade = "A";
if (grade == "A") {
  result = "You scored Distinction!";
} else if (grade == "B") {
  result = "You scored First Class!";
} else if (grade == "C") {
  result = "You scored Second Class!";
} else if (grade == "D") {
  result = "You just Passed!";
} else if (grade == "F") {
  result = "You Failed.. Better luck next time!";
} else {
  result = "Invalid Grade!";
}

console.log("Result: " + result);
