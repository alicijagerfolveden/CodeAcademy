const newCarForm = document.querySelector("#newCar");

newCarForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const brand = document.querySelector("input[name=brand]").value;
  const model = document.querySelector("input[name=model]").value;

  const newCar = { brand: brand, model: model };
  console.log(newCar);

  const response = await fetch("https://olive-bead-glazer.glitch.me", {
    method: "POST",
    body: JSON.stringify(newCar),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (response.ok) {
    document.querySelector("#successfullySubmitedForm").textContent =
      "Car successfully submited";
  }
});
