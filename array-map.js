// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = arr.map((item, index, arrParam) => {
//   //   console.log(item, index, arrParam);
//   if (item > 4) return;
//   return item * 2;
// });

// console.log(newArr);

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

const newUsers = users.map((item) => {
  //   console.log(item);
  if (item.id !== 2) {
    item.token = Math.random();
    return item;
  }
});
console.log(newUsers);
