document.getElementById("bigL").addEventListener("submit", (event) => {
  event.preventDefault();

  const howManyL = Number(document.querySelector("input[name=number]").value);

  const letter = "L";
  let index = 0;
  while (index < howManyL - 1) {
    const oneText = document.createElement("p");

    oneText.textContent = "L";

    document.body.append(oneText);
    index++;
  }

  let combo = "";
  let times = howManyL;
  do {
    combo += letter + " ";
    times--;
  } while (times > 0);

  const oneText = document.createElement("p");

  oneText.textContent = combo;

  document.body.append(oneText);
});

document.getElementById("bigC").addEventListener("submit", (event) => {
  event.preventDefault();

  const howManyC = Number(
    document.querySelector("input[name=numberForC]").value
  );
  const letter = "C";

  let index = 0;

  while (index < howManyC - (howManyC - 1)) {
    const oneText = document.createElement("p");

    oneText.textContent = comboC();

    document.body.append(oneText);
    index++;
  }
  while (index < howManyC - 1) {
    const oneText = document.createElement("p");

    oneText.textContent = letter;

    document.body.append(oneText);
    index++;
  }
  while (index < howManyC) {
    const oneText = document.createElement("p");

    oneText.textContent = comboC();

    document.body.append(oneText);
    index++;
  }

  function comboC() {
    let combo = "";
    let times = howManyC;
    do {
      combo += letter + " ";
      times--;
    } while (times > 0);
    return combo;
  }
});

document.querySelector("input[name=name]").addEventListener("blur", () => {
  const name = document.querySelector("input[name=name]").value;

  const namesList = document.getElementById("outputForNames");

  if (name) {
    namesList.textContent += `${name}, `;
  }
});
