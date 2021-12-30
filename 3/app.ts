class Dictionary<Tkey, Tvalue, Tdescription> {
  private _key: Tkey;
  private _value: Tvalue;
  private _description: Tdescription;

  add(key: Tkey, value: Tvalue, description: Tdescription): void {
    this._key = key;
    this._value = value;
    this._description = description;
  }

  show(): void {
    console.log(
      `Key: ${this.key}, Value: ${this.value}, Description: ${this.description}`
    );
  }

  public get key(): Tkey {
    return this._key;
  }

  public set key(key: Tkey) {
    this._key = key;
  }

  public get value(): Tvalue {
    return this._value;
  }

  public set value(value: Tvalue) {
    this._value = value;
  }

  public get description(): Tdescription {
    return this._description;
  }

  public set description(description: Tdescription) {
    this._description = description;
  }
}

const temp = new Dictionary<number, string, string>();
const temp2 = new Dictionary<string, number, string>();
temp.add(1, "first", "firstTest");
temp.show();
temp2.add("Second", 2, "secondTest");
temp2.show();
// temp.key = 1;
// temp.value = "first";
// temp.description = "firstTEst";
// temp.show();
