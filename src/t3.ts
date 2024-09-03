abstract class Car {
  constructor(
    public color: string,
    protected make: string,
    protected model: string,
    private year: number,
  ) {}

  getDescription(): string {
    return `Make: ${this.make}, Year: ${this.year}, Model: ${this.model}, Color: ${this.color}`;
  }
}

class Toyota extends Car {
  private engineType: string;

  constructor(
    color: string,
    model: string,
    year: number,
    engineType: string
  ) {
    super(color, 'Toyota', model, year);
    this.engineType = engineType;
  }

  getDescription(): string {
    return `${super.getDescription()}, Engine Type: ${this.engineType}`;
  }
}

class Ford extends Car {
  private engineCapacity: number;

  constructor(
    color: string,
    model: string,
    year: number,
    engineCapacity: number
  ) {
    super(color, 'Ford', model, year);
    this.engineCapacity = engineCapacity;
  }

  getDescription(): string {
    return `${super.getDescription()}, Engine Capacity: ${this.engineCapacity}L`;
  }
}

class BMW extends Car {
  private sportPackage: boolean;

  constructor(
    color: string,
    model: string,
    year: number,
    sportPackage: boolean
  ) {
    super(color, 'BMW', model, year);
    this.sportPackage = sportPackage;
  }

  getDescription(): string {
    return `${super.getDescription()}, Sport Package: ${this.sportPackage ? 'Yes' : 'No'}`;
  }
}

const cars: Car[] = [
  new Toyota('Red', 'Camry', 2020, 'Hybrid'),
  new Toyota('Blue', 'Corolla', 2021, 'Gasoline'),
  new Ford('White', 'Fiesta', 2019, 1.6),
  new Ford('Black', 'Mustang', 2022, 5.0),
  new BMW('Silver', 'X5', 2021, true),
  new BMW('Blue', '3 Series', 2023, false),
];

cars.forEach((car: any) => console.log(car.getDescription()));
