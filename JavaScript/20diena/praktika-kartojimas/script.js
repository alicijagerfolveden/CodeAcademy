function mathOperation(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;

    case "sub":
      return n1 - n2;

    case "div":
      return n1 / n2;

    case "multi":
      return n1 * n2;

    default:
      alert("pasirinkote neteisingą operatorių");
  }
}

// console.log(mathOperation(10, 5, "multi"));

const getManyRandomNumbers = (howMany) => {
  const generatedNumbers = [];

  for (let index = 0; index < howMany; index++) {
    const generator = Math.round(Math.random() * 10);
    generatedNumbers.push(generator);
  }

  console.log(generatedNumbers);
};

// getManyRandomNumbers(10);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    this.age >= 18 ? alert("Old enough") : alert("Too young");
  }
}

const p1 = new Person("Petras", 18);

console.log(p1.compareAge());
