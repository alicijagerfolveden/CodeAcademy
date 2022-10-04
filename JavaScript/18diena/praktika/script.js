const headingElement = document.body.querySelector("#seo-heading");
const firstName = prompt("Jūsų vardas");
const lastNameInput = document.body.querySelector("#last-name-input");
const userDataForm = document.body.querySelector("#user-data-form");

headingElement.textContent = firstName;

lastNameInput.addEventListener("input", (event) => {
  const lastName = event.target.value.trim();

  console.log({ lastName });

  headingElement.textContent = `${firstName} ${lastName}`;
});

lastNameInput.addEventListener("keydown", () => {
  console.log("Pavardės reikšmė pakeista");
});

userDataForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const favoriteNumberInput = document.body.querySelector("#favorite-number");

  console.log(
    `Vartotojo mėgstamiausias skaičius: ${favoriteNumberInput.value}`
  );
});

const onSubmit = (event) => {
  event.preventDefault();
  alert("Successful!");
};
