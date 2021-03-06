const key = "name";

const arr = [
  { id: 1, name: "zeki" },
  { id: 2, name: "özgür" },
];

const user = {
  id: 1,
  city: "izmir",
  [key]: "murat",
  cityUppercase: (str) => str.toUpperCase(),
};

user.cityUppercase(user.city);

console.log(user.cityUppercase(user.city));
