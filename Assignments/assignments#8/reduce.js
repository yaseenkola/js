const bills = [250, 450, 300, 150, 600];

let totalBill = bills.reduce((totalBill, n) => totalBill + n);

console.log(`Total Bill = ${totalBill}`);
