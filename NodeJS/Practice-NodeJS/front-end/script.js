// const { response } = require("express");

const postFruit = document.querySelector("#post-fruit");

postFruit.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.querySelector("#fruit-name").value;
  const color = document.querySelector("#fruit-color").value;
  const isSweet = document.querySelector("#is-sweet-fruit").checked;

  const newFruit = { name: name, color: color, isSweet: isSweet };

  const response = await fetch("http://localhost:5000/new-fruit", {
    method: "POST",
    body: JSON.stringify(newFruit),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.ok) {
    const responseForUser = document.createElement("h4");

    responseForUser.textContent = "New fruit successfully submited";

    document.body.append(responseForUser);
  }
});
