let result = "";
let grade = "A";

switch (grade) {
  case "A":
    result = "You scored Distinction!";
    break;
  case "B":
    result = "You scored First Class!";
    break;
  case "C":
    result = "You scored Second Class!";
    break;
  case "D":
    result = "You just Passed!";
    break;
  case "F":
    result = "You Failed.. Better luck next time!";
    break;
  default:
    result = "Invalid Grade!";
    break;
}

console.log("Result: " + result);
