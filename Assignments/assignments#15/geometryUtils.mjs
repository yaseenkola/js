// geometryUtils.js
// Default export: Rectangle class using length and breadth

export default class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  // Method to calculate area
  getArea() {
    return this.length * this.breadth;
  }
}
