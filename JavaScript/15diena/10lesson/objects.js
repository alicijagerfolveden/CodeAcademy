const car = {
  doors: 4,
  color: "black",
  brand: "BMW",
};

console.log(car);

document.getElementById("nameSurname").addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();

  const name = document.querySelector("input[name=name").value;

  const surname = document.querySelector("input[name=surname").value;

  const age = Number(document.querySelector("input[name=age").value);

  const isLegalAge = age >= 18;

  const person = {
    name: name,
    surname: surname,
    age: isLegalAge,
  };
  console.log(person);
}
