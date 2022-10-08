const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");
const headingElement = document.createElement("h1");
const userCustomColor = prompt("Įveskite savo spalvą");
const colors = ["red", "green", "blue", "yellow"];
let colorChangesTimes = 0;

colors.push(userCustomColor);

productsContainer.style.height = "400px";

colorInput.addEventListener("input", (event) => {
  const userColorValue = event.target.value.trim().toLocaleLowerCase();

  const isValueColor = colors.includes(userColorValue);

  if (isValueColor) {
    colorChangesTimes++;

    headingElement.textContent = `Pakeitė spalvą ${colorChangesTimes}`;

    productsContainer.style.border = `4px dotted ${userColorValue}`;

    document.body.append(headingElement);
  }

  //   kitas variantas. Pirmas geresnis
  switch (userColorValue) {
    case "red":
      console.log("red");
      break;
    case "green":
      console.log("green");
      break;
    case "blue":
      console.log("blue");
      break;
    case "yellow":
      console.log("yellow");
      break;
    default:
      console.log("Nepriimtina spalva");
      break;
  }
});
