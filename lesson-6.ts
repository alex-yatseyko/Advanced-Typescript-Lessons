class Counter {
  //   _value = 0; // This property is private. It's available only in class, but it's just a naming
  private _value = 0;

  increment() {
    this._value += 1;
  }

  get count() {
    return this._value;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();

// counter._value = -100
// counter["_value"].= 100 // Will break the private modifier

console.log(counter.count);
