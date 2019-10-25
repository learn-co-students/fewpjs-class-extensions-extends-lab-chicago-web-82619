class Polygon {
    constructor(arrSides) {
      this.arrSides = arrSides
      this.count = this.arrSides.length
    }
  
    get countSides() {
      return this.arrSides.length
    }
  
    get perimeter() {
      if (!Array.isArray(this.arrSides)) return;
      let sum = 0;
      for (var int of this.arrSides) {
        sum += int
      }
      return sum
    }
  }
  
  class Triangle extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.arrSides)) return;
      if (this.count !== 3) return;
      let side1 = this.arrSides[0]
      let side2 = this.arrSides[1]
      let side3 = this.arrSides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  
  class Square extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.arrSides)) return;
      if (this.count !== 4) return;
      let side1 = this.arrSides[0]
      let side2 = this.arrSides[1]
      let side3 = this.arrSides[2]
      let side4 = this.arrSides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.arrSides)) return;
      if (this.count !== 4) return;
      return this.arrSides[0] * this.arrSides[0]
    }
  }