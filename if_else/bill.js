let calls = 150;

let totalBill;
if (calls <= 100) {
  totalBill = 0;
} else if (calls > 100) {
  totalBill = (calls - 100) * 1;
}

console.log("Total Bill = " + totalBill);
