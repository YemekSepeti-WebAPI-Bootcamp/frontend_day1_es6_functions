
class Person  {
  constructor(name) {
    this.name = name;
  }

  goToClassroom() {}
}

class Teacher extends Person {
  constructor(name) {
    super(name);
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.classrooms = [];
  }

  setClassRoom(classroom) {
    console.log(classroom);
    this.classrooms.push(classroom);
  }
}

class Classroom {
  constructor(name) {
    this.name = name;
  }

  setTeacher(teacher) {
    this.teacher = teacher;
  }
}

const murat = new Teacher("murat");
const sadettin = new Student("Sadettin");
const react = new Classroom("react");
react.setTeacher(murat);

sadettin.setClassRoom(react);

console.log(sadettin.classrooms);
