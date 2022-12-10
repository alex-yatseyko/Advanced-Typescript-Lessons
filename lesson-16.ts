// Implement a ReturnTypeOf<T> Conditional Type in TypeScript

type ReturnTypeOf<T> = T extends (...args: any) => infer U ? U : any;

// ReturnType - built-it in type to obtain the return type of a function type
