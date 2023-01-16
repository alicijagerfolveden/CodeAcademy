// const { isLoggedIn } = require("../BE/src/middleware");

const loginForm = document.querySelector("form");

const formSubmitButton = document.querySelector("#formSubmitButton");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("input[name=email]").value;
  const password = document.querySelector("input[name=password]").value;

  fetch("http://localhost:5000/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.err) {
        return alert("Incorrect details");
      }
      localStorage.setItem("token", data.token);
      alert("Logged in");
    })
    .catch((err) => console.log(err));
});

// const postUser = async (value) => {
//   const response = await fetch("http://localhost:5000/v1/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: value,
//   });

//   if (response.ok) {
//     const responseForUser = document.createElement("h4");

//     responseForUser.textContent = "Succesfully connencted to your profile";

//     loginForm.append(responseForUser);
//   } else {
//     const responseForUser = document.createElement("h4");

//     responseForUser.textContent = "Check again your email or password";

//     loginForm.append(responseForUser);
//   }
// };
