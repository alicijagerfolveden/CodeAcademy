function alertName(name) {
  alert(name);
}

function consoleName(name) {
  console.log(name);
}

function coreFunction(name, otherFunction) {
  otherFunction(name.charAt(0).toUpperCase() + name.slice(1));
}

coreFunction("alicija", consoleName);

const cars = ["BMW", "VW", "Audi"];

cars.forEach((value, index) => console.log(`${index}: ${value}`));

const myFriends = ["Agata", "eveLinA", "AnDzHEy", "chesika"];

const myFriends1 = myFriends.map(
  (value) =>
    value.charAt(0).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()
);

console.log(myFriends1);

const years = [6, 25, 81, 26, 32, 53, 18, 22, 15, 3];

console.log(years.filter((v) => v >= 18));

const cities = ["Vilnius", "Klaipėda", "kaunas", "Šiauliai", "Panevėžys"];

console.log(cities.find((x) => x.charAt(0) === "K"));

console.log(cities.some((x) => x.charAt(0) === x.charAt(0).toLowerCase()));

console.log(cities.every((x) => x.charAt(0) === x.charAt(0).toUpperCase()));
