// const arr = [1, 2, 3, 4, 5];

// const [x, y, ...rest] = arr;

// console.log(rest);

const user = {
  name: "murat",
  surname: "turkay",
  password: "1234",
  city: {
    name: "İzmir",
    uniq: 35,
  },
};

const hobbies = {
  hobby1: "football",
  hobby2: "basketball",
  hobby3: "chess",
  city: { name: "İstanbul" },
};

const { hobby1, hobby2, hobby3 } = hobbies;

const advencedUser = { hobby1, hobby2, hobby3, ...user };

console.log(advencedUser);

const arr = [1, 2, 3, 4, 5];

