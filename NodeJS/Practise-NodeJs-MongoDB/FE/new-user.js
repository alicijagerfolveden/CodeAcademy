const userForm = document.querySelector("#newUserForm");

const getMemberships = async () => {
  const request = await fetch("http://localhost:5000/memberships");
  const memberships = await request.json();
  console.log(memberships);
  addMemberships(memberships);
};

const addMemberships = (memberships) => {
  const membershipsSelection = document.querySelector("#user-membership");

  memberships.forEach((membership) => {
    const membershipOption = document.createElement("option");

    membershipOption.textContent = membership.name;
    membershipsSelection.append(membershipOption);
  });
  console.log(membershipsSelection);
};

const memberships = await getMemberships();

const formSubmitButton = document.querySelector("#formSubmitButton");
userForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#user-first-name").value;
  const lastName = document.querySelector("#user-last-name").value;
  const email = document.querySelector("#user-email").value;
  const membership = document.querySelector("#user-membership").value;

  const newUser = JSON.stringify({
    name: firstName,
    surname: lastName,
    email: email,
    service_id: membership,
  });

  await postNewUser(newUser);
});

const postNewUser = async (value) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: value,
  });

  if (response.ok) {
    const responseForUser = document.createElement("h4");

    responseForUser.textContent = "New user successfully submited";

    userForm.append(responseForUser);
  }
};
