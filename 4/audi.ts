import { Car } from "./car.js";

export class Audi extends Car {
  doors: number;
  engine: string;
  constructor(name, wheels, doors, engine) {
    super(name, wheels);
    this.doors = doors;
    this.engine = engine;
  }

  run(): string {
    return `${this.name} runs`;
  }

  getInfo(): string {
    return `${this.name} has ${this.wheels} wheels and ${this.doors} doors. The engine is ${this.engine}`;
  }
}
