const minToSek = (minValue) => minValue * 60 + " seconds";

console.log(minToSek(5));

const yearsToDays = (years) => years * 365 + " dienų gyvenate";

console.log(yearsToDays(8));

yearsToDays(26);

const doubbledNumber = (number) => number ** 2;

console.log(doubbledNumber(5));

const trianglePlot = (w, h) => (w * h) / 2;

console.log(trianglePlot(8, 3));

const lastStringValue = (word) => word.charAt(word.length - 1);

console.log(lastStringValue("Graži"));

const lowerText = (text) =>
  text.toLocaleLowerCase().split("").reverse().join("");

console.log(lowerText("Graži"));

const numbers = [-1, -100, -5, 10, 0, 11];

const biggestNegativeNumber = (numbers) =>
  numbers.filter((x) => x < 0).sort((a, b) => b - a)[0];

console.log(biggestNegativeNumber([-15, -100, -5, 10, 0, 11]));

const randomNumbers = (howManyNumbers) => {
  const generatedRandomNumbers = [];
  for (let index = 0; index < howManyNumbers; index++) {
    const randomNumber = Math.round(Math.random() * 10 + 1);
    generatedRandomNumbers.push(randomNumber);
  }
  return generatedRandomNumbers;
};

console.log(randomNumbers(5));

const isSubBiggerThan100 = (x, y) => x + y > 100;

console.log(isSubBiggerThan100(50, 90));

const people = [
  {
    name: "Petras",
    age: 18,
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 18,
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

const sortedPeoplebyAge = people
  .sort((a, b) => (a > b ? 1 : -1))
  .sort((a, b) => a.age - b.age);

console.log(sortedPeoplebyAge);
