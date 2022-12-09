// Declare Read-Only Tuple Types in TypeScript

function swap<T, U>(tuple: readonly [T, U]): [U, T] {
  const [first, second] = tuple;
  return [second, first];
}

// const keyValuePair: [number, string] = [1, "one"];
const keyValuePair: readonly [number, string] = [1, "one"];

const valueKeyPair = swap(keyValuePair);

console.log(valueKeyPair);
console.log(keyValuePair);
