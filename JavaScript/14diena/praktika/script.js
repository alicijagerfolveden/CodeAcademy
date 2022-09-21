// advanced reduce
const items = [
  {
    productName: "Tamsios spalvos akiniai",
  },
  {
    productName: "Sviesios spalvos akiniai",
  },
  {
    productName: "Zalios spalvos akiniai",
  },
  {
    productName: "Geltoni akiniai",
  },
];

const getConcatinatedItems = () => {
  const initialValue = "";
  const concatinatedString = items.reduce(
    (previousValue, currentValue) =>
      `${previousValue} ${currentValue.productName.split(" ")[0]}`,
    ""
  );
  return concatinatedString;
};

console.log(getConcatinatedItems());

// data type methods

const showFormatedNumbers = () => {
  const value = Math.random() * 15;

  console.log(value);

  console.log(value.toFixed(2)); //du skaičiai po kablelio, stringas

  console.log(value.toFixed(0)); // stringas

  console.log(parseInt(value)); //sveikas skaičius, apvalina i mazesne puse, number

  console.log(Math.round(value));
};

showFormatedNumbers();

const showFormatedStrings = () => {
  const value = "Šiandien trečiadienis               ";

  console.log(value);

  console.log(value.split(" ")[1]);

  console.log(`${value.trim()}5`);
  console.log(`${value}5`);
  console.log(value.slice(0, 3));
  console.log(value.toLocaleLowerCase());
  console.log(value.includes("tre"));
  console.log(value.replace("trečia", "ketvirta"));
};

showFormatedStrings();

const showFormatedData = () => {
  const oddNumbers = [1, 2, 3, 4, 5].filter((number) => number % 2 === 1);

  console.log(oddNumbers);
  console.log(
    [1, 2, 3, 4, 5].filter((number) => {
      if (number % 2 === 1) {
        return number;
      }
    })
  );
  const multipliedNumbers = [1, 2, 3, 4, 5].map((number) => number * 2);
  console.log(multipliedNumbers);

  const isPositiveNumbers = [1, 2, 3, -4, 5].every((number) => number > 0);
  console.log(isPositiveNumbers);

  const hasNegativeNumbers = [-1, 2, -4, 4, 5].some((number) => number < 0);
  console.log(hasNegativeNumbers);

  const possibleNegativeNumber = [2, -4, 4, 5].find((number) => number < 0);
  console.log(possibleNegativeNumber);

  [-1, 2, -4, 4, 5].forEach((number) => console.log(number));
};
showFormatedData();
