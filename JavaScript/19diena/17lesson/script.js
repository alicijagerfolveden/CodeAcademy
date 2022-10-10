function FullName(name, surname) {
  this.name = name;
  this.surname = surname;
  this.addToTable = function () {
    const nameColumn = document.createElement("td");
    nameColumn.textContent = this.name;
    const surnameColumn = document.createElement("td");
    surnameColumn.textContent = this.surname;
    const tr = document.createElement("tr");
    tr.append(nameColumn, surnameColumn);
    document.querySelector("table > tbody").append(tr);
  };
}

const userInputForm = document.body.querySelector("form");
const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

userInputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.querySelector("input[name=full-name]").value;

  const [name, surname] = fullName
    .split(" ")
    .map((namePart) => capitalize(namePart.trim()));
  console.log(name, surname);
  const person = new FullName(name, surname);
  person.addToTable();
});
