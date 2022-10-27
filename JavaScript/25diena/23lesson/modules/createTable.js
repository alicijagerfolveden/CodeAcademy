import { addRow } from "./addRow.js";

const createElementWithParams = (tagName, params) => {
  const element = document.createElement(tagName);

  Object.assign(element, params);

  return element;
};

const populateTable = (cars, tbodyElement) => {
  cars.forEach((car, index) => {
    addRow(car, tbodyElement, index);
  });
};

const createTable = (cars) => {
  const tableElement = document.createElement("table");
  const theadElement = document.createElement("thead");
  const tbodyElement = document.createElement("tbody");

  const thBrandElement = createElementWithParams("th", {
    textContent: "Brand",
  });
  const thModelElement = createElementWithParams("th", {
    textContent: "Model",
  });

  const thDeleteElement = createElementWithParams("th", {
    textContent: "Delete",
  });

  theadElement.append(thBrandElement, thModelElement, thDeleteElement);

  populateTable(cars, tbodyElement);

  tableElement.append(theadElement, tbodyElement);

  document.body.append(tableElement);
};

export { createTable };
