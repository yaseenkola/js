class Course {
  // Properties
  title;
  duration;
  fee;
  description;

  // Properties Initialization
  constructor(title, duration, fee, description) {
    this.title = title;
    this.duration = duration;
    this.fee = fee;
    this.description = description;
  }

  // Methods
  printDetails() {
    console.log(`
        *************Course Details**************
        Title - ${this.title}
        Duration - ${this.duration}
        Fee - ${this.fee}
        Description - ${this.description}
        *****************************************
        `);
  }

  applyDiscount(percent) {
    let discountAmount = (this.fee * percent) / 100;
    let totalAmount = this.fee - discountAmount;
    console.log(
      `The total fee for mastering "${this.description}" after applying a ${percent}% discount is ${totalAmount}. You saved ${discountAmount}.`
    );
  }
}

let course1 = new Course(
  "MERN Stack",
  "120 Days",
  18000,
  "Mongo DB, Express JS, React JS, Node JS"
);

course1.printDetails();
course1.applyDiscount(10);

let course2 = new Course(
  "Python Full Stack",
  "100 Days",
  15000,
  "Python, Django, MySQL, React"
);

course2.printDetails();
course2.applyDiscount(10);

let course3 = new Course(
  "AWS Cloud Practitioner",
  "45 Days",
  12000,
  "AWS Basics, EC2, S3, IAM, Cloud Concepts"
);

course3.printDetails();

course3.applyDiscount(10);
