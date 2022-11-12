const response = await fetch("http://127.0.0.1:8080/cars");
const cars = await response.json();

console.log(cars);

const showCars = (cars) => {
  const ulElement = document.createElement("ul");
  cars.forEach((car) => {
    const textElement = document.createElement("li");

    textElement.textContent = car.name;

    ulElement.append(textElement);
  });

  document.body.append(ulElement);
};

showCars(cars);
