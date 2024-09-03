abstract class Employee {
  constructor(
    public name: string,
    public age: number,
    public salary: number
  ) {}

  abstract getAnnualBonus(): number;
}

interface Payable {
  pay(): void;
}

class Developer extends Employee implements Payable {
  getAnnualBonus(): number {
    return this.salary * 0.1;
  }

  pay(): void {
    console.log(`Paying to Developer ${this.name}`);
  }
}

class Manager extends Employee implements Payable {
  getAnnualBonus(): number {
    return this.salary * 0.2;
  }

  pay(): void {
    console.log(`Paying to Manager ${this.name}`);
  }
}

const employees: Employee[] = [
  new Developer('Alice', 30, 80000),
  new Developer('Bob', 25, 60000),
  new Manager('Charlie', 40, 100000),
  new Manager('David', 35, 90000),
];

let totalAnnualBonus = 0;

employees.forEach((employee) => {
  totalAnnualBonus += employee.getAnnualBonus();
});

console.log(`Total annual bonus for all employees: $${totalAnnualBonus}`);
