interface Animal {
  name: string;
  age: number;
  codeName?: string;
  move(): void;
}

class Cat implements Animal {
  constructor(
    public name: string,
    public age: number,
  ) { }

  move(): void {
    console.log('Cat\'s moving...');
  }
}

class Bird implements Animal {
  constructor(
    public name: string,
    public age: number,
    public codeName: string,
  ) { }

  move(): void {
    console.log('Bird\'s moving...');
  }
}

class Fish implements Animal {
  constructor(
    public name: string,
    public age: number,
  ) { }

  move(): void {
    console.log('Bird\'s moving...');
  }
}
