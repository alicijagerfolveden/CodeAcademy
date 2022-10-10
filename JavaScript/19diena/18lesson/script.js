class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    return this.age >= 20
      ? `${this.name} is old enough to drink`
      : `${this.name} is not old enough to drink`;
  }
}

const person1 = new Person("Alka", 5);

const person2 = new Person("Andzeyka", 25);

console.log(person1.compareAge());
console.log(person2.compareAge());
