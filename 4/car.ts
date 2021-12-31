export abstract class Car {
  name: string;
  wheels: number;
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  abstract run();
}
