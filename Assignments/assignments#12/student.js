// Solution 1: Add More Students and Remove the First 3
let students = [
  { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];

function addMoreStudents(name, age, marks) {
  // Remove the first 3 students only once, not every time
  if (students.length > 3) {
    students.splice(0, 3); // removes the first 3 elements
  }

  students.push({ name, age, marks });
}

addMoreStudents("Yaseen", 39, 85);
addMoreStudents("Yusuf", 37, 92);
addMoreStudents("Yaqoob", 35, 78);

console.log("Solution 1 - Final Students List:");
console.log(students);
console.log("*************************************************");

// Solution 2: Display Each Student’s Marks
let student_2 = [
  { name: "Yaseen", age: 18, marks: 85 },
  { name: "Yusuf", age: 19, marks: 92 },
  { name: "Yaqoob", age: 17, marks: 78 },
];

console.log("Solution 2 - Students and Their Marks:");
for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}
console.log("*************************************************");

// Solution 3: Filter Students Who Scored More Than 80
let students_3 = [
  { name: "Yaseen", age: 39, marks: 85 },
  { name: "Yusuf", age: 37, marks: 92 },
  { name: "Yaqoob", age: 35, marks: 78 },
];

const filteredMarks = students.filter((student) => student.marks > 80);
console.log("Solution 3 - Toppers (Marks > 80):");
console.log(JSON.stringify(filteredMarks, null, 2)); // Pretty print JSON
console.log("*************************************************");

// Solution 4: Extract Only Student Names
let students_4 = [
  { name: "Yaseen", age: 39, marks: 100 },
  { name: "Yusuf", age: 37, marks: 99 },
  { name: "Yaqoob", age: 35, marks: 97 },
];

const studentNames = students.map((student) => student.name);
console.log("Solution 4 - Student Names:");
console.log(studentNames);
console.log("*************************************************");

// Solution 5: Calculate Total Marks
let students_5 = [
  { name: "Yaseen", age: 39, marks: 100 },
  { name: "Yusuf", age: 37, marks: 99 },
  { name: "Yaqoob", age: 35, marks: 97 },
];

const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
console.log("Solution 5 - Total Marks:");
console.log(`Total Marks: ${totalMarks}`);
console.log("*************************************************");

// Solution 6: Calculate Average Marks
let students_6 = [
  { name: "Yaseen", age: 39, marks: 100 },
  { name: "Yusuf", age: 37, marks: 99 },
  { name: "Yaqoob", age: 35, marks: 97 },
];

const totalMarks_ = students.reduce((acc, student) => acc + student.marks, 0);
let avg = totalMarks_ / students.length;

console.log("Solution 6 - Average Marks:");
console.log(`Average Marks = ${avg}`);
console.log("*************************************************");
