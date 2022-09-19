document.getElementsByClassName("text")[2].textContent = "Sūris";

document.getElementById("name").innerHTML = ("<p>Gerfolveden</p>");

document.querySelector(".bluetext span").textContent = "blue";

const firstLi = document.querySelector("ol li:first-child");

const secondLi = document.querySelector("ol li:nth-child(2)");

const firstText = firstLi.textContent;
const secondText = secondLi.textContent;

document.querySelector("ol li:first-child").textContent = secondText;

document.querySelector("ol li:nth-child(2)").textContent = firstText;


function alertName(name) {
    alert(name);
}

// alertName("Andzhey");


console.log(randomNumber());

function nameLength(name, surname) {
    return name.length + surname.length;
}

console.log(nameLength("Andzhey", "Myaldun"));

function getLetterByIndex(index) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return alphabet[index];
}
console.log(getLetterByIndex(8));


function mathOperation(n1, n2, operator) {
    if (operator === "sum") {
        return n1 + n2;
    } else if (operator === "sub") {
        return n1 - n2;
    } else if (operator === "div") {
        return n1 / n2;
    } else if (operator === "multi") {
        return n1 * n2;
    }
}

console.log(mathOperation(18, 3, "div"));


function randomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}

function squareNumber(number1) {
    return Math.pow(number1, 2);
}

console.log(squareNumber(randomNumber()));


function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}


function min(a, b) {
    return a < b ? a : b;

}
console.log(min(15, 25));

function pow(x, n) {
    return Math.pow(x, n);
}

console.log(pow(1, 100));