// 1.Use the Optional Chaining Operator in TypeScript
// 2.Use the Nullish Coalescing Operator in TypeScript ??

type SerializeOptions = {
  formatting?: {
    indent?: number;
    getIndent?: () => number;
  };
};

function serializeJSON(value: any, options?: SerializeOptions) {
  const indent =
    options?.formatting?.indent ?? options?.formatting?.getIndent?.() ?? 2;
  return JSON.stringify(value, null, indent);
}

const user = {
  name: "Alex",
  age: 27,
};

const json = serializeJSON(user, {
  formatting: {
    // indent: 2,
    // getIndent: () => 2,
  },
});

console.log(json);
