class Person {
  constructor(name = "", age = 0) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class ExtendedPerson extends Person {
  constructor(name, surname) {
    super(undefined, null);
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const person = new ExtendedPerson("murat", "turkay");

console.log(typeof person);
