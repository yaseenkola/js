let courses = [
  { title: "Full Stack Development", duration: "6 Months", price: 18000 },
  { title: "Data Science", duration: "5 Months", price: 20000 },
  { title: "AWS Cloud", duration: "3 Months", price: 15000 },
  { title: "UI/UX Design", duration: "4 Months", price: 16000 },
];

let updatedCourses = courses.map((course) => ({
  title: course.title,
  duration: course.duration,
  oldPrice: `AED ${course.price}`,
  newPrice: `AED ${course.price-2000}`,
}));


// Reduce each course price by AED 2,000
console.log("Updated Course Prices:", updatedCourses);
console.table(updatedCourses);
