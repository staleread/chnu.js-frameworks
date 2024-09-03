interface Shape {
  getArea(): number;
  getPerimeter(): number;
  scale(factor: number): void;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  scale(factor: number): void {
    this.radius *= factor;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  scale(factor: number): void {
    this.width *= factor;
    this.height *= factor;
  }
}

class Triangle implements Shape {
  constructor(
    public sideA: number,
    public sideB: number,
    public sideC: number
  ) {}

  getArea(): number {
    const semiPerimeter = this.getPerimeter() / 2;
    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.sideA) *
        (semiPerimeter - this.sideB) *
        (semiPerimeter - this.sideC)
    );
  }

  getPerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }

  scale(factor: number): void {
    this.sideA *= factor;
    this.sideB *= factor;
    this.sideC *= factor;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5),
];

let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
  totalArea += shape.getArea();
  totalPerimeter += shape.getPerimeter();
}

console.log(`total area: ${totalArea}`);
console.log(`total perimeter: ${totalPerimeter}`);

