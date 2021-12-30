class Car {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
}
class Mercedes extends Car {
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
class BMW extends Car {
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
class Audi extends Car {
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
const e124 = new Mercedes("Mercedes e 124", 4, 4, "V5");
const mcLaren = new Mercedes("Mercedes McLaren", 4, 2, "V8");
const m3 = new BMW("BMW M3", 4, 2, "V6", false);
const z3 = new BMW("BMW Z3", 4, 2, "v8", true);
const r8 = new Audi("Audi r8", 4, 2, "v8");
const a6 = new Audi("Audi a6", 4, 4, "v5");
console.log(e124.getInfo());
console.log(mcLaren.getInfo());
console.log(m3.getInfo());
console.log(z3.getInfo());
console.log(r8.getInfo());
console.log(a6.getInfo());
//# sourceMappingURL=app.js.map