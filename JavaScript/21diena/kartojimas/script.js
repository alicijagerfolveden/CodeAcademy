let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

const getAverageAge = (value) => {
  return value.reduce((a, b) => a + b.age, 0) / value.length;
};

console.log(getAverageAge(arr));

function unique(arr) {
  return arr.filter(); //not done yet
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings));
