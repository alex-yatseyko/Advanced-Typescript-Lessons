// T extends U ? X : Y
// Implement a NonNullish<T> Conditional Type in TypeScript

type NonNullish<T> = T extends null | undefined ? never : T;

// type NonNullable - default value of what is avove

// never and void difference: () => void (in case function returns undefined or null (happens in most cases), never in case function doesn't return anything: in case thrwo Error or while loop inside that never return anything)

type EmaailRecipent = string | string[] | null | undefined;

type NonNullableEmailRecipent = NonNullable<
  string | string[] | null | undefined
>;
