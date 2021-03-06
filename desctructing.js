const user = {
  name: "murat",
  surname: "turkay",
  password: "1234",
  city: {
    name: "İzmir",
    uniq: 35,
  },
};

function login({ name, surname, password, city: { uniq: plate } }) {
  console.log(name, surname, password, plate);
}

login(user);
