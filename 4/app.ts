import { Mercedes } from "./mercedes.js";
import { BMW } from "./bmw.js";
import { Audi } from "./audi.js";

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
