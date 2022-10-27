const addRow = (car, tbodyElement, index) => {
  const rowElement = document.createElement("tr");
  const brandTDElement = document.createElement("td");
  const modelTDElement = document.createElement("td");
  const deleteTDElement = document.createElement("td");
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteTDElement.append(deleteButton);

  brandTDElement.textContent = car.brand;

  modelTDElement.textContent = car.model;

  deleteButton.id = `delete${index}car`;

  rowElement.id = `car${index}`;

  rowElement.append(brandTDElement, modelTDElement, deleteTDElement);

  tbodyElement.append(rowElement);
};

export { addRow };
