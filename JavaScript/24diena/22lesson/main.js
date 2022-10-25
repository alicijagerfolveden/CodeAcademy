import { getRobots } from "./modules/getRobots.js";
import { createTable } from "./modules/createTable.js";
import { renderTable } from "./modules/renderTable.js";

const state = {};

const createCheckbox = () => {
  const checkbox = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");

  document.body.querySelector("#form").append(checkbox);

  const checkboxLabel = document.createElement("label");

  checkboxLabel.innerText = "VIP";

  document.body.querySelector("#form").append(checkboxLabel);
};

createCheckbox();

createTable();
const checkboxIsVIP = document.querySelector("input[type=checkbox]");

checkboxIsVIP.addEventListener("change", () => {
  renderTable(
    checkboxIsVIP.checked
      ? state.robots.filter((robot) => robot.vip)
      : state.robots
  );
});

const robots = await getRobots();

renderTable(robots);
