const randomNumber = Math.round(Math.random() * 5);
const userInputForm = document.body.querySelector("form");
let counter = 0;
console.log(randomNumber);

userInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInputNumberValue =
    document.body.querySelector("input[name=number]").value;
  counter++;

  if (userInputNumberValue == randomNumber) {
    alert(`Atspėjote iš ${counter} karto`);
  } else {
    alert("Bandykite dar kartą.");
  }
});
