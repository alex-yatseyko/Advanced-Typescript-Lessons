// Statically Type Unknown Values with TypeScript's unknown Type

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

function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  if (typeof from !== "number" || typeof to !== "number") {
    throw Error("range() expects exactly 2 numbers");
  }

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}

console.log(range(0, 5));
