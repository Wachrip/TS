import { Car } from "./car.js";
export class Audi extends Car {
    constructor(name, wheels, doors, engine) {
        super(name, wheels);
        this.doors = doors;
        this.engine = engine;
    }
    run() {
        return `${this.name} runs`;
    }
    getInfo() {
        return `${this.name} has ${this.wheels} wheels and ${this.doors} doors. The engine is ${this.engine}`;
    }
}
//# sourceMappingURL=audi.js.map