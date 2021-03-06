const obj = {
  key1: "value",
  key2: 0,
  key3: "deneme",
};

const keys = Object.keys(obj);
// console.log(keys.map((key) => obj[key]));

// console.log(Object.values(obj));

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
