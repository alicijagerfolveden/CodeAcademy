document
  .getElementById("bonusCounter")
  .addEventListener("submit", calculateBonus);

function calculateBonus(event) {
  event.preventDefault();
  const yearsInCompany = document.querySelector("input[name=years]").value;
  const bonusAmount = 50;
  if (yearsInCompany > 10 && yearsInCompany < 20) {
    document.getElementById("bonus").innerHTML = `Jūs gausite bonusą ${
      bonusAmount + bonusAmount
    } €`;
  } else if (yearsInCompany > 20) {
    document.getElementById("bonus").innerHTML = `Jūs gausite bonusą ${
      bonusAmount * 4
    } €`;
  } else {
    document.getElementById(
      "bonus"
    ).innerHTML = `Jūs gausite bonusą ${bonusAmount} €`;
  }
}

document.getElementById("isLeapYear").addEventListener("submit", isLeapYear);

function isLeapYear(event) {
  event.preventDefault();
  const yearValue = document.querySelector("input[name=year]").value;
  if (yearValue % 4 === 0 || (yearValue % 100 === 0 && yearValue % 400 === 0)) {
    document.getElementById("leapYear").innerHTML = "It is a leap year";
  } else {
    document.getElementById("leapYear").innerHTML = "It is NOT a leap year";
  }
}

document
  .getElementById("temperature")
  .addEventListener("input", celsiusToFarengheit);

function celsiusToFarengheit(event) {
  event.preventDefault();
  const celsiusTemperature = document.querySelector("input[name=number]").value;
  const fahrenheitTemperature = (celsiusTemperature * 1.8 + 32).toFixed(2);
  document.getElementById(
    "showTemperature"
  ).innerHTML = `In fahrenheit ${fahrenheitTemperature}°`;
}

document.getElementById("register").addEventListener("submit", registration);

function registration(event) {
  event.preventDefault();

  const clientEmail = document.querySelector("input[name=email]").value;

  const didAgreeToGetLetters =
    document.getElementById("checkedForNews").checked;

  if (didAgreeToGetLetters) {
    document.querySelector(
      "h4"
    ).innerHTML = `El. paštas ${clientEmail} sėkmingai užregistruotas`;
  } else {
    document.querySelector("h4").innerHTML = "Registracija nesėkminga";
  }
}

document.getElementById("ulNames").addEventListener("submit", showName);

function showName(event) {
  event.preventDefault();

  const name = document.querySelector("input[name=name]").value;

  const howManyNames = document.getElementById("countNames").value;

  document.querySelector("ul").innerHTML = "";

  for (let i = 0; i < howManyNames; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = name;
    document.querySelector("ul").append(listItem);
  }
}

document.getElementById("triangle").addEventListener("submit", getTriangle);

function getTriangle(event) {
  event.preventDefault();

  const numberOfRows = document.querySelector(
    "input[name=numberForTriangle]"
  ).value;

  document.querySelector("div").innerHTML = "";

  let combo = "";
  let times = numberOfRows;

  do {
    const rowElement = document.createElement("div");
    rowElement.innerHTML = combo += "*";
    times--;
    document.getElementById("forTriangle").append(rowElement);
  } while (times > 0);
}
