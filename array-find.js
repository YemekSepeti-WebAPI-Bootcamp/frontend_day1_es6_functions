const users = [
  {
    id: 1,
    name: "Zeki Ünyıldız",
  },
  {
    id: 2,
    name: "Mustafa Can Kırma",
  },
  { id: 3, name: "Şafak Yıldız" },
];

const user = users.find((item) => item.name.startsWith("Zeki"));
console.log({ user });
