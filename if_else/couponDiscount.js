let billAmount = 1000; // original price
let couponCode = 25; // example input (25 means 25% off)
let discount = 0;

// decide discount based on coupon
switch (couponCode) {
  case 25:
    discount = 25;
    break;
  case 20:
    discount = 20;
    break;
  case 15:
    discount = 15;
    break;
  case 10:
    discount = 10;
    break;
  default:
    discount = 0; // invalid or no discount
    break;
}

// calculate final price
let finalPrice = billAmount - (billAmount * discount) / 100;

// output
if (discount > 0) {
  console.log("Original Price = " + billAmount);
  console.log("Coupon Applied = " + couponCode + "% OFF");
  console.log("Final Price = " + finalPrice);
} else {
  console.log("Invalid coupon code! Final Price = " + billAmount);
}
