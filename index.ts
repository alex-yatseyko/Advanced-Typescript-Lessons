function serializeJSON(value: any) {
  return JSON.stringify(value);
}

const user = {
  name: "Alex",
  age: 27,
};

const json = serializeJSON(user);

console.log(json);
