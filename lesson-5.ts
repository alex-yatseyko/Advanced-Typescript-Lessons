function asserIsNonNullish<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
}

type X = HTMLElement | null | undefined;
type Y = NonNullable<X>; // Removes null and undefined

const root = document.getElementById("root");

// if (root === null) {
//   throw Error("Couldn't find a dome element #root");
// }
asserIsNonNullish(root, "Couldn't find DOM element #root");

root?.addEventListener("click", (e: any) => {
  // ...
});
