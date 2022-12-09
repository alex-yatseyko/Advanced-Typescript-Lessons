// Prevent Type Widening of Array Literals with TypeScript's const Assertions

const ARRAY = [0, 0] as const;

// ARRAY[0] = 1; - we can't do this

// Declare Read-Only Tuple Types in TypeScript

function swap2<T, U>(tuple: readonly [T, U]): [U, T] {
  const [first, second] = tuple;
  return [second, first];
}

// const keyValuePair: [number, string] = [1, "one"];
const keyValuePair2 = [1, "one"] as const; // !!!! We can use as const there too
const valueKeyPair2 = swap2(keyValuePair);

console.log(valueKeyPair2);
console.log(keyValuePair2);

const digitNames = [
  [0, "zero"],
  [1, "one"],
  [2, "two"],
] as const;
