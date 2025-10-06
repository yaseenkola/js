let name = "   Lenovo   "; // array of chars (string with spaces)
console.log(name); // prints the original string with spaces
console.log(name.length); // prints the length including spaces

let trimmedName = name.trim(); // removes leading and trailing spaces
console.log(trimmedName); // prints the trimmed string
console.log(trimmedName.length); // prints the length after trimming

console.log(trimmedName.toUpperCase()); // converts to uppercase
console.log(trimmedName.toLowerCase()); // converts to lowercase

console.log(trimmedName.indexOf("n")); // finds the first index of 'n'

let courseTitle = "Frontend Development using Angular";
let newCourseTitle = courseTitle.replace("Angular", "React"); // replaces 'Angular' with 'React'

console.log(newCourseTitle); // prints the new course title

let position = courseTitle.indexOf("Angular"); // finds the starting index of 'Angular'
console.log(position); // prints the index

let coursePart = courseTitle.substring(27, 35); // extracts substring from index 27 to 34
console.log(coursePart); // prints the extracted part

console.log(courseTitle.charAt(27)); // prints the character at index 27

let firstName = "Yaseen";
let lastName = "Kola";
let fullName = firstName.concat(" ", lastName); // concatenates first and last name with a space
console.log(fullName); // prints the full name

let topics = "JavaScript, TypeScript,React JS";
let topicsArray = topics.split(","); // splits the string into an array by comma
console.log(topicsArray); // prints the array of topics

let course2 = "Frontend Dev with React";
console.log(course2.includes("VueJS")); // checks if 'VueJS' is in the string (returns false)
