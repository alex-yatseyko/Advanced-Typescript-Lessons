// Prevent Type Widening of Object Literals with TypeScript's const Assertions

// const ORIGIN: {
//   readonly x: number;
//   readonly y: number;
// } = {
const ORIGIN = {
  //   readonly x: 0, - this is impossible
  x: 0,
  y: 0,
} as const; // Gives a readonly properties

// ORIGIN.x = 1; // Can't do this becase as const
