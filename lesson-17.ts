// Statically Type String Literals with Template Literal Types in TypeScript

type Dimension = "block" | "inline";
type Direction = "start" | "end";
// type MarginProperty = "margin-block" | "margin-inline";
type MarginProperty = `margin-${Dimension}-${Direction}`;
type MarginValue = number;
// type MarginValue = `${number}px`;
// type MarginValue = `${number}${"px" | "vh" | "vw"}`;
type MarginDeclaration = [MarginProperty, MarginValue];

const margin: MarginDeclaration = ["margin-block-start", 16];
