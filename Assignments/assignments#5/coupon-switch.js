// 📝 Assignment 05: Apply Discounts

// Hardcoded bill total
let total = 2000;

// Hardcoded coupon code
let couponCode = "DISC10";

// Variable to store discount percentage
let discountPercent = 0;

// Apply discount based on coupon code
switch (couponCode) {
  case "DISC5":
    discountPercent = 5;
    break;
  case "DISC10":
    discountPercent = 10;
    break;
  case "DISC20":
    discountPercent = 20;
    break;
  default:
    discountPercent = 0; // No coupon or invalid coupon
}

// Calculate final bill
let finalBill = total - (total * discountPercent) / 100;

// Display results
console.log("Original Bill: " + total);
console.log("Coupon Applied: " + couponCode);
console.log("Final Bill after Discount: " + finalBill);
