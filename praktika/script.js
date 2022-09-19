// const currentRoute = location.pathname;

// const currentURL = location.href;

// console.log(currentRoute);

// console.log(currentURL);

// location.assign("/home");

// callback
// const showAlert = (callback) => {
//   alert();

//   logGreeting();
// };

// const logGreeting = () => {
//   console.log("Nuostabi diena.");
// };

// showAlert();

const productAvailabilityList = [true, true, false, true, false, false];

const availableProducts = productAvailabilityList.filter((product) => product);

console.log({ productAvailabilityList, availableProducts });

// forEach nieko nereturn'ina
const prindOddProducts = () => {
  productAvailabilityList.forEach(
    (product, i) => i % 2 === 1 && console.log(product)
  );
};

prindOddProducts();
// map - forEach'o brolis, kuris returnina
const getRaisedToThePowerOfX = (numbers, x = 2) => {
  return numbers.map((number) => Math.pow(number, x));
};

console.log(getRaisedToThePowerOfX([1, 2, 3], 5));

// find - jei randa, sustoja. Grąžina rastą elementą

console.log([3, 4, 8, 5].find((number) => number === 8));

// some - tikrina, ar yra reikiama reikšmė, grąžina bullean reikšmę
console.log([3, 4, 8, 5].some((number) => number === 8));
console.log([3, 4, 8, 5].some((number) => number === 9));

// every - visi turi atitikti sąlygą. Grąžina true/false
console.log([3, 4, 8, 5].every((number) => number > 0));
console.log([3, 4, 8, 5].every((number) => number !== 5));

// sort - rikiuoja duomenis

const sortAscendingly = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x - y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
};

console.log([-7, 8, 1, 0, -10, 18, 37, -48].sort(sortAscendingly));
console.log(["Kornelija", "Mickus", "Tauras", "Langas"].sort(sortAscendingly));

const cars = [
  {
    name: "BMW",
    engineHorsePower: 1000,
  },
  {
    name: "Tesla",
    engineHorsePower: 2000,
  },
  {
    name: "VW",
    engineHorsePower: 500,
  },
];

const sortCarsByHorsePower = (curCar, nextCar) => {
  console.log({ curCar, nextCar });
  return curCar.engineHorsePower - nextCar.engineHorsePower;
};

console.log(cars.sort(sortCarsByHorsePower));
