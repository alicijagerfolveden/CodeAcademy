const renderTable = (robots) => {
  const mainTable = document.querySelector("table");
  const tableBody = document.createElement("tbody");

  tableBody.textContent = "";

  robots.forEach((element) => {
    const tableRow = document.createElement("tr");

    const id = document.createElement("td");
    const image = document.createElement("td");
    const imageImg = document.createElement("img");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const city = document.createElement("td");
    const favColor = document.createElement("td");

    id.textContent = element.id;

    imageImg.src = element.image;
    imageImg.alt = "Robots image";

    image.append(imageImg);

    firstName.textContent = element.name.split(" ")[0];

    lastName.textContent = element.name.split(" ")[1];

    city.textContent = element.city;

    favColor.textContent = element.fav_color;

    mainTable.append(tableBody);

    tableBody.append(tableRow);

    tableRow.append(id, image, firstName, lastName, city, favColor);
  });
};

export { renderTable };
