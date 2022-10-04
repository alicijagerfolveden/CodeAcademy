function Car(brand, model, engine, basePrice) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = basePrice;
  if (this.engine === "electric") {
    this.getPrice = this.basePrice + 10_000;
  } else if (this.engine === "diesel") {
    this.getPrice = this.basePrice + 5_000;
  } else {
    this.getPrice = this.basePrice;
  }
  this.turnOn = () => {
    alert("vrooom");
  };
}

const car1 = new Car("BMW", "X3", "petrol", 50_000);

const car2 = new Car("Volvo", "S60", "diesel", 10_000);

const car3 = new Car("Mercedes", "T60", "electric", 20_000);
