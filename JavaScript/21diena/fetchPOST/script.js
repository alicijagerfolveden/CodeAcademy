const truncate = (str, maxlength) => {
  if (str.length < maxlength) {
    console.log(str);
  } else if (str.length >= maxlength) {
    const newStr = str.slice(0, maxlength) + "...";
    console.log(newStr);
  }
};

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);

const extractCurrencyValue = (str) => {
  return +str.slice(1);
};

// alert(extractCurrencyValue("$120"));

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor(styles.length / 2)] = "Classics";

styles.shift();

styles.unshift("Rap", "Reggae");

console.log(styles);

const sumInput = () => {
  const values = [];

  while (true) {
    const value = +prompt("Write number");

    if (value === "" || value === null || !isFinite(value)) break;

    values.push(value);
  }

  const sum = values.reduce((a, b) => a + b);
  alert(sum);
};

// sumInput();

const camelize = (str) => {
  const splited = str.split("-");

  const uppercased = splited.map((value, index) =>
    index > 0 ? value[0].toUpperCase() + value.slice(1) : value
  );

  const result = uppercased.join("");

  console.log(result);
};

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
