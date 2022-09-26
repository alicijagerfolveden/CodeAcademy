const nameInBody = document.createElement("h1");
nameInBody.textContent = "Alicija";
nameInBody.style.color = "red";

document.body.append(nameInBody);

const cars = document.createElement("ul");

const carList = document.createElement("li");

const carList1 = document.createElement("li");

const carList2 = document.createElement("li");

carList.textContent = "VW";

carList1.textContent = "Volvo";

carList2.textContent = "Mercedes";

document.body.append(cars);
document.querySelector("ul").append(carList, carList1, carList2);
