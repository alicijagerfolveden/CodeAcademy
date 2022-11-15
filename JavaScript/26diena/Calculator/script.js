const output = document.querySelector("#output");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const cButton = document.querySelector("#C");
const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");
const multi = document.querySelector("#multi");
const division = document.querySelector("#division");
const result = document.querySelector("#result");

one.addEventListener("click", () => {
  output.textContent += 1;
});

two.addEventListener("click", () => {
  output.textContent += 2;
});

three.addEventListener("click", () => {
  output.textContent += 3;
});

four.addEventListener("click", () => {
  output.textContent += 4;
});

five.addEventListener("click", () => {
  output.textContent += 5;
});

six.addEventListener("click", () => {
  output.textContent += 6;
});

seven.addEventListener("click", () => {
  output.textContent += 7;
});

eight.addEventListener("click", () => {
  output.textContent += 8;
});

nine.addEventListener("click", () => {
  output.textContent += 9;
});

zero.addEventListener("click", () => {
  output.textContent += 0;
});

dot.addEventListener("click", () => {
  output.textContent += ".";
});

cButton.addEventListener("click", () => {
  output.textContent = "";
});

sum.addEventListener("click", () => {
  output.textContent += "+";
});
sub.addEventListener("click", () => {
  output.textContent += "-";
});
multi.addEventListener("click", () => {
  output.textContent += "*";
});
division.addEventListener("click", () => {
  output.textContent += "/";
});

result.addEventListener("click", () => {
  const outputValue = output.value;

  console.log(+outputValue);
  output.textContent = +outputValue;
});
