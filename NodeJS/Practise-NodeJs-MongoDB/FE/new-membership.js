const membershipForm = document.querySelector("#newMembershipForm");

const formSubmitButton = document.querySelector("#formSubmitButton");
membershipForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#membership-name").value;
  const price = document.querySelector("#membership-price").value;
  const description = document.querySelector("#membership-description").value;

  const newMembership = JSON.stringify({
    name: name,
    price: +price,
    description: description,
  });

  await postMembership(newMembership);
});

const postMembership = async (value) => {
  const response = await fetch("http://localhost:5000/memberships", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: value,
  });

  if (response.ok) {
    const responseForUser = document.createElement("h4");

    responseForUser.textContent = "New membership successfully submited";

    membershipForm.append(responseForUser);
  }
};
