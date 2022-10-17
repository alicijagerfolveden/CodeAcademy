class Car {
  constructor(brand, model, mileage, price, img) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = img;
  }

  addToList() {
    const card = document.createElement("div");

    card.className = "card";

    card.addEventListener("click", () => alert(`Price: ${this.price}`));

    const img = document.createElement("img");

    img.src = this.image;

    const text = document.createElement("h6");
    text.innerText = `${this.brand} ${this.model}`;

    card.append(img, text);

    document.querySelector("#cars-flexbox").append(card);
  }
}

const userForm = document.querySelector("#car-data");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const brand = document.querySelector("input[name=car-brand]").value;
  const model = document.querySelector("input[name=car-model]").value;
  const mileage = document.querySelector("input[name=mileage]").value;
  const price = document.querySelector("input[name=price]").value;
  const image = document.querySelector("input[name=car-image]").value;

  const newCar = new Car(brand, model, mileage, price, image);

  console.log(newCar);

  newCar.addToList();
});
