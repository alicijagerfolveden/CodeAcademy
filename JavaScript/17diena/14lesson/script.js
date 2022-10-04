const myFriends = [
  "Agata",
  "eveLinA",
  "AnDzHEy",
  "Česia",
  "Veslava",
  "Raimund",
];

const myFriends1 = myFriends.map(
  (value) =>
    value.charAt(0).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()
);

myFriends1.sort((a, b) => (b > a ? 1 : -1));

console.log(myFriends1);

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

numbers.sort((a, b) => b - a);

console.log(numbers);

const moreNumbers = [10, 5, 20, 4];

moreNumbers.sort((a, b) => b - a);

console.log(moreNumbers[0]);

const belovedNumbers = [5, 8, 7, 19, 21, 36];

const sumOfBelovedNumbers = belovedNumbers.reduce((a, z) => a + z);

console.log(sumOfBelovedNumbers);

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

const carsWithSmallText = cars.reduce(
  (a, v) => (v.length === 3 ? a + 1 : a),
  0
);

console.log(carsWithSmallText);

const bigNumber = numbers.reduce((a, v) => (v > a ? v : a));

console.log(bigNumber);

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

const adults = people.filter((a) => a.age >= 18);

console.log(adults.map((v) => v.name).sort());

const products = [
  {
    name: "lemonade",
    price: 50,
  },
  { name: "wine", price: 100 },
  {
    name: "brownie",
    price: 15,
  },
  {
    name: "orange",
    price: 2,
  },
  { name: "lime", price: 10 },
];

function mostExpensiveAndCheapest(params) {
  const mostExpensive = products.reduce((a, b) => (a > b.price ? b : a));
  const cheapest = products.reduce((a, b) => (a > b ? a : b));

  console.log(
    `Brangiausias: ${mostExpensive.name}, Pigiausias: ${cheapest.name}`
  );
}

mostExpensiveAndCheapest();
