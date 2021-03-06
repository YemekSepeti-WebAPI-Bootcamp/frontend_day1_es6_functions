const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   toplam += arr[i];
// }

// arr.map((item) => {
//   toplam += item;
// });

// let toplam = 0;

const toplam = arr.reduce((prev, cur, index, array) => {
  console.log(`prev: ${prev}  cur:${cur}`, index, array);
  return prev + cur;
}, 0);

console.log(toplam);
