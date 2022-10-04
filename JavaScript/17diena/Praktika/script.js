let i = 80;

while (i > 0) {
  const isDividibleByFive = i % 5 === 0;

  if (isDividibleByFive) console.log(i);

  i--;
}

const names = [
  "Jurga",
  "Jonas",
  "Augustas",
  "Simas",
  "Dalia",
  "Martynas",
  "Rokas",
];

names.forEach((name, index) => {
  if (index % 2 === 0) {
    console.log(name);
  }
});

const userNumber = +prompt("Įveskite skaičių");

const randomNumber = Math.round(Math.random() * 1_000);

const magicNumber = randomNumber / userNumber;

console.log(magicNumber);

alert(Math.pow(Math.ceil(magicNumber), 4));
