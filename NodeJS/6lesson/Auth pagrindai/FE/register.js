const registerForm = document.querySelector("form");

const formSubmitButton = document.querySelector("#formSubmitButton");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("input[name=email]").value;
  const password = document.querySelector("input[name=password]").value;

  const newUser = JSON.stringify({
    email: email,
    password: password,
  });

  postNewUser(newUser);
});

const postNewUser = async (value) => {
  const response = await fetch("http://localhost:5000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: value,
  });

  if (response.ok) {
    const responseForUser = document.createElement("h4");

    responseForUser.textContent = "New user successfully created";

    registerForm.append(responseForUser);
  }
};
