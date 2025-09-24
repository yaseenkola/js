let courses = ["Java", "Python", "MERN"];

// Change a value
courses[1] = "Golang";

// Add new courses
courses.push("MongoDB");
courses.push("ChatGPT & AI Tools");

console.log(courses);

// Remove the last course and log it
let lastCourse = courses.pop();
console.log(lastCourse);

// Show total number of courses
let courseCount = courses.length;
console.log(courseCount);

// Display list of courses
console.log("**** List of Courses *****");
for (let i = 0; i < courses.length; i++) {
  console.log(`Course #${i + 1} -> ${courses[i]}`);
}
