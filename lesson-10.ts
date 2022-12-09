// Declare Read-Only Array Types in TypeScript

function intersperse<T>(array: T[], separator: T): T[] {
  const newArray: T[] = [];
  for (const element of array) {
    if (newArray.length !== 0) {
      newArray.push(separator);
    }
    newArray.push(element);
  }
  return newArray;
}

const values: string[] = ["A", "B", "C"];
// const values: readonly string[] = ["A", "B", "C"];
// const values: ReadonlyArray<string> = ["A", "B", "C"];
const valuesWithSeparators = intersperse(values, "X");

console.log(values);
console.log(valuesWithSeparators);
