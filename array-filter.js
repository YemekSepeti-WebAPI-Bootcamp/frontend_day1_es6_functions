const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((item, index, arr) => {
  //   console.log(item, index, arr);
  return item > 5;
});

console.log(newArr);
