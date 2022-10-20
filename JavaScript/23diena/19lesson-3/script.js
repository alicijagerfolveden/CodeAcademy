const formForFullName = document.querySelector("form");

formForFullName.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.elements.fullName.value;

  const splitName = fullName.split(" "); //array of name and surname

  const name = splitName[0];
  const surname = splitName[1];

  localStorage.setItem("fullName", splitName);
});

const fullNameFromStorage = localStorage.getItem("fullName");

const putNameToTheTable = (fullName) => {
  const splitedName = fullName.split(",");

  const name = splitedName[0];
  const surname = splitedName[1];

  const tableRow = document.createElement("tr");
  const nameInTable = document.createElement("td");
  const surnameInTable = document.createElement("td");

  nameInTable.textContent = name;

  surnameInTable.textContent = surname;

  tableRow.append(nameInTable, surnameInTable);
  document.querySelector("tbody").append(tableRow);
};

putNameToTheTable(fullNameFromStorage);
