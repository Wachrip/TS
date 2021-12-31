import { Car } from "./car.js";
export class BMW extends Car {
    constructor(name, wheels, doors, engine, isCabriolet) {
        super(name, wheels);
        this.doors = doors;
        this.engine = engine;
        this.isCabriolet = isCabriolet;
    }
    run() {
        return `${this.name} runs`;
    }
    getInfo() {
        return `${this.name} has ${this.wheels} wheels and ${this.doors} doors.
    The engine is ${this.engine}. Is it cabriolet? ${this.isCabriolet}`;
    }
}
//# sourceMappingURL=bmw.js.map