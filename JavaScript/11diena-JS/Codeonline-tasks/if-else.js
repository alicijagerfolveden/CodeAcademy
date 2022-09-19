const legalAge = 20;

const clientAge = 10;

console.log(`Kliento amzius ${clientAge}`);

if (legalAge < clientAge) {
    console.log("Pasiekęs");
} else {
    console.log("Nepasiekęs");
}

const myName = "Alicija";

if (myName.length > 6) {
    console.log("Ilgas vardas");
} else {
    console.log("Trumpas vardas");
}

myName.length < 5 ? console.log("Short Name") : console.log("Long Name");

const myAge = 24;

if (myAge > 100 || myAge < 0) {
    console.log("Invalid Age");
} else if (myAge < 18) {
    console.log("Child");
} else if (myAge > 18) {
    console.log("Adult");
}


const car = "Mini";

if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
    console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
    console.log("BMW Group");
} else {
    console.log("Nei vienas");
}

switch (car) {
    case "VW":
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
        console.log("VW Group");
        break;
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.log("BMW Group");
        break;
    default:
        console.log("Nei vienas");
        break;
}

console.log(2021 - myAge);

const userInput = "Morka";

switch (userInput) {
    case "Obuolys":
    case "Kriaušė":
    case "Persikas":
    case "Bananas":
    case "Vynuogės":
        console.log("Vaisius")
        break;
    case "Pomidoras":
    case "Agurkas":
    case "Morka":
    case "Moliūgas":
    case "Svogūnas":
        console.log("Daržovė")
        break;
    default:
        console.log("Nežinomas");
        break;
}

let weekDay = new Date().getDay();

switch (weekDay) {
    case 0:
        weekDay = "Pirmadienis";
        break;
    case 1:
        weekDay = "Antradienis";
        break;
    case 2:
        weekDay = "Trečiadienis";
        break;
    case 3:
        weekDay = "Ketvirtadienis";
        break;
    case 4:
        weekDay = "Penktadienis";
        break;
    case 5:
        weekDay = "Šeštadienis";
        break;
    case 6:
        weekDay = "Sekmadienis";
        break;
}

console.log(weekDay);


const legalAge1 = 18;

const clientAge1 = 17;

clientAge1 > 120 || clientAge1 < 0 ? console.log("Invalid age") : clientAge1 >= legalAge1 ? console.log("Can drive") : console.log("Can't drive");


const phone = "iPhone";

const isIphoneUser = phone === 'iPhone';

console.log(isIphoneUser);

// for (let index = 0; index < 10; index++) {
//     console.log(`${index}. ${myName}`);
// }

// for (let index = 10; index > 0; index--) {
//     console.log(index);
// }

let i = 0;

while (i < 3) {
    console.log(myName);
    i++;
}


let combo = "";
let times = 2;
do {
    combo += myName;
    times--;
} while (times > 0);

console.log(combo);

const number = Math.cos(0);

console.log(number);

const random = Math.floor(Math.random() * 5 + 1);

console.log(random);

const random1 = Math.random() * 7 + 5;

console.log(random1);

if (random === 3) {
    alert("Sveikiname! Jūs laimėjote milijioną!");
} else {
    alert("Jūs nieko nelaimėjote. Bandykite dar kartą.");
}
