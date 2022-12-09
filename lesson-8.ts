// Encapsulate Truly Private Variables in a Closure

function createCounter() {
  let value = 0;
  return {
    increment() {
      value += 1;
    },
    get count() {
      return value;
    },
  };
}

const counter2 = createCounter();
counter2.increment();
counter2.increment();
counter2.increment();

console.log(counter2.count);
