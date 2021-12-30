class Dictionary {
    add(key, value, description) {
        this._key = key;
        this._value = value;
        this._description = description;
    }
    show() {
        console.log(`Key: ${this.key}, Value: ${this.value}, Description: ${this.description}`);
    }
    get key() {
        return this._key;
    }
    set key(key) {
        this._key = key;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
}
const temp = new Dictionary();
const temp2 = new Dictionary();
temp.add(1, "first", "firstTest");
temp.show();
temp2.add("Second", 2, "secondTest");
temp2.show();
// temp.key = 1;
// temp.value = "first";
// temp.description = "firstTEst";
// temp.show();
//# sourceMappingURL=app.js.map