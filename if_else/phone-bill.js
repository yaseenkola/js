// let previousReading = 300;
// let presentReading = 490;
// let calls = presentReading - previousReading;

let calls = 150;

let totalBill;
if (calls <= 100) {
  totalBill = 0;
} else if (calls > 200) {
  totalBill = (calls - 200) * 0.8 + (calls - 200) * 0.9;
} else {
  totalBill = (calls - 100) * 0.9;
}
console.log("Total Bill = " + totalBill);
