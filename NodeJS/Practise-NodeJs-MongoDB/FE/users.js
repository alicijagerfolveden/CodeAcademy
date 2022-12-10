const sortUsers = document.body.querySelector("#sort-users");

const getUsersAsc = async () => {
  const request = await fetch("http://localhost:5000/users/asc");

  const users = await request.json();

  showUsers(users);
};

const getUsersDsc = async () => {
  const request = await fetch("http://localhost:5000/users/dsc");

  const users = await request.json();

  const sortButton = document.querySelector("#sort-users-button");

  sortButton.textContent = "Sorting By Name: DSC";

  showUsers(users);
};

const showUsers = (value) => {
  const usersSection = document.querySelector("#users-section");

  usersSection.replaceChildren();

  const usersBox = document.createElement("div");

  usersBox.setAttribute("class", "memberships-box");

  value.forEach((user) => {
    const userBox = document.createElement("div");
    const userNameSurname = document.createElement("p");
    const userEmail = document.createElement("p");
    const userMembership = document.createElement("p");
    const emailInput = document.createElement("span");
    const membershipInput = document.createElement("span");

    userBox.setAttribute("class", "membership-box");
    userNameSurname.setAttribute("class", "user-name-price");
    userEmail.setAttribute("class", "user-description");
    userMembership.setAttribute("class", "user-description");
    emailInput.setAttribute("class", "user-input");
    membershipInput.setAttribute("class", "user-input");

    emailInput.textContent = `${user.email}`;
    membershipInput.textContent = `${user.service_id}`;

    userNameSurname.textContent = `${user.name} ${user.surname}`;
    userEmail.textContent = `Email Address: `;
    userMembership.textContent = `Membership: `;
    userMembership.append(membershipInput);
    userEmail.append(emailInput);

    userBox.append(userNameSurname, userEmail, userMembership);

    usersBox.append(userBox);
  });

  usersSection.append(usersBox);
};

sortUsers.addEventListener("click", await getUsersDsc());

const users = await getUsersAsc();
