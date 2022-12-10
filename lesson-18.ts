// Use TypeScript's Mapped Types and Template Literal Types Together

function createGetterObject<TObj extends Record<string, any>>(
  obj: TObj
): PropGetter<TObj> {
  const newObj: any = {};
  for (const key of Object.keys(obj)) {
    const capitalizedKey = key[0].toUpperCase() + key.substring(1);
    const getterKey = `get${capitalizedKey}`;
    newObj[getterKey] = () => obj[key];
  }
  return newObj;
}

type PropGetter<TObj extends Record<string, any>> = {
  [TKey in string & keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

const user_ = createGetterObject({
  name: "Alex Yatseyko",
  twitter: "alex_yatseyko",
});
console.log(user_);
console.log(user_.getName());
