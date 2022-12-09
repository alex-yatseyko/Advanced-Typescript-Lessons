// Statically Type Unknown Values with TypeScript's unknown Type
// Narrow the unknown Type with TypeScript's Assertion Functions

let value: unknown;
value = true;
value = 41;
value = {};
value = [];
value = Math.random();
value = "Hello World";
value = undefined;

if (typeof value === "string") {
  const uppercasedText = value.toUpperCase();
  console.log(uppercasedText);
}

// function assert(condition: boolean, message: string): asserts condition {
//   if (!condition) {
//     throw Error(message);
//   }
// }

function asserIsNumber(value: unknown, name: string): asserts value is number {
  if (typeof value !== "number") {
    throw Error(`Espected ${name} to be a number`);
  }
}

function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  //   assert(
  //     typeof from === "number" || typeof to === "number",
  //     "range() expects exactly 2 numbers"
  //   );

  //   assert(typeof from === "number", "Form should be number");
  //   assert(typeof to === "number", "To should be number");

  asserIsNumber(from, "From");
  asserIsNumber(to, "To");

  //   if (typeof from !== "number" || typeof to !== "number") {
  //     throw Error("range() expects exactly 2 numbers");
  //   }

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}

console.log(range(0, 5));
// console.log(range(0, "T" as any));
// console.log(range("F" as any, 5));
