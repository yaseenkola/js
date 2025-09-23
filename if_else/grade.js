// Program to print grade based on percent (A >= 85; B >=75, C>=65, D>=35, F)
// 1. Input
// 2. Processing
// 3. Output

let percent = 90;
let grade = "";

if (percent >= 85) {
  grade = "A";
} else if (percent >= 75) {
  grade = "B";
} else if (percent >= 65) {
  grade = "C";
} else if (percent >= 35) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Percent = " + percent);
console.log("Grade = " + grade);
