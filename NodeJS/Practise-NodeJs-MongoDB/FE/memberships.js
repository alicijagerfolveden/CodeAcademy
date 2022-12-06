const getMemberships = async () => {
  const request = await fetch("http://localhost:5000/memberships");
  const memberships = await request.json();
  return memberships;
};

const showMemberships = (value) => {
  const membershipsBox = document.createElement("div");

  membershipsBox.setAttribute("class", "memberships-box");

  value.forEach((membership) => {
    const membershipBox = document.createElement("div");
    const nameOfMembership = document.createElement("p");
    const descriptionOfMembership = document.createElement("p");
    const deleteButton = document.createElement("button");
    const deleteButtonImg = document.createElement("img");

    membershipBox.setAttribute("class", "membership-box");
    nameOfMembership.setAttribute("class", "membership-name-price");
    descriptionOfMembership.setAttribute("class", "membership-description");
    deleteButton.setAttribute("class", "delete-button");

    nameOfMembership.textContent = `$${membership.price} ${membership.name}`;

    descriptionOfMembership.textContent = `${membership.description}`;

    deleteButtonImg.src = "./icon-trash.png";

    deleteButton.append(deleteButtonImg);

    membershipBox.append(
      nameOfMembership,
      descriptionOfMembership,
      deleteButton
    );

    membershipsBox.append(membershipBox);
  });
  document.querySelector("#memberships").append(membershipsBox);
};

const memberships = await getMemberships();

showMemberships(memberships);
