const isLegalAge = true;

console.log(isLegalAge);

console.log(isLegalAge.toString());

const milkPrice = 2.89;

// Number.isInteger(milkPrice)
//   ? alert(`Jums nereikia centų. Kaina ${milkPrice.toFixed(2)} €`)
//   : alert(`Jums reikia centų. Kaina ${milkPrice.toFixed(2)} €`);

document
  .getElementById("fuelAmountCounter")
  .addEventListener("submit", fuelSumCounter);

function fuelSumCounter(event) {
  event.preventDefault();

  const fuelPrice = Number(document.querySelector("input[name=price]").value);

  const fuelQuantity = Number(
    document.querySelector("input[name=amount]").value
  );

  const fuelSum = (fuelPrice * fuelQuantity).toFixed(2);

  const result = document.createElement("h1");

  result.textContent = `${fuelSum} €`;

  document.body.append(result);
}

document.getElementById("nameNumber").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("input[name=name]").value;

  const number = Number(document.querySelector("input[name=number]").value);

  if (Number.isInteger(number)) {
    const result = document.createElement("h2");

    const showNameNumberTimes = name.repeat(number);

    result.textContent = showNameNumberTimes;

    document.body.append(result);
  } else {
    alert("Parašykite sveiką skaičių");
  }
});
